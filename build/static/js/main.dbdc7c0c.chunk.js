(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,i){},16:function(e,t,i){},18:function(e,t){!function(e,t){this.autoStart=!0,this.excludeMobile=!1,this.flakesMax=128,this.flakesMaxActive=64,this.animationInterval=50,this.useGPU=!0,this.className=null,this.flakeBottom=null,this.followMouse=!1,this.snowColor="#fff",this.snowCharacter="&bull;",this.snowStick=!0,this.targetElement=null,this.useMeltEffect=!0,this.useTwinkleEffect=!1,this.usePositionFixed=!1,this.usePixelPosition=!1,this.freezeOnBlur=!0,this.flakeLeftOffset=0,this.flakeRightOffset=0,this.flakeWidth=8,this.flakeHeight=8,this.vMaxX=5,this.vMaxY=4,this.zIndex=0;var i,n=this,s=navigator.userAgent.match(/msie/i),o=navigator.userAgent.match(/msie 6/i),a=navigator.userAgent.match(/mobile|opera m(ob|in)/i),l=s&&"BackCompat"===t.compatMode||o,r=null,m=null,f=null,h=null,c=null,u=null,d=null,v=1,p=!1,g=!1,y=function(){try{t.createElement("div").style.opacity="0.5"}catch(e){return!1}return!0}(),k=!1,w=t.createDocumentFragment();function x(e,t){return isNaN(t)&&(t=0),Math.random()*e+t}function b(){e.setTimeout(function(){n.start(!0)},20),n.events.remove(s?t:e,"mousemove",b)}i=function(){var i;var s,o=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(t){e.setTimeout(t,1e3/(n.animationInterval||20))};function a(e){return void 0!==s.style[e]?e:null}i=o?function(){return o.apply(e,arguments)}:null,s=t.createElement("div");var l={transform:{ie:a("-ms-transform"),moz:a("MozTransform"),opera:a("OTransform"),webkit:a("webkitTransform"),w3:a("transform"),prop:null},getAnimationFrame:i};return l.transform.prop=l.transform.w3||l.transform.moz||l.transform.webkit||l.transform.ie||l.transform.opera,s=null,l}(),this.timer=null,this.flakes=[],this.disabled=!1,this.active=!1,this.meltFrameCount=20,this.meltFrames=[],this.setXY=function(e,t,i){if(!e)return!1;n.usePixelPosition||g?(e.style.left=t-n.flakeWidth+"px",e.style.top=i-n.flakeHeight+"px"):l?(e.style.right=100-t/r*100+"%",e.style.top=Math.min(i,c-n.flakeHeight)+"px"):n.flakeBottom?(e.style.right=100-t/r*100+"%",e.style.top=Math.min(i,c-n.flakeHeight)+"px"):(e.style.right=100-t/r*100+"%",e.style.bottom=100-i/f*100+"%")},this.events=function(){var t=!e.addEventListener&&e.attachEvent,i=Array.prototype.slice,n={add:t?"attachEvent":"addEventListener",remove:t?"detachEvent":"removeEventListener"};function s(e){var n=i.call(e),s=n.length;return t?(n[1]="on"+n[1],s>3&&n.pop()):3===s&&n.push(!1),n}function o(e,i){var s=e.shift(),o=[n[i]];t?s[o](e[0],e[1]):s[o].apply(s,e)}return{add:function(){o(s(arguments),"add")},remove:function(){o(s(arguments),"remove")}}}(),this.randomizeWind=function(){var e,t;if(t=x(n.vMaxX,.2),u=1===parseInt(x(2),10)?-1*t:t,d=x(n.vMaxY,.2),this.flakes)for(e=0;e<this.flakes.length;e++)this.flakes[e].active&&this.flakes[e].setVelocities()},this.scrollHandler=function(){var i;if(h=n.flakeBottom?0:parseInt(e.scrollY||t.documentElement.scrollTop||(l?t.body.scrollTop:0),10),isNaN(h)&&(h=0),!p&&!n.flakeBottom&&n.flakes)for(i=0;i<n.flakes.length;i++)0===n.flakes[i].active&&n.flakes[i].stick()},this.resizeHandler=function(){e.innerWidth||e.innerHeight?(r=e.innerWidth-16-n.flakeRightOffset,f=n.flakeBottom||e.innerHeight):(r=(t.documentElement.clientWidth||t.body.clientWidth||t.body.scrollWidth)-(s?0:8)-n.flakeRightOffset,f=n.flakeBottom||t.documentElement.clientHeight||t.body.clientHeight||t.body.scrollHeight),c=t.body.offsetHeight,m=parseInt(r/2,10)},this.resizeHandlerAlt=function(){r=n.targetElement.offsetWidth-n.flakeRightOffset,f=n.flakeBottom||n.targetElement.offsetHeight,m=parseInt(r/2,10),c=t.body.offsetHeight},this.freeze=function(){if(n.disabled)return!1;n.disabled=1,n.timer=null},this.resume=function(){if(!n.disabled)return!1;n.disabled=0,n.timerInit()},this.toggleSnow=function(){n.flakes.length?(n.active=!n.active,n.active?(n.show(),n.resume()):(n.stop(),n.freeze())):n.start()},this.stop=function(){var i;for(this.freeze(),i=0;i<this.flakes.length;i++)this.flakes[i].o.style.display="none";n.events.remove(e,"scroll",n.scrollHandler),n.events.remove(e,"resize",n.resizeHandler),n.freezeOnBlur&&(s?(n.events.remove(t,"focusout",n.freeze),n.events.remove(t,"focusin",n.resume)):(n.events.remove(e,"blur",n.freeze),n.events.remove(e,"focus",n.resume)))},this.show=function(){var e;for(e=0;e<this.flakes.length;e++)this.flakes[e].o.style.display="block"},this.SnowFlake=function(e,s,o){var a=this;this.type=e,this.x=s||parseInt(x(r-20),10),this.y=isNaN(o)?-x(f)-12:o,this.vX=null,this.vY=null,this.vAmpTypes=[1,1.2,1.4,1.6,1.8],this.vAmp=this.vAmpTypes[this.type]||1,this.melting=!1,this.meltFrameCount=n.meltFrameCount,this.meltFrames=n.meltFrames,this.meltFrame=0,this.twinkleFrame=0,this.active=1,this.fontSize=10+this.type/5*10,this.o=t.createElement("div"),this.o.innerHTML=n.snowCharacter,n.className&&this.o.setAttribute("class",n.className),this.o.style.color=n.snowColor,this.o.style.position=p?"fixed":"absolute",n.useGPU&&i.transform.prop&&(this.o.style[i.transform.prop]="translate3d(0px, 0px, 0px)"),this.o.style.width=n.flakeWidth+"px",this.o.style.height=n.flakeHeight+"px",this.o.style.fontFamily="arial,verdana",this.o.style.cursor="default",this.o.style.overflow="hidden",this.o.style.fontWeight="normal",this.o.style.zIndex=n.zIndex,w.appendChild(this.o),this.refresh=function(){if(isNaN(a.x)||isNaN(a.y))return!1;n.setXY(a.o,a.x,a.y)},this.stick=function(){l||n.targetElement!==t.documentElement&&n.targetElement!==t.body?a.o.style.top=f+h-n.flakeHeight+"px":n.flakeBottom?a.o.style.top=n.flakeBottom+"px":(a.o.style.display="none",a.o.style.bottom="0%",a.o.style.position="fixed",a.o.style.display="block")},this.vCheck=function(){a.vX>=0&&a.vX<.2?a.vX=.2:a.vX<0&&a.vX>-.2&&(a.vX=-.2),a.vY>=0&&a.vY<.2&&(a.vY=.2)},this.move=function(){var e=a.vX*v;a.x+=e,a.y+=a.vY*a.vAmp,a.x>=r||r-a.x<n.flakeWidth?a.x=0:e<0&&a.x-n.flakeLeftOffset<-n.flakeWidth&&(a.x=r-n.flakeWidth-1),a.refresh(),f+h-a.y+n.flakeHeight<n.flakeHeight?(a.active=0,n.snowStick?a.stick():a.recycle()):(n.useMeltEffect&&a.active&&a.type<3&&!a.melting&&Math.random()>.998&&(a.melting=!0,a.melt()),n.useTwinkleEffect&&(a.twinkleFrame<0?Math.random()>.97&&(a.twinkleFrame=parseInt(8*Math.random(),10)):(a.twinkleFrame--,y?a.o.style.opacity=a.twinkleFrame&&a.twinkleFrame%2===0?0:1:a.o.style.visibility=a.twinkleFrame&&a.twinkleFrame%2===0?"hidden":"visible")))},this.animate=function(){a.move()},this.setVelocities=function(){a.vX=u+x(.12*n.vMaxX,.1),a.vY=d+x(.12*n.vMaxY,.1)},this.setOpacity=function(e,t){if(!y)return!1;e.style.opacity=t},this.melt=function(){n.useMeltEffect&&a.melting&&a.meltFrame<a.meltFrameCount?(a.setOpacity(a.o,a.meltFrames[a.meltFrame]),a.o.style.fontSize=a.fontSize-a.fontSize*(a.meltFrame/a.meltFrameCount)+"px",a.o.style.lineHeight=n.flakeHeight+2+.75*n.flakeHeight*(a.meltFrame/a.meltFrameCount)+"px",a.meltFrame++):a.recycle()},this.recycle=function(){a.o.style.display="none",a.o.style.position=p?"fixed":"absolute",a.o.style.bottom="auto",a.setVelocities(),a.vCheck(),a.meltFrame=0,a.melting=!1,a.setOpacity(a.o,1),a.o.style.padding="0px",a.o.style.margin="0px",a.o.style.fontSize=a.fontSize+"px",a.o.style.lineHeight=n.flakeHeight+2+"px",a.o.style.textAlign="center",a.o.style.verticalAlign="baseline",a.x=parseInt(x(r-n.flakeWidth-20),10),a.y=parseInt(-1*x(f),10)-n.flakeHeight,a.refresh(),a.o.style.display="block",a.active=1},this.recycle(),this.refresh()},this.snow=function(){var e,t,s=0,o=null;for(e=0,t=n.flakes.length;e<t;e++)1===n.flakes[e].active&&(n.flakes[e].move(),s++),n.flakes[e].melting&&n.flakes[e].melt();s<n.flakesMaxActive&&0===(o=n.flakes[parseInt(x(n.flakes.length),10)]).active&&(o.melting=!0),n.timer&&i.getAnimationFrame(n.snow)},this.mouseMove=function(e){if(!n.followMouse)return!0;var t=parseInt(e.clientX,10);v=t<m?t/m*2-2:(t-=m)/m*2},this.createSnow=function(e,t){var i;for(i=0;i<e;i++)n.flakes[n.flakes.length]=new n.SnowFlake(parseInt(x(6),10)),(t||i>n.flakesMaxActive)&&(n.flakes[n.flakes.length-1].active=-1);n.targetElement.appendChild(w)},this.timerInit=function(){n.timer=!0,n.snow()},this.init=function(){var i;for(i=0;i<n.meltFrameCount;i++)n.meltFrames.push(1-i/n.meltFrameCount);n.randomizeWind(),n.createSnow(n.flakesMax),n.events.add(e,"resize",n.resizeHandler),n.events.add(e,"scroll",n.scrollHandler),n.freezeOnBlur&&(s?(n.events.add(t,"focusout",n.freeze),n.events.add(t,"focusin",n.resume)):(n.events.add(e,"blur",n.freeze),n.events.add(e,"focus",n.resume))),n.resizeHandler(),n.scrollHandler(),n.followMouse&&n.events.add(s?t:e,"mousemove",n.mouseMove),n.animationInterval=Math.max(20,n.animationInterval),n.timerInit()},this.start=function(i){if(k){if(i)return!0}else k=!0;if("string"===typeof n.targetElement){var s=n.targetElement;if(n.targetElement=t.getElementById(s),!n.targetElement)throw new Error('Snowstorm: Unable to get targetElement "'+s+'"')}if(n.targetElement||(n.targetElement=t.body||t.documentElement),n.targetElement!==t.documentElement&&n.targetElement!==t.body&&(n.resizeHandler=n.resizeHandlerAlt,n.usePixelPosition=!0),n.resizeHandler(),n.usePositionFixed=n.usePositionFixed&&!l&&!n.flakeBottom,e.getComputedStyle)try{g="relative"===e.getComputedStyle(n.targetElement,null).getPropertyValue("position")}catch(o){g=!1}p=n.usePositionFixed,r&&f&&!n.disabled&&(n.init(),n.active=!0)},n.autoStart&&n.events.add(e,"load",function t(){n.excludeMobile&&a||b(),n.events.remove(e,"load",t)},!1)}(window,document)},19:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i.n(n),o=i(2),a=i.n(o),l=(i(14),i(3)),r=i(4),m=i(6),f=i(5),h=i(7),c=(i(16),i(18),function(e){function t(e){var i;return Object(l.a)(this,t),(i=Object(m.a)(this,Object(f.a)(t).call(this,e))).changeLanguage(),i}return Object(h.a)(t,e),Object(r.a)(t,[{key:"changeLanguage",value:function(){console.log(window.navigator.language.slice(0,2)),"es"===window.navigator.language.slice(0,2)?this.title="Esp\xe9rame, pronto vendr\xe1n nuevos proyectos! \ud83d\ude04":this.title="Wait for me, soon new projects will come! \ud83d\ude04"}},{key:"render",value:function(){return s.a.createElement("main",null,s.a.createElement("h1",{ref:"title"},this.title),s.a.createElement("h2",{ref:"subtitle"},s.a.createElement("a",{href:"mailto:iam@diegomoreno.co"},"iam@diegomoreno.co")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(s.a.createElement(c,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,i){e.exports=i(19)}},[[8,2,1]]]);
//# sourceMappingURL=main.dbdc7c0c.chunk.js.map