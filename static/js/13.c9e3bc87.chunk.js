(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{136:function(e,t,a){"use strict";var n=a(0),c=a.n(n);t.a=function(){return c.a.createElement("div",null,c.a.createElement("strong",null,"Copyright")," Claytones Private Limited \xa9 2019")}},539:function(e,t,a){"use strict";a.r(t);var n=a(48),c=a(8),r=a(9),l=a(11),o=a(10),s=a(12),i=a(23),m=a(1),u=a.n(m),p=a(3),b=a.n(p),d=a(26),h=a(13),g=a(147),E=a(0),f=a.n(E),v=a(14),N=a(132),y=a.n(N),k=a(16),w=(a(28),a(39)),O=a.n(w),j=a(136),x=a(302),C=a.n(x);function L(e){return function(e){e({type:"LOGIN"}),C.a.get("http://viacep.com.br/ws/74922800/json/").then(function(t){e({type:"LOGIN_FULFILLED",payload:t.data})}).catch(function(t){e({type:"LOGIN_REJECTED",payload:t})})}}y.a.propTypes=Object(i.a)({},y.a.propTypes,{cursor:b.a.string});var D=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(o.a)(t).call(this,e))).login=function(){a.props.login({username:"admin",password:"admin"})},a.handleChange=function(e,t){a.setState(Object(n.a)({},e.target.name,t))},a.state={checked:!1},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){u()(window).bind("load resize",function(){Object(k.a)(),Object(k.b)()})}},{key:"render",value:function(){return console.log(this.props.user),f.a.createElement("div",{className:"gray-bg",style:{height:"100vh"}},f.a.createElement("div",{className:"middle-box text-center loginscreen animated fadeInDown",style:{paddingBottom:"40px"}},f.a.createElement(h.b,{className:"nav-link",to:""},f.a.createElement("img",{alt:"",className:"img-circle",src:O.a})),f.a.createElement("h3",null,"Get Hired!"),f.a.createElement("p",null,"Login in. To see it in action."),f.a.createElement("div",{className:"form-group input-group m-b"},f.a.createElement("span",{className:"input-group-addon"},f.a.createElement("i",{className:"fa fa-at"})),f.a.createElement("input",{type:"email",name:"email",className:"form-control",placeholder:"Email",required:""})),f.a.createElement("div",{className:"form-group input-group m-b"},f.a.createElement("span",{className:"input-group-addon"},f.a.createElement("i",{className:"fa fa-key"})),f.a.createElement("input",{type:"password",name:"password",className:"form-control",placeholder:"Password",required:""})),f.a.createElement("div",{className:"text-left"},f.a.createElement(g.Checkbox,{checkboxClass:"icheckbox_square-green",increaseArea:"20%",checked:this.state.checked,onChange:this.handleChange,name:"checked",cursor:"pointer",label:"<span class='checkbox-label'>Remember Me</span>"})),f.a.createElement("button",{type:"button",id:"btnLogin",className:"btn btn-primary block full-width m-b",onClick:this.login},"Login"),f.a.createElement(h.b,{to:"/activate"},f.a.createElement("small",null,"Forgot Password?")),f.a.createElement("p",{className:"text-muted text-center"},f.a.createElement(h.b,{to:"/register"},"Don't have an account?")),f.a.createElement(h.b,{className:"btn btn-sm btn-white btn-block",to:"/activate"},"Activate Account"),f.a.createElement(h.b,{className:"btn btn-sm btn-white btn-block",to:"/register"},"Register"),f.a.createElement("br",null),f.a.createElement(j.a,null)))}}]),t}(E.Component);t.default=Object(d.connect)(function(e){return{user:e.user}},function(e){return Object(v.b)({login:L},e)})(D)}}]);
//# sourceMappingURL=13.c9e3bc87.chunk.js.map