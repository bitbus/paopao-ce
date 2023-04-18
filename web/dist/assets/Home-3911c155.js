import{_ as qe}from"./post-item.vue_vue_type_style_index_0_lang-02b1501b.js";import{_ as Ie}from"./post-skeleton-a5bf805a.js";import{d as Q,r as l,j as X,o as c,c as v,U as $,a as I,L as t,Y as s,K as N,O as q,Z as K,e as z,M as G,F as Y,$ as Z,n as Te,w as Ue}from"./@vue-f70ab1bd.js";import{u as W}from"./vuex-cc1858c6.js";import{l as J}from"./lodash-3329902d.js";import{g as xe,a as Ee,c as Re,b as Le,_ as ze}from"./index-ce5b62d8.js";import{p as Ae}from"./content-16569a30.js";import{V as T,P as S}from"./IEnum-ea67d3af.js";import{I as Pe,V as Se,A as Ne,d as Ve,E as Be}from"./@vicons-fc06a0bb.js";import{o as Oe,v as Me,j as Fe,e as De,w as je,x as He,y as Ke,z as Ge,A as Je,B as Qe,C as Xe,a as Ye,D as Ze,E as We,F as et,G as tt,H as at,I as ot}from"./naive-ui-ddb574dd.js";import{_ as nt}from"./main-nav.vue_vue_type_style_index_0_lang-d6d2ed7f.js";import{b as st,u as lt}from"./vue-router-29025daf.js";import"./formatTime-936c40eb.js";import"./moment-b7869f98.js";import"./copy-to-clipboard-ca358197.js";import"./toggle-selection-93f4ad84.js";import"./axios-707ed124.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-804c4158.js";import"./evtd-b614532e.js";import"./@css-render-66126308.js";import"./vooks-dfdd6eef.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";import"./nonesir-video-29a967e9.js";const it={key:0,class:"compose-wrap"},ut={class:"compose-line"},rt={class:"compose-user"},ct={class:"compose-line compose-options"},pt={class:"attachment"},_t={class:"submit-wrap"},dt={class:"attachment-list-wrap"},mt={key:0,class:"attachment-price-wrap"},vt=I("span",null," 附件价格￥",-1),gt={key:0,class:"eye-wrap"},ft={key:1,class:"link-wrap"},yt={key:1,class:"compose-wrap"},ht=I("div",{class:"login-wrap"},[I("span",{class:"login-banner"}," 登录后，精彩更多")],-1),wt={key:0,class:"login-only-wrap"},bt={key:1,class:"login-wrap"},kt=Q({__name:"compose",emits:["post-success"],setup(ee,{emit:V}){const r=W(),E=l([]),y=l(!1),h=l(!1),f=l(!1),w=l(!1),b=l(""),U=l([]),R=l(),A=l(0),d=l("public/image"),i=l([]),g=l([]),k=l([]),m=l([]),C=l(T.FRIEND),x=l(T.FRIEND),M=[{value:T.PUBLIC,label:"公开"},{value:T.PRIVATE,label:"私密"},{value:T.FRIEND,label:"好友可见"}],P=+"300",B=l("true".toLowerCase()==="true"),F=l("true".toLowerCase()==="true"),O=l("true".toLowerCase()==="true"),te=l("false".toLowerCase()==="true"),ae=l("true".toLowerCase()==="true"),oe="/v1/attachment",H=l(),ne=()=>{f.value=!f.value,f.value&&w.value&&(w.value=!1)},se=()=>{w.value=!w.value,w.value&&f.value&&(f.value=!1)},le=J.debounce(a=>{xe({k:a}).then(e=>{let n=[];e.suggest.map(o=>{n.push({label:o,value:o})}),E.value=n,y.value=!1}).catch(e=>{y.value=!1})},200),ie=J.debounce(a=>{Ee({k:a}).then(e=>{let n=[];e.suggest.map(o=>{n.push({label:o,value:o})}),E.value=n,y.value=!1}).catch(e=>{y.value=!1})},200),ue=(a,e)=>{y.value||(y.value=!0,e==="@"?le(a):ie(a))},re=a=>{a.length>P||(b.value=a)},D=a=>{d.value=a},ce=a=>{i.value=a},pe=async a=>{var e,n,o,u,_,L;return d.value==="public/image"&&!["image/png","image/jpg","image/jpeg","image/gif"].includes((e=a.file.file)==null?void 0:e.type)?(window.$message.warning("图片仅允许 png/jpg/gif 格式"),!1):d.value==="image"&&((n=a.file.file)==null?void 0:n.size)>10485760?(window.$message.warning("图片大小不能超过10MB"),!1):d.value==="public/video"&&!["video/mp4","video/quicktime"].includes((o=a.file.file)==null?void 0:o.type)?(window.$message.warning("视频仅允许 mp4/mov 格式"),!1):d.value==="public/video"&&((u=a.file.file)==null?void 0:u.size)>104857600?(window.$message.warning("视频大小不能超过100MB"),!1):d.value==="attachment"&&!["application/zip"].includes((_=a.file.file)==null?void 0:_.type)?(window.$message.warning("附件仅允许 zip 格式"),!1):d.value==="attachment"&&((L=a.file.file)==null?void 0:L.size)>104857600?(window.$message.warning("附件大小不能超过100MB"),!1):!0},_e=({file:a,event:e})=>{var n;try{let o=JSON.parse((n=e.target)==null?void 0:n.response);o.code===0&&(d.value==="public/image"&&g.value.push({id:a.id,content:o.data.content}),d.value==="public/video"&&k.value.push({id:a.id,content:o.data.content}),d.value==="attachment"&&m.value.push({id:a.id,content:o.data.content}))}catch{window.$message.error("上传失败")}},de=({file:a,event:e})=>{var n;try{let o=JSON.parse((n=e.target)==null?void 0:n.response);if(o.code!==0){let u=o.msg||"上传失败";o.details&&o.details.length>0&&o.details.map(_=>{u+=":"+_}),window.$message.error(u)}}catch{window.$message.error("上传失败")}},me=({file:a})=>{let e=g.value.findIndex(n=>n.id===a.id);e>-1&&g.value.splice(e,1),e=k.value.findIndex(n=>n.id===a.id),e>-1&&k.value.splice(e,1),e=m.value.findIndex(n=>n.id===a.id),e>-1&&m.value.splice(e,1)},ve=()=>{if(b.value.trim().length===0){window.$message.warning("请输入内容哦");return}let{tags:a,users:e}=Ae(b.value);const n=[];let o=100;n.push({content:b.value,type:S.TEXT,sort:o}),g.value.map(u=>{o++,n.push({content:u.content,type:S.IMAGEURL,sort:o})}),k.value.map(u=>{o++,n.push({content:u.content,type:S.VIDEOURL,sort:o})}),m.value.map(u=>{o++,n.push({content:u.content,type:S.ATTACHMENT,sort:o})}),U.value.length>0&&U.value.map(u=>{o++,n.push({content:u,type:S.LINKURL,sort:o})}),h.value=!0,Re({contents:n,tags:Array.from(new Set(a)),users:Array.from(new Set(e)),attachment_price:+A.value*100,visibility:C.value}).then(u=>{var _;window.$message.success("发布成功"),h.value=!1,V("post-success",u),f.value=!1,w.value=!1,(_=R.value)==null||_.clear(),i.value=[],b.value="",U.value=[],g.value=[],k.value=[],m.value=[],C.value=x.value}).catch(u=>{h.value=!1})},j=a=>{r.commit("triggerAuth",!0),r.commit("triggerAuthKey",a)};return X(()=>{"friend".toLowerCase()==="friend"?x.value=T.FRIEND:"friend".toLowerCase()==="public"?x.value=T.PUBLIC:x.value=T.PRIVATE,C.value=x.value,H.value="Bearer "+localStorage.getItem("PAOPAO_TOKEN")}),(a,e)=>{const n=Oe,o=Me,u=Fe,_=De,L=je,ge=He,fe=Ke,ye=Ge,he=Je,we=Qe,be=Xe,ke=Ye,Ce=Ze,$e=We;return c(),v("div",null,[$(r).state.userInfo.id>0?(c(),v("div",it,[I("div",ut,[I("div",rt,[t(n,{round:"",size:30,src:$(r).state.userInfo.avatar},null,8,["src"])]),t(o,{type:"textarea",size:"large",autosize:"",bordered:!1,loading:y.value,value:b.value,prefix:["@","#"],options:E.value,onSearch:ue,"onUpdate:value":re,placeholder:"说说您的新鲜事..."},null,8,["loading","value","options"])]),t(we,{ref_key:"uploadRef",ref:R,abstract:"","list-type":"image",multiple:!0,max:9,action:oe,headers:{Authorization:H.value},data:{type:d.value},onBeforeUpload:pe,onFinish:_e,onError:de,onRemove:me,"onUpdate:fileList":ce},{default:s(()=>[I("div",ct,[I("div",pt,[t(L,{abstract:""},{default:s(({handleClick:p})=>[t(_,{disabled:i.value.length>0&&d.value==="public/video"||i.value.length===9,onClick:()=>{D("public/image"),p()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[t(u,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t($(Pe))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1}),F.value?(c(),N(L,{key:0,abstract:""},{default:s(({handleClick:p})=>[t(_,{disabled:i.value.length>0&&d.value!=="public/video"||i.value.length===9,onClick:()=>{D("public/video"),p()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[t(u,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t($(Se))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):q("",!0),O.value?(c(),N(L,{key:1,abstract:""},{default:s(({handleClick:p})=>[t(_,{disabled:i.value.length>0&&d.value==="public/video"||i.value.length===9,onClick:()=>{D("attachment"),p()},quaternary:"",circle:"",type:"primary"},{icon:s(()=>[t(u,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t($(Ne))]),_:1})]),_:2},1032,["disabled","onClick"])]),_:1})):q("",!0),t(_,{quaternary:"",circle:"",type:"primary",onClick:K(ne,["stop"])},{icon:s(()=>[t(u,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t($(Ve))]),_:1})]),_:1},8,["onClick"]),ae.value?(c(),N(_,{key:2,quaternary:"",circle:"",type:"primary",onClick:K(se,["stop"])},{icon:s(()=>[t(u,{size:"20",color:"var(--primary-color)"},{default:s(()=>[t($(Be))]),_:1})]),_:1},8,["onClick"])):q("",!0)]),I("div",_t,[t(fe,{trigger:"hover",placement:"bottom"},{trigger:s(()=>[t(ge,{class:"text-statistic",type:"circle","show-indicator":!1,status:"success","stroke-width":10,percentage:b.value.length/$(P)*100},null,8,["percentage"])]),default:s(()=>[z(" "+G(b.value.length)+" / "+G($(P)),1)]),_:1}),t(_,{loading:h.value,onClick:ve,type:"primary",secondary:"",round:""},{default:s(()=>[z(" 发布 ")]),_:1},8,["loading"])])]),I("div",dt,[t(ye),m.value.length>0?(c(),v("div",mt,[te.value?(c(),N(he,{key:0,value:A.value,"onUpdate:value":e[0]||(e[0]=p=>A.value=p),min:0,max:1e5,placeholder:"请输入附件价格，0为免费附件"},{prefix:s(()=>[vt]),_:1},8,["value"])):q("",!0)])):q("",!0)])]),_:1},8,["headers","data"]),w.value?(c(),v("div",gt,[t(Ce,{value:C.value,"onUpdate:value":e[1]||(e[1]=p=>C.value=p),name:"radiogroup"},{default:s(()=>[t(ke,null,{default:s(()=>[(c(),v(Y,null,Z(M,p=>t(be,{key:p.value,value:p.value,label:p.label},null,8,["value","label"])),64))]),_:1})]),_:1},8,["value"])])):q("",!0),f.value?(c(),v("div",ft,[t($e,{value:U.value,"onUpdate:value":e[2]||(e[2]=p=>U.value=p),placeholder:"请输入以http(s)://开头的链接",min:0,max:3},{"create-button-default":s(()=>[z(" 创建链接 ")]),_:1},8,["value"])])):q("",!0)])):(c(),v("div",yt,[ht,B.value?q("",!0):(c(),v("div",wt,[t(_,{strong:"",secondary:"",round:"",type:"primary",onClick:e[3]||(e[3]=p=>j("signin"))},{default:s(()=>[z(" 登录 ")]),_:1})])),B.value?(c(),v("div",bt,[t(_,{strong:"",secondary:"",round:"",type:"primary",onClick:e[4]||(e[4]=p=>j("signin"))},{default:s(()=>[z(" 登录 ")]),_:1}),t(_,{strong:"",secondary:"",round:"",type:"info",onClick:e[5]||(e[5]=p=>j("signup"))},{default:s(()=>[z(" 注册 ")]),_:1})])):q("",!0)]))])}}});const Ct={key:0,class:"skeleton-wrap"},$t={key:1},qt={key:0,class:"empty-wrap"},It={key:0,class:"pagination-wrap"},Tt=Q({__name:"Home",setup(ee){const V=W(),r=st(),E=lt(),y=l(!1),h=l([]),f=l(+r.query.p||1),w=l(20),b=l(0),U=Te(()=>{let i="泡泡广场";return r.query&&r.query.q&&(r.query.t&&r.query.t==="tag"?i="#"+decodeURIComponent(r.query.q):i="搜索: "+decodeURIComponent(r.query.q)),i}),R=()=>{y.value=!0,Le({query:r.query.q?decodeURIComponent(r.query.q):null,type:r.query.t,page:f.value,page_size:w.value}).then(i=>{y.value=!1,h.value=i.list,b.value=Math.ceil(i.pager.total_rows/w.value),window.scrollTo(0,0)}).catch(i=>{y.value=!1})},A=i=>{if(f.value!=1){E.push({name:"post",query:{id:i.id}});return}let g=[],k=h.value.length;k==w.value&&k--;for(var m=0;m<k;m++){let C=h.value[m];if(!C.is_top)break;g.push(C)}for(g.push(i);m<k;m++)g.push(h.value[m]);h.value=g},d=i=>{E.push({name:"home",query:{...r.query,p:i}})};return X(()=>{R()}),Ue(()=>({path:r.path,query:r.query,refresh:V.state.refresh}),(i,g)=>{if(i.refresh!==g.refresh){f.value=+r.query.p||1,setTimeout(()=>{R()},0);return}g.path!=="/post"&&i.path==="/"&&(f.value=+r.query.p||1,setTimeout(()=>{R()},0))}),(i,g)=>{const k=nt,m=kt,C=at,x=Ie,M=ot,P=qe,B=et,F=tt;return c(),v("div",null,[t(k,{title:$(U)},null,8,["title"]),t(B,{class:"main-content-wrap",bordered:""},{default:s(()=>[t(C,null,{default:s(()=>[t(m,{onPostSuccess:A})]),_:1}),y.value?(c(),v("div",Ct,[t(x,{num:w.value},null,8,["num"])])):(c(),v("div",$t,[h.value.length===0?(c(),v("div",qt,[t(M,{size:"large",description:"暂无数据"})])):q("",!0),(c(!0),v(Y,null,Z(h.value,O=>(c(),N(C,{key:O.id},{default:s(()=>[t(P,{post:O},null,8,["post"])]),_:2},1024))),128))]))]),_:1}),b.value>0?(c(),v("div",It,[t(F,{page:f.value,"onUpdate:page":d,"page-slot":$(V).state.collapsedRight?5:8,"page-count":b.value},null,8,["page","page-slot","page-count"])])):q("",!0)])}}});const la=ze(Tt,[["__scopeId","data-v-936146f2"]]);export{la as default};
