import{a as g,i as y}from"./assets/vendor-DSJL_ovD.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const v=8;async function b(n=1,t=""){const i="https://sound-wave.b.goit.study/api/artists",s={limit:v,page:n};t&&(s.name=t);try{return(await g.get(i,{params:s})).data}catch(e){throw y.warning({message:`Request error: ${e.message}`,position:"center"}),e}}const L="/img/artists/file-not-found.jpg";function x(n){return n.map(({strArtist:t,strBiographyEN:i,strArtistThumb:s,_id:e,genres:r})=>{const o=r.flatMap(u=>u.split("/")).map(u=>u.trim()),h=[...new Set(o)].map(u=>`<span class="artists-genre">${u}</span>`).join("");return`
        <li class="artists-item" style="max-width:472px; max-height:527px;">
          <div class="artists-box-img">
            <img
              data-id="${e}"
              src="${s||L}"
              alt="${t}"
              class="artists-img"
              loading="lazy"
              width="472"
              height="300"
            />
          </div>
          <div class="artists-box-genres">${h}</div>
          <div class="artists-content">
            <h4 class="artists-name">${t}</h4>
            <p class="artists-descr">${i}</p>
            <button type="button" class="artists-learn-more-btn" aria-label="Learn more about ${t}">
              Learn More
              <svg class="icon-caret-right" width="24" height="24">
                <use href="/artists-hub/assets/sprite-c2qr3u0C.svg#icon-caret-right"></use>
              </svg>
            </button>
          </div>
        </li>
      `}).join("")}const f=document.querySelector(".artists-list"),l=document.querySelector(".pagination"),m=document.querySelector("#search-input"),C=document.querySelector("#search-btn");let a=1,d="";async function p(n=1,t=""){try{const{artists:i,totalArtists:s}=await b(n,t);f.innerHTML=x(i);const e=Math.ceil(s/8);w(e,n)}catch{f.innerHTML="<li>Ошибка загрузки данных</li>"}}function w(n,t){if(l.innerHTML="",n<=1)return;const i=(s,e,r=!1,o=!1)=>{const c=document.createElement("button");c.textContent=s,r&&c.classList.add("active"),o&&(c.disabled=!0),c.addEventListener("click",()=>{e<1||e>n||(a=e,p(a,d))}),l.appendChild(c)};if(i("←",t-1,!1,t===1),n<=5)for(let s=1;s<=n;s++)i(s,s,s===t);else if(t<=3){for(let e=1;e<=3;e++)i(e,e,e===t);const s=document.createElement("span");s.textContent="...",l.appendChild(s),i(n,n,t===n)}else if(t>=n-2){i(1,1,t===1);const s=document.createElement("span");s.textContent="...",l.appendChild(s);for(let e=n-2;e<=n;e++)i(e,e,e===t)}else{i(1,1,!1);const s=document.createElement("span");s.textContent="...",l.appendChild(s),i(t-1,t-1,!1),i(t,t,!0),i(t+1,t+1,!1);const e=document.createElement("span");e.textContent="...",l.appendChild(e),i(n,n,!1)}i("→",t+1,!1,t===n)}C.addEventListener("click",()=>{d=m.value.trim(),a=1,p(a,d)});m.addEventListener("input",n=>{d=n.target.value.trim(),a=1,p(a,d)});p(a,d);
//# sourceMappingURL=index.js.map
