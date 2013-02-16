/**
* Bootstrap.js by @fat & @mdo
* plugins: bootstrap-modal.js, bootstrap-button.js
* Copyright 2012 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
function loadSocial(){typeof twttr!="undefined"?twttr.widgets.load():$.getScript("http://platform.twitter.com/widgets.js"),typeof FB!="undefined"?FB.init({status:!0,cookie:!0,xfbml:!0}):$.getScript("http://connect.facebook.net/en_US/all.js#xfbml=1",function(){FB.init({status:!0,cookie:!0,xfbml:!0})}),typeof gapi!="undefined"?$(".g-plusone").each(function(){gapi.plusone.render($(this).get(0))}):$.getScript("https://apis.google.com/js/plusone.js")}!function(e){var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),function(e){function a(t){e(this).touchSwipeLeft(t).touchSwipeRight(t)}function f(t){var n=e(this);n.data("swipeLeft")||n.data("swipeLeft",t),n.data("swipeRight")||c(n)}function l(t){var n=e(this);n.data("swipeRight")||n.data("swipeRight",t),n.data("swipeLeft")||c(n)}function c(e){e.unbindSwipe(!0).bind(r,h)}function h(r){function m(e){l.unbind(n),a&&v&&v-a<u&&Math.abs(c-p)>i&&Math.abs(h-d)<s&&(c>p?l.data("swipeLeft")&&l.data("swipeLeft")("left"):l.data("swipeRight")&&l.data("swipeRight")("right")),a=v=null}function g(e){a&&(f=e.originalEvent.touches?e.originalEvent.touches[0]:e,v=(new Date).getTime(),p=f.pageX,d=f.pageY,Math.abs(c-p)>o&&e.preventDefault())}var a=(new Date).getTime(),f=r.originalEvent.touches?r.originalEvent.touches[0]:r,l=e(this).bind(n,g).one(t,m),c=f.pageX,h=f.pageY,p,d,v;l.data("stopPropagation")&&r.stopImmediatePropagation()}var t,n,r,i=30,s=75,o=10,u=1e3;"ontouchend"in document?(t="touchend.cj_swp",n="touchmove.cj_swp",r="touchstart.cj_swp"):(t="mouseup.cj_swp",n="mousemove.cj_swp",r="mousedown.cj_swp"),e.fn.touchSwipe=function(e,t){t&&this.data("stopPropagation",!0);if(e)return this.each(a,[e])},e.fn.touchSwipeLeft=function(e,t){t&&this.data("stopPropagation",!0);if(e)return this.each(f,[e])},e.fn.touchSwipeRight=function(e,t){t&&this.data("stopPropagation",!0);if(e)return this.each(l,[e])},e.fn.unbindSwipeLeft=function(){this.removeData("swipeLeft"),this.data("swipeRight")||this.unbindSwipe(!0)},e.fn.unbindSwipeRight=function(){this.removeData("swipeRight"),this.data("swipeLeft")||this.unbindSwipe(!0)},e.fn.unbindSwipe=function(e){return e||this.removeData("swipeLeft swipeRight stopPropagation"),this.unbind(r+" "+n+" "+t)}}(jQuery),function(e,t){var n=e(t);e.fn.lazyload=function(r){function i(){var t=0;s.each(function(){var n=e(this);if(u.skip_invisible&&!n.is(":visible"))return;if(!e.abovethetop(this,u)&&!e.leftofbegin(this,u))if(!e.belowthefold(this,u)&&!e.rightoffold(this,u))n.trigger("appear");else if(++t>u.failure_limit)return!1})}var s=this,o,u={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null};return r&&(undefined!==r.failurelimit&&(r.failure_limit=r.failurelimit,delete r.failurelimit),undefined!==r.effectspeed&&(r.effect_speed=r.effectspeed,delete r.effectspeed),e.extend(u,r)),o=u.container===undefined||u.container===t?n:e(u.container),0===u.event.indexOf("scroll")&&o.bind(u.event,function(e){return i()}),this.each(function(){var t=this,n=e(t);t.loaded=!1,n.one("appear",function(){if(!this.loaded){if(u.appear){var r=s.length;u.appear.call(t,r,u)}e("<img />").bind("load",function(){n.hide().attr("src",n.data(u.data_attribute))[u.effect](u.effect_speed),t.loaded=!0;var r=e.grep(s,function(e){return!e.loaded});s=e(r);if(u.load){var i=s.length;u.load.call(t,i,u)}}).attr("src",n.data(u.data_attribute))}}),0!==u.event.indexOf("scroll")&&n.bind(u.event,function(e){t.loaded||n.trigger("appear")})}),n.bind("resize",function(e){i()}),i(),this},e.belowthefold=function(r,i){var s;return i.container===undefined||i.container===t?s=n.height()+n.scrollTop():s=e(i.container).offset().top+e(i.container).height(),s<=e(r).offset().top-i.threshold},e.rightoffold=function(r,i){var s;return i.container===undefined||i.container===t?s=n.width()+n.scrollLeft():s=e(i.container).offset().left+e(i.container).width(),s<=e(r).offset().left-i.threshold},e.abovethetop=function(r,i){var s;return i.container===undefined||i.container===t?s=n.scrollTop():s=e(i.container).offset().top,s>=e(r).offset().top+i.threshold+e(r).height()},e.leftofbegin=function(r,i){var s;return i.container===undefined||i.container===t?s=n.scrollLeft():s=e(i.container).offset().left,s>=e(r).offset().left+i.threshold+e(r).width()},e.inviewport=function(t,n){return!e.rightofscreen(t,n)&&!e.leftofscreen(t,n)&&!e.belowthefold(t,n)&&!e.abovethetop(t,n)},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return!e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(jQuery,window),function(e){e.fn.epicFullscreen=function(t){function p(){e(window).width()<=767?o=e("#featured").outerHeight():o=e(window).height(),s=e(window).width(),u=o/s,a=i.width(),f=i.height(),l=f/a,u>l?(h=o,c=o/l):(h=s*l,c=s),i.css({width:c+"px",height:h+"px",left:(s-c)/2+"px",top:(o-h)/2+"px"}),r.css({height:h+"px"})}var n={opacity:.4,pattern:!0,background:"#ff5400",callback:function(){}},t=e.extend({},n,t),r=e(this),i=e("img.epicImg"),s,o,u,a,f,l,c,h;r.css({backgroundColor:t.background}),i.animate({opacity:t.opacity}),r.append('<div id="epic-loader"></div>'),t.pattern==1&&r.append('<div id="epic-overlay"></div>'),e(window).bind("resize",function(){p()}),i.each(function(){var n=new Image,i=e(this).attr("src");e(n).load(function(){p(),r.css({background:t.background}),t.callback.call(this)}).attr("src",i).error(function(){alert("check image path or connection")})})}}(jQuery),function(e,t,n,r,i){var s=e(r),o="waypoint.reached",u=function(e,n){e.element.trigger(o,n),e.options.triggerOnce&&e.element[t]("destroy")},a=function(e,t){if(!t)return-1;var n=t.waypoints.length-1;while(n>=0&&t.waypoints[n].element[0]!==e[0])n-=1;return n},f=[],l=function(t){e.extend(this,{element:e(t),oldScroll:0,waypoints:[],didScroll:!1,didResize:!1,doScroll:e.proxy(function(){var t=this.element.scrollTop(),r=t>this.oldScroll,i=this,s=e.grep(this.waypoints,function(e,n){return r?e.offset>i.oldScroll&&e.offset<=t:e.offset<=i.oldScroll&&e.offset>t}),o=s.length;(!this.oldScroll||!t)&&e[n]("refresh"),this.oldScroll=t;if(!o)return;r||s.reverse(),e.each(s,function(e,t){(t.options.continuous||e===o-1)&&u(t,[r?"down":"up"])})},this)}),e(t).bind("scroll.waypoints",e.proxy(function(){this.didScroll||(this.didScroll=!0,r.setTimeout(e.proxy(function(){this.doScroll(),this.didScroll=!1},this),e[n].settings.scrollThrottle))},this)).bind("resize.waypoints",e.proxy(function(){this.didResize||(this.didResize=!0,r.setTimeout(e.proxy(function(){e[n]("refresh"),this.didResize=!1},this),e[n].settings.resizeThrottle))},this)),s.load(e.proxy(function(){this.doScroll()},this))},c=function(t){var n=null;return e.each(f,function(e,r){if(r.element[0]===t)return n=r,!1}),n},h={init:function(r,i){return this.each(function(){var s=e.fn[t].defaults.context,u,h=e(this);i&&i.context&&(s=i.context),e.isWindow(s)||(s=h.closest(s)[0]),u=c(s),u||(u=new l(s),f.push(u));var p=a(h,u),d=p<0?e.fn[t].defaults:u.waypoints[p].options,v=e.extend({},d,i);v.offset=v.offset==="bottom-in-view"?function(){var t=e.isWindow(s)?e[n]("viewportHeight"):e(s).height();return t-e(this).outerHeight()}:v.offset,p<0?u.waypoints.push({element:h,offset:null,options:v}):u.waypoints[p].options=v,r&&h.bind(o,r),i&&i.handler&&h.bind(o,i.handler)}),e[n]("refresh"),this},remove:function(){return this.each(function(t,n){var r=e(n);e.each(f,function(e,t){var n=a(r,t);n>=0&&(t.waypoints.splice(n,1),t.waypoints.length||(t.element.unbind("scroll.waypoints resize.waypoints"),f.splice(e,1)))})})},destroy:function(){return this.unbind(o)[t]("remove")}},p={refresh:function(){e.each(f,function(t,r){var i=e.isWindow(r.element[0]),s=i?0:r.element.offset().top,o=i?e[n]("viewportHeight"):r.element.height(),a=i?0:r.element.scrollTop();e.each(r.waypoints,function(e,t){if(!t)return;var n=t.options.offset,i=t.offset;if(typeof t.options.offset=="function")n=t.options.offset.apply(t.element);else if(typeof t.options.offset=="string"){var f=parseFloat(t.options.offset);n=t.options.offset.indexOf("%")?Math.ceil(o*(f/100)):f}t.offset=t.element.offset().top-s+a-n;if(t.options.onlyOnScroll)return;i!==null&&r.oldScroll>i&&r.oldScroll<=t.offset?u(t,["up"]):i!==null&&r.oldScroll<i&&r.oldScroll>=t.offset?u(t,["down"]):!i&&r.element.scrollTop()>t.offset&&u(t,["down"])}),r.waypoints.sort(function(e,t){return e.offset-t.offset})})},viewportHeight:function(){return r.innerHeight?r.innerHeight:s.height()},aggregate:function(){var t=e();return e.each(f,function(n,r){e.each(r.waypoints,function(e,n){t=t.add(n.element)})}),t}};e.fn[t]=function(n){if(h[n])return h[n].apply(this,Array.prototype.slice.call(arguments,1));if(typeof n=="function"||!n)return h.init.apply(this,arguments);if(typeof n=="object")return h.init.apply(this,[null,n]);e.error("Method "+n+" does not exist on jQuery "+t)},e.fn[t].defaults={continuous:!0,offset:0,triggerOnce:!1,context:r},e[n]=function(e){return p[e]?p[e].apply(this):p.aggregate()},e[n].settings={resizeThrottle:200,scrollThrottle:100},s.load(function(){e[n]("refresh")})}(jQuery,"waypoint","waypoints",window),function(e){var t=e(window),n=t.height();t.resize(function(){n=t.height()}),e.fn.parallax=function(r,i,s){function l(){o.each(function(){a=o.offset().top}),s?u=function(e){return e.outerHeight(!0)}:u=function(e){return e.height()};if(arguments.length<1||r===null)r="50%";if(arguments.length<2||i===null)i=.5;if(arguments.length<3||s===null)s=!0;var f=t.scrollTop();o.each(function(){var t=e(this),s=t.offset().top,l=u(t);if(s+l<f||s>f+n)return;o.css("backgroundPosition",r+" "+Math.round((a-f)*i)+"px")})}var o=e(this),u,a,f=0;t.bind("scroll",l).resize(l),l()}}(jQuery),$(document).ready(function(){function h(){if(isMobile==1)return!1;$("#highlight").parallax(),$("#highlight-2").parallax(),$(".page.odd").parallax()}function p(){e=$(window).height(),$(window).width()>767&&$("#homepage").css({height:e})}var e,t=1e3,n=.6,r="easeOutExpo",i,s="a.navigateTo",o=$("ul.navigation li a"),u=$(".section"),a=$(".mobileMenuToggle"),f,l=500,c="easeOutExpo";isMobile==1?($(".header").addClass("mobileHeader"),$(".header").hide().clone().prependTo(".page"),$(".page").each(function(){var e=$(this).attr("id");$(this).children(".header").show(),$(this).children(".header").children(".inner").children(".navigation").children("li").each(function(){$(this).children("a").attr("href").substring(1)==e&&$(this).children("a").addClass("active")})})):$(".highlight").addClass("fixed-desktop"),$(window).bind("load",function(){h()}),p(),$(document).on("click",s,function(e){i=$(this).attr("href"),document.title="dunzo"+i.replace(/[_\-\#\!\.\/]/g," ");var n=$(i).offset().top+1;return $("html,body").animate({scrollTop:n},t,r,function(){}),!1}),$(function(){if(isMobile==1)return!1;u.waypoint({handler:function(t,n){var r=$(this);n==="up"&&(r=r.prev());var i=$("ul.navigation li a[href=#"+r.attr("id")+"]");o.removeClass("active"),i.addClass("active");var s=$(r).offset().top;isMobile==1&&$(window).scrollTop()>=e&&$(".header").css({top:s,display:"none"}).fadeIn()},offset:"35%"})}),$(window).bind("resize",function(){p()})}),function(e){var t,n,r,i,s,o,u,a,f,l,c=0,h={},p=[],d=0,v={},m=[],g=null,y=new Image,b=/\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,w=/[^\.]\.(swf)\s*$/i,E,S=1,x=0,T="",N,C,k=!1,L=e.extend(e("<div/>")[0],{prop:0}),A=e.browser.msie&&e.browser.version<7&&!window.XMLHttpRequest,O=function(){n.hide(),y.onerror=y.onload=null,g&&g.abort(),t.empty()},M=function(){!1===h.onError(p,c,h)?(n.hide(),k=!1):(h.titleShow=!1,h.width="auto",h.height="auto",t.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'),D())},_=function(){var r=p[c],i,s,u,a,f,l;O(),h=e.extend({},e.fn.fancybox.defaults,typeof e(r).data("fancybox")=="undefined"?h:e(r).data("fancybox")),l=h.onStart(p,c,h);if(l===!1)k=!1;else{typeof l=="object"&&(h=e.extend(h,l)),u=h.title||(r.nodeName?e(r).attr("title"):r.title)||"",r.nodeName&&!h.orig&&(h.orig=e(r).children("img:first").length?e(r).children("img:first"):e(r)),u===""&&h.orig&&h.titleFromAlt&&(u=h.orig.attr("alt")),i=h.href||(r.nodeName?e(r).attr("href"):r.href)||null;if(/^(?:javascript)/i.test(i)||i=="#")i=null;h.type?(s=h.type,i||(i=h.content)):h.content?s="html":i&&(s=i.match(b)?"image":i.match(w)?"swf":e(r).hasClass("iframe")?"iframe":i.indexOf("#")===0?"inline":"ajax");if(s){s=="inline"&&(r=i.substr(i.indexOf("#")),s=e(r).length>0?"inline":"ajax"),h.type=s,h.href=i,h.title=u,h.autoDimensions&&(h.type=="html"||h.type=="inline"||h.type=="ajax"?(h.width="auto",h.height="auto"):h.autoDimensions=!1),h.modal&&(h.overlayShow=!0,h.hideOnOverlayClick=!1,h.hideOnContentClick=!1,h.enableEscapeButton=!1,h.showCloseButton=!1),h.padding=parseInt(h.padding,10),h.margin=parseInt(h.margin,10),t.css("padding",h.padding+h.margin),e(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change",function(){e(this).replaceWith(o.children())});switch(s){case"html":t.html(h.content),D();break;case"inline":if(e(r).parent().is("#fancybox-content")===!0){k=!1;break}e('<div class="fancybox-inline-tmp" />').hide().insertBefore(e(r)).bind("fancybox-cleanup",function(){e(this).replaceWith(o.children())}).bind("fancybox-cancel",function(){e(this).replaceWith(t.children())}),e(r).appendTo(t),D();break;case"image":k=!1,e.fancybox.showActivity(),y=new Image,y.onerror=function(){M()},y.onload=function(){k=!0,y.onerror=y.onload=null,h.width=y.width,h.height=y.height,e("<img />").attr({id:"fancybox-img",src:y.src,alt:h.title}).appendTo(t),P()},y.src=i;break;case"swf":h.scrolling="no",a='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+h.width+'" height="'+h.height+'"><param name="movie" value="'+i+'"></param>',f="",e.each(h.swf,function(e,t){a+='<param name="'+e+'" value="'+t+'"></param>',f+=" "+e+'="'+t+'"'}),a+='<embed src="'+i+'" type="application/x-shockwave-flash" width="'+h.width+'" height="'+h.height+'"'+f+"></embed></object>",t.html(a),D();break;case"ajax":k=!1,e.fancybox.showActivity(),h.ajax.win=h.ajax.success,g=e.ajax(e.extend({},h.ajax,{url:i,data:h.ajax.data||{},error:function(e){e.status>0&&M()},success:function(e,r,s){if((typeof s=="object"?s:g).status==200){if(typeof h.ajax.win=="function"){l=h.ajax.win(i,e,r,s);if(l===!1){n.hide();return}if(typeof l=="string"||typeof l=="object")e=l}t.html(e),D()}}}));break;case"iframe":P()}}else M()}},D=function(){var n=h.width,r=h.height;n=n.toString().indexOf("%")>-1?parseInt((e(window).width()-h.margin*2)*parseFloat(n)/100,10)+"px":n=="auto"?"auto":n+"px",r=r.toString().indexOf("%")>-1?parseInt((e(window).height()-h.margin*2)*parseFloat(r)/100,10)+"px":r=="auto"?"auto":r+"px",t.wrapInner('<div style="width:'+n+";height:"+r+";overflow: "+(h.scrolling=="auto"?"auto":h.scrolling=="yes"?"scroll":"hidden")+';position:relative;"></div>'),h.width=t.width(),h.height=t.height(),P()},P=function(){var g,y;n.hide();if(i.is(":visible")&&!1===v.onCleanup(m,d,v))e.event.trigger("fancybox-cancel"),k=!1;else{k=!0,e(o.add(r)).unbind(),e(window).unbind("resize.fb scroll.fb"),e(document).unbind("keydown.fb"),i.is(":visible")&&v.titlePosition!=="outside"&&i.css("height",i.height()),m=p,d=c,v=h,v.overlayShow?(r.css({"background-color":v.overlayColor,opacity:v.overlayOpacity,cursor:v.hideOnOverlayClick?"pointer":"auto",height:e(document).height()}),r.is(":visible")||(A&&e("select:not(#fancybox-tmp select)").filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one("fancybox-cleanup",function(){this.style.visibility="inherit"}),r.show())):r.hide(),C=I(),T=v.title||"",x=0,a.empty().removeAttr("style").removeClass();if(v.titleShow!==!1){e.isFunction(v.titleFormat)?g=v.titleFormat(T,m,d,v):g=T&&T.length?v.titlePosition=="float"?'<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">'+T+'</td><td id="fancybox-title-float-right"></td></tr></table>':'<div id="fancybox-title-'+v.titlePosition+'">'+T+"</div>":!1,T=g;if(!!T&&T!==""){a.addClass("fancybox-title-"+v.titlePosition).html(T).appendTo("body").show();switch(v.titlePosition){case"inside":a.css({width:C.width-v.padding*2,marginLeft:v.padding,marginRight:v.padding}),x=a.outerHeight(!0),a.appendTo(s),C.height+=x;break;case"over":a.css({marginLeft:v.padding,width:C.width-v.padding*2,bottom:v.padding}).appendTo(s);break;case"float":a.css("left",parseInt((a.width()-C.width-40)/2,10)*-1).appendTo(i);break;default:a.css({width:C.width-v.padding*2,paddingLeft:v.padding,paddingRight:v.padding}).appendTo(i)}}}a.hide(),i.is(":visible")?(e(u.add(f).add(l)).hide(),g=i.position(),N={top:g.top,left:g.left,width:i.width(),height:i.height()},y=N.width==C.width&&N.height==C.height,o.fadeTo(v.changeFade,.3,function(){var n=function(){o.html(t.contents()).fadeTo(v.changeFade,1,B)};e.event.trigger("fancybox-change"),o.empty().removeAttr("filter").css({"border-width":v.padding,width:C.width-v.padding*2,height:h.autoDimensions?"auto":C.height-x-v.padding*2}),y?n():(L.prop=0,e(L).animate({prop:1},{duration:v.changeSpeed,easing:v.easingChange,step:j,complete:n}))})):(i.removeAttr("style"),o.css("border-width",v.padding),v.transitionIn=="elastic"?(N=q(),o.html(t.contents()),i.show(),v.opacity&&(C.opacity=0),L.prop=0,e(L).animate({prop:1},{duration:v.speedIn,easing:v.easingIn,step:j,complete:B})):(v.titlePosition=="inside"&&x>0&&a.show(),o.css({width:C.width-v.padding*2,height:h.autoDimensions?"auto":C.height-x-v.padding*2}).html(t.contents()),i.css(C).fadeIn(v.transitionIn=="none"?0:v.speedIn,B)))}},H=function(){(v.enableEscapeButton||v.enableKeyboardNav)&&e(document).bind("keydown.fb",function(t){t.keyCode==27&&v.enableEscapeButton?(t.preventDefault(),e.fancybox.close()):(t.keyCode==37||t.keyCode==39)&&v.enableKeyboardNav&&t.target.tagName!=="INPUT"&&t.target.tagName!=="TEXTAREA"&&t.target.tagName!=="SELECT"&&(t.preventDefault(),e.fancybox[t.keyCode==37?"prev":"next"]())}),v.showNavArrows?((v.cyclic&&m.length>1||d!==0)&&f.show(),(v.cyclic&&m.length>1||d!=m.length-1)&&l.show()):(f.hide(),l.hide())},B=function(){e.support.opacity||(o.get(0).style.removeAttribute("filter"),i.get(0).style.removeAttribute("filter")),h.autoDimensions&&o.css("height","auto"),i.css("height","auto"),T&&T.length&&a.show(),v.showCloseButton&&u.show(),H(),v.hideOnContentClick&&o.bind("click",e.fancybox.close),v.hideOnOverlayClick&&r.bind("click",e.fancybox.close),e(window).bind("resize.fb",e.fancybox.resize),v.centerOnScroll&&e(window).bind("scroll.fb",e.fancybox.center),v.type=="iframe"&&e('<iframe id="fancybox-frame" name="fancybox-frame'+(new Date).getTime()+'" frameborder="0" hspace="0" '+(e.browser.msie?'allowtransparency="true""':"")+' scrolling="'+h.scrolling+'" src="'+v.href+'"></iframe>').appendTo(o),i.show(),k=!1,e.fancybox.center(),v.onComplete(m,d,v);var t,n;m.length-1>d&&(t=m[d+1].href,typeof t!="undefined"&&t.match(b)&&(n=new Image,n.src=t)),d>0&&(t=m[d-1].href,typeof t!="undefined"&&t.match(b)&&(n=new Image,n.src=t))},j=function(e){var t={width:parseInt(N.width+(C.width-N.width)*e,10),height:parseInt(N.height+(C.height-N.height)*e,10),top:parseInt(N.top+(C.top-N.top)*e,10),left:parseInt(N.left+(C.left-N.left)*e,10)};typeof C.opacity!="undefined"&&(t.opacity=e<.5?.5:e),i.css(t),o.css({width:t.width-v.padding*2,height:t.height-x*e-v.padding*2})},F=function(){return[e(window).width()-v.margin*2,e(window).height()-v.margin*2,e(document).scrollLeft()+v.margin,e(document).scrollTop()+v.margin]},I=function(){var e=F(),t={},n=v.autoScale,r=v.padding*2;return t.width=v.width.toString().indexOf("%")>-1?parseInt(e[0]*parseFloat(v.width)/100,10):v.width+r,t.height=v.height.toString().indexOf("%")>-1?parseInt(e[1]*parseFloat(v.height)/100,10):v.height+r,n&&(t.width>e[0]||t.height>e[1])&&(h.type=="image"||h.type=="swf"?(n=v.width/v.height,t.width>e[0]&&(t.width=e[0],t.height=parseInt((t.width-r)/n+r,10)),t.height>e[1]&&(t.height=e[1],t.width=parseInt((t.height-r)*n+r,10))):(t.width=Math.min(t.width,e[0]),t.height=Math.min(t.height,e[1]))),t.top=parseInt(Math.max(e[3]-20,e[3]+(e[1]-t.height-40)*.5),10),t.left=parseInt(Math.max(e[2]-20,e[2]+(e[0]-t.width-40)*.5),10),t},q=function(){var t=h.orig?e(h.orig):!1,n={};return t&&t.length?(n=t.offset(),n.top+=parseInt(t.css("paddingTop"),10)||0,n.left+=parseInt(t.css("paddingLeft"),10)||0,n.top+=parseInt(t.css("border-top-width"),10)||0,n.left+=parseInt(t.css("border-left-width"),10)||0,n.width=t.width(),n.height=t.height(),n={width:n.width+v.padding*2,height:n.height+v.padding*2,top:n.top-v.padding-20,left:n.left-v.padding-20}):(t=F(),n={width:v.padding*2,height:v.padding*2,top:parseInt(t[3]+t[1]*.5,10),left:parseInt(t[2]+t[0]*.5,10)}),n},R=function(){n.is(":visible")?(e("div",n).css("top",S*-40+"px"),S=(S+1)%12):clearInterval(E)};e.fn.fancybox=function(t){return e(this).length?(e(this).data("fancybox",e.extend({},t,e.metadata?e(this).metadata():{})).unbind("click.fb").bind("click.fb",function(t){t.preventDefault(),k||(k=!0,e(this).blur(),p=[],c=0,t=e(this).attr("rel")||"",!t||t==""||t==="nofollow"?p.push(this):(p=e("a[rel="+t+"], area[rel="+t+"]"),c=p.index(this)),_())}),this):this},e.fancybox=function(t,n){var r;if(!k){k=!0,r=typeof n!="undefined"?n:{},p=[],c=parseInt(r.index,10)||0;if(e.isArray(t)){for(var i=0,s=t.length;i<s;i++)typeof t[i]=="object"?e(t[i]).data("fancybox",e.extend({},r,t[i])):t[i]=e({}).data("fancybox",e.extend({content:t[i]},r));p=jQuery.merge(p,t)}else typeof t=="object"?e(t).data("fancybox",e.extend({},r,t)):t=e({}).data("fancybox",e.extend({content:t},r)),p.push(t);if(c>p.length||c<0)c=0;_()}},e.fancybox.showActivity=function(){clearInterval(E),n.show(),E=setInterval(R,66)},e.fancybox.hideActivity=function(){n.hide()},e.fancybox.next=function(){return e.fancybox.pos(d+1)},e.fancybox.prev=function(){return e.fancybox.pos(d-1)},e.fancybox.pos=function(e){k||(e=parseInt(e),p=m,e>-1&&e<m.length?(c=e,_()):v.cyclic&&m.length>1&&(c=e>=m.length?0:m.length-1,_()))},e.fancybox.cancel=function(){k||(k=!0,e.event.trigger("fancybox-cancel"),O(),h.onCancel(p,c,h),k=!1)},e.fancybox.close=function(){function t(){r.fadeOut("fast"),a.empty().hide(),i.hide(),e.event.trigger("fancybox-cleanup"),o.empty(),v.onClosed(m,d,v),m=h=[],d=c=0,v=h={},k=!1}if(!k&&!i.is(":hidden")){k=!0;if(v&&!1===v.onCleanup(m,d,v))k=!1;else{O(),e(u.add(f).add(l)).hide(),e(o.add(r)).unbind(),e(window).unbind("resize.fb scroll.fb"),e(document).unbind("keydown.fb"),o.find("iframe").attr("src",A&&/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank"),v.titlePosition!=="inside"&&a.empty(),i.stop();if(v.transitionOut=="elastic"){N=q();var n=i.position();C={top:n.top,left:n.left,width:i.width(),height:i.height()},v.opacity&&(C.opacity=1),a.empty().hide(),L.prop=1,e(L).animate({prop:0},{duration:v.speedOut,easing:v.easingOut,step:j,complete:t})}else i.fadeOut(v.transitionOut=="none"?0:v.speedOut,t)}}},e.fancybox.resize=function(){r.is(":visible")&&r.css("height",e(document).height()),e.fancybox.center(!0)},e.fancybox.center=function(e){var t,n;k||(n=e===!0?1:0,t=F(),!n&&(i.width()>t[0]||i.height()>t[1])||i.stop().animate({top:parseInt(Math.max(t[3]-20,t[3]+(t[1]-o.height()-40)*.5-v.padding)),left:parseInt(Math.max(t[2]-20,t[2]+(t[0]-o.width()-40)*.5-v.padding))},typeof e=="number"?e:200))},e.fancybox.init=function(){e("#fancybox-wrap").length||(e("body").append(t=e('<div id="fancybox-tmp"></div>'),n=e('<div id="fancybox-loading"><div></div></div>'),r=e('<div id="fancybox-overlay"></div>'),i=e('<div id="fancybox-wrap"></div>')),s=e('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(i),s.append(o=e('<div id="fancybox-content"></div>'),u=e('<a id="fancybox-close"></a>'),a=e('<div id="fancybox-title"></div>'),f=e('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'),l=e('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')),u.click(e.fancybox.close),n.click(e.fancybox.cancel),f.click(function(t){t.preventDefault(),e.fancybox.prev()}),l.click(function(t){t.preventDefault(),e.fancybox.next()}),e.fn.mousewheel&&i.bind("mousewheel.fb",function(t,n){if(k)t.preventDefault();else if(e(t.target).get(0).clientHeight==0||e(t.target).get(0).scrollHeight===e(t.target).get(0).clientHeight)t.preventDefault(),e.fancybox[n>0?"prev":"next"]()}),e.support.opacity||i.addClass("fancybox-ie"),A&&(n.addClass("fancybox-ie6"),i.addClass("fancybox-ie6"),e('<iframe id="fancybox-hide-sel-frame" src="'+(/^https/i.test(window.location.href||"")?"javascript:void(false)":"about:blank")+'" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(s)))},e.fn.fancybox.defaults={padding:10,margin:40,opacity:!1,modal:!1,cyclic:!1,scrolling:"auto",width:560,height:340,autoScale:!0,autoDimensions:!0,centerOnScroll:!1,ajax:{},swf:{wmode:"transparent"},hideOnOverlayClick:!0,hideOnContentClick:!1,overlayShow:!0,overlayOpacity:.7,overlayColor:"#777",titleShow:!0,titlePosition:"float",titleFormat:null,titleFromAlt:!1,transitionIn:"fade",transitionOut:"fade",speedIn:300,speedOut:300,changeSpeed:300,changeFade:"fast",easingIn:"swing",easingOut:"swing",showCloseButton:!0,showNavArrows:!0,enableEscapeButton:!0,enableKeyboardNav:!0,onStart:function(){},onCancel:function(){},onComplete:function(){},onCleanup:function(){},onClosed:function(){},onError:function(){}},e(document).ready(function(){e.fancybox.init()})}(jQuery),$(document).ready(function(){var e=$(".thumb,.round-thumb"),t,n,r,i,s=500,o="easeOutExpo",u=$("ul.socialSmall li a"),a=$(".mobileMenuToggle"),f="fade",l=.8,c="#000",h=663,p=372;lazyload=!0,$(function(){if(lazyload==0||isMobile==1)return!1;$("img.lazy").lazyload({placeholder:"images/blank.gif",effect:"fadeIn"})}),a.on("click",function(e){$(this).parent().find("ul.navigation").is(":hidden")?($(this).parent().find("ul.navigation").slideDown(),$(this).addClass("open")):($(this).parent().find("ul.navigation").slideUp(),$(this).removeClass("open")),e.preventDefault()}),e.on({mouseenter:function(){if(isMobile==1)return!1;t=e.find("a").find("img").width(),n=e.find("a").find("img").height(),r=$(this).find("a").attr("title"),$(this).find("a").find("div").hasClass("thumb-rollover")||$(this).find("a").append('<div class="thumb-rollover"></div>'),hoverScreen=$(".thumb-rollover"),hoverScreen.css({width:t,height:n}),typeof r!="undefined"&&r!==!1&&$(this).find(hoverScreen).is(":empty")&&($(this).find(hoverScreen).append('<div class="thumbInfo">'+r+"</div>"),i=$(this).find(hoverScreen),i.stop().animate({opacity:1},s,o))},mouseleave:function(){if(isMobile==1)return!1;$(this).find(hoverScreen).animate({opacity:0},s,o,function(){$(this).remove()})}}),$("a.lightbox").fancybox({transitionIn:f,transitionOut:f,titlePosition:"over",padding:"0",overlayOpacity:l,overlayColor:c,titleFormat:function(e,t,n,r){var i=t[n],s=$(i).parent();if($(s).next().hasClass("fancybox-html"))return $(s).next().length&&$(i).attr("rel")?'<span id="fancybox-title-over"><div class="fancybox-num"> Image:'+(n+1)+" / "+t.length+"</div>"+$(s).next().html()+"</span>":'<span id="fancybox-title-over">'+$(s).next().html()+"</span>";if($(i).attr("rel")&&$(i).attr("title"))return'<span id="fancybox-title-over"><div class="fancybox-num"> Image:'+(n+1)+" / "+t.length+"</div> "+(e.length?""+e:"")+"</span>";if($(i).attr("rel"))return'<span id="fancybox-title-over"><div class="fancybox-num" style="margin-bottom:0px"> Image:'+(n+1)+" / "+t.length+"</div>"+"</span>";if($(i).attr("title"))return'<span id="fancybox-title-over">'+
(e.length?""+e:"")+"</span>";$("#fancybox-title-over").hide()},onComplete:function(){$(window).width()<=767?$(".fancybox-title-over").css({display:"none"}):$(".fancybox-title-over").hide().fadeIn("slow")}}),$("a.media").fancybox({transitionIn:f,transitionOut:f,padding:"0",titlePosition:"outside",width:h,height:p,overlayOpacity:l,overlayColor:c,autoscale:!1,type:"iframe",swf:{wmode:"transparent",allowfullscreen:"true"},titleFormat:function(e,t,n,r){var i=t[n],s=$(i).parent();if($(s).next().hasClass("fancybox-html"))return"<span>"+$(s).next().html()+"</span>"},onComplete:function(){$(window).width()<=767?$(".fancybox-title-outside").css({display:"none"}):$(".fancybox-title-outside").hide().fadeIn("slow")}})}),jQuery(document).ready(function(e){var t=new Array;t.signup_email="Your E-mail",t.success_title="Thanks for signing up!",t.success_content="We'll keep you posted whenever we have any new products or updates. If you ever wish to unsubscribe, you can easily do so via the link that will be in every email.",t.invalide_email="Please enter a valid e-mail address and try again.",t.signup_error="There was an error signing you up. Please try again later.",e("#signup_email").focus(function(){e(this).val()==t[e(this).attr("id")]&&e(this).val("")}),e("#signup_email").blur(function(){e(this).val()==""&&e(this).val(t[e(this).attr("id")])}),e("#newsletter-msg").css({opacity:"0"}),e("#newsletter-loader").css({opacity:"0",display:"block"}),e("#newsletter-form").submit(function(){return e("#newsletter-form .signupSubmit").attr("disabled","disabled"),e("#newsletter-msg").animate({left:e("#newsletter-msg-wrapper").width()-e("#newsletter-msg").width()/2+"px",opacity:0},200,function(){e("#newsletter-msg").removeClass("errorMsg")}),e("#newsletter-loader").stop().animate({"margin-top":"-10px","margin-bottom":"0px",opacity:1},200,function(){var n=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;if(n.test(e("#signup_email").val())==0)e("#newsletter-msg").html(t.invalide_email).addClass("errorMsg"),e("#newsletter-msg").css({position:"absolute",left:"-"+e("#newsletter-msg").width()/2+"px"}),e("#newsletter-msg").animate({left:e("#newsletter-msg-wrapper").width()/2-e("#newsletter-msg").width()/2+"px",opacity:1},200),e("#newsletter-loader").stop().animate({"margin-top":"-20px","margin-bottom":"10px",opacity:0},200,function(){e("#newsletter-form .signupSubmit").removeAttr("disabled")});else{e.ajaxSetup({cache:!1});var r="signup_email="+e("#signup_email").val();e.ajax({type:"POST",url:"php/subscribe.php",data:r,success:function(n){n=="Success"?(e("#signup").children(".content").css({height:e("#signup").children(".content").height()+"px"}),e("#newsletter-form").stop().animate({top:"10px",opacity:0},200,function(){e("#newsletter-form").css({top:"0px",display:"none"}),e(".newsletter-content").stop().animate({top:"10px",opacity:0},200,function(){e(".newsletter-content").css({top:"0px",display:"none"}),e(".newsletter-title").stop().animate({top:"10px",opacity:0},200,function(){e(".newsletter-title").css({top:"0px",display:"none"});var n=e('<h4 class="focus-title newsletter-thankyou"><span>'+t.success_title+'</span></h4><p class="newsletter-thankyou-content">'+t.success_content+'</p><p class="newsletter-thankyou-content"><a href="#" class="newsletter-reload">Reload form</a></p>');n.css({opacity:0,top:"-10px"}),e("#signup").children(".content").append(n),n.stop().animate({top:"0px",opacity:1},200)})})}),e("#signup_email").val(t.signup_email),e("#newsletter-form .signupSubmit").removeAttr("disabled")):(e("#newsletter-msg").html(t.signup_error).addClass("errorMsg"),e("#newsletter-msg").css({position:"absolute",left:"-"+e("#newsletter-msg").width()/2+"px"}),e("#newsletter-msg").animate({left:e("#newsletter-msg-wrapper").width()/2-e("#newsletter-msg").width()/2+"px",opacity:1},200),e("#newsletter-loader").stop().animate({"margin-top":"-20px","margin-bottom":"10px",opacity:0},200,function(){e("#newsletter-form .signupSubmit").removeAttr("disabled")}))},error:function(n,r){e("#newsletter-msg").html(t.signup_error).addClass("errorMsg"),e("#newsletter-msg").css({position:"absolute",left:"-"+e("#newsletter-msg").width()/2+"px"}),e("#newsletter-msg").animate({left:e("#newsletter-msg-wrapper").width()/2-e("#newsletter-msg").width()/2+"px",opacity:1},200),e("#newsletter-loader").stop().animate({"margin-top":"-20px","margin-bottom":"10px",opacity:0},200,function(){e("#newsletter-form .signupSubmit").removeAttr("disabled")})}})}}),!1}),e("#signup .content").on("click",".newsletter-reload",function(t){return e(".newsletter-thankyou, .newsletter-thankyou-content").stop().animate({top:"10px",opacity:0},200,function(){e(".newsletter-thankyou, .newsletter-thankyou-content").remove(),e(".newsletter-title, .newsletter-content, #newsletter-form").css({opacity:0,display:"block",top:"10px"}),e("#newsletter-loader").css({opacity:"0",display:"block"}),e(".newsletter-title, .newsletter-content, #newsletter-form").stop().animate({top:"0px",opacity:1},200)}),!1}),e(window).resize(function(){e("#signup").children(".content").css({height:"auto"})})}),$("document").ready(function(){$("#invitation_button").live("click",function(){var e=$("form #user_email").val();if($("form #user_opt_in").is(":checked"))var t=!0;else var t=!1;var n="user[email]="+e+"&user[opt_in]="+t;return $.ajax({type:"POST",url:"/accounts",data:n,success:function(e){$("#request-invite").html(e),loadSocial()}}),!1})});