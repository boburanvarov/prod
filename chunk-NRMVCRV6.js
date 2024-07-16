import{d as R,e as Y,f as j}from"./chunk-3UTEMC5T.js";import{c as Z,p as B}from"./chunk-MC6M5N3W.js";import"./chunk-Z3C6DEUP.js";import{$ as G,F as _,G as q,I as m,K as T,L as F,N,R as V,V as P,W as U,X as D,Y as w,Z as L,_ as O,aa as M,ba as z,ca as A,l as g,x as E}from"./chunk-2FEP6AZJ.js";import{$b as e,Ba as h,Gc as y,Ic as v,Mb as s,Ob as c,Vb as d,_b as i,ac as r,nc as f,pc as b,ub as l,vb as x,yc as t}from"./chunk-GCPY7ULT.js";import"./chunk-MQNJ6KAK.js";import"./chunk-F6XAREQC.js";import"./chunk-FFXK657A.js";var u=a=>({"is-invalid":a});function I(a,o){a&1&&(i(0,"div",13)(1,"div"),t(2,"Looks good!"),e()())}function H(a,o){a&1&&(i(0,"div",14),t(1,"Firstname is required "),e())}function J(a,o){a&1&&(i(0,"div",14),t(1,"lastname is required "),e())}function K(a,o){a&1&&(i(0,"div",21),t(1," User Name is required. "),e())}function Q(a,o){a&1&&(i(0,"div",14),t(1," Please provide a valid city."),e())}function W(a,o){a&1&&(i(0,"div",14),t(1,"Please select a valid state...."),e())}function X(a,o){a&1&&(i(0,"div",14),t(1,"zip is required"),e())}function $(a,o){a&1&&(i(0,"div",14),t(1," Accept Terms is required "),e())}function ee(a,o){a&1&&(i(0,"div",21),t(1," First Name is required. "),e())}function ie(a,o){a&1&&(i(0,"div",21),t(1," Last Name is required. "),e())}function te(a,o){a&1&&(i(0,"div",21),t(1," User Name is required. "),e())}function ne(a,o){a&1&&(i(0,"div",21),t(1," City Name is required. "),e())}function ae(a,o){a&1&&(i(0,"div",21),t(1," State Name is required. "),e())}function le(a,o){a&1&&(i(0,"div",21),t(1," Zip is required. "),e())}function oe(a,o){a&1&&(i(0,"div",21),t(1," City Name is required. "),e())}function re(a,o){a&1&&(i(0,"div",81),t(1,"Firstname is required "),e())}function de(a,o){a&1&&(i(0,"div",81),t(1,"Firstname is required "),e())}function me(a,o){a&1&&(i(0,"div",81),t(1,"Firstname is required "),e())}function se(a,o){a&1&&(i(0,"div",81),t(1,"Firstname is required "),e())}function ce(a,o){a&1&&(i(0,"div",81),t(1,"Firstname is required "),e())}function ve(a,o){a&1&&(i(0,"div",81),t(1,"Firstname is required "),e())}function ue(a,o){a&1&&(i(0,"div"),t(1,"Please enter a message in the textarea. "),e())}function pe(a,o){if(a&1&&(i(0,"div",14),s(1,ue,2,0,"div"),e()),a&2){let p=b();l(),d(1,p.f1.textarea.errors.required?1:-1)}}function fe(a,o){a&1&&(i(0,"div"),t(1,"Example invalid feedback text>"),e())}function be(a,o){if(a&1&&(i(0,"div",14),s(1,fe,2,0,"div"),e()),a&2){let p=b();l(),d(1,p.f1.checkbox.errors.required?1:-1)}}function Ce(a,o){a&1&&(i(0,"div"),t(1,"Example invalid select feedback"),e())}function Se(a,o){if(a&1&&(i(0,"div",14),s(1,Ce,2,0,"div"),e()),a&2){let p=b();l(),d(1,p.f1.select.errors.required?1:-1)}}function ke(a,o){a&1&&(i(0,"div"),t(1,"Example invalid form file feedback"),e())}function he(a,o){if(a&1&&(i(0,"div",14),s(1,ke,2,0,"div"),e()),a&2){let p=b();l(),d(1,p.f1.feedback.errors.required?1:-1)}}var Ve=(()=>{let o=class o{constructor(S){this.formBuilder=S,this.submitted=!1,this.submitted1=!0,this.submitted3=!1}ngOnInit(){this.form=this.formBuilder.group({fullname:["",m.required],lastname:["",[m.required,m.minLength(6),m.maxLength(20)]],city:["",m.required],state:["",m.required],username:["",m.required],zip:["",m.required],acceptTerms:[!1,m.requiredTrue]}),this.form4=this.formBuilder.group({textarea:["",m.required],checkbox:["",m.required],radiostacked:["",m.required],select:["",m.required],feedback:["",m.required]}),this.form3=this.formBuilder.group({name:["",m.required],lname:["",[m.required,m.minLength(6),m.maxLength(20)]],cit:["",m.required],stat:["",m.required],uname:["",m.required],zip:["",m.required]}),this.form2=this.formBuilder.group({firstname:["",m.required],lastname:["",m.required],username:["",m.required],city:["",m.required],zip:["",m.required],checkbox:[!1,m.requiredTrue],state:["",m.required]})}get f(){return this.form.controls}OnSubmit(){this.submitted=!0,this.form.invalid}get f1(){return this.form4.controls}Submit(){this.submitted=!0,this.form4.invalid}get f3(){return this.form3.controls}Submit3(){this.submitted3=!0,console.log("one"),this.form3.invalid}Submit1(){this.form2.valid?console.log("Form submitted successfully!"):console.log("Form is invalid!")}};o.\u0275fac=function(C){return new(C||o)(x(M))},o.\u0275cmp=h({type:o,selectors:[["app-validation"]],standalone:!0,features:[y],decls:306,vars:77,consts:[[1,"row"],[1,"col-xl-6"],[1,"card","custom-card"],[1,"card-header","justify-content-between"],[1,"card-title"],[1,"prism-toggle"],["appShowCode","",1,"btn","btn-sm","btn-primary-light"],[1,"ri-code-line","ms-2","d-inline-block","align-middle"],[1,"card-body"],[1,"row","g-3","needs-validation",3,"ngSubmit","formGroup"],[1,"col-md-4"],["for","validationCustom01",1,"form-label"],["type","text","formControlName","fullname","id","validationCustom01","required","","placeholder","Mark",1,"form-control","is-invalid",3,"ngClass"],[1,"valid-feedback"],[1,"invalid-feedback"],["for","validationCustom02",1,"form-label"],["type","text","id","last","formControlName","lastname","id","validationCustom02","required","","placeholder","Otto",1,"form-control",3,"ngClass"],["for","validationDefaultUsername",1,"form-label"],[1,"input-group"],["id","inputGroupPrepend2",1,"input-group-text"],["type","text","formControlName","username","id","validationDefaultUsername","aria-describedby","inputGroupPrepend2","required","",1,"form-control"],[1,"text-danger"],[1,"col-md-6"],["for","validationCustom03",1,"form-label"],["type","text","formControlName","city","id","validationCustom03","required","",1,"form-control",3,"ngClass"],[1,"col-md-3"],["for","validationCustom04",1,"form-label"],["formControlName","state","id","validationCustom04","required","",1,"",3,"ngClass"],["selected","","disabled","","value",""],["for","validationCustom05",1,"form-label"],["type","text","formControlName","zip","id","validationCustom05","required","",1,"form-control",3,"ngClass"],[1,"col-12"],[1,"form-check"],["type","checkbox","value","","id","invalidCheck","formControlName","acceptTerms","required","",1,"form-check-input",3,"ngClass"],["for","invalidCheck",1,"form-check-label"],["type","submit",1,"btn","btn-primary"],[1,"card-footer","d-none","border-top-0"],[1,"language-html"],["novalidate","",1,"row","g-3",3,"ngSubmit","formGroup"],["for","validationDefault01",1,"form-label"],["type","text","formControlName","firstname","placeholder","Mark","id","validationDefault01",1,"my-auto","ti-form-input","form-control"],["for","validationDefault02",1,"form-label"],["type","text","formControlName","lastname","id","validationDefault02","placeholder","Otto","value","Otto","required","",1,"form-control"],["for","validationDefault03",1,"form-label"],["type","text","formControlName","city","id","validationDefault03","required","",1,"form-control"],["for","validationDefault04",1,"form-label"],["formControlName","state","id","validationDefault04","required","",1,""],["for","validationDefault05",1,"form-label"],["type","text","formControlName","zip","id","validationDefault05","required","",1,"form-control"],["type","checkbox","value","","formControlName","checkbox","id","invalidCheck2","required","",1,"form-check-input"],["for","invalidCheck2",1,"form-check-label"],[1,"col-xl-12"],[1,"row","g-3"],["for","validationServer01",1,"form-label"],["type","text","id","validationServer01","value","Mark","required","",1,"form-control","is-valid","form-select"],["for","validationServer02",1,"form-label"],["type","text","id","validationServer02","value","Otto","required","",1,"form-control","is-valid","form-select"],["for","validationServerUsername",1,"form-label"],[1,"input-group","has-validation"],["id","inputGroupPrepend3",1,"input-group-text"],["type","text","id","validationServerUsername","aria-describedby","inputGroupPrepend3 validationServerUsernameFeedback","required","",1,"form-control","is-invalid","form-select"],["id","validationServerUsernameFeedback",1,"invalid-feedback"],["for","validationServer03",1,"form-label"],["type","text","id","validationServer03","aria-describedby","validationServer03Feedback","required","",1,"form-control","is-invalid","form-select"],["id","validationServer03Feedback",1,"invalid-feedback"],["for","validationServer04",1,"form-label"],["id","validationServer04","aria-describedby","validationServer04Feedback","required","",1,"form-select","is-invalid","form-control","p-0"],["value","0"],["value","1"],["value","2"],["value","3"],["id","validationServer04Feedback",1,"invalid-feedback"],["for","validationServer05",1,"form-label"],["type","text","id","validationServer05","aria-describedby","validationServer05Feedback","required","",1,"form-control","is-invalid","form-select"],["id","validationServer05Feedback",1,"invalid-feedback"],["type","checkbox","value","","id","invalidCheck3","aria-describedby","invalidCheck3Feedback","required","",1,"form-check-input","is-invalid"],["for","invalidCheck3",1,"form-check-label"],["id","invalidCheck3Feedback",1,"invalid-feedback"],[1,"col-md-4","position-relative"],["for","validationTooltip01",1,"form-label"],["type","text","formControlName","name","id","validationTooltip01","placeholder","Mark","value","Mark","required","",1,"form-control",3,"ngClass"],[1,"invalid-tooltip"],["for","validationTooltip02",1,"form-label"],["type","text","formControlName","lname","id","validationTooltip02","value","Otto","required","","placeholder","Otto",1,"form-control",3,"ngClass"],["for","validationTooltipUsername",1,"form-label"],["id","validationTooltipUsernamePrepend",1,"input-group-text"],["type","text","formControlName","uname","id","validationTooltipUsername","aria-describedby","validationTooltipUsernamePrepend","required","",1,"form-control",3,"ngClass"],[1,"col-md-6","position-relative"],["for","validationTooltip03",1,"form-label"],["type","text","formControlName","cit","id","validationTooltip03","required","",1,"form-control",3,"ngClass"],[1,"col-md-3","position-relative"],["for","validationTooltip04",1,"form-label"],["formControlName","stat","id","validationTooltip04","required","",1,"",3,"ngClass"],["for","validationTooltip05",1,"form-label"],["type","text","formControlName","zip","id","validationTooltip05","required","",1,"form-control",3,"ngClass"],[1,"was-validated",3,"ngSubmit","formGroup"],[1,"mb-3"],["for","validationTextarea",1,"form-label"],["id","validationTextarea","placeholder","Required example textarea","formControlName","textarea","required","",1,"form-control","is-invalid",3,"ngClass"],[1,"form-check","mb-3"],["type","checkbox","id","validationFormCheck1","formControlName","checkbox","required","",1,"form-check-input",3,"ngClass"],["for","validationFormCheck1",1,"form-check-label"],["type","radio","id","validationFormCheck2","name","radio-stacked","required","",1,"form-check-input"],["for","validationFormCheck2",1,"form-check-label"],["type","radio","id","validationFormCheck3","name","radio-stacked","required","",1,"form-check-input"],["for","validationFormCheck3",1,"form-check-label"],["formControlName","select","required","","aria-label","select example",1,"form-select",3,"ngClass"],["value",""],["type","file","aria-label","file example","formControlName","feedback","required","",1,"form-control",3,"ngClass"],["type","submit","disabled","",1,"btn","btn-primary"]],template:function(C,n){C&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t(5," Custom Validation "),e(),i(6,"div",5)(7,"button",6),t(8,"Show Code"),r(9,"i",7),e()()(),i(10,"div",8)(11,"form",9),f("ngSubmit",function(){return n.OnSubmit()}),i(12,"div",10)(13,"label",11),t(14,"First name"),e(),r(15,"input",12),s(16,I,3,0,"div",13)(17,H,2,0,"div",14),e(),i(18,"div",10)(19,"label",15),t(20,"Last name"),e(),r(21,"input",16),s(22,J,2,0,"div",14),e(),i(23,"div",10)(24,"label",17),t(25,"Username"),e(),i(26,"div",18)(27,"span",19),t(28,"@"),e(),r(29,"input",20),e(),s(30,K,2,0,"div",21),e(),i(31,"div",22)(32,"label",23),t(33,"City"),e(),r(34,"input",24),s(35,Q,2,0,"div",14),e(),i(36,"div",25)(37,"label",26),t(38,"State"),e(),i(39,"ng-select",27)(40,"ng-option",28),t(41,"Choose..."),e(),i(42,"ng-option"),t(43,"..."),e()(),s(44,W,2,0,"div",14),e(),i(45,"div",25)(46,"label",29),t(47,"Zip"),e(),r(48,"input",30),s(49,X,2,0,"div",14),e(),i(50,"div",31)(51,"div",32),r(52,"input",33),i(53,"label",34),t(54," Agree to terms and conditions "),e(),s(55,$,2,0,"div",14),e()(),i(56,"div",31)(57,"button",35),t(58,"Submit form"),e()()()(),i(59,"div",36)(60,"pre",37)(61,"code",37),t(62,`<form class="row g-3 needs-validation" novalidate>
            <div class="col-md-4">
            <label for="validationCustom01" class="form-label">First name</label>
            <input type="text" class="form-control" id="validationCustom01" value="Mark"
            required>
            <div class="valid-feedback">
            Looks good!
            </div>
            </div>
            <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" value="Otto"
            required>
            <div class="valid-feedback">
            Looks good!
            </div>
            </div>
            <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">Username</label>
            <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="validationCustomUsername"
            aria-describedby="inputGroupPrepend" required>
            <div class="invalid-feedback">
            Please choose a username.
            </div>
            </div>
            </div>
            <div class="col-md-6">
            <label for="validationCustom03" class="form-label">City</label>
            <input type="text" class="form-control" id="validationCustom03" required>
            <div class="invalid-feedback">
            Please provide a valid city.
            </div>
            </div>
            <div class="col-md-3">
            <label for="validationCustom04" class="form-label">State</label>
            <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Choose...</option>
            <option>...</option>
            </select>
            <div class="invalid-feedback">
            Please select a valid state.
            </div>
            </div>
            <div class="col-md-3">
            <label for="validationCustom05" class="form-label">Zip</label>
            <input type="text" class="form-control" id="validationCustom05" required>
            <div class="invalid-feedback">
            Please provide a valid zip.
            </div>
            </div>
            <div class="col-12">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" value=""
            id="invalidCheck" required>
            <label class="form-check-label" for="invalidCheck">
            Agree to terms and conditions
            </label>
            <div class="invalid-feedback">
            You must agree before submitting.
            </div>
            </div>
            </div>
            <div class="col-12">
            <button class="btn btn-primary" type="submit">Submit form</button>
            </div>
          </form>`),e()()()()(),i(63,"div",1)(64,"div",2)(65,"div",3)(66,"div",4),t(67," Browser Default Validation "),e(),i(68,"div",5)(69,"button",6),t(70,"Show Code"),r(71,"i",7),e()()(),i(72,"div",8)(73,"form",38),f("ngSubmit",function(){return n.Submit1()}),i(74,"div",10)(75,"label",39),t(76,"First name"),e(),r(77,"input",40),s(78,ee,2,0,"div",21),e(),i(79,"div",10)(80,"label",41),t(81,"Last name"),e(),r(82,"input",42),s(83,ie,2,0,"div",21),e(),i(84,"div",10)(85,"label",17),t(86,"Username"),e(),i(87,"div",18)(88,"span",19),t(89,"@"),e(),r(90,"input",20),e(),s(91,te,2,0,"div",21),e(),i(92,"div",22)(93,"label",43),t(94,"City"),e(),r(95,"input",44),s(96,ne,2,0,"div",21),e(),i(97,"div",25)(98,"label",45),t(99,"State"),e(),i(100,"ng-select",46)(101,"ng-option",28),t(102,"Choose..."),e(),i(103,"ng-option"),t(104,"..."),e()(),s(105,ae,2,0,"div",21),e(),i(106,"div",25)(107,"label",47),t(108,"Zip"),e(),r(109,"input",48),s(110,le,2,0,"div",21),e(),i(111,"div",31)(112,"div",32),r(113,"input",49),i(114,"label",50),t(115," Agree to terms and conditions "),e(),s(116,oe,2,0,"div",21),e()(),i(117,"div",31)(118,"button",35),t(119,"Submit form"),e()()()(),i(120,"div",36)(121,"pre",37)(122,"code",37),t(123,`<form class="row g-3">
                      <div class="col-md-4">
                      <label for="validationDefault01" class="form-label">First name</label>
                      <input type="text" class="form-control" id="validationDefault01"
                      value="Mark" required>
                      </div>
                      <div class="col-md-4">
                      <label for="validationDefault02" class="form-label">Last name</label>
                      <input type="text" class="form-control" id="validationDefault02"
                      value="Otto" required>
                      </div>
                      <div class="col-md-4">
                      <label for="validationDefaultUsername" class="form-label">Username</label>
                      <div class="input-group">
                      <span class="input-group-text" id="inputGroupPrepend2">@</span>
                      <input type="text" class="form-control" id="validationDefaultUsername"
                      aria-describedby="inputGroupPrepend2" required>
                      </div>
                      </div>
                      <div class="col-md-6">
                      <label for="validationDefault03" class="form-label">City</label>
                      <input type="text" class="form-control" id="validationDefault03" required>
                      </div>
                      <div class="col-md-3">
                      <label for="validationDefault04" class="form-label">State</label>
                      <select class="form-select" id="validationDefault04" required>
                      <option selected disabled value="">Choose...</option>
                      <option>...</option>
                      </select>
                      </div>
                      <div class="col-md-3">
                      <label for="validationDefault05" class="form-label">Zip</label>
                      <input type="text" class="form-control" id="validationDefault05" required>
                      </div>
                      <div class="col-12">
                      <div class="form-check">
                      <input class="form-check-input" type="checkbox" value=""
                      id="invalidCheck2" required>
                      <label class="form-check-label" for="invalidCheck2">
                      Agree to terms and conditions
                      </label>
                      </div>
                      </div>
                      <div class="col-12">
                      <button class="btn btn-primary" type="submit">Submit form</button>
                      </div>
                    </form>`),e()()()()()(),i(124,"div",0)(125,"div",1)(126,"div",0)(127,"div",51)(128,"div",2)(129,"div",3)(130,"div",4),t(131," Server side Validation "),e(),i(132,"div",5)(133,"button",6),t(134,"Show Code"),r(135,"i",7),e()()(),i(136,"div",8)(137,"form",52)(138,"div",10)(139,"label",53),t(140,"First name"),e(),r(141,"input",54),i(142,"div",13),t(143,"Looks good!"),e()(),i(144,"div",10)(145,"label",55),t(146,"Last name"),e(),r(147,"input",56),i(148,"div",13),t(149,"Looks good!"),e()(),i(150,"div",10)(151,"label",57),t(152,"Username"),e(),i(153,"div",58)(154,"span",59),t(155,"@"),e(),r(156,"input",60),i(157,"div",61),t(158," Please choose a username. "),e()()(),i(159,"div",22)(160,"label",62),t(161,"City"),e(),r(162,"input",63),i(163,"div",64),t(164," Please provide a valid city. "),e()(),i(165,"div",25)(166,"label",65),t(167,"State"),e(),i(168,"ng-select",66)(169,"ng-option",67),t(170,"New york"),e(),i(171,"ng-option",68),t(172,"California"),e(),i(173,"ng-option",69),t(174,"texas"),e(),i(175,"ng-option",70),t(176,"New york"),e()(),i(177,"div",71),t(178," Please select a valid state. "),e()(),i(179,"div",25)(180,"label",72),t(181,"Zip"),e(),r(182,"input",73),i(183,"div",74),t(184," Please provide a valid zip. "),e()(),i(185,"div",31)(186,"div",32),r(187,"input",75),i(188,"label",76),t(189," Agree to terms and conditions "),e(),i(190,"div",77),t(191," You must agree before submitting. "),e()()(),i(192,"div",31)(193,"button",35),t(194," Submit form "),e()()()(),i(195,"div",36)(196,"pre",37)(197,"code",37),t(198,`<form class="row g-3">
                                      <div class="col-md-4">
                                      <label for="validationServer01" class="form-label">First
                                      name</label>
                                      <input type="text" class="form-control is-valid"
                                      id="validationServer01" value="Mark" required>
                                      <div class="valid-feedback">
                                      Looks good!
                                      </div>
                                      </div>
                                      <div class="col-md-4">
                                      <label for="validationServer02" class="form-label">Last
                                      name</label>
                                      <input type="text" class="form-control is-valid"
                                      id="validationServer02" value="Otto" required>
                                      <div class="valid-feedback">
                                      Looks good!
                                      </div>
                                      </div>
                                      <div class="col-md-4">
                                      <label for="validationServerUsername"
                                      class="form-label">Username</label>
                                      <div class="input-group has-validation">
                                      <span class="input-group-text" id="inputGroupPrepend3">@</span>
                                      <input type="text" class="form-control is-invalid"
                                      id="validationServerUsername"
                                      aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                                      required>
                                      <div id="validationServerUsernameFeedback"
                                      class="invalid-feedback">
                                      Please choose a username.
                                      </div>
                                      </div>
                                      </div>
                                      <div class="col-md-6">
                                      <label for="validationServer03" class="form-label">City</label>
                                      <input type="text" class="form-control is-invalid"
                                      id="validationServer03"
                                      aria-describedby="validationServer03Feedback" required>
                                      <div id="validationServer03Feedback" class="invalid-feedback">
                                      Please provide a valid city.
                                      </div>
                                      </div>
                                      <div class="col-md-3">
                                      <label for="validationServer04" class="form-label">State</label>
                                      <select class="form-select is-invalid" id="validationServer04"
                                      aria-describedby="validationServer04Feedback" required>
                                      <option selected disabled value="">Choose...</option>
                                      <option>...</option>
                                      </select>
                                      <div id="validationServer04Feedback" class="invalid-feedback">
                                      Please select a valid state.
                                      </div>
                                      </div>
                                      <div class="col-md-3">
                                      <label for="validationServer05" class="form-label">Zip</label>
                                      <input type="text" class="form-control is-invalid"
                                      id="validationServer05"
                                      aria-describedby="validationServer05Feedback" required>
                                      <div id="validationServer05Feedback" class="invalid-feedback">
                                      Please provide a valid zip.
                                      </div>
                                      </div>
                                      <div class="col-12">
                                      <div class="form-check">
                                      <input class="form-check-input is-invalid" type="checkbox"
                                      value="" id="invalidCheck3"
                                      aria-describedby="invalidCheck3Feedback" required>
                                      <label class="form-check-label" for="invalidCheck3">
                                      Agree to terms and conditions
                                      </label>
                                      <div id="invalidCheck3Feedback" class="invalid-feedback">
                                      You must agree before submitting.
                                      </div>
                                      </div>
                                      </div>
                                      <div class="col-12">
                                      <button class="btn btn-primary" type="submit">Submit
                                      form</button>
                                      </div>
                                    </form>`),e()()()()(),i(199,"div",51)(200,"div",2)(201,"div",3)(202,"div",4),t(203," Tooltips "),e(),i(204,"div",5)(205,"button",6),t(206,"Show Code"),r(207,"i",7),e()()(),i(208,"div",8)(209,"form",9),f("ngSubmit",function(){return n.Submit3()}),i(210,"div",78)(211,"label",79),t(212,"First name"),e(),r(213,"input",80),s(214,re,2,0,"div",81),e(),i(215,"div",78)(216,"label",82),t(217,"Last name"),e(),r(218,"input",83),s(219,de,2,0,"div",81),e(),i(220,"div",78)(221,"label",84),t(222,"Username"),e(),i(223,"div",58)(224,"span",85),t(225,"@"),e(),r(226,"input",86),s(227,me,2,0,"div",81),e()(),i(228,"div",87)(229,"label",88),t(230,"City"),e(),r(231,"input",89),s(232,se,2,0,"div",81),e(),i(233,"div",90)(234,"label",91),t(235,"State"),e(),i(236,"ng-select",92)(237,"ng-option",28),t(238,"Choose..."),e(),i(239,"ng-option"),t(240,"..."),e()(),s(241,ce,2,0,"div",81),e(),i(242,"div",90)(243,"label",93),t(244,"Zip"),e(),r(245,"input",94),s(246,ve,2,0,"div",81),e(),i(247,"div",31)(248,"button",35),t(249,"Submit form"),e()()()(),i(250,"div",36)(251,"pre",37)(252,"code",37),t(253,`<form class="row g-3 needs-validation" novalidate>
                                    <div class="col-md-4 position-relative">
                                    <label for="validationTooltip01" class="form-label">First
                                    name</label>
                                    <input type="text" class="form-control" id="validationTooltip01"
                                    value="Mark" required>
                                    <div class="valid-tooltip">
                                    Looks good!
                                    </div>
                                    </div>
                                    <div class="col-md-4 position-relative">
                                    <label for="validationTooltip02" class="form-label">Last
                                    name</label>
                                    <input type="text" class="form-control" id="validationTooltip02"
                                    value="Otto" required>
                                    <div class="valid-tooltip">
                                    Looks good!
                                    </div>
                                    </div>
                                    <div class="col-md-4 position-relative">
                                    <label for="validationTooltipUsername"
                                    class="form-label">Username</label>
                                    <div class="input-group has-validation">
                                    <span class="input-group-text"
                                    id="validationTooltipUsernamePrepend">@</span>
                                    <input type="text" class="form-control"
                                    id="validationTooltipUsername"
                                    aria-describedby="validationTooltipUsernamePrepend"
                                    required>
                                    <div class="invalid-tooltip">
                                    Please choose a unique and valid username.
                                    </div>
                                    </div>
                                    </div>
                                    <div class="col-md-6 position-relative">
                                    <label for="validationTooltip03" class="form-label">City</label>
                                    <input type="text" class="form-control" id="validationTooltip03"
                                    required>
                                    <div class="invalid-tooltip">
                                    Please provide a valid city.
                                    </div>
                                    </div>
                                    <div class="col-md-3 position-relative">
                                    <label for="validationTooltip04" class="form-label">State</label>
                                    <select class="form-select" id="validationTooltip04" required>
                                    <option selected disabled value="">Choose...</option>
                                    <option>...</option>
                                    </select>
                                    <div class="invalid-tooltip">
                                    Please select a valid state.
                                    </div>
                                    </div>
                                    <div class="col-md-3 position-relative">
                                    <label for="validationTooltip05" class="form-label">Zip</label>
                                    <input type="text" class="form-control" id="validationTooltip05"
                                    required>
                                    <div class="invalid-tooltip">
                                    Please provide a valid zip.
                                    </div>
                                    </div>
                                    <div class="col-12">
                                    <button class="btn btn-primary" type="submit">Submit
                                    form</button>
                                    </div>
                                  </form>`),e()()()()()()(),i(254,"div",1)(255,"div",2)(256,"div",3)(257,"div",4),t(258," Supported elements "),e(),i(259,"div",5)(260,"button",6),t(261,"Show Code"),r(262,"i",7),e()()(),i(263,"div",8)(264,"form",95),f("ngSubmit",function(){return n.Submit()}),i(265,"div",96)(266,"label",97),t(267,"Textarea"),e(),r(268,"textarea",98),s(269,pe,2,1,"div",14),e(),i(270,"div",99),r(271,"input",100),i(272,"label",101),t(273,"Check this checkbox"),e(),s(274,be,2,1,"div",14),e(),i(275,"div",32),r(276,"input",102),i(277,"label",103),t(278,"Toggle this radio"),e()(),i(279,"div",99),r(280,"input",104),i(281,"label",105),t(282,"Or toggle this other radio"),e(),i(283,"div",14),t(284,"More example invalid feedback text"),e()(),i(285,"div",96)(286,"select",106)(287,"option",107),t(288,"Open this select menu"),e(),i(289,"option",68),t(290,"One"),e(),i(291,"option",69),t(292,"Two"),e(),i(293,"option",70),t(294,"Three"),e()(),s(295,Se,2,1,"div",14),e(),i(296,"div",96),r(297,"input",108),s(298,he,2,1,"div",14),e(),i(299,"div",96)(300,"button",109),t(301,"Submit form"),e()()()(),i(302,"div",36)(303,"pre",37)(304,"code",37),t(305,`<form class="was-validated">
                                    <div class="mb-3">
                                    <label for="validationTextarea" class="form-label">Textarea</label>
                                    <textarea class="form-control is-invalid" id="validationTextarea"
                                    placeholder="Required example textarea" required=""></textarea>
                                    <div class="invalid-feedback">
                                    Please enter a message in the textarea.
                                    </div>
                                    </div>

                                    <div class="form-check mb-3">
                                    <input type="checkbox" class="form-check-input" id="validationFormCheck1"
                                    required="">
                                    <label class="form-check-label" for="validationFormCheck1">Check this
                                    checkbox</label>
                                    <div class="invalid-feedback">Example invalid feedback text</div>
                                    </div>

                                    <div class="form-check">
                                    <input type="radio" class="form-check-input" id="validationFormCheck2"
                                    name="radio-stacked" required="">
                                    <label class="form-check-label" for="validationFormCheck2">Toggle this
                                    radio</label>
                                    </div>
                                    <div class="form-check mb-3">
                                    <input type="radio" class="form-check-input" id="validationFormCheck3"
                                    name="radio-stacked" required="">
                                    <label class="form-check-label" for="validationFormCheck3">Or toggle
                                    this
                                    other radio</label>
                                    <div class="invalid-feedback">More example invalid feedback text</div>
                                    </div>

                                    <div class="mb-3">
                                    <select class="form-select" required="" aria-label="select example">
                                    <option value="">Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    </select>
                                    <div class="invalid-feedback">Example invalid select feedback</div>
                                    </div>

                                    <div class="mb-3">
                                    <input type="file" class="form-control" aria-label="file example"
                                    required="">
                                    <div class="invalid-feedback">Example invalid form file feedback</div>
                                    </div>

                                    <div class="mb-3">
                                    <button class="btn btn-primary" type="submit" disabled="">Submit
                                    form</button>
                                    </div>
                                  </form>`),e()()()()()()),C&2&&(l(11),c("formGroup",n.form),l(4),c("ngClass",v(45,u,n.submitted&&n.f.fullname.errors)),l(),d(16,!n.submitted&&n.f.fullname.valid?16:-1),l(),d(17,n.submitted&&n.f.fullname.errors?17:-1),l(4),c("ngClass",v(47,u,n.submitted&&n.f.lastname.errors)),l(),d(22,n.submitted&&n.f.lastname.errors?22:-1),l(8),d(30,n.form2.controls.username.invalid&&(n.form2.controls.username.dirty||n.form2.controls.username.touched)?30:-1),l(4),c("ngClass",v(49,u,n.submitted&&n.f.city.errors)),l(),d(35,n.submitted&&n.f.city.errors?35:-1),l(4),c("ngClass",v(51,u,n.submitted&&n.f.state.errors)),l(5),d(44,n.submitted&&n.f.state.errors?44:-1),l(4),c("ngClass",v(53,u,n.submitted&&n.f.zip.errors)),l(),d(49,n.submitted&&n.f.zip.errors?49:-1),l(3),c("ngClass",v(55,u,n.submitted&&n.f.acceptTerms.errors)),l(3),d(55,n.submitted&&n.f.acceptTerms.errors?55:-1),l(18),c("formGroup",n.form2),l(5),d(78,n.form2.controls.firstname.invalid&&(n.form2.controls.firstname.dirty||n.form2.controls.firstname.touched)?78:-1),l(5),d(83,n.form2.controls.lastname.invalid&&(n.form2.controls.lastname.dirty||n.form2.controls.lastname.touched)?83:-1),l(8),d(91,n.form2.controls.username.invalid&&(n.form2.controls.username.dirty||n.form2.controls.username.touched)?91:-1),l(5),d(96,n.form2.controls.city.invalid&&(n.form2.controls.city.dirty||n.form2.controls.city.touched)?96:-1),l(9),d(105,n.form2.controls.state.invalid&&(n.form2.controls.state.dirty||n.form2.controls.state.touched)?105:-1),l(5),d(110,n.form2.controls.zip.invalid&&(n.form2.controls.zip.dirty||n.form2.controls.zip.touched)?110:-1),l(6),d(116,n.form2.controls.checkbox.invalid&&(n.form2.controls.checkbox.dirty||n.form2.controls.checkbox.touched)?116:-1),l(93),c("formGroup",n.form3),l(4),c("ngClass",v(57,u,n.submitted3&&n.f3.name.errors)),l(),d(214,n.submitted3&&n.f3.name.errors?214:-1),l(4),c("ngClass",v(59,u,n.submitted3&&n.f3.lname.errors)),l(),d(219,n.submitted3&&n.f3.lname.errors?219:-1),l(7),c("ngClass",v(61,u,n.submitted3&&n.f3.uname.errors)),l(),d(227,n.submitted3&&n.f3.uname.errors?227:-1),l(4),c("ngClass",v(63,u,n.submitted3&&n.f3.cit.errors)),l(),d(232,n.submitted3&&n.f3.cit.errors?232:-1),l(4),c("ngClass",v(65,u,n.submitted3&&n.f3.stat.errors)),l(5),d(241,n.submitted3&&n.f3.stat.errors?241:-1),l(4),c("ngClass",v(67,u,n.submitted3&&n.f3.zip.errors)),l(),d(246,n.submitted3&&n.f3.zip.errors?246:-1),l(18),c("formGroup",n.form4),l(4),c("ngClass",v(69,u,n.submitted1&&n.f1.textarea.errors)),l(),d(269,n.submitted1&&n.f1.textarea.errors?269:-1),l(2),c("ngClass",v(71,u,n.submitted1&&n.f1.checkbox.errors)),l(3),d(274,n.submitted1&&n.f1.checkbox.errors?274:-1),l(12),c("ngClass",v(73,u,n.submitted1&&n.f1.select.errors)),l(9),d(295,n.submitted1&&n.f1.select.errors?295:-1),l(2),c("ngClass",v(75,u,n.submitted&&n.f1.feedback.errors)),l(),d(298,n.submitted1&&n.f1.feedback.errors?298:-1))},dependencies:[B,Z,z,V,w,L,q,_,D,T,F,O,G,N,A,P,U,E,g,j,Y,R]});let a=o;return a})();export{Ve as ValidationComponent};
