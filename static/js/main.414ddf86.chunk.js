(this["webpackJsonpdecide-for-me"]=this["webpackJsonpdecide-for-me"]||[]).push([[0],{13:function(e,t,n){e.exports=n(31)},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(6),l=n.n(i),r=n(1),s=n(2),c=n(3),d=n(4),p=function(e){Object(d.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={error:void 0},e.handleAddOption=function(t){t.preventDefault();var n=t.target.elements.option.value.trim(),a=e.props.handleAddOption(n);e.setState((function(){return{error:a}})),a||(t.target.elements.option.value="")},e}return Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement("div",null,this.state.error&&o.a.createElement("p",{className:"add-option-error"},this.state.error),o.a.createElement("form",{className:"add-option",onSubmit:this.handleAddOption},o.a.createElement("input",{className:"add-option__input",type:"text",name:"option"}),o.a.createElement("button",{className:"button"},"Add Option")))}}]),n}(o.a.Component),u=function(e){return o.a.createElement("div",{className:"option"},o.a.createElement("p",{className:"option__text"},e.count,". ",e.optionText),o.a.createElement("button",{className:"button button--link",onClick:function(t){e.handleDeleteOption(e.optionText)}},"Delete"))},m=function(e){return o.a.createElement("div",null,o.a.createElement("div",{className:"widget-header"},o.a.createElement("h3",{className:"widget-header__title"},"Your Destiny:"),o.a.createElement("button",{className:"button button--link",onClick:e.handleDeleteOptions},"Delete List")),0===e.options.length&&o.a.createElement("p",{className:"widget__message"},"Please add an option to get started"),e.options.map((function(t,n){return o.a.createElement(u,{key:t,optionText:t,count:n+1,handleDeleteOption:e.handleDeleteOption})})))},h=function(e){return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"header__container"},o.a.createElement("h1",{className:"header__title"},e.title),e.title&&o.a.createElement("h2",{className:"header__subtitle"},e.subtitle)))};h.defaultProps={title:"DecideForMe App"};var O=h,f=function(e){return o.a.createElement("div",null,o.a.createElement("button",{className:"big-button",onClick:e.handlePick,disabled:!e.hasOptions},"Randomize & Choose from List"))},v=n(12),E=n.n(v),b=function(e){return o.a.createElement(E.a,{isOpen:!!e.selectedOption,onRequestClose:e.handleClearSelectedOption,contentLabel:"Selected Option",closeTimeoutMS:200,className:"modal",ariaHideApp:!1},o.a.createElement("h3",{className:"modal__title"},"Selected Option"),e.selectedOption&&o.a.createElement("p",{className:"model__body"},e.selectedOption),o.a.createElement("button",{onClick:e.handleClearSelectedOption},"Okay"))},N=function(e){Object(d.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={options:[],selectedOption:void 0},e.handleDeleteOptions=function(){e.setState((function(){return{options:[]}}))},e.handleClearSelectedOption=function(){e.setState((function(){return{selectedOption:void 0}}))},e.handleDeleteOption=function(t){e.setState((function(e){return{options:e.options.filter((function(e){return t!==e}))}}))},e.handlePick=function(){var t=Math.floor(Math.random()*e.state.options.length),n=e.state.options[t];e.setState((function(e){return{selectedOption:n}}))},e.handleAddOption=function(t){return t?e.state.options.indexOf(t)>-1?"This option already exists":void e.setState((function(e){return{options:e.options.concat(t)}})):"Enter valid value to add item"},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){try{var e=localStorage.getItem("options"),t=JSON.parse(e);t&&this.setState((function(){return{options:t}}))}catch(n){}}},{key:"componentDidUpdate",value:function(e,t){if(t.options.length!==this.state.options.length){var n=JSON.stringify(this.state.options);localStorage.setItem("options",n)}}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(O,{subtitle:"Let computers rule the world..."}),o.a.createElement("div",{className:"container"},o.a.createElement(f,{hasOptions:this.state.options.length>0,handlePick:this.handlePick}),o.a.createElement("div",{className:"widget"},o.a.createElement(m,{options:this.state.options,handleDeleteOptions:this.handleDeleteOptions,handleDeleteOption:this.handleDeleteOption}),o.a.createElement(p,{handleAddOption:this.handleAddOption}))),o.a.createElement(b,{selectedOption:this.state.selectedOption,handleClearSelectedOption:this.handleClearSelectedOption}))}}]),n}(o.a.Component);n(29),n(30);l.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.414ddf86.chunk.js.map