(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,n){e.exports=n(223)},181:function(e,t){},183:function(e,t){},201:function(e,t,n){},223:function(e,t,n){"use strict";n.r(t);n(114),n(146);var s=n(0),r=n.n(s),a=n(111),o=n.n(a),c=n(29),i=n(38),u=n(39),l=n(11),p=n(40),f=n(41),d=n(17),g=n(12),h=n.n(g),m=n(28),v=(n(201),n(112)),w=n(70),b={given_answers:[],step:0,history:[]},E={given_answers:[],step:1},j=function(e,t){var n=e.calcScore(t.given_answers),s=Object(c.a)({},t,{score:n});if(e.isDebugging()){for(var r in console.group("historyRecord"),s)console.log(r,s[r]);console.groupEnd("historyRecord")}e.setState({history:[].concat(Object(w.a)(e.state.history),[s])})},y=function(e){var t=Object(w.a)(e.state.history);t.pop();var n=(t=t.length?t:E)[t.length-1];if(e.isDebugging()){for(var s in console.group("historyGoBack"),n)console.log(s,n[s]);console.groupEnd("historyGoBack")}n.score;var r=Object(v.a)(n,["score"]);e.setState(Object(c.a)({},{history:t},r))},k=function(e){return"/api/".concat(e)},_=function(e,t,n,s){if("undefined"!==typeof _sz)return"function"===typeof _sz.push&&(_sz.push(["event",t,n,s]),window.console.log("Siteimprove: ".concat(s))),e};function S(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,s=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return Object(f.a)(this,n)}}var O=function(e){Object(p.a)(n,e);var t=S(n);function n(e){var s;Object(i.a)(this,n),(s=t.call(this,e)).componentDidMount=function(){_(null,"danmark testen","Load Age step","User continued to age step")},s.handleChange=function(e){s.setState({age:parseInt(e.target.value),showMessage:!1})},s.handleNext=function(e){var t=s.state.age;if(t<16||t>59)return s.setState({showMessage:!0}),void _(null,"danmark testen","Age input error","User gets an error on enter age step");var n=Object(m.find)(s.state.intervals,function(e){return t>=e.from&&t<=e.to});s.props.nextStep(n.id,s.state.answer_ids)};var r=[];e.answers.forEach(function(e){var t=e.text.split("-");r.push({from:t[0],to:t[1],id:e.answer_id})});var a=e.answers.map(function(e){return e.answer_id});return s.state={age:"",intervals:r,answer_ids:a,showMessage:!1},s}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state.showMessage?"next disabled":"next";return r.a.createElement("div",{className:"age-step"},r.a.createElement("label",{htmlFor:"age"},"Indtast alder:"),r.a.createElement("input",{name:"age",type:"number",value:this.state.age,onChange:this.handleChange}),r.a.createElement("button",{className:e,onClick:this.handleNext},"N\xe6ste"),this.state.showMessage&&this.props.message&&r.a.createElement("div",{className:"message"},h()(this.props.message)))}}]),n}(s.Component);function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,s=Object(d.a)(e);if(t){var r=Object(d.a)(this).constructor;n=Reflect.construct(s,arguments,r)}else n=s.apply(this,arguments);return Object(f.a)(this,n)}}var C=n(205),q=function(e){var t=r.a.Children.map(e.children,function(e){return e.props.className?r.a.cloneElement(e,{className:e.props.className+" fade-in"}):e});return r.a.createElement("div",null,t)};function x(e){return r.a.createElement(q,e,r.a.createElement("p",null,"Henter data..."))}function R(e){return r.a.createElement(q,e,r.a.createElement("div",{className:"test-wrapper--intro"},r.a.createElement("div",{className:"test-wrapper--intro-illustration"}),h()(e.intro),r.a.createElement("button",{onClick:e.start},"Start testen")))}function A(e){var t=e.step,n=e.info,s=e.onClick,a=e.answered,o=a.length>0?a[0]:null,c=Object(m.filter)(n.answers,function(e){return void 0===e.age||null===e.age||Object(m.includes)(e.age,o)},o),i=c.map(function(e){return e.answer_id});return r.a.createElement("div",{className:"test-wrapper--step"},r.a.createElement("h2",null,n.question),n.text&&h()(n.text),1===t&&r.a.createElement(O,{answers:n.answers,nextStep:s,message:n.message}),t>1&&c.map(function(e){var t;return a.includes(e.answer_id)&&(t="active"),r.a.createElement("div",{key:e.answer_id},r.a.createElement("button",{className:t,onClick:s.bind(null,e.answer_id,i)},e.text))}),n.extra&&h()(n.extra))}function D(e){var t=e.step,n=e.question,s=e.given_answers,a=e.recordAnswerAndStep;return r.a.createElement(q,e,r.a.createElement("div",{className:"Question"},r.a.createElement(A,{step:t,info:n,onClick:function(e,t){a(e,t)},answered:s})))}function M(e){var t=e.result,n="result result__group--".concat(t.group);return _(null,"danmark testen","Load resultpage","User loads resultpage for group: ".concat(t.group)),r.a.createElement(q,e,r.a.createElement("div",{className:"test-wrapper--result"},r.a.createElement("div",{className:n},h()(t.html),r.a.createElement("a",{className:"result__link",href:"/grupper#tabs-".concat(t.readmore),onClick:function(){return _(null,"danmark testen","Click read more","User clicked read more from resultpage for group: ".concat(t.group))}},"L\xe6s mere om grupperne"),r.a.createElement("a",{className:"result__link result__link--signup",href:"/indmeldelse",onClick:function(){return _(null,"danmark testen","Click sign up","User clicked sign up from resultpage for group: ".concat(t.group))}},"Meld dig ind"))))}function z(e){for(var t=[],n=0;n<e.count;++n)t[n]="";for(var s=0;s<e.step-1;++s)t[s]+="seen ";return t[e.step-1]+="active ",t[e.count-1]+="final ",r.a.createElement("ul",{className:"test-wrapper--status"},t.map(function(e,t){return r.a.createElement("li",{key:t,className:e},r.a.createElement("i",null))}))}var B=function(e){Object(p.a)(n,e);var t=N(n);function n(e){var s;return Object(i.a)(this,n),(s=t.call(this,e)).startTest=function(){s.setState(function(){return{step:1}}),j(Object(l.a)(s),E)},s.recordAnswerAndStep=function(e,t){var n=s.state.given_answers.filter(function(e){return!t.includes(e)});n.push(e);var r={given_answers:n};if(s.calcScore(n)<0)return r.step=s.state.count,j(Object(l.a)(s),{step:r.step,given_answers:r.given_answers}),void s.setState(r);var a=0,o=s.state.step+1;for(o>=s.state.count&&(a=s.state.count);!a&&o<s.state.count;){var c=s.state.json.questions[o-1],i=c.depends||[];i.length?function(){var e=0;i.forEach(function(t){n.forEach(function(n){t===n&&++e})}),0<e&&(c.operator&&"or"===c.operator&&(a=o),e===i.length&&(a=o))}():a=o,o++}(!a||a>=s.state.count)&&(a=s.state.count),r.step=a,j(Object(l.a)(s),{step:r.step,given_answers:r.given_answers}),s.setState(r)},s.findScores=function(e,t,n){for(var s=0;s<t.length;++s){var r=t[s];e[r.answer_id]=Array.isArray(r.score)?r.score[n]:r.score}return e},s.calcScore=function(e){if(!s.state.json)return 0;for(var t=e||s.state.given_answers,n=s.state.json.questions,r=[],a=t[0]||0,o=0;o<n.length;++o){var c=n[o];s.findScores(r,c.answers,a),c.sub&&c.sub.forEach(function(e){s.findScores(r,e.answers,a)})}return t.reduce(function(e,t){return e+r[t]},0)},s.getResult=function(){for(var e=s.calcScore(),t=s.state.json.results,n=0;n<t.length;++n){var r=t[n];if(r.up_to&&e<r.up_to||r.in&&r.in.includes(e)||!r.in&&!r.up_to)return r}return{}},s.goBack=function(){return y(Object(l.a)(s))},s.isDebugging=function(){return void 0!==s.state.json&&s.state.json.debug},e.json?s.state=Object(c.a)({},b,{steps:e.json.questions[e.json.questions.length-1].step+1,count:e.json.questions.length+1,json:e.json}):(s.state=b,C.get(k(s.props.quiz)).then(function(e){var t=e.data;s.setState(function(){return{steps:t.questions[t.questions.length-1].step+1,count:t.questions.length+1,json:t}})}).catch(function(e){console.warn&&console.warn(e)})),s}return Object(u.a)(n,[{key:"render",value:function(){var e=0;return this.state.step&&(e=this.state.step>=this.state.count?this.state.steps:this.state.json.questions[this.state.step-1].step),this.isDebugging()&&(console.group("Current state"),console.log("History",this.state.history),console.log("Current score",this.calcScore()),console.log("State",this.state),console.groupEnd("Current state")),r.a.createElement("div",{className:"test-wrapper"},1<this.state.step&&r.a.createElement("div",{className:"button-back",onClick:this.goBack},"Tilbage"),r.a.createElement("div",{className:"test-wrapper-body"},0===this.state.step&&!this.state.json&&r.a.createElement(x,{key:"loading"}),0===this.state.step&&this.state.json&&r.a.createElement(R,{key:"testintro",intro:this.state.json.intro,start:this.startTest}),0<this.state.step&&this.state.step>=this.state.count&&r.a.createElement(M,{key:"result",result:this.getResult()}),0<this.state.step&&this.state.step<this.state.count&&r.a.createElement(D,{step:this.state.step,key:"question"+this.state.step,question:this.state.json.questions[this.state.step-1],given_answers:this.state.given_answers,recordAnswerAndStep:this.recordAnswerAndStep}),0<this.state.step&&r.a.createElement(z,{key:"status",step:e,count:this.state.steps})))}}]),n}(s.Component);o.a.render(r.a.createElement(B,{quiz:"danmark-testen"}),document.getElementById("danmark-testen"))}},[[113,2,1]]]);
//# sourceMappingURL=main.b1a4ecdf.chunk.js.map