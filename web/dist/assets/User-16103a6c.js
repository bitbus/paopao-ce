import{_ as Fe,a as Te}from"./post-item.vue_vue_type_style_index_0_lang-e2c8dabf.js";import{_ as Ie}from"./post-skeleton-ffa76165.js";import{C as Me,_ as D,D as Se,E as qe,B as S,F as Ce,G as We}from"./index-347d1d96.js";import{R as Z,K as ee,S as se,b as ae,e as N,i as te,T as Re,F as Be,G as Oe,j as K,o as Ae,O as De,P as Ne,k as Ve,f as Ee,g as He,I as je,H as Ge}from"./naive-ui-62663ad7.js";import{d as V,r as l,o as u,Q as F,a1 as o,a as p,V as a,e as b,M as y,E as Le,n as Ke,w as Qe,j as Je,c as h,_ as w,O as U,F as Q,a4 as J,s as X}from"./@vue-e0e89260.js";import{_ as Xe}from"./main-nav.vue_vue_type_style_index_0_lang-be35896a.js";import{u as Ye}from"./vuex-473b3783.js";import{b as Ze}from"./vue-router-b8e3382f.js";import{i as es,w as ss,x as Y,y as as,z as ts}from"./@vicons-8f91201d.js";import"./content-72d615e5.js";import"./paopao-video-player-aa5e8b3f.js";import"./formatTime-cdf4e6f1.js";import"./moment-2ab8298d.js";import"./copy-to-clipboard-1dd3075d.js";import"./toggle-selection-93f4ad84.js";import"./axios-4a70c6fc.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-59ca65c3.js";import"./evtd-b614532e.js";import"./@css-render-580d83ec.js";import"./vooks-a50491fd.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";const ns={class:"whisper-wrap"},os={class:"whisper-line"},ls={class:"whisper-line send-wrap"},is=V({__name:"whisper",props:{show:{type:Boolean,default:!1},user:{}},emits:["success"],setup(q,{emit:P}){const d=q,c=l(""),t=l(!1),s=()=>{P("success")},_=()=>{t.value=!0,Me({user_id:d.user.id,content:c.value}).then(r=>{window.$message.success("发送成功"),t.value=!1,c.value="",s()}).catch(r=>{t.value=!1})};return(r,g)=>{const i=Z,m=ee,n=se,f=ae,x=N,$=te;return u(),F($,{show:r.show,"onUpdate:show":s,class:"whisper-card",preset:"card",size:"small",title:"私信","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:o(()=>[p("div",ns,[a(n,{"show-icon":!1},{default:o(()=>[b(" 即将发送私信给: "),a(m,{style:{"max-width":"100%"}},{default:o(()=>[a(i,{type:"success"},{default:o(()=>[b(y(r.user.nickname)+"@"+y(r.user.username),1)]),_:1})]),_:1})]),_:1}),p("div",os,[a(f,{type:"textarea",placeholder:"请输入私信内容（请勿发送不和谐内容，否则将会被封号）",autosize:{minRows:5,maxRows:10},value:c.value,"onUpdate:value":g[0]||(g[0]=z=>c.value=z),maxlength:"200","show-count":""},null,8,["value"])]),p("div",ls,[a(x,{strong:"",secondary:"",type:"primary",loading:t.value,onClick:_},{default:o(()=>[b(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}});const us=D(is,[["__scopeId","data-v-0cbfe47c"]]),cs={class:"whisper-wrap"},rs={class:"whisper-line"},_s={class:"whisper-line send-wrap"},ps=V({__name:"whisper-add-friend",props:{show:{type:Boolean,default:!1},user:{}},emits:["success"],setup(q,{emit:P}){const d=q,c=l(""),t=l(!1),s=()=>{P("success")},_=()=>{t.value=!0,Se({user_id:d.user.id,greetings:c.value}).then(r=>{window.$message.success("发送成功"),t.value=!1,c.value="",s()}).catch(r=>{t.value=!1})};return(r,g)=>{const i=Z,m=ee,n=se,f=ae,x=N,$=te;return u(),F($,{show:r.show,"onUpdate:show":s,class:"whisper-card",preset:"card",size:"small",title:"申请添加朋友","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:o(()=>[p("div",cs,[a(n,{"show-icon":!1},{default:o(()=>[b(" 发送添加朋友申请给: "),a(m,{style:{"max-width":"100%"}},{default:o(()=>[a(i,{type:"success"},{default:o(()=>[b(y(r.user.nickname)+"@"+y(r.user.username),1)]),_:1})]),_:1})]),_:1}),p("div",rs,[a(f,{type:"textarea",placeholder:"请输入真挚的问候语",autosize:{minRows:5,maxRows:10},value:c.value,"onUpdate:value":g[0]||(g[0]=z=>c.value=z),maxlength:"120","show-count":""},null,8,["value"])]),p("div",_s,[a(x,{strong:"",secondary:"",type:"primary",loading:t.value,onClick:_},{default:o(()=>[b(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}});const ds=D(ps,[["__scopeId","data-v-60be56a2"]]),ms={key:0,class:"profile-baseinfo"},vs={class:"avatar"},hs={class:"base-info"},gs={class:"username"},fs={class:"uid"},ws={key:0,class:"user-opts"},bs={key:0,class:"skeleton-wrap"},ks={key:1},ys={key:0,class:"empty-wrap"},Ps={key:1},xs={key:2},$s={key:0,class:"pagination-wrap"},zs=V({__name:"User",setup(q){const P=Re(),d=Ye(),c=Ze(),t=l(!1),s=Le({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!0,status:1}),_=l(!1),r=l(!1),g=l(!1),i=l([]),m=l(c.query.username||""),n=l(+c.query.p||1),f=l("post"),x=l(+c.query.p||1),$=l(1),z=l(1),E=l(1),H=l(1),v=l(20),k=l(0),ne=()=>{switch(f.value){case"post":C();break;case"comment":W();break;case"highlight":R();break;case"media":B();break;case"star":O();break}},C=()=>{t.value=!0,S({username:m.value,style:"post",page:n.value,page_size:v.value}).then(e=>{t.value=!1,i.value=e.list||[],k.value=Math.ceil(e.pager.total_rows/v.value),window.scrollTo(0,0)}).catch(e=>{i.value=[],t.value=!1})},W=()=>{t.value=!0,S({username:m.value,style:"comment",page:n.value,page_size:v.value}).then(e=>{t.value=!1,i.value=e.list||[],k.value=Math.ceil(e.pager.total_rows/v.value),window.scrollTo(0,0)}).catch(e=>{i.value=[],t.value=!1})},R=()=>{t.value=!0,S({username:m.value,style:"highlight",page:n.value,page_size:v.value}).then(e=>{t.value=!1,i.value=e.list||[],k.value=Math.ceil(e.pager.total_rows/v.value),window.scrollTo(0,0)}).catch(e=>{i.value=[],t.value=!1})},B=()=>{t.value=!0,S({username:m.value,style:"media",page:n.value,page_size:v.value}).then(e=>{t.value=!1,i.value=e.list||[],k.value=Math.ceil(e.pager.total_rows/v.value),window.scrollTo(0,0)}).catch(e=>{i.value=[],t.value=!1})},O=()=>{t.value=!0,S({username:m.value,style:"star",page:n.value,page_size:v.value}).then(e=>{t.value=!1,i.value=e.list||[],k.value=Math.ceil(e.pager.total_rows/v.value),window.scrollTo(0,0)}).catch(e=>{i.value=[],t.value=!1})},oe=e=>{switch(f.value=e,f.value){case"post":n.value=x.value,C();break;case"comment":n.value=$.value,W();break;case"highlight":n.value=z.value,R();break;case"media":n.value=E.value,B();break;case"star":n.value=H.value,O();break}},A=()=>{_.value=!0,qe({username:m.value}).then(e=>{_.value=!1,s.id=e.id,s.avatar=e.avatar,s.username=e.username,s.nickname=e.nickname,s.is_admin=e.is_admin,s.is_friend=e.is_friend,s.status=e.status,ne()}).catch(e=>{_.value=!1,console.log(e)})},le=e=>{switch(n.value=e,f.value){case"post":x.value=e,C();break;case"comment":$.value=n.value,W();break;case"highlight":z.value=n.value,R();break;case"media":E.value=n.value,B();break;case"star":H.value=n.value,O();break}},ie=()=>{r.value=!0},ue=()=>{g.value=!0},ce=()=>{r.value=!1},re=()=>{g.value=!1},T=e=>()=>X(K,null,{default:()=>X(e)}),_e=Ke(()=>{let e=[{label:"私信",key:"whisper",icon:T(ss)}];return d.state.userInfo.is_admin&&(s.status===1?e.push({label:"禁言",key:"banned",icon:T(Y)}):e.push({label:"解封",key:"deblocking",icon:T(Y)})),s.is_friend?e.push({label:"删除好友",key:"delete",icon:T(as)}):e.push({label:"添加朋友",key:"requesting",icon:T(ts)}),e}),pe=e=>{switch(e){case"whisper":ie();break;case"delete":de();break;case"requesting":ue();break;case"banned":case"deblocking":me();break}},de=()=>{P.warning({title:"删除好友",content:"将好友 “"+s.nickname+"” 删除，将同时删除 点赞/收藏 列表中关于该朋友的 “好友可见” 推文",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{_.value=!0,Ce({user_id:s.id}).then(e=>{_.value=!1,s.is_friend=!1,C()}).catch(e=>{_.value=!1,console.log(e)})}})},me=()=>{P.warning({title:"警告",content:"确定对该用户进行"+(s.status===1?"禁言":"解封")+"处理吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{_.value=!0,We({id:s.id,status:s.status===1?2:1}).then(e=>{_.value=!1,A()}).catch(e=>{_.value=!1,console.log(e)})}})};return Qe(()=>({path:c.path,query:c.query}),(e,j)=>{j.path==="/user"&&e.path==="/user"&&(m.value=c.query.username||"",A())}),Je(()=>{A()}),(e,j)=>{const ve=Xe,he=Ae,G=De,ge=N,fe=Ne,we=us,be=Ve,I=Ee,ke=He,ye=Ie,Pe=je,xe=Fe,L=Ge,$e=Te,ze=Be,Ue=Oe;return u(),h("div",null,[a(ve,{title:"用户详情"}),a(ze,{class:"main-content-wrap profile-wrap",bordered:""},{default:o(()=>[a(be,{show:_.value},{default:o(()=>[s.id>0?(u(),h("div",ms,[p("div",vs,[a(he,{size:"large",src:s.avatar},null,8,["src"])]),p("div",hs,[p("div",gs,[p("strong",null,y(s.nickname),1),p("span",null," @"+y(s.username),1),w(d).state.userInfo.id>0&&w(d).state.userInfo.username!=s.username&&s.is_friend?(u(),F(G,{key:0,class:"top-tag",type:"info",size:"small",round:""},{default:o(()=>[b(" 好友 ")]),_:1})):U("",!0),s.is_admin?(u(),F(G,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:o(()=>[b(" 管理员 ")]),_:1})):U("",!0)]),p("div",fs,"UID. "+y(s.id),1)]),w(d).state.userInfo.id>0&&w(d).state.userInfo.username!=s.username?(u(),h("div",ws,[a(fe,{placement:"bottom-end",trigger:"click",size:"small",options:_e.value,onSelect:pe},{default:o(()=>[a(ge,{quaternary:"",circle:""},{icon:o(()=>[a(w(K),null,{default:o(()=>[a(w(es))]),_:1})]),_:1})]),_:1},8,["options"])])):U("",!0)])):U("",!0),a(we,{show:r.value,user:s,onSuccess:ce},null,8,["show","user"]),a(ds,{show:g.value,user:s,onSuccess:re},null,8,["show","user"])]),_:1},8,["show"]),a(ke,{class:"profile-tabs-wrap",type:"line",animated:"","onUpdate:value":oe},{default:o(()=>[a(I,{name:"post",tab:"泡泡"}),a(I,{name:"comment",tab:"评论"}),a(I,{name:"highlight",tab:"亮点"}),a(I,{name:"media",tab:"图文"}),a(I,{name:"star",tab:"喜欢"})]),_:1}),t.value?(u(),h("div",bs,[a(ye,{num:v.value},null,8,["num"])])):(u(),h("div",ks,[i.value.length===0?(u(),h("div",ys,[a(Pe,{size:"large",description:"暂无数据"})])):U("",!0),w(d).state.desktopModelShow?(u(),h("div",Ps,[(u(!0),h(Q,null,J(i.value,M=>(u(),F(L,{key:M.id},{default:o(()=>[a(xe,{post:M},null,8,["post"])]),_:2},1024))),128))])):(u(),h("div",xs,[(u(!0),h(Q,null,J(i.value,M=>(u(),F(L,{key:M.id},{default:o(()=>[a($e,{post:M},null,8,["post"])]),_:2},1024))),128))]))]))]),_:1}),k.value>0?(u(),h("div",$s,[a(Ue,{page:n.value,"onUpdate:page":le,"page-slot":w(d).state.collapsedRight?5:8,"page-count":k.value},null,8,["page","page-slot","page-count"])])):U("",!0)])}}});const ta=D(zs,[["__scopeId","data-v-0bc7883f"]]);export{ta as default};
