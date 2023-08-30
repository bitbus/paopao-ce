import{p as D,a as F,_ as I,b as A,c as E}from"./content-7dbf66ba.js";import{d as R,c as w,r as Y,e as a,f,k as o,al as G,w as n,j as l,F as J,u as K,y as k,bf as i,A as c,x as p,q as u,Y as r,h as x}from"./@vue-a481fc63.js";import{u as Q}from"./vuex-44de225f.js";import{u as U}from"./vue-router-e5a2430e.js";import{c as W}from"./formatTime-4210fcd1.js";import{c as X}from"./copy-to-clipboard-4ef7d3eb.js";import{i as Z,j as ee,l as te,m as se,o as ne}from"./@vicons-9939c40b.js";import{j as m,o as oe,M as ae,e as ie,O as le,a as ue,L as re}from"./naive-ui-0c25505f.js";const ce={class:"post-item"},pe={class:"nickname-wrap"},_e={class:"username-wrap"},me={class:"timestamp-mobile"},de={class:"item-header-extra"},ve=["innerHTML"],he={class:"opt-item"},ge={class:"opt-item"},ze=R({__name:"mobile-post-item",props:{post:{}},setup(b){const $=b,v=U(),C=Q(),z=s=>()=>x(m,null,{default:()=>x(s)}),T=w(()=>[{label:"复制链接",key:"copyTweetLink",icon:z(ne)}]),q=async s=>{switch(s){case"copyTweetLink":X(`${window.location.origin}/#/post?id=${e.value.id}`),window.$message.success("链接已复制到剪贴板");break}},e=w(()=>{let s=Object.assign({texts:[],imgs:[],videos:[],links:[],attachments:[],charge_attachments:[]},$.post);return s.contents.map(t=>{(+t.type==1||+t.type==2)&&s.texts.push(t),+t.type==3&&s.imgs.push(t),+t.type==4&&s.videos.push(t),+t.type==6&&s.links.push(t),+t.type==7&&s.attachments.push(t),+t.type==8&&s.charge_attachments.push(t)}),s}),h=s=>{v.push({name:"post",query:{id:s}})},O=(s,t)=>{if(s.target.dataset.detail){const _=s.target.dataset.detail.split(":");if(_.length===2){C.commit("refresh"),_[0]==="tag"?v.push({name:"home",query:{q:_[1],t:"tag"}}):v.push({name:"user",query:{s:_[1]}});return}}h(t)};return(s,t)=>{const _=oe,L=Y("router-link"),g=ae,S=ie,j=le,y=F,B=I,M=A,N=E,H=ue,P=re;return a(),f("div",ce,[o(P,{"content-indented":""},G({avatar:n(()=>[o(_,{round:"",size:30,src:e.value.user.avatar},null,8,["src"])]),header:n(()=>[l("span",pe,[o(L,{onClick:t[0]||(t[0]=k(()=>{},["stop"])),class:"username-link",to:{name:"user",query:{s:e.value.user.username}}},{default:n(()=>[c(p(e.value.user.nickname),1)]),_:1},8,["to"])]),l("span",_e," @"+p(e.value.user.username),1),e.value.is_top?(a(),u(g,{key:0,class:"top-tag",type:"warning",size:"small",round:""},{default:n(()=>[c(" 置顶 ")]),_:1})):r("",!0),e.value.visibility==1?(a(),u(g,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:n(()=>[c(" 私密 ")]),_:1})):r("",!0),e.value.visibility==2?(a(),u(g,{key:2,class:"top-tag",type:"info",size:"small",round:""},{default:n(()=>[c(" 好友可见 ")]),_:1})):r("",!0),l("div",null,[l("span",me,p(i(W)(e.value.created_on))+" "+p(e.value.ip_loc),1)])]),"header-extra":n(()=>[l("div",de,[o(j,{placement:"bottom-end",trigger:"click",size:"small",options:T.value,onSelect:q},{default:n(()=>[o(S,{quaternary:"",circle:""},{icon:n(()=>[o(i(m),null,{default:n(()=>[o(i(Z))]),_:1})]),_:1})]),_:1},8,["options"])])]),footer:n(()=>[e.value.attachments.length>0?(a(),u(y,{key:0,attachments:e.value.attachments},null,8,["attachments"])):r("",!0),e.value.charge_attachments.length>0?(a(),u(y,{key:1,attachments:e.value.charge_attachments,price:e.value.attachment_price},null,8,["attachments","price"])):r("",!0),e.value.imgs.length>0?(a(),u(B,{key:2,imgs:e.value.imgs},null,8,["imgs"])):r("",!0),e.value.videos.length>0?(a(),u(M,{key:3,videos:e.value.videos},null,8,["videos"])):r("",!0),e.value.links.length>0?(a(),u(N,{key:4,links:e.value.links},null,8,["links"])):r("",!0)]),action:n(()=>[o(H,{justify:"space-between"},{default:n(()=>[l("div",he,[o(i(m),{size:"18",class:"opt-item-icon"},{default:n(()=>[o(i(ee))]),_:1}),c(" "+p(e.value.upvote_count),1)]),l("div",{class:"opt-item",onClick:t[3]||(t[3]=k(d=>h(e.value.id),["stop"]))},[o(i(m),{size:"18",class:"opt-item-icon"},{default:n(()=>[o(i(te))]),_:1}),c(" "+p(e.value.comment_count),1)]),l("div",ge,[o(i(m),{size:"18",class:"opt-item-icon"},{default:n(()=>[o(i(se))]),_:1}),c(" "+p(e.value.collection_count),1)])]),_:1})]),_:2},[e.value.texts.length>0?{name:"description",fn:n(()=>[l("div",{onClick:t[2]||(t[2]=d=>h(e.value.id))},[(a(!0),f(J,null,K(e.value.texts,d=>(a(),f("span",{key:d.id,class:"post-text",onClick:t[1]||(t[1]=k(V=>O(V,e.value.id),["stop"])),innerHTML:i(D)(d.content).content},null,8,ve))),128))])]),key:"0"}:void 0]),1024)])}}});export{ze as _};
