"use strict";(self.webpackChunkbeeflor=self.webpackChunkbeeflor||[]).push([[125],{125:(p,c,l)=>{l.r(c),l.d(c,{StartModule:()=>g});var d=l(895),r=l(322),n=l(256);const a=[{path:"",component:(()=>{class e{constructor(t){this.router=t,this.currentIndex=0,this.boton=!1}ngOnInit(){this.startCarousel()}ngOnDestroy(){this.stopCarousel()}startCarousel(){this.carouselInterval=setInterval(()=>{this.nextSlide()},6e3)}pauseCarousel(){this.stopCarousel()}nextSlide(){const t=document.getElementsByClassName("slide-open"),i=(this.currentIndex+1)%t.length;t[i].click(),this.currentIndex=i}stopCarousel(){clearInterval(this.carouselInterval)}desing(){this.router.navigate(["dise\xf1o"])}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(r.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-banner"]],decls:37,vars:0,consts:[["id","carrusel",3,"mouseenter","mouseleave"],[1,"slide"],[1,"slide-inner"],["type","radio","id","slide-1","name","slide","aria-hidden","true","hidden","","checked","checked","autoplay","",1,"slide-open"],[1,"slide-item"],[1,"continer-button-pers"],[1,"button-desing"],[3,"click"],["type","radio","id","slide-2","name","slide","aria-hidden","true","hidden","","autoplay","",1,"slide-open"],["src","assets/img/banner2.png"],["type","radio","id","slide-3","name","slide","aria-hidden","true","hidden","","autoplay","",1,"slide-open"],["src","assets/img/banner3.png"],["for","slide-3",1,"slide-control","prev","control-1"],["for","slide-3",1,"slide-control","next","control-2"],["for","slide-2",1,"slide-control","next","control-1"],["for","slide-2",1,"slide-control","prev","control-3"],["for","slide-1",1,"slide-control","next","control-3"],["for","slide-1",1,"slide-control","prev","control-2"],[1,"slide-indicador"],["for","slide-1",1,"slide-circulo"],[1,"fa-regular","fa-circle"],["for","slide-2",1,"slide-circulo"],["for","slide-3",1,"slide-circulo"]],template:function(t,i){1&t&&(n.TgZ(0,"section",0),n.NdJ("mouseenter",function(){return i.pauseCarousel()})("mouseleave",function(){return i.startCarousel()}),n.TgZ(1,"div",1)(2,"div",2),n._UZ(3,"input",3),n.TgZ(4,"div",4)(5,"div",5)(6,"div",6)(7,"button",7),n.NdJ("click",function(){return i.desing()}),n._uU(8,"Personalizar"),n.qZA()()()(),n._UZ(9,"input",8),n.TgZ(10,"div",4),n._UZ(11,"img",9),n.qZA(),n._UZ(12,"input",10),n.TgZ(13,"div",4),n._UZ(14,"img",11),n.qZA(),n.TgZ(15,"label",12),n._uU(16,"\u2039"),n.qZA(),n.TgZ(17,"label",13),n._uU(18,"\u203a"),n.qZA(),n.TgZ(19,"label",14),n._uU(20,"\u203a"),n.qZA(),n.TgZ(21,"label",15),n._uU(22,"\u2039"),n.qZA(),n.TgZ(23,"label",16),n._uU(24,"\u203a"),n.qZA(),n.TgZ(25,"label",17),n._uU(26,"\u2039"),n.qZA(),n.TgZ(27,"ol",18)(28,"li")(29,"label",19),n._UZ(30,"i",20),n.qZA()(),n.TgZ(31,"li")(32,"label",21),n._UZ(33,"i",20),n.qZA()(),n.TgZ(34,"li")(35,"label",22),n._UZ(36,"i",20),n.qZA()()()()()())},styles:["#carrusel[_ngcontent-%COMP%]{display:flex;width:100vw}.slide[_ngcontent-%COMP%]{position:relative}.button-desing[_ngcontent-%COMP%]{border-radius:16px;background:#ed1c24 url(/assets/img/backgrounds/background-button.png) center center/cover no-repeat local;height:50%;width:40%;justify-content:center;align-items:center;display:flex}.button-desing[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:#ed1c24;padding:8px;border-radius:5px;border:none;color:#fff}.button-desing[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{animation-name:pulse;animation-duration:1s;animation-fill-mode:both;font-weight:500;border:1px solid black}.slide-inner[_ngcontent-%COMP%]{position:relative;overflow:hidden;width:100%}.continer-button-pers[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:right;align-items:center}.slide-open[_ngcontent-%COMP%]:checked + .slide-item[_ngcontent-%COMP%]{position:static;opacity:100;padding:30px}.slide-item[_ngcontent-%COMP%]{width:100vw;height:50vh;background:#ffffff url(/assets/img/backgrounds/background1.png) center center/cover no-repeat local;position:absolute;opacity:0;transition:opacity .6s ease-out}.slide-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;height:50vh;max-width:100%}.slide-control[_ngcontent-%COMP%]{background:rgba(0,0,0,.28);border-radius:50%;color:#fff;display:none;font-size:40px;height:40px;line-height:35px;position:absolute;top:50%;-webkit-transform:translate(0,-50%);cursor:pointer;transform:translateY(-50%);text-align:center;width:40px;z-index:2}.slide-control.prev[_ngcontent-%COMP%]{left:2%}.slide-control.next[_ngcontent-%COMP%]{right:2%}.slide-control[_ngcontent-%COMP%]:hover{background:rgba(0,0,0,.8);color:#aaa}#slide-1[_ngcontent-%COMP%]:checked ~ .control-1[_ngcontent-%COMP%], #slide-2[_ngcontent-%COMP%]:checked ~ .control-2[_ngcontent-%COMP%], #slide-3[_ngcontent-%COMP%]:checked ~ .control-3[_ngcontent-%COMP%]{display:block}.slide-indicador[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;position:absolute;bottom:2%;left:0;right:0;text-align:center;z-index:2}.slide-indicador[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;margin:0 5px}.slide-circulo[_ngcontent-%COMP%]{color:#828282;cursor:pointer;display:block;font-size:14px}.slide-circulo[_ngcontent-%COMP%]:hover{color:#aaa}#slide-1[_ngcontent-%COMP%]:checked ~ .control-1[_ngcontent-%COMP%] ~ .slide-indicador[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1)   .slide-circulo[_ngcontent-%COMP%], #slide-2[_ngcontent-%COMP%]:checked ~ .control-2[_ngcontent-%COMP%] ~ .slide-indicador[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2)   .slide-circulo[_ngcontent-%COMP%], #slide-3[_ngcontent-%COMP%]:checked ~ .control-3[_ngcontent-%COMP%] ~ .slide-indicador[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3)   .slide-circulo[_ngcontent-%COMP%]{color:#ed1c24}@media (max-width:600px){section[_ngcontent-%COMP%]{padding-top:48px}#carrusel[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:20vh}}"]}),e})()}];let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[r.Bz.forChild(a),r.Bz]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[d.ez,u]}),e})()}}]);