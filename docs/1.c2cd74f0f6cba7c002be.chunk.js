webpackJsonp([1],{"9nEs":function(n,t,u){"use strict";function l(n){return i._19(0,[(n()(),i._2(0,0,null,null,4,"div",[],null,null,null,null,null)),(n()(),i._18(-1,null,["\n      "])),(n()(),i._2(2,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),i._18(3,null,["",""])),(n()(),i._18(-1,null,["\n    "]))],null,function(n,t){var u=t.component;n(t,3,0,u.i18n(u.about,"title"))})}function o(n){return i._19(0,[(n()(),i._18(-1,null,["\n    "])),(n()(),i.X(16777216,null,null,1,null,l)),i._1(2,16384,null,0,a.i,[i.M,i.J],{ngIf:[0,"ngIf"]},null),(n()(),i._18(-1,null,["\n  "]))],function(n,t){n(t,2,0,t.component.loaded)},null)}Object.defineProperty(t,"__esModule",{value:!0});var i=u("LMZF"),e=function(){},a=u("Un6q"),r=u("AP4T"),s=u("5jKg");r.a.prototype.switchMap=function(n,t){return Object(s.a)(n,t)(this)};var c={json:"assets/about/about.json"},p=function(){function n(n,t,u,l,o){var i=this;this.httpGet=n,this.i18nService=t,this.langService=u,this.meta=l,this.route=o,this.loaded=!1,this.meta.update("About","Random list..."),this.subscription=this.langService.appUpdated$.subscribe(function(n){return i.app=n})}return n.prototype.ngOnInit=function(){var n=this;this.route.params.forEach(function(t){n.loaded=!1;var u=t.url;console.log(u),n.langService.verifyLanguage();var l=n.langService.detectedUrlLangChange(u,"about",n.app);l!==n.app.lang&&n.langService.changeLanguage(l),n.initializeAbout()})},n.prototype.initializeAbout=function(){var n=this;this.httpGet.get(c.json).subscribe(function(t){n.about=t.data.about,n.loaded=!0},function(n){console.log("Ooops, something went wrong!")})},n.prototype.i18n=function(n,t){return this.i18nService.i18n(n,t,this.app.lang)},n.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},n}(),h=u("BrUl"),f=u("hhWu"),b=u("dUnV"),g=u("ZehL"),_=u("UHIZ"),d=i._0({encapsulation:2,styles:[],data:{}}),v=i.Y("app-about",p,function(n){return i._19(0,[(n()(),i._2(0,0,null,null,1,"app-about",[],null,null,null,o,d)),i._1(1,245760,null,0,p,[h.a,f.a,b.a,g.a,_.a],null,null)],function(n,t){n(t,1,0)},null)},{},{},[]),y=function(){};u.d(t,"AboutModuleNgFactory",function(){return j});var j=i.Z(e,[],function(n){return i._12([i._13(512,i.j,i.V,[[8,[v]],[3,i.j],i.v]),i._13(4608,a.k,a.j,[i.s,[2,a.o]]),i._13(512,a.b,a.b,[]),i._13(512,_.n,_.n,[[2,_.s],[2,_.k]]),i._13(512,y,y,[]),i._13(512,e,e,[]),i._13(1024,_.i,function(){return[[{path:"",component:p}]]},[])])})}});