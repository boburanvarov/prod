import{b as N,c as A,d as T}from"./chunk-KRTPMHKJ.js";import{e as I,f as D}from"./chunk-3UTEMC5T.js";import{p as C}from"./chunk-MC6M5N3W.js";import"./chunk-Z3C6DEUP.js";import{K as S,Q as x,ba as g,ca as y,db as w}from"./chunk-2FEP6AZJ.js";import{$b as e,Ba as p,Cc as v,Dc as f,Ec as b,Fc as h,Gc as E,Ob as s,_b as t,ac as n,ub as u,yc as i}from"./chunk-GCPY7ULT.js";import"./chunk-MQNJ6KAK.js";import"./chunk-F6XAREQC.js";import"./chunk-FFXK657A.js";var L=(()=>{let o=class o{constructor(){this.selectedSimpleItem="Select Currency",this.simpleItems=[]}ngOnInit(){this.simpleItems=["USD - (United States Dollar)","BHD - (Bahraini Dinar)","KWD - (Kuwaiti Dinar)","CHF - (Swiss Franc)"]}ngAfterViewInit(){let c=document.querySelectorAll(".plus"),r=document.querySelectorAll(".minus");function m(){c.forEach(a=>{let l=a.parentElement.parentElement;a.addEventListener("click",()=>{l.children[0].children[1].value++})}),r.forEach(a=>{let l=a.parentElement.parentElement;a.addEventListener("click",()=>{l.children[0].children[1].value>0&&l.children[0].children[1].value--})})}m()}};o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=p({type:o,selectors:[["app-create-invoice"]],standalone:!0,features:[h([N]),E],decls:221,vars:2,consts:[[1,"row"],[1,"col-xl-9"],[1,"card","custom-card"],[1,"card-header","d-md-flex","d-block"],[1,"h5","mb-0","d-sm-flex","d-block","align-items-center"],["src","./assets/images/brand-logos/toggle-logo.png","alt",""],[1,"ms-sm-2","ms-0","mt-sm-0","mt-2"],["type","text","placeholder","Invoice Title","value","INV TITLE",1,"form-control","form-control-light","form-control-sm"],[1,"mx-2"],[1,"mt-sm-0","mt-2"],["type","text","placeholder","Invoice ID","value","INV ID",1,"form-control","form-control-light","form-control-sm"],[1,"ms-auto","mt-md-0","mt-2"],[1,"btn","btn-sm","btn-primary","me-2"],[1,"ri-file-pdf-line","ms-1","align-middle","d-inline-block"],[1,"btn","btn-sm","btn-icon","btn-secondary-light","me-2"],[1,"bi","bi-plus-lg"],[1,"btn","btn-sm","btn-icon","btn-success-light","me-2"],[1,"bi","bi-download"],[1,"card-body"],[1,"row","gy-3"],[1,"col-xl-12"],[1,"col-xl-4","col-lg-4","col-md-6","col-sm-6"],[1,"dw-semibold","mb-2"],[1,"row","gy-2"],["type","text","id","Company-Name","placeholder","Company Name","value","SPRUKO TECHNOLOGIES",1,"form-control","form-control-light"],["id","company-address","placeholder","Enter Address","rows","3",1,"form-control","form-control-light"],["type","text","id","company-mail","placeholder","Company Email","value","",1,"form-control","form-control-light"],["type","text","id","company-phone","placeholder","Phone Number","value","",1,"form-control","form-control-light"],["id","invoice-subject","placeholder","Subject","rows","4",1,"form-control","form-control-light"],[1,"col-xl-4","col-lg-4","col-md-6","col-sm-6","ms-auto","mt-sm-0","mt-3"],["type","text","id","customer-Name","placeholder","Customer Name","value","Json Taylor",1,"form-control","form-control-light"],["id","customer-address","placeholder","Enter Address","rows","3",1,"form-control","form-control-light"],["type","text","id","customer-mail","placeholder","Customer Email","value","",1,"form-control","form-control-light"],["type","text","id","customer-phone","placeholder","Phone Number","value","",1,"form-control","form-control-light"],["type","text","id","zip-code","placeholder","Zip Code","value","",1,"form-control","form-control-light"],[1,"col-xl-12","choices-control"],[1,"dw-semibold","mb-2","mt-2"],[3,"ngModelChange","items","ngModel"],[1,"col-xl-3"],["for","invoice-number",1,"form-label"],["type","text","id","invoice-number","placeholder","Inv No","value","#SPK120219890",1,"form-control","form-control-light"],["for","invoice-date-issued",1,"form-label"],["type","text","id","invoice-date-issued","placeholder","Choose date","name","dp","mwlFlatpickr","",1,"form-control","form-control-light"],["for","invoice-date-due",1,"form-label"],["type","text","id","invoice-date-due","placeholder","Choose date","name","dp","mwlFlatpickr","",1,"form-control","form-control-light"],["for","invoice-due-amount",1,"form-label"],["type","text","id","invoice-due-amount","placeholder","Enter Amount","value","$12,983.78",1,"form-control","form-control-light"],[1,"table-responsive"],[1,"table","nowrap","text-nowrap","border","mt-3"],["type","text","placeholder","Enter Product Name",1,"form-control","form-control-light"],["rows","1","placeholder","Enter Description",1,"form-control","form-control-light"],[1,"invoice-quantity-container"],[1,"input-group","border","rounded","flex-nowrap"],[1,"btn","btn-icon","btn-primary","input-group-text","flex-fill","product-quantity-minus","minus"],[1,"ri-subtract-line"],["type","text","aria-label","quantity","id","product-quantity4","value","1",1,"form-control","form-control-sm","border-0","text-center","w-100"],[1,"btn","btn-icon","btn-primary","input-group-text","flex-fill","product-quantity-plus","plus"],[1,"ri-add-line"],["placeholder","","type","text","value","$60.00",1,"form-control","form-control-light"],["placeholder","","type","text","value","$120.00",1,"form-control","form-control-light"],[1,"btn","btn-sm","btn-icon","btn-danger-light"],[1,"ri-delete-bin-5-line"],["type","text","aria-label","quantity","id","product-quantity5","value","1",1,"form-control","form-control-sm","border-0","text-center","w-100"],["placeholder","Enter Amount","type","text",1,"form-control","form-control-light"],["colspan","6",1,"border-bottom-0"],["href","javascript:void(0);",1,"btn","btn-light"],["colspan","4"],["colspan","2"],[1,"table","table-sm","text-nowrap","mb-0","table-borderless"],["scope","row"],[1,"fw-semibold"],["type","text","placeholder","Enter Amount","value","$1209.89",1,"form-control","form-control-light","invoice-amount-input"],["type","text","placeholder","Enter Amount","value","$29.98",1,"form-control","form-control-light","invoice-amount-input"],[1,"text-success"],["type","text","placeholder","Enter Amount","value","$129.00",1,"form-control","form-control-light","invoice-amount-input"],[1,"text-danger"],["type","text","placeholder","Enter Amount","value","$258.00",1,"form-control","form-control-light","invoice-amount-input"],["type","text","placeholder","Enter Amount","value","$0.00",1,"form-control","form-control-light","invoice-amount-input"],[1,"fs-14","fw-semibold"],["type","text","placeholder","Enter Amount","value","$1,071.89",1,"form-control","form-control-light","invoice-amount-input"],["for","invoice-note",1,"form-label"],["id","invoice-note","rows","3",1,"form-control","form-control-light"],[1,"card-footer","text-end"],[1,"btn","btn-light","me-1"],[1,"ri-eye-line","me-1","align-middle","d-inline-block"],[1,"btn","btn-primary"],[1,"ri-send-plane-2-line","ms-1","align-middle","d-inline-block"],[1,"card-header"],[1,"card-title"],["role","group","aria-label","Basic radio toggle button group",1,"btn-group"],["type","radio","name","btnradio","id","btnradio2",1,"btn-check"],["for","btnradio2",1,"btn","btn-outline-light","mt-sm-0","mt-1"],["type","radio","name","btnradio","id","btnradio3","checked","",1,"btn-check"],["for","btnradio3",1,"btn","btn-outline-light","mt-sm-0","mt-1"],["type","text","placeholder","Card Holder Name",1,"form-control","form-control-light"],["type","text","id","invoice-payment-cardname","placeholder","Card Number","value","1234 5678 9087 XXXX",1,"form-control","form-control-light"],["for","invoice-payment-cardname",1,"form-label","mb-0"],["href","javascript:void(0);",1,"text-danger","fs-11"],["type","text","placeholder","Enter OTP",1,"form-control","form-control-light","mb-2"],["role","alert",1,"alert","alert-success"]],template:function(r,m){r&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div"),n(6,"img",5),e(),t(7,"div",6),n(8,"input",7),e(),t(9,"div",8),i(10,":"),e(),t(11,"div",9),n(12,"input",10),e()(),t(13,"div",11)(14,"button",12),i(15," Save As PDF"),n(16,"i",13),e(),t(17,"button",14),n(18,"i",15),e(),t(19,"button",16),n(20,"i",17),e()()(),t(21,"div",18)(22,"div",19)(23,"div",20)(24,"div",0)(25,"div",21)(26,"p",22),i(27,"Billing From :"),e(),t(28,"div",23)(29,"div",20),n(30,"input",24),e(),t(31,"div",20),n(32,"textarea",25),e(),t(33,"div",20),n(34,"input",26),e(),t(35,"div",20),n(36,"input",27),e(),t(37,"div",20),n(38,"textarea",28),e()()(),t(39,"div",29)(40,"p",22),i(41,"Billing To :"),e(),t(42,"div",23)(43,"div",20),n(44,"input",30),e(),t(45,"div",20),n(46,"textarea",31),e(),t(47,"div",20),n(48,"input",32),e(),t(49,"div",20),n(50,"input",33),e(),t(51,"div",20),n(52,"input",34),e(),t(53,"div",35)(54,"p",36),i(55,"Currency :"),e(),t(56,"ng-select",37),b("ngModelChange",function(l){return f(m.selectedSimpleItem,l)||(m.selectedSimpleItem=l),l}),e()()()()()(),t(57,"div",38)(58,"label",39),i(59,"Invoice ID"),e(),n(60,"input",40),e(),t(61,"div",38)(62,"label",41),i(63,"Date Issued"),e(),n(64,"input",42),e(),t(65,"div",38)(66,"label",43),i(67,"Due Date"),e(),n(68,"input",44),e(),t(69,"div",38)(70,"label",45),i(71,"Due Amount"),e(),n(72,"input",46),e(),t(73,"div",20)(74,"div",47)(75,"table",48)(76,"thead")(77,"tr")(78,"th"),i(79,"PRODUCT NAME"),e(),t(80,"th"),i(81,"DESCRIPTION"),e(),t(82,"th"),i(83,"QUANTITY"),e(),t(84,"th"),i(85,"PRICE PER UNIT"),e(),t(86,"th"),i(87,"TOTAL"),e(),t(88,"th"),i(89,"ACTION"),e()()(),t(90,"tbody")(91,"tr")(92,"td"),n(93,"input",49),e(),t(94,"td"),n(95,"textarea",50),e(),t(96,"td",51)(97,"div",52)(98,"button",53),n(99,"i",54),e(),n(100,"input",55),t(101,"button",56),n(102,"i",57),e()()(),t(103,"td"),n(104,"input",58),e(),t(105,"td"),n(106,"input",59),e(),t(107,"td")(108,"button",60),n(109,"i",61),e()()(),t(110,"tr")(111,"td"),n(112,"input",49),e(),t(113,"td"),n(114,"textarea",50),e(),t(115,"td",51)(116,"div",52)(117,"button",53),n(118,"i",54),e(),n(119,"input",62),t(120,"button",56),n(121,"i",57),e()()(),t(122,"td"),n(123,"input",63),e(),t(124,"td"),n(125,"input",63),e(),t(126,"td")(127,"button",60),n(128,"i",61),e()()(),t(129,"tr")(130,"td",64)(131,"a",65),n(132,"i",15),i(133," Add Product"),e()()(),t(134,"tr"),n(135,"td",66),t(136,"td",67)(137,"table",68)(138,"tbody")(139,"tr")(140,"th",69)(141,"div",70),i(142,"Sub Total :"),e()(),t(143,"td"),n(144,"input",71),e()(),t(145,"tr")(146,"th",69)(147,"div",70),i(148,"Avail Discount :"),e()(),t(149,"td"),n(150,"input",72),e()(),t(151,"tr")(152,"th",69)(153,"div",70),i(154," Coupon Discount "),t(155,"span",73),i(156,"(10%)"),e(),i(157," : "),e()(),t(158,"td"),n(159,"input",74),e()(),t(160,"tr")(161,"th",69)(162,"div",70),i(163," Vat "),t(164,"span",75),i(165,"(20%)"),e(),i(166," : "),e()(),t(167,"td"),n(168,"input",76),e()(),t(169,"tr")(170,"th",69)(171,"div",70),i(172,"Due Till Date :"),e()(),t(173,"td"),n(174,"input",77),e()(),t(175,"tr")(176,"th",69)(177,"div",78),i(178,"Total :"),e()(),t(179,"td"),n(180,"input",79),e()()()()()()()()()(),t(181,"div",20)(182,"div")(183,"label",80),i(184,"Note:"),e(),t(185,"textarea",81),i(186,"Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment"),e()()()()(),t(187,"div",82)(188,"button",83),n(189,"i",84),i(190,"Preview "),e(),t(191,"button",85),i(192," Send Invoice "),n(193,"i",86),e()()()(),t(194,"div",38)(195,"div",2)(196,"div",87)(197,"div",88),i(198,"Mode Of Payment"),e()(),t(199,"div",18)(200,"div",19)(201,"div",20)(202,"div",89),n(203,"input",90),t(204,"label",91),i(205,"UPI"),e(),n(206,"input",92),t(207,"label",93),i(208,"Credit/Debit Card"),e()()(),t(209,"div",20),n(210,"input",94),e(),t(211,"div",20),n(212,"input",95),t(213,"label",96)(214,"a",97),i(215,"Enter valid card number*"),e()()(),t(216,"div",20),n(217,"input",98),e(),t(218,"div",20)(219,"div",99),i(220," Please Make sure to pay the invoice bill within 30 days. "),e()()()()()()()),r&2&&(u(56),s("items",m.simpleItems),v("ngModel",m.selectedSimpleItem))},dependencies:[C,T,A,g,S,x,y,D,I,w]});let d=o;return d})();export{L as CreateInvoiceComponent};
