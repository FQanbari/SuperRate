(function(){"use strict";var e={896:function(e,t,s){var n=s(963),i=s(252);function r(e,t,s,n,r,o){const a=(0,i.up)("UserData");return(0,i.wg)(),(0,i.j4)(a,{msg:"Welcome to Your Vue.js App"})}var o=s(577),a=s.p+"img/pngtree-cartoon-alien-spaceship.63b704c9.png",_=s.p+"img/Pin-on-UI-UX.3dc9eb32.gif";const u=(0,i._)("nav",{class:"navbar"},[(0,i._)("img",{class:"nav_img",src:a}),(0,i._)("h1",null,"Super Rate")],-1),l={class:"main"},d={class:"inputs"},c={key:0,class:"user__notFound"},m=(0,i._)("span",null,"User Not Found",-1),h=[m],v={key:1,class:"user__loading"},g=(0,i._)("img",{src:_},null,-1),p=[g],f={key:0},w={class:"user__info"},b=["src"],y=["src"],P={class:"user__info-bio"},U={class:"user__info-item"},k={class:"user__info-item"},A={class:"user__info-item user__info--txt"},I={class:"user__data"},R={class:"user__data-item"},C={class:"user__data-item user__item--h"},O=(0,i._)("div",null,"follower",-1),D={class:"user__data-item user__item--h"},x=(0,i._)("div",null,"Avarage likes",-1),N={class:"user__data-item"},q={class:"user__data-item user__item--h"},S=(0,i._)("div",null,"following",-1),F={class:"user__data-item user__item--h"},j=(0,i._)("div",null,"Average Comments",-1),G={class:"user__data-item"},z={class:"user__data-item user__item--h"},L=(0,i._)("div",null,"posts",-1),V={class:"user__data-item user__item--h"},M=(0,i._)("div",null,"Average View Video",-1);function E(e,t){return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("div",null,[u,(0,i._)("div",l,[(0,i._)("div",d,[(0,i.wy)((0,i._)("input",{class:"input",type:"text","onUpdate:modelValue":t[0]||(t[0]=t=>e.userName=t),placeholder:"Username .."},null,512),[[n.nr,e.userName]]),(0,i._)("button",{class:"btn",onClick:t[1]||(t[1]=t=>e.Init())},"Show Data")])])]),e.notFound?((0,i.wg)(),(0,i.iD)("div",c,h)):(0,i.kq)("",!0),e.loading?((0,i.wg)(),(0,i.iD)("div",v,p)):(0,i.kq)("",!0),(0,i._)("div",{class:(0,o.C_)(["user",e.user.username?"user__bc--style":""])},[e.loading?(0,i.kq)("",!0):(0,i.wy)(((0,i.wg)(),(0,i.iD)("div",f,[(0,i._)("div",w,[(0,i._)("img",{class:"user__avatar",src:"../assets/avatar/"+e.user.username+".jpeg"},null,8,b),(0,i._)("img",{class:"user__avatar",src:"../assets/avatar/"+e.user.username+".Jpeg"},null,8,y),(0,i._)("div",P,[(0,i._)("div",U,(0,o.zw)(e.user.username),1),(0,i._)("div",k,(0,o.zw)(e.user.full_name),1),(0,i._)("div",A,(0,o.zw)(e.user.biography),1)])]),(0,i._)("div",I,[(0,i._)("div",R,[(0,i._)("div",C,[O,(0,i._)("div",null,(0,o.zw)(e.user.follower),1)]),(0,i._)("div",D,[x,(0,i._)("div",null,(0,o.zw)(e.user_posts.avg_likes),1)])]),(0,i._)("div",N,[(0,i._)("div",q,[S,(0,i._)("div",null,(0,o.zw)(e.user.following),1)]),(0,i._)("div",F,[j,(0,i._)("div",null,(0,o.zw)(e.user_posts.avg_comments),1)])]),(0,i._)("div",G,[(0,i._)("div",z,[L,(0,i._)("div",null,(0,o.zw)(e.user.posts_Count),1)]),(0,i._)("div",V,[M,(0,i._)("div",null,(0,o.zw)(e.user_posts.avg_view),1)])])])],512)),[[n.F8,e.user.username]])],2)],64)}var J=s(669),T=s.n(J);let W=window.location.href;const Z={API_URL:W+"api",PHOTO_URL:W+"photo",INASTAGRAM_API_URL:"https://i.instagram.com/api/v1/"};let B=[];var H=(0,i.aZ)({data(){return{userName:"",instagramUserData:{},user:{},user_posts:B,loading:!1,notFound:!1,avg_likes:0,usernametest:"bugfathercom"}},methods:{Init(){this.loading=!0,this.notFound=!1;let e=this;B=[],B.sum_likes=0,B.sum_video_view=0,B.sum_comments=0,B.video_count=0,this.user={},this.user_posts=[],this.GetUserByUserName(this.userName).then((function(t){let s=t;e.user.full_name=s.full_name,e.user.biography=s.biography,e.user.is_private=s.is_private,e.user.follower=s.edge_followed_by.count,e.user.following=s.edge_follow.count,e.user.posts_Count=s.edge_owner_to_timeline_media.count,e.user.username=s.username,e.user.Id=s.id,e.init_end_cursor=s.edge_owner_to_timeline_media.page_info.end_cursor,e.init_has_next_page=s.edge_owner_to_timeline_media.page_info.has_next_page,e.ProcessPostsArray(s.edge_owner_to_timeline_media.edges).then((function(){e.getUserPosts(s.edge_owner_to_timeline_media.count).then((t=>{t.length==e.user.posts_Count&&(B.avg_likes=B.sum_likes/e.user.posts_Count|0,B.avg_comments=B.sum_comments/e.user.posts_Count|0,B.avg_view=B.sum_video_view/B.video_count|0,e.user_posts=B),e.loading=!1})),e.user.profileImage=e.GetAvatar(s.profile_pic_url,s.username)}))}))},GetUserByUserName(e){return new Promise((t=>{let s=Z.API_URL+"/UserData/UserInfo/"+e,n=this.CreateRequest(s);t(n)}))},CreateRequest(e){return new Promise((t=>{T().get(e).then((e=>{var s=e.data.data;console.log(s),t(e.data.data.user)})).catch((e=>{this.notFound=!0,this.loading=!1,console.log(e.toString())}))}))},CreateRequestWithData(e,t){return new Promise((s=>{T().get(e+t).then((e=>{s(e.data.data.user)})).catch((e=>{this.notFound=!0,this.loading=!1,console.log(e.toString())}))}))},ProcessPostsArray(e){let t=[],s=this;return new Promise((n=>{e.forEach((function(e){let n=e.node,i={};switch(i.id=n.id,i.__typename=n.__typename,0!==Object.keys(n.shortcode).length?i.shortcode=n.shortcode:i.shortcode=null,i.dimensions=n.dimensions,i.display_url=n.display_url,i.is_video=n.is_video,i.thumbnail_src=n.thumbnail_src,i.thumbnail_resources=n.thumbnail_resources,n.__typename){case"GraphVideo":i.video_url=n.video_url,i.has_audio=n.has_audio,i.video_view_count=n.video_view_count,B.sum_video_view+=i.video_view_count,B.video_count++;break;case"GraphSidecar":i.slides=s.ProcessPostsSlides(n.edge_sidecar_to_children.edges);break}i.comments_disabled=n.comments_disabled,n.edge_media_preview_like.count>0?i.like_count=n.edge_media_preview_like.count:i.like_count=0,i.comment_count=n.edge_media_to_comment.count,i.caption=n.edge_media_to_caption.edges[0].node.text,B.sum_likes+=i.like_count,B.sum_comments+=i.comment_count,t.push(i),B.push(i),i=null})),console.log(B),n(B)}))},ProcessPostsSlides(e){let t=[];return e.forEach((function(e){let s=e.node,n={};n.__typename=s.__typename,n.id=s.id,void 0!=s.shortcode?n.shortcode=s.shortcode:n.shortcode=null,n.dimensions=s.dimensions,n.display_url=s.display_url,n.is_video=s.is_video,"GraphVideo"==s.__typename&&(n.video_url=s.video_url,n.video_view_count=s.video_view_count,n.has_audio=s.has_audio),t=n})),t},getUserPosts(e){let t=B.length;return new Promise((s=>{this.init_has_next_page?(e<t&&s(B.slice(B,0,e)),e>t&&this.RunPostMaker(this.init_end_cursor,this.init_has_next_page,e).then((t=>{console.log(t),B.length>e?s(B.splice(0,e)):s(B)}))):B.length>e?s(B.splice(0,e)):s(B)}))},RunPostMaker(e,t,s){let n=this;return new Promise((i=>{t?n.user_posts.length<=s&&n.FetchPosts(e).then((function(e){i(n.RunPostMaker(e.end_cursor,e.has_next_page,s))})):i(t)}))},FetchPosts(e){let t=this;return new Promise((s=>{let n="396983faee97f4b49ccbe105b4daf7a0",i={};i.id=JSON.parse(JSON.stringify(t.user)).Id,i.first=12,i.after=e;let r=[];r.query_hash=n,r.variables=i,t.UserPostsInfo(r).then((function(e){let n=e.edge_owner_to_timeline_media.edges;t.ProcessPostsArray(n).then((t=>{let n=e.edge_owner_to_timeline_media.page_info.has_next_page,i=e.edge_owner_to_timeline_media.page_info.end_cursor;console.log(t),s({posts:t,has_next_page:n,end_cursor:i})}))}))}))},UserPostsInfo(e){let t={query_hash:e.query_hash,variables:encodeURIComponent(JSON.stringify(e.variables))};return new Promise((e=>{let s=Z.API_URL+"/UserData/PostsInfo/",n=t.query_hash+"&variables="+t.variables;this.CreateRequestWithData(s,n).then((function(t){e(t)}))}))},GetAvatar(e,t){let s=this,n={UrlImage:e.toString(),UserName:t};return new Promise((e=>{let t=Z.API_URL+"/UserData/GetAvatar";s.CreateRequestPost(t,n).then((t=>{e(t)}))}))},CreateRequestPost(e,t){return new Promise((s=>{T().post(e,t).then((e=>{s(e.data.data.user)})).catch((e=>{console.log(e.toString())}))}))},GetUserData(){T().get(Z.API_URL+"/UserData?userName="+this.User).then((e=>{this.userName=e.data,this.userdata=e.data.data,this.pic=this.userdata.user.profile_pic_url,this.fullname=this.userdata.user.full_name,this.biography=this.userdata.user.biography,this.folowers=this.userdata.user.edge_followed_by.count,this.folowing=this.userdata.user.edge_follow.count,this.posts=this.userdata.user.edge_owner_to_timeline_media.count;let t=0,s=0;e.data.data.user.edge_owner_to_timeline_media.edges.forEach((function(e,n){s+=e.node.edge_liked_by.count,t=n}),this.avg_likes=s/t)}))}}}),Y=s(744);const X=(0,Y.Z)(H,[["render",E]]);var K=X,Q={name:"App",components:{UserData:K}};const $=(0,Y.Z)(Q,[["render",r]]);var ee=$;(0,n.ri)(ee).mount("#app")}},t={};function s(n){var i=t[n];if(void 0!==i)return i.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,s),r.exports}s.m=e,function(){var e=[];s.O=function(t,n,i,r){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],i=e[l][1],r=e[l][2];for(var a=!0,_=0;_<n.length;_++)(!1&r||o>=r)&&Object.keys(s.O).every((function(e){return s.O[e](n[_])}))?n.splice(_--,1):(a=!1,r<o&&(o=r));if(a){e.splice(l--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[n,i,r]}}(),function(){s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,{a:t}),t}}(),function(){s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.p="/"}(),function(){var e={143:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,r,o=n[0],a=n[1],_=n[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(i in a)s.o(a,i)&&(s.m[i]=a[i]);if(_)var l=_(s)}for(t&&t(n);u<o.length;u++)r=o[u],s.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return s.O(l)},n=self["webpackChunkclient_app"]=self["webpackChunkclient_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=s.O(void 0,[998],(function(){return s(896)}));n=s.O(n)})();
//# sourceMappingURL=app.bb602666.js.map