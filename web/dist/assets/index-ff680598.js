import{d as z,r as R,D as Z,j,o as v,P as D,a0 as a,a as k,U as o,c as T,e as S,O as q,a1 as N,N as U,Z as h,n as Q,w as H,a2 as ae,F as J,a3 as X,L as $,s as P,a4 as he,Q as Y,K as ge,a5 as fe}from"./@vue-d002002f.js";import{c as ve,a as we,u as le,b as ye}from"./vue-router-29e6667f.js";import{c as ke,u as B}from"./vuex-4d2f7b35.js";import{a as be}from"./axios-4a70c6fc.js";import{_ as Pe,N as Le,a as ue,b as ce,c as Oe,d as Ae,e as ie,f as Te,g as Re,h as de,i as Ce,j as F,k as Ee,u as Ie,l as $e,m as Se,n as Ue,o as Me,p as Ke,q as qe,r as Ne,s as De,t as xe}from"./naive-ui-d02aa0d7.js";import{S as Fe,M as Ve,L as ze,C as Be,B as We,P as He,W as je,a as Qe,H as ee,b as te,c as oe}from"./@vicons-4022100b.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-0232e3b9.js";import"./evtd-b614532e.js";import"./@css-render-6b6cdab1.js";import"./vooks-77bdadbd.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))i(c);new MutationObserver(c=>{for(const n of c)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&i(m)}).observe(document,{childList:!0,subtree:!0});function l(c){const n={};return c.integrity&&(n.integrity=c.integrity),c.referrerPolicy&&(n.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?n.credentials="include":c.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(c){if(c.ep)return;c.ep=!0;const n=l(c);fetch(c.href,n)}})();const Ge="modulepreload",Ze=function(e){return"/"+e},se={},A=function(t,l,i){if(!l||l.length===0)return t();const c=document.getElementsByTagName("link");return Promise.all(l.map(n=>{if(n=Ze(n),n in se)return;se[n]=!0;const m=n.endsWith(".css"),d=m?'[rel="stylesheet"]':"";if(!!i)for(let b=c.length-1;b>=0;b--){const _=c[b];if(_.href===n&&(!m||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${d}`))return;const g=document.createElement("link");if(g.rel=m?"stylesheet":Ge,m||(g.as="script",g.crossOrigin=""),g.href=n,document.head.appendChild(g),m)return new Promise((b,_)=>{g.addEventListener("load",b),g.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},Je=[{path:"/",name:"home",meta:{title:"广场",keepAlive:!0},component:()=>A(()=>import("./Home-99db4d92.js"),["assets/Home-99db4d92.js","assets/post-item.vue_vue_type_style_index_0_lang-7c874df8.js","assets/content-d4af862e.js","assets/@vue-d002002f.js","assets/@vicons-4022100b.js","assets/naive-ui-d02aa0d7.js","assets/seemly-76b7b838.js","assets/vueuc-0232e3b9.js","assets/evtd-b614532e.js","assets/@css-render-6b6cdab1.js","assets/vooks-77bdadbd.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/paopao-video-player-d47e9bf6.js","assets/content-2fda112b.css","assets/vuex-4d2f7b35.js","assets/vue-router-29e6667f.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/copy-to-clipboard-1dd3075d.js","assets/toggle-selection-93f4ad84.js","assets/post-item-593ff254.css","assets/post-skeleton-af959eab.js","assets/post-skeleton-f1900002.css","assets/lodash-94eb5868.js","assets/IEnum-a180d93e.js","assets/main-nav.vue_vue_type_style_index_0_lang-832b7340.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Home-c075a37e.css","assets/vfonts-7afd136d.css"])},{path:"/post",name:"post",meta:{title:"话题详情"},component:()=>A(()=>import("./Post-42da50a2.js"),["assets/Post-42da50a2.js","assets/@vue-d002002f.js","assets/vuex-4d2f7b35.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/IEnum-a180d93e.js","assets/@vicons-4022100b.js","assets/naive-ui-d02aa0d7.js","assets/seemly-76b7b838.js","assets/vueuc-0232e3b9.js","assets/evtd-b614532e.js","assets/@css-render-6b6cdab1.js","assets/vooks-77bdadbd.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/content-d4af862e.js","assets/paopao-video-player-d47e9bf6.js","assets/content-2fda112b.css","assets/vue-router-29e6667f.js","assets/post-skeleton-af959eab.js","assets/post-skeleton-f1900002.css","assets/lodash-94eb5868.js","assets/copy-to-clipboard-1dd3075d.js","assets/toggle-selection-93f4ad84.js","assets/main-nav.vue_vue_type_style_index_0_lang-832b7340.js","assets/main-nav-3ef9bae6.css","assets/v3-infinite-loading-58f64a4e.js","assets/v3-infinite-loading-7d241236.css","assets/axios-4a70c6fc.js","assets/Post-00695942.css","assets/vfonts-7afd136d.css"])},{path:"/topic",name:"topic",meta:{title:"话题"},component:()=>A(()=>import("./Topic-467e0970.js"),["assets/Topic-467e0970.js","assets/@vicons-4022100b.js","assets/@vue-d002002f.js","assets/naive-ui-d02aa0d7.js","assets/seemly-76b7b838.js","assets/vueuc-0232e3b9.js","assets/evtd-b614532e.js","assets/@css-render-6b6cdab1.js","assets/vooks-77bdadbd.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav.vue_vue_type_style_index_0_lang-832b7340.js","assets/vuex-4d2f7b35.js","assets/vue-router-29e6667f.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Topic-8dbcebb5.css","assets/vfonts-7afd136d.css"])},{path:"/anouncement",name:"anouncement",meta:{title:"公告"},component:()=>A(()=>import("./Anouncement-555d6b96.js"),["assets/Anouncement-555d6b96.js","assets/post-skeleton-af959eab.js","assets/naive-ui-d02aa0d7.js","assets/seemly-76b7b838.js","assets/@vue-d002002f.js","assets/vueuc-0232e3b9.js","assets/evtd-b614532e.js","assets/@css-render-6b6cdab1.js","assets/vooks-77bdadbd.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-832b7340.js","assets/vuex-4d2f7b35.js","assets/vue-router-29e6667f.js","assets/@vicons-4022100b.js","assets/main-nav-3ef9bae6.css","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/axios-4a70c6fc.js","assets/Anouncement-662e2d95.css","assets/vfonts-7afd136d.css"])},{path:"/profile",name:"profile",meta:{title:"主页"},component:()=>A(()=>import("./Profile-8f57060d.js"),["assets/Profile-8f57060d.js","assets/post-item.vue_vue_type_style_index_0_lang-7c874df8.js","assets/content-d4af862e.js","assets/@vue-d002002f.js","assets/@vicons-4022100b.js","assets/naive-ui-d02aa0d7.js","assets/seemly-76b7b838.js","assets/vueuc-0232e3b9.js","assets/evtd-b614532e.js","assets/@css-render-6b6cdab1.js","assets/vooks-77bdadbd.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/paopao-video-player-d47e9bf6.js","assets/content-2fda112b.css","assets/vuex-4d2f7b35.js","assets/vue-router-29e6667f.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/copy-to-clipboard-1dd3075d.js","assets/toggle-selection-93f4ad84.js","assets/post-item-593ff254.css","assets/post-skeleton-af959eab.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-832b7340.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Profile-87e8712d.css","assets/vfonts-7afd136d.css"])},{path:"/user",name:"user",meta:{title:"用户详情"},component:()=>A(()=>import("./User-4141fab5.js"),["assets/User-4141fab5.js","assets/post-item.vue_vue_type_style_index_0_lang-7c874df8.js","assets/content-d4af862e.js","assets/@vue-d002002f.js","assets/@vicons-4022100b.js","assets/naive-ui-d02aa0d7.js","assets/seemly-76b7b838.js","assets/vueuc-0232e3b9.js","assets/evtd-b614532e.js","assets/@css-render-6b6cdab1.js","assets/vooks-77bdadbd.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/paopao-video-player-d47e9bf6.js","assets/content-2fda112b.css","assets/vuex-4d2f7b35.js","assets/vue-router-29e6667f.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/copy-to-clipboard-1dd3075d.js","assets/toggle-selection-93f4ad84.js","assets/post-item-593ff254.css","assets/post-skeleton-af959eab.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-832b7340.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/User-dfc90f68.css","assets/vfonts-7afd136d.css"])},{path:"/messages",name:"messages",meta:{title:"消息"},component:()=>A(()=>import("./Messages-d5995867.js"),["assets/Messages-d5995867.js","assets/@vue-d002002f.js","assets/vue-router-29e6667f.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/@vicons-4022100b.js","assets/naive-ui-d02aa0d7.js","assets/seemly-76b7b838.js","assets/vueuc-0232e3b9.js","assets/evtd-b614532e.js","assets/@css-render-6b6cdab1.js","assets/vooks-77bdadbd.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav.vue_vue_type_style_index_0_lang-832b7340.js","assets/vuex-4d2f7b35.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Messages-7ed31ecd.css","assets/vfonts-7afd136d.css"])},{path:"/collection",name:"collection",meta:{title:"收藏"},component:()=>A(()=>import("./Collection-004c869e.js"),["assets/Collection-004c869e.js","assets/post-item.vue_vue_type_style_index_0_lang-7c874df8.js","assets/content-d4af862e.js","assets/@vue-d002002f.js","assets/@vicons-4022100b.js","assets/naive-ui-d02aa0d7.js","assets/seemly-76b7b838.js","assets/vueuc-0232e3b9.js","assets/evtd-b614532e.js","assets/@css-render-6b6cdab1.js","assets/vooks-77bdadbd.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/paopao-video-player-d47e9bf6.js","assets/content-2fda112b.css","assets/vuex-4d2f7b35.js","assets/vue-router-29e6667f.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/copy-to-clipboard-1dd3075d.js","assets/toggle-selection-93f4ad84.js","assets/post-item-593ff254.css","assets/post-skeleton-af959eab.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-832b7340.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Collection-b97b3cf7.css","assets/vfonts-7afd136d.css"])},{path:"/contacts",name:"contacts",meta:{title:"好友"},component:()=>A(()=>import("./Contacts-b5d93513.js"),["assets/Contacts-b5d93513.js","assets/vue-router-29e6667f.js","assets/@vue-d002002f.js","assets/naive-ui-d02aa0d7.js","assets/seemly-76b7b838.js","assets/vueuc-0232e3b9.js","assets/evtd-b614532e.js","assets/@css-render-6b6cdab1.js","assets/vooks-77bdadbd.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-af959eab.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-832b7340.js","assets/vuex-4d2f7b35.js","assets/@vicons-4022100b.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Contacts-b60e5e0d.css","assets/vfonts-7afd136d.css"])},{path:"/wallet",name:"wallet",meta:{title:"钱包"},component:()=>A(()=>import("./Wallet-992dfbd0.js"),["assets/Wallet-992dfbd0.js","assets/post-skeleton-af959eab.js","assets/naive-ui-d02aa0d7.js","assets/seemly-76b7b838.js","assets/@vue-d002002f.js","assets/vueuc-0232e3b9.js","assets/evtd-b614532e.js","assets/@css-render-6b6cdab1.js","assets/vooks-77bdadbd.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-832b7340.js","assets/vuex-4d2f7b35.js","assets/vue-router-29e6667f.js","assets/@vicons-4022100b.js","assets/main-nav-3ef9bae6.css","assets/qrcode-bd5089a5.js","assets/encode-utf8-f813de00.js","assets/dijkstrajs-f906a09e.js","assets/formatTime-000dbebb.js","assets/moment-b7869f98.js","assets/axios-4a70c6fc.js","assets/Wallet-77044929.css","assets/vfonts-7afd136d.css"])},{path:"/setting",name:"setting",meta:{title:"设置"},component:()=>A(()=>import("./Setting-275ddb43.js"),["assets/Setting-275ddb43.js","assets/main-nav.vue_vue_type_style_index_0_lang-832b7340.js","assets/vuex-4d2f7b35.js","assets/@vue-d002002f.js","assets/vue-router-29e6667f.js","assets/vooks-77bdadbd.js","assets/evtd-b614532e.js","assets/@vicons-4022100b.js","assets/naive-ui-d02aa0d7.js","assets/seemly-76b7b838.js","assets/vueuc-0232e3b9.js","assets/@css-render-6b6cdab1.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/Setting-bfd24152.css","assets/vfonts-7afd136d.css"])},{path:"/404",name:"404",meta:{title:"404"},component:()=>A(()=>import("./404-7b417834.js"),["assets/404-7b417834.js","assets/main-nav.vue_vue_type_style_index_0_lang-832b7340.js","assets/vuex-4d2f7b35.js","assets/@vue-d002002f.js","assets/vue-router-29e6667f.js","assets/vooks-77bdadbd.js","assets/evtd-b614532e.js","assets/@vicons-4022100b.js","assets/naive-ui-d02aa0d7.js","assets/seemly-76b7b838.js","assets/vueuc-0232e3b9.js","assets/@css-render-6b6cdab1.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav-3ef9bae6.css","assets/axios-4a70c6fc.js","assets/404-020b2afd.css","assets/vfonts-7afd136d.css"])},{path:"/:pathMatch(.*)",redirect:"/404"}],pe=ve({history:we(),routes:Je});pe.beforeEach((e,t,l)=>{document.title=`${e.meta.title} | 泡泡 - 一个清新文艺的微社区`,l()});const Xe=ke({state:{refresh:Date.now(),refreshTopicFollow:Date.now(),theme:localStorage.getItem("PAOPAO_THEME"),collapsedLeft:document.body.clientWidth<=821,collapsedRight:document.body.clientWidth<=821,drawerModelShow:document.body.clientWidth<=821,desktopModelShow:document.body.clientWidth>821,authModalShow:!1,authModelTab:"signin",userLogined:!1,userInfo:{id:0,username:"",nickname:""}},mutations:{refresh(e,t){e.refresh=t||Date.now()},refreshTopicFollow(e){e.refreshTopicFollow=Date.now()},triggerTheme(e,t){e.theme=t},triggerAuth(e,t){e.authModalShow=t},triggerAuthKey(e,t){e.authModelTab=t},triggerCollapsedLeft(e,t){e.collapsedLeft=t,e.drawerModelShow=t,e.desktopModelShow=!t},triggerCollapsedRight(e,t){e.collapsedRight=t},updateUserinfo(e,t){e.userInfo=t,e.userInfo.id>0&&(e.userLogined=!0)},userLogout(e){localStorage.removeItem("PAOPAO_TOKEN"),e.userInfo={id:0,nickname:"",username:""},e.userLogined=!1}},actions:{},modules:{}}),G=be.create({baseURL:"",timeout:3e4});G.interceptors.request.use(e=>(localStorage.getItem("PAOPAO_TOKEN")&&(e.headers.Authorization="Bearer "+localStorage.getItem("PAOPAO_TOKEN")),e),e=>Promise.reject(e));G.interceptors.response.use(e=>{const{data:t={},code:l=0}=(e==null?void 0:e.data)||{};if(+l==0)return t||{};Promise.reject((e==null?void 0:e.data)||{})},(e={})=>{var l;const{response:t={}}=e||{};return+(t==null?void 0:t.status)==401?(localStorage.removeItem("PAOPAO_TOKEN"),(t==null?void 0:t.data.code)!==10005?window.$message.warning((t==null?void 0:t.data.msg)||"鉴权失败"):window.$store.commit("triggerAuth",!0)):window.$message.error(((l=t==null?void 0:t.data)==null?void 0:l.msg)||"请求失败"),Promise.reject((t==null?void 0:t.data)||{})});function s(e){return G(e)}const ne=e=>s({method:"post",url:"/v1/auth/login",data:e}),Ye=e=>s({method:"post",url:"/v1/auth/register",data:e}),W=(e="")=>s({method:"get",url:"/v1/user/info",headers:{Authorization:`Bearer ${e}`}}),et={class:"auth-wrap"},tt={key:0},ot=z({__name:"auth",setup(e){const t=R("true".toLowerCase()==="true"),l=B(),i=R(!1),c=R(),n=Z({username:"",password:""}),m=R(),d=Z({username:"",password:"",repassword:""}),M={username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"},repassword:[{required:!0,message:"请输入密码"},{validator:(_,u)=>!!d.password&&d.password.startsWith(u)&&d.password.length>=u.length,message:"两次密码输入不一致",trigger:"input"}]},g=_=>{var u;_.preventDefault(),_.stopPropagation(),(u=c.value)==null||u.validate(L=>{L||(i.value=!0,ne({username:n.username,password:n.password}).then(p=>{const O=(p==null?void 0:p.token)||"";return localStorage.setItem("PAOPAO_TOKEN",O),W(O)}).then(p=>{window.$message.success("登录成功"),i.value=!1,l.commit("updateUserinfo",p),l.commit("triggerAuth",!1),l.commit("refresh"),n.username="",n.password=""}).catch(p=>{i.value=!1}))})},b=_=>{var u;_.preventDefault(),_.stopPropagation(),(u=m.value)==null||u.validate(L=>{L||(i.value=!0,Ye({username:d.username,password:d.password}).then(p=>ne({username:d.username,password:d.password})).then(p=>{const O=(p==null?void 0:p.token)||"";return localStorage.setItem("PAOPAO_TOKEN",O),W(O)}).then(p=>{window.$message.success("注册成功"),i.value=!1,l.commit("updateUserinfo",p),l.commit("triggerAuth",!1),d.username="",d.password="",d.repassword=""}).catch(p=>{i.value=!1}))})};return j(()=>{const _=localStorage.getItem("PAOPAO_TOKEN")||"";_?W(_).then(u=>{l.commit("updateUserinfo",u),l.commit("triggerAuth",!1)}).catch(u=>{l.commit("userLogout")}):l.commit("userLogout")}),(_,u)=>{const L=Pe,p=Le,O=ue,r=ce,w=Oe,y=Ae,E=ie,x=Te,I=Re,K=de,V=Ce;return v(),D(V,{show:h(l).state.authModalShow,"onUpdate:show":u[7]||(u[7]=f=>h(l).state.authModalShow=f),class:"auth-card",preset:"card",size:"small","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:a(()=>[k("div",et,[o(K,{bordered:!1},{default:a(()=>[t.value?U("",!0):(v(),T("div",tt,[o(O,{justify:"center"},{default:a(()=>[o(p,null,{default:a(()=>[o(L,{type:"success"},{default:a(()=>[S("账号登录")]),_:1})]),_:1})]),_:1}),o(y,{ref_key:"loginRef",ref:c,model:n,rules:{username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"}}},{default:a(()=>[o(w,{label:"账户",path:"username"},{default:a(()=>[o(r,{value:n.username,"onUpdate:value":u[0]||(u[0]=f=>n.username=f),placeholder:"请输入用户名",onKeyup:q(N(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),o(w,{label:"密码",path:"password"},{default:a(()=>[o(r,{type:"password","show-password-on":"mousedown",value:n.password,"onUpdate:value":u[1]||(u[1]=f=>n.password=f),placeholder:"请输入账户密码",onKeyup:q(N(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),o(E,{type:"primary",block:"",secondary:"",strong:"",loading:i.value,onClick:g},{default:a(()=>[S(" 登录 ")]),_:1},8,["loading"])])),t.value?(v(),D(I,{key:1,"default-value":h(l).state.authModelTab,size:"large","justify-content":"space-evenly"},{default:a(()=>[o(x,{name:"signin",tab:"登录"},{default:a(()=>[o(y,{ref_key:"loginRef",ref:c,model:n,rules:{username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"}}},{default:a(()=>[o(w,{label:"账户",path:"username"},{default:a(()=>[o(r,{value:n.username,"onUpdate:value":u[2]||(u[2]=f=>n.username=f),placeholder:"请输入用户名",onKeyup:q(N(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),o(w,{label:"密码",path:"password"},{default:a(()=>[o(r,{type:"password","show-password-on":"mousedown",value:n.password,"onUpdate:value":u[3]||(u[3]=f=>n.password=f),placeholder:"请输入账户密码",onKeyup:q(N(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),o(E,{type:"primary",block:"",secondary:"",strong:"",loading:i.value,onClick:g},{default:a(()=>[S(" 登录 ")]),_:1},8,["loading"])]),_:1}),o(x,{name:"signup",tab:"注册"},{default:a(()=>[o(y,{ref_key:"registerRef",ref:m,model:d,rules:M},{default:a(()=>[o(w,{label:"用户名",path:"username"},{default:a(()=>[o(r,{value:d.username,"onUpdate:value":u[4]||(u[4]=f=>d.username=f),placeholder:"用户名注册后无法修改"},null,8,["value"])]),_:1}),o(w,{label:"密码",path:"password"},{default:a(()=>[o(r,{type:"password","show-password-on":"mousedown",placeholder:"密码不少于6位",value:d.password,"onUpdate:value":u[5]||(u[5]=f=>d.password=f),onKeyup:q(N(b,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),o(w,{label:"重复密码",path:"repassword"},{default:a(()=>[o(r,{type:"password","show-password-on":"mousedown",placeholder:"请再次输入密码",value:d.repassword,"onUpdate:value":u[6]||(u[6]=f=>d.repassword=f),onKeyup:q(N(b,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),o(E,{type:"primary",block:"",secondary:"",strong:"",loading:i.value,onClick:b},{default:a(()=>[S(" 注册 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["default-value"])):U("",!0)]),_:1})])]),_:1},8,["show"])}}});const me=(e,t)=>{const l=e.__vccOpts||e;for(const[i,c]of t)l[i]=c;return l},st=me(ot,[["__scopeId","data-v-053dfa44"]]),Jt=e=>s({method:"get",url:"/v1/posts",params:e}),nt=e=>s({method:"get",url:"/v1/tags",params:e}),Xt=e=>s({method:"get",url:"/v1/post",params:e}),Yt=e=>s({method:"get",url:"/v1/post/star",params:e}),eo=e=>s({method:"post",url:"/v1/post/star",data:e}),to=e=>s({method:"get",url:"/v1/post/collection",params:e}),oo=e=>s({method:"post",url:"/v1/post/collection",data:e}),so=e=>s({method:"get",url:"/v1/post/comments",params:e}),no=e=>s({method:"get",url:"/v1/user/contacts",params:e}),ro=e=>s({method:"post",url:"/v1/post",data:e}),ao=e=>s({method:"delete",url:"/v1/post",data:e}),lo=e=>s({method:"post",url:"/v1/post/lock",data:e}),uo=e=>s({method:"post",url:"/v1/post/stick",data:e}),co=e=>s({method:"post",url:"/v1/post/visibility",data:e}),io=e=>s({method:"post",url:"/v1/tweet/comment/thumbsup",data:e}),po=e=>s({method:"post",url:"/v1/tweet/comment/thumbsdown",data:e}),mo=e=>s({method:"post",url:"/v1/tweet/reply/thumbsup",data:e}),_o=e=>s({method:"post",url:"/v1/tweet/reply/thumbsdown",data:e}),ho=e=>s({method:"post",url:"/v1/post/comment",data:e}),go=e=>s({method:"delete",url:"/v1/post/comment",data:e}),fo=e=>s({method:"post",url:"/v1/post/comment/reply",data:e}),vo=e=>s({method:"delete",url:"/v1/post/comment/reply",data:e}),wo=e=>s({method:"post",url:"/v1/topic/stick",data:e}),yo=e=>s({method:"post",url:"/v1/topic/follow",data:e}),ko=e=>s({method:"post",url:"/v1/topic/unfollow",data:e}),rt={key:0,class:"rightbar-wrap"},at={class:"search-wrap"},lt={class:"post-num"},ut={class:"post-num"},ct={class:"copyright"},it=["href"],dt=["href"],pt=z({__name:"rightbar",setup(e){const t=R([]),l=R([]),i=R(!1),c=R(""),n=B(),m=le(),d="2023 paopao.info",M="Roc's Me",g="",b="泡泡(PaoPao)开源社区",_="https://www.paopao.info",u=+"6",L=+"12",p=()=>{i.value=!0,nt({type:"hot_extral",num:L,extral_num:u}).then(y=>{t.value=y.topics,l.value=y.extral_topics??[],w.value=!0,i.value=!1}).catch(y=>{i.value=!1})},O=y=>y>=1e3?(y/1e3).toFixed(1)+"k":y,r=()=>{m.push({name:"home",query:{q:c.value}})},w=Q({get:()=>n.state.userLogined&&l.value.length!==0,set:y=>{}});return H(()=>({refreshTopicFollow:n.state.refreshTopicFollow,userLogined:n.state.userLogined}),(y,E)=>{(y.refreshTopicFollow!==E.refreshTopicFollow||y.userLogined)&&p()}),j(()=>{p()}),(y,E)=>{const x=F,I=ce,K=ae("router-link"),V=Ee,f=de,_e=ue;return h(n).state.collapsedRight?U("",!0):(v(),T("div",rt,[k("div",at,[o(I,{round:"",clearable:"",placeholder:"搜一搜...",value:c.value,"onUpdate:value":E[0]||(E[0]=C=>c.value=C),onKeyup:q(N(r,["prevent"]),["enter"])},{prefix:a(()=>[o(x,{component:h(Fe)},null,8,["component"])]),_:1},8,["value","onKeyup"])]),w.value?(v(),D(f,{key:0,class:"hottopic-wrap",title:"关注话题",embedded:"",bordered:!1,size:"small"},{default:a(()=>[o(V,{show:i.value},{default:a(()=>[(v(!0),T(J,null,X(l.value,C=>(v(),T("div",{class:"hot-tag-item",key:C.id},[o(K,{class:"hash-link",to:{name:"home",query:{q:C.tag,t:"tag"}}},{default:a(()=>[S(" #"+$(C.tag),1)]),_:2},1032,["to"]),k("div",lt,$(O(C.quote_num)),1)]))),128))]),_:1},8,["show"])]),_:1})):U("",!0),o(f,{class:"hottopic-wrap",title:"热门话题",embedded:"",bordered:!1,size:"small"},{default:a(()=>[o(V,{show:i.value},{default:a(()=>[(v(!0),T(J,null,X(t.value,C=>(v(),T("div",{class:"hot-tag-item",key:C.id},[o(K,{class:"hash-link",to:{name:"home",query:{q:C.tag,t:"tag"}}},{default:a(()=>[S(" #"+$(C.tag),1)]),_:2},1032,["to"]),k("div",ut,$(O(C.quote_num)),1)]))),128))]),_:1},8,["show"])]),_:1}),o(f,{class:"copyright-wrap",embedded:"",bordered:!1,size:"small"},{default:a(()=>[k("div",ct,"© "+$(h(d)),1),k("div",null,[o(_e,null,{default:a(()=>[k("a",{href:h(g),target:"_blank",class:"hash-link"},$(h(M)),9,it),k("a",{href:h(_),target:"_blank",class:"hash-link"},$(h(b)),9,dt)]),_:1})])]),_:1})]))}}});const mt=me(pt,[["__scopeId","data-v-f4a84024"]]),bo=(e={})=>s({method:"get",url:"/v1/captcha",params:e}),Po=e=>s({method:"post",url:"/v1/captcha",data:e}),Lo=e=>s({method:"post",url:"/v1/user/whisper",data:e}),Oo=e=>s({method:"post",url:"/v1/friend/requesting",data:e}),Ao=e=>s({method:"post",url:"/v1/friend/add",data:e}),To=e=>s({method:"post",url:"/v1/friend/reject",data:e}),Ro=e=>s({method:"post",url:"/v1/friend/delete",data:e}),Co=e=>s({method:"post",url:"/v1/user/phone",data:e}),Eo=e=>s({method:"post",url:"/v1/user/activate",data:e}),Io=e=>s({method:"post",url:"/v1/user/password",data:e}),$o=e=>s({method:"post",url:"/v1/user/nickname",data:e}),So=e=>s({method:"post",url:"/v1/user/avatar",data:e}),re=(e={})=>s({method:"get",url:"/v1/user/msgcount/unread",params:e}),Uo=e=>s({method:"get",url:"/v1/user/messages",params:e}),Mo=e=>s({method:"post",url:"/v1/user/message/read",data:e}),Ko=e=>s({method:"get",url:"/v1/user/collections",params:e}),qo=e=>s({method:"get",url:"/v1/user/profile",params:e}),No=e=>s({method:"get",url:"/v1/user/posts",params:e}),Do=e=>s({method:"get",url:"/v1/user/wallet/bills",params:e}),xo=e=>s({method:"post",url:"/v1/user/recharge",data:e}),Fo=e=>s({method:"get",url:"/v1/user/recharge",params:e}),Vo=e=>s({method:"get",url:"/v1/suggest/users",params:e}),zo=e=>s({method:"get",url:"/v1/suggest/tags",params:e}),Bo=e=>s({method:"get",url:"/v1/attachment/precheck",params:e}),Wo=e=>s({method:"get",url:"/v1/attachment",params:e}),Ho=e=>s({method:"post",url:"/v1/admin/user/status",data:e}),_t="/assets/logo-52afee68.png",ht={class:"sidebar-wrap"},gt={class:"logo-wrap"},ft={key:0,class:"user-wrap"},vt={class:"user-info"},wt={class:"nickname"},yt={class:"nickname-txt"},kt={class:"username"},bt={class:"user-mini-wrap"},Pt={key:1,class:"user-wrap"},Lt={key:0,class:"login-only-wrap"},Ot={key:1,class:"login-wrap"},At=z({__name:"sidebar",setup(e){const t=B(),l=ye(),i=le(),c=R(!1),n=R(l.name||""),m=R(),d=R("true".toLowerCase()==="true"),M=+"5000";H(l,()=>{n.value=l.name}),H(t.state,()=>{t.state.userInfo.id>0?m.value||(re().then(r=>{c.value=r.count>0}).catch(r=>{console.log(r)}),m.value=setInterval(()=>{re().then(r=>{c.value=r.count>0}).catch(r=>{console.log(r)})},M)):m.value&&clearInterval(m.value)}),j(()=>{window.onresize=()=>{t.commit("triggerCollapsedLeft",document.body.clientWidth<=821),t.commit("triggerCollapsedRight",document.body.clientWidth<=821)}});const g=Q(()=>{const r=[{label:"广场",key:"home",icon:()=>P(ee),href:"/"},{label:"话题",key:"topic",icon:()=>P(te),href:"/topic"}];return"false".toLowerCase()==="true"&&r.push({label:"公告",key:"anouncement",icon:()=>P(Ve),href:"/anouncement"}),r.push({label:"主页",key:"profile",icon:()=>P(ze),href:"/profile"}),r.push({label:"消息",key:"messages",icon:()=>P(Be),href:"/messages"}),r.push({label:"收藏",key:"collection",icon:()=>P(We),href:"/collection"}),r.push({label:"好友",key:"contacts",icon:()=>P(He),href:"/contacts"}),"false".toLocaleLowerCase()==="true"&&r.push({label:"钱包",key:"wallet",icon:()=>P(je),href:"/wallet"}),r.push({label:"设置",key:"setting",icon:()=>P(Qe),href:"/setting"}),t.state.userInfo.id>0?r:[{label:"广场",key:"home",icon:()=>P(ee),href:"/"},{label:"话题",key:"topic",icon:()=>P(te),href:"/topic"}]}),b=r=>"href"in r?P("div",{},r.label):r.label,_=r=>r.key==="messages"?P($e,{dot:!0,show:c.value,processing:!0},{default:()=>P(F,{color:r.key===n.value?"var(--n-item-icon-color-active)":"var(--n-item-icon-color)"},{default:r.icon})}):P(F,null,{default:r.icon}),u=(r,w={})=>{n.value=r,i.push({name:r})},L=()=>{l.path==="/"&&t.commit("refresh"),u("home")},p=r=>{t.commit("triggerAuth",!0),t.commit("triggerAuthKey",r)},O=()=>{t.commit("userLogout"),t.commit("refresh"),L()};return window.$store=t,window.$message=Ie(),(r,w)=>{const y=Se,E=Ue,x=Me,I=ie;return v(),T("div",ht,[k("div",gt,[o(y,{class:"logo-img",width:"36",src:h(_t),"preview-disabled":!0,onClick:L},null,8,["src"])]),o(E,{accordion:!0,"icon-size":24,options:g.value,"render-label":b,"render-icon":_,value:n.value,"onUpdate:value":u},null,8,["options","value"]),h(t).state.userInfo.id>0?(v(),T("div",ft,[o(x,{class:"user-avatar",round:"",size:34,src:h(t).state.userInfo.avatar},null,8,["src"]),k("div",vt,[k("div",wt,[k("span",yt,$(h(t).state.userInfo.nickname),1),o(I,{class:"logout",quaternary:"",circle:"",size:"tiny",onClick:O},{icon:a(()=>[o(h(F),null,{default:a(()=>[o(h(oe))]),_:1})]),_:1})]),k("div",kt,"@"+$(h(t).state.userInfo.username),1)]),k("div",bt,[o(I,{class:"logout",quaternary:"",circle:"",onClick:O},{icon:a(()=>[o(h(F),{size:24},{default:a(()=>[o(h(oe))]),_:1})]),_:1})])])):(v(),T("div",Pt,[d.value?U("",!0):(v(),T("div",Lt,[o(I,{strong:"",secondary:"",round:"",type:"primary",onClick:w[0]||(w[0]=K=>p("signin"))},{default:a(()=>[S(" 登录 ")]),_:1})])),d.value?(v(),T("div",Ot,[o(I,{strong:"",secondary:"",round:"",type:"primary",onClick:w[1]||(w[1]=K=>p("signin"))},{default:a(()=>[S(" 登录 ")]),_:1}),o(I,{strong:"",secondary:"",round:"",type:"info",onClick:w[2]||(w[2]=K=>p("signup"))},{default:a(()=>[S(" 注册 ")]),_:1})])):U("",!0)]))])}}});const Tt={"has-sider":"",class:"main-wrap",position:"static"},Rt={key:0},Ct={class:"content-wrap"},Et=z({__name:"App",setup(e){const t=B(),l=Q(()=>t.state.theme==="dark"?qe:null);return(i,c)=>{const n=At,m=ae("router-view"),d=mt,M=st,g=Ne,b=De,_=xe,u=Ke;return v(),D(u,{theme:l.value},{default:a(()=>[o(b,null,{default:a(()=>[o(g,null,{default:a(()=>{var L;return[k("div",{class:ge(["app-container",{dark:((L=l.value)==null?void 0:L.name)==="dark",mobile:!h(t).state.desktopModelShow}])},[k("div",Tt,[h(t).state.desktopModelShow?(v(),T("div",Rt,[o(n)])):U("",!0),k("div",Ct,[o(m,{class:"app-wrap"},{default:a(({Component:p})=>[(v(),D(he,null,[i.$route.meta.keepAlive?(v(),D(Y(p),{key:0})):U("",!0)],1024)),i.$route.meta.keepAlive?U("",!0):(v(),D(Y(p),{key:0}))]),_:1})]),o(d)]),o(M)],2)]}),_:1})]),_:1}),o(_)]),_:1},8,["theme"])}}});fe(Et).use(pe).use(Xe).mount("#app");export{No as A,Lo as B,Oo as C,qo as D,Ro as E,Ho as F,Ao as G,To as H,Mo as I,Uo as J,Ko as K,Bo as L,Wo as M,no as N,W as O,Do as P,xo as Q,Fo as R,bo as S,So as T,Io as U,Co as V,Eo as W,$o as X,Po as Y,At as Z,me as _,zo as a,Jt as b,ro as c,_o as d,vo as e,io as f,Vo as g,po as h,fo as i,go as j,ho as k,Yt as l,to as m,ao as n,lo as o,eo as p,oo as q,Xt as r,uo as s,mo as t,so as u,co as v,wo as w,ko as x,yo as y,nt as z};