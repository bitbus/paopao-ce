import{d as V,H as L,R as X,b as B,e as f,q as F,w as u,j as w,k as s,bf as d,f as R,A as U,Z as q,y as N,Y as E,c as Q,E as j,r as ue,F as ee,u as te,x as A,h as k,a5 as ve,s as oe,l as we,ag as ye}from"./@vue-a481fc63.js";import{c as be,a as ke,u as ce,b as Le}from"./vue-router-e5a2430e.js";import{c as Pe,u as W}from"./vuex-44de225f.js";import{a as Te}from"./axios-4a70c6fc.js";import{_ as Ae,N as Re,a as pe,b as de,c as Oe,d as Ce,e as me,f as Me,g as Ie,h as _e,i as Ee,j as K,k as Ue,u as Se,l as $e,m as De,n as xe,o as qe,p as Ne,q as Fe,r as Ke,s as Ve,t as Be}from"./naive-ui-eecf2ec3.js";import{h as S}from"./moment-2ab8298d.js";import{S as We,M as ze,L as He,C as Ye,B as je,P as Qe,W as Ze,a as Ge,H as re,b as se,c as ne}from"./@vicons-f0266f88.js";/* empty css               */import"./seemly-76b7b838.js";import"./vueuc-7c8d4b48.js";import"./evtd-b614532e.js";import"./@css-render-7124a1a5.js";import"./vooks-6d99783e.js";import"./vdirs-b0483831.js";import"./@juggle-41516555.js";import"./css-render-6a5c5852.js";import"./@emotion-8a8e73f6.js";import"./lodash-es-8412e618.js";import"./treemate-25c27bff.js";import"./async-validator-dee29e8b.js";import"./date-fns-975a2d8f.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))h(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&h(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerPolicy&&(l.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?l.credentials="include":n.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function h(n){if(n.ep)return;n.ep=!0;const l=r(n);fetch(n.href,l)}})();const Je="modulepreload",Xe=function(e){return"/"+e},ae={},T=function(t,r,h){if(!r||r.length===0)return t();const n=document.getElementsByTagName("link");return Promise.all(r.map(l=>{if(l=Xe(l),l in ae)return;ae[l]=!0;const c=l.endsWith(".css"),I=c?'[rel="stylesheet"]':"";if(!!h)for(let _=n.length-1;_>=0;_--){const i=n[_];if(i.href===l&&(!c||i.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${I}`))return;const g=document.createElement("link");if(g.rel=c?"stylesheet":Je,c||(g.as="script",g.crossOrigin=""),g.href=l,document.head.appendChild(g),c)return new Promise((_,i)=>{g.addEventListener("load",_),g.addEventListener("error",()=>i(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t()).catch(l=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l})},et=[{path:"/",name:"home",meta:{title:"广场",keepAlive:!0},component:()=>T(()=>import("./Home-c19b4d50.js"),["assets/Home-c19b4d50.js","assets/whisper-add-friend-78adb41e.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/@vue-a481fc63.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/whisper-add-friend-01aea97d.css","assets/whisper-29f2b0aa.js","assets/whisper-61451957.css","assets/post-item.vue_vue_type_style_index_0_lang-4d372959.js","assets/content-a642a616.js","assets/@vicons-f0266f88.js","assets/paopao-video-player-2fe58954.js","assets/content-2fda112b.css","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/copy-to-clipboard-4ef7d3eb.js","assets/@babel-725317a4.js","assets/toggle-selection-93f4ad84.js","assets/post-item-d81938d1.css","assets/post-skeleton-a15059e0.js","assets/post-skeleton-f1900002.css","assets/lodash-e0b37ac3.js","assets/IEnum-5453a777.js","assets/main-nav.vue_vue_type_style_index_0_lang-a20a8596.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/@opentiny-d73a2d67.js","assets/vue-1e3b54ec.js","assets/xss-a5544f63.js","assets/cssfilter-af71ba68.js","assets/@opentiny-0f942bd4.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Home-e6b13f04.css","assets/vfonts-7afd136d.css"])},{path:"/post",name:"post",meta:{title:"泡泡详情"},component:()=>T(()=>import("./Post-44974496.js"),["assets/Post-44974496.js","assets/@vue-a481fc63.js","assets/vuex-44de225f.js","assets/IEnum-5453a777.js","assets/@vicons-f0266f88.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/content-a642a616.js","assets/paopao-video-player-2fe58954.js","assets/content-2fda112b.css","assets/vue-router-e5a2430e.js","assets/post-skeleton-a15059e0.js","assets/post-skeleton-f1900002.css","assets/lodash-e0b37ac3.js","assets/@babel-725317a4.js","assets/whisper-29f2b0aa.js","assets/whisper-61451957.css","assets/copy-to-clipboard-4ef7d3eb.js","assets/toggle-selection-93f4ad84.js","assets/main-nav.vue_vue_type_style_index_0_lang-a20a8596.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Post-39447b75.css","assets/vfonts-7afd136d.css"])},{path:"/topic",name:"topic",meta:{title:"话题"},component:()=>T(()=>import("./Topic-a2ac0d74.js"),["assets/Topic-a2ac0d74.js","assets/@vicons-f0266f88.js","assets/@vue-a481fc63.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav.vue_vue_type_style_index_0_lang-a20a8596.js","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Topic-384e019e.css","assets/vfonts-7afd136d.css"])},{path:"/anouncement",name:"anouncement",meta:{title:"公告"},component:()=>T(()=>import("./Anouncement-a1221d42.js"),["assets/Anouncement-a1221d42.js","assets/post-skeleton-a15059e0.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/@vue-a481fc63.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-a20a8596.js","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/@vicons-f0266f88.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Anouncement-662e2d95.css","assets/vfonts-7afd136d.css"])},{path:"/profile",name:"profile",meta:{title:"主页"},component:()=>T(()=>import("./Profile-7682ee52.js"),["assets/Profile-7682ee52.js","assets/whisper-29f2b0aa.js","assets/@vue-a481fc63.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/whisper-61451957.css","assets/post-item.vue_vue_type_style_index_0_lang-4d372959.js","assets/content-a642a616.js","assets/@vicons-f0266f88.js","assets/paopao-video-player-2fe58954.js","assets/content-2fda112b.css","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/copy-to-clipboard-4ef7d3eb.js","assets/@babel-725317a4.js","assets/toggle-selection-93f4ad84.js","assets/post-item-d81938d1.css","assets/post-skeleton-a15059e0.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-a20a8596.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Profile-54de1ef0.css","assets/vfonts-7afd136d.css"])},{path:"/u",name:"user",meta:{title:"用户详情"},component:()=>T(()=>import("./User-f3cd38fc.js"),["assets/User-f3cd38fc.js","assets/post-item.vue_vue_type_style_index_0_lang-4d372959.js","assets/content-a642a616.js","assets/@vue-a481fc63.js","assets/@vicons-f0266f88.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/paopao-video-player-2fe58954.js","assets/content-2fda112b.css","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/copy-to-clipboard-4ef7d3eb.js","assets/@babel-725317a4.js","assets/toggle-selection-93f4ad84.js","assets/post-item-d81938d1.css","assets/post-skeleton-a15059e0.js","assets/post-skeleton-f1900002.css","assets/whisper-29f2b0aa.js","assets/whisper-61451957.css","assets/main-nav.vue_vue_type_style_index_0_lang-a20a8596.js","assets/main-nav-569a7b0c.css","assets/whisper-add-friend-78adb41e.js","assets/whisper-add-friend-01aea97d.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/User-1ad57452.css","assets/vfonts-7afd136d.css"])},{path:"/messages",name:"messages",meta:{title:"消息"},component:()=>T(()=>import("./Messages-2895f627.js"),["assets/Messages-2895f627.js","assets/@vue-a481fc63.js","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/@vicons-f0266f88.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/whisper-29f2b0aa.js","assets/whisper-61451957.css","assets/main-nav.vue_vue_type_style_index_0_lang-a20a8596.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Messages-9543d2b3.css","assets/vfonts-7afd136d.css"])},{path:"/collection",name:"collection",meta:{title:"收藏"},component:()=>T(()=>import("./Collection-55969243.js"),["assets/Collection-55969243.js","assets/whisper-29f2b0aa.js","assets/@vue-a481fc63.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/whisper-61451957.css","assets/post-item.vue_vue_type_style_index_0_lang-4d372959.js","assets/content-a642a616.js","assets/@vicons-f0266f88.js","assets/paopao-video-player-2fe58954.js","assets/content-2fda112b.css","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/copy-to-clipboard-4ef7d3eb.js","assets/@babel-725317a4.js","assets/toggle-selection-93f4ad84.js","assets/post-item-d81938d1.css","assets/post-skeleton-a15059e0.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-a20a8596.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Collection-e605040f.css","assets/vfonts-7afd136d.css"])},{path:"/contacts",name:"contacts",meta:{title:"好友"},component:()=>T(()=>import("./Contacts-669f91fa.js"),["assets/Contacts-669f91fa.js","assets/whisper-29f2b0aa.js","assets/@vue-a481fc63.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/whisper-61451957.css","assets/@vicons-f0266f88.js","assets/post-skeleton-a15059e0.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-a20a8596.js","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Contacts-c993e2de.css","assets/vfonts-7afd136d.css"])},{path:"/following",name:"following",meta:{title:"关注"},component:()=>T(()=>import("./Following-3acd73c5.js"),["assets/Following-3acd73c5.js","assets/whisper-29f2b0aa.js","assets/@vue-a481fc63.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/whisper-61451957.css","assets/vue-router-e5a2430e.js","assets/@vicons-f0266f88.js","assets/post-skeleton-a15059e0.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-a20a8596.js","assets/vuex-44de225f.js","assets/main-nav-569a7b0c.css","assets/v3-infinite-loading-2c58ec2f.js","assets/v3-infinite-loading-1ff9ffe7.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Following-c2ff25f8.css","assets/vfonts-7afd136d.css"])},{path:"/wallet",name:"wallet",meta:{title:"钱包"},component:()=>T(()=>import("./Wallet-d200e3ec.js"),["assets/Wallet-d200e3ec.js","assets/post-skeleton-a15059e0.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/@vue-a481fc63.js","assets/vueuc-7c8d4b48.js","assets/evtd-b614532e.js","assets/@css-render-7124a1a5.js","assets/vooks-6d99783e.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/post-skeleton-f1900002.css","assets/main-nav.vue_vue_type_style_index_0_lang-a20a8596.js","assets/vuex-44de225f.js","assets/vue-router-e5a2430e.js","assets/@vicons-f0266f88.js","assets/main-nav-569a7b0c.css","assets/qrcode-9719fc56.js","assets/encode-utf8-f813de00.js","assets/dijkstrajs-f906a09e.js","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Wallet-77044929.css","assets/vfonts-7afd136d.css"])},{path:"/setting",name:"setting",meta:{title:"设置"},component:()=>T(()=>import("./Setting-9923d3fd.js"),["assets/Setting-9923d3fd.js","assets/main-nav.vue_vue_type_style_index_0_lang-a20a8596.js","assets/vuex-44de225f.js","assets/@vue-a481fc63.js","assets/vue-router-e5a2430e.js","assets/vooks-6d99783e.js","assets/evtd-b614532e.js","assets/@vicons-f0266f88.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/@css-render-7124a1a5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/Setting-94ec4c57.css","assets/vfonts-7afd136d.css"])},{path:"/404",name:"404",meta:{title:"404"},component:()=>T(()=>import("./404-c0c7310e.js"),["assets/404-c0c7310e.js","assets/main-nav.vue_vue_type_style_index_0_lang-a20a8596.js","assets/vuex-44de225f.js","assets/@vue-a481fc63.js","assets/vue-router-e5a2430e.js","assets/vooks-6d99783e.js","assets/evtd-b614532e.js","assets/@vicons-f0266f88.js","assets/naive-ui-eecf2ec3.js","assets/seemly-76b7b838.js","assets/vueuc-7c8d4b48.js","assets/@css-render-7124a1a5.js","assets/vdirs-b0483831.js","assets/@juggle-41516555.js","assets/css-render-6a5c5852.js","assets/@emotion-8a8e73f6.js","assets/lodash-es-8412e618.js","assets/treemate-25c27bff.js","assets/async-validator-dee29e8b.js","assets/date-fns-975a2d8f.js","assets/main-nav-569a7b0c.css","assets/axios-4a70c6fc.js","assets/moment-2ab8298d.js","assets/404-020b2afd.css","assets/vfonts-7afd136d.css"])},{path:"/:pathMatch(.*)",redirect:"/404"}],he=be({history:ke(),routes:et});he.beforeEach((e,t,r)=>{document.title=`${e.meta.title} | 泡泡 - 一个清新文艺的微社区`,r()});const tt=Pe({state:{refresh:Date.now(),refreshTopicFollow:Date.now(),theme:localStorage.getItem("PAOPAO_THEME"),collapsedLeft:document.body.clientWidth<=821,collapsedRight:document.body.clientWidth<=821,drawerModelShow:document.body.clientWidth<=821,desktopModelShow:document.body.clientWidth>821,authModalShow:!1,authModelTab:"signin",unreadMsgCount:0,userLogined:!1,userInfo:{id:0,username:"",nickname:"",created_on:0,follows:0,followings:0,tweets_count:0,is_admin:!1},profile:{useFriendship:!0,enableTrendsBar:!0,enableWallet:!1,allowTweetAttachment:!0,allowTweetAttachmentPrice:!0,allowTweetVideo:!0,allowUserRegister:!0,allowPhoneBind:!0,defaultTweetVisibility:"friend",defaultMsgLoopInterval:5e3,copyrightTop:"2023 paopao.info",copyrightLeft:"Roc's Me",copyrightLeftLink:"",copyrightRight:"泡泡(PaoPao)开源社区",copyrightRightLink:"https://www.paopao.info"}},mutations:{refresh(e,t){e.refresh=t||Date.now()},refreshTopicFollow(e){e.refreshTopicFollow=Date.now()},updateUnreadMsgCount(e,t){e.unreadMsgCount=t},triggerTheme(e,t){e.theme=t},triggerAuth(e,t){e.authModalShow=t},triggerAuthKey(e,t){e.authModelTab=t},triggerCollapsedLeft(e,t){e.collapsedLeft=t,e.drawerModelShow=t,e.desktopModelShow=!t},triggerCollapsedRight(e,t){e.collapsedRight=t},updateUserinfo(e,t){e.userInfo=t,e.userInfo.id>0&&(e.userLogined=!0)},loadDefaultSiteProfile(e){e.profile.useFriendship="true".toLowerCase()==="true",e.profile.enableTrendsBar="true".toLowerCase()==="true",e.profile.enableWallet="false".toLocaleLowerCase()==="true",e.profile.allowTweetAttachment="true".toLowerCase()==="true",e.profile.allowTweetAttachmentPrice="false".toLowerCase()==="true",e.profile.allowTweetVideo="true".toLowerCase()==="true",e.profile.allowUserRegister="true".toLowerCase()==="true",e.profile.allowPhoneBind="true".toLowerCase()==="true",e.profile.defaultTweetVisibility="friend".toLowerCase(),e.profile.defaultMsgLoopInterval=+"5000",e.profile.copyrightTop="2023 paopao.info",e.profile.copyrightLeft="Roc's Me",e.profile.copyrightLeftLink="",e.profile.copyrightRight="泡泡(PaoPao)开源社区",e.profile.copyrightRightLink="https://www.paopao.info"},updateSiteProfile(e,t){const r=e.profile;e.profile.useFriendship=t.use_friendship??r.useFriendship,e.profile.enableTrendsBar=t.enable_trends_bar??r.enableTrendsBar,e.profile.enableWallet=t.enable_wallet??r.enableWallet,e.profile.allowTweetAttachment=t.allow_tweet_attachment??r.allowTweetAttachment,e.profile.allowTweetAttachmentPrice=t.allow_tweet_attachment_price??r.allowTweetAttachmentPrice,e.profile.allowTweetVideo=t.allow_tweet_video??r.allowTweetVideo,e.profile.allowUserRegister=t.allow_user_register??r.allowUserRegister,e.profile.allowPhoneBind=t.allow_phone_bind??r.allowPhoneBind,e.profile.defaultTweetVisibility=t.default_tweet_visibility??r.defaultTweetVisibility,e.profile.defaultMsgLoopInterval=t.default_msg_loop_interval??r.defaultMsgLoopInterval,e.profile.copyrightTop=t.copyright_top??r.copyrightTop,e.profile.copyrightLeft=t.copyright_left??r.copyrightLeft,e.profile.copyrightLeftLink=t.copyright_left_link??r.copyrightLeftLink,e.profile.copyrightRight=t.copyright_right??r.copyrightRight,e.profile.copyrightRightLink=t.copyright_right_link??r.copyrightRightLink},userLogout(e){localStorage.removeItem("PAOPAO_TOKEN"),e.userInfo={id:0,nickname:"",username:"",created_on:0,follows:0,followings:0,tweets_count:0,is_admin:!1},e.userLogined=!1}},actions:{},modules:{}}),Z=Te.create({baseURL:"",timeout:3e4});Z.interceptors.request.use(e=>(localStorage.getItem("PAOPAO_TOKEN")&&(e.headers.Authorization="Bearer "+localStorage.getItem("PAOPAO_TOKEN")),e),e=>Promise.reject(e));Z.interceptors.response.use(e=>{const{data:t={},code:r=0}=(e==null?void 0:e.data)||{};if(+r==0)return t||{};Promise.reject((e==null?void 0:e.data)||{})},(e={})=>{var r;const{response:t={}}=e||{};return+(t==null?void 0:t.status)==401?(localStorage.removeItem("PAOPAO_TOKEN"),(t==null?void 0:t.data.code)!==10005?window.$message.warning((t==null?void 0:t.data.msg)||"鉴权失败"):window.$store.commit("triggerAuth",!0)):window.$message.error(((r=t==null?void 0:t.data)==null?void 0:r.msg)||"请求失败"),Promise.reject((t==null?void 0:t.data)||{})});function o(e){return Z(e)}const le=e=>o({method:"post",url:"/v1/auth/login",data:e}),ot=e=>o({method:"post",url:"/v1/auth/register",data:e}),Y=(e="")=>o({method:"get",url:"/v1/user/info",headers:{Authorization:`Bearer ${e}`}}),rt={class:"auth-wrap"},st={key:0},nt=V({__name:"auth",setup(e){const t=W(),r=L(!1),h=L(),n=X({username:"",password:""}),l=L(),c=X({username:"",password:"",repassword:""}),I={username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"},repassword:[{required:!0,message:"请输入密码"},{validator:(_,i)=>!!c.password&&c.password.startsWith(i)&&c.password.length>=i.length,message:"两次密码输入不一致",trigger:"input"}]},P=_=>{var i;_.preventDefault(),_.stopPropagation(),(i=h.value)==null||i.validate(O=>{O||(r.value=!0,le({username:n.username,password:n.password}).then(m=>{const b=(m==null?void 0:m.token)||"";return localStorage.setItem("PAOPAO_TOKEN",b),Y(b)}).then(m=>{window.$message.success("登录成功"),r.value=!1,t.commit("updateUserinfo",m),t.commit("triggerAuth",!1),t.commit("refresh"),n.username="",n.password=""}).catch(m=>{r.value=!1}))})},g=_=>{var i;_.preventDefault(),_.stopPropagation(),(i=l.value)==null||i.validate(O=>{O||(r.value=!0,ot({username:c.username,password:c.password}).then(m=>le({username:c.username,password:c.password})).then(m=>{const b=(m==null?void 0:m.token)||"";return localStorage.setItem("PAOPAO_TOKEN",b),Y(b)}).then(m=>{window.$message.success("注册成功"),r.value=!1,t.commit("updateUserinfo",m),t.commit("triggerAuth",!1),c.username="",c.password="",c.repassword=""}).catch(m=>{r.value=!1}))})};return B(()=>{const _=localStorage.getItem("PAOPAO_TOKEN")||"";_?Y(_).then(i=>{t.commit("updateUserinfo",i),t.commit("triggerAuth",!1)}).catch(i=>{t.commit("userLogout")}):t.commit("userLogout")}),(_,i)=>{const O=Ae,m=Re,b=pe,a=de,v=Oe,D=Ce,$=me,x=Me,p=Ie,C=_e,z=Ee;return f(),F(z,{show:d(t).state.authModalShow,"onUpdate:show":i[7]||(i[7]=y=>d(t).state.authModalShow=y),class:"auth-card",preset:"card",size:"small","mask-closable":!1,bordered:!1,style:{width:"360px"}},{default:u(()=>[w("div",rt,[s(C,{bordered:!1},{default:u(()=>[d(t).state.profile.allowUserRegister?E("",!0):(f(),R("div",st,[s(b,{justify:"center"},{default:u(()=>[s(m,null,{default:u(()=>[s(O,{type:"success"},{default:u(()=>[U("账号登录")]),_:1})]),_:1})]),_:1}),s(D,{ref_key:"loginRef",ref:h,model:n,rules:{username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"}}},{default:u(()=>[s(v,{label:"账户",path:"username"},{default:u(()=>[s(a,{value:n.username,"onUpdate:value":i[0]||(i[0]=y=>n.username=y),placeholder:"请输入用户名",onKeyup:q(N(P,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),s(v,{label:"密码",path:"password"},{default:u(()=>[s(a,{type:"password","show-password-on":"mousedown",value:n.password,"onUpdate:value":i[1]||(i[1]=y=>n.password=y),placeholder:"请输入账户密码",onKeyup:q(N(P,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),s($,{type:"primary",block:"",secondary:"",strong:"",loading:r.value,onClick:P},{default:u(()=>[U(" 登录 ")]),_:1},8,["loading"])])),d(t).state.profile.allowUserRegister?(f(),F(p,{key:1,"default-value":d(t).state.authModelTab,size:"large","justify-content":"space-evenly"},{default:u(()=>[s(x,{name:"signin",tab:"登录"},{default:u(()=>[s(D,{ref_key:"loginRef",ref:h,model:n,rules:{username:{required:!0,message:"请输入账户名"},password:{required:!0,message:"请输入密码"}}},{default:u(()=>[s(v,{label:"账户",path:"username"},{default:u(()=>[s(a,{value:n.username,"onUpdate:value":i[2]||(i[2]=y=>n.username=y),placeholder:"请输入用户名",onKeyup:q(N(P,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),s(v,{label:"密码",path:"password"},{default:u(()=>[s(a,{type:"password","show-password-on":"mousedown",value:n.password,"onUpdate:value":i[3]||(i[3]=y=>n.password=y),placeholder:"请输入账户密码",onKeyup:q(N(P,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),s($,{type:"primary",block:"",secondary:"",strong:"",loading:r.value,onClick:P},{default:u(()=>[U(" 登录 ")]),_:1},8,["loading"])]),_:1}),s(x,{name:"signup",tab:"注册"},{default:u(()=>[s(D,{ref_key:"registerRef",ref:l,model:c,rules:I},{default:u(()=>[s(v,{label:"用户名",path:"username"},{default:u(()=>[s(a,{value:c.username,"onUpdate:value":i[4]||(i[4]=y=>c.username=y),placeholder:"用户名注册后无法修改"},null,8,["value"])]),_:1}),s(v,{label:"密码",path:"password"},{default:u(()=>[s(a,{type:"password","show-password-on":"mousedown",placeholder:"密码不少于6位",value:c.password,"onUpdate:value":i[5]||(i[5]=y=>c.password=y),onKeyup:q(N(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1}),s(v,{label:"重复密码",path:"repassword"},{default:u(()=>[s(a,{type:"password","show-password-on":"mousedown",placeholder:"请再次输入密码",value:c.repassword,"onUpdate:value":i[6]||(i[6]=y=>c.repassword=y),onKeyup:q(N(g,["prevent"]),["enter"])},null,8,["value","onKeyup"])]),_:1})]),_:1},8,["model"]),s($,{type:"primary",block:"",secondary:"",strong:"",loading:r.value,onClick:g},{default:u(()=>[U(" 注册 ")]),_:1},8,["loading"])]),_:1})]),_:1},8,["default-value"])):E("",!0)]),_:1})])]),_:1},8,["show"])}}});const fe=(e,t)=>{const r=e.__vccOpts||e;for(const[h,n]of t)r[h]=n;return r},at=fe(nt,[["__scopeId","data-v-6f778fc4"]]),no=e=>o({method:"get",url:"/v1/posts",params:e}),lt=e=>o({method:"get",url:"/v1/tags",params:e}),ao=e=>o({method:"get",url:"/v1/post",params:e}),lo=e=>o({method:"get",url:"/v1/post/star",params:e}),io=e=>o({method:"post",url:"/v1/post/star",data:e}),uo=e=>o({method:"get",url:"/v1/post/collection",params:e}),co=e=>o({method:"post",url:"/v1/post/collection",data:e}),po=e=>o({method:"get",url:"/v1/post/comments",params:e}),mo=e=>o({method:"get",url:"/v1/user/contacts",params:e}),_o=e=>o({method:"get",url:"/v1/trends/index",params:e}),ho=e=>o({method:"post",url:"/v1/post",data:e}),fo=e=>o({method:"delete",url:"/v1/post",data:e}),go=e=>o({method:"post",url:"/v1/post/lock",data:e}),vo=e=>o({method:"post",url:"/v1/post/stick",data:e}),wo=e=>o({method:"post",url:"/v1/post/highlight",data:e}),yo=e=>o({method:"post",url:"/v1/post/visibility",data:e}),bo=e=>o({method:"post",url:"/v1/tweet/comment/thumbsup",data:e}),ko=e=>o({method:"post",url:"/v1/tweet/comment/thumbsdown",data:e}),Lo=e=>o({method:"post",url:"/v1/tweet/reply/thumbsup",data:e}),Po=e=>o({method:"post",url:"/v1/tweet/reply/thumbsdown",data:e}),To=e=>o({method:"post",url:"/v1/post/comment",data:e}),Ao=e=>o({method:"delete",url:"/v1/post/comment",data:e}),Ro=e=>o({method:"post",url:"/v1/post/comment/highlight",data:e}),Oo=e=>o({method:"post",url:"/v1/post/comment/reply",data:e}),Co=e=>o({method:"delete",url:"/v1/post/comment/reply",data:e}),Mo=e=>o({method:"post",url:"/v1/topic/stick",data:e}),Io=e=>o({method:"post",url:"/v1/topic/follow",data:e}),Eo=e=>o({method:"post",url:"/v1/topic/unfollow",data:e}),Uo=(e={})=>o({method:"get",url:"/v1/captcha",params:e}),So=e=>o({method:"post",url:"/v1/captcha",data:e}),$o=e=>o({method:"post",url:"/v1/user/whisper",data:e}),Do=e=>o({method:"post",url:"/v1/friend/requesting",data:e}),xo=e=>o({method:"post",url:"/v1/friend/add",data:e}),qo=e=>o({method:"post",url:"/v1/user/follow",data:e}),No=e=>o({method:"post",url:"/v1/user/unfollow",data:e}),Fo=e=>o({method:"get",url:"/v1/user/follows",params:e}),Ko=e=>o({method:"get",url:"/v1/user/followings",params:e}),Vo=e=>o({method:"post",url:"/v1/friend/reject",data:e}),Bo=e=>o({method:"post",url:"/v1/friend/delete",data:e}),Wo=e=>o({method:"post",url:"/v1/user/phone",data:e}),zo=e=>o({method:"post",url:"/v1/user/activate",data:e}),Ho=e=>o({method:"post",url:"/v1/user/password",data:e}),Yo=e=>o({method:"post",url:"/v1/user/nickname",data:e}),jo=e=>o({method:"post",url:"/v1/user/avatar",data:e}),ie=(e={})=>o({method:"get",url:"/v1/user/msgcount/unread",params:e}),Qo=e=>o({method:"get",url:"/v1/user/messages",params:e}),Zo=e=>o({method:"post",url:"/v1/user/message/read",data:e}),Go=()=>o({method:"post",url:"/v1/user/message/readall"}),Jo=e=>o({method:"get",url:"/v1/user/collections",params:e}),Xo=e=>o({method:"get",url:"/v1/user/profile",params:e}),er=e=>o({method:"get",url:"/v1/user/posts",params:e}),tr=e=>o({method:"get",url:"/v1/user/wallet/bills",params:e}),or=e=>o({method:"post",url:"/v1/user/recharge",data:e}),rr=e=>o({method:"get",url:"/v1/user/recharge",params:e}),sr=e=>o({method:"get",url:"/v1/suggest/users",params:e}),nr=e=>o({method:"get",url:"/v1/suggest/tags",params:e}),ar=e=>o({method:"get",url:"/v1/attachment/precheck",params:e}),lr=e=>o({method:"get",url:"/v1/attachment",params:e}),ir=e=>o({method:"post",url:"/v1/admin/user/status",data:e}),it=()=>o({method:"get",url:"/v1/admin/site/status"});S.locale("zh-cn");const ut=e=>S.unix(e).fromNow(),ur=e=>{let t=S.unix(e),r=S();return t.year()!=r.year()?t.utc(!0).format("YYYY-MM-DD HH:mm"):S().diff(t,"month")>3?t.utc(!0).format("MM-DD HH:mm"):t.fromNow()},cr=e=>{let t=S.unix(e),r=S();return t.year()!=r.year()?t.utc(!0).format("YYYY-MM-DD"):S().diff(t,"month")>3?t.utc(!0).format("MM-DD"):t.fromNow()},pr=e=>S.unix(e).utc(!0).format("YYYY年MM月"),ct={key:0,class:"rightbar-wrap"},pt={class:"search-wrap"},dt={class:"post-num"},mt={class:"post-num"},_t={class:"copyright"},ht=["href"],ft=["href"],gt={class:"site-info-item"},vt=V({__name:"rightbar",setup(e){const t=L([]),r=L([]),h=L(!1),n=L(""),l=W(),c=ce(),I=L(0),P=L(0),g=L(0),_=L(0),i=L(null),O=+"6",m=+"12",b=()=>{it().then(p=>{I.value=p.register_user_count,P.value=p.online_user_count,g.value=p.history_max_online,_.value=p.server_up_time}).catch(p=>{}),x.disconnect()},a=()=>{h.value=!0,lt({type:"hot_extral",num:m,extral_num:O}).then(p=>{t.value=p.topics,r.value=p.extral_topics??[],$.value=!0,h.value=!1}).catch(p=>{h.value=!1})},v=p=>p>=1e3?(p/1e3).toFixed(1)+"k":p,D=()=>{c.push({name:"home",query:{q:n.value}})},$=Q({get:()=>l.state.userLogined&&r.value.length!==0,set:p=>{}});j(()=>({refreshTopicFollow:l.state.refreshTopicFollow,userLogined:l.state.userLogined}),(p,C)=>{(p.refreshTopicFollow!==C.refreshTopicFollow||p.userLogined)&&a(),l.state.userInfo.is_admin&&b()});const x=new IntersectionObserver(p=>{p.forEach(C=>{C.isIntersecting&&b()})},{root:null,rootMargin:"0px",threshold:1});return B(()=>{i.value&&x.observe(i.value),a()}),(p,C)=>{const z=K,y=de,G=ue("router-link"),J=Ue,H=_e,ge=pe;return d(l).state.collapsedRight?E("",!0):(f(),R("div",ct,[w("div",pt,[s(y,{round:"",clearable:"",placeholder:"搜一搜...",value:n.value,"onUpdate:value":C[0]||(C[0]=M=>n.value=M),onKeyup:q(N(D,["prevent"]),["enter"])},{prefix:u(()=>[s(z,{component:d(We)},null,8,["component"])]),_:1},8,["value","onKeyup"])]),$.value?(f(),F(H,{key:0,class:"hottopic-wrap",title:"关注话题",embedded:"",bordered:!1,size:"small"},{default:u(()=>[s(J,{show:h.value},{default:u(()=>[(f(!0),R(ee,null,te(r.value,M=>(f(),R("div",{class:"hot-tag-item",key:M.id},[s(G,{class:"hash-link",to:{name:"home",query:{q:M.tag,t:"tag"}}},{default:u(()=>[U(" #"+A(M.tag),1)]),_:2},1032,["to"]),w("div",dt,A(v(M.quote_num)),1)]))),128))]),_:1},8,["show"])]),_:1})):E("",!0),s(H,{class:"hottopic-wrap",title:"热门话题",embedded:"",bordered:!1,size:"small"},{default:u(()=>[s(J,{show:h.value},{default:u(()=>[(f(!0),R(ee,null,te(t.value,M=>(f(),R("div",{class:"hot-tag-item",key:M.id},[s(G,{class:"hash-link",to:{name:"home",query:{q:M.tag,t:"tag"}}},{default:u(()=>[U(" #"+A(M.tag),1)]),_:2},1032,["to"]),w("div",mt,A(v(M.quote_num)),1)]))),128))]),_:1},8,["show"])]),_:1}),s(H,{class:"copyright-wrap",embedded:"",bordered:!1,size:"small"},{default:u(()=>[w("div",_t,"© "+A(d(l).state.profile.copyrightTop),1),w("div",null,[s(ge,null,{default:u(()=>[w("a",{href:d(l).state.profile.copyrightLeftLink,target:"_blank",class:"hash-link"},A(d(l).state.profile.copyrightLeft),9,ht),w("a",{href:d(l).state.profile.copyrightRightLink,target:"_blank",class:"hash-link"},A(d(l).state.profile.copyrightRight),9,ft)]),_:1})])]),_:1}),d(l).state.userInfo.is_admin?(f(),R("div",{key:1,class:"site-info",ref_key:"userInfoElement",ref:i},[w("span",gt,A(I.value)+" 注册用户，"+A(P.value)+" 人在线，最高在线 "+A(g.value)+" 人，站点上线于 "+A(d(ut)(_.value)),1)],512)):E("",!0)]))}}});const wt=fe(vt,[["__scopeId","data-v-181f8063"]]),yt="/assets/logo-52afee68.png",bt={class:"sidebar-wrap"},kt={class:"logo-wrap"},Lt={key:0,class:"user-wrap"},Pt={class:"user-info"},Tt={class:"nickname"},At={class:"nickname-txt"},Rt={class:"username"},Ot={class:"user-mini-wrap"},Ct={key:1,class:"user-wrap"},Mt={key:0,class:"login-only-wrap"},It={key:1,class:"login-wrap"},Et=V({__name:"sidebar",setup(e){const t=W(),r=Le(),h=ce(),n=L(!1),l=L(r.name||""),c=L(),I="false".toLowerCase()==="true";j(r,()=>{l.value=r.name}),j(t.state,()=>{n.value=t.state.unreadMsgCount>0,t.state.userInfo.id>0?c.value||(ie().then(a=>{n.value=a.count>0,t.commit("updateUnreadMsgCount",a.count)}).catch(a=>{console.log(a)}),c.value=setInterval(()=>{ie().then(a=>{n.value=a.count>0,t.commit("updateUnreadMsgCount",a.count)}).catch(a=>{console.log(a)})},t.state.profile.defaultMsgLoopInterval)):c.value&&clearInterval(c.value)}),B(()=>{window.onresize=()=>{t.commit("triggerCollapsedLeft",document.body.clientWidth<=821),t.commit("triggerCollapsedRight",document.body.clientWidth<=821)}});const P=Q(()=>{const a=[{label:"广场",key:"home",icon:()=>k(re),href:"/"},{label:"话题",key:"topic",icon:()=>k(se),href:"/topic"}];return I&&a.push({label:"公告",key:"anouncement",icon:()=>k(ze),href:"/anouncement"}),a.push({label:"主页",key:"profile",icon:()=>k(He),href:"/profile"}),a.push({label:"消息",key:"messages",icon:()=>k(Ye),href:"/messages"}),a.push({label:"收藏",key:"collection",icon:()=>k(je),href:"/collection"}),t.state.profile.useFriendship&&a.push({label:"好友",key:"contacts",icon:()=>k(Qe),href:"/contacts"}),t.state.profile.enableWallet&&a.push({label:"钱包",key:"wallet",icon:()=>k(Ze),href:"/wallet"}),a.push({label:"设置",key:"setting",icon:()=>k(Ge),href:"/setting"}),t.state.userInfo.id>0?a:[{label:"广场",key:"home",icon:()=>k(re),href:"/"},{label:"话题",key:"topic",icon:()=>k(se),href:"/topic"}]}),g=a=>"href"in a?k("div",{},a.label):a.label,_=a=>a.key==="messages"?k($e,{dot:!0,show:n.value,processing:!0},{default:()=>k(K,{color:a.key===l.value?"var(--n-item-icon-color-active)":"var(--n-item-icon-color)"},{default:a.icon})}):k(K,null,{default:a.icon}),i=(a,v={})=>{l.value=a,h.push({name:a,query:{t:new Date().getTime()}})},O=()=>{r.path==="/"&&t.commit("refresh"),i("home")},m=a=>{t.commit("triggerAuth",!0),t.commit("triggerAuthKey",a)},b=()=>{t.commit("userLogout"),t.commit("refresh"),O()};return window.$store=t,window.$message=Se(),(a,v)=>{const D=De,$=xe,x=qe,p=me;return f(),R("div",bt,[w("div",kt,[s(D,{class:"logo-img",width:"36",src:d(yt),"preview-disabled":!0,onClick:O},null,8,["src"])]),s($,{accordion:!0,"icon-size":24,options:P.value,"render-label":g,"render-icon":_,value:l.value,"onUpdate:value":i},null,8,["options","value"]),d(t).state.userInfo.id>0?(f(),R("div",Lt,[s(x,{class:"user-avatar",round:"",size:34,src:d(t).state.userInfo.avatar},null,8,["src"]),w("div",Pt,[w("div",Tt,[w("span",At,A(d(t).state.userInfo.nickname),1),s(p,{class:"logout",quaternary:"",circle:"",size:"tiny",onClick:b},{icon:u(()=>[s(d(K),null,{default:u(()=>[s(d(ne))]),_:1})]),_:1})]),w("div",Rt,"@"+A(d(t).state.userInfo.username),1)]),w("div",Ot,[s(p,{class:"logout",quaternary:"",circle:"",onClick:b},{icon:u(()=>[s(d(K),{size:24},{default:u(()=>[s(d(ne))]),_:1})]),_:1})])])):(f(),R("div",Ct,[d(t).state.profile.allowUserRegister?E("",!0):(f(),R("div",Mt,[s(p,{strong:"",secondary:"",round:"",type:"primary",onClick:v[0]||(v[0]=C=>m("signin"))},{default:u(()=>[U(" 登录 ")]),_:1})])),d(t).state.profile.allowUserRegister?(f(),R("div",It,[s(p,{strong:"",secondary:"",round:"",type:"primary",onClick:v[1]||(v[1]=C=>m("signin"))},{default:u(()=>[U(" 登录 ")]),_:1}),s(p,{strong:"",secondary:"",round:"",type:"info",onClick:v[2]||(v[2]=C=>m("signup"))},{default:u(()=>[U(" 注册 ")]),_:1})])):E("",!0)]))])}}});const Ut=()=>o({method:"get",url:"/v1/site/profile"}),St={"has-sider":"",class:"main-wrap",position:"static"},$t={key:0},Dt={class:"content-wrap"},xt=V({__name:"App",setup(e){const t=W(),r=Q(()=>t.state.theme==="dark"?Fe:null);function h(){t.commit("loadDefaultSiteProfile"),Ut().then(n=>{t.commit("updateSiteProfile",n)}).catch(n=>{console.log(n)})}return B(()=>{h()}),(n,l)=>{const c=Et,I=ue("router-view"),P=wt,g=at,_=Ke,i=Ve,O=Be,m=Ne;return f(),F(m,{theme:r.value},{default:u(()=>[s(i,null,{default:u(()=>[s(_,null,{default:u(()=>{var b;return[w("div",{class:we(["app-container",{dark:((b=r.value)==null?void 0:b.name)==="dark",mobile:!d(t).state.desktopModelShow}])},[w("div",St,[d(t).state.desktopModelShow?(f(),R("div",$t,[s(c)])):E("",!0),w("div",Dt,[s(I,{class:"app-wrap"},{default:u(({Component:a})=>[(f(),F(ve,null,[n.$route.meta.keepAlive?(f(),F(oe(a),{key:0})):E("",!0)],1024)),n.$route.meta.keepAlive?E("",!0):(f(),F(oe(a),{key:0}))]),_:1})]),s(P)]),s(g)],2)]}),_:1})]),_:1}),s(O)]),_:1},8,["theme"])}}});ye(xt).use(he).use(tt).mount("#app");export{$o as $,io as A,co as B,ao as C,po as D,yt as E,Mo as F,Eo as G,Io as H,lt as I,ut as J,pr as K,Xo as L,ir as M,Do as N,xo as O,Vo as P,Zo as Q,Qo as R,Go as S,Jo as T,cr as U,ar as V,lr as W,mo as X,Fo as Y,Ko as Z,fe as _,nr as a,Y as a0,tr as a1,or as a2,rr as a3,Uo as a4,jo as a5,Ho as a6,Wo as a7,zo as a8,Yo as a9,So as aa,Et as ab,_o as b,ho as c,no as d,er as e,qo as f,sr as g,Bo as h,ur as i,Po as j,Co as k,bo as l,ko as m,Oo as n,Ao as o,Ro as p,To as q,lo as r,uo as s,Lo as t,No as u,fo as v,go as w,vo as x,wo as y,yo as z};