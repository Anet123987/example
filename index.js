import{a as b,i as v}from"./assets/vendor-DSJL_ovD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const L=8;async function x(i=1,t=""){const n="https://sound-wave.b.goit.study/api/artists",e={limit:L,page:i};t&&(e.name=t);try{return(await b.get(n,{params:e})).data}catch(s){throw v.warning({message:`Request error: ${s.message}`,position:"center"}),s}}const w="https://cdn.acowebs.com/wp-content/uploads/2023/10/3acwebs-1-768x442.jpg";function E(i){return i.map(({strArtist:t,strBiographyEN:n,strArtistThumb:e,_id:s,genres:o})=>{const r=o.flatMap(d=>d.split("/")).map(d=>d.trim()),y=[...new Set(r)].map(d=>`<span class="artists-genre">${d}</span>`).join("");let m=n?n.split(`
`)[0]:"";return m.length>150&&(m=m.slice(0,147)+"..."),`
        <li class="artists-item" style="max-width:472px; max-height:527px;">
          <div class="artists-box-img">
            <img
              data-id="${s}"
              src="${e||w}"
              alt="${t}"
              class="artists-img"
              loading="lazy"
              width="472"
              height="300"
            />
          </div>
          <div class="artists-box-genres">${y}</div>
          <div class="artists-content">
            <h4 class="artists-name">${t}</h4>
            <p class="artists-descr">${m}</p>
            <button type="button" class="artists-learn-more-btn" aria-label="Learn more about ${t}">
              Learn More
              <svg class="icon-caret-right" width="24" height="24">
                <use href="/artists-hub/assets/sprite-c2qr3u0C.svg#icon-caret-right"></use>
              </svg>
            </button>
          </div>
        </li>
      `}).join("")}const h=document.querySelector(".artists-list"),c=document.querySelector(".pagination"),T=document.querySelector("#search-input"),l=document.getElementById("modal"),C=document.getElementById("modal-close"),q=document.getElementById("modal-artist-name"),M=document.getElementById("modal-artist-bio");let u=1,p="",g;T.addEventListener("input",i=>{clearTimeout(g),g=setTimeout(()=>{p=i.target.value.trim(),u=1,f(u,p)},300)});async function f(i,t=""){try{const{artists:n,totalArtists:e}=await x(i,t);h.innerHTML=E(n),document.querySelectorAll(".artists-learn-more-btn").forEach((o,r)=>{o.addEventListener("click",()=>{const a=n[r];q.textContent=a.strArtist,M.textContent=a.strBiographyEN||"No biography available.",l.classList.remove("hidden")})});const s=Math.ceil(e/8);N(s,i)}catch{h.innerHTML="<li>Ошибка загрузки данных</li>"}}function N(i,t){if(c.innerHTML="",i<=1)return;const n=(e,s,o=!1,r=!1)=>{const a=document.createElement("button");a.textContent=e,o&&a.classList.add("active"),r&&(a.disabled=!0),a.addEventListener("click",()=>{s<1||s>i||(u=s,f(u,p))}),c.appendChild(a)};if(n("←",t-1,!1,t===1),i<=5)for(let e=1;e<=i;e++)n(e,e,e===t);else if(t<=3){for(let e=1;e<=4;e++)n(e,e,e===t);c.appendChild(document.createTextNode("...")),n(i,i,!1)}else if(t>=i-2){n(1,1,!1),c.appendChild(document.createTextNode("..."));for(let e=i-3;e<=i;e++)n(e,e,e===t)}else n(1,1,!1),c.appendChild(document.createTextNode("...")),n(t-1,t-1),n(t,t,!0),n(t+1,t+1),c.appendChild(document.createTextNode("...")),n(i,i);n("→",t+1,!1,t===i)}C.addEventListener("click",()=>{l.classList.add("hidden")});l.addEventListener("click",i=>{i.target===l&&l.classList.add("hidden")});f(u);
//# sourceMappingURL=index.js.map
