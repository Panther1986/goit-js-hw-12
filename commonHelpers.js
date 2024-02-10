import{i as c,S as m}from"./assets/vendor-5b791d57.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function h(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(r){if(r.ep)return;r.ep=!0;const o=h(r);fetch(r.href,o)}})();const p="42127236-8bfdbbfbeed8a2dadaca720e8",g="https://pixabay.com/api/";class y{constructor(){this.userQuery="",this.page=1}async fetchArticles(){const e=await axios.get(`${g}?key=${p}&q=${this.userQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=15`);return this.incrementPage(),e.data}incrementPage(){this.page+=1}resetPage(){this.page=1}get query(){return this.userQuery}set query(e){this.userQuery=e}}document.querySelector(".search-input");const d=document.querySelector(".search-form"),i=document.querySelector(".gallery");document.querySelector("div");const a=document.querySelector('[data-action="load-more"]'),n=new y,L=()=>{const t=document.createElement("span");t.classList.add("loader"),a.append(t)},l=()=>{const t=document.querySelector(".loader");t&&t.remove()};d.addEventListener("submit",b);a.addEventListener("click",S);function b(t){L(),i.innerHTML="",t.preventDefault(),P(),n.userQuery=t.currentTarget.elements.searchQuery.value,n.userQuery.trim()===""&&(c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft",transitionIn:"fadeInLeft"}),l()),v(),n.resetPage(),n.fetchArticles().then(function(e){f(e),e.hits.length===0&&(c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topLeft",transitionIn:"fadeInLeft"}),l())}).catch(function(e){console.log(e)})}function S(){n.fetchArticles().then(function(t){f(t),w(),i.children.length>=t.totalHits&&(c.error({message:"We are sorry, but you have reached the end of search results.",position:"topCenter",transitionIn:"fadeInLeft"}),a.classList.add("is-hidden"))})}function v(){a.classList.remove("is-hidden")}function w(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}function q(t){return t.hits.map(e=>`
            <li class="gallery-item"><a href="${e.largeImageURL}">
          <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}"></a>
          <p>Likes: ${e.likes}</p>
          <p>Views: ${e.views}</p>
          <p>Comments: ${e.comments}</p>
          <p>Downloads: ${e.downloads}</p>
          </li>`).join("")}function f(t){i.insertAdjacentHTML("beforeend",q(t));const e=new m(".gallery a",$);e.on("show.simplelightbox"),e.refresh(),d.reset(),l()}function P(){i.innerHTML=""}const $={captions:!0,captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionSelector:"img",captionDelay:250};
//# sourceMappingURL=commonHelpers.js.map
