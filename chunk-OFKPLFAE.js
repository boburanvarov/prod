import{c as T,p as M}from"./chunk-MC6M5N3W.js";import"./chunk-Z3C6DEUP.js";import{ba as I,ca as L,db as O,l as D,m as _,x as b}from"./chunk-2FEP6AZJ.js";import{$b as t,Ac as x,Ba as u,Ca as w,Gc as R,Ma as p,Mb as k,Na as g,Ob as m,Ub as C,_b as e,ac as n,ec as v,nc as f,pc as h,qa as S,ra as y,ub as r,yc as i,zc as E}from"./chunk-GCPY7ULT.js";import"./chunk-MQNJ6KAK.js";import"./chunk-F6XAREQC.js";import"./chunk-FFXK657A.js";var z=(()=>{class l{}return l.\u0275fac=function(c){return new(c||l)},l.\u0275prov=S({token:l,factory:l.\u0275fac}),l})();var N=(()=>{class l{static forRoot(c={}){return{ngModule:l,providers:[{provide:z,useValue:c}]}}}return l.\u0275fac=function(c){return new(c||l)},l.\u0275mod=w({type:l}),l.\u0275inj=y({providers:[z],imports:[b]}),l})();function F(l,o){if(l&1){let c=v();e(0,"div",202)(1,"div",236),f("click",function(){let d=p(c).index,s=h();return g(s.clickEvent(d))}),n(2,"span"),t()()}if(l&2){let c=o.$implicit,a=o.index,d=h();r(),m("ngClass",c.class+(d.statuses[a]?" on":""))}}function U(l,o){if(l&1){let c=v();e(0,"div",237)(1,"div")(2,"p",224),i(3),e(4,"code"),i(5),t()()(),e(6,"div",236),f("click",function(){let d=p(c).$implicit,s=h();return g(s.clickEvent1(d))}),n(7,"span"),t()()}if(l&2){let c=o.$implicit;r(3),x("",c.label," "),r(2),E(c.code),r(),C("toggle mb-0 ",c.code," ",c.bg,""),m("ngClass",c.status?"on":"")}}var ne=(()=>{let o=class o{constructor(){this.toggles=[{class:"toggle radio-first"},{class:"toggle toggle-secondary"},{class:"toggle toggle-warning"},{class:"toggle toggle-info"},{class:"toggle toggle-success"},{class:"toggle toggle-danger"},{class:"toggle toggle-light"},{class:"toggle toggle-dark"}],this.statuses=Array(this.toggles.length).fill(!0),this.toggleSwitches=[{label:"Small size toggle switch",code:"toggle-sm",status:!0},{label:"Default toggle switch",code:"toggle",status:!0,bg:"toggle-secondary "},{label:"Large size toggle switch",code:"toggle-lg",status:!0,bg:"toggle-success"}]}clickEvent(a){document.querySelector(`.${this.toggles[a].class}`)?.classList.toggle("on"),this.statuses[a]=!this.statuses[a]}clickEvent1(a){let d=a.code?`toggle ${a.code}`:"toggle";document.querySelector(`.${d}`)?.classList.toggle("on"),a.status=!a.status}};o.\u0275fac=function(d){return new(d||o)},o.\u0275cmp=u({type:o,selectors:[["app-checksradios"]],standalone:!0,features:[R],decls:735,vars:2,consts:[[1,"row"],[1,"col-xl-3","col-lg-6","col-md-6","col-sm-12"],[1,"card","custom-card"],[1,"card-header","justify-content-between"],[1,"card-title"],[1,"prism-toggle"],["appShowCode","",1,"btn","btn-sm","btn-primary-light"],[1,"ri-code-line","ms-2","d-inline-block","align-middle"],[1,"card-body"],[1,"form-check"],["type","checkbox","value","","id","flexCheckDefault",1,"form-check-input"],["for","flexCheckDefault",1,"form-check-label"],["type","checkbox","value","","id","flexCheckChecked","checked","",1,"form-check-input"],["for","flexCheckChecked",1,"form-check-label"],[1,"card-footer","d-none","border-top-0"],[1,"language-html"],["type","checkbox","value","","id","flexCheckDisabled","disabled","",1,"form-check-input"],["for","flexCheckDisabled",1,"form-check-label"],["type","checkbox","value","","id","flexCheckCheckedDisabled","checked","","disabled","",1,"form-check-input"],["for","flexCheckCheckedDisabled",1,"form-check-label"],["type","radio","name","flexRadioDefault","id","flexRadioDefault1",1,"form-check-input"],["for","flexRadioDefault1",1,"form-check-label"],["type","radio","name","flexRadioDefault","id","flexRadioDefault2","checked","",1,"form-check-input"],["for","flexRadioDefault2",1,"form-check-label"],["type","radio","name","flexRadioDisabled","id","flexRadioDisabled","disabled","",1,"form-check-input"],["for","flexRadioDisabled",1,"form-check-label"],["type","radio","name","flexRadioDisabled","id","flexRadioCheckedDisabled","checked","","disabled","",1,"form-check-input"],["for","flexRadioCheckedDisabled",1,"form-check-label"],[1,"col-xl-6","col-lg-6","col-md-12","col-sm-12"],["type","checkbox","value","","id","defaultCheck1",1,"form-check-input"],["for","defaultCheck1",1,"form-check-label"],["type","checkbox","value","","id","defaultCheck2","disabled","",1,"form-check-input"],["for","defaultCheck2",1,"form-check-label"],["type","radio","name","exampleRadios","id","exampleRadios1","value","option1","checked","",1,"form-check-input"],["for","exampleRadios1",1,"form-check-label"],[1,"form-check","mb-0"],["type","radio","name","exampleRadios","id","exampleRadios3","value","option3","disabled","",1,"form-check-input"],["for","exampleRadios3",1,"form-check-label"],[1,"form-check","form-switch"],["type","checkbox","role","switch","id","flexSwitchCheckDefault",1,"form-check-input"],["for","flexSwitchCheckDefault",1,"form-check-label"],["type","checkbox","role","switch","id","flexSwitchCheckChecked","checked","",1,"form-check-input"],["for","flexSwitchCheckChecked",1,"form-check-label"],["type","checkbox","role","switch","id","flexSwitchCheckDisabled","disabled","",1,"form-check-input"],["for","flexSwitchCheckDisabled",1,"form-check-label"],[1,"form-check","form-switch","mb-0"],["type","checkbox","role","switch","id","flexSwitchCheckCheckedDisabled","checked","","disabled","",1,"form-check-input"],["for","flexSwitchCheckCheckedDisabled",1,"form-check-label"],[1,"col-xxl-4","col-xl-12","col-lg-12","col-md-12","col-sm-12"],[1,"card-body","d-sm-flex","align-items-center","justify-content-between"],["type","checkbox","value","","id","checkebox-sm","checked","",1,"form-check-input"],["for","checkebox-sm",1,"form-check-label"],[1,"form-check","form-check-md","d-flex","align-items-center"],["type","checkbox","value","","id","checkebox-md","checked","",1,"form-check-input"],["for","checkebox-md",1,"form-check-label"],[1,"form-check","form-check-lg","d-flex","align-items-center"],["type","checkbox","value","","id","checkebox-lg","checked","",1,"form-check-input"],["for","checkebox-lg",1,"form-check-label"],["type","radio","name","Radio","id","Radio-sm",1,"form-check-input"],["for","Radio-sm",1,"form-check-label"],[1,"form-check","form-check-md"],["type","radio","name","Radio","id","Radio-md",1,"form-check-input"],["for","Radio-md",1,"form-check-label"],[1,"form-check","form-check-lg"],["type","radio","name","Radio","id","Radio-lg","checked","",1,"form-check-input"],["for","Radio-lg",1,"form-check-label"],[1,"card-body","d-sm-flex","align-item-center","justify-content-between"],["type","checkbox","role","switch","id","switch-sm",1,"form-check-input"],["for","switch-sm",1,"form-check-label"],[1,"form-check","form-check-md","form-switch"],["type","checkbox","role","switch","id","switch-md",1,"form-check-input"],["for","switch-md",1,"form-check-label"],[1,"form-check","form-check-lg","form-switch"],["type","checkbox","role","switch","id","switch-lg",1,"form-check-input"],["for","switch-lg",1,"form-check-label"],[1,"col-xl-6","col-lg-12","col-md-12","col-sm-12"],[1,"form-check","form-check-inline"],["type","checkbox","id","inlineCheckbox1","value","option1",1,"form-check-input"],["for","inlineCheckbox1",1,"form-check-label"],["type","checkbox","id","inlineCheckbox2","value","option2",1,"form-check-input"],["for","inlineCheckbox2",1,"form-check-label"],["type","checkbox","id","inlineCheckbox3","value","option3","disabled","",1,"form-check-input"],["for","inlineCheckbox3",1,"form-check-label"],["type","radio","name","inlineRadioOptions","id","inlineRadio1","value","option1",1,"form-check-input"],["for","inlineRadio1",1,"form-check-label"],["type","radio","name","inlineRadioOptions","id","inlineRadio2","value","option2",1,"form-check-input"],["for","inlineRadio2",1,"form-check-label"],["type","radio","name","inlineRadioOptions","id","inlineRadio3","value","option3","disabled","",1,"form-check-input"],["for","inlineRadio3",1,"form-check-label"],[1,"me-3"],["type","checkbox","id","checkboxNoLabel","value","","aria-label","...",1,"form-check-input"],["type","radio","name","radioNoLabel","id","radioNoLabel1","value","","aria-label","...",1,"form-check-input"],[1,"col-xl-3","col-lg-12","col-md-12","col-sm-12"],[1,"form-check","form-check-reverse","mb-3"],["type","checkbox","value","","id","reverseCheck1",1,"form-check-input"],["for","reverseCheck1",1,"form-check-label"],["type","checkbox","value","","id","reverseCheck2","disabled","",1,"form-check-input"],["for","reverseCheck2",1,"form-check-label"],[1,"form-check","form-switch","form-check-reverse"],["type","checkbox","id","flexSwitchCheckReverse",1,"form-check-input"],["for","flexSwitchCheckReverse",1,"form-check-label"],["type","checkbox","id","btn-check-outlined",1,"btn-check"],["for","btn-check-outlined",1,"btn","btn-outline-primary","mb-3"],["type","checkbox","id","btn-check-2-outlined","checked","",1,"btn-check"],["for","btn-check-2-outlined",1,"btn","btn-outline-secondary","mb-3"],["type","radio","name","options-outlined","id","success-outlined","checked","",1,"btn-check"],["for","success-outlined",1,"btn","btn-outline-success","m-1"],["type","radio","name","options-outlined","id","danger-outlined",1,"btn-check"],["for","danger-outlined",1,"btn","btn-outline-danger","m-1"],["type","radio","name","options","id","option1","checked","",1,"btn-check"],["for","option1",1,"btn","btn-primary","m-1"],["type","radio","name","options","id","option2",1,"btn-check"],["for","option2",1,"btn","btn-primary","m-1"],["type","radio","name","options","id","option3","disabled","",1,"btn-check"],["for","option3",1,"btn","btn-primary","m-1"],["type","radio","name","options","id","option4",1,"btn-check"],["for","option4",1,"btn","btn-primary","m-1"],["type","checkbox","id","btn-check",1,"btn-check"],["for","btn-check",1,"btn","btn-primary","m-1"],["type","checkbox","id","btn-check-2","checked","",1,"btn-check"],["for","btn-check-2",1,"btn","btn-primary","m-1"],["type","checkbox","id","btn-check-3","disabled","",1,"btn-check"],["for","btn-check-3",1,"btn","btn-primary","m-1"],[1,"row","row-cols-12"],[1,"col","col-md-6","col-lg-6","col-xl"],[1,"form-check","mb-2"],["type","checkbox","value","","id","primaryChecked","checked","",1,"form-check-input"],["for","primaryChecked",1,"form-check-label"],["type","checkbox","value","","id","secondaryChecked","checked","",1,"form-check-input","form-checked-secondary"],["for","secondaryChecked",1,"form-check-label"],["type","checkbox","value","","id","warningChecked","checked","",1,"form-check-input","form-checked-warning"],["for","warningChecked",1,"form-check-label"],["type","checkbox","value","","id","infoChecked","checked","",1,"form-check-input","form-checked-info"],["for","infoChecked",1,"form-check-label"],["type","checkbox","value","","id","successChecked","checked","",1,"form-check-input","form-checked-success"],["for","successChecked",1,"form-check-label"],["type","checkbox","value","","id","dangerChecked","checked","",1,"form-check-input","form-checked-danger"],["for","dangerChecked",1,"form-check-label"],["type","checkbox","value","","id","darkChecked","checked","",1,"form-check-input","form-checked-dark"],["for","darkChecked",1,"form-check-label"],["type","checkbox","value","","id","primaryoutlineChecked","checked","",1,"form-check-input","form-checked-outline"],["for","primaryoutlineChecked",1,"form-check-label"],["type","checkbox","value","","id","secondaryoutlineChecked","checked","",1,"form-check-input","form-checked-outline","form-checked-secondary"],["for","secondaryoutlineChecked",1,"form-check-label"],["type","checkbox","value","","id","warningoutlineChecked","checked","",1,"form-check-input","form-checked-outline","form-checked-warning"],["for","warningoutlineChecked",1,"form-check-label"],["type","checkbox","value","","id","infooutlineChecked","checked","",1,"form-check-input","form-checked-outline","form-checked-info"],["for","infooutlineChecked",1,"form-check-label"],["type","checkbox","value","","id","successoutlineChecked","checked","",1,"form-check-input","form-checked-outline","form-checked-success"],["for","successoutlineChecked",1,"form-check-label"],["type","checkbox","value","","id","dangeroutlineChecked","checked","",1,"form-check-input","form-checked-outline","form-checked-danger"],["for","dangeroutlineChecked",1,"form-check-label"],["type","checkbox","value","","id","darkoutlineChecked","checked","",1,"form-check-input","form-checked-outline","form-checked-dark"],["for","darkoutlineChecked",1,"form-check-label"],[1,"col","col-md-12","col-lg","col-xl"],["type","radio","name","primaryRadio","id","primaryRadio","checked","",1,"form-check-input"],["for","primaryRadio",1,"form-check-label"],["type","radio","name","secondaryRadio","id","secondaryRadio","checked","",1,"form-check-input","form-checked-secondary"],["for","secondaryRadio",1,"form-check-label"],["type","radio","name","warningRadio","id","warningRadio","checked","",1,"form-check-input","form-checked-warning"],["for","warningRadio",1,"form-check-label"],["type","radio","name","InfoRadio","id","InfoRadio","checked","",1,"form-check-input","form-checked-info"],["for","InfoRadio",1,"form-check-label"],["type","radio","name","successRadio","id","successRadio","checked","",1,"form-check-input","form-checked-success"],["for","successRadio",1,"form-check-label"],["type","radio","name","dangerRadio","id","dangerRadio","checked","",1,"form-check-input","form-checked-danger"],["for","dangerRadio",1,"form-check-label"],["type","radio","name","darkRadio","id","darkRadio","checked","",1,"form-check-input","form-checked-dark"],["for","darkRadio",1,"form-check-label"],[1,"col","col-sm-6","col-lg"],["type","radio","name","primaryoutlineRadio","id","primaryoutlineRadio","checked","",1,"form-check-input","form-checked-outline"],["for","primaryoutlineRadio",1,"form-check-label"],["type","radio","name","secondaryoutlineRadio","id","secondaryoutlineRadio","checked","",1,"form-check-input","form-checked-outline","form-checked-secondary"],["for","secondaryoutlineRadio",1,"form-check-label"],["type","radio","name","warningoutlineRadio","id","warningoutlineRadio","checked","",1,"form-check-input","form-checked-outline","form-checked-warning"],["for","warningoutlineRadio",1,"form-check-label"],["type","radio","name","InfooutlineRadio","id","InfooutlineRadio","checked","",1,"form-check-input","form-checked-outline","form-checked-info"],["for","InfooutlineRadio",1,"form-check-label"],["type","radio","name","successoutlineRadio","id","successoutlineRadio","checked","",1,"form-check-input","form-checked-outline","form-checked-success"],["for","successoutlineRadio",1,"form-check-label"],["type","radio","name","dangeroutlineRadio","id","dangeroutlineRadio","checked","",1,"form-check-input","form-checked-outline","form-checked-danger"],["for","dangeroutlineRadio",1,"form-check-label"],["type","radio","name","darkoutlineRadio","id","darkoutlineRadio","checked","",1,"form-check-input","form-checked-outline","form-checked-dark"],["for","darkoutlineRadio",1,"form-check-label"],[1,"form-check","form-switch","mb-2"],["type","checkbox","role","switch","id","switch-primary","checked","",1,"form-check-input"],["for","switch-primary",1,"form-check-label"],["type","checkbox","role","switch","id","switch-secondary","checked","",1,"form-check-input","form-checked-secondary"],["for","switch-secondary",1,"form-check-label"],["type","checkbox","role","switch","id","switch-warning","checked","",1,"form-check-input","form-checked-warning"],["for","switch-warning",1,"form-check-label"],["type","checkbox","role","switch","id","switch-info","checked","",1,"form-check-input","form-checked-info"],["for","switch-info",1,"form-check-label"],["type","checkbox","role","switch","id","switch-success","checked","",1,"form-check-input","form-checked-success"],["for","switch-success",1,"form-check-label"],["type","checkbox","role","switch","id","switch-danger","checked","",1,"form-check-input","form-checked-danger"],["for","switch-danger",1,"form-check-label"],["type","checkbox","role","switch","id","switch-dark","checked","",1,"form-check-input","form-checked-dark"],["for","switch-dark",1,"form-check-label"],[1,"col-xl-6","col-lg-6","col-md-6","col-sm-12"],[1,"row","gy-1"],["class","col-xl-4",4,"ngFor","ngForOf"],[1,"col-xl-4"],[1,"custom-toggle-switch","d-flex","align-items-center","mb-4"],["id","toggleswitchPrimary","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchPrimary",1,"label-primary"],[1,"ms-3"],["id","toggleswitchSecondary","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchSecondary",1,"label-secondary"],["id","toggleswitchWarning","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchWarning",1,"label-warning"],["id","toggleswitchInfo","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchInfo",1,"label-info"],["id","toggleswitchSuccess","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchSuccess",1,"label-success"],["id","toggleswitchDanger","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchDanger",1,"label-danger"],["id","toggleswitchLight","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchLight",1,"label-light"],["id","toggleswitchDark","name","toggleswitch001","type","checkbox","checked",""],["for","toggleswitchDark",1,"label-dark"],["class","d-flex align-items-center flex-wrap mb-3",4,"ngFor","ngForOf"],[1,"d-flex","align-items-center","flex-wrap","mb-4"],[1,""],[1,"text-muted","m-0"],[1,"custom-toggle-switch","toggle-sm","ms-2"],["id","size-sm","name","toggleswitchsize","type","checkbox","checked",""],["for","size-sm",1,"label-primary"],[1,"custom-toggle-switch","ms-2"],["id","size-default","name","toggleswitchsize","type","checkbox","checked",""],["for","size-default",1,"label-secondary","mb-1"],[1,"d-sm-flex","d-block","align-items-center","flex-wrap"],[1,"mb-sm-0","mb-2"],[1,"custom-toggle-switch","toggle-lg","ms-sm-2","ms-0"],["id","size-lg","name","toggleswitchsize","type","checkbox","checked",""],["for","size-lg",1,"label-success","mb-2"],[3,"click","ngClass"],[1,"d-flex","align-items-center","flex-wrap","mb-3"]],template:function(d,s){d&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),i(5," Checks "),t(),e(6,"div",5)(7,"button",6),i(8,"Show Code"),n(9,"i",7),t()()(),e(10,"div",8)(11,"div",9),n(12,"input",10),e(13,"label",11),i(14," Default checkbox "),t()(),e(15,"div",9),n(16,"input",12),e(17,"label",13),i(18," Checked checkbox "),t()()(),e(19,"div",14)(20,"pre",15)(21,"code",15),i(22,`<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
<label class="form-check-label" for="flexCheckDefault">
Default checkbox
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"
checked>
<label class="form-check-label" for="flexCheckChecked">
Checked checkbox
</label>
</div>`),t()()()()(),e(23,"div",1)(24,"div",2)(25,"div",3)(26,"div",4),i(27," Disabled "),t(),e(28,"div",5)(29,"button",6),i(30,"Show Code"),n(31,"i",7),t()()(),e(32,"div",8)(33,"div",9),n(34,"input",16),e(35,"label",17),i(36," Disabled checkbox "),t()(),e(37,"div",9),n(38,"input",18),e(39,"label",19),i(40," Disabled checked checkbox "),t()()(),e(41,"div",14)(42,"pre",15)(43,"code",15),i(44,`<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="flexCheckDisabled"
disabled="">
<label class="form-check-label" for="flexCheckDisabled">
Disabled checkbox
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value=""
id="flexCheckCheckedDisabled" checked="" disabled="">
<label class="form-check-label" for="flexCheckCheckedDisabled">
Disabled checked checkbox
</label>
</div>`),t()()()()(),e(45,"div",1)(46,"div",2)(47,"div",3)(48,"div",4),i(49," Radios "),t(),e(50,"div",5)(51,"button",6),i(52,"Show Code"),n(53,"i",7),t()()(),e(54,"div",8)(55,"div",9),n(56,"input",20),e(57,"label",21),i(58," Default radio "),t()(),e(59,"div",9),n(60,"input",22),e(61,"label",23),i(62," Default checked radio "),t()()(),e(63,"div",14)(64,"pre",15)(65,"code",15),i(66,`<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault"
id="flexRadioDefault1">
<label class="form-check-label" for="flexRadioDefault1">
Default radio
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDefault"
id="flexRadioDefault2" checked="">
<label class="form-check-label" for="flexRadioDefault2">
Default checked radio
</label>
</div>`),t()()()()(),e(67,"div",1)(68,"div",2)(69,"div",3)(70,"div",4),i(71," Disabled "),t(),e(72,"div",5)(73,"button",6),i(74,"Show Code"),n(75,"i",7),t()()(),e(76,"div",8)(77,"div",9),n(78,"input",24),e(79,"label",25),i(80," Disabled radio "),t()(),e(81,"div",9),n(82,"input",26),e(83,"label",27),i(84," Disabled checked radio "),t()()(),e(85,"div",14)(86,"pre",15)(87,"code",15),i(88,`<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDisabled"
id="flexRadioDisabled" disabled="">
<label class="form-check-label" for="flexRadioDisabled">
Disabled radio
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="flexRadioDisabled"
id="flexRadioCheckedDisabled" checked="" disabled="">
<label class="form-check-label" for="flexRadioCheckedDisabled">
Disabled checked radio
</label>
</div>`),t()()()()()(),e(89,"div",0)(90,"div",28)(91,"div",2)(92,"div",3)(93,"div",4),i(94," Default (stacked) "),t(),e(95,"div",5)(96,"button",6),i(97,"Show Code"),n(98,"i",7),t()()(),e(99,"div",8)(100,"div",9),n(101,"input",29),e(102,"label",30),i(103," Default checkbox "),t()(),e(104,"div",9),n(105,"input",31),e(106,"label",32),i(107," Disabled checkbox "),t()(),e(108,"div",9),n(109,"input",33),e(110,"label",34),i(111," Default radio "),t()(),e(112,"div",35),n(113,"input",36),e(114,"label",37),i(115," Disabled radio "),t()()(),e(116,"div",14)(117,"pre",15)(118,"code",15),i(119,`<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
<label class="form-check-label" for="defaultCheck1">
Default checkbox
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="defaultCheck2"
disabled="">
<label class="form-check-label" for="defaultCheck2">
Disabled checkbox
</label>
</div>
<div class="form-check">
<input class="form-check-input" type="radio" name="exampleRadios"
id="exampleRadios1" value="option1" checked="">
<label class="form-check-label" for="exampleRadios1">
Default radio
</label>
</div>
<div class="form-check mb-0">
<input class="form-check-input" type="radio" name="exampleRadios"
id="exampleRadios3" value="option3" disabled="">
<label class="form-check-label" for="exampleRadios3">
Disabled radio
</label>
</div>`),t()()()()(),e(120,"div",28)(121,"div",2)(122,"div",3)(123,"div",4),i(124," Switches "),t(),e(125,"div",5)(126,"button",6),i(127,"Show Code"),n(128,"i",7),t()()(),e(129,"div",8)(130,"div",38),n(131,"input",39),e(132,"label",40),i(133,"Default switch checkbox input"),t()(),e(134,"div",38),n(135,"input",41),e(136,"label",42),i(137,"Checked switch checkbox input"),t()(),e(138,"div",38),n(139,"input",43),e(140,"label",44),i(141,"Disabled switch checkbox input"),t()(),e(142,"div",45),n(143,"input",46),e(144,"label",47),i(145,"Disabled checked switch checkbox input"),t()()(),e(146,"div",14)(147,"pre",15)(148,"code",15),i(149,`<div class="form-check form-switch">
<input class="form-check-input" type="checkbox" role="switch"
id="flexSwitchCheckDefault">
<label class="form-check-label" for="flexSwitchCheckDefault">Default switch
checkbox input</label>
</div>
<div class="form-check form-switch">
<input class="form-check-input" type="checkbox" role="switch"
id="flexSwitchCheckChecked" checked="">
<label class="form-check-label" for="flexSwitchCheckChecked">Checked switch
checkbox input</label>
</div>
<div class="form-check form-switch">
<input class="form-check-input" type="checkbox" role="switch"
id="flexSwitchCheckDisabled" disabled="">
<label class="form-check-label" for="flexSwitchCheckDisabled">Disabled
switch
checkbox input</label>
</div>
<div class="form-check form-switch mb-0">
<input class="form-check-input" type="checkbox" role="switch"
id="flexSwitchCheckCheckedDisabled" checked="" disabled="">
<label class="form-check-label" for="flexSwitchCheckCheckedDisabled">Disabled
checked switch checkbox input</label>
</div>`),t()()()()()(),e(150,"div",0)(151,"div",48)(152,"div",2)(153,"div",3)(154,"div",4),i(155," Checkbox Sizes "),t(),e(156,"div",5)(157,"button",6),i(158,"Show Code"),n(159,"i",7),t()()(),e(160,"div",49)(161,"div",9),n(162,"input",50),e(163,"label",51),i(164," Default "),t()(),e(165,"div",52),n(166,"input",53),e(167,"label",54),i(168," Medium "),t()(),e(169,"div",55),n(170,"input",56),e(171,"label",57),i(172," Large "),t()()(),e(173,"div",14)(174,"pre",15)(175,"code",15),i(176,`<div class="form-check">
<input class="form-check-input" type="checkbox" value="" id="checkebox-sm" checked="">
<label class="form-check-label" for="checkebox-sm">
Default
</label>
</div>
<div class="form-check form-check-md d-flex align-items-center">
<input class="form-check-input" type="checkbox" value="" id="checkebox-md" checked="">
<label class="form-check-label" for="checkebox-md">
Medium
</label>
</div>
<div class="form-check form-check-lg d-flex align-items-center">
<input class="form-check-input" type="checkbox" value="" id="checkebox-lg" checked="">
<label class="form-check-label" for="checkebox-lg">
Large
</label>
</div>`),t()()()()(),e(177,"div",48)(178,"div",2)(179,"div",3)(180,"div",4),i(181," Radio Sizes "),t(),e(182,"div",5)(183,"button",6),i(184,"Show Code"),n(185,"i",7),t()()(),e(186,"div",49)(187,"div",9),n(188,"input",58),e(189,"label",59),i(190," default "),t()(),e(191,"div",60),n(192,"input",61),e(193,"label",62),i(194," Medium "),t()(),e(195,"div",63),n(196,"input",64),e(197,"label",65),i(198," Large "),t()()(),e(199,"div",14)(200,"pre",15)(201,"code",15),i(202,`<div class="form-check">
<input class="form-check-input" type="radio" name="Radio" id="Radio-sm">
<label class="form-check-label" for="Radio-sm">
default
</label>
</div>
<div class="form-check form-check-md">
<input class="form-check-input" type="radio" name="Radio" id="Radio-md">
<label class="form-check-label" for="Radio-md">
Medium
</label>
</div>
<div class="form-check form-check-lg">
<input class="form-check-input" type="radio" name="Radio" id="Radio-lg" checked="">
<label class="form-check-label" for="Radio-lg">
Large
</label>
</div>`),t()()()()(),e(203,"div",48)(204,"div",2)(205,"div",3)(206,"div",4),i(207," Switch Sizes "),t(),e(208,"div",5)(209,"button",6),i(210,"Show Code"),n(211,"i",7),t()()(),e(212,"div",66)(213,"div",38),n(214,"input",67),e(215,"label",68),i(216,"Default"),t()(),e(217,"div",69),n(218,"input",70),e(219,"label",71),i(220,"Medium"),t()(),e(221,"div",72),n(222,"input",73),e(223,"label",74),i(224,"Large"),t()()(),e(225,"div",14)(226,"pre",15)(227,"code",15),i(228,`<div class="form-check form-switch">
<input class="form-check-input" type="checkbox" role="switch"
id="switch-sm">
<label class="form-check-label" for="switch-sm">Default</label>
</div>
<div class="form-check form-check-md form-switch">
<input class="form-check-input" type="checkbox" role="switch"
id="switch-md">
<label class="form-check-label" for="switch-md">Medium</label>
</div>
<div class="form-check form-check-lg form-switch">
<input class="form-check-input" type="checkbox" role="switch"
id="switch-lg">
<label class="form-check-label" for="switch-lg">Large</label>
</div>`),t()()()()()(),e(229,"div",0)(230,"div",75)(231,"div",2)(232,"div",3)(233,"div",4),i(234," Inline "),t(),e(235,"div",5)(236,"button",6),i(237,"Show Code"),n(238,"i",7),t()()(),e(239,"div",8)(240,"div",76),n(241,"input",77),e(242,"label",78),i(243,"1"),t()(),e(244,"div",76),n(245,"input",79),e(246,"label",80),i(247,"2"),t()(),e(248,"div",76),n(249,"input",81),e(250,"label",82),i(251,"3 (disabled)"),t()(),e(252,"div",76),n(253,"input",83),e(254,"label",84),i(255,"1"),t()(),e(256,"div",76),n(257,"input",85),e(258,"label",86),i(259,"2"),t()(),e(260,"div",76),n(261,"input",87),e(262,"label",88),i(263,"3 (disabled)"),t()()(),e(264,"div",14)(265,"pre",15)(266,"code",15),i(267,`<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="inlineCheckbox1"
value="option1">
<label class="form-check-label" for="inlineCheckbox1">1</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="inlineCheckbox2"
value="option2">
<label class="form-check-label" for="inlineCheckbox2">2</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="checkbox" id="inlineCheckbox3"
value="option3" disabled>
<label class="form-check-label" for="inlineCheckbox3">3 (disabled)</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions"
id="inlineRadio1" value="option1">
<label class="form-check-label" for="inlineRadio1">1</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions"
id="inlineRadio2" value="option2">
<label class="form-check-label" for="inlineRadio2">2</label>
</div>
<div class="form-check form-check-inline">
<input class="form-check-input" type="radio" name="inlineRadioOptions"
id="inlineRadio3" value="option3" disabled>
<label class="form-check-label" for="inlineRadio3">3 (disabled)</label>
</div>`),t()()()(),e(268,"div",2)(269,"div",3)(270,"div",4),i(271," Without labels "),t(),e(272,"div",5)(273,"button",6),i(274,"Show Code"),n(275,"i",7),t()()(),e(276,"div",8)(277,"span",89),n(278,"input",90),t(),e(279,"span"),n(280,"input",91),t()(),e(281,"div",14)(282,"pre",15)(283,"code",15),i(284,`<span class="me-3">
<input class="form-check-input" type="checkbox" id="checkboxNoLabel" value=""
aria-label="...">
</span>
<span>
<input class="form-check-input" type="radio" name="radioNoLabel"
id="radioNoLabel1" value="" aria-label="...">
</span>`),t()()()()(),e(285,"div",92)(286,"div",2)(287,"div",3)(288,"div",4),i(289," Reverse "),t(),e(290,"div",5)(291,"button",6),i(292,"Show Code"),n(293,"i",7),t()()(),e(294,"div",8)(295,"div",93),n(296,"input",94),e(297,"label",95),i(298," Reverse checkbox "),t()(),e(299,"div",93),n(300,"input",96),e(301,"label",97),i(302," Disabled reverse checkbox "),t()(),e(303,"div",98),n(304,"input",99),e(305,"label",100),i(306,"Reverse switch checkbox input"),t()()(),e(307,"div",14)(308,"pre",15)(309,"code",15),i(310,`<div class="form-check form-check-reverse mb-3">
<input class="form-check-input" type="checkbox" value=""
id="reverseCheck1">
<label class="form-check-label" for="reverseCheck1">
Reverse checkbox
</label>
</div>
<div class="form-check form-check-reverse mb-3">
<input class="form-check-input" type="checkbox" value=""
id="reverseCheck2" disabled="">
<label class="form-check-label" for="reverseCheck2">
Disabled reverse checkbox
</label>
</div>

<div class="form-check form-switch form-check-reverse">
<input class="form-check-input" type="checkbox"
id="flexSwitchCheckReverse">
<label class="form-check-label" for="flexSwitchCheckReverse">Reverse
switch
checkbox input</label>
</div>`),t()()()()(),e(311,"div",92)(312,"div",2)(313,"div",3)(314,"div",4),i(315," Outlined styles "),t(),e(316,"div",5)(317,"button",6),i(318,"Show Code"),n(319,"i",7),t()()(),e(320,"div",8),n(321,"input",101),e(322,"label",102),i(323,"Single toggle"),t(),n(324,"br")(325,"input",103),e(326,"label",104),i(327,"Checked"),t(),n(328,"br")(329,"input",105),e(330,"label",106),i(331,"Checked success radio"),t(),n(332,"input",107),e(333,"label",108),i(334,"Danger radio"),t()(),e(335,"div",14)(336,"pre",15)(337,"code",15),i(338,`<input type="checkbox" class="btn-check" id="btn-check-outlined">
<label class="btn btn-outline-primary mb-3" for="btn-check-outlined">Single
toggle</label><br>

<input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked
>
<label class="btn btn-outline-secondary mb-3"
for="btn-check-2-outlined">Checked</label><br>

<input type="radio" class="btn-check" name="options-outlined" id="success-outlined"
checked>
<label class="btn btn-outline-success m-1" for="success-outlined">Checked success
radio</label>

<input type="radio" class="btn-check" name="options-outlined" id="danger-outlined"
>
<label class="btn btn-outline-danger m-1" for="danger-outlined">Danger radio</label>`),t()()()()()(),e(339,"div",0)(340,"div",75)(341,"div",2)(342,"div",3)(343,"div",4),i(344," Radio toggle buttons "),t(),e(345,"div",5)(346,"button",6),i(347,"Show Code"),n(348,"i",7),t()()(),e(349,"div",8),n(350,"input",109),e(351,"label",110),i(352,"Checked"),t(),n(353,"input",111),e(354,"label",112),i(355,"Radio"),t(),n(356,"input",113),e(357,"label",114),i(358,"Disabled"),t(),n(359,"input",115),e(360,"label",116),i(361,"Radio"),t()(),e(362,"div",14)(363,"pre",15)(364,"code",15),i(365,`<input type="radio" class="btn-check" name="options" id="option1"
checked="">
<label class="btn btn-primary m-1" for="option1">Checked</label>

<input type="radio" class="btn-check" name="options" id="option2"
>
<label class="btn btn-primary m-1" for="option2">Radio</label>

<input type="radio" class="btn-check" name="options" id="option3"
disabled="">
<label class="btn btn-primary m-1" for="option3">Disabled</label>

<input type="radio" class="btn-check" name="options" id="option4"
>
<label class="btn btn-primary m-1" for="option4">Radio</label>`),t()()()()(),e(366,"div",75)(367,"div",2)(368,"div",3)(369,"div",4),i(370," Checkbox toggle buttons "),t(),e(371,"div",5)(372,"button",6),i(373,"Show Code"),n(374,"i",7),t()()(),e(375,"div",8),n(376,"input",117),e(377,"label",118),i(378,"Single toggle"),t(),n(379,"input",119),e(380,"label",120),i(381,"Checked"),t(),n(382,"input",121),e(383,"label",122),i(384,"Disabled"),t()(),e(385,"div",14)(386,"pre",15)(387,"code",15),i(388,`<input type="checkbox" class="btn-check" id="btn-check">
<label class="btn btn-primary m-1" for="btn-check">Single toggle</label>
<input type="checkbox" class="btn-check" id="btn-check-2" checked
>
<label class="btn btn-primary m-1" for="btn-check-2">Checked</label>
<input type="checkbox" class="btn-check" id="btn-check-3"
disabled>
<label class="btn btn-primary m-1" for="btn-check-3">Disabled</label>`),t()()()()()(),e(389,"div",123)(390,"div",124)(391,"div",2)(392,"div",3)(393,"div",4),i(394," Colored Checkboxes "),t(),e(395,"div",5)(396,"button",6),i(397,"Show Code"),n(398,"i",7),t()()(),e(399,"div",8)(400,"div",125),n(401,"input",126),e(402,"label",127),i(403," Primary "),t()(),e(404,"div",125),n(405,"input",128),e(406,"label",129),i(407," Secondary "),t()(),e(408,"div",125),n(409,"input",130),e(410,"label",131),i(411," Warning "),t()(),e(412,"div",125),n(413,"input",132),e(414,"label",133),i(415," Info "),t()(),e(416,"div",125),n(417,"input",134),e(418,"label",135),i(419," Success "),t()(),e(420,"div",125),n(421,"input",136),e(422,"label",137),i(423," Danger "),t()(),e(424,"div",35),n(425,"input",138),e(426,"label",139),i(427," Dark "),t()()(),e(428,"div",14)(429,"pre",15)(430,"code",15),i(431,`<div class="form-check mb-2">
<input class="form-check-input" type="checkbox" value="" id="primaryChecked" checked="">
<label class="form-check-label" for="primaryChecked">
Primary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-secondary" type="checkbox" value="" id="secondaryChecked" checked="">
<label class="form-check-label" for="secondaryChecked">
Secondary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-warning" type="checkbox" value="" id="warningChecked" checked="">
<label class="form-check-label" for="warningChecked">
Warning
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-info" type="checkbox" value="" id="infoChecked" checked="">
<label class="form-check-label" for="infoChecked">
Info
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-success" type="checkbox" value="" id="successChecked" checked="">
<label class="form-check-label" for="successChecked">
Success
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-danger" type="checkbox" value="" id="dangerChecked" checked="">
<label class="form-check-label" for="dangerChecked">
Danger
</label>
</div>
<div class="form-check mb-0">
<input class="form-check-input form-checked-dark" type="checkbox" value="" id="darkChecked" checked="">
<label class="form-check-label" for="darkChecked">
Dark
</label>
</div>`),t()()()()(),e(432,"div",124)(433,"div",2)(434,"div",3)(435,"div",4),i(436," Outline Checkboxes "),t(),e(437,"div",5)(438,"button",6),i(439,"Show Code"),n(440,"i",7),t()()(),e(441,"div",8)(442,"div",125),n(443,"input",140),e(444,"label",141),i(445," Primary "),t()(),e(446,"div",125),n(447,"input",142),e(448,"label",143),i(449," Secondary "),t()(),e(450,"div",125),n(451,"input",144),e(452,"label",145),i(453," Warning "),t()(),e(454,"div",125),n(455,"input",146),e(456,"label",147),i(457," Info "),t()(),e(458,"div",125),n(459,"input",148),e(460,"label",149),i(461," Success "),t()(),e(462,"div",125),n(463,"input",150),e(464,"label",151),i(465," Danger "),t()(),e(466,"div",35),n(467,"input",152),e(468,"label",153),i(469," Dark "),t()()(),e(470,"div",14)(471,"pre",15)(472,"code",15),i(473,`<div class="form-check mb-2">
<input class="form-check-input form-checked-outline" type="checkbox" value="" id="primaryoutlineChecked" checked="">
<label class="form-check-label" for="primaryoutlineChecked">
Primary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-secondary" type="checkbox" value="" id="secondaryoutlineChecked" checked="">
<label class="form-check-label" for="secondaryoutlineChecked">
Secondary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-warning" type="checkbox" value="" id="warningoutlineChecked" checked="">
<label class="form-check-label" for="warningoutlineChecked">
Warning
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-info" type="checkbox" value="" id="infooutlineChecked" checked="">
<label class="form-check-label" for="infooutlineChecked">
Info
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-success" type="checkbox" value="" id="successoutlineChecked" checked="">
<label class="form-check-label" for="successoutlineChecked">
Success
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-danger" type="checkbox" value="" id="dangeroutlineChecked" checked="">
<label class="form-check-label" for="dangeroutlineChecked">
Danger
</label>
</div>
<div class="form-check mb-0">
<input class="form-check-input form-checked-outline form-checked-dark" type="checkbox" value="" id="darkoutlineChecked" checked="">
<label class="form-check-label" for="darkoutlineChecked">
Dark
</label>
</div>`),t()()()()(),e(474,"div",154)(475,"div",2)(476,"div",3)(477,"div",4),i(478," Colored Radios "),t(),e(479,"div",5)(480,"button",6),i(481,"Show Code"),n(482,"i",7),t()()(),e(483,"div",8)(484,"div",125),n(485,"input",155),e(486,"label",156),i(487," Primary "),t()(),e(488,"div",125),n(489,"input",157),e(490,"label",158),i(491," Secondary "),t()(),e(492,"div",125),n(493,"input",159),e(494,"label",160),i(495," Warning "),t()(),e(496,"div",125),n(497,"input",161),e(498,"label",162),i(499," Info "),t()(),e(500,"div",125),n(501,"input",163),e(502,"label",164),i(503," Success "),t()(),e(504,"div",125),n(505,"input",165),e(506,"label",166),i(507," Danger "),t()(),e(508,"div",35),n(509,"input",167),e(510,"label",168),i(511," Dark "),t()()(),e(512,"div",14)(513,"pre",15)(514,"code",15),i(515,`<div class="form-check mb-2">
<input class="form-check-input" type="radio" name="primaryRadio" id="primaryRadio" checked="">
<label class="form-check-label" for="primaryRadio">
Primary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-secondary" type="radio" name="secondaryRadio" id="secondaryRadio" checked="">
<label class="form-check-label" for="secondaryRadio">
Secondary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-warning" type="radio" name="warningRadio" id="warningRadio" checked="">
<label class="form-check-label" for="warningRadio">
Warning
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-info" type="radio" name="InfoRadio" id="InfoRadio" checked="">
<label class="form-check-label" for="InfoRadio">
Info
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-success" type="radio" name="successRadio" id="successRadio" checked="">
<label class="form-check-label" for="successRadio">
Success
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-danger" type="radio" name="dangerRadio" id="dangerRadio" checked="">
<label class="form-check-label" for="dangerRadio">
Danger
</label>
</div>
<div class="form-check mb-0">
<input class="form-check-input form-checked-dark" type="radio" name="darkRadio" id="darkRadio" checked="">
<label class="form-check-label" for="darkRadio">
Dark
</label>
</div>`),t()()()()(),e(516,"div",169)(517,"div",2)(518,"div",3)(519,"div",4),i(520," Outline Radios "),t(),e(521,"div",5)(522,"button",6),i(523,"Show Code"),n(524,"i",7),t()()(),e(525,"div",8)(526,"div",125),n(527,"input",170),e(528,"label",171),i(529," Primary "),t()(),e(530,"div",125),n(531,"input",172),e(532,"label",173),i(533," Secondary "),t()(),e(534,"div",125),n(535,"input",174),e(536,"label",175),i(537," Warning "),t()(),e(538,"div",125),n(539,"input",176),e(540,"label",177),i(541," Info "),t()(),e(542,"div",125),n(543,"input",178),e(544,"label",179),i(545," Success "),t()(),e(546,"div",125),n(547,"input",180),e(548,"label",181),i(549," Danger "),t()(),e(550,"div",35),n(551,"input",182),e(552,"label",183),i(553," Dark "),t()()(),e(554,"div",14)(555,"pre",15)(556,"code",15),i(557,`<div class="form-check mb-2">
<input class="form-check-input form-checked-outline" type="radio" name="primaryoutlineRadio" id="primaryoutlineRadio" checked="">
<label class="form-check-label" for="primaryoutlineRadio">
Primary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-secondary" type="radio" name="secondaryoutlineRadio" id="secondaryoutlineRadio" checked="">
<label class="form-check-label" for="secondaryoutlineRadio">
Secondary
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-warning" type="radio" name="warningoutlineRadio" id="warningoutlineRadio" checked="">
<label class="form-check-label" for="warningoutlineRadio">
Warning
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-info" type="radio" name="InfooutlineRadio" id="InfooutlineRadio" checked="">
<label class="form-check-label" for="InfooutlineRadio">
Info
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-success" type="radio" name="successoutlineRadio" id="successoutlineRadio" checked="">
<label class="form-check-label" for="successoutlineRadio">
Success
</label>
</div>
<div class="form-check mb-2">
<input class="form-check-input form-checked-outline form-checked-danger" type="radio" name="dangeroutlineRadio" id="dangeroutlineRadio" checked="">
<label class="form-check-label" for="dangeroutlineRadio">
Danger
</label>
</div>
<div class="form-check mb-0">
<input class="form-check-input form-checked-outline form-checked-dark" type="radio" name="darkoutlineRadio" id="darkoutlineRadio" checked="">
<label class="form-check-label" for="darkoutlineRadio">
Dark
</label>
</div>`),t()()()()(),e(558,"div",169)(559,"div",2)(560,"div",3)(561,"div",4),i(562," Switches Colors "),t(),e(563,"div",5)(564,"button",6),i(565,"Show Code"),n(566,"i",7),t()()(),e(567,"div",8)(568,"div",184),n(569,"input",185),e(570,"label",186),i(571,"Primary"),t()(),e(572,"div",184),n(573,"input",187),e(574,"label",188),i(575,"Secondary"),t()(),e(576,"div",184),n(577,"input",189),e(578,"label",190),i(579,"Warning"),t()(),e(580,"div",184),n(581,"input",191),e(582,"label",192),i(583,"Info"),t()(),e(584,"div",184),n(585,"input",193),e(586,"label",194),i(587,"Success"),t()(),e(588,"div",184),n(589,"input",195),e(590,"label",196),i(591,"Danger"),t()(),e(592,"div",45),n(593,"input",197),e(594,"label",198),i(595,"Dark"),t()()(),e(596,"div",14)(597,"pre",15)(598,"code",15),i(599,`<div class="form-check form-switch mb-2">
<input class="form-check-input" type="checkbox" role="switch"
id="switch-primary" checked="">
<label class="form-check-label" for="switch-primary">Primary</label>
</div>
<div class="form-check form-switch mb-2">
<input class="form-check-input form-checked-secondary" type="checkbox" role="switch"
id="switch-secondary" checked="">
<label class="form-check-label" for="switch-secondary">Secondary</label>
</div>
<div class="form-check form-switch mb-2">
<input class="form-check-input form-checked-warning" type="checkbox" role="switch"
id="switch-warning" checked="">
<label class="form-check-label" for="switch-warning">Warning</label>
</div>
<div class="form-check form-switch mb-2">
<input class="form-check-input form-checked-info" type="checkbox" role="switch"
id="switch-info" checked="">
<label class="form-check-label" for="switch-info">Info</label>
</div>
<div class="form-check form-switch mb-2">
<input class="form-check-input form-checked-success" type="checkbox" role="switch"
id="switch-success" checked="">
<label class="form-check-label" for="switch-success">Success</label>
</div>
<div class="form-check form-switch mb-2">
<input class="form-check-input form-checked-danger" type="checkbox" role="switch"
id="switch-danger" checked="">
<label class="form-check-label" for="switch-danger">Danger</label>
</div>
<div class="form-check form-switch mb-0">
<input class="form-check-input form-checked-dark" type="checkbox" role="switch"
id="switch-dark" checked="">
<label class="form-check-label" for="switch-dark">Dark</label>
</div>`),t()()()()()(),e(600,"div",0)(601,"div",199)(602,"div",2)(603,"div",3)(604,"div",4),i(605," Toggle Switches Style-1 "),t(),e(606,"div",5)(607,"button",6),i(608,"Show Code"),n(609,"i",7),t()()(),e(610,"div",8)(611,"div",200),k(612,F,3,1,"div",201),t()(),e(613,"div",14)(614,"pre",15)(615,"code",15),i(616,`<div class="row gy-1">
<div class="col-xl-4">
<div class="toggle on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-secondary on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-warning on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-info on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-success on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-danger on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-light on mb-3">
<span></span>
</div>
</div>
<div class="col-xl-4">
<div class="toggle toggle-dark on mb-3">
<span></span>
</div>
</div>
</div>`),t()()()()(),e(617,"div",199)(618,"div",2)(619,"div",3)(620,"div",4),i(621," Toggle Switches Style-2 "),t(),e(622,"div",5)(623,"button",6),i(624,"Show Code"),n(625,"i",7),t()()(),e(626,"div",8)(627,"div",200)(628,"div",202)(629,"div",203),n(630,"input",204)(631,"label",205),e(632,"span",206),i(633,"Primary"),t()()(),e(634,"div",202)(635,"div",203),n(636,"input",207)(637,"label",208),e(638,"span",206),i(639,"Secondary"),t()()(),e(640,"div",202)(641,"div",203),n(642,"input",209)(643,"label",210),e(644,"span",206),i(645,"Warning"),t()()(),e(646,"div",202)(647,"div",203),n(648,"input",211)(649,"label",212),e(650,"span",206),i(651,"Info"),t()()(),e(652,"div",202)(653,"div",203),n(654,"input",213)(655,"label",214),e(656,"span",206),i(657,"Success"),t()()(),e(658,"div",202)(659,"div",203),n(660,"input",215)(661,"label",216),e(662,"span",206),i(663,"Danger"),t()()(),e(664,"div",202)(665,"div",203),n(666,"input",217)(667,"label",218),e(668,"span",206),i(669,"Light"),t()()(),e(670,"div",202)(671,"div",203),n(672,"input",219)(673,"label",220),e(674,"span",206),i(675,"Dark"),t()()()()(),e(676,"div",14)(677,"pre",15)(678,"code",15),i(679,`<div class="row gy-1">
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchPrimary" class="label-primary"></label><span class="ms-3">Primary</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchSecondary" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchSecondary" class="label-secondary"></label><span class="ms-3">Secondary</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchWarning" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchWarning" class="label-warning"></label><span class="ms-3">Warning</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchInfo" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchInfo" class="label-info"></label><span class="ms-3">Info</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchSuccess" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchSuccess" class="label-success"></label><span class="ms-3">Success</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchDanger" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchDanger" class="label-danger"></label><span class="ms-3">Danger</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchLight" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchLight" class="label-light"></label><span class="ms-3">Light</span>
</div>
</div>
<div class="col-xl-4 px-0">
<div class="custom-toggle-switch d-flex align-items-center mb-4">
<input id="toggleswitchDark" name="toggleswitch001" type="checkbox" checked="">
<label for="toggleswitchDark" class="label-dark"></label><span class="ms-3">Dark</span>
</div>
</div>
</div>`),t()()()()()(),e(680,"div",0)(681,"div",75)(682,"div",2)(683,"div",3)(684,"div",4),i(685," Toggle Switch-1 Sizes "),t(),e(686,"div",5)(687,"button",6),i(688,"Show Code"),n(689,"i",7),t()()(),e(690,"div",8),k(691,U,8,7,"div",221),t(),e(692,"div",14)(693,"pre",15)(694,"code",15),i(695,`<div class="d-flex align-items-center flex-wrap mb-3">
<div class=""> <p class="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
<div class="toggle toggle-sm on mb-0">
<span></span>
</div>
</div>
<div class="d-flex align-items-center flex-wrap mb-3">
<div class=""> <p class="text-muted m-0">Default toggle switch <code></code></p></div>
<div class="toggle toggle-secondary on mb-0">
<span></span>
</div>
</div>
<div class="d-flex align-items-center flex-wrap">
<div class=""> <p class="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
<div class="toggle toggle-lg toggle-success on mb-0">
<span></span>
</div>
</div>`),t()()()()(),e(696,"div",75)(697,"div",2)(698,"div",3)(699,"div",4),i(700," Toggle Switch-2 Sizes "),t(),e(701,"div",5)(702,"button",6),i(703,"Show Code"),n(704,"i",7),t()()(),e(705,"div",8)(706,"div",222)(707,"div",223)(708,"p",224),i(709,"Small size toggle switch "),e(710,"code"),i(711,"toggle-sm"),t()()(),e(712,"div",225),n(713,"input",226)(714,"label",227),t()(),e(715,"div",222)(716,"div",223)(717,"p",224),i(718,"Default toggle switch"),t()(),e(719,"div",228),n(720,"input",229)(721,"label",230),t()(),e(722,"div",231)(723,"div",232)(724,"p",224),i(725,"Large size toggle switch "),e(726,"code"),i(727,"toggle-lg"),t()()(),e(728,"div",233),n(729,"input",234)(730,"label",235),t()()(),e(731,"div",14)(732,"pre",15)(733,"code",15),i(734,`<div class="d-flex align-items-center flex-wrap mb-4">
<div class=""><p class="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
<div class="custom-toggle-switch toggle-sm ms-2">
<input id="size-sm" name="toggleswitchsize" type="checkbox" checked="">
<label for="size-sm" class="label-primary"></label>
</div>
</div>
<div class="d-flex align-items-center flex-wrap mb-4">
<div class=""><p class="text-muted m-0">Default toggle switch</p></div>
<div class="custom-toggle-switch ms-2">
<input id="size-default" name="toggleswitchsize" type="checkbox" checked="">
<label for="size-default" class="label-secondary mb-1"></label>
</div>
</div>
<div class="d-flex align-items-center flex-wrap">
<div class=""><p class="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
<div class="custom-toggle-switch toggle-lg ms-2">
<input id="size-lg" name="toggleswitchsize" type="checkbox" checked="">
<label for="size-lg" class="label-success mb-2"></label>
</div>
</div>`),t()()()()()()),d&2&&(r(612),m("ngForOf",s.toggles),r(79),m("ngForOf",s.toggleSwitches))},dependencies:[M,T,I,L,O,b,D,_,N]});let l=o;return l})();export{ne as ChecksradiosComponent};
