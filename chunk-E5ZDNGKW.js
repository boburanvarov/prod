import{a as J,b as Y,c as K,d as Q}from"./chunk-BK22TCEI.js";import{b as H}from"./chunk-PLXU7VKH.js";import{a as U,b as G}from"./chunk-EQRGM632.js";import{c as q,d as j}from"./chunk-KRTPMHKJ.js";import{d as A,e as V,f as R}from"./chunk-3UTEMC5T.js";import{p as N}from"./chunk-MC6M5N3W.js";import{b as F}from"./chunk-Z3C6DEUP.js";import{G as z,K as k,Q as D,ba as B,ca as L,db as O}from"./chunk-2FEP6AZJ.js";import{$b as e,Ba as I,Bc as M,Cc as c,Dc as u,Ec as g,Fc as P,Gc as T,Ma as y,Na as v,Ob as r,Wb as C,Xb as x,Yb as S,Zb as b,_b as i,ac as h,ec as E,nc as _,pc as w,ub as o,yc as n,zc as W}from"./chunk-GCPY7ULT.js";import"./chunk-MQNJ6KAK.js";import"./chunk-F6XAREQC.js";import"./chunk-FFXK657A.js";function X(d,m){if(d&1){let s=E();i(0,"ngx-dropzone-preview",61),_("removed",function(){let f=y(s).$implicit,t=w();return v(t.OnRemove2(f))}),i(1,"ngx-dropzone-label"),n(2),e()()}if(d&2){let s=m.$implicit;r("removable",!0),o(2),M("",s.name," (",s.type,")")}}function Z(d,m){if(d&1){let s=E();i(0,"ngx-dropzone-preview",61),_("removed",function(){let f=y(s).$implicit,t=w();return v(t.OnRemove3(f))}),i(1,"ngx-dropzone-label"),n(2),e()()}if(d&2){let s=m.$implicit;r("removable",!0),o(2),M("",s.name," (",s.type,")")}}function $(d,m){if(d&1&&(i(0,"ng-option",54),n(1),e()),d&2){let s=m.$implicit;r("value",s.id),o(),W(s.name)}}var he=(()=>{let m=class m{OnSelect2(a){this.files2.push(...a.addedFiles)}OnRemove2(a){this.files2.splice(this.files2.indexOf(a),1)}OnSelect3(a){this.files3.push(...a.addedFiles)}OnRemove3(a){this.files2.splice(this.files3.indexOf(a),1)}constructor(){this.basicDemoValue="2017-01-01",this.timePicker=null,this.files2=[],this.files3=[],this.type="component",this.disabled=!1,this.selectedSimpleItem="select",this.simpleItems=[],this.selectedSimpleItem1="select",this.simpleItems1=[],this.selectedSimpleItem2="select",this.simpleItems2=[],this.selectedSimpleItem3="select",this.simpleItems3=[],this.selectedSimpleItem4="select",this.simpleItems4=[],this.selectedSimpleItem5="select",this.simpleItems5=[],this.producttags=["Plain"],this.tags=[{id:1,name:"Plain"},{id:2,name:"Relaxed"},{id:3,name:"Washed"},{id:4,name:"solid"}],this.selectedSimpleItem6="select",this.simpleItems6=[],this.htmlContent=`<ul><li>Care Instructions: Machine Wash</li><li>Neckline: The pullover is framed with a Crew Neck</li>
  <li>Fit Type: Regular Fit</li><li>Long Sleeves: The pullover is designed with Long Sleeves.</li>
  <li>Soft Hand feel: The fabric is extremely soft and comfortable, keeping you at ease for hours.</li>
  <li>Solid: The pullover is available in solid pattern.</li></ul>`,this.config={editable:!0,spellcheck:!0,height:"15rem",minHeight:"5rem",placeholder:"Enter text here...",translate:"no",defaultParagraphSeparator:"p",defaultFontName:"Arial",toolbarHiddenButtons:[["bold"]],customClasses:[{name:"quote",class:"quote"},{name:"redText",class:"redText"},{name:"titleText",class:"titleText",tag:"h1"}]},this.editordoc="",this.toolbar=[["bold","italic"],["underline","strike"],["code","blockquote"],["ordered_list","bullet_list"],[{heading:["h1","h2","h3","h4","h5","h6"]}],["text_color","background_color"],["align_left","align_center","align_right","align_justify"]]}toggleType(){this.type=this.type==="component"?"directive":"component"}toggleDisabled1(){this.disabled=!this.disabled}onUploadInit(a){console.log("onUploadInit:",a)}onUploadError(a){console.log("onUploadError:",a)}onUploadSuccess(a){console.log("onUploadSuccess:",a)}ngOnInit(){this.simpleItems=["Jewellery","Ethnic & Festive","Grooming","Accesories","Footwear","Category","Clothing"],this.simpleItems1=["Male","All","Female","Others"],this.simpleItems2=["Small","Medium","Extra Large","Large"],this.simpleItems3=["Armani","Lacoste","Arrrabi","Mufti"],this.simpleItems4=["White","Red","Pink","Yellow","Orange","Green"],this.simpleItems5=["Publish","Scheduled"],this.simpleItems6=["In Stock","Out Of Stock"]}};m.\u0275fac=function(f){return new(f||m)},m.\u0275cmp=I({type:m,selectors:[["app-editproducts"]],standalone:!0,features:[P([]),T],decls:127,vars:30,consts:[[1,"row"],[1,"col-xl-12"],[1,"card","custom-card"],[1,"card-body","add-products","p-0"],[1,"p-4"],[1,"row","gx-5"],[1,"col-xxl-6","col-xl-12","col-lg-12","col-md-6"],[1,"card","custom-card","shadow-none","mb-0","border-0"],[1,"card-body","p-0"],[1,"row","gy-3"],["for","product-name-add",1,"form-label"],["type","text","id","product-name-add","placeholder","Name","value","Light Blue Sweat Shirt",1,"form-control"],["for","product-name-add",1,"form-label","mt-1","fs-12","op-5","text-muted","mb-0"],[1,"col-xl-6"],["for","product-category-add",1,"form-label"],[3,"ngModelChange","items","ngModel"],["for","product-gender-add",1,"form-label"],["for","product-size-add",1,"form-label"],["for","product-brand-add",1,"form-label"],[1,"col-xl-6","color-selection"],["for","product-color-add",1,"form-label"],["placeholder","select",3,"ngModelChange","items","ngModel","multiple","hideSelected","closeOnSelect","selectableGroup"],["for","product-cost-add",1,"form-label"],["type","text","id","product-cost-add","placeholder","Cost","value","$1299.99",1,"form-control"],["for","product-cost-add",1,"form-label","mt-1","fs-12","op-5","text-muted","mb-0"],["for","product-description-add",1,"form-label"],["id","product-description-add","rows","2","value","Ultra soft:the fabri",1,"form-control"],["for","product-description-add",1,"form-label","mt-1","fs-12","op-5","text-muted","mb-0"],[1,"form-label"],["id","product-features"],[3,"ngModelChange","ngModel","config"],[1,"row","gy-4"],[1,"col-xl-4"],["for","product-actual-price",1,"form-label"],["type","text","id","product-actual-price","placeholder","Actual Price","value","$149.99",1,"form-control"],["for","product-dealer-price",1,"form-label"],["type","text","id","product-dealer-price","placeholder","Dealer Price","value","$1299.99",1,"form-control"],["for","product-discount",1,"form-label"],["type","text","id","product-discount","placeholder","Discount in %","value","0.57",1,"form-control"],["for","product-type",1,"form-label"],["type","text","id","product-type","placeholder","Type","value","Watch",1,"form-control"],["type","text","id","product-discount1","placeholder","Weight in gms","value","180gms",1,"form-control"],[1,"col-xl-12","product-documents-container"],[1,"fw-semibold","mb-2","fs-14"],[1,"box-container","flex-col","dropzone",3,"change","accept"],[1,"dropzone-preview",3,"removable"],[1,"form-label","op-5","mt-3"],["for","publish-date",1,"form-label"],["type","text","placeholder","yyyy-mm-dd","name","dp","mwlFlatpickr","",1,"form-control",3,"ngModelChange","ngModel"],["for","publish-time",1,"form-label"],["type","text","placeholder","Choose Time","mwlFlatpickr","",1,"form-control",3,"ngModelChange","ngModel","noCalendar","enableTime","dateFormat"],["for","product-status-add",1,"form-label"],["for","product-tags",1,"form-label"],[3,"ngModelChange","multiple","ngModel"],[3,"value"],["for","product-status-add1",1,"form-label"],[1,"px-4","py-3","border-top","border-block-start-dashed","d-sm-flex","justify-content-end"],[1,"btn","btn-primary-light","m-1"],[1,"bi","bi-plus-lg","ms-2"],[1,"btn","btn-success-light","m-1"],[1,"bi","bi-download","ms-2"],[1,"dropzone-preview",3,"removed","removable"]],template:function(f,t){f&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"div",9)(10,"div",1)(11,"label",10),n(12,"Product Name"),e(),h(13,"input",11),i(14,"label",12),n(15,"*Product Name should not exceed 30 characters"),e()(),i(16,"div",13)(17,"label",14),n(18,"Category"),e(),i(19,"ng-select",15),g("ngModelChange",function(l){return u(t.selectedSimpleItem,l)||(t.selectedSimpleItem=l),l}),e()(),i(20,"div",13)(21,"label",16),n(22,"Gender"),e(),i(23,"ng-select",15),g("ngModelChange",function(l){return u(t.selectedSimpleItem1,l)||(t.selectedSimpleItem1=l),l}),e()(),i(24,"div",13)(25,"label",17),n(26,"Size"),e(),i(27,"ng-select",15),g("ngModelChange",function(l){return u(t.selectedSimpleItem2,l)||(t.selectedSimpleItem2=l),l}),e()(),i(28,"div",13)(29,"label",18),n(30,"Brand"),e(),i(31,"ng-select",15),g("ngModelChange",function(l){return u(t.selectedSimpleItem3,l)||(t.selectedSimpleItem3=l),l}),e()(),i(32,"div",19)(33,"label",20),n(34,"Colors"),e(),i(35,"ng-select",21),g("ngModelChange",function(l){return u(t.selectedSimpleItem4,l)||(t.selectedSimpleItem4=l),l}),e()(),i(36,"div",13)(37,"label",22),n(38,"Enter Cost"),e(),h(39,"input",23),i(40,"label",24),n(41,"*Mention final price of the product"),e()(),i(42,"div",1)(43,"label",25),n(44,"Product Description"),e(),i(45,"textarea",26),n(46,"                                                c"),e(),i(47,"label",27),n(48,"*Description should not exceed 500 letters"),e()(),i(49,"div",1)(50,"label",28),n(51,"Product Features"),e(),i(52,"div",29)(53,"angular-editor",30),g("ngModelChange",function(l){return u(t.htmlContent,l)||(t.htmlContent=l),l}),e()()()()()()(),i(54,"div",6)(55,"div",7)(56,"div",8)(57,"div",31)(58,"div",32)(59,"label",33),n(60,"Actual Price"),e(),h(61,"input",34),e(),i(62,"div",32)(63,"label",35),n(64,"Dealer Price"),e(),h(65,"input",36),e(),i(66,"div",32)(67,"label",37),n(68,"Discount"),e(),h(69,"input",38),e(),i(70,"div",13)(71,"label",39),n(72,"Product Type"),e(),h(73,"input",40),e(),i(74,"div",13)(75,"label",37),n(76,"Item Weight"),e(),h(77,"input",41),e(),i(78,"div",42)(79,"p",43),n(80,"Product Images :"),e(),i(81,"ngx-dropzone",44),_("change",function(l){return t.OnSelect2(l)}),i(82,"ngx-dropzone-label"),n(83,"Drop Files here to upload"),e(),S(84,X,3,3,"ngx-dropzone-preview",45,C),e()(),i(86,"label",46),n(87,"Minimum 0f 6 images are need to be uploaded,make sure the image size match the proper background size and all images should be uniformly maintained with width and height to the image container,image size should not exceed 2MB,once uploaded to change the image you need to wait minimum of 24hrs. "),e(),i(88,"div",42)(89,"p",43),n(90,"Warrenty Documents :"),e(),i(91,"ngx-dropzone",44),_("change",function(l){return t.OnSelect3(l)}),i(92,"ngx-dropzone-label"),n(93,"Drop Files here to upload"),e(),S(94,Z,3,3,"ngx-dropzone-preview",45,C),e()(),i(96,"div",13)(97,"label",47),n(98,"Publish Date"),e(),i(99,"input",48),g("ngModelChange",function(l){return u(t.basicDemoValue,l)||(t.basicDemoValue=l),l}),e()(),i(100,"div",13)(101,"label",49),n(102,"Publish Time"),e(),i(103,"input",50),g("ngModelChange",function(l){return u(t.timePicker,l)||(t.timePicker=l),l}),e()(),i(104,"div",13)(105,"label",51),n(106,"Published Status"),e(),i(107,"ng-select",15),g("ngModelChange",function(l){return u(t.selectedSimpleItem5,l)||(t.selectedSimpleItem5=l),l}),e()(),i(108,"div",13)(109,"label",52),n(110,"Product Tags"),e(),i(111,"ng-select",53),g("ngModelChange",function(l){return u(t.producttags,l)||(t.producttags=l),l}),S(112,$,2,2,"ng-option",54,x),i(114,"ng-option",54),n(115,"Custom"),e()()(),i(116,"div",1)(117,"label",55),n(118,"Availability"),e(),i(119,"ng-select",15),g("ngModelChange",function(l){return u(t.selectedSimpleItem6,l)||(t.selectedSimpleItem6=l),l}),e()()()()()()()(),i(120,"div",56)(121,"button",57),n(122," Add Product"),h(123,"i",58),e(),i(124,"button",59),n(125," Save Product"),h(126,"i",60),e()()()()()()),f&2&&(o(19),r("items",t.simpleItems),c("ngModel",t.selectedSimpleItem),o(4),r("items",t.simpleItems1),c("ngModel",t.selectedSimpleItem1),o(4),r("items",t.simpleItems2),c("ngModel",t.selectedSimpleItem2),o(4),r("items",t.simpleItems3),c("ngModel",t.selectedSimpleItem3),o(4),r("items",t.simpleItems4),c("ngModel",t.selectedSimpleItem4),r("multiple",!0)("hideSelected",!0)("closeOnSelect",!1)("selectableGroup",!0),o(18),c("ngModel",t.htmlContent),r("config",t.config),o(28),r("accept","image/*"),o(3),b(t.files2),o(7),r("accept","image/*"),o(3),b(t.files3),o(5),c("ngModel",t.basicDemoValue),o(4),c("ngModel",t.timePicker),r("noCalendar",!0)("enableTime",!0)("dateFormat","h:i"),o(4),r("items",t.simpleItems5),c("ngModel",t.selectedSimpleItem5),o(4),r("multiple",!0),c("ngModel",t.producttags),o(),b(t.tags),o(2),r("value","custom"),o(5),r("items",t.simpleItems6),c("ngModel",t.selectedSimpleItem6))},dependencies:[N,H,B,z,k,D,L,R,V,A,O,Q,K,J,Y,G,U,F,j,q],styles:[".NgxEditor__Content{height:12rem}"]});let d=m;return d})();export{he as EditproductsComponent};
