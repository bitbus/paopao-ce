import{_ as N,a as P}from"./post-item.vue_vue_type_style_index_0_lang-1a52ccee.js";import{_ as S}from"./post-skeleton-13288ccc.js";import{_ as V}from"./main-nav.vue_vue_type_style_index_0_lang-cd96058d.js";import{u as $}from"./vuex-473b3783.js";import{b as Q}from"./vue-router-b8e3382f.js";import{N as R,_ as j}from"./index-6783a73f.js";import{d as q,r as s,j as E,c as o,V as e,a1 as c,_ as g,O as v,o as t,F as f,a4 as h,Q as k}from"./@vue-e0e89260.js";import{F as G,Q as H,H as I,G as L}from"./naive-ui-e703c4e6.js";import"./content-bb4d56ff.js";import"./@vicons-0524c43e.js";import"./paopao-video-player-aa5e8b3f.js";import"./formatTime-4210fcd1.js";import"./moment-2ab8298d.js";import"./copy-to-clipboard-1dd3075d.js";import"./toggle-selection-93f4ad84.js";import"./vooks-a50491fd.js";import"./evtd-b614532e.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-59ca65c3.js";import"./@css-render-580d83ec.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const O={key:0,class:"skeleton-wrap"},T={key:1},U={key:0,class:"empty-wrap"},A={key:1},D={key:2},J={key:0,class:"pagination-wrap"},K=q({__name:"Collection",setup(W){const m=$(),y=Q(),_=s(!1),i=s([]),p=s(+y.query.p||1),l=s(20),r=s(0),u=()=>{_.value=!0,R({page:p.value,page_size:l.value}).then(n=>{_.value=!1,i.value=n.list,r.value=Math.ceil(n.pager.total_rows/l.value),window.scrollTo(0,0)}).catch(n=>{_.value=!1})},w=n=>{p.value=n,u()};return E(()=>{u()}),(n,X)=>{const C=V,b=S,x=I,z=N,d=L,B=P,F=G,M=H;return t(),o("div",null,[e(C,{title:"收藏"}),e(F,{class:"main-content-wrap",bordered:""},{default:c(()=>[_.value?(t(),o("div",O,[e(b,{num:l.value},null,8,["num"])])):(t(),o("div",T,[i.value.length===0?(t(),o("div",U,[e(x,{size:"large",description:"暂无数据"})])):v("",!0),g(m).state.desktopModelShow?(t(),o("div",A,[(t(!0),o(f,null,h(i.value,a=>(t(),k(d,{key:a.id},{default:c(()=>[e(z,{post:a},null,8,["post"])]),_:2},1024))),128))])):(t(),o("div",D,[(t(!0),o(f,null,h(i.value,a=>(t(),k(d,{key:a.id},{default:c(()=>[e(B,{post:a},null,8,["post"])]),_:2},1024))),128))]))]))]),_:1}),r.value>0?(t(),o("div",J,[e(M,{page:p.value,"onUpdate:page":w,"page-slot":g(m).state.collapsedRight?5:8,"page-count":r.value},null,8,["page","page-slot","page-count"])])):v("",!0)])}}});const Mt=j(K,[["__scopeId","data-v-a5302c9b"]]);export{Mt as default};