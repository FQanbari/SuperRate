(function(){"use strict";var e={436:function(e,t,s){var i=s(963),n=s(252);function o(e,t,s,i,o,r){const a=(0,n.up)("UserData");return(0,n.wg)(),(0,n.j4)(a,{msg:"Welcome to Your Vue.js App"})}var r=s(577),a=s.p+"img/pngtree-cartoon-alien-spaceship.63b704c9.png",_=s.p+"img/HopeWell.d84f7dea.gif";const u=(0,n._)("nav",{class:"navbar"},[(0,n._)("img",{class:"nav_img",src:a}),(0,n._)("h1",null,"Super Rate")],-1),l={class:"main"},d={class:"inputs"},c={key:0,class:"user__notFound"},m=(0,n._)("span",null,"User Not Found",-1),h=[m],g={key:1,class:"user__loading"},v=(0,n._)("img",{src:_},null,-1),p=[v],f={class:"user"},w={class:"user__info"},b=["src"],y={class:"user__info-bio"},P={class:"user__info-item"},k={class:"user__info-item"},U={class:"user__info-item user__info--txt"},A={class:"user__data"},I={class:"user__data-item"},R={class:"user__data-item user__item--h"},C=(0,n._)("div",null,"follower",-1),O={class:"user__data-item user__item--h"},D=(0,n._)("div",null,"Avarage likes",-1),x={class:"user__data-item"},N={class:"user__data-item user__item--h"},q=(0,n._)("div",null,"following",-1),S={class:"user__data-item user__item--h"},F=(0,n._)("div",null,"Average Comments",-1),G={class:"user__data-item"},j={class:"user__data-item user__item--h"},z=(0,n._)("div",null,"posts",-1),L={class:"user__data-item user__item--h"},V=(0,n._)("div",null,"Average View Video",-1);function M(e,t){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",null,[u,(0,n._)("div",l,[(0,n._)("div",d,[(0,n.wy)((0,n._)("input",{class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.userName=t),placeholder:"Username .."},null,512),[[i.nr,e.userName]]),(0,n._)("button",{class:"btn",onClick:t[1]||(t[1]=t=>e.Init())},"Show Data")])])]),e.notFound&&!e.loading?((0,n.wg)(),(0,n.iD)("div",c,h)):(0,n.kq)("",!0),e.loading?((0,n.wg)(),(0,n.iD)("div",g,p)):(0,n.kq)("",!0),(0,n._)("div",f,[e.loading?(0,n.kq)("",!0):(0,n.wy)(((0,n.wg)(),(0,n.iD)("div",{key:0,class:(0,r.C_)(e.user.username?"user__bc--style":"")},[(0,n._)("div",w,[(0,n._)("img",{class:"user__avatar",src:e.user.profileImage},null,8,b),(0,n._)("div",y,[(0,n._)("div",P,(0,r.zw)(e.user.username),1),(0,n._)("div",k,(0,r.zw)(e.user.full_name),1),(0,n._)("div",U,(0,r.zw)(e.user.biography),1)])]),(0,n._)("div",A,[(0,n._)("div",I,[(0,n._)("div",R,[C,(0,n._)("div",null,(0,r.zw)(e.user.follower),1)]),(0,n._)("div",O,[D,(0,n._)("div",null,(0,r.zw)(e.user_posts.avg_likes),1)])]),(0,n._)("div",x,[(0,n._)("div",N,[q,(0,n._)("div",null,(0,r.zw)(e.user.following),1)]),(0,n._)("div",S,[F,(0,n._)("div",null,(0,r.zw)(e.user_posts.avg_comments),1)])]),(0,n._)("div",G,[(0,n._)("div",j,[z,(0,n._)("div",null,(0,r.zw)(e.user.posts_Count),1)]),(0,n._)("div",L,[V,(0,n._)("div",null,(0,r.zw)(e.user_posts.avg_view),1)])])])],2)),[[i.F8,e.user.username]])])],64)}var E=s(669),T=s.n(E);let W=window.location.href;const H={API_URL:W+"api",PHOTO_URL:W+"photo",INASTAGRAM_API_URL:"https://i.instagram.com/api/v1/"};let J=[];var Z=(0,n.aZ)({data(){return{userName:"",instagramUserData:{},user:{},user_posts:J,loading:!1,notFound:!1,avg_likes:0,usernametest:"bugfathercom"}},methods:{Init(){this.loading=!0,this.notFound=!1;let e=this;J=[],J.sum_likes=0,J.sum_video_view=0,J.sum_comments=0,J.video_count=0,this.user={},this.user_posts=[],this.GetUserByUserName(this.userName).then((function(t){let s=t;e.user.full_name=s.full_name,e.user.biography=s.biography,e.user.is_private=s.is_private,e.user.follower=s.edge_followed_by.count,e.user.following=s.edge_follow.count,e.user.posts_Count=s.edge_owner_to_timeline_media.count,e.user.username=s.username,e.user.Id=s.id,e.init_end_cursor=s.edge_owner_to_timeline_media.page_info.end_cursor,e.init_has_next_page=s.edge_owner_to_timeline_media.page_info.has_next_page,e.ProcessPostsArray(s.edge_owner_to_timeline_media.edges).then((function(){e.getUserPosts(s.edge_owner_to_timeline_media.count).then((t=>{t.length==e.user.posts_Count&&(J.avg_likes=J.sum_likes/e.user.posts_Count|0,J.avg_comments=J.sum_comments/e.user.posts_Count|0,J.avg_view=J.sum_video_view/J.video_count|0,e.user_posts=J),e.loading=!1})),e.GetAvatar(s.profile_pic_url,s.username).then((t=>{e.user.profileImage=t,console.log(t)}))}))}))},GetUserByUserName(e){return new Promise((t=>{let s=H.API_URL+"/UserData/UserInfo/"+e,i=this.CreateRequest(s);t(i)}))},CreateRequest(e){return new Promise((t=>{T().get(e).then((e=>{var s=e.data.data;console.log(s),t(e.data.data.user)})).catch((e=>{this.notFound=!0,this.loading=!1,console.log(e.toString())}))}))},CreateRequestWithData(e,t){return new Promise((s=>{T().get(e+t).then((e=>{s(e.data.data.user)})).catch((e=>{this.notFound=!0,this.loading=!1,console.log(e.toString())}))}))},ProcessPostsArray(e){let t=[],s=this;return new Promise((i=>{e.forEach((function(e){let i=e.node,n={};switch(n.id=i.id,n.__typename=i.__typename,0!==Object.keys(i.shortcode).length?n.shortcode=i.shortcode:n.shortcode=null,n.dimensions=i.dimensions,n.display_url=i.display_url,n.is_video=i.is_video,n.thumbnail_src=i.thumbnail_src,n.thumbnail_resources=i.thumbnail_resources,i.__typename){case"GraphVideo":n.video_url=i.video_url,n.has_audio=i.has_audio,n.video_view_count=i.video_view_count,J.sum_video_view+=n.video_view_count,J.video_count++;break;case"GraphSidecar":n.slides=s.ProcessPostsSlides(i.edge_sidecar_to_children.edges);break}n.comments_disabled=i.comments_disabled,i.edge_media_preview_like.count>0?n.like_count=i.edge_media_preview_like.count:n.like_count=0,n.comment_count=i.edge_media_to_comment.count,n.caption=i.edge_media_to_caption.edges[0].node.text,J.sum_likes+=n.like_count,J.sum_comments+=n.comment_count,t.push(n),J.push(n),n=null})),console.log(J),i(J)}))},ProcessPostsSlides(e){let t=[];return e.forEach((function(e){let s=e.node,i={};i.__typename=s.__typename,i.id=s.id,void 0!=s.shortcode?i.shortcode=s.shortcode:i.shortcode=null,i.dimensions=s.dimensions,i.display_url=s.display_url,i.is_video=s.is_video,"GraphVideo"==s.__typename&&(i.video_url=s.video_url,i.video_view_count=s.video_view_count,i.has_audio=s.has_audio),t=i})),t},getUserPosts(e){let t=J.length;return new Promise((s=>{this.init_has_next_page?(e<t&&s(J.slice(J,0,e)),e>t&&this.RunPostMaker(this.init_end_cursor,this.init_has_next_page,e).then((t=>{console.log(t),J.length>e?s(J.splice(0,e)):s(J)}))):J.length>e?s(J.splice(0,e)):s(J)}))},RunPostMaker(e,t,s){let i=this;return new Promise((n=>{t?i.user_posts.length<=s&&i.FetchPosts(e).then((function(e){n(i.RunPostMaker(e.end_cursor,e.has_next_page,s))})):n(t)}))},FetchPosts(e){let t=this;return new Promise((s=>{let i="396983faee97f4b49ccbe105b4daf7a0",n={};n.id=JSON.parse(JSON.stringify(t.user)).Id,n.first=12,n.after=e;let o=[];o.query_hash=i,o.variables=n,t.UserPostsInfo(o).then((function(e){let i=e.edge_owner_to_timeline_media.edges;t.ProcessPostsArray(i).then((t=>{let i=e.edge_owner_to_timeline_media.page_info.has_next_page,n=e.edge_owner_to_timeline_media.page_info.end_cursor;console.log(t),s({posts:t,has_next_page:i,end_cursor:n})}))}))}))},UserPostsInfo(e){let t={query_hash:e.query_hash,variables:encodeURIComponent(JSON.stringify(e.variables))};return new Promise((e=>{let s=H.API_URL+"/UserData/PostsInfo/",i=t.query_hash+"&variables="+t.variables;this.CreateRequestWithData(s,i).then((function(t){e(t)}))}))},GetAvatar(e,t){let s=this,i={UrlImage:e.toString(),UserName:t};return new Promise((e=>{let t=H.API_URL+"/UserData/GetAvatar";s.CreateRequestPost(t,i).then((t=>{e(t)}))}))},CreateRequestPost(e,t){return new Promise((s=>{T().post(e,t).then((e=>{s(e.data)})).catch((e=>{console.log(e.toString())}))}))},GetUserData(){T().get(H.API_URL+"/UserData?userName="+this.User).then((e=>{this.userName=e.data,this.userdata=e.data.data,this.pic=this.userdata.user.profile_pic_url,this.fullname=this.userdata.user.full_name,this.biography=this.userdata.user.biography,this.folowers=this.userdata.user.edge_followed_by.count,this.folowing=this.userdata.user.edge_follow.count,this.posts=this.userdata.user.edge_owner_to_timeline_media.count;let t=0,s=0;e.data.data.user.edge_owner_to_timeline_media.edges.forEach((function(e,i){s+=e.node.edge_liked_by.count,t=i}),this.avg_likes=s/t)}))}}}),B=s(744);const Y=(0,B.Z)(Z,[["render",M]]);var K=Y,Q={name:"App",components:{UserData:K}};const X=(0,B.Z)(Q,[["render",o]]);var $=X;(0,i.ri)($).mount("#app")}},t={};function s(i){var n=t[i];if(void 0!==n)return n.exports;var o=t[i]={exports:{}};return e[i](o,o.exports,s),o.exports}s.m=e,function(){var e=[];s.O=function(t,i,n,o){if(!i){var r=1/0;for(l=0;l<e.length;l++){i=e[l][0],n=e[l][1],o=e[l][2];for(var a=!0,_=0;_<i.length;_++)(!1&o||r>=o)&&Object.keys(s.O).every((function(e){return s.O[e](i[_])}))?i.splice(_--,1):(a=!1,o<r&&(r=o));if(a){e.splice(l--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[i,n,o]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var i in t)s.o(t,i)&&!s.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,i){var n,o,r=i[0],a=i[1],_=i[2],u=0;if(r.some((function(t){return 0!==e[t]}))){for(n in a)s.o(a,n)&&(s.m[n]=a[n]);if(_)var l=_(s)}for(t&&t(i);u<r.length;u++)o=r[u],s.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return s.O(l)},i=self["webpackChunkclient_app"]=self["webpackChunkclient_app"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=s.O(void 0,[998],(function(){return s(436)}));i=s.O(i)})();
//# sourceMappingURL=app.2203f690.js.map