webpackJsonp([1],{"/rWs":function(n,t,e){"use strict";function i(n){return l._19(0,[(n()(),l._2(0,0,null,null,10,"div",[["class","video-archive full-screen"]],null,null,null,null,null)),(n()(),l._18(-1,null,["\n  "])),(n()(),l._2(2,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),l._18(-1,null,["\n\n    "])),(n()(),l._2(4,0,null,null,1,"div",[["class","h1"]],null,null,null,null,null)),(n()(),l._18(5,null,["",""])),(n()(),l._18(-1,null,["\n    "])),(n()(),l._2(7,0,null,null,1,"div",[["class","p"]],null,null,null,null,null)),(n()(),l._18(8,null,["",""])),(n()(),l._18(-1,null,["\n\n  "])),(n()(),l._18(-1,null,["\n"]))],null,function(n,t){var e=t.component;n(t,5,0,e.i18n.translate(e.videoArchive.content,"title")),n(t,8,0,e.i18n.translate(e.videoArchive.content,"description"))})}function o(n){return l._19(0,[(n()(),l.X(16777216,null,null,1,null,i)),l._1(1,16384,null,0,r.i,[l.M,l.J],{ngIf:[0,"ngIf"]},null),(n()(),l._18(-1,null,["\n"]))],function(n,t){n(t,1,0,t.component.videoArchive.loaded)},null)}Object.defineProperty(t,"__esModule",{value:!0});var l=e("LMZF"),a=function(){},r=e("Un6q"),u=e("GZB0"),c=e("fgj+"),s=(e("RSzd"),e("Dv4c"),e("ivSB"),function(){function n(){this.init()}return n.prototype.init=function(){this.content={title:void 0,description:void 0},this.videos=[],this.loaded=!1},n.prototype.initialize=function(n,t,e){try{this.content=n.content,this.videos=n.videos,this.feature=t.videoArchive,this.languages=e,this.loaded=!0}catch(n){console.warn("Ooops, something went wrong..."),this.init()}},n}()),d=function(){function n(n,t,e,i,o,l,a,r,u){var c=this;this.communication=n,this.cdr=t,this.globals=e,this.http=i,this.i18n=o,this.page=l,this.route=a,this.router=r,this.url=u,this.videoArchive=new s,this.subscription=this.communication.onLanguageChanged$.subscribe(function(){return c.navigate()})}return n.prototype.ngOnInit=function(){var n,t=this;this.route.paramMap.switchMap(function(e){if(t.videoArchive.loaded)return t.detectUrlLanguage(e.get("url")),Object(u.a)("");if(t.globals.json.videoArchive.loaded){var i=t.globals.json.videoArchive,o=t.globals.json.features,l=t.globals.json.languages;return i.loaded&&o.loaded&&l.loaded?(t.videoArchive.initialize(i.data,o.data,l.data),t.communication.updateFeature("videoArchive"),t.detectUrlLanguage(e.get("url"))):(console.warn("Ooops, something went wrong..."),t.videoArchive.loaded=!1),Object(u.a)("")}return n=e.get("url"),Object(c.a)(t.http.get(t.globals.pathTo.videoArchive).retry(3))}).subscribe(function(e){if(!1===t.videoArchive.loaded)try{t.globals.json.videoArchive.data=e.data,t.globals.json.videoArchive.loaded=!0;var i=t.globals.json.features,o=t.globals.json.languages;i.loaded&&o.loaded&&(t.videoArchive.initialize(t.globals.json.videoArchive.data,i.data,o.data),t.communication.updateFeature("videoArchive"),t.detectUrlLanguage(n))}catch(n){console.warn("Ooops, something went wrong..."),t.videoArchive.loaded=!1}t.page.updateTitle(t.i18n.translate(t.videoArchive.feature,"title")),t.page.updateDescription(t.i18n.translate(t.videoArchive.content,"title"))},function(n){console.warn("Ooops, something went wrong..."),t.videoArchive.loaded=!1})},n.prototype.detectUrlLanguage=function(n){var t=this.url.detectedUrlLanguage(n,this.videoArchive.feature,this.videoArchive.languages);""===t?this.navigate():this.communication.updateLanguage(t)},n.prototype.navigate=function(){this.router.navigate([this.globals.routes.videoArchive+this.i18n.translate(this.videoArchive.feature,"route")])},n.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},n}(),v=e("wwDG"),h=e("yhGf"),g=e("9iV4"),p=e("lcT1"),f=e("QjUj"),_=e("UHIZ"),b=e("RDPe"),A=l._0({encapsulation:0,styles:[[".video-archive[_ngcontent-%COMP%]{overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch;will-change:transform;-webkit-transform:translateZ(0);transform:translateZ(0);background-color:#fff}.video-archive[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{padding:50px 20px}.video-archive[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:42px;text-align:center;text-transform:uppercase;margin:50px 0}.video-archive[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   .p[_ngcontent-%COMP%]{padding:50px;text-align:justify;text-indent:50px;font-size:24px}"]],data:{}}),m=l.Y("app-video-archive",d,function(n){return l._19(0,[(n()(),l._2(0,0,null,null,1,"app-video-archive",[],null,null,null,o,A)),l._1(1,245760,null,0,d,[v.a,l.h,h.a,g.c,p.a,f.a,_.a,_.k,b.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),w=function(){};e.d(t,"VideoArchiveModuleNgFactory",function(){return j});var j=l.Z(a,[],function(n){return l._12([l._13(512,l.j,l.V,[[8,[m]],[3,l.j],l.v]),l._13(4608,r.k,r.j,[l.s,[2,r.o]]),l._13(512,r.b,r.b,[]),l._13(512,_.m,_.m,[[2,_.r],[2,_.k]]),l._13(512,w,w,[]),l._13(512,a,a,[]),l._13(1024,_.i,function(){return[[{path:"",component:d},{path:":url",component:d}]]},[])])})}});