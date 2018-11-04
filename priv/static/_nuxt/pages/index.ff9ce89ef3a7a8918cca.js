webpackJsonp([0],{"+wlP":function(t,n,e){"use strict";var o=e("jNEf"),a=e("yYp2"),i=!1;var s=function(t){i||e("6xKk")},r=e("K60R")(o.a,a.a,!1,s,null,null);r.options.__file="components/LangArea.vue",n.a=r.exports},"/TYz":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("uOZW"),a=e("NN50"),i=!1;var s=function(t){i||e("F34q")},r=e("K60R")(o.a,a.a,!1,s,null,null);r.options.__file="pages/index.vue",n.default=r.exports},"0w5y":function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.lang {\n  margin: 10px 20px;\n}\n.transparent-area {\n  font-size: 20px;\n}\n",""])},"1cz+":function(t,n,e){var o=e("FzF+");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("b9116d3c",o,!1,{sourceMap:!1})},"29yY":function(t,n,e){"use strict";var o=e("SEXg"),a=e("M+19"),i=!1;var s=function(t){i||e("XpSz")},r=e("K60R")(o.a,a.a,!1,s,null,null);r.options.__file="components/LanguageInput.vue",n.a=r.exports},"6xKk":function(t,n,e){var o=e("U4DT");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("3f0d68bd",o,!1,{sourceMap:!1})},"8vjJ":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"pronounce-box"},[e("span",{staticClass:"pr-text"}),t._v(t._s(t.pronunciation)),e("div",{staticClass:"uk-flex uk-flex-right uk-flex-middle pronounce-buttoms"},[e("div",{staticClass:"label"},[t._v("pronunciation")]),e("div",{staticClass:"uk-button-group"},[e("button",{staticClass:"uk-button ukbutton-small pronounce-buttom",class:{activo:"IPA"==t.pronunciationType},attrs:{active:"IPA"==t.pronunciationType},on:{click:function(n){t.updatePronunciation("IPA")}}},[t._v("IPA")]),e("button",{staticClass:"uk-button ukbutton-small pronounce-buttom",class:{activo:"simple"==t.pronunciationType},attrs:{active:"simple"==t.pronunciationType},on:{click:function(n){t.updatePronunciation("simple")}}},[t._v("simple")])])])])])};o._withStripped=!0;var a={render:o,staticRenderFns:[]};n.a=a},"CaT/":function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.container {\n  color: #fff;\n  width: 80%;\n  margin: auto;\n  margin-top: 220px;\n}\n#logo {\n  width: 186px;\n  position: absolute;\n  left: 45%;\n  top: 18px;\n}\n#quote {\n  color: rgba(255, 255, 255, .612);\n  text-align: center;\n  padding-bottom: 45px;\n  font-size: 14px;\n}\n.transparent-form {\n  background: rgba(255, 255, 255, 0) !important;\n  color: #fff;\n}\n.transparent-form:focus {\n  outline: none;\n  background-color: #fff;\n  color: #fff;\n  border-color: #55d6fd;\n}\n.leyenda {\n  color: #ffa726;\n  font-size: 13px;\n}\n.transparent-form option {\n  color: #55d6fd;\n  background-color: #fff;\n}\n#footer {\n  margin-top: 70px;\n  text-align: center;\n}\n#footer .twitter-share {\n  margin-left: 15px;\n  color: #1f3149;\n  background-color: #ffa726;\n}\n",""])},F34q:function(t,n,e){var o=e("CaT/");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("5cf0aa7f",o,!1,{sourceMap:!1})},"FzF+":function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.pronounce-box {\n  background: #ffa726;\n  color: #3c3014;\n  font-size: 14px;\n  padding-top: 8px;\n}\n.pronounce-box .pr-text {\n  padding: 0 4px 5px 4px;\n}\n.pronounce-buttoms {\n  font-size: 10px;\n}\n.pronounce-buttoms .label {\n  margin-right: 12px;\n  padding: 0 4px 5px 4px;\n}\n.pronounce-buttoms .pronounce-buttom {\n  background-color: #ad7017;\n  font-size: 13px;\n  color: #fff;\n  border: 1px solid transparent;\n}\n.pronounce-buttoms .pronounce-buttom:hover {\n  background-color: #563e1a;\n}\n.pronounce-buttoms .pronounce-buttom:active {\n  background-color: #563e1a;\n}\n.fade-enter-active,\n.fade-leave-active {\n  -webkit-transition: all 0.25s ease-out;\n  transition: all 0.25s ease-out;\n}\n.fade-enter-to .fade-leave {\n  -webkit-transform: rotateX(0deg);\n          transform: rotateX(0deg);\n}\n.fade-enter,\n.fade-leave-to {\n  opacity: 0;\n  -webkit-transform: rotateX(45deg);\n          transform: rotateX(45deg);\n}\n",""])},IpzQ:function(t,n,e){"use strict";var o=e("Dd8w"),a=e.n(o),i=e("ye7G");n.a={computed:a()({},Object(i.b)(["pronunciationType"]),{pronunciation:function(){return this.$store.getters.pronText}}),methods:{updatePronunciation:function(t){this.$store.commit("updateProununciation",{to:t})}}}},"M+19":function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"uk-flex uk-flex-centered"},[e("p",{staticClass:"lang"},[t._v("LANG: ")]),e("div",{staticClass:"uk-form-control language-input"},[e("select",{staticClass:"uk-select transparent-form",on:{change:t.changeLang}},t._l(t.langs,function(n){return e("option",{domProps:{selected:n.text==t.selectedLang,value:n.value}},[t._v(t._s(n.text))])}))]),e("p")])};o._withStripped=!0;var a={render:o,staticRenderFns:[]};n.a=a},NN50:function(t,n,e){"use strict";var o=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"content"},[n("div",{staticClass:"container"},[n("img",{attrs:{src:"/logo.png",id:"logo"}}),n("blockquote",{attrs:{id:"quote"}},[this._v('"temporary available site showing a proof of concept about a translator with pronunciator and keyboard shortcuts" '),n("nuxt-link",{attrs:{to:"/about"}},[this._v("more info")])],1),n("vk-grid",[n("LangArea",{attrs:{side:"from"}}),n("LangArea",{attrs:{side:"to"}})],1),this._m(0),n("div",{attrs:{id:"footer"}},[this._v("if you like the ideas of this translator please give us a tweet"),n("vk-icon-button",{staticClass:"twitter-share",attrs:{icon:"twitter",href:"https://twitter.com/intent/tweet?text=Hi%20%40google%20%40DeepLcom%20please%20include%20IPA%20pronunciation%20and%20shortcuts%20in%20your%20translator%20like%20www.sdsd.com"}})],1)],1)])};o._withStripped=!0;var a={render:o,staticRenderFns:[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"leyenda"},[n("div",[this._v("shortcuts:")]),n("span",{staticClass:"uk-display-block"}),this._v("press tab for toggle between text areas (you can type in both text areas!!!)"),n("span",{staticClass:"uk-display-block"}),this._v("press ctrl+space for clear text area")])}]};n.a=a},SEXg:function(t,n,e){"use strict";n.a={props:{selectedLang:{type:String},side:{type:String}},data:function(){return{langs:["EN","ES","FR","DE","IT","NL","PL"].map(function(t){return{text:t,value:t}})}},methods:{changeLang:function(t){this.$store.dispatch("changeLang",{side:this.side,lang:t.target.value}),this.$store.dispatch("translate",{side:this.side})}}}},U4DT:function(t,n,e){(t.exports=e("FZ+f")(!1)).push([t.i,"\n.activo {\n  background-color: #563e1a !important;\n}\n.hidden {\n  display: none;\n}\n",""])},XpSz:function(t,n,e){var o=e("0w5y");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("61603b5e",o,!1,{sourceMap:!1})},jNEf:function(t,n,e){"use strict";var o=e("29yY"),a=e("y1Hp"),i=e("M4fF");n.a={components:{LanguageInput:o.a,PronouncingBox:a.a},props:{side:{type:String,required:!0}},data:function(){return{}},mounted:function(){window.mystate=this.$store,window.ventana=this},created:function(){var t=this;this.sendWS=i.debounce(function(){return t.$store.dispatch("translate")},500,{leading:!0,trailing:!0})},computed:{selectedLang:function(){return this.$store.state[this.side]},texto:{get:function(){return this.$store.state[this.side+"Text"]},set:function(t){this.$store.dispatch("updateText",{text:t}),t.length>4&&this.sendWS()}},activeSide:function(){return console.log("cambiado lado activo"),this.$store.state.activeSide}},watch:{activeSide:function(t,n){var e=this;console.log("cambiando focus"),t==this.side?this.$nextTick(function(){return e.$refs.fromArea.focus()}):this.$nextTick(function(){return e.$refs.fromArea.blur()})}},methods:{changeFocus:function(){this.$store.commit("toggleActiveSide")},forceFocus:function(){this.$store.commit("updateActiveSide",{side:this.side})},keymonitor:function(t){t.preventDefault(),this.$store.commit("toggleActiveSide"),console.log(t.key)},clearText:function(){var t=this;this.$nextTick(function(){return t.texto=""})}}}},uOZW:function(t,n,e){"use strict";var o=e("+wlP"),a=e("9VG3");n.a={components:{LangArea:o.a},mounted:function(){this.$nextTick(function(){var t=Object(a.a)(),n=t.from,e=t.to;this.$store.dispatch("changeLang",{side:"from",lang:n}),this.$store.dispatch("changeLang",{side:"to",lang:e})})}}},y1Hp:function(t,n,e){"use strict";var o=e("IpzQ"),a=e("8vjJ"),i=!1;var s=function(t){i||e("1cz+")},r=e("K60R")(o.a,a.a,!1,s,null,null);r.options.__file="components/PronouncingBox.vue",n.a=r.exports},yYp2:function(t,n,e){"use strict";var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"uk-width-1-2@m"},[e("div",{staticClass:"uk-flex uk-flex-center"},[e("LanguageInput",{attrs:{selectedLang:t.selectedLang,side:t.side}})],1),e("div",{staticClass:"uk-width-1-1 uk-margin-top"},[e("div",{staticClass:"uk-margin"},[e("button",{directives:[{name:"shortkey",rawName:"v-shortkey",value:["ctrl","space"],expression:"['ctrl', 'space']"}],staticClass:"hidden",on:{shortkey:t.clearText,click:t.clearText}},[t._v("clear text")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.texto,expression:"texto"}],ref:"fromArea",staticClass:"uk-textarea transparent-form transparent-area",attrs:{rows:"5"},domProps:{value:t.texto},on:{focus:function(n){t.forceFocus()},keydown:function(n){return"button"in n||!t._k(n.keyCode,"tab",9,n.key,"Tab")?t.keymonitor(n):null},input:function(n){n.target.composing||(t.texto=n.target.value)}}}),e("div",["EN"==t.selectedLang?e("PronouncingBox"):t._e()],1)])])])};o._withStripped=!0;var a={render:o,staticRenderFns:[]};n.a=a}});