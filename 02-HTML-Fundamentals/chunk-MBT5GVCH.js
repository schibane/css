import{j as A}from"./chunk-NKMENMLQ.js";import{n as y}from"./chunk-RIVGTKPS.js";import{h as F}from"./chunk-VM2XDO5R.js";import{Ha as n,O as s,Pa as p,Rb as g,T as u,Tb as v,V as d,X as r,Xa as m,Y as a,_b as I,gb as h,hc as M,jc as D,la as l,qa as f}from"./chunk-VUMUCNWO.js";var N=(()=>{class t{el;ngModel;cd;config;variant="outlined";filled;constructor(i,e,o,c){this.el=i,this.ngModel=e,this.cd=o,this.config=c}ngAfterViewInit(){this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(e){return new(e||t)(n(l),n(F,8),n(g),n(y))};static \u0275dir=a({type:t,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component","p-element"],hostVars:4,hostBindings:function(e,o){e&1&&h("input",function(E){return o.onInput(E)}),e&2&&m("p-filled",o.filled)("p-variant-filled",o.variant==="filled"||o.config.inputStyle()==="filled")},inputs:{variant:"variant"}})}return t})(),b=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=r({type:t});static \u0275inj=s({imports:[M]})}return t})();var O=(()=>{class t{autofocus=!1;focused=!1;platformId=u(f);document=u(I);host=u(l);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){D(this.platformId)&&this.autofocus&&setTimeout(()=>{let i=A.getFocusableElements(this.host?.nativeElement);i.length===0&&this.host.nativeElement.focus(),i.length>0&&i[0].focus(),this.focused=!0})}static \u0275fac=function(e){return new(e||t)};static \u0275dir=a({type:t,selectors:[["","pAutoFocus",""]],hostAttrs:[1,"p-element"],inputs:{autofocus:[d.HasDecoratorInputTransform,"autofocus","autofocus",v]},standalone:!0,features:[p]})}return t})(),V=(()=>{class t{static \u0275fac=function(e){return new(e||t)};static \u0275mod=r({type:t});static \u0275inj=s({})}return t})();export{N as a,b,O as c,V as d};
