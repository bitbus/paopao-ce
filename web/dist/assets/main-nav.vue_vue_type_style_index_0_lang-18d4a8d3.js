import{$ as E}from"./index-08d8af97.js";import{u as N}from"./vuex-473b3783.js";import{u as S}from"./vue-router-b8e3382f.js";import{j as z}from"./vooks-a50491fd.js";import{N as A,O as C,Q as P,R}from"./@vicons-6332ad63.js";import{a3 as D,a4 as V,j as I,e as j,a5 as x,h as H}from"./naive-ui-62663ad7.js";import{d as $,r as h,j as q,o as a,c as f,_ as o,V as e,a1 as t,O as c,a as F,Q as _,e as L,M as Q,F as U}from"./@vue-e0e89260.js";const G={key:0},J={class:"navbar"},oe=$({__name:"main-nav",props:{title:{default:""},back:{type:Boolean,default:!1},theme:{type:Boolean,default:!0}},setup(g){const i=g,n=N(),m=S(),l=h(!1),k=h("left"),u=s=>{s?(localStorage.setItem("PAOPAO_THEME","dark"),n.commit("triggerTheme","dark")):(localStorage.setItem("PAOPAO_THEME","light"),n.commit("triggerTheme","light"))},w=()=>{window.history.length<=1?m.push({path:"/"}):m.go(-1)},v=()=>{l.value=!0};return q(()=>{localStorage.getItem("PAOPAO_THEME")||u(z()==="dark")}),(s,d)=>{const y=E,b=D,O=V,r=I,p=j,M=x,T=H;return a(),f(U,null,[o(n).state.drawerModelShow?(a(),f("div",G,[e(O,{show:l.value,"onUpdate:show":d[0]||(d[0]=B=>l.value=B),width:212,placement:k.value,resizable:""},{default:t(()=>[e(b,null,{default:t(()=>[e(y)]),_:1})]),_:1},8,["show","placement"])])):c("",!0),e(T,{size:"small",bordered:!0,class:"nav-title-card"},{header:t(()=>[F("div",J,[o(n).state.drawerModelShow&&!s.back?(a(),_(p,{key:0,class:"drawer-btn",onClick:v,quaternary:"",circle:"",size:"medium"},{icon:t(()=>[e(r,null,{default:t(()=>[e(o(A))]),_:1})]),_:1})):c("",!0),s.back?(a(),_(p,{key:1,class:"back-btn",onClick:w,quaternary:"",circle:"",size:"small"},{icon:t(()=>[e(r,null,{default:t(()=>[e(o(C))]),_:1})]),_:1})):c("",!0),L(" "+Q(i.title)+" ",1),i.theme?(a(),_(M,{key:2,value:o(n).state.theme==="dark","onUpdate:value":u,size:"small",class:"theme-switch-wrap"},{"checked-icon":t(()=>[e(r,{component:o(P)},null,8,["component"])]),"unchecked-icon":t(()=>[e(r,{component:o(R)},null,8,["component"])]),_:1},8,["value"])):c("",!0)])]),_:1})],64)}}});export{oe as _};
