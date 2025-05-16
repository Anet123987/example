import{a as p,S as g,i as m}from"./assets/vendor-CrlV4O_2.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const h="50174992-a37a037319a3aab3105cbedec",y="https://pixabay.com/api/";async function v(o){const s={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"};try{return(await p.get(y,{params:s})).data}catch(e){throw console.error("Error fetching images:",e),e}}const u=document.querySelector("#gallery"),l=document.querySelector("#loader");let i;function L(o){const s=o.map(({webformatURL:e,largeImageURL:n,tags:t,likes:r,views:a,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${e}" alt="${t}" loading="lazy"/>
        </a>
        <div class="info">
          <div class="info-item">
            <p class="label">Likes</p>
            <p class="value">${r}</p>
          </div>
          <div class="info-item">
            <p class="label">Views</p>
            <p class="value">${a}</p>
          </div>
          <div class="info-item">
            <p class="label">Comments</p>
            <p class="value">${d}</p>
          </div>
          <div class="info-item">
            <p class="label">Downloads</p>
            <p class="value">${f}</p>
          </div>
        </div>
      </li>
    `).join("");u.insertAdjacentHTML("beforeend",s),i?i.refresh():(i=new g(".gallery a",{captionsData:"alt",captionDelay:250,closeText:"✖",close:!0,showCounter:!1}),i.on("show.simplelightbox",function(){const e=document.querySelector(".sl-image");e&&e.classList.remove("sl-image")}),i.on("next.simplelightbox",function(){const e=document.querySelector(".sl-image");e&&e.classList.remove("sl-image")}),i.on("prev.simplelightbox",function(){const e=document.querySelector(".sl-image");e&&e.classList.remove("sl-image")}))}function b(){u&&(u.innerHTML="")}function x(){l&&l.classList.remove("hidden")}function c(){l&&l.classList.add("hidden")}const S=document.querySelector("#search-form");document.querySelector("#gallery");S.addEventListener("submit",async o=>{o.preventDefault();const s=o.target.elements["search-text"].value.trim();if(s){b(),x();try{const e=await v(s);if(e.hits.length===0){m.warning({title:"Oops",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c();return}L(e.hits),c(),o.target.elements["search-text"].value="",o.target.elements["search-text"].focus()}catch{m.error({title:"Error",message:"Failed to fetch images.",position:"topRight"}),c()}}});
//# sourceMappingURL=index.js.map
