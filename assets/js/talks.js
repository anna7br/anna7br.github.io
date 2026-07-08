/* Talks & Presentations from /assets/data/talks.csv
   Columns: category,title,event,location,date
   category = "Talk" (Conference Talks) or "Poster" (Poster Presentations)
   Entries are sorted automatically by date (newest first) — you can list rows
   in any order. Dates are free text (e.g. "30 Apr 2025", "26–27 Feb 2026", "2024"). */
function parseCSV(text){
  const rows=[]; let i=0, field="", row=[], inQ=false;
  text=text.replace(/\r\n?/g,"\n");
  while(i<text.length){
    const c=text[i];
    if(inQ){
      if(c==='"'){ if(text[i+1]==='"'){field+='"';i+=2;continue;} inQ=false;i++;continue; }
      field+=c;i++;continue;
    }
    if(c==='"'){inQ=true;i++;continue;}
    if(c===','){row.push(field);field="";i++;continue;}
    if(c==='\n'){row.push(field);rows.push(row);row=[];field="";i++;continue;}
    field+=c;i++;
  }
  if(field.length||row.length){row.push(field);rows.push(row);}
  return rows.filter(r=>r.some(x=>x.trim()!==""));
}
function escT(s){return (s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
/* turn a human date string into a sortable number: year*10000 + month*100 + day */
function dateKey(s){
  s=(s||"").toLowerCase();
  const ym=s.match(/\b(19|20)\d{2}\b/);
  const year=ym?parseInt(ym[0],10):0;
  const rest=s.replace(/\b(19|20)\d{2}\b/,"");
  const months=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];
  let month=0;
  for(let i=0;i<12;i++){ if(rest.includes(months[i])){ month=i+1; break; } }
  const dm=rest.match(/\d{1,2}/);           // first day (handles ranges like "26–27")
  const day=dm?parseInt(dm[0],10):0;
  return year*10000 + month*100 + day;
}
async function loadTalks(){
  const el=document.getElementById("talks"); if(!el) return;
  try{
    const res=await fetch("/assets/data/talks.csv",{cache:"no-store"});
    if(!res.ok) throw new Error(res.status+" "+res.statusText);
    const rows=parseCSV(await res.text());
    const header=rows.shift().map(h=>h.trim().toLowerCase());
    const col=n=>header.indexOf(n);
    const items=rows.map(r=>({
      category:(r[col("category")]||"").trim(),
      title:(r[col("title")]||"").trim(),
      event:(r[col("event")]||"").trim(),
      location:(r[col("location")]||"").trim(),
      date:(r[col("date")]||"").trim(),
    })).filter(t=>t.title);
    const byDateDesc=(a,b)=>dateKey(b.date)-dateKey(a.date);
    const card=t=>{
      const meta=[t.event,t.location,t.date].filter(Boolean).join(" · ");
      return `<div class="card">${meta?`<p class="card-meta">${escT(meta)}</p>`:""}<h4>${escT(t.title)}</h4></div>`;
    };
    const talks=items.filter(t=>/talk/i.test(t.category)).sort(byDateDesc);
    const posters=items.filter(t=>/poster/i.test(t.category)).sort(byDateDesc);
    let html="";
    if(talks.length)   html+=`<p class="lead">Conference Talks</p>`+talks.map(card).join("");
    if(posters.length) html+=`<p class="lead" style="margin-top:24px">Poster Presentations</p>`+posters.map(card).join("");
    el.innerHTML = html || "<p>No talks listed yet.</p>";
  }catch(e){
    el.innerHTML=`<p class="pub-status error">Couldn't load the talks list (${escT(String(e.message||e))}).</p>`;
  }
}
document.addEventListener("DOMContentLoaded", loadTalks);
