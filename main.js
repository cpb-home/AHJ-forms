(()=>{var t={562:()=>{function t(t){const e="Lorem ipsum dolor sit amet consectetur adipisicing elit Distinctio error at consequuntur laudantium esse cumque sapiente ab consectetur voluptas corporis placeat ex aspernatur eaque perspiciatis sit autem dolor Amet aspernatur incidunt iusto iste deserunt placeat sint optio dignissimos sunt laboriosam eius eaque magni tenetur pariatur ratione odit nulla hic perspiciatis Enim nihil pariatur ea facilis optio minus magni ipsa ex amet cupiditate obcaecati quos eligendi cumque maiores alias ut tenetur Culpa cum ipsam repellendus maiores itaque dolores quo debitis perspiciatis aspernatur commodi Maiores iste quidem obcaecati facere deserunt temporibus corrupti tenetur optio distinctio officia nihil debitis Doloribus nostrum dolores corporis".split(" ");let o="";for(let i=0;i<t;i++)o+=e[Math.floor(Math.random()*(e.length+1))]+" ";return o}window.addEventListener("DOMContentLoaded",(function(){!function(){const t=document.querySelector("#root"),e=document.createElement("div");e.classList.add("container");for(let t=0;t<25;t++){const o=document.createElement("button");o.type="button",o.classList.add("button"),o.textContent="Показать",o.dataset.id=t,e.append(o)}t.append(e)}(),function(){const e=document.querySelectorAll(".button");e.length>0&&e.forEach((e=>{e.addEventListener("click",(e=>{const o=document.querySelectorAll(".tip");o.length>0&&o.forEach((t=>t.remove())),function(e){const o=document.createElement("div");o.classList.add("tip");const i=document.createElement("h5");i.textContent=t(4);const n=document.createElement("p");n.textContent=t(10),o.append(i),o.append(n),o.style.top=e.target.offsetTop-5-180+"px",o.style.left=e.target.offsetLeft+50-100+"px",document.body.append(o),setTimeout((()=>{o.remove()}),3e3)}(e)}))}))}()}),!1)}},e={};function o(i){var n=e[i];if(void 0!==n)return n.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";o(562)})()})();
//# sourceMappingURL=main.js.map