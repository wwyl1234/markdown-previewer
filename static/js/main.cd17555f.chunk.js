(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{18:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n(7),i=n(8),c=n(11),l=n(10),o=n(0),u=n.n(o),d=n(17),s=n.n(d),h=n(9),p=n.n(h),m=(n(26),function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return u.a.createElement("div",{id:"markdown-preview-app",class:"container-fluid"},u.a.createElement(v,null))}}]),n}(u.a.Component)),v=function(e){Object(c.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).handleOnChange=function(e){var t=e.target.value;i.setState({input:t,output:{__html:p()(t,{sanitize:!0})}})},i.state={input:"",output:{__html:p()("",{sanitize:!0})}},i.handleOnChange=i.handleOnChange.bind(Object(a.a)(i)),i}return Object(i.a)(n,[{key:"render",value:function(){return u.a.createElement("div",{is:"markdown-preview",class:"row"},u.a.createElement("div",{id:"editor-container",class:"col"},u.a.createElement("h1",null,"Editor"),u.a.createElement("textarea",{id:"editor",placeholder:"Enter markdown here: (Need help? see https://www.markdownguide.org/basic-syntax/)",onChange:this.handleOnChange})),u.a.createElement("div",{id:"preview-container",class:"col"},u.a.createElement("h1",null,"Preview"),u.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:this.state.output})))}}]),n}(u.a.Component);s.a.render(u.a.createElement(m,null),document.getElementById("root"))},26:function(e,t,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.cd17555f.chunk.js.map