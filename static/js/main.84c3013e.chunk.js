(this.webpackJsonprobots=this.webpackJsonprobots||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),s=(n(12),n(13),n(1)),i=n(2),l=n(4),h=n(3),u=(n(14),function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robot_image",src:"https://robohash.org/".concat(t,"?size=200x200")}),r.a.createElement("h2",null,n),r.a.createElement("p",null,a))}),m=function(e){return e.robots.map((function(e){return r.a.createElement(u,{id:e.id,name:e.name,email:e.email})}))},b=function(e){var t=e.searchText,n=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robot...",onChange:n,value:t}))},d=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"solid 5px black",height:"600px"}},e.children)},p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops, something happens!"):this.props.children}}]),n}(a.Component),f=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchText:t.target.value})},e.state={robots:[],searchText:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchText.toLowerCase())}));return 0===this.state.robots.length?r.a.createElement("h1",null,"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"RoboFriends"),r.a.createElement(b,{searchText:this.state.searchText,searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(p,null,r.a.createElement(m,{robots:t}))))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.84c3013e.chunk.js.map