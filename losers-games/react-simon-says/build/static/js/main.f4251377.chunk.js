(this["webpackJsonpreact-simon"]=this["webpackJsonpreact-simon"]||[]).push([[0],{50:function(e,n,t){e.exports=t.p+"static/media/blue.d6f8a4c1.mp3"},51:function(e,n,t){e.exports=t.p+"static/media/green.3c8ca947.mp3"},52:function(e,n,t){e.exports=t.p+"static/media/red.8d481077.mp3"},53:function(e,n,t){e.exports=t.p+"static/media/yellow.3ee58245.mp3"},58:function(e,n,t){e.exports=t(78)},67:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),c=t(23),o=t.n(c),i=t(14),u=t(28),l=t(2),s=(t(67),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function d(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var f=t(16),p=t.n(f),g=t(21),m=t(57),b=t(13),h=t(36),v=function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise((function(t){return e=setTimeout((function(){t()}),n)})).catch((function(n){clearTimeout(e)})).then((function(){clearTimeout(e)})).finally((function(){clearTimeout(e)}))},O={red:"#FF4136",blue:"#0074D9",green:"#2ECC40",yellow:"#FFDC00",white:"white",dark:"#1B1A1A"},x=["green","red","yellow","blue"],j=function(){return x[Math.floor(Math.random()*x.length)]};function E(e){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:e,payload:n}}}var w=E("START_GAME"),y=E("NEXT_LEVEL"),k=E("GUESS_COLOR"),S=E("START_SONG"),_=E("FINISH_SONG"),T=E("LIGHTEN_PAD"),C=E("LIGHTEN_OFF_PAD"),N={startSong:S,startGame:function(e){return w({next:j()})},finishSong:_,lightenPad:T,lightenOffPad:C,nextLevel:function(e){return y({next:j()})},guessColor:k,guess:function(e){var n=e.succeeded,t=e.id;return function(){var e=Object(g.a)(p.a.mark((function e(r,a){var c,o,i,u,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r(k({succeeded:n,id:t})),r(S()),r(T({id:t})),e.next=6,v(100);case 6:return r(C()),e.next=9,v(100);case 9:return r(_()),c=a(),o=c.match,i=o.all,u=o.guessed,l=i.length===u.length&&n,e.abrupt("return",new Promise((function(e){return e({done:l})})));case 16:e.prev=16,e.t0=e.catch(0),console.error(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(n,t){return e.apply(this,arguments)}}()},sing:function(e){return function(){var e=Object(g.a)(p.a.mark((function e(n,t){var r,a,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,n(S()),r=t(),a=r.match,c=0;case 4:if(!(c<=a.all.length-1)){e.next=15;break}return o=a.all[c],n(T({id:o})),e.next=9,v(200);case 9:return n(C()),e.next=12,v(200);case 12:c++,e.next=4;break;case 15:n(_()),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(n,t){return e.apply(this,arguments)}}()}},G=t(5),P=t(4);function L(){var e=Object(G.a)(["\n  ","\n"]);return L=function(){return e},e}function A(){var e=Object(G.a)(["\n  ","\n"]);return A=function(){return e},e}var R="\n  font-size: 2em;\n  margin: 1em;\n  padding: 0.25em 1em;\n  border: 2px solid white;\n  color: white;\n  background-color: transparent;\n  font-family: 'Bungee', sans-serif;\n  border-radius: 3px;\n  cursor: pointer;\n  transition: 0.3s;\n  outline: none;\n  text-decoration: none;\n\n  &:hover {\n    transform: scale(1.02);\n  }\n",F=P.default.button(A(),R),I=Object(P.default)(u.b)(L(),R),B=t(9);function D(){var e=Object(G.a)(["\n  position: absolute;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 4;\n  text-align: center;\n  background-color: rgba(0, 0, 0, 0.9);\n  height: 250px;\n"]);return D=function(){return e},e}var H=Object(P.default)(B.Box)(D());function M(){var e=Object(G.a)(["\n  pointer-events: ",";\n  position: relative;\n"]);return M=function(){return e},e}var z=P.default.div(M(),(function(e){return e.disbledPointer?"none":"initial"}));function U(){var e=Object(G.a)(["\n  transition: 0.7s;\n  filter: grayscale(100%);\n  ","\n"]);return U=function(){return e},e}var X=P.default.div(U(),(function(e){return e.disabled?"\n    filter: none;\n  ":""})),V=t(49),W=t.n(V);function J(){var e=Object(G.a)(["\n  width: 200px;\n  height: 200px;\n  box-sizing: border-box;\n  background-color: ",";\n  cursor: pointer;\n  animation: none;\n  transition: 0.2s;\n  -webkit-tap-highlight-color: transparent;\n  ","\n\n  @media (max-width: 600px) {\n    width: 170px;\n    height: 170px;\n  }\n\n  &:active {\n    background-color: "," ",";\n  }\n\n  &:hover {\n    ","\n    box-shadow: 0 0 15px rgba(0, 0, 0, .8);\n  }\n\n  &.top-left {\n    border-radius: 320px 20px 20px 20px;\n  }\n\n  &.top-right {\n    border-radius: 20px 320px 20px 20px;\n  }\n\n  &.bottom-left {\n    border-radius: 20px 20px 20px 320px;\n  }\n\n  &.bottom-right {\n    border-radius: 20px 20px 320px 20px;\n  }\n"]);return J=function(){return e},e}var Y=function(e){return W()(e).lighten(.333).hex()},$=function(e){return"\n  background-color: ".concat(Y(e.color)," !important;\n  animation: foo;\n  ").concat("\n  transform: scale(1.02);\n","\n")},q=Object(P.default)(B.Box)(J(),(function(e){return e.color}),(function(e){return e.active?$(e):""}),(function(e){var n=e.color;return Y(n)}),$,"\n  transform: scale(1.02);\n"),K={GreenPad:function(e){var n=Object.assign({},e);return a.a.createElement(q,Object.assign({m:1,color:O.green,className:"top-left"},n))},RedPad:function(e){var n=Object.assign({},e);return a.a.createElement(q,Object.assign({m:1,color:O.red,className:"top-right"},n))},YellowPad:function(e){var n=Object.assign({},e);return a.a.createElement(q,Object.assign({m:1,color:O.yellow,className:"bottom-left"},n))},BluePad:function(e){var n=Object.assign({},e);return a.a.createElement(q,Object.assign({m:1,color:O.blue,className:"bottom-right"},n))}},Q=function(e){var n=e.pad,t=e.onClick,r=n.component,c=K[r];return a.a.createElement(c,Object.assign({},n,{onClick:t}))};function Z(){var e=Object(G.a)(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  background-color: ",";\n  font-size: ",";\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  line-height: 120px;\n  text-align: center;\n  z-index: 2;\n  padding: 5px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, .8);\n  text-align: center;\n"]);return Z=function(){return e},e}var ee=P.default.div(Z(),O.dark,(function(e){return e.length<=2?"62px":"45px"})),ne=t(29),te=t(30),re=t(32),ae=t(31),ce=t(50),oe=t.n(ce),ie=t(51),ue=t.n(ie),le=t(52),se=t.n(le),de=t(53),fe=t.n(de),pe={blue:oe.a,green:ue.a,red:se.a,yellow:fe.a},ge=function(e){Object(re.a)(t,e);var n=Object(ae.a)(t);function t(){return Object(ne.a)(this,t),n.apply(this,arguments)}return Object(te.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.active,n=this.refs[e];n&&(n.currentTime=0,n.play())}},{key:"render",value:function(){return a.a.createElement("div",null,Object.keys(pe).map((function(e,n){return a.a.createElement("audio",{ref:e,preload:"auto",src:pe[e],key:n})})))}}]),t}(r.Component),me=Object(i.b)((function(e){var n=e.pads,t=(e.game,n.find((function(e){return e.active})));return{active:t?t.id:null}}))(ge),be=t(3),he=t(56);function ve(){var e=Object(G.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n"]);return ve=function(){return e},e}var Oe=Object(P.default)(B.Box)(ve()),xe=function(e){Object(re.a)(t,e);var n=Object(ae.a)(t);function t(){return Object(ne.a)(this,t),n.apply(this,arguments)}return Object(te.a)(t,[{key:"render",value:function(){var e=this.props,n=e.highscore,t=e.style,r=e.children;return a.a.createElement(B.Flex,{align:"center",justify:"center",style:Object(be.a)({width:"100%",height:"100%"},t)},a.a.createElement(Oe,{p:2,justify:"space-between",flex:!0},a.a.createElement(B.Box,null,"HIGH SCORE: ",n," ",a.a.createElement("br",null)),a.a.createElement(B.Box,null,a.a.createElement("a",{href:"https://github.com/weslleyaraujo/react-simon/",target:"_blank"},a.a.createElement(he.a,{size:40,color:"white"})))),a.a.createElement(B.Box,{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"100%",height:"100%"},r))}}]),t}(r.Component),je=Object(i.b)((function(e){return e.game}))(xe);var Ee=Object(i.b)(null,(function(e){return{actions:Object(b.b)(N,e)}}))((function(e){var n=e.actions,t=Object(i.d)((function(e){return e}),i.c),c=t.game,o=c.gameOver,u=c.score,l=c.singing,s=c.highscore,d=t.match,f=t.pads,b=Object(r.useState)(!1),O=Object(m.a)(b,2),x=O[0],j=O[1],E=Object(r.useCallback)((function(){n.startGame(),v(200).then((function(){return n.sing()}))}),[n]);Object(r.useEffect)((function(){E()}),[]);var w=Object(r.useCallback)((function(e){var t=e.id,r=d.guessed.length,a=d.all[r]===t;o||(window.navigator.vibrate&&window.navigator.vibrate(10),n.guess({id:t,succeeded:a}).then(function(){var e=Object(g.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.done){e.next=6;break}return n.nextLevel(),e.next=5,v(500);case 5:n.sing();case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()))}),[n,d]);return Object(r.useEffect)((function(){u>=10&&j(!0)}),[u,j]),a.a.createElement(je,null,x&&a.a.createElement(H,{p:2},a.a.createElement("h4",null,"\u0442\u0435\u043f\u0435\u0440\u044c \u0438\u0434\u0438 \u043d\u0430 3 \u044d\u0442\u0430\u0436, \u043f\u043e\u0442\u043e\u043c \u043f\u0438\u0448\u0438 \u0432 \u0431\u043e\u0442\u0430 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c")),!x&&o&&a.a.createElement(H,{p:2},a.a.createElement("h2",null,"SCORE ",u),a.a.createElement("h3",null,"HIGH SCORE ",s),a.a.createElement(F,{onClick:E},"Try again")),!x&&a.a.createElement(X,{disabled:!o},a.a.createElement(z,{disbledPointer:l||o},a.a.createElement(h.Flex,{align:"center",justify:"center"},f.slice(0,2).map((function(e,n){return a.a.createElement(Q,{key:n,pad:e,onClick:function(){return w({id:e.id})}})}))),a.a.createElement(ee,{length:null===u||void 0===u?void 0:u.toString().length},u),a.a.createElement(h.Flex,{align:"center",justify:"center"},f.slice(2,4).map((function(e,n){return a.a.createElement(Q,{key:n,pad:e,onClick:function(){return w({id:e.id})}})}))))),!x&&a.a.createElement(me,null))})),we=t(33);function ye(){var e=Object(G.a)(["\n  color: #fff;\n  font-size: 5em;\n  text-align: center;\n"]);return ye=function(){return e},e}var ke=P.default.h1(ye()),Se=function(e){var n=e.value;return a.a.createElement(ke,null,function(e){var n=e.colors,t=e.value,r=Object.keys(n),c=r.length-1,o=Object(we.a)(Array(Math.floor(t.length/c))).reduce((function(e,n){return[].concat(Object(we.a)(e),Object(we.a)(r))}),[]).concat(r.slice(0,r.length%c)).map((function(e){return n[e]})).map((function(e,n){return a.a.createElement("span",{key:n,style:{color:e}},t[n])}));return a.a.createElement("span",null,o)}({colors:O,value:n}))},_e=function(){return a.a.createElement(je,null,a.a.createElement(Se,{value:"REACT SIMON"}),a.a.createElement(B.Flex,{justify:"center"},a.a.createElement(I,{to:"/board"},"Play")))},Te=t(54),Ce=t(55),Ne=[{id:"green",component:"GreenPad",active:!1},{id:"red",component:"RedPad",active:!1},{id:"yellow",component:"YellowPad",active:!1},{id:"blue",component:"BluePad",active:!1}];var Ge={singing:!0,gameOver:!1,score:0,highscore:0};var Pe={guessed:[],all:[]};var Le=Object(b.c)({pads:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"LIGHTEN_PAD":return e.map((function(e){return Object(be.a)(Object(be.a)({},e),{},{active:r.id===e.id})}));case"LIGHTEN_OFF_PAD":return e.map((function(e){return Object(be.a)(Object(be.a)({},e),{},{active:!1})}));default:return e}},game:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"START_GAME":return Object(be.a)(Object(be.a)({},e),{},{gameOver:!1,score:0});case"START_SONG":return Object(be.a)(Object(be.a)({},e),{},{singing:!0});case"FINISH_SONG":return Object(be.a)(Object(be.a)({},e),{},{singing:!1});case"NEXT_LEVEL":return Object(be.a)(Object(be.a)({},e),{},{score:e.score+1});case"GUESS_COLOR":return Object(be.a)(Object(be.a)({},e),{},{gameOver:!r.succeeded,highscore:(!r.succeeded&&e.score)>e.highscore?e.score:e.highscore});default:return e}},match:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,n=arguments.length>1?arguments[1]:void 0,t=n.type,r=n.payload;switch(t){case"START_GAME":return{guessed:[],all:[r.next]};case"NEXT_LEVEL":return{guessed:[],all:e.all.concat(r.next)};case"GUESS_COLOR":return Object(be.a)(Object(be.a)({},e),{},{guessed:r.succeeded?e.guessed.concat(r.id):e.guessed});default:return e}},routing:Ce.routerReducer}),Ae=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||b.d)(Object(b.a)(Te.a)),Re=Object(b.e)(Le,{},Ae);o.a.render(a.a.createElement(i.a,{store:Re},a.a.createElement(u.a,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/board"},a.a.createElement(Ee,null)),a.a.createElement(l.a,{path:"/"},a.a.createElement(_e,null))))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL(".",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(".","/service-worker.js");s?function(e){fetch(e).then((function(n){404===n.status||-1===n.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):d(e)}))}}()}},[[58,1,2]]]);
//# sourceMappingURL=main.f4251377.chunk.js.map