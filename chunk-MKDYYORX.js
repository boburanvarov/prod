import{p as L}from"./chunk-MC6M5N3W.js";import"./chunk-Z3C6DEUP.js";import{I as T,K as I,P as V,Ra as O,Sa as q,U as z,ba as B,ca as N,db as H}from"./chunk-2FEP6AZJ.js";import{$b as t,Ac as D,Ba as P,Cc as y,Dc as C,Ec as R,Gc as F,Ma as p,Mb as f,Na as c,Ob as g,Pb as _,Qb as u,Tb as k,Uc as b,Vb as M,_b as e,ac as w,ec as W,nc as v,ub as o,xc as h,yc as i,zc as E}from"./chunk-GCPY7ULT.js";import"./chunk-MQNJ6KAK.js";import"./chunk-F6XAREQC.js";import"./chunk-FFXK657A.js";function A(n,r){if(n&1&&(e(0,"span",38)(1,"span",39),i(2,"\u2605"),t(),i(3,"\u2605 "),t()),n&2){let l=r.fill;u("full",l===100),o(),_("width",l,"%")}}function G(n,r){if(n&1&&(e(0,"span",38),i(1,"\u2605"),t()),n&2){let l=r.fill,S=r.index;u("filled",l===100)("bad",S<3)}}function J(n,r){if(n&1&&(e(0,"span",38)(1,"span",39),i(2,"\u2605"),t(),i(3,"\u2605 "),t()),n&2){let l=r.fill;u("full",l===100),o(),_("width",l,"%")}}function K(n,r){n&1&&(e(0,"div",23),i(1,"Thanks!"),t())}function Q(n,r){n&1&&(e(0,"div",14),i(1,"Please rate us"),t())}function X(n,r){if(n&1&&(e(0,"span",38)(1,"span",39),i(2,"\u2605"),t(),i(3,"\u2605 "),t()),n&2){let l=r.fill;u("full",l===100),o(),_("width",l,"%")}}function Z(n,r){if(n&1&&(e(0,"span",38)(1,"span",40),i(2,"\u2665"),t(),i(3,"\u2665 "),t()),n&2){let l=r.fill;u("full",l===100),o(),_("width",l,"%")}}function $(n,r){if(n&1&&(e(0,"span",38)(1,"span",39),i(2,"\u2605"),t(),i(3,"\u2605 "),t()),n&2){let l=r.fill;u("full",l===100),o(),_("width",l,"%")}}function ee(n,r){if(n&1&&(e(0,"span",38)(1,"span",39),i(2,"\u2605"),t(),i(3,"\u2605 "),t()),n&2){let l=r.fill;u("full",l===100),o(),_("width",l,"%")}}var oe=(()=>{let r=class r{constructor(){this.squareRate=3,this.faRate=3,this.currentRate=5,this.customCurrentRate=5,this.customCurrentRateInput=5,this.selected=2,this.selected1=3,this.hovered=1,this.hovered1=2,this.readonly=!1,this.heartRate=3.45,this.toggle=()=>{this.ctrl.disabled?this.ctrl.enable():this.ctrl.disable()},this.ctrl=new V(null,T.required),this.ctrl1=new V(null,T.required)}ariaValueText(S,x){return`${S} out of ${x} hearts`}ngOnInit(){}};r.\u0275fac=function(x){return new(x||r)},r.\u0275cmp=P({type:r,selectors:[["app-ratings"]],standalone:!0,features:[F],decls:119,vars:25,consts:[["basicstar",""],["formstar",""],["eventstar1",""],["t",""],["eventstar",""],["formstar1",""],[1,"row"],[1,"col-xxl-4","col-xl-6"],[1,"card","custom-card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"d-flex","flex-wrap","align-items-center","justify-content-between"],[1,"fs-14","mb-0"],[1,"text-danger"],["id","rater-basic"],[1,"ng-rating",3,"starTemplate","max"],["id","rater-steps"],[1,"ng-rating"],[1,"col-xxl-4","col-xl-12"],["id","custom-messages"],[1,"rating-size",3,"starTemplate","formControl"],[1,"form-text","small"],[1,"text-success"],[1,"col-xxl-6","col-xl-6"],["id","stars-unlimited",1,"d-flex","gap-2","flex-wrap"],[1,"ng-rating",3,"rateChange","hover","leave","rate","readonly","starTemplate","max"],[1,"mb-0"],[3,"click"],["id","stars-busytext",1,"d-flex","gap-2","flex-wrap"],[1,"ng-rating",3,"rateChange","rate","starTemplate","max"],[1,"btn","btn-sm","btn-outline-primary","me-2",3,"click"],[1,"d-flex","flex-wrap","align-items-center"],["id","stars-hover"],[1,"live-rating","badge","bg-success-transparent","ms-3"],["id","rater-reset"],[1,"btn","btn-icon","btn-sm","btn-danger-light","ms-3",3,"click"],[1,"ri-restart-line"],[1,"star"],[1,"half"],[1,"heartHalf"]],template:function(x,a){if(x&1){let m=W();e(0,"div",6)(1,"div",7)(2,"div",8)(3,"div",9)(4,"div",10),i(5,"Basic Rater"),t()(),e(6,"div",11)(7,"div",12)(8,"p",13),i(9," Show Some "),e(10,"span",14),i(11,"\u2764"),t(),i(12," with rating : "),t(),e(13,"div",15),f(14,A,4,4,"ng-template",null,0,b),w(16,"ngb-rating",16),t()()()()(),e(17,"div",7)(18,"div",8)(19,"div",9)(20,"div",10),i(21,"Custom Star Template"),t()(),e(22,"div",11)(23,"div",12)(24,"p",13),i(25,"Dont forget to rate the product :"),t(),e(26,"div",17)(27,"ngb-rating",18),f(28,G,2,4,"ng-template"),t()()()()()(),e(29,"div",19)(30,"div",8)(31,"div",9)(32,"div",10),i(33,"Custom messages"),t()(),e(34,"div",11)(35,"div",12)(36,"p",13),i(37,"Your rating is much appreciated\u{1F44F} :"),t(),e(38,"div",20),f(39,J,4,4,"ng-template",null,1,b),w(41,"ngb-rating",21),e(42,"div",22),f(43,K,2,0,"div",23)(44,Q,2,0),t()()()()()(),e(45,"div",24)(46,"div",8)(47,"div",9)(48,"div",10),i(49,"Events and readonly ratings"),t()(),e(50,"div",11)(51,"div",12)(52,"p",13),i(53,"Thanks for rating :"),t(),e(54,"div",25),f(55,X,4,4,"ng-template",null,2,b),e(57,"ngb-rating",26),R("rateChange",function(s){return p(m),C(a.selected1,s)||(a.selected1=s),c(s)}),v("hover",function(s){return p(m),c(a.hovered1=s)})("leave",function(){return p(m),c(a.hovered1=0)}),t(),e(58,"p",27),i(59," Selected: "),e(60,"b"),i(61),t()(),e(62,"button",28),v("click",function(){return p(m),c(a.readonly=!a.readonly)}),i(63),t()()()()()(),e(64,"div",24)(65,"div",8)(66,"div",9)(67,"div",10),i(68,"Custom decimal rating"),t()(),e(69,"div",11)(70,"div",12)(71,"p",13),i(72,"Thanks for rating :"),t(),e(73,"div",29),f(74,Z,4,4,"ng-template",null,3,b),e(76,"ngb-rating",30),R("rateChange",function(s){return p(m),C(a.heartRate,s)||(a.heartRate=s),c(s)}),t(),e(77,"p",27),i(78," Rate: "),e(79,"b"),i(80),t()(),e(81,"button",31),v("click",function(){return p(m),c(a.heartRate=1.35)}),i(82," 1.35 "),t(),e(83,"button",31),v("click",function(){return p(m),c(a.heartRate=4.72)}),i(84," 4.72 "),t()()()()()(),e(85,"div",7)(86,"div",8)(87,"div",9)(88,"div",10),i(89,"On hover event"),t()(),e(90,"div",11)(91,"div",12)(92,"p",13),i(93,"Please give your valuable rating :"),t(),e(94,"div",32)(95,"div",33),f(96,$,4,4,"ng-template",null,4,b),e(98,"ngb-rating",26),R("rateChange",function(s){return p(m),C(a.selected,s)||(a.selected=s),c(s)}),v("hover",function(s){return p(m),c(a.hovered=s)})("leave",function(){return p(m),c(a.hovered=0)}),t()(),e(99,"span",34),i(100," Hovered: "),e(101,"b"),i(102),t()()()()()()(),e(103,"div",7)(104,"div",8)(105,"div",9)(106,"div",10),i(107,"Clear/reset rater"),t()(),e(108,"div",11)(109,"div",12)(110,"p",13),i(111,"Thank You so much for your support :"),t(),e(112,"div",32)(113,"div",35),f(114,ee,4,4,"ng-template",null,5,b),w(116,"ngb-rating",21),t(),e(117,"button",36),v("click",function(){return p(m),c(a.ctrl1.setValue(null))}),w(118,"i",37),t()()()()()()()}if(x&2){let m=h(15),d=h(40),s=h(56),Y=h(75),j=h(97),U=h(115);o(16),g("starTemplate",m)("max",5),o(25),g("starTemplate",d)("formControl",a.ctrl),o(2),M(43,a.ctrl.valid?43:44),o(14),y("rate",a.selected1),g("readonly",a.readonly)("starTemplate",s)("max",5),o(4),E(a.selected1),o(),k("btn btn-sm btn-outline-",a.readonly?"danger":"success",""),o(),D(" ",a.readonly?"readonly":"editable"," "),o(13),y("rate",a.heartRate),g("starTemplate",Y)("max",5),o(4),E(a.heartRate),o(18),y("rate",a.selected),g("readonly",a.readonly)("starTemplate",j)("max",5),o(4),E(a.hovered),o(14),g("starTemplate",U)("formControl",a.ctrl1)}},dependencies:[L,H,O,N,I,z,B,q],styles:[".fa.fa-heart[_ngcontent-%COMP%], .fa.fa-star[_ngcontent-%COMP%]{letter-spacing:5px}  .ng-rating:focus,   .rating-size:focus{outline:0}  .star{position:relative;display:inline-block;font-size:1.5rem;color:#f0f0f2;line-height:.75}@media (max-width: 480px){  .star{font-size:1.8rem}}@media (max-width: 768px){  .star{font-size:1.7rem}}  .full{color:#ff9b21}  .half{position:absolute;display:inline-block;overflow:hidden;color:#ff9b21;line-height:.75}  .heartHalf{position:absolute;display:inline-block;overflow:hidden;color:#f16d75}  .filled{color:#ff9b21}  .bad{color:#deb0b0}  .filled.bad{color:#f16d75}"]});let n=r;return n})();export{oe as RatingsComponent};
