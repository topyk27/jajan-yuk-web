import{a as w,c as Ne,d as Oe,f as pe,h as Pe}from"./chunk-CWSOCGWF.js";import{A as W,B as a,C as ce,D as O,E as b,G as q,H as de,O as u,P as l,Q as h,U as p,Z as c,a as d,aa as z,b as f,ba as Ie,ca as P,da as v,e as Me,ea as he,f as we,g as Ae,h as Ee,ha as Se,i as Fe,j as H,k as L,l as $,m as _,n as C,na as M,o as D,oa as fe,p as V,q as g,r as le,w as xe,x as N,y as ue}from"./chunk-7A7GJFHA.js";var Ge=(()=>{let e=class e{constructor(t){this.router=t}signIn(){this.router.navigate(["welcome/sign-in"])}};e.\u0275fac=function(r){return new(r||e)(a(M))},e.\u0275cmp=D({type:e,selectors:[["app-welcome"]],decls:12,vars:0,consts:[[1,"flex","flex-col","justify-center","items-center","h-screen","px-4"],["src","/assets/images/jajan-big.png",1,"max-w-screen-sm","object-cover"],[1,"relative","mt-5"],[1,"text-3xl","text-white","font-bold","text-center"],[1,"text-secondary-200"],["src","../../../assets/images/path.png",1,"object-contain","w-[60px]","h-[15px]","absolute","-bottom-2","right-1","hidden","md:block"],[1,"text-sm","font-pregular","text-gray-100","mt-7","text-center"],["title","Oke gas","containerStyles","w-full mt-7",1,"pb-6",3,"handlePress"]],template:function(r,s){r&1&&(u(0,"main")(1,"div",0),h(2,"img",1),u(3,"div",2)(4,"h2",3),c(5,"Habiskan uang mu dengan "),u(6,"span",4),c(7,"Jajan Yuk"),l()(),h(8,"img",5),l(),u(9,"p",6),c(10,"Orang yang suka makan adalah orang yang bahagia "),l(),u(11,"app-custom-button",7),p("handlePress",function(){return s.signIn()}),l()()())},dependencies:[w]});let i=e;return i})();var qe=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(a(ce),a(ue))},e.\u0275dir=g({type:e});let i=e;return i})(),gt=(()=>{let e=class e extends qe{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=xe(e)))(s||e)}})(),e.\u0275dir=g({type:e,features:[b]});let i=e;return i})(),ze=new C("");var vt={provide:ze,useExisting:L(()=>S),multi:!0};function yt(){let i=he()?he().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var _t=new C(""),S=(()=>{let e=class e extends qe{constructor(t,r,s){super(t,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!yt())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(a(ce),a(ue),a(_t,8))},e.\u0275dir=g({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&p("input",function(m){return s._handleInput(m.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(m){return s._compositionEnd(m.target.value)})},features:[z([vt]),b]});let i=e;return i})();var Ze=new C(""),Ye=new C("");function Xe(i){return i!=null}function Je(i){return Ie(i)?Ae(i):i}function Ke(i){let e={};return i.forEach(n=>{e=n!=null?d(d({},e),n):e}),Object.keys(e).length===0?null:e}function Qe(i,e){return e.map(n=>n(i))}function Ct(i){return!i.validate}function et(i){return i.map(e=>Ct(e)?e:n=>e.validate(n))}function Vt(i){if(!i)return null;let e=i.filter(Xe);return e.length==0?null:function(n){return Ke(Qe(n,e))}}function tt(i){return i!=null?Vt(et(i)):null}function bt(i){if(!i)return null;let e=i.filter(Xe);return e.length==0?null:function(n){let t=Qe(n,e).map(Je);return Fe(t).pipe(Ee(Ke))}}function it(i){return i!=null?bt(et(i)):null}function Te(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function nt(i){return i._rawValidators}function rt(i){return i._rawAsyncValidators}function me(i){return i?Array.isArray(i)?i:[i]:[]}function X(i,e){return Array.isArray(i)?i.includes(e):i===e}function Re(i,e){let n=me(e);return me(i).forEach(r=>{X(n,r)||n.push(r)}),n}function Be(i,e){return me(e).filter(n=>!X(i,n))}var J=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=tt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=it(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},x=class extends J{get formDirective(){return null}get path(){return null}},R=class extends J{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},K=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},di=f(d({},Dt),{"[class.ng-submitted]":"isSubmitted"}),ne=(()=>{let e=class e extends K{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(R,2))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&de("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[b]});let i=e;return i})(),re=(()=>{let e=class e extends K{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(a(x,10))},e.\u0275dir=g({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&de("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[b]});let i=e;return i})();var k="VALID",Z="INVALID",E="PENDING",j="DISABLED",y=class{},Q=class extends y{constructor(e,n){super(),this.value=e,this.source=n}},G=class extends y{constructor(e,n){super(),this.pristine=e,this.source=n}},T=class extends y{constructor(e,n){super(),this.touched=e,this.source=n}},F=class extends y{constructor(e,n){super(),this.status=e,this.source=n}},ge=class extends y{constructor(e){super(),this.source=e}},ve=class extends y{constructor(e){super(),this.source=e}};function Ce(i){return(se(i)?i.validators:i)||null}function Mt(i){return Array.isArray(i)?tt(i):i||null}function Ve(i,e){return(se(e)?e.asyncValidators:i)||null}function wt(i){return Array.isArray(i)?it(i):i||null}function se(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function st(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new H(1e3,"");if(!t[n])throw new H(1001,"")}function ot(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new H(1002,"")})}var I=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=P(()=>this.statusReactive()),this.statusReactive=O(void 0),this._pristine=P(()=>this.pristineReactive()),this.pristineReactive=O(!0),this._touched=P(()=>this.touchedReactive()),this.touchedReactive=O(!1),this._events=new we,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return v(this.statusReactive)}set status(e){v(()=>this.statusReactive.set(e))}get valid(){return this.status===k}get invalid(){return this.status===Z}get pending(){return this.status==E}get disabled(){return this.status===j}get enabled(){return this.status!==j}get pristine(){return v(this.pristineReactive)}set pristine(e){v(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return v(this.touchedReactive)}set touched(e){v(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Re(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Re(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Be(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Be(e,this._rawAsyncValidators))}hasValidator(e){return X(this._rawValidators,e)}hasAsyncValidator(e){return X(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(f(d({},e),{sourceControl:t})),n&&e.emitEvent!==!1&&this._events.next(new T(!0,t))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:t})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t),n&&e.emitEvent!==!1&&this._events.next(new T(!1,t))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let t=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(f(d({},e),{sourceControl:t})),n&&e.emitEvent!==!1&&this._events.next(new G(!1,t))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let t=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),n&&e.emitEvent!==!1&&this._events.next(new G(!0,t))}markAsPending(e={}){this.status=E;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new F(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(f(d({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=j,this.errors=null,this._forEachChild(r=>{r.disable(f(d({},e),{onlySelf:!0}))}),this._updateValue();let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Q(this.value,t)),this._events.next(new F(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(f(d({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=k,this._forEachChild(t=>{t.enable(f(d({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(f(d({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let t=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===k||this.status===E)&&this._runAsyncValidator(t,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new Q(this.value,n)),this._events.next(new F(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(f(d({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?j:k}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=E,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let t=Je(this.asyncValidator(this));this._asyncValidationSubscription=t.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,t){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||t)&&this._events.next(new F(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,t)}_initObservables(){this.valueChanges=new N,this.statusChanges=new N}_calculateStatus(){return this._allControlsDisabled()?j:this.errors?Z:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(E)?E:this._anyControlsHaveStatus(Z)?Z:k}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let t=!this._anyControlsDirty(),r=this.pristine!==t;this.pristine=t,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new G(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new T(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){se(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Mt(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=wt(this._rawAsyncValidators)}},ee=class extends I{constructor(e,n,t){super(Ce(n),Ve(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){ot(this,!0,e),Object.keys(e).forEach(t=>{st(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,s)=>{t=n(t,r,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ye=class extends ee{};var at=new C("CallSetDisabledState",{providedIn:"root",factory:()=>be}),be="always";function At(i,e){return[...e.path,i]}function Ue(i,e,n=be){De(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),Ft(i,e),It(i,e),xt(i,e),Et(i,e)}function He(i,e,n=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),ie(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function te(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Et(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function De(i,e){let n=nt(i);e.validator!==null?i.setValidators(Te(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=rt(i);e.asyncValidator!==null?i.setAsyncValidators(Te(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();te(e._rawValidators,r),te(e._rawAsyncValidators,r)}function ie(i,e){let n=!1;if(i!==null){if(e.validator!==null){let r=nt(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(n=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=rt(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(n=!0,i.setAsyncValidators(s))}}}let t=()=>{};return te(e._rawValidators,t),te(e._rawAsyncValidators,t),n}function Ft(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&lt(i,e)})}function xt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&lt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function lt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function It(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function St(i,e){i==null,De(i,e)}function Nt(i,e){return ie(i,e)}function Ot(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Pt(i){return Object.getPrototypeOf(i.constructor)===gt}function kt(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function jt(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(s=>{s.constructor===S?n=s:Pt(s)?t=s:r=s}),r||t||n||null}function Gt(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function Le(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function $e(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var Y=class extends I{constructor(e=null,n,t){super(Ce(n),Ve(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),se(n)&&(n.nonNullable||n.initialValueIsDefault)&&($e(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Le(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Le(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){$e(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Tt=i=>i instanceof Y;var oe=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=g({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var ut=new C("");var Rt={provide:x,useExisting:L(()=>B)},B=(()=>{let e=class e extends x{get submitted(){return v(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,r,s){super(),this.callSetDisabledState=s,this._submitted=P(()=>this._submittedReactive()),this._submittedReactive=O(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new N,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(ie(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return Ue(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){He(t.control||null,t,!1),Gt(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this._submittedReactive.set(!0),kt(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new ge(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new ve(this.form))}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,s=this.form.get(t.path);r!==s&&(He(r||null,t),Tt(s)&&(Ue(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);St(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&Nt(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){De(this.form,this),this._oldForm&&ie(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(Ze,10),a(Ye,10),a(at,8))},e.\u0275dir=g({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&p("submit",function(m){return s.onSubmit(m)})("reset",function(){return s.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[z([Rt]),b,le]});let i=e;return i})();var Bt={provide:R,useExisting:L(()=>U)},U=(()=>{let e=class e extends R{set isDisabled(t){}constructor(t,r,s,o,m){super(),this._ngModelWarningConfig=m,this._added=!1,this.name=null,this.update=new N,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=jt(this,o)}ngOnChanges(t){this._added||this._setUpControl(),Ot(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return At(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(x,13),a(Ze,10),a(Ye,10),a(ze,10),a(ut,8))},e.\u0275dir=g({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[z([Bt]),b,le]});let i=e;return i})();var Ut=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=V({type:e}),e.\u0275inj=_({});let i=e;return i})(),_e=class extends I{constructor(e,n,t){super(Ce(n),Ve(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,t={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,n={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){ot(this,!1,e),e.forEach((t,r)=>{st(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((t,r)=>{t.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,t)=>t._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,t)=>{e(n,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function We(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var ae=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let s=this._reduceControls(t),o={};return We(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new ee(s,o)}record(t,r=null){let s=this._reduceControls(t);return new ye(s,r)}control(t,r,s){let o={};return this.useNonNullable?(We(r)?o=r:(o.validators=r,o.asyncValidators=s),new Y(t,f(d({},o),{nonNullable:!0}))):new Y(t,r,s)}array(t,r,s){let o=t.map(m=>this._createControl(m));return new _e(o,r,s)}_reduceControls(t){let r={};return Object.keys(t).forEach(s=>{r[s]=this._createControl(t[s])}),r}_createControl(t){if(t instanceof Y)return t;if(t instanceof I)return t;if(Array.isArray(t)){let r=t[0],s=t.length>1?t[1]:null,o=t.length>2?t[2]:null;return this.control(r,s,o)}else return this.control(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=$({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var ct=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:ut,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:at,useValue:t.callSetDisabledState??be}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=V({type:e}),e.\u0275inj=_({imports:[Ut]});let i=e;return i})();var ht=(()=>{let e=class e{constructor(){this.account=new Ne(pe),this.avatars=new Oe(pe),this.signIn=t=>Me(this,null,function*(){try{return yield this.account.createEmailPasswordSession(t.email,t.password)}catch(r){if(r instanceof Error)throw new Error(r.message)}})}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=$({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var ft=(()=>{let e=class e{constructor(t,r,s){this.formBuilder=t,this.router=r,this.appwrite=s,this.fb=this.formBuilder.group({email:"",password:""})}onSubmit(){this.router.navigate(["main"])}signUp(){this.router.navigate(["welcome/sign-up"])}};e.\u0275fac=function(r){return new(r||e)(a(ae),a(M),a(ht))},e.\u0275cmp=D({type:e,selectors:[["app-sign-in"]],decls:22,vars:1,consts:[[1,"flex","flex-col","justify-center","h-screen","px-4","my-6"],[1,"flex","justify-center","items-center"],["src","../assets/images/jajan.png",1,"w-[300px]","object-contain"],[1,"flex","justify-center"],[1,"text-2xl","text-white","font-psemibold"],[1,"flex","flex-col","items-center","justify-center",3,"formGroup"],[1,"w-full","md:w-6/12","flex","flex-col","space-y-2","mt-7"],["for","email",1,"text-base","text-gray-100","font-pmedium"],["type","email","formControlName","email",1,"border-2","border-red-200","w-full","p-4","bg-black-100","rounded-2xl","focus:border-secondary","text-white","font-psemibold","text-base"],["for","password",1,"text-base","text-gray-100","font-pmedium"],["type","password","formControlName","password",1,"border-2","border-red-200","w-full","p-4","bg-black-100","rounded-2xl","focus:border-secondary","text-white","font-psemibold","text-base"],[1,"flex","mt-7"],["title","Masuk","containerStyles","mt-7",3,"handlePress"],[1,"flex","justify-center","py-5","gap-2"],[1,"text-lg","text-gray-100","font-pregular"],[1,"text-lg","font-psemibold","text-secondary","cursor-pointer",3,"click"]],template:function(r,s){r&1&&(u(0,"div",0)(1,"div",1),h(2,"img",2),l(),u(3,"div",3)(4,"p",4),c(5,"Log in dulu kak"),l()(),u(6,"form",5)(7,"div",6)(8,"label",7),c(9,"Email"),l(),h(10,"input",8),l(),u(11,"div",6)(12,"label",9),c(13,"Password"),l(),h(14,"input",10),l(),u(15,"div",11)(16,"app-custom-button",12),p("handlePress",function(){return s.onSubmit()}),l()()(),u(17,"div",13)(18,"p",14),c(19,"Belum punya akun? "),u(20,"a",15),p("click",function(){return s.signUp()}),c(21,"Daftar dulu sini"),l()()()()),r&2&&(W(6),q("formGroup",s.fb))},dependencies:[w,oe,S,ne,re,B,U]});let i=e;return i})();var pt=(()=>{let e=class e{constructor(t,r){this.formBuilder=t,this.router=r,this.fb=this.formBuilder.group({email:"",password:"",username:""})}onSubmit(){console.log("submit")}signIn(){this.router.navigate(["welcome/sign-in"])}};e.\u0275fac=function(r){return new(r||e)(a(ae),a(M))},e.\u0275cmp=D({type:e,selectors:[["app-sign-up"]],decls:26,vars:1,consts:[[1,"flex","flex-col","justify-center","h-screen","px-4","my-6","pt-32"],[1,"flex","justify-center","items-center"],["src","../assets/images/jajan.png",1,"w-[300px]","object-contain"],[1,"flex","justify-center"],[1,"text-2xl","text-white","font-psemibold"],[1,"flex","flex-col","items-center","justify-center",3,"formGroup"],[1,"w-full","md:w-6/12","flex","flex-col","space-y-2","mt-7"],["for","username",1,"text-base","text-gray-100","font-pmedium"],["type","text","formControlName","username",1,"border-2","border-red-200","w-full","p-4","bg-black-100","rounded-2xl","focus:border-secondary","text-white","font-psemibold","text-base"],["for","email",1,"text-base","text-gray-100","font-pmedium"],["type","email","formControlName","email",1,"border-2","border-red-200","w-full","p-4","bg-black-100","rounded-2xl","focus:border-secondary","text-white","font-psemibold","text-base"],["for","password",1,"text-base","text-gray-100","font-pmedium"],["type","password","formControlName","password",1,"border-2","border-red-200","w-full","p-4","bg-black-100","rounded-2xl","focus:border-secondary","text-white","font-psemibold","text-base"],[1,"flex","mt-7"],["title","Buat akun","containerStyles","mt-7",3,"handlePress"],[1,"flex","justify-center","py-5","gap-2"],[1,"text-lg","text-gray-100","font-pregular"],[1,"text-lg","font-psemibold","text-secondary","cursor-pointer",3,"click"]],template:function(r,s){r&1&&(u(0,"div",0)(1,"div",1),h(2,"img",2),l(),u(3,"div",3)(4,"p",4),c(5,"Silahkan buat akun kak"),l()(),u(6,"form",5)(7,"div",6)(8,"label",7),c(9,"Username"),l(),h(10,"input",8),l(),u(11,"div",6)(12,"label",9),c(13,"Email"),l(),h(14,"input",10),l(),u(15,"div",6)(16,"label",11),c(17,"Password"),l(),h(18,"input",12),l(),u(19,"div",13)(20,"app-custom-button",14),p("handlePress",function(){return s.onSubmit()}),l()()(),u(21,"div",15)(22,"p",16),c(23,"Udah punya akun? "),u(24,"a",17),p("click",function(){return s.signIn()}),c(25,"Sini login"),l()()()()),r&2&&(W(6),q("formGroup",s.fb))},dependencies:[w,oe,S,ne,re,B,U]});let i=e;return i})();var mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=V({type:e}),e.\u0275inj=_({imports:[fe.forChild([{path:"",component:Ge},{path:"sign-in",component:ft},{path:"sign-up",component:pt},{path:"**",redirectTo:"/notfound"}]),fe]});let i=e;return i})();var Pi=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=V({type:e}),e.\u0275inj=_({imports:[Se,mt,Pe,ct]});let i=e;return i})();export{Pi as AuthModule};
