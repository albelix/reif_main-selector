(function(t){function e(e){for(var n,o,l=e[0],c=e[1],s=e[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,s||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={selector:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/front/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var s=0;s<l.length;s++)e(l[s]);var u=c;i.push([1,"chunk-vendors"]),a()})({1:function(t,e,a){t.exports=a("41cd")},"402c":function(t,e,a){"use strict";var n=a("a026"),r=a("f309");n["default"].use(r["a"]),e["a"]=new r["a"]({icons:{iconfont:"mdi"}})},"41cd":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("a026"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",[a("div",[t._v("Пожалуйста выберите уровень риска, соответствующий Вашим предпочтениям. Помните что все графики приблизительны, фактическая цена Вашего портфеля будет всегда разной. ")]),a("div",[a("v-card",{staticClass:"mx-3"},[a("v-card-text",[t._v(" Выбранный уровень риска: "+t._s(t.volatilityValue))])],1)],1),a("v-spacer"),a("div",[a("v-btn",{attrs:{disabled:null===t.volatility},on:{click:t.submit}},[t._v("Выбрать")])],1)],1),a("input",{attrs:{type:"hidden",name:"volatility"},domProps:{value:t.volatilityValue}}),a("v-main",{attrs:{app:""}},[a("v-btn-toggle",{staticClass:"d-flex flex-wrap",attrs:{dense:"","active-class":"aa"},model:{value:t.volatility,callback:function(e){t.volatility=e},expression:"volatility"}},t._l(t.charts,(function(t){return a("small-chart",{key:t.volatility,attrs:{data:t.data}})})),1)],1)],1)},i=[],o=a("1da1"),l=(a("96cf"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-btn",{attrs:{tile:"",height:"100%","active-class":"aa"}},[a("div",[a("v-card",{staticClass:"p-3 m-3"},[a("v-card-text",[a("highcharts",{ref:"priceGraph",staticClass:"hc",attrs:{constructorType:"stockChart",options:t.chartOptions}})],1)],1)],1)])}),c=[],s=(a("d81d"),a("4452")),u=a.n(s),d=a("2ef0"),p=a.n(d),f=p.a.map(window.data,(function(t){return t.data})),v=p.a.min(p.a.flattenDeep(f)),h=p.a.max(p.a.flattenDeep(f)),b={components:{highcharts:s["Chart"]},props:["data"],name:"SmallChart",data:function(){return{chartOptions:{chart:{height:200,width:300,type:"line"},credits:!1,tooltip:{enabled:!1},navigator:{enabled:!1},rangeSelector:{enabled:!1},yAxis:{labels:{enabled:!0},resize:{enabled:!1},max:h,min:v,gridLineColor:"transparent"},xAxis:{visible:!1,labels:{enabled:!1}},scrollbar:{enabled:!1},plotOptions:{series:{animation:!1,lineWidth:1,states:{hover:{enabled:!1}}}},series:[{data:this.data}]}}},mounted:function(){console.debug("ohmygod",this.data)},methods:{}},m=b,y=(a("61d0"),a("2877")),g=a("6544"),w=a.n(g),x=a("8336"),O=a("b0af"),_=a("99d9"),V=Object(y["a"])(m,l,c,!1,null,"7c84e7c3",null),C=V.exports;w()(V,{VBtn:x["a"],VCard:O["a"],VCardText:_["b"]});var j={name:"SelectApp",components:{SmallChart:C},data:function(){return{charts:window.data,volatility:null}},computed:{volatilityValue:function(){if(null!==this.volatility)return window.data[this.volatility].volatility}},watch:{},mounted:function(){return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},methods:{submit:function(){document.getElementById("form").submit()}}},S=j,k=(a("babc"),a("7496")),P=a("40dc"),T=a("a609"),A=a("f6c4"),B=a("2fa4"),M=Object(y["a"])(S,r,i,!1,null,null,null),E=M.exports;w()(M,{VApp:k["a"],VAppBar:P["a"],VBtn:x["a"],VBtnToggle:T["a"],VCard:O["a"],VCardText:_["b"],VMain:A["a"],VSpacer:B["a"]});var $=a("402c"),D=a("ea7f"),J=a.n(D),R=a("37d8"),z=a.n(R);a("bf40");z()(J.a),n["default"].use(u.a),n["default"].config.productionTip=!1,new n["default"]({vuetify:$["a"],render:function(t){return t(E)}}).$mount("#app")},"565f":function(t,e,a){},"61d0":function(t,e,a){"use strict";a("565f")},b679:function(t,e,a){},babc:function(t,e,a){"use strict";a("b679")}});