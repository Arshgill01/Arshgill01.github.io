const ids=["00","01","02","03","04","05","06","07","08"];
const parts=await Promise.all(ids.map(id=>fetch(new URL(`./chunks/${id}.txt`,import.meta.url)).then(r=>{if(!r.ok)throw new Error(`chunk ${id} ${r.status}`);return r.text()})));
const url=URL.createObjectURL(new Blob(parts,{type:"text/javascript"}));
await import(url);
