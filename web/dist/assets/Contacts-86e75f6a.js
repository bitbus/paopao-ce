import{u as N,b as P}from"./vue-router-b8e3382f.js";import{b as Q}from"./formatTime-4210fcd1.js";import{d as k,o,c as s,a as e,V as a,M as l,_ as C,r as c,j as R,a1 as f,O as h,F as y,a4 as S,Q as U}from"./@vue-e0e89260.js";import{o as q,F as T,Q as j,H as x,G as E}from"./naive-ui-e703c4e6.js";import{_ as b,Q as G}from"./index-6783a73f.js";import{_ as H}from"./post-skeleton-13288ccc.js";import{_ as L}from"./main-nav.vue_vue_type_style_index_0_lang-cd96058d.js";import{u as O}from"./vuex-473b3783.js";import"./moment-2ab8298d.js";import"./seemly-76b7b838.js";import"./vueuc-59ca65c3.js";import"./evtd-b614532e.js";import"./@css-render-580d83ec.js";import"./vooks-a50491fd.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./axios-4a70c6fc.js";import"./@vicons-0524c43e.js";/* empty css               */const A={class:"avatar"},J={class:"base-info"},K={class:"username"},W={class:"user-info"},X={class:"info-item"},Y={class:"info-item"},Z=k({__name:"contact-item",props:{contact:{}},setup(w){const u=N(),m=t=>{u.push({name:"user",query:{s:t}})};return(t,n)=>{const _=q;return o(),s("div",{class:"contact-item",onClick:n[0]||(n[0]=i=>m(t.contact.username))},[e("div",A,[a(_,{size:54,src:t.contact.avatar},null,8,["src"])]),e("div",J,[e("div",K,[e("strong",null,l(t.contact.nickname),1),e("span",null," @"+l(t.contact.username),1)]),e("div",W,[e("span",X,"UID. "+l(t.contact.user_id),1),e("span",Y,l(C(Q)(t.contact.created_on))+" 加入",1)])])])}}});const tt=b(Z,[["__scopeId","data-v-644d2c15"]]),et={key:0,class:"skeleton-wrap"},ot={key:1},nt={key:0,class:"empty-wrap"},st={key:0,class:"pagination-wrap"},at=k({__name:"Contacts",setup(w){const u=O(),m=P(),t=c(!1),n=c([]),_=c(+m.query.p||1),i=c(20),d=c(0),$=r=>{_.value=r,v()};R(()=>{v()});const v=(r=!1)=>{n.value.length===0&&(t.value=!0),G({page:_.value,page_size:i.value}).then(p=>{t.value=!1,n.value=p.list,d.value=Math.ceil(p.pager.total_rows/i.value),r&&setTimeout(()=>{window.scrollTo(0,99999)},50)}).catch(p=>{t.value=!1})};return(r,p)=>{const z=L,B=H,I=x,V=tt,D=E,F=T,M=j;return o(),s(y,null,[e("div",null,[a(z,{title:"好友"}),a(F,{class:"main-content-wrap",bordered:""},{default:f(()=>[t.value?(o(),s("div",et,[a(B,{num:i.value},null,8,["num"])])):(o(),s("div",ot,[n.value.length===0?(o(),s("div",nt,[a(I,{size:"large",description:"暂无数据"})])):h("",!0),(o(!0),s(y,null,S(n.value,g=>(o(),U(D,{key:g.user_id},{default:f(()=>[a(V,{contact:g},null,8,["contact"])]),_:2},1024))),128))]))]),_:1})]),d.value>0?(o(),s("div",st,[a(M,{page:_.value,"onUpdate:page":$,"page-slot":C(u).state.collapsedRight?5:8,"page-count":d.value},null,8,["page","page-slot","page-count"])])):h("",!0)],64)}}});const Mt=b(at,[["__scopeId","data-v-3b2bf978"]]);export{Mt as default};