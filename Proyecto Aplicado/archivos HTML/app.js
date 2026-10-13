const $=s=>document.querySelector(s);
const favs=()=>{try{return JSON.parse(localStorage.getItem("cy_favs")||"[]")}catch(e){return[]}};
const guardarFavs=a=>{try{localStorage.setItem("cy_favs",JSON.stringify(a))}catch(e){}};
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const lugar=e=>[e.sector,e.municipio,e.provincia].filter(Boolean).join(", ");
function tarjeta(e){
  const f=favs().includes(e.id);
  const precio=e.tarifas.length?"Desde RD$ "+Math.min(...e.tarifas.map(t=>t.precio)).toLocaleString("es-DO"):"";
  return `<article class="card">
   <div class="foto">${e.foto?`<img src="${esc(e.foto)}" alt="Fotografía de ${esc(e.nombre)}" loading="lazy">`:"Foto pendiente"}
    <span class="tag">${esc(e.tipo)}</span>
    <button class="fav" data-fav="${e.id}" aria-pressed="${f}" aria-label="${f?"Quitar de":"Guardar en"} favoritos: ${esc(e.nombre)}">${f?"♥":"♡"}</button></div>
   <div class="cuerpo"><h3>${esc(e.nombre)}</h3>
    <div class="meta">${lugar(e)?esc(lugar(e)):'<span class="pend">Ubicación pendiente</span>'}</div>
    <div class="meta">${precio||'<span class="pend">Tarifas pendientes</span>'}</div>
    <div class="meta">${e.servicios.length?esc(e.servicios.slice(0,3).join(" · ")):'<span class="pend">Servicios pendientes</span>'}</div>
    <a class="btn" href="establecimiento.html?id=${e.id}">Ver detalles</a></div></article>`;
}
function pintar(sel,lista,vacio){
  const c=$(sel);
  c.innerHTML=lista.length?lista.map(tarjeta).join(""):`<div class="vacio">${vacio||"No hay establecimientos con esos criterios."}</div>`;
}
document.addEventListener("click",ev=>{
  const b=ev.target.closest("[data-fav]");
  if(b){let a=favs();const id=b.dataset.fav;a=a.includes(id)?a.filter(x=>x!==id):[...a,id];guardarFavs(a);window.refrescar&&window.refrescar();}
  if(ev.target.id==="menuBtn"){const n=$("nav");const o=n.classList.toggle("abierto");ev.target.setAttribute("aria-expanded",o);}
});
function enlaceTel(n){return n?`tel:+${n.replace(/\D/g,"").replace(/^(\d{10})$/,"1$1")}`:null}
function enlaceWA(n,nombre){
  if(!n)return null;
  const m=`Hola, encontré su establecimiento (${nombre}) en CabañasYa. Me gustaría conocer las tarifas y la disponibilidad. ¿Podrían ofrecerme más información?`;
  return `https://wa.me/${n.replace(/\D/g,"")}?text=${encodeURIComponent(m)}`;
}
