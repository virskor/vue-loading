webpackJsonp([1],{HQhN:function(t,e){},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("7+uW"),n={props:{background:String,position:String,text:String,show:Boolean,index:Number,size:Number,float:String},data:function(){return{showLoading:!1}},computed:{getBackgroundColor:function(){return this.background?this.background:"rgba(0, 0, 0, .75)"},getIndex:function(){return this.index?this.index:9999},display:function(){return this.showLoading?"block":"none"}},render:function(t){return t("div",{class:["vue-loading"],style:{display:this.display,background:this.getBackgroundColor,"z-index":this.getIndex}},[t("div",{class:"position-"+(this.position?this.position:"center")},[t("div",{class:["loader"],style:{height:(this.size?this.size:4)+"rem",width:(this.size?this.size:4)+"rem"}}),this.text?t("div",{class:["text"],style:{"padding-top":(this.size?this.size/2:2)+"rem","padding-left":(this.size?this.size/2:2)+"rem"}},this.text):null]),t("div",{class:["slot"]},this.$slots.default)])},watch:{show:{handler:function(t){this.showLoading=Boolean(t)},deep:!0}}},s=(o("atu5"),{name:"Demo",data:function(){return{show:!1,position:"center",text:"正在载入数据...",size:4,positions:["top","bottom","center"]}},methods:{showLoading:function(){var t=this;this.show=!0,setTimeout(function(e){t.show=!1},3e3)}},components:{loading:n}}),r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{staticClass:"demo"},[t._m(0),t._v(" "),o("button",{staticClass:"btn btn-lg btn-primary",on:{click:t.showLoading}},[t._v("Open Loading")]),t._v(" "),o("loading",{attrs:{position:t.position,size:t.size,text:t.text,show:t.show}}),t._v(" "),o("div",{staticClass:"options"},[o("p",[t._v("select a position to show")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.position,expression:"position"}],staticClass:"form-control",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.position=e.target.multiple?o:o[0]}}},t._l(t.positions,function(e,i){return o("option",{key:i,domProps:{value:e}},[t._v(t._s(e))])}),0)]),t._v(" "),o("div",{staticClass:"options"},[o("p",[t._v("Alert script to your customer:")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"form-control",domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})]),t._v(" "),o("div",{staticClass:"options"},[o("p",[t._v("Custom your size(2-5 are recommended):")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.size,expression:"size"}],staticClass:"form-control",domProps:{value:t.size},on:{input:function(e){e.target.composing||(t.size=e.target.value)}}})])],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Simple loading component for Vue.js")]),t._v(" "),o("p",[t._v("Make a good user experience by add a loading component")]),t._v(" "),o("div",[o("p",[o("b",[t._v("background[String]")]),t._v(" Background can be a string like #000000 or rgba(0, 0, 0, .32)")]),t._v(" "),o("p",[o("b",[t._v("position[String]")]),t._v(" You can select a position to show your loader below")]),t._v(" "),o("p",[o("b",[t._v("text[String]")]),t._v(" Text strings that you want to tell your user")]),t._v(" "),o("p",[o("b",[t._v("show[Boolean]")]),t._v(" Show it or not")]),t._v(" "),o("p",[o("b",[t._v("index[Number]")]),t._v(" Like css stylesheet property z-index, 9999 by default")]),t._v(" "),o("p",[o("b",[t._v("size[Number]")]),t._v(" 2-5 are recommended")])])])}]};
/**
 * @author virskor@gmail.com
 * @license MIT
 */var a=o("VU/8")(s,r,!1,function(t){o("HQhN")},null,null).exports;i.a.config.productionTip=!1,new i.a({el:"#app",components:{Demo:a},template:"<Demo/>"})},atu5:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bd7c6e67661def5448c3.js.map