(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{270:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n.n(a),o=n(0),r=n.n(o),s=n(1),c=n.n(s),l=n(5),u=(n(22),n(277)),d=n(17),m=n(276),p=n(26),h=n(278),f=n.n(h),g=n(279),y=n.n(g),b=n(280),v=n.n(b),E=n(281),w=n.n(E),k=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.classes;return r.a.createElement(u.a,{className:e.root},r.a.createElement("article",null,r.a.createElement(p.a,{stagger:!0},r.a.createElement("header",null,r.a.createElement("h1",null,r.a.createElement(d.a,null,"About CybSec"))),r.a.createElement("p",null,r.a.createElement(d.a,{style:{fontWeight:"bold"}},"Who We Are?")),r.a.createElement(m.a,null,r.a.createElement("img",{src:f.a,alt:"Team photo"})),r.a.createElement("p",null,r.a.createElement(d.a,null,"CybSecNITW is a group of information security enthusiasts from National Institute of Technology, Warangal. We are a bunch of self-motivated security enthusiasts who love learning and sharing their knowledge with everyone genuinely interested in information security.")),r.a.createElement("p",null,r.a.createElement(d.a,{style:{fontWeight:"bold"}},"What We Do?")),r.a.createElement(m.a,null,r.a.createElement("img",{src:v.a,alt:"Our work"})),r.a.createElement("p",null,r.a.createElement(d.a,null,"Meetings : We have weekly meetups where we have information security-related discussions and participate in CTFs. Everyone is invited to our meetings. ")),r.a.createElement("p",null,r.a.createElement(d.a,null,"Capture The Flag : We actively participate in CTFs. These are security competitions which require practical knowledge of topics like binary exploitation, reverse engineering, cryptography, web security, forensics, steganography, etc. We also organise our own Capture The Flag competitions PhantomCTF.")),r.a.createElement("p",null,r.a.createElement(d.a,{style:{fontWeight:"bold"}},"How To Join?")),r.a.createElement(m.a,null,r.a.createElement("img",{src:w.a,alt:"Join Us"})),r.a.createElement("p",null,r.a.createElement(d.a,null,"CybSecNITW is an open group. Everyone (from NITW) can join in our meetings and participate with us in CTFs (subject to rules on team size in CTFs, of course). If you come regularly to the meetings, you get added to the internal team.")),r.a.createElement("p",null,r.a.createElement(d.a,{style:{fontWeight:"bold"}},"Where We Work?")),r.a.createElement(m.a,null,r.a.createElement("img",{src:y.a,alt:"Innovation Garage"})),r.a.createElement("p",null,r.a.createElement(d.a,null,"Innovation Garage - the Hogwarts of innovative souls. The working hub for brilliant minds with the coolest projects - It’s a place to hack. It’s a room to innovate. Most importantly, it’s a space where you challenge yourself to break the boundaries. The working space is packed with devout and enthusiastic students, each showing off their creative best in their fields of passion. The synergy of the atmosphere further inspires the individuals to commit to their work. Ever since its inception in 2015, it has given rise to lots of projects, friendships, mentors, startups and reasons for many to work harder than ever before.")))))},t}(r.a.Component);k.propTypes={classes:c.a.object},t.default=Object(l.a)(function(e){return{root:{}}})(k)},276:function(e,t,n){"use strict";var a=n(5),i=n(7),o=n(9),r=n(6),s=n.n(r),c=(n(8),n(3)),l=n.n(c),u=n(0),d=n.n(u),m=n(1),p=n.n(m),h=n(4),f=n.n(h),g=n(2),y=function(e){function t(){return e.apply(this,arguments)||this}l()(t,e);var n=t.prototype;return n.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},n.enter=function(){var e=this.props,t=e.energy,n=e.sounds,a=t.duration.enter;n.fade&&n.fade.play(),this.animate({keyframes:[{opacity:1,duration:a/3},{opacity:0,duration:a/5},{opacity:1,duration:a/2}]})},n.exit=function(){var e=this.props,t=e.energy,n=e.sounds,a=t.duration.exit;n.fade&&n.fade.play(),this.animate({keyframes:[{opacity:0,duration:a/3},{opacity:1,duration:a/5},{opacity:0,duration:a/2}]})},n.animate=function(e){this.unanimate(),Object(g.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},n.unanimate=function(){g.a.remove(this.element)},n.render=function(){var e=this,t=this.props,n=(t.theme,t.classes),a=(t.energy,t.audio,t.sounds,t.className),i=t.children,o=t.node,r=s()(t,["theme","classes","energy","audio","sounds","className","children","node"]);return d.a.createElement(o,Object.assign({ref:function(t){return e.element=t},className:f()(n.root,a)},r),i)},t}(d.a.PureComponent);y.displayName="Fader",y.propTypes={theme:p.a.any.isRequired,classes:p.a.any.isRequired,energy:p.a.any.isRequired,audio:p.a.any.isRequired,sounds:p.a.any.isRequired,className:p.a.any,children:p.a.any,node:p.a.string},y.defaultProps={node:"span"};n.d(t,"a",function(){return b});var b=Object(i.a)()(Object(a.a)(function(e){return{root:{display:"inline-block",opacity:0}}})(Object(o.a)()(y)))},277:function(e,t,n){"use strict";var a=n(5),i=(n(8),n(6)),o=n.n(i),r=n(3),s=n.n(r),c=n(0),l=n.n(c),u=n(1),d=n.n(u),m=n(4),p=n.n(m),h=n(276),f=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))||this).onRouteChangeStart=function(e){e.detail.isInternal&&t.element.exit()},t}s()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},n.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},n.render=function(){var e=this,t=this.props,n=(t.theme,t.classes),a=t.className,i=t.children,r=o()(t,["theme","classes","className","children"]);return l.a.createElement(h.a,Object.assign({className:p()(n.root,a),node:"main",ref:function(t){return e.element=t}},r),l.a.createElement("div",{className:n.frame}),l.a.createElement("div",{className:n.content},i))},t}(l.a.Component);f.displayName="Main",f.propTypes={theme:d.a.object.isRequired,classes:d.a.object.isRequired,className:d.a.any,children:d.a.any};var g=n(13);n.d(t,"a",function(){return y});var y=Object(a.a)(function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(g.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],"& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,10,0,0]}}}})(f)},278:function(e,t,n){e.exports=n.p+"static/team-a249266250d9504c661a0f1d63244182.jpeg"},279:function(e,t,n){e.exports=n.p+"static/ig-fdf85ee67785a85c856ca79c40af6bfe.jpg"},280:function(e,t,n){e.exports=n.p+"static/provide-60c049f0c3a014c2d123f7a882864fa1.jpg"},281:function(e,t,n){e.exports=n.p+"static/join-b848d9712de80b3b7539fab492698ddf.jpg"}}]);
//# sourceMappingURL=component---src-pages-about-js-49a0a9c13d9a06fc27ae.js.map