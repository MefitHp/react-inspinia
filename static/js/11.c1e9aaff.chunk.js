(this["webpackJsonpReact-Inspinia"]=this["webpackJsonpReact-Inspinia"]||[]).push([[11],{224:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(){return r.a.createElement("div",null,r.a.createElement("strong",null,"Copyright")," Claytones Private Limited \xa9 2020")}},243:function(e,t,n){"use strict";var a=n(21),r={api:{HOST:"https://react-inspinia.free.beeceptor.com",VERSION:"/api/"},auth:{GRANT_TYPE:"password",CLIENT_ID:"client_id",CLIENT_SECRET:"client_secret"}};t.a=Object(a.a)({MAX_ATTACHMENT_SIZE:5e6},r)},244:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.input,n=e.label,a=e.placeholder,c=e.type,i=e.fa,o=e.meta,s=o.touched,l=o.error,u=o.warning;return r.a.createElement("div",null,!!n&&r.a.createElement("label",null,n),r.a.createElement("div",{className:"form-group input-group m-b"},!!i&&r.a.createElement("span",{className:"input-group-addon"},r.a.createElement("i",{className:i})),r.a.createElement("input",Object.assign({className:"form-control"},t,{placeholder:a,type:c}))),s&&(l&&r.a.createElement("span",{className:"error"}," ",l," ")||u&&r.a.createElement("span",{className:"warn"}," ",u," ")))}},252:function(e,t,n){"use strict";var a=n(10),r=n(11),c=n(13),i=n(12),o=n(14),s=n(0),l=n.n(s),u=n(253),p=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(r.a)(t,[{key:"onCheck",value:function(e,t){this.props.input.onChange(t)}},{key:"render",value:function(){return l.a.createElement(u.Checkbox,{name:this.props.input.name,checkboxClass:this.props.checkboxClass,increaseArea:this.props.increaseArea,checked:this.props.input.checked,onChange:this.onCheck.bind(this),cursor:this.props.cursor,label:this.props.label})}}]),t}(s.Component);t.a=p},255:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var a=function(e){return e?void 0:"Required"},r=function(e){return e&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e)?"Invalid email address":void 0},c=function(e){return e&&/[^a-zA-Z0-9 ]/i.test(e)?"Only alphanumeric characters":void 0},i=function(e){return e&&!/^(0|[1-9][0-9]{9})$/i.test(e)?"Invalid phone number, must be 10 digits":void 0}},275:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var a=n(100),r=n.n(a),c=function(e){return function(t){return r()(e).some((function(e){return r.a.get(t,"loading.".concat(e))}))}},i=function(e){return function(t){return r()(e).map((function(e){return r.a.get(t,"error.".concat(e))})).compact().first()||""}}},285:function(e,t,n){"use strict";var a=n(346),r=n.n(a),c=n(347),i=n(10),o=n(11),s=n(348),l=n.n(s),u=n(354),p=n.n(u),m=n(243),b=n(100),d=n(35),f=m.a.api,h=f.HOST,E=f.VERSION,v=function(){function e(){Object(i.a)(this,e)}return Object(o.a)(e,null,[{key:"auth",value:function(){var e=Object(c.a)(r.a.mark((function e(t,n,a){var c,i,o,s,u,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.type,i=a.dispatch,e.prev=1,o=h+E+t,s={headers:{"Content-Type":"application/x-www-form-urlencoded"}},e.next=6,l.a.post(o,p.a.stringify(n),s);case 6:u=e.sent,d.b(u.data),n.remember?d.e(u.data.user):d.d(),i({type:"".concat(c,"_SUCCESS"),payload:u.data}),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),m=(m=(m=Object(b.get)(e.t0,"response.data",null))||Object(b.get)(e.t0,"response"))||e.t0,i({type:"".concat(c,"_FAILURE"),payload:m});case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,n,a){return e.apply(this,arguments)}}()},{key:"get",value:function(e,t){var n=h+E+e;return l.a.get(n,t)}},{key:"post",value:function(e,t){var n=h+E+e;return l.a.post(n,t)}}]),e}();function g(e){return function(t){t({type:"".concat("AUTH","_REQUEST")});var n={type:"AUTH",dispatch:t};v.auth("oauth/token",e,n)}}n.d(t,"a",(function(){return g}))},399:function(e,t,n){"use strict";n.r(t);var a=n(10),r=n(11),c=n(13),i=n(12),o=n(14),s=n(21),l=n(2),u=n.n(l),p=n(4),m=n.n(p),b=n(46),d=n(0),f=n.n(d),h=n(100),E=n(19),v=n(15),g=n(18),y=n(228),O=n.n(y),k=(n(48),n(243)),j=n(626),N=n(625),T=n(244),C=n(252),w=n(255),A=Object(N.a)({form:"login_form"})((function(e){var t=e.handleSubmit,n=e.pristine,a=e.submitting,r=e.invalid;return f.a.createElement("form",{onSubmit:t},f.a.createElement("div",null,f.a.createElement(j.a,{className:"form-control",placeholder:"Username",name:"email",type:"text",fa:"fa fa-at",validate:[w.d],component:T.a})),f.a.createElement("div",null,f.a.createElement(j.a,{className:"form-control",placeholder:"******",name:"password",type:"password",fa:"fa fa-key",validate:[w.d],component:T.a})),f.a.createElement("div",{className:"text-left"},f.a.createElement(j.a,{name:"remember",component:C.a,type:"checkbox",checkboxClass:"icheckbox_square-green",increaseArea:"20%",cursor:"pointer",label:"<span className='checkbox-label'> Remember Me </span>"})),f.a.createElement("button",{type:"submit",id:"btnLogin",className:"btn btn-primary block full-width m-b",disabled:n||a||r},"Login"))})),_=n(65),x=n.n(_),I=n(224),S=n(75),R=n(285),H=n(35),L=n(20),U=n(275),D=n(22);O.a.propTypes=Object(s.a)({},O.a.propTypes,{cursor:m.a.string});var P=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(i.a)(t).call(this,e))).login=function(e){var t={grant_type:k.a.auth.GRANT_TYPE,client_id:k.a.auth.CLIENT_ID,client_secret:k.a.auth.CLIENT_SECRET,username:e.email,password:e.password};n.props.login(t)},n.state={},n}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){u()(window).bind("load resize",(function(){Object(L.a)(),Object(L.b)()}))}},{key:"render",value:function(){return this.props.loading?f.a.createElement(S.a,null):(this.props.error&&D.toastr.error("Get Hired!",this.props.error),f.a.createElement("div",{className:"gray-bg"},f.a.createElement("div",{className:"middle-box text-center loginscreen animated fadeInDown",style:{paddingBottom:"40px"}},f.a.createElement(v.b,{className:"nav-link",to:""},f.a.createElement("img",{alt:"",className:"img-circle logo",src:x.a})),f.a.createElement("h3",null,"Get Hired!"),f.a.createElement("p",null,"Login in. To see it in action."),f.a.createElement(A,{onSubmit:this.login}),f.a.createElement(v.b,{to:"/activate"},f.a.createElement("small",null,"Forgot Password?")),f.a.createElement("p",{className:"text-muted text-center"},f.a.createElement(v.b,{to:"/register"},"Don't have an account?")),f.a.createElement(v.b,{className:"btn btn-sm btn-white btn-block",to:"/activate"},"Activate Account"),f.a.createElement(v.b,{className:"btn btn-sm btn-white btn-block",to:"/register"},"Register"),f.a.createElement("br",null),f.a.createElement(I.a,null))))}}],[{key:"getDerivedStateFromProps",value:function(e){return!Object(h.isEmpty)(Object(h.get)(e,"user.auth"))&&H.a()&&e.history.push("/app/home"),null}}]),t}(d.Component),Z=Object(U.b)(["AUTH"]),G=Object(U.a)(["AUTH"]);t.default=Object(g.g)(Object(b.connect)((function(e){return{user:e.user,loading:Z(e),error:G(e)}}),(function(e){return Object(E.b)({login:R.a},e)}))(P))}}]);
//# sourceMappingURL=11.c1e9aaff.chunk.js.map