import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as o}from"./assets/vendor-77e16229.js";o.info({title:"Hello",message:"Welcome!"});const i=document.querySelector(".form");i.addEventListener("submit",e=>{e.preventDefault();const s=parseInt(i.elements.delay.value),r=i.elements.state.value;m(s,r).then(t=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`})}).catch(t=>{o.error({title:"Error",message:`❌ Rejected promise in ${t}ms`})})});function m(e,s){return new Promise((r,t)=>{setTimeout(()=>{s==="fulfilled"?r(e):t(e)},e)})}
//# sourceMappingURL=commonHelpers2.js.map
