(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{270:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),i=n(0),o=n.n(i),s=n(1),l=n.n(s),c=n(5),u=(n(21),n(277)),d=n(22),m=(n(276),n(26)),p=(n(278),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.classes;return o.a.createElement(u.a,{className:e.root},o.a.createElement("article",null,o.a.createElement(m.a,{stagger:!0},o.a.createElement("header",null,o.a.createElement("h1",null,o.a.createElement(d.a,null,"About CybSec"))),o.a.createElement("p",null,o.a.createElement(d.a,null,o.a.createElement("b",null,"Who We Are?"))),o.a.createElement("p",null,o.a.createElement(d.a,null,"CybSecNITW is a group of information security enthusiasts from National Institute of Technology, Warangal. We are a bunch of self-motivated security enthusiasts who love learning and sharing their knowledge with everyone genuinely interested in information security.")),o.a.createElement("p",null,o.a.createElement(d.a,null,o.a.createElement("b",null,"What We Do?"))),o.a.createElement("p",null,o.a.createElement(d.a,null,"Meetings: We have weekly meetups where we have information security-related discussions and participate in CTFs. Everyone is invited to our meetings. ")),o.a.createElement("p",null,o.a.createElement(d.a,null,"Capture The Flag: We actively participate in CTFs. These are security competitions which require practical knowledge of topics like binary exploitation, reverse engineering, cryptography, web security, forensics, steganography, etc. We also organise our own Capture The Flag competitions PhantomCTF.")),o.a.createElement("p",null,o.a.createElement(d.a,null,o.a.createElement("b",null,"HOW TO JOIN?"))),o.a.createElement("p",null,o.a.createElement(d.a,null,"CybSecNITW is an open group. Everyone (from NITW) can join in our meetings and participate with us in CTFs (subject to rules on team size in CTFs, of course). If you come regularly to the meetings, you get added to the internal team.")))))},t}(o.a.Component));p.propTypes={classes:l.a.object},t.default=Object(c.a)(function(e){return{root:{}}})(p)},276:function(e,t,n){"use strict";var a=n(5),r=n(7),i=n(9),o=n(6),s=n.n(o),l=(n(8),n(3)),c=n.n(l),u=n(0),d=n.n(u),m=n(1),p=n.n(m),h=n(4),f=n.n(h),y=n(2),g=function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},n.enter=function(){var e=this.props,t=e.energy,n=e.sounds,a=t.duration.enter;n.fade&&n.fade.play(),this.animate({keyframes:[{opacity:1,duration:a/3},{opacity:0,duration:a/5},{opacity:1,duration:a/2}]})},n.exit=function(){var e=this.props,t=e.energy,n=e.sounds,a=t.duration.exit;n.fade&&n.fade.play(),this.animate({keyframes:[{opacity:0,duration:a/3},{opacity:1,duration:a/5},{opacity:0,duration:a/2}]})},n.animate=function(e){this.unanimate(),Object(y.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},n.unanimate=function(){y.a.remove(this.element)},n.render=function(){var e=this,t=this.props,n=(t.theme,t.classes),a=(t.energy,t.audio,t.sounds,t.className),r=t.children,i=t.node,o=s()(t,["theme","classes","energy","audio","sounds","className","children","node"]);return d.a.createElement(i,Object.assign({ref:function(t){return e.element=t},className:f()(n.root,a)},o),r)},t}(d.a.PureComponent);g.displayName="Fader",g.propTypes={theme:p.a.any.isRequired,classes:p.a.any.isRequired,energy:p.a.any.isRequired,audio:p.a.any.isRequired,sounds:p.a.any.isRequired,className:p.a.any,children:p.a.any,node:p.a.string},g.defaultProps={node:"span"};n.d(t,"a",function(){return b});var b=Object(r.a)()(Object(a.a)(function(e){return{root:{display:"inline-block",opacity:0}}})(Object(i.a)()(g)))},277:function(e,t,n){"use strict";var a=n(5),r=(n(8),n(6)),i=n.n(r),o=n(3),s=n.n(o),l=n(0),c=n.n(l),u=n(1),d=n.n(u),m=n(4),p=n.n(m),h=n(276),f=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))||this).onRouteChangeStart=function(e){e.detail.isInternal&&t.element.exit()},t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},n.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},n.render=function(){var e=this,t=this.props,n=(t.theme,t.classes),a=t.className,r=t.children,o=i()(t,["theme","classes","className","children"]);return c.a.createElement(h.a,Object.assign({className:p()(n.root,a),node:"main",ref:function(t){return e.element=t}},o),c.a.createElement("div",{className:n.frame}),c.a.createElement("div",{className:n.content},r))},t}(c.a.Component);f.displayName="Main",f.propTypes={theme:d.a.object.isRequired,classes:d.a.object.isRequired,className:d.a.any,children:d.a.any};var y=n(13);n.d(t,"a",function(){return g});var g=Object(a.a)(function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(y.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}})(f)},278:function(e,t,n){e.exports=n.p+"static/josh-mullis-0ff4d230fedd551916c221fdd64ac81a.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-js-88e9359f494ccfe21b01.js.map