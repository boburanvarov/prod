import{a as me,d as pe,e as ue,f as ge}from"./chunk-3UTEMC5T.js";import{c as re,p as de}from"./chunk-MC6M5N3W.js";import"./chunk-Z3C6DEUP.js";import{E as ie,G as k,I as L,K as P,O as oe,Q as D,U as le,Y as ae,Z as se,ba as A,ca as ce,l as $,m as ee,n as te,x as ne}from"./chunk-2FEP6AZJ.js";import{$b as n,Ac as w,Ba as T,Ca as Z,Cc as b,Da as W,Dc as v,Ea as B,Ec as S,Fc as Y,Gc as q,Hc as X,Ic as J,Ma as C,Mb as h,Na as M,Nb as U,Ob as d,Pb as H,Qb as G,Qc as F,Sc as I,Va as j,Vb as K,Wa as x,_b as t,ac as u,ec as y,id as Q,nc as f,pa as V,pc as p,ra as R,sb as z,ub as c,vb as E,yc as i,zc as O}from"./chunk-GCPY7ULT.js";import"./chunk-MQNJ6KAK.js";import"./chunk-F6XAREQC.js";import"./chunk-FFXK657A.js";var be=a=>({"dropdown-multiselect--active":a});function ve(a,r){if(a&1&&(t(0,"span"),i(1),n()),a&2){let e=p();c(),O(e._placeholder)}}function Se(a,r){if(a&1){let e=y();t(0,"span",15)(1,"span",16)(2,"span"),i(3),n(),t(4,"a",17),f("click",function(l){let s=C(e).$implicit,g=p();return M(g.onItemClick(l,s))}),i(5,"x"),n()()()}if(a&2){let e=r.$implicit,o=r.index,l=p();c(),d("hidden",o>l._settings.itemsShowLimit-1),c(2),w("",e.text,"\xA0")}}function Ce(a,r){if(a&1&&(t(0,"span",18),i(1),n()),a&2){let e=p();c(),w("+",e.itemShowRemaining(),"")}}function Me(a,r){if(a&1){let e=y();t(0,"li",19),f("click",function(){C(e);let l=p();return M(l.toggleSelectAll())}),u(1,"input",20),t(2,"div"),i(3),n()()}if(a&2){let e=p();c(),d("checked",e.isAllItemsSelected())("disabled",e.disabled||e.isLimitSelectionReached()),c(2),O(e.isAllItemsSelected()?e._settings.unSelectAllText:e._settings.selectAllText)}}function Oe(a,r){if(a&1){let e=y();t(0,"li",21)(1,"input",22),S("ngModelChange",function(l){C(e);let s=p();return v(s.filter.text,l)||(s.filter.text=l),M(l)}),f("ngModelChange",function(l){C(e);let s=p();return M(s.onFilterTextChange(l))}),n()()}if(a&2){let e=p();c(),d("readOnly",e.disabled)("placeholder",e._settings.searchPlaceholderText),b("ngModel",e.filter.text)}}function we(a,r){if(a&1){let e=y();t(0,"li",23),f("click",function(l){let s=C(e).$implicit,g=p();return M(g.onItemClick(l,s))}),u(1,"input",24),t(2,"div"),i(3),n()()}if(a&2){let e=r.$implicit,o=p();c(),d("checked",o.isSelected(e))("disabled",o.disabled||o.isLimitSelectionReached()&&!o.isSelected(e)||e.isDisabled),U("aria-label",e.text),c(2),O(e.text)}}function ye(a,r){if(a&1&&(t(0,"li",25)(1,"h5"),i(2),n()()),a&2){let e=p();c(2),O(e._settings.noFilteredDataAvailablePlaceholderText)}}function Te(a,r){if(a&1&&(t(0,"li",26)(1,"h5"),i(2),n()()),a&2){let e=p();c(2),O(e._settings.noDataAvailablePlaceholderText)}}var _=class{id;text;isDisabled;constructor(r){(typeof r=="string"||typeof r=="number")&&(this.id=this.text=r,this.isDisabled=!1),typeof r=="object"&&(this.id=r.id,this.text=r.text,this.isDisabled=r.isDisabled)}},N=(()=>{class a{transform(e,o){return!e||!o?e:e.filter(l=>this.applyFilter(l,o))}applyFilter(e,o){return typeof e.text=="string"&&typeof o.text=="string"?!(o.text&&e.text&&e.text.toLowerCase().indexOf(o.text.toLowerCase())===-1):!(o.text&&e.text&&e.text.toString().toLowerCase().indexOf(o.text.toString().toLowerCase())===-1)}static \u0275fac=function(o){return new(o||a)};static \u0275pipe=B({name:"multiSelectFilter",type:a,pure:!1})}return a})(),Ee=(()=>{class a{_elementRef;constructor(e){this._elementRef=e}clickOutside=new x;onClick(e,o){if(!o)return;this._elementRef.nativeElement.contains(o)||this.clickOutside.emit(e)}static \u0275fac=function(o){return new(o||a)(E(j))};static \u0275dir=W({type:a,selectors:[["","clickOutside",""]],hostBindings:function(o,l){o&1&&f("click",function(g){return l.onClick(g,g.target)},!1,z)},outputs:{clickOutside:"clickOutside"}})}return a})(),ke={provide:ie,useExisting:V(()=>Pe),multi:!0},he=()=>{},Pe=(()=>{class a{listFilterPipe;cdr;_settings;_data=[];selectedItems=[];isDropdownOpen=!0;_placeholder="Select";_sourceDataType=null;_sourceDataFields=[];filter=new _(this.data);defaultSettings={singleSelection:!1,idField:"id",textField:"text",disabledField:"isDisabled",enableCheckAll:!0,selectAllText:"Select All",unSelectAllText:"UnSelect All",allowSearchFilter:!1,limitSelection:-1,clearSearchFilter:!0,maxHeight:197,itemsShowLimit:999999999999,searchPlaceholderText:"Search",noDataAvailablePlaceholderText:"No data available",noFilteredDataAvailablePlaceholderText:"No filtered data available",closeDropDownOnSelection:!1,showSelectedItemsAtTop:!1,defaultOpen:!1,allowRemoteDataSearch:!1};set placeholder(e){e?this._placeholder=e:this._placeholder="Select"}disabled=!1;set settings(e){e?this._settings=Object.assign(this.defaultSettings,e):this._settings=Object.assign(this.defaultSettings)}set data(e){if(!e)this._data=[];else{let o=e[0];this._sourceDataType=typeof o,this._sourceDataFields=this.getFields(o),this._data=e.map(l=>typeof l=="string"||typeof l=="number"?new _(l):new _({id:l[this._settings.idField],text:l[this._settings.textField],isDisabled:l[this._settings.disabledField]}))}}onFilterChange=new x;onDropDownClose=new x;onSelect=new x;onDeSelect=new x;onSelectAll=new x;onDeSelectAll=new x;onTouchedCallback=he;onChangeCallback=he;onFilterTextChange(e){this.onFilterChange.emit(e)}constructor(e,o){this.listFilterPipe=e,this.cdr=o}onItemClick(e,o){if(this.disabled||o.isDisabled)return!1;let l=this.isSelected(o),s=this._settings.limitSelection===-1||this._settings.limitSelection>0&&this.selectedItems.length<this._settings.limitSelection;l?this.removeSelected(o):s&&this.addSelected(o),this._settings.singleSelection&&this._settings.closeDropDownOnSelection&&this.closeDropdown()}writeValue(e){if(e!=null&&e.length>0)if(this._settings.singleSelection)try{if(e.length>=1){let o=e[0];this.selectedItems=[typeof o=="string"||typeof o=="number"?new _(o):new _({id:o[this._settings.idField],text:o[this._settings.textField],isDisabled:o[this._settings.disabledField]})]}}catch{}else{let o=e.map(l=>typeof l=="string"||typeof l=="number"?new _(l):new _({id:l[this._settings.idField],text:l[this._settings.textField],isDisabled:l[this._settings.disabledField]}));this._settings.limitSelection>0?this.selectedItems=o.splice(0,this._settings.limitSelection):this.selectedItems=o}else this.selectedItems=[];this.onChangeCallback(e),this.cdr.markForCheck()}registerOnChange(e){this.onChangeCallback=e}registerOnTouched(e){this.onTouchedCallback=e}onTouched(){this.onTouchedCallback()}trackByFn(e,o){return o.id}isSelected(e){let o=!1;return this.selectedItems.forEach(l=>{e.id===l.id&&(o=!0)}),o}isLimitSelectionReached(){return this._settings.limitSelection===this.selectedItems.length}isAllItemsSelected(){let e=this.listFilterPipe.transform(this._data,this.filter),o=e.filter(l=>l.isDisabled).length;return(!this.data||this.data.length===0)&&this._settings.allowRemoteDataSearch?!1:e.length===this.selectedItems.length+o}showButton(){return this._settings.singleSelection?!1:!(this._settings.limitSelection>0)}itemShowRemaining(){return this.selectedItems.length-this._settings.itemsShowLimit}addSelected(e){this._settings.singleSelection?(this.selectedItems=[],this.selectedItems.push(e)):this.selectedItems.push(e),this.onChangeCallback(this.emittedValue(this.selectedItems)),this.onSelect.emit(this.emittedValue(e))}removeSelected(e){this.selectedItems.forEach(o=>{e.id===o.id&&this.selectedItems.splice(this.selectedItems.indexOf(o),1)}),this.onChangeCallback(this.emittedValue(this.selectedItems)),this.onDeSelect.emit(this.emittedValue(e))}emittedValue(e){let o=[];if(Array.isArray(e))e.map(l=>{o.push(this.objectify(l))});else if(e)return this.objectify(e);return o}objectify(e){if(this._sourceDataType==="object"){let o={};return o[this._settings.idField]=e.id,o[this._settings.textField]=e.text,this._sourceDataFields.includes(this._settings.disabledField)&&(o[this._settings.disabledField]=e.isDisabled),o}return this._sourceDataType==="number"?Number(e.id):e.text}toggleDropdown(e){e.preventDefault(),!(this.disabled&&this._settings.singleSelection)&&(this._settings.defaultOpen=!this._settings.defaultOpen,this._settings.defaultOpen||this.onDropDownClose.emit())}closeDropdown(){this._settings.defaultOpen=!1,this._settings.clearSearchFilter&&(this.filter.text=""),this.onDropDownClose.emit()}toggleSelectAll(){if(this.disabled)return!1;this.isAllItemsSelected()?(this.selectedItems=[],this.onDeSelectAll.emit(this.emittedValue(this.selectedItems))):(this.selectedItems=this.listFilterPipe.transform(this._data,this.filter).filter(e=>!e.isDisabled).slice(),this.onSelectAll.emit(this.emittedValue(this.selectedItems))),this.onChangeCallback(this.emittedValue(this.selectedItems))}getFields(e){let o=[];if(typeof e!="object")return o;for(let l in e)o.push(l);return o}static \u0275fac=function(o){return new(o||a)(E(N),E(Q))};static \u0275cmp=T({type:a,selectors:[["ng-multiselect-dropdown"]],hostBindings:function(o,l){o&1&&f("blur",function(){return l.onTouched()})},inputs:{placeholder:"placeholder",disabled:"disabled",settings:"settings",data:"data"},outputs:{onFilterChange:"onFilterChange",onDropDownClose:"onDropDownClose",onSelect:"onSelect",onDeSelect:"onDeSelect",onSelectAll:"onSelectAll",onDeSelectAll:"onDeSelectAll"},features:[Y([ke])],decls:18,vars:23,consts:[["tabindex","0",1,"multiselect-dropdown",3,"blur","clickOutside"],["tabindex","-1",1,"dropdown-btn",3,"click"],[4,"ngIf"],["class","selected-item-container",4,"ngFor","ngForOf","ngForTrackBy"],[2,"float","right !important","padding-right","4px",3,"ngClass"],["style","padding-right: 15px;",4,"ngIf"],[1,"dropdown-multiselect__caret"],[1,"dropdown-list",3,"hidden"],[1,"item1"],["class","multiselect-item-checkbox","style","border-bottom: 1px solid #ccc;padding:10px",3,"click",4,"ngIf"],["class","filter-textbox",4,"ngIf"],[1,"item2"],["class","multiselect-item-checkbox",3,"click",4,"ngFor","ngForOf"],["class","no-filtered-data",4,"ngIf"],["class","no-data",4,"ngIf"],[1,"selected-item-container"],[1,"selected-item",3,"hidden"],[2,"padding-left","2px","color","white",3,"click"],[2,"padding-right","15px"],[1,"multiselect-item-checkbox",2,"border-bottom","1px solid #ccc","padding","10px",3,"click"],["type","checkbox","aria-label","multiselect-select-all",3,"checked","disabled"],[1,"filter-textbox"],["type","text","aria-label","multiselect-search",3,"ngModelChange","readOnly","placeholder","ngModel"],[1,"multiselect-item-checkbox",3,"click"],["type","checkbox",3,"checked","disabled"],[1,"no-filtered-data"],[1,"no-data"]],template:function(o,l){o&1&&(t(0,"div",0),f("blur",function(){return l.onTouched()})("clickOutside",function(){return l.closeDropdown()}),t(1,"div")(2,"span",1),f("click",function(g){return l.toggleDropdown(g)}),h(3,ve,2,1,"span",2)(4,Se,6,2,"span",3),t(5,"span",4),h(6,Ce,2,1,"span",5),u(7,"span",6),n()()(),t(8,"div",7)(9,"ul",8),h(10,Me,4,3,"li",9)(11,Oe,2,3,"li",10),n(),t(12,"ul",11),h(13,we,4,4,"li",12),F(14,"multiSelectFilter"),h(15,ye,3,1,"li",13),F(16,"multiSelectFilter"),h(17,Te,3,1,"li",14),n()()()),o&2&&(c(),G("disabled",l.disabled),c(2),d("ngIf",l.selectedItems.length==0),c(),d("ngForOf",l.selectedItems)("ngForTrackBy",l.trackByFn),c(),d("ngClass",J(21,be,l._settings.defaultOpen)),c(),d("ngIf",l.itemShowRemaining()>0),c(2),d("hidden",!l._settings.defaultOpen),c(2),d("ngIf",(l._data.length>0||l._settings.allowRemoteDataSearch)&&!l._settings.singleSelection&&l._settings.enableCheckAll&&l._settings.limitSelection===-1),c(),d("ngIf",(l._data.length>0||l._settings.allowRemoteDataSearch)&&l._settings.allowSearchFilter),c(),H("max-height",l._settings.maxHeight+"px"),c(),d("ngForOf",I(14,15,l._data,l.filter)),c(2),d("ngIf",l._data.length!=0&&I(16,18,l._data,l.filter).length==0&&!l._settings.allowRemoteDataSearch),c(2),d("ngIf",l._data.length==0&&!l._settings.allowRemoteDataSearch))},dependencies:[$,ee,te,k,P,D,Ee,N],styles:['.multiselect-dropdown[_ngcontent-%COMP%]{position:relative;width:100%;font-size:inherit;font-family:inherit}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]{display:inline-block;border:1px solid #adadad;width:100%;padding:6px 12px;margin-bottom:0;font-weight:400;line-height:1.52857143;text-align:left;vertical-align:middle;cursor:pointer;background-image:none;border-radius:4px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]{display:flex;float:left}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]{border:1px solid #337ab7;margin-right:4px;background:#337ab7;padding:0 5px;color:#fff;border-radius:2px;float:left;max-width:100px}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item-container[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .selected-item[_ngcontent-%COMP%]:hover{box-shadow:1px 1px #959595}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{line-height:16px;display:block;position:absolute;box-sizing:border-box;width:40px;height:38px;right:1px;top:0;padding:4px 8px;margin:0;text-decoration:none;text-align:center;cursor:pointer;transition:transform .2s ease}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:8px 8px 0 8px;border-color:#999999 transparent;content:""}.multiselect-dropdown[_ngcontent-%COMP%]   .dropdown-btn[_ngcontent-%COMP%]   .dropdown-multiselect--active[_ngcontent-%COMP%]   .dropdown-multiselect__caret[_ngcontent-%COMP%]{transform:rotate(180deg)}.multiselect-dropdown[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{background-color:#eceeef}.dropdown-list[_ngcontent-%COMP%]{position:absolute;padding-top:6px;width:100%;z-index:9999;border:1px solid #ccc;border-radius:3px;background:#fff;margin-top:10px;box-shadow:0 1px 5px #959595}.dropdown-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding:0;list-style:none;overflow:auto;margin:0}.dropdown-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px 10px;cursor:pointer;text-align:left}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]{border-bottom:1px solid #ccc;position:relative;padding:10px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:0px;width:100%;padding:0 0 0 26px}.dropdown-list[_ngcontent-%COMP%]   .filter-textbox[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none}.multiselect-item-checkbox[_ngcontent-%COMP%]:hover{background-color:#e4e3e3}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:focus + div[_ngcontent-%COMP%]:before, .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:hover + div[_ngcontent-%COMP%]:before{border-color:#337ab7;background-color:#f2f2f2}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:active + div[_ngcontent-%COMP%]:before{transition-duration:0s}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]{position:relative;padding-left:2em;vertical-align:middle;-webkit-user-select:none;user-select:none;cursor:pointer;margin:0;color:#000}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:before{box-sizing:content-box;content:"";color:#337ab7;position:absolute;top:50%;left:0;width:14px;height:14px;margin-top:-9px;border:2px solid #337ab7;text-align:center;transition:all .4s ease}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{box-sizing:content-box;content:"";background-color:#337ab7;position:absolute;top:50%;left:4px;width:10px;height:10px;margin-top:-5px;transform:scale(0);transform-origin:50%;transition:transform .2s ease-out}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled + div[_ngcontent-%COMP%]:before{border-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:focus + div[_ngcontent-%COMP%]:before   .multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:hover + div[_ngcontent-%COMP%]:before{background-color:inherit}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:disabled:checked + div[_ngcontent-%COMP%]:before{background-color:#ccc}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] + div[_ngcontent-%COMP%]:after{background-color:transparent;top:50%;left:4px;width:8px;height:3px;margin-top:-4px;border-style:solid;border-color:#fff;border-width:0 0 3px 3px;border-image:none;transform:rotate(-45deg) scale(0)}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{content:"";transform:rotate(-45deg) scale(1);transition:transform .2s ease-out}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_borderscale .2s ease-in;background:#337ab7}.multiselect-item-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]:checked + div[_ngcontent-%COMP%]:after{transform:rotate(-45deg) scale(1)}@keyframes _ngcontent-%COMP%_borderscale{50%{box-shadow:0 0 0 2px #337ab7}}'],changeDetection:0})}return a})(),fe=(()=>{class a{static forRoot(){return{ngModule:a}}static \u0275fac=function(o){return new(o||a)};static \u0275mod=Z({type:a});static \u0275inj=R({providers:[N],imports:[ne,A]})}return a})();var De=()=>[];function Ae(a,r){if(a&1&&i(0),a&2){let e=r.item;w(" ",e.country||"Unnamed group"," ")}}function Fe(a,r){if(a&1&&i(0),a&2){let e=r.item;w(" ",e.country||"Unnamed group"," ")}}function Ie(a,r){a&1&&(t(0,"div",49),i(1," Only values matching specific conditions can be added "),n())}var et=(()=>{let r=class r{constructor(){this.companies=[],this.companiesNames=["Uber","Microsoft","Flexigen"],this.selectedMonth="6",this.selectedAccount="AZ",this.email="",this.emailFormControl=new oe("",[L.required,L.email]),this.options=[{name:"Zero",value:0},{name:"One",value:1},{name:"Two",value:2}],this.accounts=[{name:"Arizona",value:"AZ",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Colorado",value:"CO",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Idaho",value:"ID",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Montana",value:"MT",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Nebraska",value:"NE",country:"Mountain Time Zone",child:{state:"Active"}},{name:"New Mexico",value:"NM",country:"Mountain Time Zone",child:{state:"Active"}},{name:"North Dakota",value:"AZ",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Utah",value:"UT",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Wyoming",value:"WY",country:"Mountain Time Zone",child:{state:"Active"}},{name:"Alabama",value:"AL",country:"Central Time Zone",child:{state:"Active"}},{name:"Arkansas",value:"AR",country:"Central Time Zone",child:{state:"Active"}},{name:"Illinois",value:"IL",country:"Central Time Zone",child:{state:"Active"}},{name:"Iowa",value:"IA",country:"Central Time Zone",child:{state:"Active"}},{name:"Kansas",value:"KS",country:"Central Time Zone",child:{state:"Active"}},{name:"Kentucky",value:"KY",country:"Central Time Zone",child:{state:"Active"}},{name:"Louisiana",value:"LA",country:"Central Time Zone",child:{state:"Active"}},{name:"Minnesota",value:"MN",country:"Central Time Zone",child:{state:"Active"}},{name:"Mississippi",value:"MS",country:"Central Time Zone",child:{state:"Active"}},{name:"Missouri",value:"MO",country:"Central Time Zone",child:{state:"Active"}},{name:"Oklahoma",value:"OK",country:"Central Time Zone",child:{state:"Active"}},{name:"South Dakota",value:"SD",country:"Central Time Zone",child:{state:"Active"}},{name:"Texas",value:"TX",country:"Central Time Zone",child:{state:"Active"}},{name:"Tennessee",value:"TN",country:"Central Time Zone",child:{state:"Active"}},{name:"Wisconsin",value:"WI",country:"Central Time Zone",child:{state:"Active"}}],this.selectedAccounts=[{name:"Adam"}],this.compareAccounts=(o,l)=>l.country&&o.country?o.country===l.country:o.name&&l.name?o.name===l.name:!1,this.hideselectedAccounts=[{name:"Adam"}],this.hidecompareAccounts=(o,l)=>l.country&&o.country?o.country===l.country:o.name&&l.name?o.name===l.name:!1}ngOnInit(){this.companiesNames.forEach((o,l)=>{this.companies.push({id:l,name:o})})}addTagFn(o){return{name:o,tag:!0}}};r.\u0275fac=function(l){return new(l||r)},r.\u0275cmp=T({type:r,selectors:[["app-formselect"]],standalone:!0,features:[q],decls:289,vars:34,consts:[[1,"fw-semibold","mb-2"],[1,"row"],[1,"col-xl-6"],[1,"col-xl-12"],[1,"card","custom-card"],[1,"card-header","d-flex","align-items-center","justify-content-between"],[1,"card-title"],[1,"card-body"],["bindLabel","month","placeholder","Select month",1,"",3,"multiple","closeOnSelect","searchable"],["value","Choice 1","selected",""],["value","Choice 2"],["value","Choice 3"],["value","Choice 4","disabled",""],["bindLabel","name","groupBy","country",1,"",3,"ngModelChange","items","multiple","hideSelected","closeOnSelect","selectableGroup","compareWith","ngModel"],["ng-optgroup-tmp",""],["bindLabel","name","groupBy","country",1,"",3,"ngModelChange","items","multiple","closeOnSelect","selectableGroup","selectableGroupAsModel","compareWith","ngModel"],[1,"card-header"],["placeholder","Type to Add","bindLabel","name",1,"",3,"ngModelChange","items","addTag","hideSelected","multiple","ngModel"],["placeholder","Select an option",1,"",3,"items","bindLabel","bindValue"],["placeholder","Select","data-trigger","","name","choices-single-default","id","choices-single-default",1,""],["value",""],["value","Choice 1"],["placeholder","Choose a city","data-trigger","","name","choices-single-groups","id","choices-single-groups",1,""],["label","UK"],["value","London"],["value","Manchester"],["value","Liverpool"],["label","FR"],["value","Paris"],["value","Lyon"],["value","Marseille"],["label","DE","disabled",""],["value","Hamburg"],["value","Munich"],["value","Berlin"],["label","US"],["value","New York"],["value","Washington","disabled",""],["value","Michigan"],["label","SP"],["value","Madrid"],["value","Barcelona"],["value","Malaga"],["label","CA"],["value","Montreal"],["value","Toronto"],["value","Vancouver"],["for","emailInput",1,"mb-2"],["id","emailInput","type","text","placeholder","Email Address Only",1,"form-control",3,"ngModelChange","ngModel","formControl"],[1,"text-danger"],["placeholder","Type and Enter To Add",1,"",3,"items","addTag","multiple","selectOnTab","isOpen"],[1,"col-xl-4"],[1,"card-header","justify-content-between"],[1,"prism-toggle"],["appShowCode","",1,"btn","btn-sm","btn-primary-light"],[1,"ri-code-line","ms-2","d-inline-block","align-middle"],["aria-label","Default select example","placeholder","Default Select",1,""],["selected",""],["value","1"],["value","2"],["value","3"],[1,"card-footer","d-none","border-top-0"],[1,"language-html"],["aria-label","Disabled select example","disabled","","placeholder","Disabled Select",1,"form-select"],[1,"card","custom-card","rounded-select"],["aria-label","Default select example","placeholder","Rounded Select",1,"rounded-pill"],["multiple","","aria-label","multiple select example",1,"form-select"],["size","4","aria-label","size 3 select example",1,"form-select"],["value","4"],["value","5"],["placeholder","Open this select menu","aria-label",".form-select-sm example",1,"mb-3"],["placeholder","Open this select menu","aria-label","Default select",1,"mb-3"],["placeholder","Open this select menu","aria-label",".form-select-lg example",1,""]],template:function(l,s){l&1&&(t(0,"h6",0),i(1,"Choices:"),n(),t(2,"div",1)(3,"div",2)(4,"div",1)(5,"div",3)(6,"div",4)(7,"div",5)(8,"h6",6),i(9,"Multiple Select"),n()(),t(10,"div",7)(11,"p",0),i(12,"Default"),n(),t(13,"ng-select",8)(14,"ng-option",9),i(15,"Choice 1"),n(),t(16,"ng-option",10),i(17,"Choice 4"),n(),t(18,"ng-option",11),i(19,"Choice 5"),n(),t(20,"ng-option",12),i(21,"Choice 6"),n()(),t(22,"p",0),i(23,"With Remove Button"),n(),t(24,"ng-select",13),S("ngModelChange",function(m){return v(s.hideselectedAccounts,m)||(s.hideselectedAccounts=m),m}),h(25,Ae,1,1,"ng-template",14),n(),t(26,"p",0),i(27,"Option groups"),n(),t(28,"ng-select",15),S("ngModelChange",function(m){return v(s.selectedAccounts,m)||(s.selectedAccounts=m),m}),h(29,Fe,1,1,"ng-template",14),n()()()(),t(30,"div",3)(31,"div",4)(32,"div",16)(33,"div",6),i(34,"Passing Through Options"),n()(),t(35,"div",7)(36,"ng-select",17),S("ngModelChange",function(m){return v(s.selectedCompanies,m)||(s.selectedCompanies=m),m}),n()()()(),t(37,"div",3)(38,"div",4)(39,"div",16)(40,"div",6),i(41," Options added via config with no search "),n()(),t(42,"div",7),u(43,"ng-select",18),n()()()()(),t(44,"div",2)(45,"div",1)(46,"div",3)(47,"div",4)(48,"div",5)(49,"h6",6),i(50,"Single Select"),n()(),t(51,"div",7)(52,"p",0),i(53,"Default"),n(),t(54,"ng-select",19)(55,"ng-option",20),i(56,"This is a placeholder"),n(),t(57,"ng-option",21),i(58,"Choice 1"),n(),t(59,"ng-option",10),i(60,"Choice 2"),n(),t(61,"ng-option",11),i(62,"Choice 3"),n()(),t(63,"p",0),i(64,"Option groups"),n(),t(65,"ng-select",22)(66,"ng-option",20),i(67,"Choose a city"),n(),t(68,"ng-option",23)(69,"ng-option",24),i(70,"London"),n(),t(71,"ng-option",25),i(72,"Manchester"),n(),t(73,"ng-option",26),i(74,"Liverpool"),n()(),t(75,"ng-option",27)(76,"ng-option",28),i(77,"Paris"),n(),t(78,"ng-option",29),i(79,"Lyon"),n(),t(80,"ng-option",30),i(81,"Marseille"),n()(),t(82,"ng-option",31)(83,"ng-option",32),i(84,"Hamburg"),n(),t(85,"ng-option",33),i(86,"Munich"),n(),t(87,"ng-option",34),i(88,"Berlin"),n()(),t(89,"ng-option",35)(90,"ng-option",36),i(91,"New York"),n(),t(92,"ng-option",37),i(93,"Washington"),n(),t(94,"ng-option",38),i(95,"Michigan"),n()(),t(96,"ng-option",39)(97,"ng-option",40),i(98,"Madrid"),n(),t(99,"ng-option",41),i(100,"Barcelona"),n(),t(101,"ng-option",42),i(102,"Malaga"),n()(),t(103,"ng-option",43)(104,"ng-option",44),i(105,"Montreal"),n(),t(106,"ng-option",45),i(107,"Toronto"),n(),t(108,"ng-option",46),i(109,"Vancouver"),n()()()()()(),t(110,"div",3)(111,"div",4)(112,"div",16)(113,"div",6),i(114,"Email Address Only"),n()(),t(115,"div",7)(116,"div")(117,"label",47),i(118,"Email Address:"),n(),t(119,"input",48),S("ngModelChange",function(m){return v(s.email,m)||(s.email=m),m}),n(),h(120,Ie,2,0,"div",49),n()()()(),t(121,"div",3)(122,"div",4)(123,"div",16)(124,"div",6),i(125,"Passing Unique Values"),n()(),t(126,"div",7),u(127,"ng-select",50),n()()()()()(),t(128,"div",1)(129,"div",51)(130,"div",4)(131,"div",52)(132,"div",6),i(133,"Default Select"),n(),t(134,"div",53)(135,"button",54),i(136," Show Code"),u(137,"i",55),n()()(),t(138,"div",7)(139,"ng-select",56)(140,"ng-option",57),i(141,"Open this select menu"),n(),t(142,"ng-option",58),i(143,"One"),n(),t(144,"ng-option",59),i(145,"Two"),n(),t(146,"ng-option",60),i(147,"Three"),n()()(),t(148,"div",61)(149,"pre",62)(150,"code",62),i(151,`<select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu
    </option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>`),n()()()()(),t(152,"div",51)(153,"div",4)(154,"div",52)(155,"div",6),i(156,"Disabled Select"),n(),t(157,"div",53)(158,"button",54),i(159," Show Code"),u(160,"i",55),n()()(),t(161,"div",7)(162,"select",63)(163,"option",58),i(164,"One"),n(),t(165,"option",59),i(166,"Two"),n(),t(167,"option",60),i(168,"Three"),n()()(),t(169,"div",61)(170,"pre",62)(171,"code",62),i(172,`<select class="form-select" aria-label="Disabled select example" disabled="">
    <option selected="">Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>`),n()()()()(),t(173,"div",51)(174,"div",64)(175,"div",52)(176,"div",6),i(177,"Rounded Select"),n(),t(178,"div",53)(179,"button",54),i(180," Show Code"),u(181,"i",55),n()()(),t(182,"div",7)(183,"ng-select",65)(184,"ng-option",57),i(185,"Open this select menu"),n(),t(186,"ng-option",58),i(187,"One"),n(),t(188,"ng-option",59),i(189,"Two"),n(),t(190,"ng-option",60),i(191,"Three"),n()()(),t(192,"div",61)(193,"pre",62)(194,"code",62),i(195,`<select class="form-select rounded-pill" aria-label="Default select example">
    <option selected>Open this select menu
    </option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>`),n()()()()()(),t(196,"div",1)(197,"div",2)(198,"div",4)(199,"div",52)(200,"div",6),i(201,"Multiple Attribute Select"),n(),t(202,"div",53)(203,"button",54),i(204," Show Code"),u(205,"i",55),n()()(),t(206,"div",7)(207,"select",66)(208,"option",57),i(209,"Open this select menu"),n(),t(210,"option",58),i(211,"One"),n(),t(212,"option",59),i(213,"Two"),n(),t(214,"option",60),i(215,"Three"),n()()(),t(216,"div",61)(217,"pre",62)(218,"code",62),i(219,`<select class="form-select" multiple="" aria-label="multiple select example">
    <option selected="">Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>`),n()()()()(),t(220,"div",2)(221,"div",4)(222,"div",52)(223,"div",6),i(224,"Using Size Attribute"),n(),t(225,"div",53)(226,"button",54),i(227," Show Code"),u(228,"i",55),n()()(),t(229,"div",7)(230,"select",67)(231,"option",57),i(232,"Open this select menu"),n(),t(233,"option",58),i(234,"One"),n(),t(235,"option",59),i(236,"Two"),n(),t(237,"option",60),i(238,"Three"),n(),t(239,"option",68),i(240,"Four"),n(),t(241,"option",69),i(242,"Five"),n()()(),t(243,"div",61)(244,"pre",62)(245,"code",62),i(246,`<select class="form-select" size="4" aria-label="size 3 select example">
    <option selected="">Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
    <option value="4">Four</option>
    <option value="5">Five</option>
</select>`),n()()()()()(),t(247,"div",1)(248,"div",3)(249,"div",4)(250,"div",52)(251,"div",6),i(252,"Select Sizes"),n(),t(253,"div",53)(254,"button",54),i(255," Show Code"),u(256,"i",55),n()()(),t(257,"div",7)(258,"ng-select",70)(259,"ng-option",57),i(260,"Open this select menu"),n(),t(261,"ng-option",58),i(262,"One"),n(),t(263,"ng-option",59),i(264,"Two"),n(),t(265,"ng-option",60),i(266,"Three"),n()(),t(267,"ng-select",71)(268,"ng-option",57),i(269,"Open this select menu"),n(),t(270,"ng-option",58),i(271,"One"),n(),t(272,"ng-option",59),i(273,"Two"),n(),t(274,"ng-option",60),i(275,"Three"),n()(),t(276,"ng-select",72)(277,"ng-option",57),i(278,"Open this select menu"),n(),t(279,"ng-option",58),i(280,"One"),n(),t(281,"ng-option",59),i(282,"Two"),n(),t(283,"ng-option",60),i(284,"Three"),n()()(),t(285,"div",61)(286,"pre",62)(287,"code",62),i(288,`<select class="form-select form-select-sm mb-3" aria-label=".form-select-sm example">
    <option selected="">Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select><select class="form-select mb-3" aria-label="Default select">
    <option selected>Open this select menu
    </option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
<select class="form-select form-select-lg"
    aria-label=".form-select-lg example">
    <option selected="">Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>`),n()()()()()()),l&2&&(c(13),d("multiple",!0)("closeOnSelect",!1)("searchable",!1),c(11),d("items",s.accounts)("multiple",!0)("hideSelected",!0)("closeOnSelect",!1)("selectableGroup",!0)("compareWith",s.hidecompareAccounts),b("ngModel",s.hideselectedAccounts),c(4),d("items",s.accounts)("multiple",!0)("closeOnSelect",!1)("selectableGroup",!0)("selectableGroupAsModel",!1)("compareWith",s.compareAccounts),b("ngModel",s.selectedAccounts),c(8),d("items",s.companies)("addTag",s.addTagFn)("hideSelected",!0)("multiple",!0),b("ngModel",s.selectedCompanies),c(7),d("items",s.options)("bindLabel","name")("bindValue","value"),c(76),b("ngModel",s.email),d("formControl",s.emailFormControl),c(),K(120,s.emailFormControl.hasError("email")&&s.emailFormControl.touched?120:-1),c(7),d("items",X(33,De))("addTag",!0)("multiple",!0)("selectOnTab",!0)("isOpen",!1))},dependencies:[de,re,ge,ue,pe,me,A,ae,se,k,P,D,ce,le,fe],styles:[".dark .list-area{background-color:rgb(var(--dark-bg))!important}  .dark .ng-dropdown-panel{border-color:var(--tw-border-opacity)}  .pilled-selcect{border-radius:50px!important}"]});let a=r;return a})();export{et as FormselectComponent};
