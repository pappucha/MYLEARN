/* Modernizr 3.5.0 (Custom Build) | MIT | Build: https://modernizr.com/download/?-domprefixes-prefixes-setclasses-shiv-testallprops-testprop-teststyles */

!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in S)if(S.hasOwnProperty(l)){if(e=[],t=S[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),C.push((o?"":"no-")+s.join("-"))}}function i(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(x&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?w.className.baseVal=t:w.className=t)}function a(e,t){return!!~(""+e).indexOf(t)}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var i,a,l,c,f="modernizr",d=s("div"),p=u();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:f+(r+1),d.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+f,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",c=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=c,w.offsetHeight):d.parentNode.removeChild(d),!!a}function f(e,t){return function(){return e.apply(t,arguments)}}function d(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?f(o,n||t):o);return!1}function p(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function m(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function h(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(p(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+p(t[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==m(e,null,"position")})}return n}function g(e,t,o,i){function u(){f&&(delete j.style,delete j.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var c=h(e,o);if(!r(c,"undefined"))return c}for(var f,d,p,m,g,v=["modernizr","tspan","samp"];!j.style&&v.length;)f=!0,j.modElem=s(v.shift()),j.style=j.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],g=j.style[m],a(m,"-")&&(m=l(m)),j.style[m]!==n){if(i||r(o,"undefined"))return u(),"pfx"==t?m:!0;try{j.style[m]=o}catch(y){}if(j.style[m]!=g)return u(),"pfx"==t?m:!0}return u(),!1}function v(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+z.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?g(s,t,o,i):(s=(e+" "+N.join(a+" ")+a).split(" "),d(s,t,n))}function y(e,t,r){return v(e,n,n,t,r)}var C=[],S=[],E={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){S.push({name:e,fn:t,options:n})},addAsyncTest:function(e){S.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=E,Modernizr=new Modernizr;var b=E._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];E._prefixes=b;var w=t.documentElement,x="svg"===w.nodeName.toLowerCase();x||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function i(e){var t=y[e[g]];return t||(t={},v++,e[g]=v,y[v]=t),t}function a(e,n,r){if(n||(n=t),f)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),f)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=i(e);return!C.shivCSS||c||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),f||l(e,r),e}var c,f,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,f=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){c=!0,f=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:f,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=C,u(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var _="Moz O ms Webkit",N=E._config.usePrefixes?_.toLowerCase().split(" "):[];E._domPrefixes=N;var z=E._config.usePrefixes?_.split(" "):[];E._cssomPrefixes=z;var P=(E.testStyles=c,{elem:s("modernizr")});Modernizr._q.push(function(){delete P.elem});var j={style:P.elem.style};Modernizr._q.unshift(function(){delete j.style});E.testProp=function(e,t,r){return g([e],n,t,r)};E.testAllProps=v,E.testAllProps=y,o(),i(C),delete E.addTest,delete E.addAsyncTest;for(var k=0;k<Modernizr._q.length;k++)Modernizr._q[k]();e.Modernizr=Modernizr}(window,document);

jQuery(document).ready(function($){

	/*! SlickNav Responsive Mobile Menu v1.0.0 */

	;(function(e,t,n){function o(t,n){this.element=t;this.settings=e.extend({},r,n);this._defaults=r;this._name=i;this.init()}var r={label:"MENU",duplicate:true,duration:200,easingOpen:"swing",easingClose:"swing",closedSymbol:"&#9658;",openedSymbol:"&#9660;",prependTo:"body",parentTag:"a",closeOnClick:false,allowParentLinks:false,init:function(){},open:function(){},close:function(){}},i="slicknav",s="slicknav";o.prototype.init=function(){var n=this;var r=e(this.element);var i=this.settings;if(i.duplicate){n.mobileNav=r.clone();n.mobileNav.removeAttr("id");n.mobileNav.find("*").each(function(t,n){e(n).removeAttr("id")})}else n.mobileNav=r;var o=s+"_icon";if(i.label==""){o+=" "+s+"_no-text"}if(i.parentTag=="a"){i.parentTag='a href="#"'}n.mobileNav.attr("class",s+"_nav");var u=e('<div class="'+s+'_menu"></div>');n.btn=e("<"+i.parentTag+' aria-haspopup="true" tabindex="0" class="'+s+"_btn "+s+'_collapsed"><span class="'+s+'_menutxt">'+i.label+'</span><span class="'+o+'"><span class="'+s+'_icon-bar"></span><span class="'+s+'_icon-bar"></span><span class="'+s+'_icon-bar"></span></span></a>');e(u).append(n.btn);e(i.prependTo).prepend(u);u.append(n.mobileNav);var a=n.mobileNav.find("li");e(a).each(function(){var t=e(this);data={};data.children=t.children("ul").attr("role","menu");t.data("menu",data);if(data.children.length>0){var r=t.contents();var o=[];e(r).each(function(){if(!e(this).is("ul")){o.push(this)}else{return false}});var u=e(o).wrapAll("<"+i.parentTag+' role="menuitem" aria-haspopup="true" tabindex="-1" class="'+s+'_item"/>').parent();t.addClass(s+"_collapsed");t.addClass(s+"_parent");e(o).last().after('<span class="'+s+'_arrow">'+i.closedSymbol+"</span>")}else if(t.children().length==0){t.addClass(s+"_txtnode")}t.children("a").attr("role","menuitem").click(function(t){if(i.closeOnClick&&!e(t.target).parent().closest("li").hasClass(s+"_parent"))e(n.btn).click()});if(i.closeOnClick&&i.allowParentLinks){t.children("a").children("a").click(function(t){e(n.btn).click()})}});e(a).each(function(){var t=e(this).data("menu");n._visibilityToggle(t.children,false,null,true)});n._visibilityToggle(n.mobileNav,false,"init",true);n.mobileNav.attr("role","menu");e(t).mousedown(function(){n._outlines(false)});e(t).keyup(function(){n._outlines(true)});e(n.btn).click(function(e){e.preventDefault();n._menuToggle()});n.mobileNav.on("click","."+s+"_item",function(t){t.preventDefault();n._itemClick(e(this))});e(n.btn).keydown(function(e){var t=e||event;if(t.keyCode==13){e.preventDefault();n._menuToggle()}});n.mobileNav.on("keydown","."+s+"_item",function(t){var r=t||event;if(r.keyCode==13){t.preventDefault();n._itemClick(e(t.target))}});if(i.allowParentLinks){e("."+s+"_item a").click(function(e){e.stopImmediatePropagation()})}};o.prototype._menuToggle=function(e){var t=this;var n=t.btn;var r=t.mobileNav;if(n.hasClass(s+"_collapsed")){n.removeClass(s+"_collapsed");n.addClass(s+"_open")}else{n.removeClass(s+"_open");n.addClass(s+"_collapsed")}n.addClass(s+"_animating");t._visibilityToggle(r,true,n)};o.prototype._itemClick=function(e){var t=this;var n=t.settings;var r=e.data("menu");if(!r){r={};r.arrow=e.children("."+s+"_arrow");r.ul=e.next("ul");r.parent=e.parent();e.data("menu",r)}if(r.parent.hasClass(s+"_collapsed")){r.arrow.html(n.openedSymbol);r.parent.removeClass(s+"_collapsed");r.parent.addClass(s+"_open");r.parent.addClass(s+"_animating");t._visibilityToggle(r.ul,true,e)}else{r.arrow.html(n.closedSymbol);r.parent.addClass(s+"_collapsed");r.parent.removeClass(s+"_open");r.parent.addClass(s+"_animating");t._visibilityToggle(r.ul,true,e)}};o.prototype._visibilityToggle=function(t,n,r,i){var o=this;var u=o.settings;var a=o._getActionItems(t);var f=0;if(n)f=u.duration;if(t.hasClass(s+"_hidden")){t.removeClass(s+"_hidden");t.slideDown(f,u.easingOpen,function(){e(r).removeClass(s+"_animating");e(r).parent().removeClass(s+"_animating");if(!i){u.open(r)}});t.attr("aria-hidden","false");a.attr("tabindex","0");o._setVisAttr(t,false)}else{t.addClass(s+"_hidden");t.slideUp(f,this.settings.easingClose,function(){t.attr("aria-hidden","true");a.attr("tabindex","-1");o._setVisAttr(t,true);t.hide();e(r).removeClass(s+"_animating");e(r).parent().removeClass(s+"_animating");if(!i)u.close(r);else if(r=="init")u.init()})}};o.prototype._setVisAttr=function(t,n){var r=this;var i=t.children("li").children("ul").not("."+s+"_hidden");if(!n){i.each(function(){var t=e(this);t.attr("aria-hidden","false");var i=r._getActionItems(t);i.attr("tabindex","0");r._setVisAttr(t,n)})}else{i.each(function(){var t=e(this);t.attr("aria-hidden","true");var i=r._getActionItems(t);i.attr("tabindex","-1");r._setVisAttr(t,n)})}};o.prototype._getActionItems=function(e){var t=e.data("menu");if(!t){t={};var n=e.children("li");var r=n.children("a");t.links=r.add(n.children("."+s+"_item"));e.data("menu",t)}return t.links};o.prototype._outlines=function(t){if(!t){e("."+s+"_item, ."+s+"_btn").css("outline","none")}else{e("."+s+"_item, ."+s+"_btn").css("outline","")}};o.prototype.toggle=function(){$this=this;$this._menuToggle()};o.prototype.open=function(){$this=this;if($this.btn.hasClass(s+"_collapsed")){$this._menuToggle()}};o.prototype.close=function(){$this=this;if($this.btn.hasClass(s+"_open")){$this._menuToggle()}};e.fn[i]=function(t){var n=arguments;if(t===undefined||typeof t==="object"){return this.each(function(){if(!e.data(this,"plugin_"+i)){e.data(this,"plugin_"+i,new o(this,t))}})}else if(typeof t==="string"&&t[0]!=="_"&&t!=="init"){var r;this.each(function(){var s=e.data(this,"plugin_"+i);if(s instanceof o&&typeof s[t]==="function"){r=s[t].apply(s,Array.prototype.slice.call(n,1))}});return r!==undefined?r:this}}})(jQuery,document,window)

	$(function(){
		$('.main-nav').slicknav({ prependTo:'.header-menu', duration: 500, allowParentLinks: true });
	});
	
	//Calculator 1 code 
	
	$("#calc_1").on("click", function() {
				var eps =parseInt($("#calc_1_expected_per_share").val());			  
				var g1 =parseInt($("#calc_1_expected_earning_rate").val());					 
				var y1 =parseInt($("#calc_expected_earning_year").val());			  
				var g2 =parseInt($("#calc_1_annual_growth_rate").val());			  
				var c =parseInt($("#calc_1_expected_future_earnings").val());			  
				var kc =parseInt($("#calc_1_discount_rate").val());	
				if(isNaN(eps) || isNaN(g1) || isNaN(y1) || isNaN(g2) || isNaN(c) || isNaN(kc)){
					alert("Please fill the required fields");
					return;
				}
				$('#calc_1_result').focus();
				var eps =parseInt($("#calc_1_expected_per_share").val());			  
				var g1 =parseInt($("#calc_1_expected_earning_rate").val())/100.0;					 
				var y1 =parseInt($("#calc_expected_earning_year").val());			  
				var g2 =parseInt($("#calc_1_annual_growth_rate").val())/100.0;			  
				var c =parseInt($("#calc_1_expected_future_earnings").val())/100.0;			  
				var kc =parseInt($("#calc_1_discount_rate").val())/100.0;		
				if (g2 >= kc)	{
					alert("Error! The long-term growth rate needs to be less than the discount rate.");
					return;
				}
				var v1 = c*eps*geomSeries((1 + g1)/(1 + kc), 1, y1);
				var v2 = futureValue(c*eps, g1, y1)*(1 + g2)/(kc - g2);
				var v = v1 + presentValue(v2, kc, y1);	
				$("#calc_1_result").val(v.toFixed(2));
				});
			
			function geomSeries(z,m,n){
				var amt;
				if (z == 1.0) amt = n + 1;
				else amt = (Math.pow(z,n + 1) - 1)/(z - 1);
				if (m >= 1) amt -= geomSeries(z,0,m-1);
				return amt;
			}
			function futureValue(p,r,y)	{
				return p*Math.pow(1+r,y);
			}
			
			function presentValue(fv,r,y){
				return fv/Math.pow(1+r,y);
			}
		
		
		  // Calculator 2 Small Cap Value Calculator 
		    $(".results").hide();
			$("#calc_2_smallcap").on("click", function() {			  		  	   
			  var a =parseInt($("#calc_2_mp").val());	
			  var b =parseInt($("#calc_2_bv").val());
			  var c =parseInt($("#calc_2_eps").val());			  
			  var d =parseInt($("#calc_2_sales").val());			  
			  var e =parseInt($("#calc_2_tca").val());		
			  var f =parseInt($("#calc_2_tcl").val());	  
			  var g =parseInt($("#calc_2_tb").val());
			  var h =parseInt($("#calc_2_ecr").val());	
			  var i =parseInt($("#calc_2_tby").val());	
			  var j =parseInt($("#calc_2_nes").val());	
			  var k =parseInt($("#calc_2_npt").val());	
			  
			  //K exceeds D 
			  var emptycheck = checkInputs(); 
			  if(emptycheck == 1){
				return;
			  }
			  
			  if(k > d){
				alert("Net Profit cannot exceed sales. Add extraordinary income to sales if that's creating an anomaly.");
				return;
			  }		
			  
			  $('#calc_2_smallcap').focus();	
			  $(".results").show();		 
			    	
			  //formula 1
			  var fact1_formula = a / b;
			  var factor1 = 0;
			  if(fact1_formula <= 1.4){
				factor1 = 20;				
			  }		
			  else if((parseFloat(fact1_formula)) >= 1.41 && (parseFloat(fact1_formula)) <= 2.2) {
				factor1 = 15;
			  }
			   else if(fact1_formula >= 2.21 && fact1_formula <= 4.0){
				factor1 = 8;
			  }
			   else if(fact1_formula >= 4.1 && fact1_formula <= 6.0){
				factor1 = 5;
			  }
			  else 	if(fact1_formula >= 6.1){
				factor1 = 0;
			  }
			  else{
				//alert("invalid input");
			  }
			  
			  
					 
			  //formula 2
			  var fact2_formula = a/c;		 
			  var factor2 = 0;
			  if(fact2_formula <= 10){
				factor2 = 20;				
			  }	
			  else if(fact2_formula >= 10.1 && fact2_formula <= 16){
				factor2 = 15;
			  }
			   else if(fact2_formula >= 16.1 && fact2_formula <= 22){
				factor2 = 10;
			  }
			   else if(fact2_formula >= 22.1 & fact2_formula <= 25){
				factor2 = 5;
			  }
			  else if(fact2_formula >= 25){
				factor2 = 0;
			  }
			  else{
				//alert("invalid input");
			  }		  
			  
			  //alert("fact 2" + factor2);
			 
			  //formula 3
			  var fact3_formula = f + g;
			  var factor3 = 0;
			  if(e > fact3_formula){
				factor3 = 5;				
			  }	
			  else if(e == fact3_formula){
				factor3 = 3;
			  }
			   else if(e < fact3_formula){
				factor3 = 1;
			  }			   
			  else{
				//alert("invalid input");
			  }		  
			  
			  //alert("fact 3" + factor3);
			  
			  //formula 4
			  var fact4_formula = g/h;
			  var factor4 = 0;
			  if(fact4_formula <= 0.4){
				factor4 = 20;				
			  }		
			  else if(fact4_formula >= 0.41 && fact4_formula <= 1.0){
				factor4 = 15;
			  }
			   else if(fact4_formula >= 1.01 && fact4_formula <= 2){
				factor4 = 10;
			  }
			   else if(fact4_formula >= 2.01 && fact4_formula <= 2.5){
				factor4 = 5;
			  }
			  else if(fact4_formula >= 2.51){
				factor4 = 1;
			  }
			  else{
				//alert("invalid input");
			  } 
			  
			  //alert("fact 4" + factor4);
							  
			  //formula 5
			  var fact5_formula = a / (d / j) ;
			  var factor5 = 0;
			  if(fact5_formula <= 1){
				factor5 = 20;				
			  }		
			  else if(fact5_formula >= 0.41 && fact5_formula <= 1.0){
				factor5 = 15;
			  }
			   else if(fact5_formula >= 1.01 && fact5_formula <= 1.50){
				factor5 = 10;
			  }
			   else if(fact5_formula >= 1.51 && fact5_formula <= 2.5){
				factor5 = 5;
			  }
			  else if(fact5_formula >= 2.51){
				factor5 = 1;
			  }
			  else{
				//alert("invalid input");
			  } 
			  
			  //alert("fact 5" + factor5);
			  
				//formula 6
			  var fact6_formula = (k / j);
			  var factor6 = 0;
			  if(fact6_formula >= 7.5){
				factor6 = 10;				
			  }		
			  else if(fact6_formula <= 7.49 && fact6_formula >= 6.50){
				factor6 = 8;
			  }
			   else if(fact6_formula <= 6.49 && fact6_formula >= 5.0){
				factor6 = 5;
			  }
			   else if(fact6_formula <= 4.9 && fact6_formula >= 3.0){
				factor6 = 2;
			  }
			  else if(fact6_formula < 3){
				factor6 = 0;
			  }
			  else{
				//alert("invalid input");
			  } 
			  
				 
			   //formula 7
			  var fact7_formula = (f + g) / j;				 		  
			  var factor7 = 0;
			  if(fact7_formula > 0){
				factor7 = 10;				
			  }		
			  else if(fact7_formula == 0 ){
				factor7 = 8;
			  }
			  else if(fact7_formula < 0  && fact7_formula >= ((50/100)*b) && fact7_formula <= ((80/100)*b)){
				factor7 = 6;
			  }	
			  else if(fact7_formula < 0  && fact7_formula >= ((30/100)*b) && fact7_formula <= ((50/100)*b)){
				factor7 = 3;
			  }	
			  else if(fact7_formula < 0  && fact7_formula >= ((25/100)*b) && fact7_formula <= ((30/100)*b)){
				factor7 = 1;
			  }			  
			  else{
				factor7 = 0;
			  } 		  		 
			 
			  var total_marks = factor1 + factor2 + factor3 +  factor4 +  factor5 +  factor6 +  factor7;
			  //alert(total_marks);		 
			  var rating = (total_marks/100) * 10;	
			  $("#calc_2_result").val(rating.toFixed(2)); 	  
			  $('.s-result.stars').html(rating.toFixed(2));	
			  makestars("s-result",rating);  
			  $('.s-result1.stars').html(factor1.toFixed(2));	
			  makestars("s-result1",(factor1/20)*10); 
			  $('.s-result2.stars').html(factor2.toFixed(2)); 
			  makestars("s-result2",(factor2/20)*10); 
			  $('.s-result3.stars').html(factor3.toFixed(2));
			  makestars("s-result3",(factor3/5)*10); 
			  $('.s-result4.stars').html(factor4.toFixed(2));
			  makestars("s-result4",(factor4/20)*10); 
			  $('.s-result5.stars').html(factor5.toFixed(2));
			  makestars("s-result5",(factor5/15)*10); 
			  $('.s-result6.stars').html(factor6.toFixed(2));
			  makestars("s-result6",(factor6/10)*10); 
			  $('.s-result7.stars').html(factor7.toFixed(2));
			  makestars("s-result7",(factor7/10)*10); 
			});
	
			function makestars(sclass,s) {				   
					$('p.'+sclass).html('<span class="stars">'+ s +'</span>');
					$('.'+sclass+' .stars').stars();
				
			};
			
			$.fn.stars = function() {
				return $(this).each(function() {
					$(this).html($('<span />').width(Math.max(0, (Math.min(10, parseFloat($(this).html())))) * 16));
				});
			}
			function checkInputs() {
			  var flag=0;
			  var resultcheck = 0;
				$("#form_2 :input[type=text]").each(function(){
					var input = $(this); 
					if(input.val() < 0 || input.val() == '' ) {
						resultcheck = resultcheck + 1;
					} 
				});				
				if(resultcheck > 0){
					flag = 1;
					alert('INPUT fields cannot be empty or negative '); 
					return flag;
				} else {
					flag=0
					return flag;
				}

			}
			
			//Trend Prictor 
			$("#calc_tp").on("click", function() {							
				tinyMCE.triggerSave();					
				var raw_data = $("#input_textarea").val();					
				if(raw_data == ""){
					alert("Please paste the content in above box");
					return;
		        }							
				$(".data-output").html(raw_data);
				var result ="<table>";
				$('.data-output table > tbody > tr').each(function(index, value) {
					var share = $('td:eq(0)', this).text();
					var company = $('td:eq(2)', this).text();
					var interest = $('td:eq(5)', this).text();
					var volume = $('td:eq(8)', this).text();
					var company =company.slice(0,-1);
					var interest =interest.slice(0,-1);
					var volume = volume.slice(0,-1);
					//alert(share + company + interest + volume);
					result += "<tr><td>"+ share +"</td>";
					if(company >=0 && interest >=0 && volume >=0){									
						result += "<td class='trend-up'>Up</td>";
					}
					else if(company >=0 && interest < 0 && volume < 0){
						result += "<td class='trend-down'>Down</td>";
					}
					else if(company < 0 && interest >= 0 && volume >= 0){
						result += "<td class='trend-down'>Down</td>";
					}
					else if(company < 0 && interest < 0 && volume < 0){
						result += "<td class='trend-wb'>Watch and Buy</td>";
					}
					else{
						result += "<td class='trend-neutral'>Neutral</td>";
					}
					result += "</tr>";
					
				});	
				result += "</tr></table>";
				//alert (result);
				$(".trend").html(result);
				$(".content-after-result").show();						
			});
			
			//Option Greek Calculator 
			
		$("#calc_3_ogc").on("click", function() {
		var cps =parseInt($("#calc_3_csp").val());		  
		var tbir =parseInt($("#calc_3_tbir").val());					 
		var op =parseInt($("#calc_3_op").val());			  
		var dte =parseInt($("#calc_3_dte").val());			  
		var vsy =parseInt($("#calc_3_vsy").val());			  
		var dy =parseInt($("#calc_3_dy").val());
		if(isNaN(cps) || isNaN(tbir) || isNaN(op) || isNaN(dte) || isNaN(vsy) || isNaN(dy)){
			alert("Please fill the required fields");
			return;
		}
		$('#calc_3_put').focus();
		var free_rate = tbir/100;		
		var volatility = vsy/100;		
		var time_exp = dte/365;
		time_exp = time_exp.toFixed(9);		
		var divident_yield = dy/100;		
		//(LN((D2/D4))+(((D35-D38)+(POWER(D36,2)/2))*D37))/(D36*SQRT(D37));
		var d1 = (Math.log((cps/op))+(((free_rate - divident_yield) + (Math.pow(volatility,2)/2)) * time_exp)) / (volatility*Math.sqrt(time_exp));
		d1 = d1.toFixed(3);		
		//(LN((D2/D4))+(((D35-D38)-(POWER(D36,2)/2))*D37))/(D36*SQRT(D37))
		var d2 = (Math.log((cps/op))+(((free_rate - divident_yield) - (Math.pow(volatility,2)/2)) * time_exp)) / (volatility * Math.sqrt(time_exp));
		d2 = d2.toFixed(3);		
		//call =((D2*EXP(((-1*D38)*D37)))*NORMSDIST(D39))-((D4*EXP(((-1*D35)*D37)))*NORMSDIST(D40))
		var c = ((cps * Math.exp(((-1*divident_yield) * time_exp))) * NORMSDIST(d1)) - ((op * Math.exp(((-1*free_rate)*time_exp)))* NORMSDIST(d2));
		//put =((D4*EXP(((-1*D35)*D37)))*NORMSDIST((-1*D40)))-((D2*EXP(((-1*D38)*D37)))*NORMSDIST((-1*D39)))
		var put = ((op * Math.exp(((-1 * free_rate) * time_exp))) * NORMSDIST((-1*d2))) - ((cps * Math.exp(((-1*divident_yield) * time_exp))) * NORMSDIST((-1*d1)));
		$("#calc_3_call").val(c.toFixed(2));
		$("#calc_3_put").val(put.toFixed(2));
		
		function cdf(x, mean, variance) {
		  return 0.5 * (1 + erf((x - mean) / (Math.sqrt(2 * variance))));
		}
		function NORMSDIST(x){
			return cdf(x,0,1)
		}

		function erf(x) {
		  // save the sign of x
		  var sign = (x >= 0) ? 1 : -1;
		  x = Math.abs(x);

		  // constants
		  var a1 =  0.254829592;
		  var a2 = -0.284496736;
		  var a3 =  1.421413741;
		  var a4 = -1.453152027;
		  var a5 =  1.061405429;
		  var p  =  0.3275911;

		  // A&S formula 7.1.26
		  var t = 1.0/(1.0 + p*x);
		  var y = 1.0 - (((((a5 * t + a4) * t) + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
		  return sign * y; // erf(-x) = -erf(x);
		}
	});

   //Z-score
   $("#calc_zscore").on("click", function() {
		var ta =parseInt($("#z_total_assets").val());		  
		var wc =parseInt($("#z_working_capital").val());					 
		var re =parseInt($("#z_retained_earnings").val());			  
		var ebit =parseInt($("#z_earning_before_interest_tax").val());
		var mv =parseInt($("#z_marketvalue").val());			  
		var tl =parseInt($("#z_total_liabilities").val());			  
		var sa =parseInt($("#z_sales").val());
				
		if(isNaN(ta) || isNaN(wc) || isNaN(re) || isNaN(ebit) || isNaN(mv) || isNaN(tl) || isNaN(sa)){
			alert("Please fill the required fields");
			return;
		}
		var a = wc/ta;
		var b = re/ta;
		var c = ebit/ta;
		var d = mv/tl;
		var e = sa/ta;
		var zscore  = (1.2*a) + (1.4*b) + (3.3*c) + (0.6*d) + (1.0*e);
		$('#calc_z_result').focus();
		$("#calc_z_result").val(zscore.toFixed(2));
	});

});
