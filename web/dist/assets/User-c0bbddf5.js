import{_ as be}from"./post-item.vue_vue_type_style_index_0_lang-ce942869.js";import{_ as ye}from"./post-skeleton-40e81755.js";import{E as ke,k as G,b5 as xe,c as K,a as Se,e as D,d as L,u as Q,x as B,r as m,y as T,b6 as Ce,h as W,ag as $e,b7 as Te,b8 as Re,q as ze,b9 as Ie,m as P,ba as Ee,z as A,A as Pe,W as b,a6 as U,a5 as p,Z as k,a4 as i,a9 as R,aa as I,bb as Ue,_ as Y,K as F,aN as Z,al as j,bc as Le,bd as Oe,be as We,S as Be,a2 as Fe,Y as $,ai as je,bf as Me,a3 as z,a7 as E,ab as Ne,ac as qe,$ as De,b4 as Ae,bg as Ve,bh as He,ae as Ge,aL as Ke,af as Qe,aM as Ye,aQ as Ze,aR as Je,aS as Xe}from"./index-c17d3913.js";import{u as en,a as nn,_ as tn}from"./Skeleton-ca436747.js";import{_ as J}from"./Alert-e0e350bb.js";import{_ as sn}from"./main-nav.vue_vue_type_style_index_0_lang-d6b3b6a4.js";import{M as an}from"./MoreHorizFilled-6e21ff10.js";import{_ as on}from"./List-28c5febd.js";import{_ as ln}from"./Pagination-84d10fc7.js";import"./content-c9c72716.js";import"./formatTime-09781e30.js";import"./Thing-2157b754.js";const rn=ke({name:"Ellipsis",common:G,peers:{Tooltip:xe}}),cn=rn,un=K("ellipsis",{overflow:"hidden"},[Se("line-clamp",`
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `),D("line-clamp",`
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `),D("cursor-pointer",`
 cursor: pointer;
 `)]);function V(e){return`${e}-ellipsis--line-clamp`}function H(e,l){return`${e}-ellipsis--cursor-${l}`}const dn=Object.assign(Object.assign({},B.props),{expandTrigger:String,lineClamp:[Number,String],tooltip:{type:[Boolean,Object],default:!0}}),X=L({name:"Ellipsis",inheritAttrs:!1,props:dn,setup(e,{slots:l,attrs:c}){const{mergedClsPrefixRef:t}=Q(e),r=B("Ellipsis","-ellipsis",un,cn,e,t),n=m(null),u=m(null),f=m(null),d=m(!1),o=T(()=>{const{lineClamp:a}=e,{value:_}=d;return a!==void 0?{textOverflow:"","-webkit-line-clamp":_?"":a}:{textOverflow:_?"":"ellipsis","-webkit-line-clamp":""}});function h(){let a=!1;const{value:_}=d;if(_)return!0;const{value:g}=n;if(g){const{lineClamp:C}=e;if(x(g),C!==void 0)a=g.scrollHeight<=g.offsetHeight;else{const{value:O}=u;O&&(a=O.getBoundingClientRect().width<=g.getBoundingClientRect().width)}S(g,a)}return a}const v=T(()=>e.expandTrigger==="click"?()=>{var a;const{value:_}=d;_&&((a=f.value)===null||a===void 0||a.setShow(!1)),d.value=!_}:void 0);Ce(()=>{var a;e.tooltip&&((a=f.value)===null||a===void 0||a.setShow(!1))});const w=()=>W("span",Object.assign({},Te(c,{class:[`${t.value}-ellipsis`,e.lineClamp!==void 0?V(t.value):void 0,e.expandTrigger==="click"?H(t.value,"pointer"):void 0],style:o.value}),{ref:"triggerRef",onClick:v.value,onMouseenter:e.expandTrigger==="click"?h:void 0}),e.lineClamp?l:W("span",{ref:"triggerInnerRef"},l));function x(a){if(!a)return;const _=o.value,g=V(t.value);e.lineClamp!==void 0?y(a,g,"add"):y(a,g,"remove");for(const C in _)a.style[C]!==_[C]&&(a.style[C]=_[C])}function S(a,_){const g=H(t.value,"pointer");e.expandTrigger==="click"&&!_?y(a,g,"add"):y(a,g,"remove")}function y(a,_,g){g==="add"?a.classList.contains(_)||a.classList.add(_):a.classList.contains(_)&&a.classList.remove(_)}return{mergedTheme:r,triggerRef:n,triggerInnerRef:u,tooltipRef:f,handleClick:v,renderTrigger:w,getTooltipDisabled:h}},render(){var e;const{tooltip:l,renderTrigger:c,$slots:t}=this;if(l){const{mergedTheme:r}=this;return W($e,Object.assign({ref:"tooltipRef",placement:"top"},l,{getDisabled:this.getTooltipDisabled,theme:r.peers.Tooltip,themeOverrides:r.peerOverrides.Tooltip}),{trigger:c,default:(e=t.tooltip)!==null&&e!==void 0?e:t.default})}else return c()}});function _n(){const e=ze(Ie,null);return e===null&&Re("use-dialog","No outer <n-dialog-provider /> founded."),e}const pn=e=>{const{primaryColor:l,successColor:c,warningColor:t,errorColor:r,infoColor:n,fontWeightStrong:u}=e;return{fontWeight:u,rotate:"252deg",colorStartPrimary:P(l,{alpha:.6}),colorEndPrimary:l,colorStartInfo:P(n,{alpha:.6}),colorEndInfo:n,colorStartWarning:P(t,{alpha:.6}),colorEndWarning:t,colorStartError:P(r,{alpha:.6}),colorEndError:r,colorStartSuccess:P(c,{alpha:.6}),colorEndSuccess:c}},mn={name:"GradientText",common:G,self:pn},fn=mn,gn=K("gradient-text",`
 display: inline-block;
 font-weight: var(--n-font-weight);
 -webkit-background-clip: text;
 background-clip: text;
 color: #0000;
 white-space: nowrap;
 background-image: linear-gradient(var(--n-rotate), var(--n-color-start) 0%, var(--n-color-end) 100%);
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier);
`),hn=Object.assign(Object.assign({},B.props),{size:[String,Number],fontSize:[String,Number],type:{type:String,default:"primary"},color:[Object,String],gradient:[Object,String]}),ee=L({name:"GradientText",props:hn,setup(e){en();const{mergedClsPrefixRef:l,inlineThemeDisabled:c}=Q(e),t=T(()=>{const{type:o}=e;return o==="danger"?"error":o}),r=T(()=>{let o=e.size||e.fontSize;return o&&(o=Ee(o)),o||void 0}),n=T(()=>{const o=e.color||e.gradient;if(typeof o=="string")return o;if(o){const h=o.deg||0,v=o.from,w=o.to;return`linear-gradient(${h}deg, ${v} 0%, ${w} 100%)`}}),u=B("GradientText","-gradient-text",gn,fn,e,l),f=T(()=>{const{value:o}=t,{common:{cubicBezierEaseInOut:h},self:{rotate:v,[A("colorStart",o)]:w,[A("colorEnd",o)]:x,fontWeight:S}}=u.value;return{"--n-bezier":h,"--n-rotate":v,"--n-color-start":w,"--n-color-end":x,"--n-font-weight":S}}),d=c?Pe("gradient-text",T(()=>t.value[0]),f,e):void 0;return{mergedClsPrefix:l,compatibleType:t,styleFontSize:r,styleBgImage:n,cssVars:c?void 0:f,themeClass:d==null?void 0:d.themeClass,onRender:d==null?void 0:d.onRender}},render(){const{mergedClsPrefix:e,onRender:l}=this;return l==null||l(),W("span",{class:[`${e}-gradient-text`,`${e}-gradient-text--${this.compatibleType}-type`,this.themeClass],style:[{fontSize:this.styleFontSize,backgroundImage:this.styleBgImage},this.cssVars]},this.$slots)}}),vn={class:"whisper-wrap"},wn={class:"whisper-line"},bn={class:"whisper-line send-wrap"},yn=L({__name:"whisper",props:{show:{type:Boolean,default:!1},user:null},emits:["success"],setup(e,{emit:l}){const c=e,t=m(""),r=m(!1),n=()=>{l("success")},u=()=>{r.value=!0,Ue({user_id:c.user.id,content:t.value}).then(f=>{window.$message.success("发送成功"),r.value=!1,t.value="",n()}).catch(f=>{r.value=!1})};return(f,d)=>{const o=ee,h=X,v=J,w=Y,x=F,S=Z;return b(),U(S,{show:e.show,"onUpdate:show":n,class:"whisper-card",preset:"card",size:"small",title:"私信","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:p(()=>[k("div",vn,[i(v,{"show-icon":!1},{default:p(()=>[R(" 即将发送私信给: "),i(h,{style:{"max-width":"100%"}},{default:p(()=>[i(o,{type:"success"},{default:p(()=>[R(I(e.user.nickname)+"@"+I(e.user.username),1)]),_:1})]),_:1})]),_:1}),k("div",wn,[i(w,{type:"textarea",placeholder:"请输入私信内容（请勿发送不和谐内容，否则将会被封号）",autosize:{minRows:5,maxRows:10},value:t.value,"onUpdate:value":d[0]||(d[0]=y=>t.value=y),maxlength:"200","show-count":""},null,8,["value"])]),k("div",bn,[i(x,{strong:"",secondary:"",type:"primary",loading:r.value,onClick:u},{default:p(()=>[R(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}});const kn=j(yn,[["__scopeId","data-v-b5f47c62"]]),xn={class:"whisper-wrap"},Sn={class:"whisper-line"},Cn={class:"whisper-line send-wrap"},$n=L({__name:"whisper-add-friend",props:{show:{type:Boolean,default:!1},user:null},emits:["success"],setup(e,{emit:l}){const c=e,t=m(""),r=m(!1),n=()=>{l("success")},u=()=>{r.value=!0,Le({user_id:c.user.id,greetings:t.value}).then(f=>{window.$message.success("发送成功"),r.value=!1,t.value="",n()}).catch(f=>{r.value=!1})};return(f,d)=>{const o=ee,h=X,v=J,w=Y,x=F,S=Z;return b(),U(S,{show:e.show,"onUpdate:show":n,class:"whisper-card",preset:"card",size:"small",title:"申请添加朋友","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:p(()=>[k("div",xn,[i(v,{"show-icon":!1},{default:p(()=>[R(" 发送添加朋友申请给: "),i(h,{style:{"max-width":"100%"}},{default:p(()=>[i(o,{type:"success"},{default:p(()=>[R(I(e.user.nickname)+"@"+I(e.user.username),1)]),_:1})]),_:1})]),_:1}),k("div",Sn,[i(w,{type:"textarea",placeholder:"请输入真挚的问候语",autosize:{minRows:5,maxRows:10},value:t.value,"onUpdate:value":d[0]||(d[0]=y=>t.value=y),maxlength:"120","show-count":""},null,8,["value"])]),k("div",Cn,[i(x,{strong:"",secondary:"",type:"primary",loading:r.value,onClick:u},{default:p(()=>[R(" 发送 ")]),_:1},8,["loading"])])])]),_:1},8,["show"])}}});const Tn=j($n,[["__scopeId","data-v-f53aca56"]]),Rn={key:0,class:"profile-baseinfo"},zn={class:"avatar"},In={class:"base-info"},En={class:"username"},Pn={class:"uid"},Un={key:0,class:"user-opts"},Ln={key:0,class:"pagination-wrap"},On={key:0,class:"skeleton-wrap"},Wn={key:1},Bn={key:0,class:"empty-wrap"},Fn=L({__name:"User",setup(e){Oe();const l=_n(),c=De(),t=je(),r=m(!1),n=We({id:0,avatar:"",username:"",nickname:"",is_admin:!1,is_friend:!0,status:1}),u=m(!1),f=m(!1),d=m(!1),o=m([]),h=m(t.query.username||""),v=m(+t.query.p||1),w=m(20),x=m(0),S=()=>{r.value=!0,Ae({username:h.value,page:v.value,page_size:w.value}).then(s=>{r.value=!1,o.value=s.list,x.value=Math.ceil(s.pager.total_rows/w.value),window.scrollTo(0,0)}).catch(s=>{r.value=!1})},y=()=>{u.value=!0,Me({username:h.value}).then(s=>{u.value=!1,n.id=s.id,n.avatar=s.avatar,n.username=s.username,n.nickname=s.nickname,n.is_admin=s.is_admin,n.is_friend=s.is_friend,n.status=s.status,S()}).catch(s=>{u.value=!1,console.log(s)})},a=s=>{v.value=s,S()},_=()=>{f.value=!0},g=()=>{d.value=!0},C=()=>{f.value=!1},O=()=>{d.value=!1},ne=T(()=>{let s=[{label:"私信",key:"whisper"}];return c.state.userInfo.is_admin&&(n.status===1?s.push({label:"禁言",key:"banned"}):s.push({label:"解封",key:"deblocking"})),n.is_friend?s.push({label:"删除好友",key:"delete"}):s.push({label:"添加朋友",key:"requesting"}),s}),te=s=>{switch(s){case"whisper":_();break;case"delete":se();break;case"requesting":g();break;case"banned":case"deblocking":ae();break}},se=()=>{l.warning({title:"删除好友",content:"将好友 “"+n.nickname+"” 删除，将同时删除 点赞/收藏 列表中关于该朋友的 “好友可见” 推文",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{u.value=!0,Ve({user_id:n.id}).then(s=>{u.value=!1,n.is_friend=!1,S()}).catch(s=>{u.value=!1,console.log(s)})}})},ae=()=>{l.warning({title:"警告",content:"确定对该用户进行"+(n.status===1?"禁言":"解封")+"处理吗？",positiveText:"确定",negativeText:"取消",onPositiveClick:()=>{u.value=!0,He({id:n.id,status:n.status===1?2:1}).then(s=>{u.value=!1,y()}).catch(s=>{u.value=!1,console.log(s)})}})};return Be(()=>({path:t.path,query:t.query}),(s,M)=>{M.path==="/user"&&s.path==="/user"&&(h.value=t.query.username||"",y())}),Fe(()=>{y()}),(s,M)=>{const oe=sn,ie=Ge,N=Ke,le=Qe,re=F,ce=Ye,ue=kn,de=Ze,_e=ln,pe=Je,me=Xe,fe=ye,ge=nn,he=be,ve=tn,we=on;return b(),$("div",null,[i(oe,{title:"用户详情"}),i(we,{class:"main-content-wrap profile-wrap",bordered:""},{footer:p(()=>[x.value>0?(b(),$("div",Ln,[i(_e,{page:v.value,"onUpdate:page":a,"page-slot":z(c).state.collapsedRight?5:8,"page-count":x.value},null,8,["page","page-slot","page-count"])])):E("",!0)]),default:p(()=>[i(de,{show:u.value},{default:p(()=>[n.id>0?(b(),$("div",Rn,[k("div",zn,[i(ie,{size:"large",src:n.avatar},null,8,["src"])]),k("div",In,[k("div",En,[k("strong",null,I(n.nickname),1),k("span",null," @"+I(n.username),1),z(c).state.userInfo.id>0&&z(c).state.userInfo.username!=n.username&&n.is_friend?(b(),U(N,{key:0,class:"top-tag",type:"info",size:"small",round:""},{default:p(()=>[R(" 好友 ")]),_:1})):E("",!0),n.is_admin?(b(),U(N,{key:1,class:"top-tag",type:"error",size:"small",round:""},{default:p(()=>[R(" 管理员 ")]),_:1})):E("",!0)]),k("div",Pn,"UID. "+I(n.id),1)]),z(c).state.userInfo.id>0&&z(c).state.userInfo.username!=n.username?(b(),$("div",Un,[i(ce,{placement:"bottom-end",trigger:"click",size:"small",options:z(ne),onSelect:te},{default:p(()=>[i(re,{quaternary:"",circle:""},{icon:p(()=>[i(le,null,{default:p(()=>[i(z(an))]),_:1})]),_:1})]),_:1},8,["options"])])):E("",!0)])):E("",!0),i(ue,{show:f.value,user:n,onSuccess:C},null,8,["show","user"]),i(Tn,{show:d.value,user:n,onSuccess:O},null,8,["show","user"])]),_:1},8,["show"]),i(me,{class:"profile-tabs-wrap",animated:""},{default:p(()=>[i(pe,{name:"post",tab:"泡泡"})]),_:1}),r.value?(b(),$("div",On,[i(fe,{num:w.value},null,8,["num"])])):(b(),$("div",Wn,[o.value.length===0?(b(),$("div",Bn,[i(ge,{size:"large",description:"暂无数据"})])):E("",!0),(b(!0),$(Ne,null,qe(o.value,q=>(b(),U(ve,{key:q.id},{default:p(()=>[i(he,{post:q},null,8,["post"])]),_:2},1024))),128))]))]),_:1})])}}});const Zn=j(Fn,[["__scopeId","data-v-8cd7572c"]]);export{Zn as default};
