(this["webpackJsonpReact-Inspinia"]=this["webpackJsonpReact-Inspinia"]||[]).push([[9,11],{224:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(){return r.a.createElement("div",null,r.a.createElement("strong",null,"Copyright")," Claytones Private Limited \xa9 2020")}},243:function(e,t,a){"use strict";var n=a(21),r={api:{HOST:"https://react-inspinia.free.beeceptor.com",VERSION:"/api/"},auth:{GRANT_TYPE:"password",CLIENT_ID:"client_id",CLIENT_SECRET:"client_secret"}};t.a=Object(n.a)({MAX_ATTACHMENT_SIZE:5e6},r)},244:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.input,a=e.label,n=e.placeholder,c=e.type,o=e.fa,i=e.meta,s=i.touched,l=i.error,u=i.warning;return r.a.createElement("div",null,!!a&&r.a.createElement("label",null,a),r.a.createElement("div",{className:"form-group input-group m-b"},!!o&&r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:o})),r.a.createElement("input",Object.assign({className:"form-control"},t,{placeholder:n,type:c}))),s&&(l&&r.a.createElement("span",{className:"error"}," ",l," ")||u&&r.a.createElement("span",{className:"warn"}," ",u," ")))}},252:function(e,t,a){"use strict";var n=a(10),r=a(11),c=a(13),o=a(12),i=a(14),s=a(0),l=a.n(s),u=a(253),m=function(e){function t(){return Object(n.a)(this,t),Object(c.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(i.a)(t,e),Object(r.a)(t,[{key:"onCheck",value:function(e,t){this.props.input.onChange(t)}},{key:"render",value:function(){return l.a.createElement(u.Checkbox,{name:this.props.input.name,checkboxClass:this.props.checkboxClass,increaseArea:this.props.increaseArea,checked:this.props.input.checked,onChange:this.onCheck.bind(this),cursor:this.props.cursor,label:this.props.label})}}]),t}(s.Component);t.a=m},255:function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return c})),a.d(t,"c",(function(){return o}));var n=function(e){return e?void 0:"Required"},r=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0},c=function(e){return e&&/[^a-zA-Z0-9 ]/i.test(e)?"Only alphanumeric characters":void 0},o=function(e){return e&&!/^(0|[1-9][0-9]{9})$/i.test(e)?"Invalid phone number, must be 10 digits":void 0}},275:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return o}));var n=a(100),r=a.n(n),c=function(e){return function(t){return r()(e).some((function(e){return r.a.get(t,"loading.".concat(e))}))}},o=function(e){return function(t){return r()(e).map((function(e){return r.a.get(t,"error.".concat(e))})).compact().first()||""}}},285:function(e,t,a){"use strict";var n=a(346),r=a.n(n),c=a(347),o=a(10),i=a(11),s=a(348),l=a.n(s),u=a(354),m=a.n(u),p=a(243),d=a(100),b=a(35),f=p.a.api,h=f.HOST,E=f.VERSION,v=function(){function e(){Object(o.a)(this,e)}return Object(i.a)(e,null,[{key:"auth",value:function(){var e=Object(c.a)(r.a.mark((function e(t,a,n){var c,o,i,s,u,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.type,o=n.dispatch,e.prev=1,i=h+E+t,s={headers:{"Content-Type":"application/x-www-form-urlencoded"}},e.next=6,l.a.post(i,m.a.stringify(a),s);case 6:u=e.sent,b.b(u.data),a.remember?b.e(u.data.user):b.d(),o({type:"".concat(c,"_SUCCESS"),payload:u.data}),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),p=(p=(p=Object(d.get)(e.t0,"response.data",null))||Object(d.get)(e.t0,"response"))||e.t0,o({type:"".concat(c,"_FAILURE"),payload:p});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"get",value:function(e,t){var a=h+E+e;return l.a.get(a,t)}},{key:"post",value:function(e,t){var a=h+E+e;return l.a.post(a,t)}}]),e}();function g(e){return function(t){t({type:"".concat("AUTH","_REQUEST")});var a={type:"AUTH",dispatch:t};v.auth("oauth/token",e,a)}}a.d(t,"a",(function(){return g}))},399:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a(11),c=a(13),o=a(12),i=a(14),s=a(21),l=a(2),u=a.n(l),m=a(4),p=a.n(m),d=a(46),b=a(0),f=a.n(b),h=a(100),E=a(19),v=a(15),g=a(18),y=a(228),O=a.n(y),w=(a(48),a(243)),j=a(626),k=a(625),N=a(244),T=a(252),C=a(255),_=Object(k.a)({form:"login_form"})((function(e){var t=e.handleSubmit,a=e.pristine,n=e.submitting,r=e.invalid;return f.a.createElement("form",{onSubmit:t},f.a.createElement("div",null,f.a.createElement(j.a,{className:"form-control",placeholder:"Username",name:"email",type:"text",fa:"fa fa-at",validate:[C.d],component:N.a})),f.a.createElement("div",null,f.a.createElement(j.a,{className:"form-control",placeholder:"******",name:"password",type:"password",fa:"fa fa-key",validate:[C.d],component:N.a})),f.a.createElement("div",{className:"text-left"},f.a.createElement(j.a,{name:"remember",component:T.a,type:"checkbox",checkboxClass:"icheckbox_square-green",increaseArea:"20%",cursor:"pointer",label:"<span className='checkbox-label'> Remember Me </span>"})),f.a.createElement("button",{type:"submit",id:"btnLogin",className:"btn btn-primary block full-width m-b",disabled:a||n||r},"Login"))})),A=a(65),S=a.n(A),x=a(224),I=a(75),R=a(285),H=a(35),L=a(20),D=a(275),U=a(22);O.a.propTypes=Object(s.a)({},O.a.propTypes,{cursor:p.a.string});var G=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(o.a)(t).call(this,e))).login=function(e){var t={grant_type:w.a.auth.GRANT_TYPE,client_id:w.a.auth.CLIENT_ID,client_secret:w.a.auth.CLIENT_SECRET,username:e.email,password:e.password};a.props.login(t)},a.state={},a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){u()(window).bind("load resize",(function(){Object(L.a)(),Object(L.b)()}))}},{key:"render",value:function(){return this.props.loading?f.a.createElement(I.a,null):(this.props.error&&U.toastr.error("Get Hired!",this.props.error),f.a.createElement("div",{className:"gray-bg"},f.a.createElement("div",{className:"middle-box text-center loginscreen animated fadeInDown",style:{paddingBottom:"40px"}},f.a.createElement(v.b,{className:"nav-link",to:""},f.a.createElement("img",{alt:"",className:"img-circle logo",src:S.a})),f.a.createElement("h3",null,"Get Hired!"),f.a.createElement("p",null,"Login in. To see it in action."),f.a.createElement(_,{onSubmit:this.login}),f.a.createElement(v.b,{to:"/activate"},f.a.createElement("small",null,"Forgot Password?")),f.a.createElement("p",{className:"text-muted text-center"},f.a.createElement(v.b,{to:"/register"},"Don't have an account?")),f.a.createElement(v.b,{className:"btn btn-sm btn-white btn-block",to:"/activate"},"Activate Account"),f.a.createElement(v.b,{className:"btn btn-sm btn-white btn-block",to:"/register"},"Register"),f.a.createElement("br",null),f.a.createElement(x.a,null))))}}],[{key:"getDerivedStateFromProps",value:function(e){return!Object(h.isEmpty)(Object(h.get)(e,"user.auth"))&&H.a()&&e.history.push("/app/home"),null}}]),t}(b.Component),M=Object(D.b)(["AUTH"]),P=Object(D.a)(["AUTH"]);t.default=Object(g.g)(Object(d.connect)((function(e){return{user:e.user,loading:M(e),error:P(e)}}),(function(e){return Object(E.b)({login:R.a},e)}))(G))},629:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a(10),c=a(11),o=a(13),i=a(12),s=a(14),l=a(21),u=a(2),m=a.n(u),p=a(4),d=a.n(p),b=a(46),f=a(15),h=a(18),E=a(0),v=a.n(E),g=a(19),y=a(228),O=a.n(y),w=a(20),j=(a(48),a(224)),k=a(285),N=a(243),T=a(275),C=a(626),_=a(625),A=a(244),S=a(100),x=Object(_.a)({form:"lock_form",validate:function(e){var t={};return e.password?e.password.length<3&&(t.password="Must be 3 characters or more"):t.password="Required",t},warn:function(e){var t={};return Object(S.get)(e,"password.length","")>15&&(t.password="Hmm, you have a very strong password ..."),t}})((function(e){var t=e.handleSubmit,a=e.pristine,n=e.submitting,r=e.invalid;return v.a.createElement("form",{onSubmit:t},v.a.createElement("div",null,v.a.createElement(C.a,{className:"form-control",placeholder:"******",name:"password",type:"password",fa:"fa fa-key",component:A.a})),v.a.createElement("button",{type:"submit",className:"btn btn-primary block full-width",disabled:a||n||r},"Unlock"))})),I=a(399),R=a(22);O.a.propTypes=Object(l.a)({},O.a.propTypes,{cursor:d.a.string});var H=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(i.a)(t).call(this,e))).submitForm=function(){},a.login=function(){var e={grant_type:N.a.auth.GRANT_TYPE,client_id:N.a.auth.CLIENT_ID,client_secret:N.a.auth.CLIENT_SECRET,username:a.state.email,password:a.state.password};a.props.login(e)},a.handleChange=function(e){a.setState(Object(n.a)({},e.target.name,e.target.value))},a.state={checked:!1,email:"",password:""},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){m()(window).bind("load resize",(function(){Object(w.a)(),Object(w.b)()}))}},{key:"render",value:function(){return this.props.loading?v.a.createElement(I.default,null):(this.props.error&&R.toastr.error("Get Hired!",this.props.error),v.a.createElement("div",{className:"gray-bg"},v.a.createElement("div",{className:"lock-word animated fadeInDown"},v.a.createElement("span",{className:"first-word"},"LOCKED"),v.a.createElement("span",null,"SCREEN")),v.a.createElement("div",{className:"middle-box text-center lockscreen animated fadeInDown",style:{paddingBottom:"40px"}},v.a.createElement("div",null,v.a.createElement("div",{className:"m-b-md"},v.a.createElement("img",{alt:"image",className:"img-circle circle-border",src:"https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg"})),v.a.createElement("h3",null,"John Smith"),v.a.createElement("p",null,"App was shut down and you need to enter your password to go back to app."),v.a.createElement(x,{onSubmit:this.submitForm})),v.a.createElement(f.b,{to:"/login?refresh=true"},v.a.createElement("small",null,"Not this account?")),v.a.createElement("br",null)," ",v.a.createElement("br",null),v.a.createElement(j.a,null))))}}]),t}(E.Component),L=Object(T.b)(["AUTH"]),D=Object(T.a)(["AUTH"]);t.default=Object(h.g)(Object(b.connect)((function(e){return{user:e.user,loading:L(e),error:D(e)}}),(function(e){return Object(g.b)({login:k.a},e)}))(H))}}]);
//# sourceMappingURL=9.50bcbdec.chunk.js.map