(function(){"use strict";var e={824:function(e,t,s){var n=s(963),i=s(252);function o(e,t,s,n,o,r){const a=(0,i.up)("UserData");return(0,i.wg)(),(0,i.j4)(a,{msg:"Welcome to Your Vue.js App"})}var r=s(577),a=s.p+"img/Circles-menu-3.07aae3e8.gif";const _=(0,i._)("nav",{class:"navbar"},[(0,i._)("h1",null,"Let's see the engagement rate")],-1),u={class:"main"},l={class:"inputs"},d={key:0,class:"user__notFound"},c=(0,i._)("span",null,"User Not Found",-1),m=[c],h={class:"user"},v={key:0,class:"user__loading"},g=(0,i._)("img",{src:a},null,-1),p=[g],f={key:1},w={class:"user__info"},b=["src"],y={class:"user__info-bio"},P={class:"user__info-item"},k={class:"user__info-item"},U={class:"user__info-item user__info--txt"},A={class:"user__data"},C={class:"user__data-item"},I={class:"user__data-item user__item--h"},R=(0,i._)("div",null,"follower",-1),O={class:"user__data-item user__item--h"},D=(0,i._)("div",null,"Avarage likes",-1),x={class:"user__data-item"},N={class:"user__data-item user__item--h"},q=(0,i._)("div",null,"following",-1),S={class:"user__data-item user__item--h"},F=(0,i._)("div",null,"Average Comments",-1),j={class:"user__data-item"},G={class:"user__data-item user__item--h"},z=(0,i._)("div",null,"posts",-1),L={class:"user__data-item user__item--h"},V=(0,i._)("div",null,"Average View Video",-1);function M(e,t){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,[_,(0,i._)("div",u,[(0,i._)("div",l,[(0,i.wy)((0,i._)("input",{class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.userName=t),placeholder:"Username .."},null,512),[[n.nr,e.userName]]),(0,i._)("button",{class:"btn",onClick:t[1]||(t[1]=t=>e.Init())},"Show Data")])])]),e.notFound?((0,i.wg)(),(0,i.iD)("div",d,m)):(0,i.kq)("",!0),(0,i._)("div",h,[e.loading?((0,i.wg)(),(0,i.iD)("div",v,p)):(0,i.kq)("",!0),e.loading?(0,i.kq)("",!0):(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",w,[(0,i._)("img",{class:"user__avatar",src:"../assets/avatar/"+e.user.username+".jpeg"},null,8,b),(0,i._)("div",y,[(0,i._)("div",P,(0,r.zw)(e.user.username),1),(0,i._)("div",k,(0,r.zw)(e.user.full_name),1),(0,i._)("div",U,(0,r.zw)(e.user.biography),1)])]),(0,i._)("button",{onClick:t[2]||(t[2]=t=>e.getUserPosts(e.user.posts_Count))}),(0,i._)("div",A,[(0,i._)("div",C,[(0,i._)("div",I,[R,(0,i._)("div",null,(0,r.zw)(e.user.follower),1)]),(0,i._)("div",O,[D,(0,i._)("div",null,(0,r.zw)(e.user_posts.avg_likes),1)])]),(0,i._)("div",x,[(0,i._)("div",N,[q,(0,i._)("div",null,(0,r.zw)(e.user.following),1)]),(0,i._)("div",S,[F,(0,i._)("div",null,(0,r.zw)(e.user_posts.avg_comments),1)])]),(0,i._)("div",j,[(0,i._)("div",G,[z,(0,i._)("div",null,(0,r.zw)(e.user.posts_Count),1)]),(0,i._)("div",L,[V,(0,i._)("div",null,(0,r.zw)(e.user_posts.avg_view),1)])])])],512)),[[n.F8,e.user.username]])])],64)}var T=s(669),E=s.n(T);const J={API_URL:"https://localhost:5001/api",PHOTO_URL:"https://localhost:5001/photo",INASTAGRAM_API_URL:"https://i.instagram.com/api/v1/"};let W=[];var Z=(0,i.aZ)({data(){return{userName:"",instagramUserData:{},user:{},user_posts:W,loading:!1,notFound:!1,avg_likes:0,usernametest:"bugfathercom"}},methods:{Init(){this.loading=!0,this.notFound=!1;let e=this;W=[],W.sum_likes=0,W.sum_video_view=0,W.sum_comments=0,W.video_count=0,this.user={},this.user_posts=[],this.GetUserByUserName(this.userName).then((function(t){let s=t;e.user.full_name=s.full_name,e.user.biography=s.biography,e.user.is_private=s.is_private,e.user.follower=s.edge_followed_by.count,e.user.following=s.edge_follow.count,e.user.posts_Count=s.edge_owner_to_timeline_media.count,e.user.username=s.username,e.user.Id=s.id,e.init_end_cursor=s.edge_owner_to_timeline_media.page_info.end_cursor,e.init_has_next_page=s.edge_owner_to_timeline_media.page_info.has_next_page,e.ProcessPostsArray(s.edge_owner_to_timeline_media.edges).then((function(){e.getUserPosts(s.edge_owner_to_timeline_media.count).then((t=>{t.length==e.user.posts_Count&&(W.avg_likes=W.sum_likes/e.user.posts_Count|0,W.avg_comments=W.sum_comments/e.user.posts_Count|0,W.avg_view=W.sum_video_view/W.video_count|0,e.user_posts=W),e.loading=!1})),e.user.profileImage=e.GetAvatar(s.profile_pic_url,s.username)}))}))},GetUserByUserName(e){return new Promise((t=>{let s=J.API_URL+"/UserData/UserInfo/"+e,n=this.CreateRequest(s);t(n)}))},CreateRequest(e){return new Promise((t=>{E().get(e).then((e=>{t(e.data.data.user)})).catch((e=>{this.notFound=!0,console.log(e.toString())}))}))},CreateRequestWithData(e,t){return new Promise((s=>{E().get(e+t).then((e=>{s(e.data.data.user)})).catch((e=>{this.notFound=!0,console.log(e.toString())}))}))},ProcessPostsArray(e){let t=[],s=this;return new Promise((n=>{e.forEach((function(e){let n=e.node,i={};switch(i.id=n.id,i.__typename=n.__typename,0!==Object.keys(n.shortcode).length?i.shortcode=n.shortcode:i.shortcode=null,i.dimensions=n.dimensions,i.display_url=n.display_url,i.is_video=n.is_video,i.thumbnail_src=n.thumbnail_src,i.thumbnail_resources=n.thumbnail_resources,n.__typename){case"GraphVideo":i.video_url=n.video_url,i.has_audio=n.has_audio,i.video_view_count=n.video_view_count,W.sum_video_view+=i.video_view_count,W.video_count++;break;case"GraphSidecar":i.slides=s.ProcessPostsSlides(n.edge_sidecar_to_children.edges);break}i.comments_disabled=n.comments_disabled,n.edge_media_preview_like.count>0?i.like_count=n.edge_media_preview_like.count:i.like_count=0,i.comment_count=n.edge_media_to_comment.count,i.caption=n.edge_media_to_caption.edges[0].node.text,W.sum_likes+=i.like_count,W.sum_comments+=i.comment_count,t.push(i),W.push(i),i=null})),console.log(W),n(W)}))},ProcessPostsSlides(e){let t=[];return e.forEach((function(e){let s=e.node,n={};n.__typename=s.__typename,n.id=s.id,void 0!=s.shortcode?n.shortcode=s.shortcode:n.shortcode=null,n.dimensions=s.dimensions,n.display_url=s.display_url,n.is_video=s.is_video,"GraphVideo"==s.__typename&&(n.video_url=s.video_url,n.video_view_count=s.video_view_count,n.has_audio=s.has_audio),t=n})),t},getUserPosts(e){let t=W.length;return new Promise((s=>{this.init_has_next_page?(e<t&&s(W.slice(W,0,e)),e>t&&this.RunPostMaker(this.init_end_cursor,this.init_has_next_page,e).then((t=>{console.log(t),W.length>e?s(W.splice(0,e)):s(W)}))):W.length>e?s(W.splice(0,e)):s(W)}))},RunPostMaker(e,t,s){let n=this;return new Promise((i=>{t?n.user_posts.length<=s&&n.FetchPosts(e).then((function(e){i(n.RunPostMaker(e.end_cursor,e.has_next_page,s))})):i(t)}))},FetchPosts(e){let t=this;return new Promise((s=>{let n="396983faee97f4b49ccbe105b4daf7a0",i={};i.id=JSON.parse(JSON.stringify(t.user)).Id,i.first=12,i.after=e;let o=[];o.query_hash=n,o.variables=i,t.UserPostsInfo(o).then((function(e){let n=e.edge_owner_to_timeline_media.edges;t.ProcessPostsArray(n).then((t=>{let n=e.edge_owner_to_timeline_media.page_info.has_next_page,i=e.edge_owner_to_timeline_media.page_info.end_cursor;console.log(t),s({posts:t,has_next_page:n,end_cursor:i})}))}))}))},UserPostsInfo(e){let t={query_hash:e.query_hash,variables:encodeURIComponent(JSON.stringify(e.variables))};return new Promise((e=>{let s=J.API_URL+"/UserData/PostsInfo/",n=t.query_hash+"&variables="+t.variables;this.CreateRequestWithData(s,n).then((function(t){e(t)}))}))},GetAvatar(e,t){let s=this,n={UrlImage:e.toString(),UserName:t};return new Promise((e=>{let t=J.API_URL+"/UserData/GetAvatar";s.CreateRequestPost(t,n).then((t=>{e(t)}))}))},CreateRequestPost(e,t){return new Promise((s=>{E().post(e,t).then((e=>{s(e.data.data.user)})).catch((e=>{console.log(e.toString())}))}))},GetUserData(){E().get(J.API_URL+"/UserData?userName="+this.User).then((e=>{this.userName=e.data,this.userdata=e.data.data,this.pic=this.userdata.user.profile_pic_url,this.fullname=this.userdata.user.full_name,this.biography=this.userdata.user.biography,this.folowers=this.userdata.user.edge_followed_by.count,this.folowing=this.userdata.user.edge_follow.count,this.posts=this.userdata.user.edge_owner_to_timeline_media.count;let t=0,s=0;e.data.data.user.edge_owner_to_timeline_media.edges.forEach((function(e,n){s+=e.node.edge_liked_by.count,t=n}),this.avg_likes=s/t)}))}}}),B=s(744);const H=(0,B.Z)(Z,[["render",M]]);var Y=H,K={name:"App",components:{UserData:Y}};const Q=(0,B.Z)(K,[["render",o]]);var X=Q;n.ri.config.productionTip=!1,(0,n.ri)(X).mount("#app")}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,n,i,o){if(!n){var r=1/0;for(l=0;l<e.length;l++){n=e[l][0],i=e[l][1],o=e[l][2];for(var a=!0,_=0;_<n.length;_++)(!1&o||r>=o)&&Object.keys(s.O).every((function(e){return s.O[e](n[_])}))?n.splice(_--,1):(a=!1,o<r&&(r=o));if(a){e.splice(l--,1);var u=i();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,i,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,r=n[0],a=n[1],_=n[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(i in a)s.o(a,i)&&(s.m[i]=a[i]);if(_)var l=_(s)}for(t&&t(n);u<r.length;u++)o=r[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(l)},n=self["webpackChunkclient_app"]=self["webpackChunkclient_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(824)}));n=s.O(n)})();
//# sourceMappingURL=app.6e9011cb.js.map