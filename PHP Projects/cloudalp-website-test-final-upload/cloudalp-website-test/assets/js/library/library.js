/* for jquery.min.js */

/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});


/* end jquery*/

/* wow.min.js*/

/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */!function(a,b){if("function"==typeof define&&define.amd)define(["module","exports"],b);else if("undefined"!=typeof exports)b(module,exports);else{var c={exports:{}};b(c,c.exports),a.WOW=c.exports}}(this,function(a,b){"use strict";function c(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function d(a,b){return b.indexOf(a)>=0}function e(a,b){for(var c in b)if(null==a[c]){var d=b[c];a[c]=d}return a}function f(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)}function g(a){var b=arguments.length<=1||void 0===arguments[1]?!1:arguments[1],c=arguments.length<=2||void 0===arguments[2]?!1:arguments[2],d=arguments.length<=3||void 0===arguments[3]?null:arguments[3],e=void 0;return null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e}function h(a,b){null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)&&a["on"+b]()}function i(a,b,c){null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c}function j(a,b,c){null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]}function k(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight}Object.defineProperty(b,"__esModule",{value:!0});var l,m,n=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),o=window.WeakMap||window.MozWeakMap||function(){function a(){c(this,a),this.keys=[],this.values=[]}return n(a,[{key:"get",value:function(a){for(var b=0;b<this.keys.length;b++){var c=this.keys[b];if(c===a)return this.values[b]}}},{key:"set",value:function(a,b){for(var c=0;c<this.keys.length;c++){var d=this.keys[c];if(d===a)return this.values[c]=b,this}return this.keys.push(a),this.values.push(b),this}}]),a}(),p=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver||(m=l=function(){function a(){c(this,a),"undefined"!=typeof console&&null!==console&&(console.warn("MutationObserver is not supported by your browser."),console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))}return n(a,[{key:"observe",value:function(){}}]),a}(),l.notSupported=!0,m),q=window.getComputedStyle||function(a){var b=/(\-([a-z]){1})/g;return{getPropertyValue:function(c){"float"===c&&(c="styleFloat"),b.test(c)&&c.replace(b,function(a,b){return b.toUpperCase()});var d=a.currentStyle;return(null!=d?d[c]:void 0)||null}}},r=function(){function a(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];c(this,a),this.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null,resetAnimation:!0},this.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),this.vendors=["moz","webkit"],this.start=this.start.bind(this),this.resetAnimation=this.resetAnimation.bind(this),this.scrollHandler=this.scrollHandler.bind(this),this.scrollCallback=this.scrollCallback.bind(this),this.scrolled=!0,this.config=e(b,this.defaults),null!=b.scrollContainer&&(this.config.scrollContainer=document.querySelector(b.scrollContainer)),this.animationNameCache=new o,this.wowEvent=g(this.config.boxClass)}return n(a,[{key:"init",value:function(){this.element=window.document.documentElement,d(document.readyState,["interactive","complete"])?this.start():i(document,"DOMContentLoaded",this.start),this.finished=[]}},{key:"start",value:function(){var a=this;if(this.stopped=!1,this.boxes=[].slice.call(this.element.querySelectorAll("."+this.config.boxClass)),this.all=this.boxes.slice(0),this.boxes.length)if(this.disabled())this.resetStyle();else for(var b=0;b<this.boxes.length;b++){var c=this.boxes[b];this.applyStyle(c,!0)}if(this.disabled()||(i(this.config.scrollContainer||window,"scroll",this.scrollHandler),i(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live){var d=new p(function(b){for(var c=0;c<b.length;c++)for(var d=b[c],e=0;e<d.addedNodes.length;e++){var f=d.addedNodes[e];a.doSync(f)}});d.observe(document.body,{childList:!0,subtree:!0})}}},{key:"stop",value:function(){this.stopped=!0,j(this.config.scrollContainer||window,"scroll",this.scrollHandler),j(window,"resize",this.scrollHandler),null!=this.interval&&clearInterval(this.interval)}},{key:"sync",value:function(){p.notSupported&&this.doSync(this.element)}},{key:"doSync",value:function(a){if("undefined"!=typeof a&&null!==a||(a=this.element),1===a.nodeType){a=a.parentNode||a;for(var b=a.querySelectorAll("."+this.config.boxClass),c=0;c<b.length;c++){var e=b[c];d(e,this.all)||(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),this.scrolled=!0)}}}},{key:"show",value:function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),h(a,this.wowEvent),this.config.resetAnimation&&(i(a,"animationend",this.resetAnimation),i(a,"oanimationend",this.resetAnimation),i(a,"webkitAnimationEnd",this.resetAnimation),i(a,"MSAnimationEnd",this.resetAnimation)),a}},{key:"applyStyle",value:function(a,b){var c=this,d=a.getAttribute("data-wow-duration"),e=a.getAttribute("data-wow-delay"),f=a.getAttribute("data-wow-iteration");return this.animate(function(){return c.customStyle(a,b,d,e,f)})}},{key:"resetStyle",value:function(){for(var a=0;a<this.boxes.length;a++){var b=this.boxes[a];b.style.visibility="visible"}}},{key:"resetAnimation",value:function(a){if(a.type.toLowerCase().indexOf("animationend")>=0){var b=a.target||a.srcElement;b.className=b.className.replace(this.config.animateClass,"").trim()}}},{key:"customStyle",value:function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a}},{key:"vendorSet",value:function(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c];a[""+c]=d;for(var e=0;e<this.vendors.length;e++){var f=this.vendors[e];a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=d}}}},{key:"vendorCSS",value:function(a,b){for(var c=q(a),d=c.getPropertyCSSValue(b),e=0;e<this.vendors.length;e++){var f=this.vendors[e];d=d||c.getPropertyCSSValue("-"+f+"-"+b)}return d}},{key:"animationName",value:function(a){var b=void 0;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=q(a).getPropertyValue("animation-name")}return"none"===b?"":b}},{key:"cacheAnimationName",value:function(a){return this.animationNameCache.set(a,this.animationName(a))}},{key:"cachedAnimationName",value:function(a){return this.animationNameCache.get(a)}},{key:"scrollHandler",value:function(){this.scrolled=!0}},{key:"scrollCallback",value:function(){if(this.scrolled){this.scrolled=!1;for(var a=[],b=0;b<this.boxes.length;b++){var c=this.boxes[b];if(c){if(this.isVisible(c)){this.show(c);continue}a.push(c)}}this.boxes=a,this.boxes.length||this.config.live||this.stop()}}},{key:"offsetTop",value:function(a){for(;void 0===a.offsetTop;)a=a.parentNode;for(var b=a.offsetTop;a.offsetParent;)a=a.offsetParent,b+=a.offsetTop;return b}},{key:"isVisible",value:function(a){var b=a.getAttribute("data-wow-offset")||this.config.offset,c=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,d=c+Math.min(this.element.clientHeight,k())-b,e=this.offsetTop(a),f=e+a.clientHeight;return d>=e&&f>=c}},{key:"disabled",value:function(){return!this.config.mobile&&f(navigator.userAgent)}}]),a}();b["default"]=r,a.exports=b["default"]});


/* end wow*/



/* for hoverIntent.min.js*/
! function(a) {
    a.fn.hoverIntent = function(b, c, d) {
        var e = {
            interval: 100,
            sensitivity: 6,
            timeout: 0
        };
        e = "object" == typeof b ? a.extend(e, b) : a.isFunction(c) ? a.extend(e, {
            over: b,
            out: c,
            selector: d
        }) : a.extend(e, {
            over: b,
            out: b,
            selector: c
        });
        var f, g, h, i, j = function(a) {
                f = a.pageX, g = a.pageY
            },
            k = function(b, c) {
                return c.hoverIntent_t = clearTimeout(c.hoverIntent_t), Math.sqrt((h - f) * (h - f) + (i - g) * (i - g)) < e.sensitivity ? (a(c).off("mousemove.hoverIntent", j), c.hoverIntent_s = !0, e.over.apply(c, [b])) : (h = f, i = g, c.hoverIntent_t = setTimeout(function() {
                    k(b, c)
                }, e.interval), void 0)
            },
            l = function(a, b) {
                return b.hoverIntent_t = clearTimeout(b.hoverIntent_t), b.hoverIntent_s = !1, e.out.apply(b, [a])
            },
            m = function(b) {
                var c = a.extend({}, b),
                    d = this;
                d.hoverIntent_t && (d.hoverIntent_t = clearTimeout(d.hoverIntent_t)), "mouseenter" === b.type ? (h = c.pageX, i = c.pageY, a(d).on("mousemove.hoverIntent", j), d.hoverIntent_s || (d.hoverIntent_t = setTimeout(function() {
                    k(c, d)
                }, e.interval))) : (a(d).off("mousemove.hoverIntent", j), d.hoverIntent_s && (d.hoverIntent_t = setTimeout(function() {
                    l(c, d)
                }, e.timeout)))
            };
        return this.on({
            "mouseenter.hoverIntent": m,
            "mouseleave.hoverIntent": m
        }, e.selector)
    }
}(jQuery);

/* end hoverIntent*/

/*for wp-embed.min.js*/
! function(a, b) {
    "use strict";

    function c() {
        if (!e) {
            e = !0;
            var a, c, d, f, g = -1 !== navigator.appVersion.indexOf("MSIE 10"),
                h = !!navigator.userAgent.match(/Trident.*rv:11\./),
                i = b.querySelectorAll("iframe.wp-embedded-content");
            for (c = 0; c < i.length; c++) {
                if (d = i[c], !d.getAttribute("data-secret")) f = Math.random().toString(36).substr(2, 10), d.src += "#?secret=" + f, d.setAttribute("data-secret", f);
                if (g || h) a = d.cloneNode(!0), a.removeAttribute("security"), d.parentNode.replaceChild(a, d)
            }
        }
    }
    var d = !1,
        e = !1;
    if (b.querySelector)
        if (a.addEventListener) d = !0;
    if (a.wp = a.wp || {}, !a.wp.receiveEmbedMessage)
        if (a.wp.receiveEmbedMessage = function(c) {
                var d = c.data;
                if (d)
                    if (d.secret || d.message || d.value)
                        if (!/[^a-zA-Z0-9]/.test(d.secret)) {
                            var e, f, g, h, i, j = b.querySelectorAll('iframe[data-secret="' + d.secret + '"]'),
                                k = b.querySelectorAll('blockquote[data-secret="' + d.secret + '"]');
                            for (e = 0; e < k.length; e++) k[e].style.display = "none";
                            for (e = 0; e < j.length; e++)
                                if (f = j[e], c.source === f.contentWindow) {
                                    if (f.removeAttribute("style"), "height" === d.message) {
                                        if (g = parseInt(d.value, 10), g > 1e3) g = 1e3;
                                        else if (~~g < 200) g = 200;
                                        f.height = g
                                    }
                                    if ("link" === d.message)
                                        if (h = b.createElement("a"), i = b.createElement("a"), h.href = f.getAttribute("src"), i.href = d.value, i.host === h.host)
                                            if (b.activeElement === f) a.top.location.href = d.value
                                } else;
                        }
            }, d) a.addEventListener("message", a.wp.receiveEmbedMessage, !1), b.addEventListener("DOMContentLoaded", c, !1), a.addEventListener("load", c, !1)
}(window, document);

/* end wp-embed*/

/* for wp-emoji-relese.min.js*/

// Source: wp-includes/js/twemoji.min.js
var twemoji = function() {
    "use strict";

    function a(a, b) {
        return document.createTextNode(b ? a.replace(s, "") : a)
    }

    function b(a) {
        return a.replace(u, h)
    }

    function c(a, b) {
        return "".concat(b.base, b.size, "/", a, b.ext)
    }

    function d(a, b) {
        for (var c, e, f = a.childNodes, g = f.length; g--;) c = f[g], e = c.nodeType, 3 === e ? b.push(c) : 1 !== e || "ownerSVGElement" in c || v.test(c.nodeName.toLowerCase()) || d(c, b);
        return b
    }

    function e(a) {
        return o(a.indexOf(t) < 0 ? a.replace(s, "") : a)
    }

    function f(b, c) {
        for (var f, g, h, i, j, k, l, m, n, o, p, q, s, t = d(b, []), u = t.length; u--;) {
            for (h = !1, i = document.createDocumentFragment(), j = t[u], k = j.nodeValue, m = 0; l = r.exec(k);) {
                if (n = l.index, n !== m && i.appendChild(a(k.slice(m, n), !0)), p = l[0], q = e(p), m = n + p.length, s = c.callback(q, c), q && s) {
                    o = new Image, o.onerror = c.onerror, o.setAttribute("draggable", "false"), f = c.attributes(p, q);
                    for (g in f) f.hasOwnProperty(g) && 0 !== g.indexOf("on") && !o.hasAttribute(g) && o.setAttribute(g, f[g]);
                    o.className = c.className, o.alt = p, o.src = s, h = !0, i.appendChild(o)
                }
                o || i.appendChild(a(p, !1)), o = null
            }
            h && (m < k.length && i.appendChild(a(k.slice(m), !0)), j.parentNode.replaceChild(i, j))
        }
        return b
    }

    function g(a, c) {
        return m(a, function(a) {
            var d, f, g = a,
                h = e(a),
                i = c.callback(h, c);
            if (h && i) {
                g = "<img ".concat('class="', c.className, '" ', 'draggable="false" ', 'alt="', a, '"', ' src="', i, '"'), d = c.attributes(a, h);
                for (f in d) d.hasOwnProperty(f) && 0 !== f.indexOf("on") && g.indexOf(" " + f + "=") === -1 && (g = g.concat(" ", f, '="', b(d[f]), '"'));
                g = g.concat("/>")
            }
            return g
        })
    }

    function h(a) {
        return q[a]
    }

    function i() {
        return null
    }

    function j(a) {
        return "number" == typeof a ? a + "x" + a : a
    }

    function k(a) {
        var b = "string" == typeof a ? parseInt(a, 16) : a;
        return b < 65536 ? w(b) : (b -= 65536, w(55296 + (b >> 10), 56320 + (1023 & b)))
    }

    function l(a, b) {
        return b && "function" != typeof b || (b = {
            callback: b
        }), ("string" == typeof a ? g : f)(a, {
            callback: b.callback || c,
            attributes: "function" == typeof b.attributes ? b.attributes : i,
            base: "string" == typeof b.base ? b.base : p.base,
            ext: b.ext || p.ext,
            size: b.folder || j(b.size || p.size),
            className: b.className || p.className,
            onerror: b.onerror || p.onerror
        })
    }

    function m(a, b) {
        return String(a).replace(r, b)
    }

    function n(a) {
        r.lastIndex = 0;
        var b = r.test(a);
        return r.lastIndex = 0, b
    }

    function o(a, b) {
        for (var c = [], d = 0, e = 0, f = 0; f < a.length;) d = a.charCodeAt(f++), e ? (c.push((65536 + (e - 55296 << 10) + (d - 56320)).toString(16)), e = 0) : 55296 <= d && d <= 56319 ? e = d : c.push(d.toString(16));
        return c.join(b || "-")
    }
    var p = {
            base: "https://twemoji.maxcdn.com/2/",
            ext: ".png",
            size: "72x72",
            className: "emoji",
            convert: {
                fromCodePoint: k,
                toCodePoint: o
            },
            onerror: function() {
                this.parentNode && this.parentNode.replaceChild(a(this.alt, !1), this)
            },
            parse: l,
            replace: m,
            test: n
        },
        q = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
        },
        r = /(?:\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffb|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb\udffc]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffd]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69])(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[\xa9\xae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g,
        s = /\uFE0F/g,
        t = String.fromCharCode(8205),
        u = /[&<>'"]/g,
        v = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/,
        w = String.fromCharCode;
    return p
}();
// Source: wp-includes/js/wp-emoji.min.js
! function(a, b) {
    function c() {
        function c() {
            return !j.implementation.hasFeature || j.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
        }

        function d() {
            if (!k) {
                if ("undefined" == typeof a.twemoji) {
                    if (l > 600) return;
                    return a.clearTimeout(h), h = a.setTimeout(d, 50), void l++
                }
                g = a.twemoji, k = !0, i && new i(function(a) {
                    for (var b, c, d, g, h = a.length; h--;) {
                        if (b = a[h].addedNodes, c = a[h].removedNodes, d = b.length, 1 === d && 1 === c.length && 3 === b[0].nodeType && "IMG" === c[0].nodeName && b[0].data === c[0].alt && "load-failed" === c[0].getAttribute("data-error")) return;
                        for (; d--;) {
                            if (g = b[d], 3 === g.nodeType) {
                                if (!g.parentNode) continue;
                                if (m)
                                    for (; g.nextSibling && 3 === g.nextSibling.nodeType;) g.nodeValue = g.nodeValue + g.nextSibling.nodeValue, g.parentNode.removeChild(g.nextSibling);
                                g = g.parentNode
                            }!g || 1 !== g.nodeType || g.className && "string" == typeof g.className && g.className.indexOf("wp-exclude-emoji") !== -1 || e(g.textContent) && f(g)
                        }
                    }
                }).observe(j.body, {
                    childList: !0,
                    subtree: !0
                }), f(j.body)
            }
        }

        function e(a) {
            var b = /[\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2300\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692\u2693\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]/,
                c = /[\uDC00-\uDFFF]/;
            return !!a && (c.test(a) || b.test(a))
        }

        function f(a, d) {
            var e;
            return !b.supports.everything && g && a && ("string" == typeof a || a.childNodes && a.childNodes.length) ? (d = d || {}, e = {
                base: c() ? b.svgUrl : b.baseUrl,
                ext: c() ? b.svgExt : b.ext,
                className: d.className || "emoji",
                callback: function(a, c) {
                    switch (a) {
                        case "a9":
                        case "ae":
                        case "2122":
                        case "2194":
                        case "2660":
                        case "2663":
                        case "2665":
                        case "2666":
                            return !1
                    }
                    return !(b.supports.everythingExceptFlag && !/^1f1(?:e[6-9a-f]|f[0-9a-f])-1f1(?:e[6-9a-f]|f[0-9a-f])$/.test(a) && !/^(1f3f3-fe0f-200d-1f308|1f3f4-200d-2620-fe0f)$/.test(a)) && "".concat(c.base, a, c.ext)
                },
                onerror: function() {
                    g.parentNode && (this.setAttribute("data-error", "load-failed"), g.parentNode.replaceChild(j.createTextNode(g.alt), g))
                }
            }, "object" == typeof d.imgAttr && (e.attributes = function() {
                return d.imgAttr
            }), g.parse(a, e)) : a
        }
        var g, h, i = a.MutationObserver || a.WebKitMutationObserver || a.MozMutationObserver,
            j = a.document,
            k = !1,
            l = 0,
            m = a.navigator.userAgent.indexOf("Trident/7.0") > 0;
        return b && (b.DOMReady ? d() : b.readyCallback = d), {
            parse: f,
            test: e
        }
    }
    a.wp = a.wp || {}, a.wp.emoji = new c
}(window, window._wpemojiSettings);
/* end wp-emoji-relese*/


/* for slick slider*/
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        // If any child element receives focus within the slider we need to pause the autoplay
        _.$slider
            .off('focus.slick blur.slick')
            .on(
                'focus.slick',
                '*', 
                function(event) {
                    var $sf = $(this);

                    setTimeout(function() {
                        if( _.options.pauseOnFocus ) {
                            if ($sf.is(':focus')) {
                                _.focussed = true;
                                _.autoPlay();
                            }
                        }
                    }, 0);
                }
            ).on(
                'blur.slick',
                '*', 
                function(event) {
                    var $sf = $(this);

                    // When a blur occurs on any elements within the slider we become unfocused
                    if( _.options.pauseOnFocus ) {
                        _.focussed = false;
                        _.autoPlay();
                    }
                }
            );
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, swipeTarget, centerOffset;

        centerOffset = _.options.centerMode === true ? Math.floor(_.$list.width() / 2) : 0;
        swipeTarget = (_.swipeLeft * -1) + centerOffset;

        if (_.options.swipeToSlide === true) {

            _.$slideTrack.find('.slick-slide').each(function(index, slide) {

                var slideOuterWidth, slideOffset, slideRightBoundary;
                slideOuterWidth = $(slide).outerWidth();
                slideOffset = slide.offsetLeft;
                if (_.options.centerMode !== true) {
                    slideOffset += (slideOuterWidth / 2);
                }

                slideRightBoundary = slideOffset + (slideOuterWidth);

                if (swipeTarget < slideRightBoundary) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq( _.options.slidesToShow + _.slideCount + 1 )
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));



/* end slick-slider*/

/* for handlebar.min.js*/
/*!

 handlebars v3.0.1

Copyright (C) 2011-2014 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
!(function (a, b) {
    "function" == typeof define && define.amd
      ? define([], b)
      : "object" == typeof exports
      ? (module.exports = b())
      : (a.Handlebars = b());
  })(this, function () {
    var a = (function () {
        "use strict";
        function a(a) {
          return i[a];
        }
        function b(a) {
          for (var b = 1; b < arguments.length; b++)
            for (var c in arguments[b])
              Object.prototype.hasOwnProperty.call(arguments[b], c) &&
                (a[c] = arguments[b][c]);
          return a;
        }
        function c(a, b) {
          for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
          return -1;
        }
        function d(b) {
          if ("string" != typeof b) {
            if (b && b.toHTML) return b.toHTML();
            if (null == b) return "";
            if (!b) return b + "";
            b = "" + b;
          }
          return k.test(b) ? b.replace(j, a) : b;
        }
        function e(a) {
          return a || 0 === a ? (n(a) && 0 === a.length ? !0 : !1) : !0;
        }
        function f(a, b) {
          return (a.path = b), a;
        }
        function g(a, b) {
          return (a ? a + "." : "") + b;
        }
        var h = {},
          i = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;",
          },
          j = /[&<>"'`]/g,
          k = /[&<>"'`]/;
        h.extend = b;
        var l = Object.prototype.toString;
        h.toString = l;
        var m = function (a) {
          return "function" == typeof a;
        };
        m(/x/) &&
          (m = function (a) {
            return "function" == typeof a && "[object Function]" === l.call(a);
          });
        var m;
        h.isFunction = m;
        var n =
          Array.isArray ||
          function (a) {
            return a && "object" == typeof a
              ? "[object Array]" === l.call(a)
              : !1;
          };
        return (
          (h.isArray = n),
          (h.indexOf = c),
          (h.escapeExpression = d),
          (h.isEmpty = e),
          (h.blockParams = f),
          (h.appendContextPath = g),
          h
        );
      })(),
      b = (function () {
        "use strict";
        function a(a, b) {
          var d,
            e,
            f = b && b.loc;
          f &&
            ((d = f.start.line),
            (e = f.start.column),
            (a += " - " + d + ":" + e));
          for (
            var g = Error.prototype.constructor.call(this, a), h = 0;
            h < c.length;
            h++
          )
            this[c[h]] = g[c[h]];
          f && ((this.lineNumber = d), (this.column = e));
        }
        var b,
          c = [
            "description",
            "fileName",
            "lineNumber",
            "message",
            "name",
            "number",
            "stack",
          ];
        return (a.prototype = new Error()), (b = a);
      })(),
      c = (function (a, b) {
        "use strict";
        function c(a, b) {
          (this.helpers = a || {}), (this.partials = b || {}), d(this);
        }
        function d(a) {
          a.registerHelper("helperMissing", function () {
            if (1 === arguments.length) return void 0;
            throw new g(
              "Missing helper: '" + arguments[arguments.length - 1].name + "'"
            );
          }),
            a.registerHelper("blockHelperMissing", function (b, c) {
              var d = c.inverse,
                e = c.fn;
              if (b === !0) return e(this);
              if (b === !1 || null == b) return d(this);
              if (k(b))
                return b.length > 0
                  ? (c.ids && (c.ids = [c.name]), a.helpers.each(b, c))
                  : d(this);
              if (c.data && c.ids) {
                var g = q(c.data);
                (g.contextPath = f.appendContextPath(c.data.contextPath, c.name)),
                  (c = { data: g });
              }
              return e(b, c);
            }),
            a.registerHelper("each", function (a, b) {
              function c(b, c, g) {
                d &&
                  ((d.key = b),
                  (d.index = c),
                  (d.first = 0 === c),
                  (d.last = !!g),
                  e && (d.contextPath = e + b)),
                  (m += h(a[b], {
                    data: d,
                    blockParams: f.blockParams([a[b], b], [e + b, null]),
                  }));
              }
              if (!b) throw new g("Must pass iterator to #each");
              var d,
                e,
                h = b.fn,
                i = b.inverse,
                j = 0,
                m = "";
              if (
                (b.data &&
                  b.ids &&
                  (e = f.appendContextPath(b.data.contextPath, b.ids[0]) + "."),
                l(a) && (a = a.call(this)),
                b.data && (d = q(b.data)),
                a && "object" == typeof a)
              )
                if (k(a))
                  for (var n = a.length; n > j; j++) c(j, j, j === a.length - 1);
                else {
                  var o;
                  for (var p in a)
                    a.hasOwnProperty(p) && (o && c(o, j - 1), (o = p), j++);
                  o && c(o, j - 1, !0);
                }
              return 0 === j && (m = i(this)), m;
            }),
            a.registerHelper("if", function (a, b) {
              return (
                l(a) && (a = a.call(this)),
                (!b.hash.includeZero && !a) || f.isEmpty(a)
                  ? b.inverse(this)
                  : b.fn(this)
              );
            }),
            a.registerHelper("unless", function (b, c) {
              return a.helpers["if"].call(this, b, {
                fn: c.inverse,
                inverse: c.fn,
                hash: c.hash,
              });
            }),
            a.registerHelper("with", function (a, b) {
              l(a) && (a = a.call(this));
              var c = b.fn;
              if (f.isEmpty(a)) return b.inverse(this);
              if (b.data && b.ids) {
                var d = q(b.data);
                (d.contextPath = f.appendContextPath(
                  b.data.contextPath,
                  b.ids[0]
                )),
                  (b = { data: d });
              }
              return c(a, b);
            }),
            a.registerHelper("log", function (b, c) {
              var d =
                c.data && null != c.data.level ? parseInt(c.data.level, 10) : 1;
              a.log(d, b);
            }),
            a.registerHelper("lookup", function (a, b) {
              return a && a[b];
            });
        }
        var e = {},
          f = a,
          g = b,
          h = "3.0.1";
        e.VERSION = h;
        var i = 6;
        e.COMPILER_REVISION = i;
        var j = {
          1: "<= 1.0.rc.2",
          2: "== 1.0.0-rc.3",
          3: "== 1.0.0-rc.4",
          4: "== 1.x.x",
          5: "== 2.0.0-alpha.x",
          6: ">= 2.0.0-beta.1",
        };
        e.REVISION_CHANGES = j;
        var k = f.isArray,
          l = f.isFunction,
          m = f.toString,
          n = "[object Object]";
        (e.HandlebarsEnvironment = c),
          (c.prototype = {
            constructor: c,
            logger: o,
            log: p,
            registerHelper: function (a, b) {
              if (m.call(a) === n) {
                if (b) throw new g("Arg not supported with multiple helpers");
                f.extend(this.helpers, a);
              } else this.helpers[a] = b;
            },
            unregisterHelper: function (a) {
              delete this.helpers[a];
            },
            registerPartial: function (a, b) {
              if (m.call(a) === n) f.extend(this.partials, a);
              else {
                if ("undefined" == typeof b)
                  throw new g("Attempting to register a partial as undefined");
                this.partials[a] = b;
              }
            },
            unregisterPartial: function (a) {
              delete this.partials[a];
            },
          });
        var o = {
          methodMap: { 0: "debug", 1: "info", 2: "warn", 3: "error" },
          DEBUG: 0,
          INFO: 1,
          WARN: 2,
          ERROR: 3,
          level: 1,
          log: function (a, b) {
            if ("undefined" != typeof console && o.level <= a) {
              var c = o.methodMap[a];
              (console[c] || console.log).call(console, b);
            }
          },
        };
        e.logger = o;
        var p = o.log;
        e.log = p;
        var q = function (a) {
          var b = f.extend({}, a);
          return (b._parent = a), b;
        };
        return (e.createFrame = q), e;
      })(a, b),
      d = (function () {
        "use strict";
        function a(a) {
          this.string = a;
        }
        var b;
        return (
          (a.prototype.toString = a.prototype.toHTML =
            function () {
              return "" + this.string;
            }),
          (b = a)
        );
      })(),
      e = (function (a, b, c) {
        "use strict";
        function d(a) {
          var b = (a && a[0]) || 1,
            c = n;
          if (b !== c) {
            if (c > b) {
              var d = o[c],
                e = o[b];
              throw new m(
                "Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" +
                  d +
                  ") or downgrade your runtime to an older version (" +
                  e +
                  ")."
              );
            }
            throw new m(
              "Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" +
                a[1] +
                ")."
            );
          }
        }
        function e(a, b) {
          if (!b) throw new m("No environment passed to template");
          if (!a || !a.main) throw new m("Unknown template object: " + typeof a);
          b.VM.checkRevision(a.compiler);
          var c = function (c, d, e) {
              e.hash && (d = l.extend({}, d, e.hash)),
                (c = b.VM.resolvePartial.call(this, c, d, e));
              var f = b.VM.invokePartial.call(this, c, d, e);
              if (
                (null == f &&
                  b.compile &&
                  ((e.partials[e.name] = b.compile(c, a.compilerOptions, b)),
                  (f = e.partials[e.name](d, e))),
                null != f)
              ) {
                if (e.indent) {
                  for (
                    var g = f.split("\n"), h = 0, i = g.length;
                    i > h && (g[h] || h + 1 !== i);
                    h++
                  )
                    g[h] = e.indent + g[h];
                  f = g.join("\n");
                }
                return f;
              }
              throw new m(
                "The partial " +
                  e.name +
                  " could not be compiled when running in runtime-only mode"
              );
            },
            d = {
              strict: function (a, b) {
                if (!(b in a)) throw new m('"' + b + '" not defined in ' + a);
                return a[b];
              },
              lookup: function (a, b) {
                for (var c = a.length, d = 0; c > d; d++)
                  if (a[d] && null != a[d][b]) return a[d][b];
              },
              lambda: function (a, b) {
                return "function" == typeof a ? a.call(b) : a;
              },
              escapeExpression: l.escapeExpression,
              invokePartial: c,
              fn: function (b) {
                return a[b];
              },
              programs: [],
              program: function (a, b, c, d, e) {
                var g = this.programs[a],
                  h = this.fn(a);
                return (
                  b || e || d || c
                    ? (g = f(this, a, h, b, c, d, e))
                    : g || (g = this.programs[a] = f(this, a, h)),
                  g
                );
              },
              data: function (a, b) {
                for (; a && b--; ) a = a._parent;
                return a;
              },
              merge: function (a, b) {
                var c = a || b;
                return a && b && a !== b && (c = l.extend({}, b, a)), c;
              },
              noop: b.VM.noop,
              compilerInfo: a.compiler,
            },
            e = function (b, c) {
              c = c || {};
              var f = c.data;
              e._setup(c), !c.partial && a.useData && (f = j(b, f));
              var g,
                h = a.useBlockParams ? [] : void 0;
              return (
                a.useDepths && (g = c.depths ? [b].concat(c.depths) : [b]),
                a.main.call(d, b, d.helpers, d.partials, f, h, g)
              );
            };
          return (
            (e.isTop = !0),
            (e._setup = function (c) {
              c.partial
                ? ((d.helpers = c.helpers), (d.partials = c.partials))
                : ((d.helpers = d.merge(c.helpers, b.helpers)),
                  a.usePartial && (d.partials = d.merge(c.partials, b.partials)));
            }),
            (e._child = function (b, c, e, g) {
              if (a.useBlockParams && !e) throw new m("must pass block params");
              if (a.useDepths && !g) throw new m("must pass parent depths");
              return f(d, b, a[b], c, 0, e, g);
            }),
            e
          );
        }
        function f(a, b, c, d, e, f, g) {
          var h = function (b, e) {
            return (
              (e = e || {}),
              c.call(
                a,
                b,
                a.helpers,
                a.partials,
                e.data || d,
                f && [e.blockParams].concat(f),
                g && [b].concat(g)
              )
            );
          };
          return (
            (h.program = b),
            (h.depth = g ? g.length : 0),
            (h.blockParams = e || 0),
            h
          );
        }
        function g(a, b, c) {
          return (
            a
              ? a.call || c.name || ((c.name = a), (a = c.partials[a]))
              : (a = c.partials[c.name]),
            a
          );
        }
        function h(a, b, c) {
          if (((c.partial = !0), void 0 === a))
            throw new m("The partial " + c.name + " could not be found");
          return a instanceof Function ? a(b, c) : void 0;
        }
        function i() {
          return "";
        }
        function j(a, b) {
          return (b && "root" in b) || ((b = b ? p(b) : {}), (b.root = a)), b;
        }
        var k = {},
          l = a,
          m = b,
          n = c.COMPILER_REVISION,
          o = c.REVISION_CHANGES,
          p = c.createFrame;
        return (
          (k.checkRevision = d),
          (k.template = e),
          (k.program = f),
          (k.resolvePartial = g),
          (k.invokePartial = h),
          (k.noop = i),
          k
        );
      })(a, b, c),
      f = (function (a, b, c, d, e) {
        "use strict";
        var f,
          g = a,
          h = b,
          i = c,
          j = d,
          k = e,
          l = function () {
            var a = new g.HandlebarsEnvironment();
            return (
              j.extend(a, g),
              (a.SafeString = h),
              (a.Exception = i),
              (a.Utils = j),
              (a.escapeExpression = j.escapeExpression),
              (a.VM = k),
              (a.template = function (b) {
                return k.template(b, a);
              }),
              a
            );
          },
          m = l();
        m.create = l;
        var n = "undefined" != typeof global ? global : window,
          o = n.Handlebars;
        return (
          (m.noConflict = function () {
            n.Handlebars === m && (n.Handlebars = o);
          }),
          (m["default"] = m),
          (f = m)
        );
      })(c, d, b, a, e),
      g = (function () {
        "use strict";
        var a,
          b = {
            Program: function (a, b, c, d) {
              (this.loc = d),
                (this.type = "Program"),
                (this.body = a),
                (this.blockParams = b),
                (this.strip = c);
            },
            MustacheStatement: function (a, b, c, d, e, f) {
              (this.loc = f),
                (this.type = "MustacheStatement"),
                (this.path = a),
                (this.params = b || []),
                (this.hash = c),
                (this.escaped = d),
                (this.strip = e);
            },
            BlockStatement: function (a, b, c, d, e, f, g, h, i) {
              (this.loc = i),
                (this.type = "BlockStatement"),
                (this.path = a),
                (this.params = b || []),
                (this.hash = c),
                (this.program = d),
                (this.inverse = e),
                (this.openStrip = f),
                (this.inverseStrip = g),
                (this.closeStrip = h);
            },
            PartialStatement: function (a, b, c, d, e) {
              (this.loc = e),
                (this.type = "PartialStatement"),
                (this.name = a),
                (this.params = b || []),
                (this.hash = c),
                (this.indent = ""),
                (this.strip = d);
            },
            ContentStatement: function (a, b) {
              (this.loc = b),
                (this.type = "ContentStatement"),
                (this.original = this.value = a);
            },
            CommentStatement: function (a, b, c) {
              (this.loc = c),
                (this.type = "CommentStatement"),
                (this.value = a),
                (this.strip = b);
            },
            SubExpression: function (a, b, c, d) {
              (this.loc = d),
                (this.type = "SubExpression"),
                (this.path = a),
                (this.params = b || []),
                (this.hash = c);
            },
            PathExpression: function (a, b, c, d, e) {
              (this.loc = e),
                (this.type = "PathExpression"),
                (this.data = a),
                (this.original = d),
                (this.parts = c),
                (this.depth = b);
            },
            StringLiteral: function (a, b) {
              (this.loc = b),
                (this.type = "StringLiteral"),
                (this.original = this.value = a);
            },
            NumberLiteral: function (a, b) {
              (this.loc = b),
                (this.type = "NumberLiteral"),
                (this.original = this.value = Number(a));
            },
            BooleanLiteral: function (a, b) {
              (this.loc = b),
                (this.type = "BooleanLiteral"),
                (this.original = this.value = "true" === a);
            },
            Hash: function (a, b) {
              (this.loc = b), (this.type = "Hash"), (this.pairs = a);
            },
            HashPair: function (a, b, c) {
              (this.loc = c),
                (this.type = "HashPair"),
                (this.key = a),
                (this.value = b);
            },
            helpers: {
              helperExpression: function (a) {
                return !(
                  "SubExpression" !== a.type &&
                  !a.params.length &&
                  !a.hash
                );
              },
              scopedId: function (a) {
                return /^\.|this\b/.test(a.original);
              },
              simpleId: function (a) {
                return 1 === a.parts.length && !b.helpers.scopedId(a) && !a.depth;
              },
            },
          };
        return (a = b);
      })(),
      h = (function () {
        "use strict";
        var a,
          b = (function () {
            function a() {
              this.yy = {};
            }
            var b = {
                trace: function () {},
                yy: {},
                symbols_: {
                  error: 2,
                  root: 3,
                  program: 4,
                  EOF: 5,
                  program_repetition0: 6,
                  statement: 7,
                  mustache: 8,
                  block: 9,
                  rawBlock: 10,
                  partial: 11,
                  content: 12,
                  COMMENT: 13,
                  CONTENT: 14,
                  openRawBlock: 15,
                  END_RAW_BLOCK: 16,
                  OPEN_RAW_BLOCK: 17,
                  helperName: 18,
                  openRawBlock_repetition0: 19,
                  openRawBlock_option0: 20,
                  CLOSE_RAW_BLOCK: 21,
                  openBlock: 22,
                  block_option0: 23,
                  closeBlock: 24,
                  openInverse: 25,
                  block_option1: 26,
                  OPEN_BLOCK: 27,
                  openBlock_repetition0: 28,
                  openBlock_option0: 29,
                  openBlock_option1: 30,
                  CLOSE: 31,
                  OPEN_INVERSE: 32,
                  openInverse_repetition0: 33,
                  openInverse_option0: 34,
                  openInverse_option1: 35,
                  openInverseChain: 36,
                  OPEN_INVERSE_CHAIN: 37,
                  openInverseChain_repetition0: 38,
                  openInverseChain_option0: 39,
                  openInverseChain_option1: 40,
                  inverseAndProgram: 41,
                  INVERSE: 42,
                  inverseChain: 43,
                  inverseChain_option0: 44,
                  OPEN_ENDBLOCK: 45,
                  OPEN: 46,
                  mustache_repetition0: 47,
                  mustache_option0: 48,
                  OPEN_UNESCAPED: 49,
                  mustache_repetition1: 50,
                  mustache_option1: 51,
                  CLOSE_UNESCAPED: 52,
                  OPEN_PARTIAL: 53,
                  partialName: 54,
                  partial_repetition0: 55,
                  partial_option0: 56,
                  param: 57,
                  sexpr: 58,
                  OPEN_SEXPR: 59,
                  sexpr_repetition0: 60,
                  sexpr_option0: 61,
                  CLOSE_SEXPR: 62,
                  hash: 63,
                  hash_repetition_plus0: 64,
                  hashSegment: 65,
                  ID: 66,
                  EQUALS: 67,
                  blockParams: 68,
                  OPEN_BLOCK_PARAMS: 69,
                  blockParams_repetition_plus0: 70,
                  CLOSE_BLOCK_PARAMS: 71,
                  path: 72,
                  dataName: 73,
                  STRING: 74,
                  NUMBER: 75,
                  BOOLEAN: 76,
                  DATA: 77,
                  pathSegments: 78,
                  SEP: 79,
                  $accept: 0,
                  $end: 1,
                },
                terminals_: {
                  2: "error",
                  5: "EOF",
                  13: "COMMENT",
                  14: "CONTENT",
                  16: "END_RAW_BLOCK",
                  17: "OPEN_RAW_BLOCK",
                  21: "CLOSE_RAW_BLOCK",
                  27: "OPEN_BLOCK",
                  31: "CLOSE",
                  32: "OPEN_INVERSE",
                  37: "OPEN_INVERSE_CHAIN",
                  42: "INVERSE",
                  45: "OPEN_ENDBLOCK",
                  46: "OPEN",
                  49: "OPEN_UNESCAPED",
                  52: "CLOSE_UNESCAPED",
                  53: "OPEN_PARTIAL",
                  59: "OPEN_SEXPR",
                  62: "CLOSE_SEXPR",
                  66: "ID",
                  67: "EQUALS",
                  69: "OPEN_BLOCK_PARAMS",
                  71: "CLOSE_BLOCK_PARAMS",
                  74: "STRING",
                  75: "NUMBER",
                  76: "BOOLEAN",
                  77: "DATA",
                  79: "SEP",
                },
                productions_: [
                  0,
                  [3, 2],
                  [4, 1],
                  [7, 1],
                  [7, 1],
                  [7, 1],
                  [7, 1],
                  [7, 1],
                  [7, 1],
                  [12, 1],
                  [10, 3],
                  [15, 5],
                  [9, 4],
                  [9, 4],
                  [22, 6],
                  [25, 6],
                  [36, 6],
                  [41, 2],
                  [43, 3],
                  [43, 1],
                  [24, 3],
                  [8, 5],
                  [8, 5],
                  [11, 5],
                  [57, 1],
                  [57, 1],
                  [58, 5],
                  [63, 1],
                  [65, 3],
                  [68, 3],
                  [18, 1],
                  [18, 1],
                  [18, 1],
                  [18, 1],
                  [18, 1],
                  [54, 1],
                  [54, 1],
                  [73, 2],
                  [72, 1],
                  [78, 3],
                  [78, 1],
                  [6, 0],
                  [6, 2],
                  [19, 0],
                  [19, 2],
                  [20, 0],
                  [20, 1],
                  [23, 0],
                  [23, 1],
                  [26, 0],
                  [26, 1],
                  [28, 0],
                  [28, 2],
                  [29, 0],
                  [29, 1],
                  [30, 0],
                  [30, 1],
                  [33, 0],
                  [33, 2],
                  [34, 0],
                  [34, 1],
                  [35, 0],
                  [35, 1],
                  [38, 0],
                  [38, 2],
                  [39, 0],
                  [39, 1],
                  [40, 0],
                  [40, 1],
                  [44, 0],
                  [44, 1],
                  [47, 0],
                  [47, 2],
                  [48, 0],
                  [48, 1],
                  [50, 0],
                  [50, 2],
                  [51, 0],
                  [51, 1],
                  [55, 0],
                  [55, 2],
                  [56, 0],
                  [56, 1],
                  [60, 0],
                  [60, 2],
                  [61, 0],
                  [61, 1],
                  [64, 1],
                  [64, 2],
                  [70, 1],
                  [70, 2],
                ],
                performAction: function (a, b, c, d, e, f) {
                  var g = f.length - 1;
                  switch (e) {
                    case 1:
                      return f[g - 1];
                    case 2:
                      this.$ = new d.Program(f[g], null, {}, d.locInfo(this._$));
                      break;
                    case 3:
                      this.$ = f[g];
                      break;
                    case 4:
                      this.$ = f[g];
                      break;
                    case 5:
                      this.$ = f[g];
                      break;
                    case 6:
                      this.$ = f[g];
                      break;
                    case 7:
                      this.$ = f[g];
                      break;
                    case 8:
                      this.$ = new d.CommentStatement(
                        d.stripComment(f[g]),
                        d.stripFlags(f[g], f[g]),
                        d.locInfo(this._$)
                      );
                      break;
                    case 9:
                      this.$ = new d.ContentStatement(f[g], d.locInfo(this._$));
                      break;
                    case 10:
                      this.$ = d.prepareRawBlock(
                        f[g - 2],
                        f[g - 1],
                        f[g],
                        this._$
                      );
                      break;
                    case 11:
                      this.$ = {
                        path: f[g - 3],
                        params: f[g - 2],
                        hash: f[g - 1],
                      };
                      break;
                    case 12:
                      this.$ = d.prepareBlock(
                        f[g - 3],
                        f[g - 2],
                        f[g - 1],
                        f[g],
                        !1,
                        this._$
                      );
                      break;
                    case 13:
                      this.$ = d.prepareBlock(
                        f[g - 3],
                        f[g - 2],
                        f[g - 1],
                        f[g],
                        !0,
                        this._$
                      );
                      break;
                    case 14:
                      this.$ = {
                        path: f[g - 4],
                        params: f[g - 3],
                        hash: f[g - 2],
                        blockParams: f[g - 1],
                        strip: d.stripFlags(f[g - 5], f[g]),
                      };
                      break;
                    case 15:
                      this.$ = {
                        path: f[g - 4],
                        params: f[g - 3],
                        hash: f[g - 2],
                        blockParams: f[g - 1],
                        strip: d.stripFlags(f[g - 5], f[g]),
                      };
                      break;
                    case 16:
                      this.$ = {
                        path: f[g - 4],
                        params: f[g - 3],
                        hash: f[g - 2],
                        blockParams: f[g - 1],
                        strip: d.stripFlags(f[g - 5], f[g]),
                      };
                      break;
                    case 17:
                      this.$ = {
                        strip: d.stripFlags(f[g - 1], f[g - 1]),
                        program: f[g],
                      };
                      break;
                    case 18:
                      var h = d.prepareBlock(
                          f[g - 2],
                          f[g - 1],
                          f[g],
                          f[g],
                          !1,
                          this._$
                        ),
                        i = new d.Program([h], null, {}, d.locInfo(this._$));
                      (i.chained = !0),
                        (this.$ = {
                          strip: f[g - 2].strip,
                          program: i,
                          chain: !0,
                        });
                      break;
                    case 19:
                      this.$ = f[g];
                      break;
                    case 20:
                      this.$ = {
                        path: f[g - 1],
                        strip: d.stripFlags(f[g - 2], f[g]),
                      };
                      break;
                    case 21:
                      this.$ = d.prepareMustache(
                        f[g - 3],
                        f[g - 2],
                        f[g - 1],
                        f[g - 4],
                        d.stripFlags(f[g - 4], f[g]),
                        this._$
                      );
                      break;
                    case 22:
                      this.$ = d.prepareMustache(
                        f[g - 3],
                        f[g - 2],
                        f[g - 1],
                        f[g - 4],
                        d.stripFlags(f[g - 4], f[g]),
                        this._$
                      );
                      break;
                    case 23:
                      this.$ = new d.PartialStatement(
                        f[g - 3],
                        f[g - 2],
                        f[g - 1],
                        d.stripFlags(f[g - 4], f[g]),
                        d.locInfo(this._$)
                      );
                      break;
                    case 24:
                      this.$ = f[g];
                      break;
                    case 25:
                      this.$ = f[g];
                      break;
                    case 26:
                      this.$ = new d.SubExpression(
                        f[g - 3],
                        f[g - 2],
                        f[g - 1],
                        d.locInfo(this._$)
                      );
                      break;
                    case 27:
                      this.$ = new d.Hash(f[g], d.locInfo(this._$));
                      break;
                    case 28:
                      this.$ = new d.HashPair(f[g - 2], f[g], d.locInfo(this._$));
                      break;
                    case 29:
                      this.$ = f[g - 1];
                      break;
                    case 30:
                      this.$ = f[g];
                      break;
                    case 31:
                      this.$ = f[g];
                      break;
                    case 32:
                      this.$ = new d.StringLiteral(f[g], d.locInfo(this._$));
                      break;
                    case 33:
                      this.$ = new d.NumberLiteral(f[g], d.locInfo(this._$));
                      break;
                    case 34:
                      this.$ = new d.BooleanLiteral(f[g], d.locInfo(this._$));
                      break;
                    case 35:
                      this.$ = f[g];
                      break;
                    case 36:
                      this.$ = f[g];
                      break;
                    case 37:
                      this.$ = d.preparePath(!0, f[g], this._$);
                      break;
                    case 38:
                      this.$ = d.preparePath(!1, f[g], this._$);
                      break;
                    case 39:
                      f[g - 2].push({ part: f[g], separator: f[g - 1] }),
                        (this.$ = f[g - 2]);
                      break;
                    case 40:
                      this.$ = [{ part: f[g] }];
                      break;
                    case 41:
                      this.$ = [];
                      break;
                    case 42:
                      f[g - 1].push(f[g]);
                      break;
                    case 43:
                      this.$ = [];
                      break;
                    case 44:
                      f[g - 1].push(f[g]);
                      break;
                    case 51:
                      this.$ = [];
                      break;
                    case 52:
                      f[g - 1].push(f[g]);
                      break;
                    case 57:
                      this.$ = [];
                      break;
                    case 58:
                      f[g - 1].push(f[g]);
                      break;
                    case 63:
                      this.$ = [];
                      break;
                    case 64:
                      f[g - 1].push(f[g]);
                      break;
                    case 71:
                      this.$ = [];
                      break;
                    case 72:
                      f[g - 1].push(f[g]);
                      break;
                    case 75:
                      this.$ = [];
                      break;
                    case 76:
                      f[g - 1].push(f[g]);
                      break;
                    case 79:
                      this.$ = [];
                      break;
                    case 80:
                      f[g - 1].push(f[g]);
                      break;
                    case 83:
                      this.$ = [];
                      break;
                    case 84:
                      f[g - 1].push(f[g]);
                      break;
                    case 87:
                      this.$ = [f[g]];
                      break;
                    case 88:
                      f[g - 1].push(f[g]);
                      break;
                    case 89:
                      this.$ = [f[g]];
                      break;
                    case 90:
                      f[g - 1].push(f[g]);
                  }
                },
                table: [
                  {
                    3: 1,
                    4: 2,
                    5: [2, 41],
                    6: 3,
                    13: [2, 41],
                    14: [2, 41],
                    17: [2, 41],
                    27: [2, 41],
                    32: [2, 41],
                    46: [2, 41],
                    49: [2, 41],
                    53: [2, 41],
                  },
                  { 1: [3] },
                  { 5: [1, 4] },
                  {
                    5: [2, 2],
                    7: 5,
                    8: 6,
                    9: 7,
                    10: 8,
                    11: 9,
                    12: 10,
                    13: [1, 11],
                    14: [1, 18],
                    15: 16,
                    17: [1, 21],
                    22: 14,
                    25: 15,
                    27: [1, 19],
                    32: [1, 20],
                    37: [2, 2],
                    42: [2, 2],
                    45: [2, 2],
                    46: [1, 12],
                    49: [1, 13],
                    53: [1, 17],
                  },
                  { 1: [2, 1] },
                  {
                    5: [2, 42],
                    13: [2, 42],
                    14: [2, 42],
                    17: [2, 42],
                    27: [2, 42],
                    32: [2, 42],
                    37: [2, 42],
                    42: [2, 42],
                    45: [2, 42],
                    46: [2, 42],
                    49: [2, 42],
                    53: [2, 42],
                  },
                  {
                    5: [2, 3],
                    13: [2, 3],
                    14: [2, 3],
                    17: [2, 3],
                    27: [2, 3],
                    32: [2, 3],
                    37: [2, 3],
                    42: [2, 3],
                    45: [2, 3],
                    46: [2, 3],
                    49: [2, 3],
                    53: [2, 3],
                  },
                  {
                    5: [2, 4],
                    13: [2, 4],
                    14: [2, 4],
                    17: [2, 4],
                    27: [2, 4],
                    32: [2, 4],
                    37: [2, 4],
                    42: [2, 4],
                    45: [2, 4],
                    46: [2, 4],
                    49: [2, 4],
                    53: [2, 4],
                  },
                  {
                    5: [2, 5],
                    13: [2, 5],
                    14: [2, 5],
                    17: [2, 5],
                    27: [2, 5],
                    32: [2, 5],
                    37: [2, 5],
                    42: [2, 5],
                    45: [2, 5],
                    46: [2, 5],
                    49: [2, 5],
                    53: [2, 5],
                  },
                  {
                    5: [2, 6],
                    13: [2, 6],
                    14: [2, 6],
                    17: [2, 6],
                    27: [2, 6],
                    32: [2, 6],
                    37: [2, 6],
                    42: [2, 6],
                    45: [2, 6],
                    46: [2, 6],
                    49: [2, 6],
                    53: [2, 6],
                  },
                  {
                    5: [2, 7],
                    13: [2, 7],
                    14: [2, 7],
                    17: [2, 7],
                    27: [2, 7],
                    32: [2, 7],
                    37: [2, 7],
                    42: [2, 7],
                    45: [2, 7],
                    46: [2, 7],
                    49: [2, 7],
                    53: [2, 7],
                  },
                  {
                    5: [2, 8],
                    13: [2, 8],
                    14: [2, 8],
                    17: [2, 8],
                    27: [2, 8],
                    32: [2, 8],
                    37: [2, 8],
                    42: [2, 8],
                    45: [2, 8],
                    46: [2, 8],
                    49: [2, 8],
                    53: [2, 8],
                  },
                  {
                    18: 22,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    18: 31,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    4: 32,
                    6: 3,
                    13: [2, 41],
                    14: [2, 41],
                    17: [2, 41],
                    27: [2, 41],
                    32: [2, 41],
                    37: [2, 41],
                    42: [2, 41],
                    45: [2, 41],
                    46: [2, 41],
                    49: [2, 41],
                    53: [2, 41],
                  },
                  {
                    4: 33,
                    6: 3,
                    13: [2, 41],
                    14: [2, 41],
                    17: [2, 41],
                    27: [2, 41],
                    32: [2, 41],
                    42: [2, 41],
                    45: [2, 41],
                    46: [2, 41],
                    49: [2, 41],
                    53: [2, 41],
                  },
                  { 12: 34, 14: [1, 18] },
                  {
                    18: 36,
                    54: 35,
                    58: 37,
                    59: [1, 38],
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    5: [2, 9],
                    13: [2, 9],
                    14: [2, 9],
                    16: [2, 9],
                    17: [2, 9],
                    27: [2, 9],
                    32: [2, 9],
                    37: [2, 9],
                    42: [2, 9],
                    45: [2, 9],
                    46: [2, 9],
                    49: [2, 9],
                    53: [2, 9],
                  },
                  {
                    18: 39,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    18: 40,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    18: 41,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    31: [2, 71],
                    47: 42,
                    59: [2, 71],
                    66: [2, 71],
                    74: [2, 71],
                    75: [2, 71],
                    76: [2, 71],
                    77: [2, 71],
                  },
                  {
                    21: [2, 30],
                    31: [2, 30],
                    52: [2, 30],
                    59: [2, 30],
                    62: [2, 30],
                    66: [2, 30],
                    69: [2, 30],
                    74: [2, 30],
                    75: [2, 30],
                    76: [2, 30],
                    77: [2, 30],
                  },
                  {
                    21: [2, 31],
                    31: [2, 31],
                    52: [2, 31],
                    59: [2, 31],
                    62: [2, 31],
                    66: [2, 31],
                    69: [2, 31],
                    74: [2, 31],
                    75: [2, 31],
                    76: [2, 31],
                    77: [2, 31],
                  },
                  {
                    21: [2, 32],
                    31: [2, 32],
                    52: [2, 32],
                    59: [2, 32],
                    62: [2, 32],
                    66: [2, 32],
                    69: [2, 32],
                    74: [2, 32],
                    75: [2, 32],
                    76: [2, 32],
                    77: [2, 32],
                  },
                  {
                    21: [2, 33],
                    31: [2, 33],
                    52: [2, 33],
                    59: [2, 33],
                    62: [2, 33],
                    66: [2, 33],
                    69: [2, 33],
                    74: [2, 33],
                    75: [2, 33],
                    76: [2, 33],
                    77: [2, 33],
                  },
                  {
                    21: [2, 34],
                    31: [2, 34],
                    52: [2, 34],
                    59: [2, 34],
                    62: [2, 34],
                    66: [2, 34],
                    69: [2, 34],
                    74: [2, 34],
                    75: [2, 34],
                    76: [2, 34],
                    77: [2, 34],
                  },
                  {
                    21: [2, 38],
                    31: [2, 38],
                    52: [2, 38],
                    59: [2, 38],
                    62: [2, 38],
                    66: [2, 38],
                    69: [2, 38],
                    74: [2, 38],
                    75: [2, 38],
                    76: [2, 38],
                    77: [2, 38],
                    79: [1, 43],
                  },
                  { 66: [1, 30], 78: 44 },
                  {
                    21: [2, 40],
                    31: [2, 40],
                    52: [2, 40],
                    59: [2, 40],
                    62: [2, 40],
                    66: [2, 40],
                    69: [2, 40],
                    74: [2, 40],
                    75: [2, 40],
                    76: [2, 40],
                    77: [2, 40],
                    79: [2, 40],
                  },
                  {
                    50: 45,
                    52: [2, 75],
                    59: [2, 75],
                    66: [2, 75],
                    74: [2, 75],
                    75: [2, 75],
                    76: [2, 75],
                    77: [2, 75],
                  },
                  {
                    23: 46,
                    36: 48,
                    37: [1, 50],
                    41: 49,
                    42: [1, 51],
                    43: 47,
                    45: [2, 47],
                  },
                  { 26: 52, 41: 53, 42: [1, 51], 45: [2, 49] },
                  { 16: [1, 54] },
                  {
                    31: [2, 79],
                    55: 55,
                    59: [2, 79],
                    66: [2, 79],
                    74: [2, 79],
                    75: [2, 79],
                    76: [2, 79],
                    77: [2, 79],
                  },
                  {
                    31: [2, 35],
                    59: [2, 35],
                    66: [2, 35],
                    74: [2, 35],
                    75: [2, 35],
                    76: [2, 35],
                    77: [2, 35],
                  },
                  {
                    31: [2, 36],
                    59: [2, 36],
                    66: [2, 36],
                    74: [2, 36],
                    75: [2, 36],
                    76: [2, 36],
                    77: [2, 36],
                  },
                  {
                    18: 56,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    28: 57,
                    31: [2, 51],
                    59: [2, 51],
                    66: [2, 51],
                    69: [2, 51],
                    74: [2, 51],
                    75: [2, 51],
                    76: [2, 51],
                    77: [2, 51],
                  },
                  {
                    31: [2, 57],
                    33: 58,
                    59: [2, 57],
                    66: [2, 57],
                    69: [2, 57],
                    74: [2, 57],
                    75: [2, 57],
                    76: [2, 57],
                    77: [2, 57],
                  },
                  {
                    19: 59,
                    21: [2, 43],
                    59: [2, 43],
                    66: [2, 43],
                    74: [2, 43],
                    75: [2, 43],
                    76: [2, 43],
                    77: [2, 43],
                  },
                  {
                    18: 63,
                    31: [2, 73],
                    48: 60,
                    57: 61,
                    58: 64,
                    59: [1, 38],
                    63: 62,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  { 66: [1, 68] },
                  {
                    21: [2, 37],
                    31: [2, 37],
                    52: [2, 37],
                    59: [2, 37],
                    62: [2, 37],
                    66: [2, 37],
                    69: [2, 37],
                    74: [2, 37],
                    75: [2, 37],
                    76: [2, 37],
                    77: [2, 37],
                    79: [1, 43],
                  },
                  {
                    18: 63,
                    51: 69,
                    52: [2, 77],
                    57: 70,
                    58: 64,
                    59: [1, 38],
                    63: 71,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  { 24: 72, 45: [1, 73] },
                  { 45: [2, 48] },
                  {
                    4: 74,
                    6: 3,
                    13: [2, 41],
                    14: [2, 41],
                    17: [2, 41],
                    27: [2, 41],
                    32: [2, 41],
                    37: [2, 41],
                    42: [2, 41],
                    45: [2, 41],
                    46: [2, 41],
                    49: [2, 41],
                    53: [2, 41],
                  },
                  { 45: [2, 19] },
                  {
                    18: 75,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    4: 76,
                    6: 3,
                    13: [2, 41],
                    14: [2, 41],
                    17: [2, 41],
                    27: [2, 41],
                    32: [2, 41],
                    45: [2, 41],
                    46: [2, 41],
                    49: [2, 41],
                    53: [2, 41],
                  },
                  { 24: 77, 45: [1, 73] },
                  { 45: [2, 50] },
                  {
                    5: [2, 10],
                    13: [2, 10],
                    14: [2, 10],
                    17: [2, 10],
                    27: [2, 10],
                    32: [2, 10],
                    37: [2, 10],
                    42: [2, 10],
                    45: [2, 10],
                    46: [2, 10],
                    49: [2, 10],
                    53: [2, 10],
                  },
                  {
                    18: 63,
                    31: [2, 81],
                    56: 78,
                    57: 79,
                    58: 64,
                    59: [1, 38],
                    63: 80,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    59: [2, 83],
                    60: 81,
                    62: [2, 83],
                    66: [2, 83],
                    74: [2, 83],
                    75: [2, 83],
                    76: [2, 83],
                    77: [2, 83],
                  },
                  {
                    18: 63,
                    29: 82,
                    31: [2, 53],
                    57: 83,
                    58: 64,
                    59: [1, 38],
                    63: 84,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    69: [2, 53],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    18: 63,
                    31: [2, 59],
                    34: 85,
                    57: 86,
                    58: 64,
                    59: [1, 38],
                    63: 87,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    69: [2, 59],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    18: 63,
                    20: 88,
                    21: [2, 45],
                    57: 89,
                    58: 64,
                    59: [1, 38],
                    63: 90,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  { 31: [1, 91] },
                  {
                    31: [2, 72],
                    59: [2, 72],
                    66: [2, 72],
                    74: [2, 72],
                    75: [2, 72],
                    76: [2, 72],
                    77: [2, 72],
                  },
                  { 31: [2, 74] },
                  {
                    21: [2, 24],
                    31: [2, 24],
                    52: [2, 24],
                    59: [2, 24],
                    62: [2, 24],
                    66: [2, 24],
                    69: [2, 24],
                    74: [2, 24],
                    75: [2, 24],
                    76: [2, 24],
                    77: [2, 24],
                  },
                  {
                    21: [2, 25],
                    31: [2, 25],
                    52: [2, 25],
                    59: [2, 25],
                    62: [2, 25],
                    66: [2, 25],
                    69: [2, 25],
                    74: [2, 25],
                    75: [2, 25],
                    76: [2, 25],
                    77: [2, 25],
                  },
                  {
                    21: [2, 27],
                    31: [2, 27],
                    52: [2, 27],
                    62: [2, 27],
                    65: 92,
                    66: [1, 93],
                    69: [2, 27],
                  },
                  {
                    21: [2, 87],
                    31: [2, 87],
                    52: [2, 87],
                    62: [2, 87],
                    66: [2, 87],
                    69: [2, 87],
                  },
                  {
                    21: [2, 40],
                    31: [2, 40],
                    52: [2, 40],
                    59: [2, 40],
                    62: [2, 40],
                    66: [2, 40],
                    67: [1, 94],
                    69: [2, 40],
                    74: [2, 40],
                    75: [2, 40],
                    76: [2, 40],
                    77: [2, 40],
                    79: [2, 40],
                  },
                  {
                    21: [2, 39],
                    31: [2, 39],
                    52: [2, 39],
                    59: [2, 39],
                    62: [2, 39],
                    66: [2, 39],
                    69: [2, 39],
                    74: [2, 39],
                    75: [2, 39],
                    76: [2, 39],
                    77: [2, 39],
                    79: [2, 39],
                  },
                  { 52: [1, 95] },
                  {
                    52: [2, 76],
                    59: [2, 76],
                    66: [2, 76],
                    74: [2, 76],
                    75: [2, 76],
                    76: [2, 76],
                    77: [2, 76],
                  },
                  { 52: [2, 78] },
                  {
                    5: [2, 12],
                    13: [2, 12],
                    14: [2, 12],
                    17: [2, 12],
                    27: [2, 12],
                    32: [2, 12],
                    37: [2, 12],
                    42: [2, 12],
                    45: [2, 12],
                    46: [2, 12],
                    49: [2, 12],
                    53: [2, 12],
                  },
                  {
                    18: 96,
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    36: 48,
                    37: [1, 50],
                    41: 49,
                    42: [1, 51],
                    43: 98,
                    44: 97,
                    45: [2, 69],
                  },
                  {
                    31: [2, 63],
                    38: 99,
                    59: [2, 63],
                    66: [2, 63],
                    69: [2, 63],
                    74: [2, 63],
                    75: [2, 63],
                    76: [2, 63],
                    77: [2, 63],
                  },
                  { 45: [2, 17] },
                  {
                    5: [2, 13],
                    13: [2, 13],
                    14: [2, 13],
                    17: [2, 13],
                    27: [2, 13],
                    32: [2, 13],
                    37: [2, 13],
                    42: [2, 13],
                    45: [2, 13],
                    46: [2, 13],
                    49: [2, 13],
                    53: [2, 13],
                  },
                  { 31: [1, 100] },
                  {
                    31: [2, 80],
                    59: [2, 80],
                    66: [2, 80],
                    74: [2, 80],
                    75: [2, 80],
                    76: [2, 80],
                    77: [2, 80],
                  },
                  { 31: [2, 82] },
                  {
                    18: 63,
                    57: 102,
                    58: 64,
                    59: [1, 38],
                    61: 101,
                    62: [2, 85],
                    63: 103,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  { 30: 104, 31: [2, 55], 68: 105, 69: [1, 106] },
                  {
                    31: [2, 52],
                    59: [2, 52],
                    66: [2, 52],
                    69: [2, 52],
                    74: [2, 52],
                    75: [2, 52],
                    76: [2, 52],
                    77: [2, 52],
                  },
                  { 31: [2, 54], 69: [2, 54] },
                  { 31: [2, 61], 35: 107, 68: 108, 69: [1, 106] },
                  {
                    31: [2, 58],
                    59: [2, 58],
                    66: [2, 58],
                    69: [2, 58],
                    74: [2, 58],
                    75: [2, 58],
                    76: [2, 58],
                    77: [2, 58],
                  },
                  { 31: [2, 60], 69: [2, 60] },
                  { 21: [1, 109] },
                  {
                    21: [2, 44],
                    59: [2, 44],
                    66: [2, 44],
                    74: [2, 44],
                    75: [2, 44],
                    76: [2, 44],
                    77: [2, 44],
                  },
                  { 21: [2, 46] },
                  {
                    5: [2, 21],
                    13: [2, 21],
                    14: [2, 21],
                    17: [2, 21],
                    27: [2, 21],
                    32: [2, 21],
                    37: [2, 21],
                    42: [2, 21],
                    45: [2, 21],
                    46: [2, 21],
                    49: [2, 21],
                    53: [2, 21],
                  },
                  {
                    21: [2, 88],
                    31: [2, 88],
                    52: [2, 88],
                    62: [2, 88],
                    66: [2, 88],
                    69: [2, 88],
                  },
                  { 67: [1, 94] },
                  {
                    18: 63,
                    57: 110,
                    58: 64,
                    59: [1, 38],
                    66: [1, 30],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    5: [2, 22],
                    13: [2, 22],
                    14: [2, 22],
                    17: [2, 22],
                    27: [2, 22],
                    32: [2, 22],
                    37: [2, 22],
                    42: [2, 22],
                    45: [2, 22],
                    46: [2, 22],
                    49: [2, 22],
                    53: [2, 22],
                  },
                  { 31: [1, 111] },
                  { 45: [2, 18] },
                  { 45: [2, 70] },
                  {
                    18: 63,
                    31: [2, 65],
                    39: 112,
                    57: 113,
                    58: 64,
                    59: [1, 38],
                    63: 114,
                    64: 65,
                    65: 66,
                    66: [1, 67],
                    69: [2, 65],
                    72: 23,
                    73: 24,
                    74: [1, 25],
                    75: [1, 26],
                    76: [1, 27],
                    77: [1, 29],
                    78: 28,
                  },
                  {
                    5: [2, 23],
                    13: [2, 23],
                    14: [2, 23],
                    17: [2, 23],
                    27: [2, 23],
                    32: [2, 23],
                    37: [2, 23],
                    42: [2, 23],
                    45: [2, 23],
                    46: [2, 23],
                    49: [2, 23],
                    53: [2, 23],
                  },
                  { 62: [1, 115] },
                  {
                    59: [2, 84],
                    62: [2, 84],
                    66: [2, 84],
                    74: [2, 84],
                    75: [2, 84],
                    76: [2, 84],
                    77: [2, 84],
                  },
                  { 62: [2, 86] },
                  { 31: [1, 116] },
                  { 31: [2, 56] },
                  { 66: [1, 118], 70: 117 },
                  { 31: [1, 119] },
                  { 31: [2, 62] },
                  { 14: [2, 11] },
                  {
                    21: [2, 28],
                    31: [2, 28],
                    52: [2, 28],
                    62: [2, 28],
                    66: [2, 28],
                    69: [2, 28],
                  },
                  {
                    5: [2, 20],
                    13: [2, 20],
                    14: [2, 20],
                    17: [2, 20],
                    27: [2, 20],
                    32: [2, 20],
                    37: [2, 20],
                    42: [2, 20],
                    45: [2, 20],
                    46: [2, 20],
                    49: [2, 20],
                    53: [2, 20],
                  },
                  { 31: [2, 67], 40: 120, 68: 121, 69: [1, 106] },
                  {
                    31: [2, 64],
                    59: [2, 64],
                    66: [2, 64],
                    69: [2, 64],
                    74: [2, 64],
                    75: [2, 64],
                    76: [2, 64],
                    77: [2, 64],
                  },
                  { 31: [2, 66], 69: [2, 66] },
                  {
                    21: [2, 26],
                    31: [2, 26],
                    52: [2, 26],
                    59: [2, 26],
                    62: [2, 26],
                    66: [2, 26],
                    69: [2, 26],
                    74: [2, 26],
                    75: [2, 26],
                    76: [2, 26],
                    77: [2, 26],
                  },
                  {
                    13: [2, 14],
                    14: [2, 14],
                    17: [2, 14],
                    27: [2, 14],
                    32: [2, 14],
                    37: [2, 14],
                    42: [2, 14],
                    45: [2, 14],
                    46: [2, 14],
                    49: [2, 14],
                    53: [2, 14],
                  },
                  { 66: [1, 123], 71: [1, 122] },
                  { 66: [2, 89], 71: [2, 89] },
                  {
                    13: [2, 15],
                    14: [2, 15],
                    17: [2, 15],
                    27: [2, 15],
                    32: [2, 15],
                    42: [2, 15],
                    45: [2, 15],
                    46: [2, 15],
                    49: [2, 15],
                    53: [2, 15],
                  },
                  { 31: [1, 124] },
                  { 31: [2, 68] },
                  { 31: [2, 29] },
                  { 66: [2, 90], 71: [2, 90] },
                  {
                    13: [2, 16],
                    14: [2, 16],
                    17: [2, 16],
                    27: [2, 16],
                    32: [2, 16],
                    37: [2, 16],
                    42: [2, 16],
                    45: [2, 16],
                    46: [2, 16],
                    49: [2, 16],
                    53: [2, 16],
                  },
                ],
                defaultActions: {
                  4: [2, 1],
                  47: [2, 48],
                  49: [2, 19],
                  53: [2, 50],
                  62: [2, 74],
                  71: [2, 78],
                  76: [2, 17],
                  80: [2, 82],
                  90: [2, 46],
                  97: [2, 18],
                  98: [2, 70],
                  103: [2, 86],
                  105: [2, 56],
                  108: [2, 62],
                  109: [2, 11],
                  121: [2, 68],
                  122: [2, 29],
                },
                parseError: function (a) {
                  throw new Error(a);
                },
                parse: function (a) {
                  function b() {
                    var a;
                    return (
                      (a = c.lexer.lex() || 1),
                      "number" != typeof a && (a = c.symbols_[a] || a),
                      a
                    );
                  }
                  var c = this,
                    d = [0],
                    e = [null],
                    f = [],
                    g = this.table,
                    h = "",
                    i = 0,
                    j = 0,
                    k = 0;
                  this.lexer.setInput(a),
                    (this.lexer.yy = this.yy),
                    (this.yy.lexer = this.lexer),
                    (this.yy.parser = this),
                    "undefined" == typeof this.lexer.yylloc &&
                      (this.lexer.yylloc = {});
                  var l = this.lexer.yylloc;
                  f.push(l);
                  var m = this.lexer.options && this.lexer.options.ranges;
                  "function" == typeof this.yy.parseError &&
                    (this.parseError = this.yy.parseError);
                  for (var n, o, p, q, r, s, t, u, v, w = {}; ; ) {
                    if (
                      ((p = d[d.length - 1]),
                      this.defaultActions[p]
                        ? (q = this.defaultActions[p])
                        : ((null === n || "undefined" == typeof n) && (n = b()),
                          (q = g[p] && g[p][n])),
                      "undefined" == typeof q || !q.length || !q[0])
                    ) {
                      var x = "";
                      if (!k) {
                        v = [];
                        for (s in g[p])
                          this.terminals_[s] &&
                            s > 2 &&
                            v.push("'" + this.terminals_[s] + "'");
                        (x = this.lexer.showPosition
                          ? "Parse error on line " +
                            (i + 1) +
                            ":\n" +
                            this.lexer.showPosition() +
                            "\nExpecting " +
                            v.join(", ") +
                            ", got '" +
                            (this.terminals_[n] || n) +
                            "'"
                          : "Parse error on line " +
                            (i + 1) +
                            ": Unexpected " +
                            (1 == n
                              ? "end of input"
                              : "'" + (this.terminals_[n] || n) + "'")),
                          this.parseError(x, {
                            text: this.lexer.match,
                            token: this.terminals_[n] || n,
                            line: this.lexer.yylineno,
                            loc: l,
                            expected: v,
                          });
                      }
                    }
                    if (q[0] instanceof Array && q.length > 1)
                      throw new Error(
                        "Parse Error: multiple actions possible at state: " +
                          p +
                          ", token: " +
                          n
                      );
                    switch (q[0]) {
                      case 1:
                        d.push(n),
                          e.push(this.lexer.yytext),
                          f.push(this.lexer.yylloc),
                          d.push(q[1]),
                          (n = null),
                          o
                            ? ((n = o), (o = null))
                            : ((j = this.lexer.yyleng),
                              (h = this.lexer.yytext),
                              (i = this.lexer.yylineno),
                              (l = this.lexer.yylloc),
                              k > 0 && k--);
                        break;
                      case 2:
                        if (
                          ((t = this.productions_[q[1]][1]),
                          (w.$ = e[e.length - t]),
                          (w._$ = {
                            first_line: f[f.length - (t || 1)].first_line,
                            last_line: f[f.length - 1].last_line,
                            first_column: f[f.length - (t || 1)].first_column,
                            last_column: f[f.length - 1].last_column,
                          }),
                          m &&
                            (w._$.range = [
                              f[f.length - (t || 1)].range[0],
                              f[f.length - 1].range[1],
                            ]),
                          (r = this.performAction.call(
                            w,
                            h,
                            j,
                            i,
                            this.yy,
                            q[1],
                            e,
                            f
                          )),
                          "undefined" != typeof r)
                        )
                          return r;
                        t &&
                          ((d = d.slice(0, -1 * t * 2)),
                          (e = e.slice(0, -1 * t)),
                          (f = f.slice(0, -1 * t))),
                          d.push(this.productions_[q[1]][0]),
                          e.push(w.$),
                          f.push(w._$),
                          (u = g[d[d.length - 2]][d[d.length - 1]]),
                          d.push(u);
                        break;
                      case 3:
                        return !0;
                    }
                  }
                  return !0;
                },
              },
              c = (function () {
                var a = {
                  EOF: 1,
                  parseError: function (a, b) {
                    if (!this.yy.parser) throw new Error(a);
                    this.yy.parser.parseError(a, b);
                  },
                  setInput: function (a) {
                    return (
                      (this._input = a),
                      (this._more = this._less = this.done = !1),
                      (this.yylineno = this.yyleng = 0),
                      (this.yytext = this.matched = this.match = ""),
                      (this.conditionStack = ["INITIAL"]),
                      (this.yylloc = {
                        first_line: 1,
                        first_column: 0,
                        last_line: 1,
                        last_column: 0,
                      }),
                      this.options.ranges && (this.yylloc.range = [0, 0]),
                      (this.offset = 0),
                      this
                    );
                  },
                  input: function () {
                    var a = this._input[0];
                    (this.yytext += a),
                      this.yyleng++,
                      this.offset++,
                      (this.match += a),
                      (this.matched += a);
                    var b = a.match(/(?:\r\n?|\n).*/g);
                    return (
                      b
                        ? (this.yylineno++, this.yylloc.last_line++)
                        : this.yylloc.last_column++,
                      this.options.ranges && this.yylloc.range[1]++,
                      (this._input = this._input.slice(1)),
                      a
                    );
                  },
                  unput: function (a) {
                    var b = a.length,
                      c = a.split(/(?:\r\n?|\n)/g);
                    (this._input = a + this._input),
                      (this.yytext = this.yytext.substr(
                        0,
                        this.yytext.length - b - 1
                      )),
                      (this.offset -= b);
                    var d = this.match.split(/(?:\r\n?|\n)/g);
                    (this.match = this.match.substr(0, this.match.length - 1)),
                      (this.matched = this.matched.substr(
                        0,
                        this.matched.length - 1
                      )),
                      c.length - 1 && (this.yylineno -= c.length - 1);
                    var e = this.yylloc.range;
                    return (
                      (this.yylloc = {
                        first_line: this.yylloc.first_line,
                        last_line: this.yylineno + 1,
                        first_column: this.yylloc.first_column,
                        last_column: c
                          ? (c.length === d.length
                              ? this.yylloc.first_column
                              : 0) +
                            d[d.length - c.length].length -
                            c[0].length
                          : this.yylloc.first_column - b,
                      }),
                      this.options.ranges &&
                        (this.yylloc.range = [e[0], e[0] + this.yyleng - b]),
                      this
                    );
                  },
                  more: function () {
                    return (this._more = !0), this;
                  },
                  less: function (a) {
                    this.unput(this.match.slice(a));
                  },
                  pastInput: function () {
                    var a = this.matched.substr(
                      0,
                      this.matched.length - this.match.length
                    );
                    return (
                      (a.length > 20 ? "..." : "") +
                      a.substr(-20).replace(/\n/g, "")
                    );
                  },
                  upcomingInput: function () {
                    var a = this.match;
                    return (
                      a.length < 20 &&
                        (a += this._input.substr(0, 20 - a.length)),
                      (a.substr(0, 20) + (a.length > 20 ? "..." : "")).replace(
                        /\n/g,
                        ""
                      )
                    );
                  },
                  showPosition: function () {
                    var a = this.pastInput(),
                      b = new Array(a.length + 1).join("-");
                    return a + this.upcomingInput() + "\n" + b + "^";
                  },
                  next: function () {
                    if (this.done) return this.EOF;
                    this._input || (this.done = !0);
                    var a, b, c, d, e;
                    this._more || ((this.yytext = ""), (this.match = ""));
                    for (
                      var f = this._currentRules(), g = 0;
                      g < f.length &&
                      ((c = this._input.match(this.rules[f[g]])),
                      !c ||
                        (b && !(c[0].length > b[0].length)) ||
                        ((b = c), (d = g), this.options.flex));
                      g++
                    );
                    return b
                      ? ((e = b[0].match(/(?:\r\n?|\n).*/g)),
                        e && (this.yylineno += e.length),
                        (this.yylloc = {
                          first_line: this.yylloc.last_line,
                          last_line: this.yylineno + 1,
                          first_column: this.yylloc.last_column,
                          last_column: e
                            ? e[e.length - 1].length -
                              e[e.length - 1].match(/\r?\n?/)[0].length
                            : this.yylloc.last_column + b[0].length,
                        }),
                        (this.yytext += b[0]),
                        (this.match += b[0]),
                        (this.matches = b),
                        (this.yyleng = this.yytext.length),
                        this.options.ranges &&
                          (this.yylloc.range = [
                            this.offset,
                            (this.offset += this.yyleng),
                          ]),
                        (this._more = !1),
                        (this._input = this._input.slice(b[0].length)),
                        (this.matched += b[0]),
                        (a = this.performAction.call(
                          this,
                          this.yy,
                          this,
                          f[d],
                          this.conditionStack[this.conditionStack.length - 1]
                        )),
                        this.done && this._input && (this.done = !1),
                        a ? a : void 0)
                      : "" === this._input
                      ? this.EOF
                      : this.parseError(
                          "Lexical error on line " +
                            (this.yylineno + 1) +
                            ". Unrecognized text.\n" +
                            this.showPosition(),
                          { text: "", token: null, line: this.yylineno }
                        );
                  },
                  lex: function () {
                    var a = this.next();
                    return "undefined" != typeof a ? a : this.lex();
                  },
                  begin: function (a) {
                    this.conditionStack.push(a);
                  },
                  popState: function () {
                    return this.conditionStack.pop();
                  },
                  _currentRules: function () {
                    return this.conditions[
                      this.conditionStack[this.conditionStack.length - 1]
                    ].rules;
                  },
                  topState: function () {
                    return this.conditionStack[this.conditionStack.length - 2];
                  },
                  pushState: function (a) {
                    this.begin(a);
                  },
                };
                return (
                  (a.options = {}),
                  (a.performAction = function (a, b, c, d) {
                    function e(a, c) {
                      return (b.yytext = b.yytext.substr(a, b.yyleng - c));
                    }
                    switch (c) {
                      case 0:
                        if (
                          ("\\\\" === b.yytext.slice(-2)
                            ? (e(0, 1), this.begin("mu"))
                            : "\\" === b.yytext.slice(-1)
                            ? (e(0, 1), this.begin("emu"))
                            : this.begin("mu"),
                          b.yytext)
                        )
                          return 14;
                        break;
                      case 1:
                        return 14;
                      case 2:
                        return this.popState(), 14;
                      case 3:
                        return (
                          (b.yytext = b.yytext.substr(5, b.yyleng - 9)),
                          this.popState(),
                          16
                        );
                      case 4:
                        return 14;
                      case 5:
                        return this.popState(), 13;
                      case 6:
                        return 59;
                      case 7:
                        return 62;
                      case 8:
                        return 17;
                      case 9:
                        return this.popState(), this.begin("raw"), 21;
                      case 10:
                        return 53;
                      case 11:
                        return 27;
                      case 12:
                        return 45;
                      case 13:
                        return this.popState(), 42;
                      case 14:
                        return this.popState(), 42;
                      case 15:
                        return 32;
                      case 16:
                        return 37;
                      case 17:
                        return 49;
                      case 18:
                        return 46;
                      case 19:
                        this.unput(b.yytext), this.popState(), this.begin("com");
                        break;
                      case 20:
                        return this.popState(), 13;
                      case 21:
                        return 46;
                      case 22:
                        return 67;
                      case 23:
                        return 66;
                      case 24:
                        return 66;
                      case 25:
                        return 79;
                      case 26:
                        break;
                      case 27:
                        return this.popState(), 52;
                      case 28:
                        return this.popState(), 31;
                      case 29:
                        return (b.yytext = e(1, 2).replace(/\\"/g, '"')), 74;
                      case 30:
                        return (b.yytext = e(1, 2).replace(/\\'/g, "'")), 74;
                      case 31:
                        return 77;
                      case 32:
                        return 76;
                      case 33:
                        return 76;
                      case 34:
                        return 75;
                      case 35:
                        return 69;
                      case 36:
                        return 71;
                      case 37:
                        return 66;
                      case 38:
                        return (b.yytext = e(1, 2)), 66;
                      case 39:
                        return "INVALID";
                      case 40:
                        return 5;
                    }
                  }),
                  (a.rules = [
                    /^(?:[^\x00]*?(?=(\{\{)))/,
                    /^(?:[^\x00]+)/,
                    /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,
                    /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,
                    /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/,
                    /^(?:[\s\S]*?--(~)?\}\})/,
                    /^(?:\()/,
                    /^(?:\))/,
                    /^(?:\{\{\{\{)/,
                    /^(?:\}\}\}\})/,
                    /^(?:\{\{(~)?>)/,
                    /^(?:\{\{(~)?#)/,
                    /^(?:\{\{(~)?\/)/,
                    /^(?:\{\{(~)?\^\s*(~)?\}\})/,
                    /^(?:\{\{(~)?\s*else\s*(~)?\}\})/,
                    /^(?:\{\{(~)?\^)/,
                    /^(?:\{\{(~)?\s*else\b)/,
                    /^(?:\{\{(~)?\{)/,
                    /^(?:\{\{(~)?&)/,
                    /^(?:\{\{(~)?!--)/,
                    /^(?:\{\{(~)?![\s\S]*?\}\})/,
                    /^(?:\{\{(~)?)/,
                    /^(?:=)/,
                    /^(?:\.\.)/,
                    /^(?:\.(?=([=~}\s\/.)|])))/,
                    /^(?:[\/.])/,
                    /^(?:\s+)/,
                    /^(?:\}(~)?\}\})/,
                    /^(?:(~)?\}\})/,
                    /^(?:"(\\["]|[^"])*")/,
                    /^(?:'(\\[']|[^'])*')/,
                    /^(?:@)/,
                    /^(?:true(?=([~}\s)])))/,
                    /^(?:false(?=([~}\s)])))/,
                    /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,
                    /^(?:as\s+\|)/,
                    /^(?:\|)/,
                    /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,
                    /^(?:\[[^\]]*\])/,
                    /^(?:.)/,
                    /^(?:$)/,
                  ]),
                  (a.conditions = {
                    mu: {
                      rules: [
                        6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                        21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
                        35, 36, 37, 38, 39, 40,
                      ],
                      inclusive: !1,
                    },
                    emu: { rules: [2], inclusive: !1 },
                    com: { rules: [5], inclusive: !1 },
                    raw: { rules: [3, 4], inclusive: !1 },
                    INITIAL: { rules: [0, 1, 40], inclusive: !0 },
                  }),
                  a
                );
              })();
            return (b.lexer = c), (a.prototype = b), (b.Parser = a), new a();
          })();
        return (a = b);
      })(),
      i = (function (a, b) {
        "use strict";
        function c() {
          this.parents = [];
        }
        var d,
          e = a,
          f = b;
        return (
          (c.prototype = {
            constructor: c,
            mutating: !1,
            acceptKey: function (a, b) {
              var c = this.accept(a[b]);
              if (this.mutating) {
                if (c && (!c.type || !f[c.type]))
                  throw new e(
                    'Unexpected node type "' +
                      c.type +
                      '" found when accepting ' +
                      b +
                      " on " +
                      a.type
                  );
                a[b] = c;
              }
            },
            acceptRequired: function (a, b) {
              if ((this.acceptKey(a, b), !a[b]))
                throw new e(a.type + " requires " + b);
            },
            acceptArray: function (a) {
              for (var b = 0, c = a.length; c > b; b++)
                this.acceptKey(a, b), a[b] || (a.splice(b, 1), b--, c--);
            },
            accept: function (a) {
              if (a) {
                this.current && this.parents.unshift(this.current),
                  (this.current = a);
                var b = this[a.type](a);
                return (
                  (this.current = this.parents.shift()),
                  !this.mutating || b ? b : b !== !1 ? a : void 0
                );
              }
            },
            Program: function (a) {
              this.acceptArray(a.body);
            },
            MustacheStatement: function (a) {
              this.acceptRequired(a, "path"),
                this.acceptArray(a.params),
                this.acceptKey(a, "hash");
            },
            BlockStatement: function (a) {
              this.acceptRequired(a, "path"),
                this.acceptArray(a.params),
                this.acceptKey(a, "hash"),
                this.acceptKey(a, "program"),
                this.acceptKey(a, "inverse");
            },
            PartialStatement: function (a) {
              this.acceptRequired(a, "name"),
                this.acceptArray(a.params),
                this.acceptKey(a, "hash");
            },
            ContentStatement: function () {},
            CommentStatement: function () {},
            SubExpression: function (a) {
              this.acceptRequired(a, "path"),
                this.acceptArray(a.params),
                this.acceptKey(a, "hash");
            },
            PartialExpression: function (a) {
              this.acceptRequired(a, "name"),
                this.acceptArray(a.params),
                this.acceptKey(a, "hash");
            },
            PathExpression: function () {},
            StringLiteral: function () {},
            NumberLiteral: function () {},
            BooleanLiteral: function () {},
            Hash: function (a) {
              this.acceptArray(a.pairs);
            },
            HashPair: function (a) {
              this.acceptRequired(a, "value");
            },
          }),
          (d = c)
        );
      })(b, g),
      j = (function (a) {
        "use strict";
        function b() {}
        function c(a, b, c) {
          void 0 === b && (b = a.length);
          var d = a[b - 1],
            e = a[b - 2];
          return d
            ? "ContentStatement" === d.type
              ? (e || !c ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(d.original)
              : void 0
            : c;
        }
        function d(a, b, c) {
          void 0 === b && (b = -1);
          var d = a[b + 1],
            e = a[b + 2];
          return d
            ? "ContentStatement" === d.type
              ? (e || !c ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(d.original)
              : void 0
            : c;
        }
        function e(a, b, c) {
          var d = a[null == b ? 0 : b + 1];
          if (d && "ContentStatement" === d.type && (c || !d.rightStripped)) {
            var e = d.value;
            (d.value = d.value.replace(c ? /^\s+/ : /^[ \t]*\r?\n?/, "")),
              (d.rightStripped = d.value !== e);
          }
        }
        function f(a, b, c) {
          var d = a[null == b ? a.length - 1 : b - 1];
          if (d && "ContentStatement" === d.type && (c || !d.leftStripped)) {
            var e = d.value;
            return (
              (d.value = d.value.replace(c ? /\s+$/ : /[ \t]+$/, "")),
              (d.leftStripped = d.value !== e),
              d.leftStripped
            );
          }
        }
        var g,
          h = a;
        return (
          (b.prototype = new h()),
          (b.prototype.Program = function (a) {
            var b = !this.isRootSeen;
            this.isRootSeen = !0;
            for (var g = a.body, h = 0, i = g.length; i > h; h++) {
              var j = g[h],
                k = this.accept(j);
              if (k) {
                var l = c(g, h, b),
                  m = d(g, h, b),
                  n = k.openStandalone && l,
                  o = k.closeStandalone && m,
                  p = k.inlineStandalone && l && m;
                k.close && e(g, h, !0),
                  k.open && f(g, h, !0),
                  p &&
                    (e(g, h),
                    f(g, h) &&
                      "PartialStatement" === j.type &&
                      (j.indent = /([ \t]+$)/.exec(g[h - 1].original)[1])),
                  n && (e((j.program || j.inverse).body), f(g, h)),
                  o && (e(g, h), f((j.inverse || j.program).body));
              }
            }
            return a;
          }),
          (b.prototype.BlockStatement = function (a) {
            this.accept(a.program), this.accept(a.inverse);
            var b = a.program || a.inverse,
              g = a.program && a.inverse,
              h = g,
              i = g;
            if (g && g.chained)
              for (h = g.body[0].program; i.chained; )
                i = i.body[i.body.length - 1].program;
            var j = {
              open: a.openStrip.open,
              close: a.closeStrip.close,
              openStandalone: d(b.body),
              closeStandalone: c((h || b).body),
            };
            if ((a.openStrip.close && e(b.body, null, !0), g)) {
              var k = a.inverseStrip;
              k.open && f(b.body, null, !0),
                k.close && e(h.body, null, !0),
                a.closeStrip.open && f(i.body, null, !0),
                c(b.body) && d(h.body) && (f(b.body), e(h.body));
            } else a.closeStrip.open && f(b.body, null, !0);
            return j;
          }),
          (b.prototype.MustacheStatement = function (a) {
            return a.strip;
          }),
          (b.prototype.PartialStatement = b.prototype.CommentStatement =
            function (a) {
              var b = a.strip || {};
              return { inlineStandalone: !0, open: b.open, close: b.close };
            }),
          (g = b)
        );
      })(i),
      k = (function (a) {
        "use strict";
        function b(a, b) {
          (this.source = a),
            (this.start = { line: b.first_line, column: b.first_column }),
            (this.end = { line: b.last_line, column: b.last_column });
        }
        function c(a, b) {
          return {
            open: "~" === a.charAt(2),
            close: "~" === b.charAt(b.length - 3),
          };
        }
        function d(a) {
          return a.replace(/^\{\{~?\!-?-?/, "").replace(/-?-?~?\}\}$/, "");
        }
        function e(a, b, c) {
          c = this.locInfo(c);
          for (
            var d = a ? "@" : "", e = [], f = 0, g = "", h = 0, i = b.length;
            i > h;
            h++
          ) {
            var k = b[h].part;
            if (
              ((d += (b[h].separator || "") + k),
              ".." === k || "." === k || "this" === k)
            ) {
              if (e.length > 0) throw new j("Invalid path: " + d, { loc: c });
              ".." === k && (f++, (g += "../"));
            } else e.push(k);
          }
          return new this.PathExpression(a, f, e, d, c);
        }
        function f(a, b, c, d, e, f) {
          var g = d.charAt(3) || d.charAt(2),
            h = "{" !== g && "&" !== g;
          return new this.MustacheStatement(a, b, c, h, e, this.locInfo(f));
        }
        function g(a, b, c, d) {
          if (a.path.original !== c) {
            var e = { loc: a.path.loc };
            throw new j(a.path.original + " doesn't match " + c, e);
          }
          d = this.locInfo(d);
          var f = new this.Program([b], null, {}, d);
          return new this.BlockStatement(
            a.path,
            a.params,
            a.hash,
            f,
            void 0,
            {},
            {},
            {},
            d
          );
        }
        function h(a, b, c, d, e, f) {
          if (d && d.path && a.path.original !== d.path.original) {
            var g = { loc: a.path.loc };
            throw new j(a.path.original + " doesn't match " + d.path.original, g);
          }
          b.blockParams = a.blockParams;
          var h, i;
          return (
            c &&
              (c.chain && (c.program.body[0].closeStrip = d.strip),
              (i = c.strip),
              (h = c.program)),
            e && ((e = h), (h = b), (b = e)),
            new this.BlockStatement(
              a.path,
              a.params,
              a.hash,
              b,
              h,
              a.strip,
              i,
              d && d.strip,
              this.locInfo(f)
            )
          );
        }
        var i = {},
          j = a;
        return (
          (i.SourceLocation = b),
          (i.stripFlags = c),
          (i.stripComment = d),
          (i.preparePath = e),
          (i.prepareMustache = f),
          (i.prepareRawBlock = g),
          (i.prepareBlock = h),
          i
        );
      })(b),
      l = (function (a, b, c, d, e) {
        "use strict";
        function f(a, b) {
          if ("Program" === a.type) return a;
          (h.yy = m),
            (m.locInfo = function (a) {
              return new m.SourceLocation(b && b.srcName, a);
            });
          var c = new j();
          return c.accept(h.parse(a));
        }
        var g = {},
          h = a,
          i = b,
          j = c,
          k = d,
          l = e.extend;
        g.parser = h;
        var m = {};
        return l(m, k, i), (g.parse = f), g;
      })(h, g, j, k, a),
      m = (function (a, b, c) {
        "use strict";
        function d() {}
        function e(a, b, c) {
          if (null == a || ("string" != typeof a && "Program" !== a.type))
            throw new j(
              "You must pass a string or Handlebars AST to Handlebars.precompile. You passed " +
                a
            );
          (b = b || {}),
            "data" in b || (b.data = !0),
            b.compat && (b.useDepths = !0);
          var d = c.parse(a, b),
            e = new c.Compiler().compile(d, b);
          return new c.JavaScriptCompiler().compile(e, b);
        }
        function f(a, b, c) {
          function d() {
            var d = c.parse(a, b),
              e = new c.Compiler().compile(d, b),
              f = new c.JavaScriptCompiler().compile(e, b, void 0, !0);
            return c.template(f);
          }
          if (null == a || ("string" != typeof a && "Program" !== a.type))
            throw new j(
              "You must pass a string or Handlebars AST to Handlebars.compile. You passed " +
                a
            );
          (b = b || {}),
            "data" in b || (b.data = !0),
            b.compat && (b.useDepths = !0);
          var e,
            f = function (a, b) {
              return e || (e = d()), e.call(this, a, b);
            };
          return (
            (f._setup = function (a) {
              return e || (e = d()), e._setup(a);
            }),
            (f._child = function (a, b, c, f) {
              return e || (e = d()), e._child(a, b, c, f);
            }),
            f
          );
        }
        function g(a, b) {
          if (a === b) return !0;
          if (k(a) && k(b) && a.length === b.length) {
            for (var c = 0; c < a.length; c++) if (!g(a[c], b[c])) return !1;
            return !0;
          }
        }
        function h(a) {
          if (!a.path.parts) {
            var b = a.path;
            a.path = new m.PathExpression(
              !1,
              0,
              [b.original + ""],
              b.original + "",
              b.loc
            );
          }
        }
        var i = {},
          j = a,
          k = b.isArray,
          l = b.indexOf,
          m = c,
          n = [].slice;
        return (
          (i.Compiler = d),
          (d.prototype = {
            compiler: d,
            equals: function (a) {
              var b = this.opcodes.length;
              if (a.opcodes.length !== b) return !1;
              for (var c = 0; b > c; c++) {
                var d = this.opcodes[c],
                  e = a.opcodes[c];
                if (d.opcode !== e.opcode || !g(d.args, e.args)) return !1;
              }
              for (b = this.children.length, c = 0; b > c; c++)
                if (!this.children[c].equals(a.children[c])) return !1;
              return !0;
            },
            guid: 0,
            compile: function (a, b) {
              (this.sourceNode = []),
                (this.opcodes = []),
                (this.children = []),
                (this.options = b),
                (this.stringParams = b.stringParams),
                (this.trackIds = b.trackIds),
                (b.blockParams = b.blockParams || []);
              var c = b.knownHelpers;
              if (
                ((b.knownHelpers = {
                  helperMissing: !0,
                  blockHelperMissing: !0,
                  each: !0,
                  if: !0,
                  unless: !0,
                  with: !0,
                  log: !0,
                  lookup: !0,
                }),
                c)
              )
                for (var d in c) b.knownHelpers[d] = c[d];
              return this.accept(a);
            },
            compileProgram: function (a) {
              var b = new this.compiler().compile(a, this.options),
                c = this.guid++;
              return (
                (this.usePartial = this.usePartial || b.usePartial),
                (this.children[c] = b),
                (this.useDepths = this.useDepths || b.useDepths),
                c
              );
            },
            accept: function (a) {
              this.sourceNode.unshift(a);
              var b = this[a.type](a);
              return this.sourceNode.shift(), b;
            },
            Program: function (a) {
              this.options.blockParams.unshift(a.blockParams);
              for (var b = a.body, c = 0, d = b.length; d > c; c++)
                this.accept(b[c]);
              return (
                this.options.blockParams.shift(),
                (this.isSimple = 1 === d),
                (this.blockParams = a.blockParams ? a.blockParams.length : 0),
                this
              );
            },
            BlockStatement: function (a) {
              h(a);
              var b = a.program,
                c = a.inverse;
              (b = b && this.compileProgram(b)),
                (c = c && this.compileProgram(c));
              var d = this.classifySexpr(a);
              "helper" === d
                ? this.helperSexpr(a, b, c)
                : "simple" === d
                ? (this.simpleSexpr(a),
                  this.opcode("pushProgram", b),
                  this.opcode("pushProgram", c),
                  this.opcode("emptyHash"),
                  this.opcode("blockValue", a.path.original))
                : (this.ambiguousSexpr(a, b, c),
                  this.opcode("pushProgram", b),
                  this.opcode("pushProgram", c),
                  this.opcode("emptyHash"),
                  this.opcode("ambiguousBlockValue")),
                this.opcode("append");
            },
            PartialStatement: function (a) {
              this.usePartial = !0;
              var b = a.params;
              if (b.length > 1)
                throw new j(
                  "Unsupported number of partial arguments: " + b.length,
                  a
                );
              b.length || b.push({ type: "PathExpression", parts: [], depth: 0 });
              var c = a.name.original,
                d = "SubExpression" === a.name.type;
              d && this.accept(a.name),
                this.setupFullMustacheParams(a, void 0, void 0, !0);
              var e = a.indent || "";
              this.options.preventIndent &&
                e &&
                (this.opcode("appendContent", e), (e = "")),
                this.opcode("invokePartial", d, c, e),
                this.opcode("append");
            },
            MustacheStatement: function (a) {
              this.SubExpression(a),
                this.opcode(
                  a.escaped && !this.options.noEscape ? "appendEscaped" : "append"
                );
            },
            ContentStatement: function (a) {
              a.value && this.opcode("appendContent", a.value);
            },
            CommentStatement: function () {},
            SubExpression: function (a) {
              h(a);
              var b = this.classifySexpr(a);
              "simple" === b
                ? this.simpleSexpr(a)
                : "helper" === b
                ? this.helperSexpr(a)
                : this.ambiguousSexpr(a);
            },
            ambiguousSexpr: function (a, b, c) {
              var d = a.path,
                e = d.parts[0],
                f = null != b || null != c;
              this.opcode("getContext", d.depth),
                this.opcode("pushProgram", b),
                this.opcode("pushProgram", c),
                this.accept(d),
                this.opcode("invokeAmbiguous", e, f);
            },
            simpleSexpr: function (a) {
              this.accept(a.path), this.opcode("resolvePossibleLambda");
            },
            helperSexpr: function (a, b, c) {
              var d = this.setupFullMustacheParams(a, b, c),
                e = a.path,
                f = e.parts[0];
              if (this.options.knownHelpers[f])
                this.opcode("invokeKnownHelper", d.length, f);
              else {
                if (this.options.knownHelpersOnly)
                  throw new j(
                    "You specified knownHelpersOnly, but used the unknown helper " +
                      f,
                    a
                  );
                (e.falsy = !0),
                  this.accept(e),
                  this.opcode(
                    "invokeHelper",
                    d.length,
                    e.original,
                    m.helpers.simpleId(e)
                  );
              }
            },
            PathExpression: function (a) {
              this.addDepth(a.depth), this.opcode("getContext", a.depth);
              var b = a.parts[0],
                c = m.helpers.scopedId(a),
                d = !a.depth && !c && this.blockParamIndex(b);
              d
                ? this.opcode("lookupBlockParam", d, a.parts)
                : b
                ? a.data
                  ? ((this.options.data = !0),
                    this.opcode("lookupData", a.depth, a.parts))
                  : this.opcode("lookupOnContext", a.parts, a.falsy, c)
                : this.opcode("pushContext");
            },
            StringLiteral: function (a) {
              this.opcode("pushString", a.value);
            },
            NumberLiteral: function (a) {
              this.opcode("pushLiteral", a.value);
            },
            BooleanLiteral: function (a) {
              this.opcode("pushLiteral", a.value);
            },
            Hash: function (a) {
              var b,
                c,
                d = a.pairs;
              for (this.opcode("pushHash"), b = 0, c = d.length; c > b; b++)
                this.pushParam(d[b].value);
              for (; b--; ) this.opcode("assignToHash", d[b].key);
              this.opcode("popHash");
            },
            opcode: function (a) {
              this.opcodes.push({
                opcode: a,
                args: n.call(arguments, 1),
                loc: this.sourceNode[0].loc,
              });
            },
            addDepth: function (a) {
              a && (this.useDepths = !0);
            },
            classifySexpr: function (a) {
              var b = m.helpers.simpleId(a.path),
                c = b && !!this.blockParamIndex(a.path.parts[0]),
                d = !c && m.helpers.helperExpression(a),
                e = !c && (d || b),
                f = this.options;
              if (e && !d) {
                var g = a.path.parts[0];
                f.knownHelpers[g] ? (d = !0) : f.knownHelpersOnly && (e = !1);
              }
              return d ? "helper" : e ? "ambiguous" : "simple";
            },
            pushParams: function (a) {
              for (var b = 0, c = a.length; c > b; b++) this.pushParam(a[b]);
            },
            pushParam: function (a) {
              var b = null != a.value ? a.value : a.original || "";
              if (this.stringParams)
                b.replace &&
                  (b = b.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")),
                  a.depth && this.addDepth(a.depth),
                  this.opcode("getContext", a.depth || 0),
                  this.opcode("pushStringParam", b, a.type),
                  "SubExpression" === a.type && this.accept(a);
              else {
                if (this.trackIds) {
                  var c;
                  if (
                    (!a.parts ||
                      m.helpers.scopedId(a) ||
                      a.depth ||
                      (c = this.blockParamIndex(a.parts[0])),
                    c)
                  ) {
                    var d = a.parts.slice(1).join(".");
                    this.opcode("pushId", "BlockParam", c, d);
                  } else
                    (b = a.original || b),
                      b.replace &&
                        (b = b.replace(/^\.\//g, "").replace(/^\.$/g, "")),
                      this.opcode("pushId", a.type, b);
                }
                this.accept(a);
              }
            },
            setupFullMustacheParams: function (a, b, c, d) {
              var e = a.params;
              return (
                this.pushParams(e),
                this.opcode("pushProgram", b),
                this.opcode("pushProgram", c),
                a.hash ? this.accept(a.hash) : this.opcode("emptyHash", d),
                e
              );
            },
            blockParamIndex: function (a) {
              for (var b = 0, c = this.options.blockParams.length; c > b; b++) {
                var d = this.options.blockParams[b],
                  e = d && l(d, a);
                if (d && e >= 0) return [b, e];
              }
            },
          }),
          (i.precompile = e),
          (i.compile = f),
          i
        );
      })(b, a, g),
      n = (function (a) {
        "use strict";
        function b(a, b, c) {
          if (e(a)) {
            for (var d = [], f = 0, g = a.length; g > f; f++)
              d.push(b.wrap(a[f], c));
            return d;
          }
          return "boolean" == typeof a || "number" == typeof a ? a + "" : a;
        }
        function c(a) {
          (this.srcFile = a), (this.source = []);
        }
        var d,
          e = a.isArray;
        try {
          var f = require("source-map"),
            g = f.SourceNode;
        } catch (h) {
          (g = function (a, b, c, d) {
            (this.src = ""), d && this.add(d);
          }),
            (g.prototype = {
              add: function (a) {
                e(a) && (a = a.join("")), (this.src += a);
              },
              prepend: function (a) {
                e(a) && (a = a.join("")), (this.src = a + this.src);
              },
              toStringWithSourceMap: function () {
                return { code: this.toString() };
              },
              toString: function () {
                return this.src;
              },
            });
        }
        return (
          (c.prototype = {
            prepend: function (a, b) {
              this.source.unshift(this.wrap(a, b));
            },
            push: function (a, b) {
              this.source.push(this.wrap(a, b));
            },
            merge: function () {
              var a = this.empty();
              return (
                this.each(function (b) {
                  a.add(["  ", b, "\n"]);
                }),
                a
              );
            },
            each: function (a) {
              for (var b = 0, c = this.source.length; c > b; b++)
                a(this.source[b]);
            },
            empty: function (a) {
              return (
                (a = a || this.currentLocation || { start: {} }),
                new g(a.start.line, a.start.column, this.srcFile)
              );
            },
            wrap: function (a, c) {
              return a instanceof g
                ? a
                : ((c = c || this.currentLocation || { start: {} }),
                  (a = b(a, this, c)),
                  new g(c.start.line, c.start.column, this.srcFile, a));
            },
            functionCall: function (a, b, c) {
              return (
                (c = this.generateList(c)),
                this.wrap([a, b ? "." + b + "(" : "(", c, ")"])
              );
            },
            quotedString: function (a) {
              return (
                '"' +
                (a + "")
                  .replace(/\\/g, "\\\\")
                  .replace(/"/g, '\\"')
                  .replace(/\n/g, "\\n")
                  .replace(/\r/g, "\\r")
                  .replace(/\u2028/g, "\\u2028")
                  .replace(/\u2029/g, "\\u2029") +
                '"'
              );
            },
            objectLiteral: function (a) {
              var c = [];
              for (var d in a)
                if (a.hasOwnProperty(d)) {
                  var e = b(a[d], this);
                  "undefined" !== e && c.push([this.quotedString(d), ":", e]);
                }
              var f = this.generateList(c);
              return f.prepend("{"), f.add("}"), f;
            },
            generateList: function (a, c) {
              for (var d = this.empty(c), e = 0, f = a.length; f > e; e++)
                e && d.add(","), d.add(b(a[e], this, c));
              return d;
            },
            generateArray: function (a, b) {
              var c = this.generateList(a, b);
              return c.prepend("["), c.add("]"), c;
            },
          }),
          (d = c)
        );
      })(a),
      o = (function (a, b, c, d) {
        "use strict";
        function e(a) {
          this.value = a;
        }
        function f() {}
        function g(a, b, c, d) {
          var e = b.popStack(),
            f = 0,
            g = c.length;
          for (a && g--; g > f; f++) e = b.nameLookup(e, c[f], d);
          return a
            ? [
                b.aliasable("this.strict"),
                "(",
                e,
                ", ",
                b.quotedString(c[f]),
                ")",
              ]
            : e;
        }
        var h,
          i = a.COMPILER_REVISION,
          j = a.REVISION_CHANGES,
          k = b,
          l = c.isArray,
          m = d;
        f.prototype = {
          nameLookup: function (a, b) {
            return f.isValidJavaScriptVariableName(b)
              ? [a, ".", b]
              : [a, "['", b, "']"];
          },
          depthedLookup: function (a) {
            return [this.aliasable("this.lookup"), '(depths, "', a, '")'];
          },
          compilerInfo: function () {
            var a = i,
              b = j[a];
            return [a, b];
          },
          appendToBuffer: function (a, b, c) {
            return (
              l(a) || (a = [a]),
              (a = this.source.wrap(a, b)),
              this.environment.isSimple
                ? ["return ", a, ";"]
                : c
                ? ["buffer += ", a, ";"]
                : ((a.appendToBuffer = !0), a)
            );
          },
          initializeBuffer: function () {
            return this.quotedString("");
          },
          compile: function (a, b, c, d) {
            (this.environment = a),
              (this.options = b),
              (this.stringParams = this.options.stringParams),
              (this.trackIds = this.options.trackIds),
              (this.precompile = !d),
              (this.name = this.environment.name),
              (this.isChild = !!c),
              (this.context = c || { programs: [], environments: [] }),
              this.preamble(),
              (this.stackSlot = 0),
              (this.stackVars = []),
              (this.aliases = {}),
              (this.registers = { list: [] }),
              (this.hashes = []),
              (this.compileStack = []),
              (this.inlineStack = []),
              (this.blockParams = []),
              this.compileChildren(a, b),
              (this.useDepths =
                this.useDepths || a.useDepths || this.options.compat),
              (this.useBlockParams = this.useBlockParams || a.useBlockParams);
            var e,
              f,
              g,
              h,
              i = a.opcodes;
            for (g = 0, h = i.length; h > g; g++)
              (e = i[g]),
                (this.source.currentLocation = e.loc),
                (f = f || e.loc),
                this[e.opcode].apply(this, e.args);
            if (
              ((this.source.currentLocation = f),
              this.pushSource(""),
              this.stackSlot ||
                this.inlineStack.length ||
                this.compileStack.length)
            )
              throw new k("Compile completed with content left on stack");
            var j = this.createFunctionContext(d);
            if (this.isChild) return j;
            var l = { compiler: this.compilerInfo(), main: j },
              m = this.context.programs;
            for (g = 0, h = m.length; h > g; g++) m[g] && (l[g] = m[g]);
            return (
              this.environment.usePartial && (l.usePartial = !0),
              this.options.data && (l.useData = !0),
              this.useDepths && (l.useDepths = !0),
              this.useBlockParams && (l.useBlockParams = !0),
              this.options.compat && (l.compat = !0),
              d
                ? (l.compilerOptions = this.options)
                : ((l.compiler = JSON.stringify(l.compiler)),
                  (this.source.currentLocation = {
                    start: { line: 1, column: 0 },
                  }),
                  (l = this.objectLiteral(l)),
                  b.srcName
                    ? ((l = l.toStringWithSourceMap({ file: b.destName })),
                      (l.map = l.map && l.map.toString()))
                    : (l = l.toString())),
              l
            );
          },
          preamble: function () {
            (this.lastContext = 0), (this.source = new m(this.options.srcName));
          },
          createFunctionContext: function (a) {
            var b = "",
              c = this.stackVars.concat(this.registers.list);
            c.length > 0 && (b += ", " + c.join(", "));
            var d = 0;
            for (var e in this.aliases) {
              var f = this.aliases[e];
              this.aliases.hasOwnProperty(e) &&
                f.children &&
                f.referenceCount > 1 &&
                ((b += ", alias" + ++d + "=" + e), (f.children[0] = "alias" + d));
            }
            var g = ["depth0", "helpers", "partials", "data"];
            (this.useBlockParams || this.useDepths) && g.push("blockParams"),
              this.useDepths && g.push("depths");
            var h = this.mergeSource(b);
            return a
              ? (g.push(h), Function.apply(this, g))
              : this.source.wrap(["function(", g.join(","), ") {\n  ", h, "}"]);
          },
          mergeSource: function (a) {
            var b,
              c,
              d,
              e,
              f = this.environment.isSimple,
              g = !this.forceBuffer;
            return (
              this.source.each(function (a) {
                a.appendToBuffer
                  ? (d ? a.prepend("  + ") : (d = a), (e = a))
                  : (d &&
                      (c ? d.prepend("buffer += ") : (b = !0),
                      e.add(";"),
                      (d = e = void 0)),
                    (c = !0),
                    f || (g = !1));
              }),
              g
                ? d
                  ? (d.prepend("return "), e.add(";"))
                  : c || this.source.push('return "";')
                : ((a += ", buffer = " + (b ? "" : this.initializeBuffer())),
                  d
                    ? (d.prepend("return buffer + "), e.add(";"))
                    : this.source.push("return buffer;")),
              a &&
                this.source.prepend("var " + a.substring(2) + (b ? "" : ";\n")),
              this.source.merge()
            );
          },
          blockValue: function (a) {
            var b = this.aliasable("helpers.blockHelperMissing"),
              c = [this.contextName(0)];
            this.setupHelperArgs(a, 0, c);
            var d = this.popStack();
            c.splice(1, 0, d), this.push(this.source.functionCall(b, "call", c));
          },
          ambiguousBlockValue: function () {
            var a = this.aliasable("helpers.blockHelperMissing"),
              b = [this.contextName(0)];
            this.setupHelperArgs("", 0, b, !0), this.flushInline();
            var c = this.topStack();
            b.splice(1, 0, c),
              this.pushSource([
                "if (!",
                this.lastHelper,
                ") { ",
                c,
                " = ",
                this.source.functionCall(a, "call", b),
                "}",
              ]);
          },
          appendContent: function (a) {
            this.pendingContent
              ? (a = this.pendingContent + a)
              : (this.pendingLocation = this.source.currentLocation),
              (this.pendingContent = a);
          },
          append: function () {
            if (this.isInline())
              this.replaceStack(function (a) {
                return [" != null ? ", a, ' : ""'];
              }),
                this.pushSource(this.appendToBuffer(this.popStack()));
            else {
              var a = this.popStack();
              this.pushSource([
                "if (",
                a,
                " != null) { ",
                this.appendToBuffer(a, void 0, !0),
                " }",
              ]),
                this.environment.isSimple &&
                  this.pushSource([
                    "else { ",
                    this.appendToBuffer("''", void 0, !0),
                    " }",
                  ]);
            }
          },
          appendEscaped: function () {
            this.pushSource(
              this.appendToBuffer([
                this.aliasable("this.escapeExpression"),
                "(",
                this.popStack(),
                ")",
              ])
            );
          },
          getContext: function (a) {
            this.lastContext = a;
          },
          pushContext: function () {
            this.pushStackLiteral(this.contextName(this.lastContext));
          },
          lookupOnContext: function (a, b, c) {
            var d = 0;
            c || !this.options.compat || this.lastContext
              ? this.pushContext()
              : this.push(this.depthedLookup(a[d++])),
              this.resolvePath("context", a, d, b);
          },
          lookupBlockParam: function (a, b) {
            (this.useBlockParams = !0),
              this.push(["blockParams[", a[0], "][", a[1], "]"]),
              this.resolvePath("context", b, 1);
          },
          lookupData: function (a, b) {
            this.pushStackLiteral(a ? "this.data(data, " + a + ")" : "data"),
              this.resolvePath("data", b, 0, !0);
          },
          resolvePath: function (a, b, c, d) {
            if (this.options.strict || this.options.assumeObjects)
              return void this.push(g(this.options.strict, this, b, a));
            for (var e = b.length; e > c; c++)
              this.replaceStack(function (e) {
                var f = this.nameLookup(e, b[c], a);
                return d ? [" && ", f] : [" != null ? ", f, " : ", e];
              });
          },
          resolvePossibleLambda: function () {
            this.push([
              this.aliasable("this.lambda"),
              "(",
              this.popStack(),
              ", ",
              this.contextName(0),
              ")",
            ]);
          },
          pushStringParam: function (a, b) {
            this.pushContext(),
              this.pushString(b),
              "SubExpression" !== b &&
                ("string" == typeof a
                  ? this.pushString(a)
                  : this.pushStackLiteral(a));
          },
          emptyHash: function (a) {
            this.trackIds && this.push("{}"),
              this.stringParams && (this.push("{}"), this.push("{}")),
              this.pushStackLiteral(a ? "undefined" : "{}");
          },
          pushHash: function () {
            this.hash && this.hashes.push(this.hash),
              (this.hash = { values: [], types: [], contexts: [], ids: [] });
          },
          popHash: function () {
            var a = this.hash;
            (this.hash = this.hashes.pop()),
              this.trackIds && this.push(this.objectLiteral(a.ids)),
              this.stringParams &&
                (this.push(this.objectLiteral(a.contexts)),
                this.push(this.objectLiteral(a.types))),
              this.push(this.objectLiteral(a.values));
          },
          pushString: function (a) {
            this.pushStackLiteral(this.quotedString(a));
          },
          pushLiteral: function (a) {
            this.pushStackLiteral(a);
          },
          pushProgram: function (a) {
            this.pushStackLiteral(null != a ? this.programExpression(a) : null);
          },
          invokeHelper: function (a, b, c) {
            var d = this.popStack(),
              e = this.setupHelper(a, b),
              f = c ? [e.name, " || "] : "",
              g = ["("].concat(f, d);
            this.options.strict ||
              g.push(" || ", this.aliasable("helpers.helperMissing")),
              g.push(")"),
              this.push(this.source.functionCall(g, "call", e.callParams));
          },
          invokeKnownHelper: function (a, b) {
            var c = this.setupHelper(a, b);
            this.push(this.source.functionCall(c.name, "call", c.callParams));
          },
          invokeAmbiguous: function (a, b) {
            this.useRegister("helper");
            var c = this.popStack();
            this.emptyHash();
            var d = this.setupHelper(0, a, b),
              e = (this.lastHelper = this.nameLookup("helpers", a, "helper")),
              f = ["(", "(helper = ", e, " || ", c, ")"];
            this.options.strict ||
              ((f[0] = "(helper = "),
              f.push(
                " != null ? helper : ",
                this.aliasable("helpers.helperMissing")
              )),
              this.push([
                "(",
                f,
                d.paramsInit ? ["),(", d.paramsInit] : [],
                "),",
                "(typeof helper === ",
                this.aliasable('"function"'),
                " ? ",
                this.source.functionCall("helper", "call", d.callParams),
                " : helper))",
              ]);
          },
          invokePartial: function (a, b, c) {
            var d = [],
              e = this.setupParams(b, 1, d, !1);
            a && ((b = this.popStack()), delete e.name),
              c && (e.indent = JSON.stringify(c)),
              (e.helpers = "helpers"),
              (e.partials = "partials"),
              d.unshift(a ? b : this.nameLookup("partials", b, "partial")),
              this.options.compat && (e.depths = "depths"),
              (e = this.objectLiteral(e)),
              d.push(e),
              this.push(this.source.functionCall("this.invokePartial", "", d));
          },
          assignToHash: function (a) {
            var b,
              c,
              d,
              e = this.popStack();
            this.trackIds && (d = this.popStack()),
              this.stringParams && ((c = this.popStack()), (b = this.popStack()));
            var f = this.hash;
            b && (f.contexts[a] = b),
              c && (f.types[a] = c),
              d && (f.ids[a] = d),
              (f.values[a] = e);
          },
          pushId: function (a, b, c) {
            "BlockParam" === a
              ? this.pushStackLiteral(
                  "blockParams[" +
                    b[0] +
                    "].path[" +
                    b[1] +
                    "]" +
                    (c ? " + " + JSON.stringify("." + c) : "")
                )
              : "PathExpression" === a
              ? this.pushString(b)
              : this.pushStackLiteral("SubExpression" === a ? "true" : "null");
          },
          compiler: f,
          compileChildren: function (a, b) {
            for (var c, d, e = a.children, f = 0, g = e.length; g > f; f++) {
              (c = e[f]), (d = new this.compiler());
              var h = this.matchExistingProgram(c);
              null == h
                ? (this.context.programs.push(""),
                  (h = this.context.programs.length),
                  (c.index = h),
                  (c.name = "program" + h),
                  (this.context.programs[h] = d.compile(
                    c,
                    b,
                    this.context,
                    !this.precompile
                  )),
                  (this.context.environments[h] = c),
                  (this.useDepths = this.useDepths || d.useDepths),
                  (this.useBlockParams = this.useBlockParams || d.useBlockParams))
                : ((c.index = h),
                  (c.name = "program" + h),
                  (this.useDepths = this.useDepths || c.useDepths),
                  (this.useBlockParams =
                    this.useBlockParams || c.useBlockParams));
            }
          },
          matchExistingProgram: function (a) {
            for (var b = 0, c = this.context.environments.length; c > b; b++) {
              var d = this.context.environments[b];
              if (d && d.equals(a)) return b;
            }
          },
          programExpression: function (a) {
            var b = this.environment.children[a],
              c = [b.index, "data", b.blockParams];
            return (
              (this.useBlockParams || this.useDepths) && c.push("blockParams"),
              this.useDepths && c.push("depths"),
              "this.program(" + c.join(", ") + ")"
            );
          },
          useRegister: function (a) {
            this.registers[a] ||
              ((this.registers[a] = !0), this.registers.list.push(a));
          },
          push: function (a) {
            return (
              a instanceof e || (a = this.source.wrap(a)),
              this.inlineStack.push(a),
              a
            );
          },
          pushStackLiteral: function (a) {
            this.push(new e(a));
          },
          pushSource: function (a) {
            this.pendingContent &&
              (this.source.push(
                this.appendToBuffer(
                  this.source.quotedString(this.pendingContent),
                  this.pendingLocation
                )
              ),
              (this.pendingContent = void 0)),
              a && this.source.push(a);
          },
          replaceStack: function (a) {
            var b,
              c,
              d,
              f = ["("];
            if (!this.isInline()) throw new k("replaceStack on non-inline");
            var g = this.popStack(!0);
            if (g instanceof e) (b = [g.value]), (f = ["(", b]), (d = !0);
            else {
              c = !0;
              var h = this.incrStack();
              (f = ["((", this.push(h), " = ", g, ")"]), (b = this.topStack());
            }
            var i = a.call(this, b);
            d || this.popStack(),
              c && this.stackSlot--,
              this.push(f.concat(i, ")"));
          },
          incrStack: function () {
            return (
              this.stackSlot++,
              this.stackSlot > this.stackVars.length &&
                this.stackVars.push("stack" + this.stackSlot),
              this.topStackName()
            );
          },
          topStackName: function () {
            return "stack" + this.stackSlot;
          },
          flushInline: function () {
            var a = this.inlineStack;
            this.inlineStack = [];
            for (var b = 0, c = a.length; c > b; b++) {
              var d = a[b];
              if (d instanceof e) this.compileStack.push(d);
              else {
                var f = this.incrStack();
                this.pushSource([f, " = ", d, ";"]), this.compileStack.push(f);
              }
            }
          },
          isInline: function () {
            return this.inlineStack.length;
          },
          popStack: function (a) {
            var b = this.isInline(),
              c = (b ? this.inlineStack : this.compileStack).pop();
            if (!a && c instanceof e) return c.value;
            if (!b) {
              if (!this.stackSlot) throw new k("Invalid stack pop");
              this.stackSlot--;
            }
            return c;
          },
          topStack: function () {
            var a = this.isInline() ? this.inlineStack : this.compileStack,
              b = a[a.length - 1];
            return b instanceof e ? b.value : b;
          },
          contextName: function (a) {
            return this.useDepths && a ? "depths[" + a + "]" : "depth" + a;
          },
          quotedString: function (a) {
            return this.source.quotedString(a);
          },
          objectLiteral: function (a) {
            return this.source.objectLiteral(a);
          },
          aliasable: function (a) {
            var b = this.aliases[a];
            return b
              ? (b.referenceCount++, b)
              : ((b = this.aliases[a] = this.source.wrap(a)),
                (b.aliasable = !0),
                (b.referenceCount = 1),
                b);
          },
          setupHelper: function (a, b, c) {
            var d = [],
              e = this.setupHelperArgs(b, a, d, c),
              f = this.nameLookup("helpers", b, "helper");
            return {
              params: d,
              paramsInit: e,
              name: f,
              callParams: [this.contextName(0)].concat(d),
            };
          },
          setupParams: function (a, b, c) {
            var d,
              e = {},
              f = [],
              g = [],
              h = [];
            (e.name = this.quotedString(a)),
              (e.hash = this.popStack()),
              this.trackIds && (e.hashIds = this.popStack()),
              this.stringParams &&
                ((e.hashTypes = this.popStack()),
                (e.hashContexts = this.popStack()));
            var i = this.popStack(),
              j = this.popStack();
            (j || i) &&
              ((e.fn = j || "this.noop"), (e.inverse = i || "this.noop"));
            for (var k = b; k--; )
              (d = this.popStack()),
                (c[k] = d),
                this.trackIds && (h[k] = this.popStack()),
                this.stringParams &&
                  ((g[k] = this.popStack()), (f[k] = this.popStack()));
            return (
              this.trackIds && (e.ids = this.source.generateArray(h)),
              this.stringParams &&
                ((e.types = this.source.generateArray(g)),
                (e.contexts = this.source.generateArray(f))),
              this.options.data && (e.data = "data"),
              this.useBlockParams && (e.blockParams = "blockParams"),
              e
            );
          },
          setupHelperArgs: function (a, b, c, d) {
            var e = this.setupParams(a, b, c, !0);
            return (
              (e = this.objectLiteral(e)),
              d
                ? (this.useRegister("options"),
                  c.push("options"),
                  ["options=", e])
                : (c.push(e), "")
            );
          },
        };
        for (
          var n =
              "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(
                " "
              ),
            o = (f.RESERVED_WORDS = {}),
            p = 0,
            q = n.length;
          q > p;
          p++
        )
          o[n[p]] = !0;
        return (
          (f.isValidJavaScriptVariableName = function (a) {
            return !f.RESERVED_WORDS[a] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(a);
          }),
          (h = f)
        );
      })(c, b, a, n),
      p = (function (a, b, c, d, e) {
        "use strict";
        var f,
          g = a,
          h = b,
          i = c.parser,
          j = c.parse,
          k = d.Compiler,
          l = d.compile,
          m = d.precompile,
          n = e,
          o = g.create,
          p = function () {
            var a = o();
            return (
              (a.compile = function (b, c) {
                return l(b, c, a);
              }),
              (a.precompile = function (b, c) {
                return m(b, c, a);
              }),
              (a.AST = h),
              (a.Compiler = k),
              (a.JavaScriptCompiler = n),
              (a.Parser = i),
              (a.parse = j),
              a
            );
          };
        (g = p()), (g.create = p);
        var q = "undefined" != typeof global ? global : window,
          r = q.Handlebars;
        return (
          (g.noConflict = function () {
            q.Handlebars === g && (q.Handlebars = r);
          }),
          (g["default"] = g),
          (f = g)
        );
      })(f, g, l, m, o);
    return p;
  });
  

/* end handlebar*/

/*for affix.js*/
/* ========================================================================
 * Bootstrap: affix.js v3.3.7
 * http://getbootstrap.com/javascript/#affix
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+ function($) {
    'use strict';

    // AFFIX CLASS DEFINITION
    // ======================

    var Affix = function(element, options) {
        this.options = $.extend({}, Affix.DEFAULTS, options)

        this.$target = $(this.options.target)
            .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
            .on('click.bs.affix.data-api', $.proxy(this.checkPositionWithEventLoop, this))

        this.$element = $(element)
        this.affixed = null
        this.unpin = null
        this.pinnedOffset = null

        this.checkPosition()
    }

    Affix.VERSION = '3.3.7'

    Affix.RESET = 'affix affix-top affix-bottom'

    Affix.DEFAULTS = {
        offset: 0,
        target: window
    }

    Affix.prototype.getState = function(scrollHeight, height, offsetTop, offsetBottom) {
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        var targetHeight = this.$target.height()

        if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false

        if (this.affixed == 'bottom') {
            if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
            return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
        }

        var initializing = this.affixed == null
        var colliderTop = initializing ? scrollTop : position.top
        var colliderHeight = initializing ? targetHeight : height

        if (offsetTop != null && scrollTop <= offsetTop) return 'top'
        if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'

        return false
    }

    Affix.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset
        this.$element.removeClass(Affix.RESET).addClass('affix')
        var scrollTop = this.$target.scrollTop()
        var position = this.$element.offset()
        return (this.pinnedOffset = position.top - scrollTop)
    }

    Affix.prototype.checkPositionWithEventLoop = function() {
        setTimeout($.proxy(this.checkPosition, this), 1)
    }

    Affix.prototype.checkPosition = function() {
        if (!this.$element.is(':visible')) return

        var height = this.$element.height()
        var offset = this.options.offset
        var offsetTop = offset.top
        var offsetBottom = offset.bottom
        var scrollHeight = Math.max($(document).height(), $(document.body).height())

        if (typeof offset != 'object') offsetBottom = offsetTop = offset
        if (typeof offsetTop == 'function') offsetTop = offset.top(this.$element)
        if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)

        var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)

        if (this.affixed != affix) {
            if (this.unpin != null) this.$element.css('top', '')

            var affixType = 'affix' + (affix ? '-' + affix : '')
            var e = $.Event(affixType + '.bs.affix')

            this.$element.trigger(e)

            if (e.isDefaultPrevented()) return

            this.affixed = affix
            this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null

            this.$element
                .removeClass(Affix.RESET)
                .addClass(affixType)
                .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
        }

        if (affix == 'bottom') {
            this.$element.offset({
                top: scrollHeight - height - offsetBottom
            })
        }
    }


    // AFFIX PLUGIN DEFINITION
    // =======================

    function Plugin(option) {
        return this.each(function() {
            var $this = $(this)
            var data = $this.data('bs.affix')
            var options = typeof option == 'object' && option

            if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    var old = $.fn.affix

    $.fn.affix = Plugin
    $.fn.affix.Constructor = Affix


    // AFFIX NO CONFLICT
    // =================

    $.fn.affix.noConflict = function() {
        $.fn.affix = old
        return this
    }


    // AFFIX DATA-API
    // ==============

    $(window).on('load', function() {
        $('[data-spy="affix"]').each(function() {
            var $spy = $(this)
            var data = $spy.data()

            data.offset = data.offset || {}

            if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
            if (data.offsetTop != null) data.offset.top = data.offsetTop

            Plugin.call($spy, data)
        })
    })

}(jQuery);
/* end affix*/
/* for bootstrap-progressbar.min.js*/
/*! bootstrap-progressbar v0.9.0 | Copyright (c) 2012-2015 Stephan Groß | MIT license | http://www.minddust.com */ ! function(t) {
    "use strict";
    var e = function(n, s) {
        this.$element = t(n), this.options = t.extend({}, e.defaults, s)
    };
    e.defaults = {
        transition_delay: 300,
        refresh_speed: 50,
        display_text: "none",
        use_percentage: !0,
        percent_format: function(t) {
            return t + "%"
        },
        amount_format: function(t, e) {
            return t + " / " + e
        },
        update: t.noop,
        done: t.noop,
        fail: t.noop
    }, e.prototype.transition = function() {
        var n = this.$element,
            s = n.parent(),
            a = this.$back_text,
            r = this.$front_text,
            i = this.options,
            o = parseInt(n.attr("data-transitiongoal")),
            h = parseInt(n.attr("aria-valuemin")) || 0,
            d = parseInt(n.attr("aria-valuemax")) || 100,
            f = s.hasClass("vertical"),
            p = i.update && "function" == typeof i.update ? i.update : e.defaults.update,
            u = i.done && "function" == typeof i.done ? i.done : e.defaults.done,
            c = i.fail && "function" == typeof i.fail ? i.fail : e.defaults.fail;
        if (isNaN(o)) return void c("data-transitiongoal not set");
        var l = Math.round(100 * (o - h) / (d - h));
        if ("center" === i.display_text && !a && !r) {
            this.$back_text = a = t("<span>").addClass("progressbar-back-text").prependTo(s), this.$front_text = r = t("<span>").addClass("progressbar-front-text").prependTo(n);
            var g;
            f ? (g = s.css("height"), a.css({
                height: g,
                "line-height": g
            }), r.css({
                height: g,
                "line-height": g
            }), t(window).resize(function() {
                g = s.css("height"), a.css({
                    height: g,
                    "line-height": g
                }), r.css({
                    height: g,
                    "line-height": g
                })
            })) : (g = s.css("width"), r.css({
                width: g
            }), t(window).resize(function() {
                g = s.css("width"), r.css({
                    width: g
                })
            }))
        }
        setTimeout(function() {
            var t, e, c, g, _;
            f ? n.css("height", l + "%") : n.css("width", l + "%");
            var x = setInterval(function() {
                f ? (c = n.height(), g = s.height()) : (c = n.width(), g = s.width()), t = Math.round(100 * c / g), e = Math.round(h + c / g * (d - h)), t >= l && (t = l, e = o, u(n), clearInterval(x)), "none" !== i.display_text && (_ = i.use_percentage ? i.percent_format(t) : i.amount_format(e, d, h), "fill" === i.display_text ? n.text(_) : "center" === i.display_text && (a.text(_), r.text(_))), n.attr("aria-valuenow", e), p(t, n)
            }, i.refresh_speed)
        }, i.transition_delay)
    };
    var n = t.fn.progressbar;
    t.fn.progressbar = function(n) {
        return this.each(function() {
            var s = t(this),
                a = s.data("bs.progressbar"),
                r = "object" == typeof n && n;
            a && r && t.extend(a.options, r), a || s.data("bs.progressbar", a = new e(this, r)), a.transition()
        })
    }, t.fn.progressbar.Constructor = e, t.fn.progressbar.noConflict = function() {
        return t.fn.progressbar = n, this
    }
}(window.jQuery);

/* end bootstrap-progressbar*/

/* for bootstrap.min.js*/
/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map

/* end bootstrap*/

/* for underscore.min.js*/
!(function (n, r) {
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = r())
      : "function" == typeof define && define.amd
      ? define("underscore", r)
      : ((n = "undefined" != typeof globalThis ? globalThis : n || self),
        (function () {
          var t = n._,
            e = (n._ = r());
          e.noConflict = function () {
            return (n._ = t), e;
          };
        })());
  })(this, function () {
    //     Underscore.js 1.13.2
    //     https://underscorejs.org
    //     (c) 2009-2021 Jeremy Ashkenas, Julian Gonggrijp, and DocumentCloud and Investigative Reporters & Editors
    //     Underscore may be freely distributed under the MIT license.
    var n = "1.13.2",
      r =
        ("object" == typeof self && self.self === self && self) ||
        ("object" == typeof global && global.global === global && global) ||
        Function("return this")() ||
        {},
      t = Array.prototype,
      e = Object.prototype,
      u = "undefined" != typeof Symbol ? Symbol.prototype : null,
      o = t.push,
      i = t.slice,
      a = e.toString,
      f = e.hasOwnProperty,
      c = "undefined" != typeof ArrayBuffer,
      l = "undefined" != typeof DataView,
      s = Array.isArray,
      p = Object.keys,
      v = Object.create,
      h = c && ArrayBuffer.isView,
      y = isNaN,
      d = isFinite,
      g = !{ toString: null }.propertyIsEnumerable("toString"),
      b = [
        "valueOf",
        "isPrototypeOf",
        "toString",
        "propertyIsEnumerable",
        "hasOwnProperty",
        "toLocaleString",
      ],
      m = Math.pow(2, 53) - 1;
    function j(n, r) {
      return (
        (r = null == r ? n.length - 1 : +r),
        function () {
          for (
            var t = Math.max(arguments.length - r, 0), e = Array(t), u = 0;
            u < t;
            u++
          )
            e[u] = arguments[u + r];
          switch (r) {
            case 0:
              return n.call(this, e);
            case 1:
              return n.call(this, arguments[0], e);
            case 2:
              return n.call(this, arguments[0], arguments[1], e);
          }
          var o = Array(r + 1);
          for (u = 0; u < r; u++) o[u] = arguments[u];
          return (o[r] = e), n.apply(this, o);
        }
      );
    }
    function _(n) {
      var r = typeof n;
      return "function" === r || ("object" === r && !!n);
    }
    function w(n) {
      return void 0 === n;
    }
    function A(n) {
      return !0 === n || !1 === n || "[object Boolean]" === a.call(n);
    }
    function x(n) {
      var r = "[object " + n + "]";
      return function (n) {
        return a.call(n) === r;
      };
    }
    var S = x("String"),
      O = x("Number"),
      M = x("Date"),
      E = x("RegExp"),
      B = x("Error"),
      N = x("Symbol"),
      I = x("ArrayBuffer"),
      T = x("Function"),
      k = r.document && r.document.childNodes;
    "function" != typeof /./ &&
      "object" != typeof Int8Array &&
      "function" != typeof k &&
      (T = function (n) {
        return "function" == typeof n || !1;
      });
    var D = T,
      R = x("Object"),
      F = l && R(new DataView(new ArrayBuffer(8))),
      V = "undefined" != typeof Map && R(new Map()),
      P = x("DataView");
    var q = F
        ? function (n) {
            return null != n && D(n.getInt8) && I(n.buffer);
          }
        : P,
      U = s || x("Array");
    function W(n, r) {
      return null != n && f.call(n, r);
    }
    var z = x("Arguments");
    !(function () {
      z(arguments) ||
        (z = function (n) {
          return W(n, "callee");
        });
    })();
    var L = z;
    function $(n) {
      return O(n) && y(n);
    }
    function C(n) {
      return function () {
        return n;
      };
    }
    function K(n) {
      return function (r) {
        var t = n(r);
        return "number" == typeof t && t >= 0 && t <= m;
      };
    }
    function J(n) {
      return function (r) {
        return null == r ? void 0 : r[n];
      };
    }
    var G = J("byteLength"),
      H = K(G),
      Q =
        /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/;
    var X = c
        ? function (n) {
            return h ? h(n) && !q(n) : H(n) && Q.test(a.call(n));
          }
        : C(!1),
      Y = J("length");
    function Z(n, r) {
      r = (function (n) {
        for (var r = {}, t = n.length, e = 0; e < t; ++e) r[n[e]] = !0;
        return {
          contains: function (n) {
            return !0 === r[n];
          },
          push: function (t) {
            return (r[t] = !0), n.push(t);
          },
        };
      })(r);
      var t = b.length,
        u = n.constructor,
        o = (D(u) && u.prototype) || e,
        i = "constructor";
      for (W(n, i) && !r.contains(i) && r.push(i); t--; )
        (i = b[t]) in n && n[i] !== o[i] && !r.contains(i) && r.push(i);
    }
    function nn(n) {
      if (!_(n)) return [];
      if (p) return p(n);
      var r = [];
      for (var t in n) W(n, t) && r.push(t);
      return g && Z(n, r), r;
    }
    function rn(n, r) {
      var t = nn(r),
        e = t.length;
      if (null == n) return !e;
      for (var u = Object(n), o = 0; o < e; o++) {
        var i = t[o];
        if (r[i] !== u[i] || !(i in u)) return !1;
      }
      return !0;
    }
    function tn(n) {
      return n instanceof tn
        ? n
        : this instanceof tn
        ? void (this._wrapped = n)
        : new tn(n);
    }
    function en(n) {
      return new Uint8Array(n.buffer || n, n.byteOffset || 0, G(n));
    }
    (tn.VERSION = n),
      (tn.prototype.value = function () {
        return this._wrapped;
      }),
      (tn.prototype.valueOf = tn.prototype.toJSON = tn.prototype.value),
      (tn.prototype.toString = function () {
        return String(this._wrapped);
      });
    var un = "[object DataView]";
    function on(n, r, t, e) {
      if (n === r) return 0 !== n || 1 / n == 1 / r;
      if (null == n || null == r) return !1;
      if (n != n) return r != r;
      var o = typeof n;
      return (
        ("function" === o || "object" === o || "object" == typeof r) &&
        (function n(r, t, e, o) {
          r instanceof tn && (r = r._wrapped);
          t instanceof tn && (t = t._wrapped);
          var i = a.call(r);
          if (i !== a.call(t)) return !1;
          if (F && "[object Object]" == i && q(r)) {
            if (!q(t)) return !1;
            i = un;
          }
          switch (i) {
            case "[object RegExp]":
            case "[object String]":
              return "" + r == "" + t;
            case "[object Number]":
              return +r != +r ? +t != +t : 0 == +r ? 1 / +r == 1 / t : +r == +t;
            case "[object Date]":
            case "[object Boolean]":
              return +r == +t;
            case "[object Symbol]":
              return u.valueOf.call(r) === u.valueOf.call(t);
            case "[object ArrayBuffer]":
            case un:
              return n(en(r), en(t), e, o);
          }
          var f = "[object Array]" === i;
          if (!f && X(r)) {
            if (G(r) !== G(t)) return !1;
            if (r.buffer === t.buffer && r.byteOffset === t.byteOffset) return !0;
            f = !0;
          }
          if (!f) {
            if ("object" != typeof r || "object" != typeof t) return !1;
            var c = r.constructor,
              l = t.constructor;
            if (
              c !== l &&
              !(D(c) && c instanceof c && D(l) && l instanceof l) &&
              "constructor" in r &&
              "constructor" in t
            )
              return !1;
          }
          o = o || [];
          var s = (e = e || []).length;
          for (; s--; ) if (e[s] === r) return o[s] === t;
          if ((e.push(r), o.push(t), f)) {
            if ((s = r.length) !== t.length) return !1;
            for (; s--; ) if (!on(r[s], t[s], e, o)) return !1;
          } else {
            var p,
              v = nn(r);
            if (((s = v.length), nn(t).length !== s)) return !1;
            for (; s--; )
              if (((p = v[s]), !W(t, p) || !on(r[p], t[p], e, o))) return !1;
          }
          return e.pop(), o.pop(), !0;
        })(n, r, t, e)
      );
    }
    function an(n) {
      if (!_(n)) return [];
      var r = [];
      for (var t in n) r.push(t);
      return g && Z(n, r), r;
    }
    function fn(n) {
      var r = Y(n);
      return function (t) {
        if (null == t) return !1;
        var e = an(t);
        if (Y(e)) return !1;
        for (var u = 0; u < r; u++) if (!D(t[n[u]])) return !1;
        return n !== hn || !D(t[cn]);
      };
    }
    var cn = "forEach",
      ln = "has",
      sn = ["clear", "delete"],
      pn = ["get", ln, "set"],
      vn = sn.concat(cn, pn),
      hn = sn.concat(pn),
      yn = ["add"].concat(sn, cn, ln),
      dn = V ? fn(vn) : x("Map"),
      gn = V ? fn(hn) : x("WeakMap"),
      bn = V ? fn(yn) : x("Set"),
      mn = x("WeakSet");
    function jn(n) {
      for (var r = nn(n), t = r.length, e = Array(t), u = 0; u < t; u++)
        e[u] = n[r[u]];
      return e;
    }
    function _n(n) {
      for (var r = {}, t = nn(n), e = 0, u = t.length; e < u; e++)
        r[n[t[e]]] = t[e];
      return r;
    }
    function wn(n) {
      var r = [];
      for (var t in n) D(n[t]) && r.push(t);
      return r.sort();
    }
    function An(n, r) {
      return function (t) {
        var e = arguments.length;
        if ((r && (t = Object(t)), e < 2 || null == t)) return t;
        for (var u = 1; u < e; u++)
          for (var o = arguments[u], i = n(o), a = i.length, f = 0; f < a; f++) {
            var c = i[f];
            (r && void 0 !== t[c]) || (t[c] = o[c]);
          }
        return t;
      };
    }
    var xn = An(an),
      Sn = An(nn),
      On = An(an, !0);
    function Mn(n) {
      if (!_(n)) return {};
      if (v) return v(n);
      var r = function () {};
      r.prototype = n;
      var t = new r();
      return (r.prototype = null), t;
    }
    function En(n) {
      return U(n) ? n : [n];
    }
    function Bn(n) {
      return tn.toPath(n);
    }
    function Nn(n, r) {
      for (var t = r.length, e = 0; e < t; e++) {
        if (null == n) return;
        n = n[r[e]];
      }
      return t ? n : void 0;
    }
    function In(n, r, t) {
      var e = Nn(n, Bn(r));
      return w(e) ? t : e;
    }
    function Tn(n) {
      return n;
    }
    function kn(n) {
      return (
        (n = Sn({}, n)),
        function (r) {
          return rn(r, n);
        }
      );
    }
    function Dn(n) {
      return (
        (n = Bn(n)),
        function (r) {
          return Nn(r, n);
        }
      );
    }
    function Rn(n, r, t) {
      if (void 0 === r) return n;
      switch (null == t ? 3 : t) {
        case 1:
          return function (t) {
            return n.call(r, t);
          };
        case 3:
          return function (t, e, u) {
            return n.call(r, t, e, u);
          };
        case 4:
          return function (t, e, u, o) {
            return n.call(r, t, e, u, o);
          };
      }
      return function () {
        return n.apply(r, arguments);
      };
    }
    function Fn(n, r, t) {
      return null == n ? Tn : D(n) ? Rn(n, r, t) : _(n) && !U(n) ? kn(n) : Dn(n);
    }
    function Vn(n, r) {
      return Fn(n, r, 1 / 0);
    }
    function Pn(n, r, t) {
      return tn.iteratee !== Vn ? tn.iteratee(n, r) : Fn(n, r, t);
    }
    function qn() {}
    function Un(n, r) {
      return (
        null == r && ((r = n), (n = 0)),
        n + Math.floor(Math.random() * (r - n + 1))
      );
    }
    (tn.toPath = En), (tn.iteratee = Vn);
    var Wn =
      Date.now ||
      function () {
        return new Date().getTime();
      };
    function zn(n) {
      var r = function (r) {
          return n[r];
        },
        t = "(?:" + nn(n).join("|") + ")",
        e = RegExp(t),
        u = RegExp(t, "g");
      return function (n) {
        return (n = null == n ? "" : "" + n), e.test(n) ? n.replace(u, r) : n;
      };
    }
    var Ln = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;",
      },
      $n = zn(Ln),
      Cn = zn(_n(Ln)),
      Kn = (tn.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g,
      }),
      Jn = /(.)^/,
      Gn = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029",
      },
      Hn = /\\|'|\r|\n|\u2028|\u2029/g;
    function Qn(n) {
      return "\\" + Gn[n];
    }
    var Xn = /^\s*(\w|\$)+\s*$/;
    var Yn = 0;
    function Zn(n, r, t, e, u) {
      if (!(e instanceof r)) return n.apply(t, u);
      var o = Mn(n.prototype),
        i = n.apply(o, u);
      return _(i) ? i : o;
    }
    var nr = j(function (n, r) {
      var t = nr.placeholder,
        e = function () {
          for (var u = 0, o = r.length, i = Array(o), a = 0; a < o; a++)
            i[a] = r[a] === t ? arguments[u++] : r[a];
          for (; u < arguments.length; ) i.push(arguments[u++]);
          return Zn(n, e, this, this, i);
        };
      return e;
    });
    nr.placeholder = tn;
    var rr = j(function (n, r, t) {
        if (!D(n)) throw new TypeError("Bind must be called on a function");
        var e = j(function (u) {
          return Zn(n, e, r, this, t.concat(u));
        });
        return e;
      }),
      tr = K(Y);
    function er(n, r, t, e) {
      if (((e = e || []), r || 0 === r)) {
        if (r <= 0) return e.concat(n);
      } else r = 1 / 0;
      for (var u = e.length, o = 0, i = Y(n); o < i; o++) {
        var a = n[o];
        if (tr(a) && (U(a) || L(a)))
          if (r > 1) er(a, r - 1, t, e), (u = e.length);
          else for (var f = 0, c = a.length; f < c; ) e[u++] = a[f++];
        else t || (e[u++] = a);
      }
      return e;
    }
    var ur = j(function (n, r) {
      var t = (r = er(r, !1, !1)).length;
      if (t < 1) throw new Error("bindAll must be passed function names");
      for (; t--; ) {
        var e = r[t];
        n[e] = rr(n[e], n);
      }
      return n;
    });
    var or = j(function (n, r, t) {
        return setTimeout(function () {
          return n.apply(null, t);
        }, r);
      }),
      ir = nr(or, tn, 1);
    function ar(n) {
      return function () {
        return !n.apply(this, arguments);
      };
    }
    function fr(n, r) {
      var t;
      return function () {
        return --n > 0 && (t = r.apply(this, arguments)), n <= 1 && (r = null), t;
      };
    }
    var cr = nr(fr, 2);
    function lr(n, r, t) {
      r = Pn(r, t);
      for (var e, u = nn(n), o = 0, i = u.length; o < i; o++)
        if (r(n[(e = u[o])], e, n)) return e;
    }
    function sr(n) {
      return function (r, t, e) {
        t = Pn(t, e);
        for (var u = Y(r), o = n > 0 ? 0 : u - 1; o >= 0 && o < u; o += n)
          if (t(r[o], o, r)) return o;
        return -1;
      };
    }
    var pr = sr(1),
      vr = sr(-1);
    function hr(n, r, t, e) {
      for (var u = (t = Pn(t, e, 1))(r), o = 0, i = Y(n); o < i; ) {
        var a = Math.floor((o + i) / 2);
        t(n[a]) < u ? (o = a + 1) : (i = a);
      }
      return o;
    }
    function yr(n, r, t) {
      return function (e, u, o) {
        var a = 0,
          f = Y(e);
        if ("number" == typeof o)
          n > 0
            ? (a = o >= 0 ? o : Math.max(o + f, a))
            : (f = o >= 0 ? Math.min(o + 1, f) : o + f + 1);
        else if (t && o && f) return e[(o = t(e, u))] === u ? o : -1;
        if (u != u) return (o = r(i.call(e, a, f), $)) >= 0 ? o + a : -1;
        for (o = n > 0 ? a : f - 1; o >= 0 && o < f; o += n)
          if (e[o] === u) return o;
        return -1;
      };
    }
    var dr = yr(1, pr, hr),
      gr = yr(-1, vr);
    function br(n, r, t) {
      var e = (tr(n) ? pr : lr)(n, r, t);
      if (void 0 !== e && -1 !== e) return n[e];
    }
    function mr(n, r, t) {
      var e, u;
      if (((r = Rn(r, t)), tr(n)))
        for (e = 0, u = n.length; e < u; e++) r(n[e], e, n);
      else {
        var o = nn(n);
        for (e = 0, u = o.length; e < u; e++) r(n[o[e]], o[e], n);
      }
      return n;
    }
    function jr(n, r, t) {
      r = Pn(r, t);
      for (
        var e = !tr(n) && nn(n), u = (e || n).length, o = Array(u), i = 0;
        i < u;
        i++
      ) {
        var a = e ? e[i] : i;
        o[i] = r(n[a], a, n);
      }
      return o;
    }
    function _r(n) {
      var r = function (r, t, e, u) {
        var o = !tr(r) && nn(r),
          i = (o || r).length,
          a = n > 0 ? 0 : i - 1;
        for (u || ((e = r[o ? o[a] : a]), (a += n)); a >= 0 && a < i; a += n) {
          var f = o ? o[a] : a;
          e = t(e, r[f], f, r);
        }
        return e;
      };
      return function (n, t, e, u) {
        var o = arguments.length >= 3;
        return r(n, Rn(t, u, 4), e, o);
      };
    }
    var wr = _r(1),
      Ar = _r(-1);
    function xr(n, r, t) {
      var e = [];
      return (
        (r = Pn(r, t)),
        mr(n, function (n, t, u) {
          r(n, t, u) && e.push(n);
        }),
        e
      );
    }
    function Sr(n, r, t) {
      r = Pn(r, t);
      for (var e = !tr(n) && nn(n), u = (e || n).length, o = 0; o < u; o++) {
        var i = e ? e[o] : o;
        if (!r(n[i], i, n)) return !1;
      }
      return !0;
    }
    function Or(n, r, t) {
      r = Pn(r, t);
      for (var e = !tr(n) && nn(n), u = (e || n).length, o = 0; o < u; o++) {
        var i = e ? e[o] : o;
        if (r(n[i], i, n)) return !0;
      }
      return !1;
    }
    function Mr(n, r, t, e) {
      return (
        tr(n) || (n = jn(n)),
        ("number" != typeof t || e) && (t = 0),
        dr(n, r, t) >= 0
      );
    }
    var Er = j(function (n, r, t) {
      var e, u;
      return (
        D(r)
          ? (u = r)
          : ((r = Bn(r)), (e = r.slice(0, -1)), (r = r[r.length - 1])),
        jr(n, function (n) {
          var o = u;
          if (!o) {
            if ((e && e.length && (n = Nn(n, e)), null == n)) return;
            o = n[r];
          }
          return null == o ? o : o.apply(n, t);
        })
      );
    });
    function Br(n, r) {
      return jr(n, Dn(r));
    }
    function Nr(n, r, t) {
      var e,
        u,
        o = -1 / 0,
        i = -1 / 0;
      if (
        null == r ||
        ("number" == typeof r && "object" != typeof n[0] && null != n)
      )
        for (var a = 0, f = (n = tr(n) ? n : jn(n)).length; a < f; a++)
          null != (e = n[a]) && e > o && (o = e);
      else
        (r = Pn(r, t)),
          mr(n, function (n, t, e) {
            ((u = r(n, t, e)) > i || (u === -1 / 0 && o === -1 / 0)) &&
              ((o = n), (i = u));
          });
      return o;
    }
    var Ir = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g;
    function Tr(n) {
      return n
        ? U(n)
          ? i.call(n)
          : S(n)
          ? n.match(Ir)
          : tr(n)
          ? jr(n, Tn)
          : jn(n)
        : [];
    }
    function kr(n, r, t) {
      if (null == r || t) return tr(n) || (n = jn(n)), n[Un(n.length - 1)];
      var e = Tr(n),
        u = Y(e);
      r = Math.max(Math.min(r, u), 0);
      for (var o = u - 1, i = 0; i < r; i++) {
        var a = Un(i, o),
          f = e[i];
        (e[i] = e[a]), (e[a] = f);
      }
      return e.slice(0, r);
    }
    function Dr(n, r) {
      return function (t, e, u) {
        var o = r ? [[], []] : {};
        return (
          (e = Pn(e, u)),
          mr(t, function (r, u) {
            var i = e(r, u, t);
            n(o, r, i);
          }),
          o
        );
      };
    }
    var Rr = Dr(function (n, r, t) {
        W(n, t) ? n[t].push(r) : (n[t] = [r]);
      }),
      Fr = Dr(function (n, r, t) {
        n[t] = r;
      }),
      Vr = Dr(function (n, r, t) {
        W(n, t) ? n[t]++ : (n[t] = 1);
      }),
      Pr = Dr(function (n, r, t) {
        n[t ? 0 : 1].push(r);
      }, !0);
    function qr(n, r, t) {
      return r in t;
    }
    var Ur = j(function (n, r) {
        var t = {},
          e = r[0];
        if (null == n) return t;
        D(e)
          ? (r.length > 1 && (e = Rn(e, r[1])), (r = an(n)))
          : ((e = qr), (r = er(r, !1, !1)), (n = Object(n)));
        for (var u = 0, o = r.length; u < o; u++) {
          var i = r[u],
            a = n[i];
          e(a, i, n) && (t[i] = a);
        }
        return t;
      }),
      Wr = j(function (n, r) {
        var t,
          e = r[0];
        return (
          D(e)
            ? ((e = ar(e)), r.length > 1 && (t = r[1]))
            : ((r = jr(er(r, !1, !1), String)),
              (e = function (n, t) {
                return !Mr(r, t);
              })),
          Ur(n, e, t)
        );
      });
    function zr(n, r, t) {
      return i.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r)));
    }
    function Lr(n, r, t) {
      return null == n || n.length < 1
        ? null == r || t
          ? void 0
          : []
        : null == r || t
        ? n[0]
        : zr(n, n.length - r);
    }
    function $r(n, r, t) {
      return i.call(n, null == r || t ? 1 : r);
    }
    var Cr = j(function (n, r) {
        return (
          (r = er(r, !0, !0)),
          xr(n, function (n) {
            return !Mr(r, n);
          })
        );
      }),
      Kr = j(function (n, r) {
        return Cr(n, r);
      });
    function Jr(n, r, t, e) {
      A(r) || ((e = t), (t = r), (r = !1)), null != t && (t = Pn(t, e));
      for (var u = [], o = [], i = 0, a = Y(n); i < a; i++) {
        var f = n[i],
          c = t ? t(f, i, n) : f;
        r && !t
          ? ((i && o === c) || u.push(f), (o = c))
          : t
          ? Mr(o, c) || (o.push(c), u.push(f))
          : Mr(u, f) || u.push(f);
      }
      return u;
    }
    var Gr = j(function (n) {
      return Jr(er(n, !0, !0));
    });
    function Hr(n) {
      for (var r = (n && Nr(n, Y).length) || 0, t = Array(r), e = 0; e < r; e++)
        t[e] = Br(n, e);
      return t;
    }
    var Qr = j(Hr);
    function Xr(n, r) {
      return n._chain ? tn(r).chain() : r;
    }
    function Yr(n) {
      return (
        mr(wn(n), function (r) {
          var t = (tn[r] = n[r]);
          tn.prototype[r] = function () {
            var n = [this._wrapped];
            return o.apply(n, arguments), Xr(this, t.apply(tn, n));
          };
        }),
        tn
      );
    }
    mr(
      ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"],
      function (n) {
        var r = t[n];
        tn.prototype[n] = function () {
          var t = this._wrapped;
          return (
            null != t &&
              (r.apply(t, arguments),
              ("shift" !== n && "splice" !== n) || 0 !== t.length || delete t[0]),
            Xr(this, t)
          );
        };
      }
    ),
      mr(["concat", "join", "slice"], function (n) {
        var r = t[n];
        tn.prototype[n] = function () {
          var n = this._wrapped;
          return null != n && (n = r.apply(n, arguments)), Xr(this, n);
        };
      });
    var Zr = Yr({
      __proto__: null,
      VERSION: n,
      restArguments: j,
      isObject: _,
      isNull: function (n) {
        return null === n;
      },
      isUndefined: w,
      isBoolean: A,
      isElement: function (n) {
        return !(!n || 1 !== n.nodeType);
      },
      isString: S,
      isNumber: O,
      isDate: M,
      isRegExp: E,
      isError: B,
      isSymbol: N,
      isArrayBuffer: I,
      isDataView: q,
      isArray: U,
      isFunction: D,
      isArguments: L,
      isFinite: function (n) {
        return !N(n) && d(n) && !isNaN(parseFloat(n));
      },
      isNaN: $,
      isTypedArray: X,
      isEmpty: function (n) {
        if (null == n) return !0;
        var r = Y(n);
        return "number" == typeof r && (U(n) || S(n) || L(n))
          ? 0 === r
          : 0 === Y(nn(n));
      },
      isMatch: rn,
      isEqual: function (n, r) {
        return on(n, r);
      },
      isMap: dn,
      isWeakMap: gn,
      isSet: bn,
      isWeakSet: mn,
      keys: nn,
      allKeys: an,
      values: jn,
      pairs: function (n) {
        for (var r = nn(n), t = r.length, e = Array(t), u = 0; u < t; u++)
          e[u] = [r[u], n[r[u]]];
        return e;
      },
      invert: _n,
      functions: wn,
      methods: wn,
      extend: xn,
      extendOwn: Sn,
      assign: Sn,
      defaults: On,
      create: function (n, r) {
        var t = Mn(n);
        return r && Sn(t, r), t;
      },
      clone: function (n) {
        return _(n) ? (U(n) ? n.slice() : xn({}, n)) : n;
      },
      tap: function (n, r) {
        return r(n), n;
      },
      get: In,
      has: function (n, r) {
        for (var t = (r = Bn(r)).length, e = 0; e < t; e++) {
          var u = r[e];
          if (!W(n, u)) return !1;
          n = n[u];
        }
        return !!t;
      },
      mapObject: function (n, r, t) {
        r = Pn(r, t);
        for (var e = nn(n), u = e.length, o = {}, i = 0; i < u; i++) {
          var a = e[i];
          o[a] = r(n[a], a, n);
        }
        return o;
      },
      identity: Tn,
      constant: C,
      noop: qn,
      toPath: En,
      property: Dn,
      propertyOf: function (n) {
        return null == n
          ? qn
          : function (r) {
              return In(n, r);
            };
      },
      matcher: kn,
      matches: kn,
      times: function (n, r, t) {
        var e = Array(Math.max(0, n));
        r = Rn(r, t, 1);
        for (var u = 0; u < n; u++) e[u] = r(u);
        return e;
      },
      random: Un,
      now: Wn,
      escape: $n,
      unescape: Cn,
      templateSettings: Kn,
      template: function (n, r, t) {
        !r && t && (r = t), (r = On({}, r, tn.templateSettings));
        var e = RegExp(
            [
              (r.escape || Jn).source,
              (r.interpolate || Jn).source,
              (r.evaluate || Jn).source,
            ].join("|") + "|$",
            "g"
          ),
          u = 0,
          o = "__p+='";
        n.replace(e, function (r, t, e, i, a) {
          return (
            (o += n.slice(u, a).replace(Hn, Qn)),
            (u = a + r.length),
            t
              ? (o += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'")
              : e
              ? (o += "'+\n((__t=(" + e + "))==null?'':__t)+\n'")
              : i && (o += "';\n" + i + "\n__p+='"),
            r
          );
        }),
          (o += "';\n");
        var i,
          a = r.variable;
        if (a) {
          if (!Xn.test(a))
            throw new Error("variable is not a bare identifier: " + a);
        } else (o = "with(obj||{}){\n" + o + "}\n"), (a = "obj");
        o =
          "var __t,__p='',__j=Array.prototype.join," +
          "print=function(){__p+=__j.call(arguments,'');};\n" +
          o +
          "return __p;\n";
        try {
          i = new Function(a, "_", o);
        } catch (n) {
          throw ((n.source = o), n);
        }
        var f = function (n) {
          return i.call(this, n, tn);
        };
        return (f.source = "function(" + a + "){\n" + o + "}"), f;
      },
      result: function (n, r, t) {
        var e = (r = Bn(r)).length;
        if (!e) return D(t) ? t.call(n) : t;
        for (var u = 0; u < e; u++) {
          var o = null == n ? void 0 : n[r[u]];
          void 0 === o && ((o = t), (u = e)), (n = D(o) ? o.call(n) : o);
        }
        return n;
      },
      uniqueId: function (n) {
        var r = ++Yn + "";
        return n ? n + r : r;
      },
      chain: function (n) {
        var r = tn(n);
        return (r._chain = !0), r;
      },
      iteratee: Vn,
      partial: nr,
      bind: rr,
      bindAll: ur,
      memoize: function (n, r) {
        var t = function (e) {
          var u = t.cache,
            o = "" + (r ? r.apply(this, arguments) : e);
          return W(u, o) || (u[o] = n.apply(this, arguments)), u[o];
        };
        return (t.cache = {}), t;
      },
      delay: or,
      defer: ir,
      throttle: function (n, r, t) {
        var e,
          u,
          o,
          i,
          a = 0;
        t || (t = {});
        var f = function () {
            (a = !1 === t.leading ? 0 : Wn()),
              (e = null),
              (i = n.apply(u, o)),
              e || (u = o = null);
          },
          c = function () {
            var c = Wn();
            a || !1 !== t.leading || (a = c);
            var l = r - (c - a);
            return (
              (u = this),
              (o = arguments),
              l <= 0 || l > r
                ? (e && (clearTimeout(e), (e = null)),
                  (a = c),
                  (i = n.apply(u, o)),
                  e || (u = o = null))
                : e || !1 === t.trailing || (e = setTimeout(f, l)),
              i
            );
          };
        return (
          (c.cancel = function () {
            clearTimeout(e), (a = 0), (e = u = o = null);
          }),
          c
        );
      },
      debounce: function (n, r, t) {
        var e,
          u,
          o,
          i,
          a,
          f = function () {
            var c = Wn() - u;
            r > c
              ? (e = setTimeout(f, r - c))
              : ((e = null), t || (i = n.apply(a, o)), e || (o = a = null));
          },
          c = j(function (c) {
            return (
              (a = this),
              (o = c),
              (u = Wn()),
              e || ((e = setTimeout(f, r)), t && (i = n.apply(a, o))),
              i
            );
          });
        return (
          (c.cancel = function () {
            clearTimeout(e), (e = o = a = null);
          }),
          c
        );
      },
      wrap: function (n, r) {
        return nr(r, n);
      },
      negate: ar,
      compose: function () {
        var n = arguments,
          r = n.length - 1;
        return function () {
          for (var t = r, e = n[r].apply(this, arguments); t--; )
            e = n[t].call(this, e);
          return e;
        };
      },
      after: function (n, r) {
        return function () {
          if (--n < 1) return r.apply(this, arguments);
        };
      },
      before: fr,
      once: cr,
      findKey: lr,
      findIndex: pr,
      findLastIndex: vr,
      sortedIndex: hr,
      indexOf: dr,
      lastIndexOf: gr,
      find: br,
      detect: br,
      findWhere: function (n, r) {
        return br(n, kn(r));
      },
      each: mr,
      forEach: mr,
      map: jr,
      collect: jr,
      reduce: wr,
      foldl: wr,
      inject: wr,
      reduceRight: Ar,
      foldr: Ar,
      filter: xr,
      select: xr,
      reject: function (n, r, t) {
        return xr(n, ar(Pn(r)), t);
      },
      every: Sr,
      all: Sr,
      some: Or,
      any: Or,
      contains: Mr,
      includes: Mr,
      include: Mr,
      invoke: Er,
      pluck: Br,
      where: function (n, r) {
        return xr(n, kn(r));
      },
      max: Nr,
      min: function (n, r, t) {
        var e,
          u,
          o = 1 / 0,
          i = 1 / 0;
        if (
          null == r ||
          ("number" == typeof r && "object" != typeof n[0] && null != n)
        )
          for (var a = 0, f = (n = tr(n) ? n : jn(n)).length; a < f; a++)
            null != (e = n[a]) && e < o && (o = e);
        else
          (r = Pn(r, t)),
            mr(n, function (n, t, e) {
              ((u = r(n, t, e)) < i || (u === 1 / 0 && o === 1 / 0)) &&
                ((o = n), (i = u));
            });
        return o;
      },
      shuffle: function (n) {
        return kr(n, 1 / 0);
      },
      sample: kr,
      sortBy: function (n, r, t) {
        var e = 0;
        return (
          (r = Pn(r, t)),
          Br(
            jr(n, function (n, t, u) {
              return { value: n, index: e++, criteria: r(n, t, u) };
            }).sort(function (n, r) {
              var t = n.criteria,
                e = r.criteria;
              if (t !== e) {
                if (t > e || void 0 === t) return 1;
                if (t < e || void 0 === e) return -1;
              }
              return n.index - r.index;
            }),
            "value"
          )
        );
      },
      groupBy: Rr,
      indexBy: Fr,
      countBy: Vr,
      partition: Pr,
      toArray: Tr,
      size: function (n) {
        return null == n ? 0 : tr(n) ? n.length : nn(n).length;
      },
      pick: Ur,
      omit: Wr,
      first: Lr,
      head: Lr,
      take: Lr,
      initial: zr,
      last: function (n, r, t) {
        return null == n || n.length < 1
          ? null == r || t
            ? void 0
            : []
          : null == r || t
          ? n[n.length - 1]
          : $r(n, Math.max(0, n.length - r));
      },
      rest: $r,
      tail: $r,
      drop: $r,
      compact: function (n) {
        return xr(n, Boolean);
      },
      flatten: function (n, r) {
        return er(n, r, !1);
      },
      without: Kr,
      uniq: Jr,
      unique: Jr,
      union: Gr,
      intersection: function (n) {
        for (var r = [], t = arguments.length, e = 0, u = Y(n); e < u; e++) {
          var o = n[e];
          if (!Mr(r, o)) {
            var i;
            for (i = 1; i < t && Mr(arguments[i], o); i++);
            i === t && r.push(o);
          }
        }
        return r;
      },
      difference: Cr,
      unzip: Hr,
      transpose: Hr,
      zip: Qr,
      object: function (n, r) {
        for (var t = {}, e = 0, u = Y(n); e < u; e++)
          r ? (t[n[e]] = r[e]) : (t[n[e][0]] = n[e][1]);
        return t;
      },
      range: function (n, r, t) {
        null == r && ((r = n || 0), (n = 0)), t || (t = r < n ? -1 : 1);
        for (
          var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), o = 0;
          o < e;
          o++, n += t
        )
          u[o] = n;
        return u;
      },
      chunk: function (n, r) {
        if (null == r || r < 1) return [];
        for (var t = [], e = 0, u = n.length; e < u; )
          t.push(i.call(n, e, (e += r)));
        return t;
      },
      mixin: Yr,
      default: tn,
    });
    return (Zr._ = Zr), Zr;
  });
  
/* end underscore*/

/* for owl.carosoul.min.js*/
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
 ! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        }, this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        }, a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
            this._handlers[c] = a.proxy(this[c], this)
        }, this)), a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Workers, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }
    e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Type = {
        Event: "event",
        State: "state"
    }, e.Plugins = {}, e.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this.settings.margin || "",
                c = !this.settings.autoWidth,
                d = this.settings.rtl,
                e = {
                    width: "auto",
                    "margin-left": d ? b : "",
                    "margin-right": d ? "" : b
                };
            !c && this.$stage.children().css(e), a.css = e
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                c = null,
                d = this._items.length,
                e = !this.settings.autoWidth,
                f = [];
            for (a.items = {
                    merge: !1,
                    width: b
                }; d--;) c = this._mergers[d], c = this.settings.mergeFit && Math.min(c, this.settings.items) || c, a.items.merge = c > 1 || a.items.merge, f[d] = e ? b * c : this._items[d].width();
            this._widths = f
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var b = [],
                c = this._items,
                d = this.settings,
                e = Math.max(2 * d.items, 4),
                f = 2 * Math.ceil(c.length / 2),
                g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0,
                h = "",
                i = "";
            for (g /= 2; g--;) b.push(this.normalize(b.length / 2, !0)), h += c[b[b.length - 1]][0].outerHTML, b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), i = c[b[b.length - 1]][0].outerHTML + i;
            this._clones = b, a(h).addClass("cloned").appendTo(this.$stage), a(i).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b;) d = f[c - 1] || 0, e = this._widths[this.relative(c)] + this.settings.margin, f.push(d + e * a);
            this._coordinates = f
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a = this.settings.stagePadding,
                b = this._coordinates,
                c = {
                    width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                    "padding-left": a || "",
                    "padding-right": a || ""
                };
            this.$stage.css(c)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            var b = this._coordinates.length,
                c = !this.settings.autoWidth,
                d = this.$stage.children();
            if (c && a.items.merge)
                for (; b--;) a.css.width = this._widths[this.relative(b)], d.eq(b).css(a.css);
            else c && (a.css.width = a.items.width, d.css(a.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = a.current ? this.$stage.children().index(a.current) : 0, a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)), this.reset(a.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; c < d; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }], e.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var b, c, e;
            b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && e <= 0 && this.preloadAutoWidthImages(b)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            a <= b && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()), delete e.responsive, e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + d))) : e = a.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, e.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; b < c;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))))
    }, e.prototype.registerEventHandlers = function() {
        a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
    }, e.prototype.onDragStart = function(b) {
        var d = null;
        3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), d = {
            x: d[16 === d.length ? 12 : 4],
            y: d[16 === d.length ? 13 : 5]
        }) : (d = this.$stage.position(), d = {
            x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
            y: d.top
        }), this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = a(b.target), this._drag.stage.start = d, this._drag.stage.current = d, this._drag.pointer = this.pointer(b), a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)), a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)), Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, e.prototype.onDragMove = function(a) {
        var b = null,
            c = null,
            d = null,
            e = this.difference(this._drag.pointer, this.pointer(a)),
            f = this.difference(this._drag.stage.start, e);
        this.is("dragging") && (a.preventDefault(), this.settings.loop ? (b = this.coordinates(this.minimum()), c = this.coordinates(this.maximum() + 1) - b, f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), d = this.settings.pullDrag ? -1 * e.x / 5 : 0, f.x = Math.max(Math.min(f.x, b + d), c + d)), this._drag.stage.current = f, this.animate(f.x))
    }, e.prototype.onDragEnd = function(b) {
        var d = this.difference(this._drag.pointer, this.pointer(b)),
            e = this._drag.stage.current,
            f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
        a(c).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = f, (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, e.prototype.closest = function(b, c) {
        var d = -1,
            e = 30,
            f = this.width(),
            g = this.coordinates();
        return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
            return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a), d === -1
        }, this)), this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())), d
    }, e.prototype.animate = function(b) {
        var c = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), c && (this.enter("animating"), this.trigger("translate")), a.support.transform3d && a.support.transition ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : c ? this.$stage.animate({
            left: b + "px"
        }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: b + "px"
        })
    }, e.prototype.is = function(a) {
        return this._states.current[a] && this._states.current[a] > 0
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(b) {
        return "string" === a.type(b) && (this._invalidated[b] = !0, this.is("valid") && this.leave("valid")), a.map(this._invalidated, function(a, b) {
            return b
        })
    }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(a, b) {
        var c = this._items.length,
            e = b ? 0 : this._clones.length;
        return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2), a
    }, e.prototype.relative = function(a) {
        return a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = this.settings,
            f = this._coordinates.length;
        if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
        else if (e.autoWidth || e.merge) {
            for (b = this._items.length, c = this._items[--b].width(), d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin, !(c > d)););
            f = b + 1
        } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
        return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c, e = 1,
            f = b - 1;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1, f = b + 1), c = this._coordinates[b], c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0, c = Math.ceil(c))
    }, e.prototype.duration = function(a, b, c) {
        return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(a, b) {
        var c = this.current(),
            d = null,
            e = a - this.relative(c),
            f = (e > 0) - (e < 0),
            g = this._items.length,
            h = this.minimum(),
            i = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g), a = c + e, d = ((a - h) % g + g) % g + h, d !== a && d - e <= i && d - e > 0 && (c = d - e, a = d, this.reset(c))) : this.settings.rewind ? (i += 1, a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)), this.speed(this.duration(c, a, b)), this.current(a), this.$element.is(":visible") && this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.onTransitionEnd = function(a) {
        if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating"), this.trigger("translated")
    }, e.prototype.viewport = function() {
        var d;
        return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."), d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(b, c) {
        var e = this.relative(this._current);
        c = c === d ? this._items.length : this.normalize(c, !0), b = b instanceof jQuery ? b : a(b), this.trigger("add", {
            content: b,
            position: c
        }), b = this.prepare(b), 0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[e] && this.reset(this._items[e].index()), this.invalidate("items"), this.trigger("added", {
            content: b,
            position: c
        })
    }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        b.each(a.proxy(function(b, c) {
            this.enter("pre-loading"), c = a(c), a(new Image).one("load", a.proxy(function(a) {
                c.attr("src", a.target.src), c.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
        }, this))
    }, e.prototype.destroy = function() {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), a(c).off(".owl.core"), this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer), this.off(b, "resize", this._handlers.onThrottledResize));
        for (var d in this._plugins) this._plugins[d].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d, f, g) {
        var h = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            i = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, h, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(j)
        }), this.register({
            type: e.Type.Event,
            name: b
        }), this.$element.trigger(j), this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)), j
    }, e.prototype.enter = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++
        }, this))
    }, e.prototype.leave = function(b) {
        a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
            this._states.current[b]--
        }, this))
    }, e.prototype.register = function(b) {
        if (b.type === e.Type.Event) {
            if (a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl) {
                var c = a.event.special[b.name]._default;
                a.event.special[b.name]._default = function(a) {
                    return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                }, a.event.special[b.name].owl = !0
            }
        } else b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags, this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
            return a.inArray(c, this._states.tags[b.name]) === d
        }, this)))
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.pointer = function(a) {
        var c = {
            x: null,
            y: null
        };
        return a = a.originalEvent || a || b.event, a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a, a.pageX ? (c.x = a.pageX, c.y = a.pageY) : (c.x = a.clientX, c.y = a.clientY), c
    }, e.prototype.isNumeric = function(a) {
        return !isNaN(parseFloat(a))
    }, e.prototype.difference = function(a, b) {
        return {
            x: a.x - b.x,
            y: a.y - b.y
        }
    }, a.fn.owlCarousel = function(b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var d = a(this),
                f = d.data("owl.carousel");
            f || (f = new e(this, "object" == typeof b && b), d.data("owl.carousel", f), a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                f.register({
                    type: e.Type.Event,
                    name: c
                }), f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                    a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]))
                }, f))
            })), "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    }, e.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, e.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, e.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); f++ < e;) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        lazyLoad: !1
    }, e.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": 'url("' + g + '")',
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    e.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, e.prototype.update = function() {
        var b = this._core._current,
            c = b + this._core.settings.items,
            d = this._core.$stage.children().toArray().slice(b, c),
            e = [],
            f = 0;
        a.each(d, function(b, c) {
            e.push(a(c).height())
        }), f = Math.max.apply(null, e), this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find(".owl-video");
                    c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    e.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, e.prototype.fetch = function(a, b) {
        var c = function() {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else if (d[3].indexOf("vimeo") > -1) c = "vimeo";
        else {
            if (!(d[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            c = "vzaar"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, e.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length) return l(h.attr(i)), h.remove(), !1;
        "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type ? a.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }) : "vzaar" === c.type && a.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a.framegrab_url, l(f)
            }
        })
    }, e.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, e.prototype.play = function(b) {
        var c, d = a(b.target),
            e = d.closest("." + this._core.settings.itemClass),
            f = this._videos[e.attr("data-video")],
            g = f.width || "100%",
            h = f.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), e = this._core.items(this._core.relative(e.index())), this._core.reset(e.index()), "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'), a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")), this._playing = e.addClass("owl-video-playing"))
    }, e.prototype.isInFullScreen = function() {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass("owl-video-frame")
    }, e.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                a.namespace && (this.swapping = "translated" == a.type)
            }, this),
            "translate.owl.carousel": a.proxy(function(a) {
                a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
            animateOut: !1,
            animateIn: !1
        }, e.prototype.swap = function() {
            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this),
                    d = this.core.$stage.children().eq(this.previous),
                    e = this.core.$stage.children().eq(this.next),
                    f = this.core.settings.animateIn,
                    g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.one(a.support.animation.end, c).css({
                    left: b + "px"
                }).addClass("animated owl-animated-out").addClass(g)), f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
            }
        }, e.prototype.clear = function(b) {
            a(b.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
        }, e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
        },
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this._core = b, this._timeout = null, this._paused = !1, this._handlers = {
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                a.namespace && this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function(a) {
                a.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": a.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = a.extend({}, e.Defaults, this._core.options)
    };
    e.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, e.prototype.play = function(a, b) {
        this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    }, e.prototype._getNextTimeout = function(d, e) {
        return this._timeout && b.clearTimeout(this._timeout), b.setTimeout(a.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
        }, this), d || this._core.settings.autoplayTimeout)
    }, e.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    }, e.prototype.stop = function() {
        this._core.is("rotating") && (b.clearTimeout(this._timeout), this._core.leave("rotating"))
    }, e.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    }, e.prototype.destroy = function() {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this._core = b, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": a.proxy(function(a) {
                a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" == a.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": a.proxy(function(a) {
                a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    e.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, e.prototype.initialize = function() {
        var b, c = this._core.settings;
        this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.prev(c.navSpeed)
        }, this)), this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
            this.next(c.navSpeed)
        }, this)), c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]), this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", a.proxy(function(b) {
            var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(d, c.dotsSpeed)
        }, this));
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
    }, e.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, e.prototype.update = function() {
        var a, b, c, d = this._core.clones().length / 2,
            e = d + this._core.items().length,
            f = this._core.maximum(!0),
            g = this._core.settings,
            h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || "page" == g.slideBy)
            for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
                if (b >= h || 0 === b) {
                    if (this._pages.push({
                            start: Math.min(f, a - d),
                            end: a - d + h - 1
                        }), Math.min(f, a - d) === f) break;
                    b = 0, ++c
                }
                b += this._core.mergers(this._core.relative(a))
            }
    }, e.prototype.draw = function() {
        var b, c = this._core.settings,
            d = this._core.items().length <= c.items,
            e = this._core.relative(this._core.current()),
            f = c.loop || c.rewind;
        this._controls.$relative.toggleClass("disabled", !c.nav || d), c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !c.dots || d), c.dots && (b = this._pages.length - this._controls.$absolute.children().length, c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
    }, e.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
        }
    }, e.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, a.proxy(function(a, c) {
            return a.start <= b && a.end >= b
        }, this)).pop()
    }, e.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, e.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, e.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, e.prototype.to = function(b, c, d) {
        var e;
        !d && this._pages.length ? (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    "use strict";
    var e = function(c) {
        this._core = c, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function(c) {
                c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                if (b.namespace) {
                    var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!c) return;
                    this._hashes[c] = b.content
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(c) {
                if (c.namespace && "position" === c.property.name) {
                    var d = this._core.items(this._core.relative(this._core.current())),
                        e = a.map(this._hashes, function(a, b) {
                            return a === d ? b : null
                        }).join();
                    if (!e || b.location.hash.slice(1) === e) return;
                    b.location.hash = e
                }
            }, this)
        }, this._core.options = a.extend({}, e.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
            var c = b.location.hash.substring(1),
                e = this._core.$stage.children(),
                f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
        }, this))
    };
    e.Defaults = {
        URLhashListener: !1
    }, e.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    function e(b, c) {
        var e = !1,
            f = b.charAt(0).toUpperCase() + b.slice(1);
        return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
            if (g[b] !== d) return e = !c || b, !1
        }), e
    }

    function f(a) {
        return e(a, !0)
    }
    var g = a("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        j = {
            csstransforms: function() {
                return !!e("transform")
            },
            csstransforms3d: function() {
                return !!e("perspective")
            },
            csstransitions: function() {
                return !!e("transition")
            },
            cssanimations: function() {
                return !!e("animation")
            }
        };
    j.csstransitions() && (a.support.transition = new String(f("transition")), a.support.transition.end = i.transition.end[a.support.transition]), j.cssanimations() && (a.support.animation = new String(f("animation")), a.support.animation.end = i.animation.end[a.support.animation]), j.csstransforms() && (a.support.transform = new String(f("transform")), a.support.transform3d = j.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);

/* end owl.carosoul*/

/* for photoswipe-ui-default.min.js*/
/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
! function(a, b) {
    "function" == typeof define && define.amd ? define(b) : "object" == typeof exports ? module.exports = b() : a.PhotoSwipeUI_Default = b()
}(this, function() {
    "use strict";
    var a = function(a, b) {
        var c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v = this,
            w = !1,
            x = !0,
            y = !0,
            z = {
                barsSize: {
                    top: 44,
                    bottom: "auto"
                },
                closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
                timeToIdle: 4e3,
                timeToIdleOutside: 1e3,
                loadingIndicatorDelay: 1e3,
                addCaptionHTMLFn: function(a, b) {
                    return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1)
                },
                closeEl: !0,
                captionEl: !0,
                fullscreenEl: !0,
                zoomEl: !0,
                shareEl: !0,
                counterEl: !0,
                arrowEl: !0,
                preloaderEl: !0,
                tapToClose: !1,
                tapToToggleControls: !0,
                clickToCloseNonZoomable: !0,
                shareButtons: [{
                    id: "facebook",
                    label: "Share on Facebook",
                    url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
                }, {
                    id: "twitter",
                    label: "Tweet",
                    url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
                }, {
                    id: "pinterest",
                    label: "Pin it",
                    url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
                }, {
                    id: "download",
                    label: "Download image",
                    url: "{{raw_image_url}}",
                    download: !0
                }],
                getImageURLForShare: function() {
                    return a.currItem.src || ""
                },
                getPageURLForShare: function() {
                    return window.location.href
                },
                getTextForShare: function() {
                    return a.currItem.title || ""
                },
                indexIndicatorSep: " / ",
                fitControlsWidth: 1200
            },
            A = function(a) {
                if (r) return !0;
                a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();
                for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
                if (d) {
                    a.stopPropagation && a.stopPropagation(), r = !0;
                    var h = b.features.isOldAndroid ? 600 : 30;
                    s = setTimeout(function() {
                        r = !1
                    }, h)
                }
            },
            B = function() {
                return !a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth
            },
            C = function(a, c, d) {
                b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c)
            },
            D = function() {
                var a = 1 === q.getNumItemsFn();
                a !== p && (C(d, "ui--one-slide", a), p = a)
            },
            E = function() {
                C(i, "share-modal--hidden", y)
            },
            F = function() {
                return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function() {
                    y && E()
                }, 300)) : (E(), setTimeout(function() {
                    y || b.addClass(i, "pswp__share-modal--fade-in")
                }, 30)), y || H(), !1
            },
            G = function(b) {
                b = b || window.event;
                var c = b.target || b.srcElement;
                return a.shout("shareLinkClick", b, c), !!c.href && (!!c.hasAttribute("download") || (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1))
            },
            H = function() {
                for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
                i.children[0].innerHTML = f, i.children[0].onclick = G
            },
            I = function(a) {
                for (var c = 0; c < q.closeElClasses.length; c++)
                    if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0
            },
            J = 0,
            K = function() {
                clearTimeout(u), J = 0, k && v.setIdle(!1)
            },
            L = function(a) {
                a = a ? a : window.event;
                var b = a.relatedTarget || a.toElement;
                b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function() {
                    v.setIdle(!0)
                }, q.timeToIdleOutside))
            },
            M = function() {
                q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(a.template, "pswp--supports-fs")) : b.removeClass(a.template, "pswp--supports-fs"))
            },
            N = function() {
                q.preloaderEl && (O(!0), l("beforeChange", function() {
                    clearTimeout(o), o = setTimeout(function() {
                        a.currItem && a.currItem.loading ? (!a.allowProgressiveImg() || a.currItem.img && !a.currItem.img.naturalWidth) && O(!1) : O(!0)
                    }, q.loadingIndicatorDelay)
                }), l("imageLoadComplete", function(b, c) {
                    a.currItem === c && O(!0)
                }))
            },
            O = function(a) {
                n !== a && (C(m, "preloader--active", !a), n = a)
            },
            P = function(a) {
                var c = a.vGap;
                if (B()) {
                    var g = q.barsSize;
                    if (q.captionEl && "auto" === g.bottom)
                        if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
                            var h = f.clientHeight;
                            c.bottom = parseInt(h, 10) || 44
                        } else c.bottom = g.top;
                    else c.bottom = "auto" === g.bottom ? 0 : g.bottom;
                    c.top = g.top
                } else c.top = c.bottom = 0
            },
            Q = function() {
                q.timeToIdle && l("mouseUsed", function() {
                    b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function() {
                        J++, 2 === J && v.setIdle(!0)
                    }, q.timeToIdle / 2)
                })
            },
            R = function() {
                l("onVerticalDrag", function(a) {
                    x && a < .95 ? v.hideControls() : !x && a >= .95 && v.showControls()
                });
                var a;
                l("onPinchClose", function(b) {
                    x && b < .9 ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls()
                }), l("zoomGestureEnded", function() {
                    a = !1, a && !x && v.showControls()
                })
            },
            S = [{
                name: "caption",
                option: "captionEl",
                onInit: function(a) {
                    e = a
                }
            }, {
                name: "share-modal",
                option: "shareEl",
                onInit: function(a) {
                    i = a
                },
                onTap: function() {
                    F()
                }
            }, {
                name: "button--share",
                option: "shareEl",
                onInit: function(a) {
                    h = a
                },
                onTap: function() {
                    F()
                }
            }, {
                name: "button--zoom",
                option: "zoomEl",
                onTap: a.toggleDesktopZoom
            }, {
                name: "counter",
                option: "counterEl",
                onInit: function(a) {
                    g = a
                }
            }, {
                name: "button--close",
                option: "closeEl",
                onTap: a.close
            }, {
                name: "button--arrow--left",
                option: "arrowEl",
                onTap: a.prev
            }, {
                name: "button--arrow--right",
                option: "arrowEl",
                onTap: a.next
            }, {
                name: "button--fs",
                option: "fullscreenEl",
                onTap: function() {
                    c.isFullscreen() ? c.exit() : c.enter()
                }
            }, {
                name: "preloader",
                option: "preloaderEl",
                onInit: function(a) {
                    m = a
                }
            }],
            T = function() {
                var a, c, e, f = function(d) {
                    if (d)
                        for (var f = d.length, g = 0; g < f; g++) {
                            a = d[g], c = a.className;
                            for (var h = 0; h < S.length; h++) e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"))
                        }
                };
                f(d.children);
                var g = b.getChildByClass(d, "pswp__top-bar");
                g && f(g.children)
            };
        v.init = function() {
            b.extend(a.options, z, !0), q = a.options, d = b.getChildByClass(a.scrollWrap, "pswp__ui"), l = a.listen, R(), l("beforeChange", v.update), l("doubleTap", function(b) {
                var c = a.currItem.initialZoomLevel;
                a.getZoomLevel() !== c ? a.zoomTo(c, b, 333) : a.zoomTo(q.getDoubleTapZoom(!1, a.currItem), b, 333)
            }), l("preventDragEvent", function(a, b, c) {
                var d = a.target || a.srcElement;
                d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1)
            }), l("bindEvents", function() {
                b.bind(d, "pswpTap click", A), b.bind(a.scrollWrap, "pswpTap", v.onGlobalTap), a.likelyTouchDevice || b.bind(a.scrollWrap, "mouseover", v.onMouseOver)
            }), l("unbindEvents", function() {
                y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null)
            }), l("destroy", function() {
                q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1)
            }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function() {
                q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden")
            }), l("initialZoomOut", function() {
                b.addClass(d, "pswp__ui--hidden")
            }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N()
        }, v.setIdle = function(a) {
            k = a, C(d, "ui--idle", a)
        }, v.update = function() {
            x && a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(a.currItem, e), C(e, "caption--empty", !a.currItem.title)), w = !0) : w = !1, y || F(), D()
        }, v.updateFullscreen = function(d) {
            d && setTimeout(function() {
                a.setScrollOffset(0, b.getScrollY())
            }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](a.template, "pswp--fs")
        }, v.updateIndexIndicator = function() {
            q.counterEl && (g.innerHTML = a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn())
        }, v.onGlobalTap = function(c) {
            c = c || window.event;
            var d = c.target || c.srcElement;
            if (!r)
                if (c.detail && "mouse" === c.detail.pointerType) {
                    if (I(d)) return void a.close();
                    b.hasClass(d, "pswp__img") && (1 === a.getZoomLevel() && a.getZoomLevel() <= a.currItem.fitRatio ? q.clickToCloseNonZoomable && a.close() : a.toggleDesktopZoom(c.detail.releasePoint))
                } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void a.close()
        }, v.onMouseOver = function(a) {
            a = a || window.event;
            var b = a.target || a.srcElement;
            C(d, "ui--over-close", I(b))
        }, v.hideControls = function() {
            b.addClass(d, "pswp__ui--hidden"), x = !1
        }, v.showControls = function() {
            x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden")
        }, v.supportsFullscreen = function() {
            var a = document;
            return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen)
        }, v.getFullscreenAPI = function() {
            var b, c = document.documentElement,
                d = "fullscreenchange";
            return c.requestFullscreen ? b = {
                enterK: "requestFullscreen",
                exitK: "exitFullscreen",
                elementK: "fullscreenElement",
                eventK: d
            } : c.mozRequestFullScreen ? b = {
                enterK: "mozRequestFullScreen",
                exitK: "mozCancelFullScreen",
                elementK: "mozFullScreenElement",
                eventK: "moz" + d
            } : c.webkitRequestFullscreen ? b = {
                enterK: "webkitRequestFullscreen",
                exitK: "webkitExitFullscreen",
                elementK: "webkitFullscreenElement",
                eventK: "webkit" + d
            } : c.msRequestFullscreen && (b = {
                enterK: "msRequestFullscreen",
                exitK: "msExitFullscreen",
                elementK: "msFullscreenElement",
                eventK: "MSFullscreenChange"
            }), b && (b.enter = function() {
                return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? a.template[this.enterK]() : void a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
            }, b.exit = function() {
                return q.closeOnScroll = j, document[this.exitK]()
            }, b.isFullscreen = function() {
                return document[this.elementK]
            }), b
        }
    };
    return a
});
/* end photoswipe-ui-default*/

/* for photoswipe.js*/
/*! PhotoSwipe - v4.1.2 - 2017-04-05
 * http://photoswipe.com
 * Copyright (c) 2017 Dmitry Semenov; */
(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.PhotoSwipe = factory();
    }
})(this, function() {

    'use strict';
    var PhotoSwipe = function(template, UiClass, items, options) {

        /*>>framework-bridge*/
        /**
         *
         * Set of generic functions used by gallery.
         * 
         * You're free to modify anything here as long as functionality is kept.
         * 
         */
        var framework = {
            features: null,
            bind: function(target, type, listener, unbind) {
                var methodName = (unbind ? 'remove' : 'add') + 'EventListener';
                type = type.split(' ');
                for (var i = 0; i < type.length; i++) {
                    if (type[i]) {
                        target[methodName](type[i], listener, false);
                    }
                }
            },
            isArray: function(obj) {
                return (obj instanceof Array);
            },
            createEl: function(classes, tag) {
                var el = document.createElement(tag || 'div');
                if (classes) {
                    el.className = classes;
                }
                return el;
            },
            getScrollY: function() {
                var yOffset = window.pageYOffset;
                return yOffset !== undefined ? yOffset : document.documentElement.scrollTop;
            },
            unbind: function(target, type, listener) {
                framework.bind(target, type, listener, true);
            },
            removeClass: function(el, className) {
                var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
                el.className = el.className.replace(reg, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
            },
            addClass: function(el, className) {
                if (!framework.hasClass(el, className)) {
                    el.className += (el.className ? ' ' : '') + className;
                }
            },
            hasClass: function(el, className) {
                return el.className && new RegExp('(^|\\s)' + className + '(\\s|$)').test(el.className);
            },
            getChildByClass: function(parentEl, childClassName) {
                var node = parentEl.firstChild;
                while (node) {
                    if (framework.hasClass(node, childClassName)) {
                        return node;
                    }
                    node = node.nextSibling;
                }
            },
            arraySearch: function(array, value, key) {
                var i = array.length;
                while (i--) {
                    if (array[i][key] === value) {
                        return i;
                    }
                }
                return -1;
            },
            extend: function(o1, o2, preventOverwrite) {
                for (var prop in o2) {
                    if (o2.hasOwnProperty(prop)) {
                        if (preventOverwrite && o1.hasOwnProperty(prop)) {
                            continue;
                        }
                        o1[prop] = o2[prop];
                    }
                }
            },
            easing: {
                sine: {
                    out: function(k) {
                        return Math.sin(k * (Math.PI / 2));
                    },
                    inOut: function(k) {
                        return -(Math.cos(Math.PI * k) - 1) / 2;
                    }
                },
                cubic: {
                    out: function(k) {
                        return --k * k * k + 1;
                    }
                }
                /*
                	elastic: {
                		out: function ( k ) {

                			var s, a = 0.1, p = 0.4;
                			if ( k === 0 ) return 0;
                			if ( k === 1 ) return 1;
                			if ( !a || a < 1 ) { a = 1; s = p / 4; }
                			else s = p * Math.asin( 1 / a ) / ( 2 * Math.PI );
                			return ( a * Math.pow( 2, - 10 * k) * Math.sin( ( k - s ) * ( 2 * Math.PI ) / p ) + 1 );

                		},
                	},
                	back: {
                		out: function ( k ) {
                			var s = 1.70158;
                			return --k * k * ( ( s + 1 ) * k + s ) + 1;
                		}
                	}
                */
            },

            /**
             * 
             * @return {object}
             * 
             * {
             *  raf : request animation frame function
             *  caf : cancel animation frame function
             *  transfrom : transform property key (with vendor), or null if not supported
             *  oldIE : IE8 or below
             * }
             * 
             */
            detectFeatures: function() {
                if (framework.features) {
                    return framework.features;
                }
                var helperEl = framework.createEl(),
                    helperStyle = helperEl.style,
                    vendor = '',
                    features = {};

                // IE8 and below
                features.oldIE = document.all && !document.addEventListener;

                features.touch = 'ontouchstart' in window;

                if (window.requestAnimationFrame) {
                    features.raf = window.requestAnimationFrame;
                    features.caf = window.cancelAnimationFrame;
                }

                features.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled;

                // fix false-positive detection of old Android in new IE
                // (IE11 ua string contains "Android 4.0")

                if (!features.pointerEvent) {

                    var ua = navigator.userAgent;

                    // Detect if device is iPhone or iPod and if it's older than iOS 8
                    // http://stackoverflow.com/a/14223920
                    // 
                    // This detection is made because of buggy top/bottom toolbars
                    // that don't trigger window.resize event.
                    // For more info refer to _isFixedPosition variable in core.js

                    if (/iP(hone|od)/.test(navigator.platform)) {
                        var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                        if (v && v.length > 0) {
                            v = parseInt(v[1], 10);
                            if (v >= 1 && v < 8) {
                                features.isOldIOSPhone = true;
                            }
                        }
                    }

                    // Detect old Android (before KitKat)
                    // due to bugs related to position:fixed
                    // http://stackoverflow.com/questions/7184573/pick-up-the-android-version-in-the-browser-by-javascript

                    var match = ua.match(/Android\s([0-9\.]*)/);
                    var androidversion = match ? match[1] : 0;
                    androidversion = parseFloat(androidversion);
                    if (androidversion >= 1) {
                        if (androidversion < 4.4) {
                            features.isOldAndroid = true; // for fixed position bug & performance
                        }
                        features.androidVersion = androidversion; // for touchend bug
                    }
                    features.isMobileOpera = /opera mini|opera mobi/i.test(ua);

                    // p.s. yes, yes, UA sniffing is bad, propose your solution for above bugs.
                }

                var styleChecks = ['transform', 'perspective', 'animationName'],
                    vendors = ['', 'webkit', 'Moz', 'ms', 'O'],
                    styleCheckItem,
                    styleName;

                for (var i = 0; i < 4; i++) {
                    vendor = vendors[i];

                    for (var a = 0; a < 3; a++) {
                        styleCheckItem = styleChecks[a];

                        // uppercase first letter of property name, if vendor is present
                        styleName = vendor + (vendor ?
                            styleCheckItem.charAt(0).toUpperCase() + styleCheckItem.slice(1) :
                            styleCheckItem);

                        if (!features[styleCheckItem] && styleName in helperStyle) {
                            features[styleCheckItem] = styleName;
                        }
                    }

                    if (vendor && !features.raf) {
                        vendor = vendor.toLowerCase();
                        features.raf = window[vendor + 'RequestAnimationFrame'];
                        if (features.raf) {
                            features.caf = window[vendor + 'CancelAnimationFrame'] ||
                                window[vendor + 'CancelRequestAnimationFrame'];
                        }
                    }
                }

                if (!features.raf) {
                    var lastTime = 0;
                    features.raf = function(fn) {
                        var currTime = new Date().getTime();
                        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                        var id = window.setTimeout(function() {
                            fn(currTime + timeToCall);
                        }, timeToCall);
                        lastTime = currTime + timeToCall;
                        return id;
                    };
                    features.caf = function(id) {
                        clearTimeout(id);
                    };
                }

                // Detect SVG support
                features.svg = !!document.createElementNS &&
                    !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect;

                framework.features = features;

                return features;
            }
        };

        framework.detectFeatures();

        // Override addEventListener for old versions of IE
        if (framework.features.oldIE) {

            framework.bind = function(target, type, listener, unbind) {

                type = type.split(' ');

                var methodName = (unbind ? 'detach' : 'attach') + 'Event',
                    evName,
                    _handleEv = function() {
                        listener.handleEvent.call(listener);
                    };

                for (var i = 0; i < type.length; i++) {
                    evName = type[i];
                    if (evName) {

                        if (typeof listener === 'object' && listener.handleEvent) {
                            if (!unbind) {
                                listener['oldIE' + evName] = _handleEv;
                            } else {
                                if (!listener['oldIE' + evName]) {
                                    return false;
                                }
                            }

                            target[methodName]('on' + evName, listener['oldIE' + evName]);
                        } else {
                            target[methodName]('on' + evName, listener);
                        }

                    }
                }
            };

        }

        /*>>framework-bridge*/

        /*>>core*/
        //function(template, UiClass, items, options)

        var self = this;

        /**
         * Static vars, don't change unless you know what you're doing.
         */
        var DOUBLE_TAP_RADIUS = 25,
            NUM_HOLDERS = 3;

        /**
         * Options
         */
        var _options = {
            allowPanToNext: true,
            spacing: 0.12,
            bgOpacity: 1,
            mouseUsed: false,
            loop: true,
            pinchToClose: true,
            closeOnScroll: true,
            closeOnVerticalDrag: true,
            verticalDragRange: 0.75,
            hideAnimationDuration: 333,
            showAnimationDuration: 333,
            showHideOpacity: false,
            focus: true,
            escKey: true,
            arrowKeys: true,
            mainScrollEndFriction: 0.35,
            panEndFriction: 0.35,
            isClickableElement: function(el) {
                return el.tagName === 'A';
            },
            getDoubleTapZoom: function(isMouseClick, item) {
                if (isMouseClick) {
                    return 1;
                } else {
                    return item.initialZoomLevel < 0.7 ? 1 : 1.33;
                }
            },
            maxSpreadZoom: 1.33,
            modal: true,

            // not fully implemented yet
            scaleMode: 'fit' // TODO
        };
        framework.extend(_options, options);


        /**
         * Private helper variables & functions
         */

        var _getEmptyPoint = function() {
            return {
                x: 0,
                y: 0
            };
        };

        var _isOpen,
            _isDestroying,
            _closedByScroll,
            _currentItemIndex,
            _containerStyle,
            _containerShiftIndex,
            _currPanDist = _getEmptyPoint(),
            _startPanOffset = _getEmptyPoint(),
            _panOffset = _getEmptyPoint(),
            _upMoveEvents, // drag move, drag end & drag cancel events array
            _downEvents, // drag start events array
            _globalEventHandlers,
            _viewportSize = {},
            _currZoomLevel,
            _startZoomLevel,
            _translatePrefix,
            _translateSufix,
            _updateSizeInterval,
            _itemsNeedUpdate,
            _currPositionIndex = 0,
            _offset = {},
            _slideSize = _getEmptyPoint(), // size of slide area, including spacing
            _itemHolders,
            _prevItemIndex,
            _indexDiff = 0, // difference of indexes since last content update
            _dragStartEvent,
            _dragMoveEvent,
            _dragEndEvent,
            _dragCancelEvent,
            _transformKey,
            _pointerEventEnabled,
            _isFixedPosition = true,
            _likelyTouchDevice,
            _modules = [],
            _requestAF,
            _cancelAF,
            _initalClassName,
            _initalWindowScrollY,
            _oldIE,
            _currentWindowScrollY,
            _features,
            _windowVisibleSize = {},
            _renderMaxResolution = false,
            _orientationChangeTimeout,


            // Registers PhotoSWipe module (History, Controller ...)
            _registerModule = function(name, module) {
                framework.extend(self, module.publicMethods);
                _modules.push(name);
            },

            _getLoopedId = function(index) {
                var numSlides = _getNumItems();
                if (index > numSlides - 1) {
                    return index - numSlides;
                } else if (index < 0) {
                    return numSlides + index;
                }
                return index;
            },

            // Micro bind/trigger
            _listeners = {},
            _listen = function(name, fn) {
                if (!_listeners[name]) {
                    _listeners[name] = [];
                }
                return _listeners[name].push(fn);
            },
            _shout = function(name) {
                var listeners = _listeners[name];

                if (listeners) {
                    var args = Array.prototype.slice.call(arguments);
                    args.shift();

                    for (var i = 0; i < listeners.length; i++) {
                        listeners[i].apply(self, args);
                    }
                }
            },

            _getCurrentTime = function() {
                return new Date().getTime();
            },
            _applyBgOpacity = function(opacity) {
                _bgOpacity = opacity;
                self.bg.style.opacity = opacity * _options.bgOpacity;
            },

            _applyZoomTransform = function(styleObj, x, y, zoom, item) {
                if (!_renderMaxResolution || (item && item !== self.currItem)) {
                    zoom = zoom / (item ? item.fitRatio : self.currItem.fitRatio);
                }

                styleObj[_transformKey] = _translatePrefix + x + 'px, ' + y + 'px' + _translateSufix + ' scale(' + zoom + ')';
            },
            _applyCurrentZoomPan = function(allowRenderResolution) {
                if (_currZoomElementStyle) {

                    if (allowRenderResolution) {
                        if (_currZoomLevel > self.currItem.fitRatio) {
                            if (!_renderMaxResolution) {
                                _setImageSize(self.currItem, false, true);
                                _renderMaxResolution = true;
                            }
                        } else {
                            if (_renderMaxResolution) {
                                _setImageSize(self.currItem);
                                _renderMaxResolution = false;
                            }
                        }
                    }


                    _applyZoomTransform(_currZoomElementStyle, _panOffset.x, _panOffset.y, _currZoomLevel);
                }
            },
            _applyZoomPanToItem = function(item) {
                if (item.container) {

                    _applyZoomTransform(item.container.style,
                        item.initialPosition.x,
                        item.initialPosition.y,
                        item.initialZoomLevel,
                        item);
                }
            },
            _setTranslateX = function(x, elStyle) {
                elStyle[_transformKey] = _translatePrefix + x + 'px, 0px' + _translateSufix;
            },
            _moveMainScroll = function(x, dragging) {

                if (!_options.loop && dragging) {
                    var newSlideIndexOffset = _currentItemIndex + (_slideSize.x * _currPositionIndex - x) / _slideSize.x,
                        delta = Math.round(x - _mainScrollPos.x);

                    if ((newSlideIndexOffset < 0 && delta > 0) ||
                        (newSlideIndexOffset >= _getNumItems() - 1 && delta < 0)) {
                        x = _mainScrollPos.x + delta * _options.mainScrollEndFriction;
                    }
                }

                _mainScrollPos.x = x;
                _setTranslateX(x, _containerStyle);
            },
            _calculatePanOffset = function(axis, zoomLevel) {
                var m = _midZoomPoint[axis] - _offset[axis];
                return _startPanOffset[axis] + _currPanDist[axis] + m - m * (zoomLevel / _startZoomLevel);
            },

            _equalizePoints = function(p1, p2) {
                p1.x = p2.x;
                p1.y = p2.y;
                if (p2.id) {
                    p1.id = p2.id;
                }
            },
            _roundPoint = function(p) {
                p.x = Math.round(p.x);
                p.y = Math.round(p.y);
            },

            _mouseMoveTimeout = null,
            _onFirstMouseMove = function() {
                // Wait until mouse move event is fired at least twice during 100ms
                // We do this, because some mobile browsers trigger it on touchstart
                if (_mouseMoveTimeout) {
                    framework.unbind(document, 'mousemove', _onFirstMouseMove);
                    framework.addClass(template, 'pswp--has_mouse');
                    _options.mouseUsed = true;
                    _shout('mouseUsed');
                }
                _mouseMoveTimeout = setTimeout(function() {
                    _mouseMoveTimeout = null;
                }, 100);
            },

            _bindEvents = function() {
                framework.bind(document, 'keydown', self);

                if (_features.transform) {
                    // don't bind click event in browsers that don't support transform (mostly IE8)
                    framework.bind(self.scrollWrap, 'click', self);
                }


                if (!_options.mouseUsed) {
                    framework.bind(document, 'mousemove', _onFirstMouseMove);
                }

                framework.bind(window, 'resize scroll orientationchange', self);

                _shout('bindEvents');
            },

            _unbindEvents = function() {
                framework.unbind(window, 'resize scroll orientationchange', self);
                framework.unbind(window, 'scroll', _globalEventHandlers.scroll);
                framework.unbind(document, 'keydown', self);
                framework.unbind(document, 'mousemove', _onFirstMouseMove);

                if (_features.transform) {
                    framework.unbind(self.scrollWrap, 'click', self);
                }

                if (_isDragging) {
                    framework.unbind(window, _upMoveEvents, self);
                }

                clearTimeout(_orientationChangeTimeout);

                _shout('unbindEvents');
            },

            _calculatePanBounds = function(zoomLevel, update) {
                var bounds = _calculateItemSize(self.currItem, _viewportSize, zoomLevel);
                if (update) {
                    _currPanBounds = bounds;
                }
                return bounds;
            },

            _getMinZoomLevel = function(item) {
                if (!item) {
                    item = self.currItem;
                }
                return item.initialZoomLevel;
            },
            _getMaxZoomLevel = function(item) {
                if (!item) {
                    item = self.currItem;
                }
                return item.w > 0 ? _options.maxSpreadZoom : 1;
            },

            // Return true if offset is out of the bounds
            _modifyDestPanOffset = function(axis, destPanBounds, destPanOffset, destZoomLevel) {
                if (destZoomLevel === self.currItem.initialZoomLevel) {
                    destPanOffset[axis] = self.currItem.initialPosition[axis];
                    return true;
                } else {
                    destPanOffset[axis] = _calculatePanOffset(axis, destZoomLevel);

                    if (destPanOffset[axis] > destPanBounds.min[axis]) {
                        destPanOffset[axis] = destPanBounds.min[axis];
                        return true;
                    } else if (destPanOffset[axis] < destPanBounds.max[axis]) {
                        destPanOffset[axis] = destPanBounds.max[axis];
                        return true;
                    }
                }
                return false;
            },

            _setupTransforms = function() {

                if (_transformKey) {
                    // setup 3d transforms
                    var allow3dTransform = _features.perspective && !_likelyTouchDevice;
                    _translatePrefix = 'translate' + (allow3dTransform ? '3d(' : '(');
                    _translateSufix = _features.perspective ? ', 0px)' : ')';
                    return;
                }

                // Override zoom/pan/move functions in case old browser is used (most likely IE)
                // (so they use left/top/width/height, instead of CSS transform)

                _transformKey = 'left';
                framework.addClass(template, 'pswp--ie');

                _setTranslateX = function(x, elStyle) {
                    elStyle.left = x + 'px';
                };
                _applyZoomPanToItem = function(item) {

                    var zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                        s = item.container.style,
                        w = zoomRatio * item.w,
                        h = zoomRatio * item.h;

                    s.width = w + 'px';
                    s.height = h + 'px';
                    s.left = item.initialPosition.x + 'px';
                    s.top = item.initialPosition.y + 'px';

                };
                _applyCurrentZoomPan = function() {
                    if (_currZoomElementStyle) {

                        var s = _currZoomElementStyle,
                            item = self.currItem,
                            zoomRatio = item.fitRatio > 1 ? 1 : item.fitRatio,
                            w = zoomRatio * item.w,
                            h = zoomRatio * item.h;

                        s.width = w + 'px';
                        s.height = h + 'px';


                        s.left = _panOffset.x + 'px';
                        s.top = _panOffset.y + 'px';
                    }

                };
            },

            _onKeyDown = function(e) {
                var keydownAction = '';
                if (_options.escKey && e.keyCode === 27) {
                    keydownAction = 'close';
                } else if (_options.arrowKeys) {
                    if (e.keyCode === 37) {
                        keydownAction = 'prev';
                    } else if (e.keyCode === 39) {
                        keydownAction = 'next';
                    }
                }

                if (keydownAction) {
                    // don't do anything if special key pressed to prevent from overriding default browser actions
                    // e.g. in Chrome on Mac cmd+arrow-left returns to previous page
                    if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey) {
                        if (e.preventDefault) {
                            e.preventDefault();
                        } else {
                            e.returnValue = false;
                        }
                        self[keydownAction]();
                    }
                }
            },

            _onGlobalClick = function(e) {
                if (!e) {
                    return;
                }

                // don't allow click event to pass through when triggering after drag or some other gesture
                if (_moved || _zoomStarted || _mainScrollAnimating || _verticalDragInitiated) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            },

            _updatePageScrollOffset = function() {
                self.setScrollOffset(0, framework.getScrollY());
            };







        // Micro animation engine
        var _animations = {},
            _numAnimations = 0,
            _stopAnimation = function(name) {
                if (_animations[name]) {
                    if (_animations[name].raf) {
                        _cancelAF(_animations[name].raf);
                    }
                    _numAnimations--;
                    delete _animations[name];
                }
            },
            _registerStartAnimation = function(name) {
                if (_animations[name]) {
                    _stopAnimation(name);
                }
                if (!_animations[name]) {
                    _numAnimations++;
                    _animations[name] = {};
                }
            },
            _stopAllAnimations = function() {
                for (var prop in _animations) {

                    if (_animations.hasOwnProperty(prop)) {
                        _stopAnimation(prop);
                    }

                }
            },
            _animateProp = function(name, b, endProp, d, easingFn, onUpdate, onComplete) {
                var startAnimTime = _getCurrentTime(),
                    t;
                _registerStartAnimation(name);

                var animloop = function() {
                    if (_animations[name]) {

                        t = _getCurrentTime() - startAnimTime; // time diff
                        //b - beginning (start prop)
                        //d - anim duration

                        if (t >= d) {
                            _stopAnimation(name);
                            onUpdate(endProp);
                            if (onComplete) {
                                onComplete();
                            }
                            return;
                        }
                        onUpdate((endProp - b) * easingFn(t / d) + b);

                        _animations[name].raf = _requestAF(animloop);
                    }
                };
                animloop();
            };



        var publicMethods = {

            // make a few local variables and functions public
            shout: _shout,
            listen: _listen,
            viewportSize: _viewportSize,
            options: _options,

            isMainScrollAnimating: function() {
                return _mainScrollAnimating;
            },
            getZoomLevel: function() {
                return _currZoomLevel;
            },
            getCurrentIndex: function() {
                return _currentItemIndex;
            },
            isDragging: function() {
                return _isDragging;
            },
            isZooming: function() {
                return _isZooming;
            },
            setScrollOffset: function(x, y) {
                _offset.x = x;
                _currentWindowScrollY = _offset.y = y;
                _shout('updateScrollOffset', _offset);
            },
            applyZoomPan: function(zoomLevel, panX, panY, allowRenderResolution) {
                _panOffset.x = panX;
                _panOffset.y = panY;
                _currZoomLevel = zoomLevel;
                _applyCurrentZoomPan(allowRenderResolution);
            },

            init: function() {

                if (_isOpen || _isDestroying) {
                    return;
                }

                var i;

                self.framework = framework; // basic functionality
                self.template = template; // root DOM element of PhotoSwipe
                self.bg = framework.getChildByClass(template, 'pswp__bg');

                _initalClassName = template.className;
                _isOpen = true;

                _features = framework.detectFeatures();
                _requestAF = _features.raf;
                _cancelAF = _features.caf;
                _transformKey = _features.transform;
                _oldIE = _features.oldIE;

                self.scrollWrap = framework.getChildByClass(template, 'pswp__scroll-wrap');
                self.container = framework.getChildByClass(self.scrollWrap, 'pswp__container');

                _containerStyle = self.container.style; // for fast access

                // Objects that hold slides (there are only 3 in DOM)
                self.itemHolders = _itemHolders = [{
                        el: self.container.children[0],
                        wrap: 0,
                        index: -1
                    },
                    {
                        el: self.container.children[1],
                        wrap: 0,
                        index: -1
                    },
                    {
                        el: self.container.children[2],
                        wrap: 0,
                        index: -1
                    }
                ];

                // hide nearby item holders until initial zoom animation finishes (to avoid extra Paints)
                _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'none';

                _setupTransforms();

                // Setup global events
                _globalEventHandlers = {
                    resize: self.updateSize,

                    // Fixes: iOS 10.3 resize event
                    // does not update scrollWrap.clientWidth instantly after resize
                    // https://github.com/dimsemenov/PhotoSwipe/issues/1315
                    orientationchange: function() {
                        clearTimeout(_orientationChangeTimeout);
                        _orientationChangeTimeout = setTimeout(function() {
                            if (_viewportSize.x !== self.scrollWrap.clientWidth) {
                                self.updateSize();
                            }
                        }, 500);
                    },
                    scroll: _updatePageScrollOffset,
                    keydown: _onKeyDown,
                    click: _onGlobalClick
                };

                // disable show/hide effects on old browsers that don't support CSS animations or transforms, 
                // old IOS, Android and Opera mobile. Blackberry seems to work fine, even older models.
                var oldPhone = _features.isOldIOSPhone || _features.isOldAndroid || _features.isMobileOpera;
                if (!_features.animationName || !_features.transform || oldPhone) {
                    _options.showAnimationDuration = _options.hideAnimationDuration = 0;
                }

                // init modules
                for (i = 0; i < _modules.length; i++) {
                    self['init' + _modules[i]]();
                }

                // init
                if (UiClass) {
                    var ui = self.ui = new UiClass(self, framework);
                    ui.init();
                }

                _shout('firstUpdate');
                _currentItemIndex = _currentItemIndex || _options.index || 0;
                // validate index
                if (isNaN(_currentItemIndex) || _currentItemIndex < 0 || _currentItemIndex >= _getNumItems()) {
                    _currentItemIndex = 0;
                }
                self.currItem = _getItemAt(_currentItemIndex);


                if (_features.isOldIOSPhone || _features.isOldAndroid) {
                    _isFixedPosition = false;
                }

                template.setAttribute('aria-hidden', 'false');
                if (_options.modal) {
                    if (!_isFixedPosition) {
                        template.style.position = 'absolute';
                        template.style.top = framework.getScrollY() + 'px';
                    } else {
                        template.style.position = 'fixed';
                    }
                }

                if (_currentWindowScrollY === undefined) {
                    _shout('initialLayout');
                    _currentWindowScrollY = _initalWindowScrollY = framework.getScrollY();
                }

                // add classes to root element of PhotoSwipe
                var rootClasses = 'pswp--open ';
                if (_options.mainClass) {
                    rootClasses += _options.mainClass + ' ';
                }
                if (_options.showHideOpacity) {
                    rootClasses += 'pswp--animate_opacity ';
                }
                rootClasses += _likelyTouchDevice ? 'pswp--touch' : 'pswp--notouch';
                rootClasses += _features.animationName ? ' pswp--css_animation' : '';
                rootClasses += _features.svg ? ' pswp--svg' : '';
                framework.addClass(template, rootClasses);

                self.updateSize();

                // initial update
                _containerShiftIndex = -1;
                _indexDiff = null;
                for (i = 0; i < NUM_HOLDERS; i++) {
                    _setTranslateX((i + _containerShiftIndex) * _slideSize.x, _itemHolders[i].el.style);
                }

                if (!_oldIE) {
                    framework.bind(self.scrollWrap, _downEvents, self); // no dragging for old IE
                }

                _listen('initialZoomInEnd', function() {
                    self.setContent(_itemHolders[0], _currentItemIndex - 1);
                    self.setContent(_itemHolders[2], _currentItemIndex + 1);

                    _itemHolders[0].el.style.display = _itemHolders[2].el.style.display = 'block';

                    if (_options.focus) {
                        // focus causes layout, 
                        // which causes lag during the animation, 
                        // that's why we delay it untill the initial zoom transition ends
                        template.focus();
                    }


                    _bindEvents();
                });

                // set content for center slide (first time)
                self.setContent(_itemHolders[1], _currentItemIndex);

                self.updateCurrItem();

                _shout('afterInit');

                if (!_isFixedPosition) {

                    // On all versions of iOS lower than 8.0, we check size of viewport every second.
                    // 
                    // This is done to detect when Safari top & bottom bars appear, 
                    // as this action doesn't trigger any events (like resize). 
                    // 
                    // On iOS8 they fixed this.
                    // 
                    // 10 Nov 2014: iOS 7 usage ~40%. iOS 8 usage 56%.

                    _updateSizeInterval = setInterval(function() {
                        if (!_numAnimations && !_isDragging && !_isZooming && (_currZoomLevel === self.currItem.initialZoomLevel)) {
                            self.updateSize();
                        }
                    }, 1000);
                }

                framework.addClass(template, 'pswp--visible');
            },

            // Close the gallery, then destroy it
            close: function() {
                if (!_isOpen) {
                    return;
                }

                _isOpen = false;
                _isDestroying = true;
                _shout('close');
                _unbindEvents();

                _showOrHide(self.currItem, null, true, self.destroy);
            },

            // destroys the gallery (unbinds events, cleans up intervals and timeouts to avoid memory leaks)
            destroy: function() {
                _shout('destroy');

                if (_showOrHideTimeout) {
                    clearTimeout(_showOrHideTimeout);
                }

                template.setAttribute('aria-hidden', 'true');
                template.className = _initalClassName;

                if (_updateSizeInterval) {
                    clearInterval(_updateSizeInterval);
                }

                framework.unbind(self.scrollWrap, _downEvents, self);

                // we unbind scroll event at the end, as closing animation may depend on it
                framework.unbind(window, 'scroll', self);

                _stopDragUpdateLoop();

                _stopAllAnimations();

                _listeners = null;
            },

            /**
             * Pan image to position
             * @param {Number} x     
             * @param {Number} y     
             * @param {Boolean} force Will ignore bounds if set to true.
             */
            panTo: function(x, y, force) {
                if (!force) {
                    if (x > _currPanBounds.min.x) {
                        x = _currPanBounds.min.x;
                    } else if (x < _currPanBounds.max.x) {
                        x = _currPanBounds.max.x;
                    }

                    if (y > _currPanBounds.min.y) {
                        y = _currPanBounds.min.y;
                    } else if (y < _currPanBounds.max.y) {
                        y = _currPanBounds.max.y;
                    }
                }

                _panOffset.x = x;
                _panOffset.y = y;
                _applyCurrentZoomPan();
            },

            handleEvent: function(e) {
                e = e || window.event;
                if (_globalEventHandlers[e.type]) {
                    _globalEventHandlers[e.type](e);
                }
            },


            goTo: function(index) {

                index = _getLoopedId(index);

                var diff = index - _currentItemIndex;
                _indexDiff = diff;

                _currentItemIndex = index;
                self.currItem = _getItemAt(_currentItemIndex);
                _currPositionIndex -= diff;

                _moveMainScroll(_slideSize.x * _currPositionIndex);


                _stopAllAnimations();
                _mainScrollAnimating = false;

                self.updateCurrItem();
            },
            next: function() {
                self.goTo(_currentItemIndex + 1);
            },
            prev: function() {
                self.goTo(_currentItemIndex - 1);
            },

            // update current zoom/pan objects
            updateCurrZoomItem: function(emulateSetContent) {
                if (emulateSetContent) {
                    _shout('beforeChange', 0);
                }

                // itemHolder[1] is middle (current) item
                if (_itemHolders[1].el.children.length) {
                    var zoomElement = _itemHolders[1].el.children[0];
                    if (framework.hasClass(zoomElement, 'pswp__zoom-wrap')) {
                        _currZoomElementStyle = zoomElement.style;
                    } else {
                        _currZoomElementStyle = null;
                    }
                } else {
                    _currZoomElementStyle = null;
                }

                _currPanBounds = self.currItem.bounds;
                _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;

                _panOffset.x = _currPanBounds.center.x;
                _panOffset.y = _currPanBounds.center.y;

                if (emulateSetContent) {
                    _shout('afterChange');
                }
            },


            invalidateCurrItems: function() {
                _itemsNeedUpdate = true;
                for (var i = 0; i < NUM_HOLDERS; i++) {
                    if (_itemHolders[i].item) {
                        _itemHolders[i].item.needsUpdate = true;
                    }
                }
            },

            updateCurrItem: function(beforeAnimation) {

                if (_indexDiff === 0) {
                    return;
                }

                var diffAbs = Math.abs(_indexDiff),
                    tempHolder;

                if (beforeAnimation && diffAbs < 2) {
                    return;
                }


                self.currItem = _getItemAt(_currentItemIndex);
                _renderMaxResolution = false;

                _shout('beforeChange', _indexDiff);

                if (diffAbs >= NUM_HOLDERS) {
                    _containerShiftIndex += _indexDiff + (_indexDiff > 0 ? -NUM_HOLDERS : NUM_HOLDERS);
                    diffAbs = NUM_HOLDERS;
                }
                for (var i = 0; i < diffAbs; i++) {
                    if (_indexDiff > 0) {
                        tempHolder = _itemHolders.shift();
                        _itemHolders[NUM_HOLDERS - 1] = tempHolder; // move first to last

                        _containerShiftIndex++;
                        _setTranslateX((_containerShiftIndex + 2) * _slideSize.x, tempHolder.el.style);
                        self.setContent(tempHolder, _currentItemIndex - diffAbs + i + 1 + 1);
                    } else {
                        tempHolder = _itemHolders.pop();
                        _itemHolders.unshift(tempHolder); // move last to first

                        _containerShiftIndex--;
                        _setTranslateX(_containerShiftIndex * _slideSize.x, tempHolder.el.style);
                        self.setContent(tempHolder, _currentItemIndex + diffAbs - i - 1 - 1);
                    }

                }

                // reset zoom/pan on previous item
                if (_currZoomElementStyle && Math.abs(_indexDiff) === 1) {

                    var prevItem = _getItemAt(_prevItemIndex);
                    if (prevItem.initialZoomLevel !== _currZoomLevel) {
                        _calculateItemSize(prevItem, _viewportSize);
                        _setImageSize(prevItem);
                        _applyZoomPanToItem(prevItem);
                    }

                }

                // reset diff after update
                _indexDiff = 0;

                self.updateCurrZoomItem();

                _prevItemIndex = _currentItemIndex;

                _shout('afterChange');

            },



            updateSize: function(force) {

                if (!_isFixedPosition && _options.modal) {
                    var windowScrollY = framework.getScrollY();
                    if (_currentWindowScrollY !== windowScrollY) {
                        template.style.top = windowScrollY + 'px';
                        _currentWindowScrollY = windowScrollY;
                    }
                    if (!force && _windowVisibleSize.x === window.innerWidth && _windowVisibleSize.y === window.innerHeight) {
                        return;
                    }
                    _windowVisibleSize.x = window.innerWidth;
                    _windowVisibleSize.y = window.innerHeight;

                    //template.style.width = _windowVisibleSize.x + 'px';
                    template.style.height = _windowVisibleSize.y + 'px';
                }



                _viewportSize.x = self.scrollWrap.clientWidth;
                _viewportSize.y = self.scrollWrap.clientHeight;

                _updatePageScrollOffset();

                _slideSize.x = _viewportSize.x + Math.round(_viewportSize.x * _options.spacing);
                _slideSize.y = _viewportSize.y;

                _moveMainScroll(_slideSize.x * _currPositionIndex);

                _shout('beforeResize'); // even may be used for example to switch image sources


                // don't re-calculate size on inital size update
                if (_containerShiftIndex !== undefined) {

                    var holder,
                        item,
                        hIndex;

                    for (var i = 0; i < NUM_HOLDERS; i++) {
                        holder = _itemHolders[i];
                        _setTranslateX((i + _containerShiftIndex) * _slideSize.x, holder.el.style);

                        hIndex = _currentItemIndex + i - 1;

                        if (_options.loop && _getNumItems() > 2) {
                            hIndex = _getLoopedId(hIndex);
                        }

                        // update zoom level on items and refresh source (if needsUpdate)
                        item = _getItemAt(hIndex);

                        // re-render gallery item if `needsUpdate`,
                        // or doesn't have `bounds` (entirely new slide object)
                        if (item && (_itemsNeedUpdate || item.needsUpdate || !item.bounds)) {

                            self.cleanSlide(item);

                            self.setContent(holder, hIndex);

                            // if "center" slide
                            if (i === 1) {
                                self.currItem = item;
                                self.updateCurrZoomItem(true);
                            }

                            item.needsUpdate = false;

                        } else if (holder.index === -1 && hIndex >= 0) {
                            // add content first time
                            self.setContent(holder, hIndex);
                        }
                        if (item && item.container) {
                            _calculateItemSize(item, _viewportSize);
                            _setImageSize(item);
                            _applyZoomPanToItem(item);
                        }

                    }
                    _itemsNeedUpdate = false;
                }

                _startZoomLevel = _currZoomLevel = self.currItem.initialZoomLevel;
                _currPanBounds = self.currItem.bounds;

                if (_currPanBounds) {
                    _panOffset.x = _currPanBounds.center.x;
                    _panOffset.y = _currPanBounds.center.y;
                    _applyCurrentZoomPan(true);
                }

                _shout('resize');
            },

            // Zoom current item to
            zoomTo: function(destZoomLevel, centerPoint, speed, easingFn, updateFn) {
                /*
                	if(destZoomLevel === 'fit') {
                		destZoomLevel = self.currItem.fitRatio;
                	} else if(destZoomLevel === 'fill') {
                		destZoomLevel = self.currItem.fillRatio;
                	}
                */

                if (centerPoint) {
                    _startZoomLevel = _currZoomLevel;
                    _midZoomPoint.x = Math.abs(centerPoint.x) - _panOffset.x;
                    _midZoomPoint.y = Math.abs(centerPoint.y) - _panOffset.y;
                    _equalizePoints(_startPanOffset, _panOffset);
                }

                var destPanBounds = _calculatePanBounds(destZoomLevel, false),
                    destPanOffset = {};

                _modifyDestPanOffset('x', destPanBounds, destPanOffset, destZoomLevel);
                _modifyDestPanOffset('y', destPanBounds, destPanOffset, destZoomLevel);

                var initialZoomLevel = _currZoomLevel;
                var initialPanOffset = {
                    x: _panOffset.x,
                    y: _panOffset.y
                };

                _roundPoint(destPanOffset);

                var onUpdate = function(now) {
                    if (now === 1) {
                        _currZoomLevel = destZoomLevel;
                        _panOffset.x = destPanOffset.x;
                        _panOffset.y = destPanOffset.y;
                    } else {
                        _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                        _panOffset.x = (destPanOffset.x - initialPanOffset.x) * now + initialPanOffset.x;
                        _panOffset.y = (destPanOffset.y - initialPanOffset.y) * now + initialPanOffset.y;
                    }

                    if (updateFn) {
                        updateFn(now);
                    }

                    _applyCurrentZoomPan(now === 1);
                };

                if (speed) {
                    _animateProp('customZoomTo', 0, 1, speed, easingFn || framework.easing.sine.inOut, onUpdate);
                } else {
                    onUpdate(1);
                }
            }


        };


        /*>>core*/

        /*>>gestures*/
        /**
         * Mouse/touch/pointer event handlers.
         * 
         * separated from @core.js for readability
         */

        var MIN_SWIPE_DISTANCE = 30,
            DIRECTION_CHECK_OFFSET = 10; // amount of pixels to drag to determine direction of swipe

        var _gestureStartTime,
            _gestureCheckSpeedTime,

            // pool of objects that are used during dragging of zooming
            p = {}, // first point
            p2 = {}, // second point (for zoom gesture)
            delta = {},
            _currPoint = {},
            _startPoint = {},
            _currPointers = [],
            _startMainScrollPos = {},
            _releaseAnimData,
            _posPoints = [], // array of points during dragging, used to determine type of gesture
            _tempPoint = {},

            _isZoomingIn,
            _verticalDragInitiated,
            _oldAndroidTouchEndTimeout,
            _currZoomedItemIndex = 0,
            _centerPoint = _getEmptyPoint(),
            _lastReleaseTime = 0,
            _isDragging, // at least one pointer is down
            _isMultitouch, // at least two _pointers are down
            _zoomStarted, // zoom level changed during zoom gesture
            _moved,
            _dragAnimFrame,
            _mainScrollShifted,
            _currentPoints, // array of current touch points
            _isZooming,
            _currPointsDistance,
            _startPointsDistance,
            _currPanBounds,
            _mainScrollPos = _getEmptyPoint(),
            _currZoomElementStyle,
            _mainScrollAnimating, // true, if animation after swipe gesture is running
            _midZoomPoint = _getEmptyPoint(),
            _currCenterPoint = _getEmptyPoint(),
            _direction,
            _isFirstMove,
            _opacityChanged,
            _bgOpacity,
            _wasOverInitialZoom,

            _isEqualPoints = function(p1, p2) {
                return p1.x === p2.x && p1.y === p2.y;
            },
            _isNearbyPoints = function(touch0, touch1) {
                return Math.abs(touch0.x - touch1.x) < DOUBLE_TAP_RADIUS && Math.abs(touch0.y - touch1.y) < DOUBLE_TAP_RADIUS;
            },
            _calculatePointsDistance = function(p1, p2) {
                _tempPoint.x = Math.abs(p1.x - p2.x);
                _tempPoint.y = Math.abs(p1.y - p2.y);
                return Math.sqrt(_tempPoint.x * _tempPoint.x + _tempPoint.y * _tempPoint.y);
            },
            _stopDragUpdateLoop = function() {
                if (_dragAnimFrame) {
                    _cancelAF(_dragAnimFrame);
                    _dragAnimFrame = null;
                }
            },
            _dragUpdateLoop = function() {
                if (_isDragging) {
                    _dragAnimFrame = _requestAF(_dragUpdateLoop);
                    _renderMovement();
                }
            },
            _canPan = function() {
                return !(_options.scaleMode === 'fit' && _currZoomLevel === self.currItem.initialZoomLevel);
            },

            // find the closest parent DOM element
            _closestElement = function(el, fn) {
                if (!el || el === document) {
                    return false;
                }

                // don't search elements above pswp__scroll-wrap
                if (el.getAttribute('class') && el.getAttribute('class').indexOf('pswp__scroll-wrap') > -1) {
                    return false;
                }

                if (fn(el)) {
                    return el;
                }

                return _closestElement(el.parentNode, fn);
            },

            _preventObj = {},
            _preventDefaultEventBehaviour = function(e, isDown) {
                _preventObj.prevent = !_closestElement(e.target, _options.isClickableElement);

                _shout('preventDragEvent', e, isDown, _preventObj);
                return _preventObj.prevent;

            },
            _convertTouchToPoint = function(touch, p) {
                p.x = touch.pageX;
                p.y = touch.pageY;
                p.id = touch.identifier;
                return p;
            },
            _findCenterOfPoints = function(p1, p2, pCenter) {
                pCenter.x = (p1.x + p2.x) * 0.5;
                pCenter.y = (p1.y + p2.y) * 0.5;
            },
            _pushPosPoint = function(time, x, y) {
                if (time - _gestureCheckSpeedTime > 50) {
                    var o = _posPoints.length > 2 ? _posPoints.shift() : {};
                    o.x = x;
                    o.y = y;
                    _posPoints.push(o);
                    _gestureCheckSpeedTime = time;
                }
            },

            _calculateVerticalDragOpacityRatio = function() {
                var yOffset = _panOffset.y - self.currItem.initialPosition.y; // difference between initial and current position
                return 1 - Math.abs(yOffset / (_viewportSize.y / 2));
            },


            // points pool, reused during touch events
            _ePoint1 = {},
            _ePoint2 = {},
            _tempPointsArr = [],
            _tempCounter,
            _getTouchPoints = function(e) {
                // clean up previous points, without recreating array
                while (_tempPointsArr.length > 0) {
                    _tempPointsArr.pop();
                }

                if (!_pointerEventEnabled) {
                    if (e.type.indexOf('touch') > -1) {

                        if (e.touches && e.touches.length > 0) {
                            _tempPointsArr[0] = _convertTouchToPoint(e.touches[0], _ePoint1);
                            if (e.touches.length > 1) {
                                _tempPointsArr[1] = _convertTouchToPoint(e.touches[1], _ePoint2);
                            }
                        }

                    } else {
                        _ePoint1.x = e.pageX;
                        _ePoint1.y = e.pageY;
                        _ePoint1.id = '';
                        _tempPointsArr[0] = _ePoint1; //_ePoint1;
                    }
                } else {
                    _tempCounter = 0;
                    // we can use forEach, as pointer events are supported only in modern browsers
                    _currPointers.forEach(function(p) {
                        if (_tempCounter === 0) {
                            _tempPointsArr[0] = p;
                        } else if (_tempCounter === 1) {
                            _tempPointsArr[1] = p;
                        }
                        _tempCounter++;

                    });
                }
                return _tempPointsArr;
            },

            _panOrMoveMainScroll = function(axis, delta) {

                var panFriction,
                    overDiff = 0,
                    newOffset = _panOffset[axis] + delta[axis],
                    startOverDiff,
                    dir = delta[axis] > 0,
                    newMainScrollPosition = _mainScrollPos.x + delta.x,
                    mainScrollDiff = _mainScrollPos.x - _startMainScrollPos.x,
                    newPanPos,
                    newMainScrollPos;

                // calculate fdistance over the bounds and friction
                if (newOffset > _currPanBounds.min[axis] || newOffset < _currPanBounds.max[axis]) {
                    panFriction = _options.panEndFriction;
                    // Linear increasing of friction, so at 1/4 of viewport it's at max value. 
                    // Looks not as nice as was expected. Left for history.
                    // panFriction = (1 - (_panOffset[axis] + delta[axis] + panBounds.min[axis]) / (_viewportSize[axis] / 4) );
                } else {
                    panFriction = 1;
                }

                newOffset = _panOffset[axis] + delta[axis] * panFriction;

                // move main scroll or start panning
                if (_options.allowPanToNext || _currZoomLevel === self.currItem.initialZoomLevel) {


                    if (!_currZoomElementStyle) {

                        newMainScrollPos = newMainScrollPosition;

                    } else if (_direction === 'h' && axis === 'x' && !_zoomStarted) {

                        if (dir) {
                            if (newOffset > _currPanBounds.min[axis]) {
                                panFriction = _options.panEndFriction;
                                overDiff = _currPanBounds.min[axis] - newOffset;
                                startOverDiff = _currPanBounds.min[axis] - _startPanOffset[axis];
                            }

                            // drag right
                            if ((startOverDiff <= 0 || mainScrollDiff < 0) && _getNumItems() > 1) {
                                newMainScrollPos = newMainScrollPosition;
                                if (mainScrollDiff < 0 && newMainScrollPosition > _startMainScrollPos.x) {
                                    newMainScrollPos = _startMainScrollPos.x;
                                }
                            } else {
                                if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                                    newPanPos = newOffset;
                                }

                            }

                        } else {

                            if (newOffset < _currPanBounds.max[axis]) {
                                panFriction = _options.panEndFriction;
                                overDiff = newOffset - _currPanBounds.max[axis];
                                startOverDiff = _startPanOffset[axis] - _currPanBounds.max[axis];
                            }

                            if ((startOverDiff <= 0 || mainScrollDiff > 0) && _getNumItems() > 1) {
                                newMainScrollPos = newMainScrollPosition;

                                if (mainScrollDiff > 0 && newMainScrollPosition < _startMainScrollPos.x) {
                                    newMainScrollPos = _startMainScrollPos.x;
                                }

                            } else {
                                if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                                    newPanPos = newOffset;
                                }
                            }

                        }


                        //
                    }

                    if (axis === 'x') {

                        if (newMainScrollPos !== undefined) {
                            _moveMainScroll(newMainScrollPos, true);
                            if (newMainScrollPos === _startMainScrollPos.x) {
                                _mainScrollShifted = false;
                            } else {
                                _mainScrollShifted = true;
                            }
                        }

                        if (_currPanBounds.min.x !== _currPanBounds.max.x) {
                            if (newPanPos !== undefined) {
                                _panOffset.x = newPanPos;
                            } else if (!_mainScrollShifted) {
                                _panOffset.x += delta.x * panFriction;
                            }
                        }

                        return newMainScrollPos !== undefined;
                    }

                }

                if (!_mainScrollAnimating) {

                    if (!_mainScrollShifted) {
                        if (_currZoomLevel > self.currItem.fitRatio) {
                            _panOffset[axis] += delta[axis] * panFriction;

                        }
                    }


                }

            },

            // Pointerdown/touchstart/mousedown handler
            _onDragStart = function(e) {

                // Allow dragging only via left mouse button.
                // As this handler is not added in IE8 - we ignore e.which
                // 
                // http://www.quirksmode.org/js/events_properties.html
                // https://developer.mozilla.org/en-US/docs/Web/API/event.button
                if (e.type === 'mousedown' && e.button > 0) {
                    return;
                }

                if (_initialZoomRunning) {
                    e.preventDefault();
                    return;
                }

                if (_oldAndroidTouchEndTimeout && e.type === 'mousedown') {
                    return;
                }

                if (_preventDefaultEventBehaviour(e, true)) {
                    e.preventDefault();
                }



                _shout('pointerDown');

                if (_pointerEventEnabled) {
                    var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
                    if (pointerIndex < 0) {
                        pointerIndex = _currPointers.length;
                    }
                    _currPointers[pointerIndex] = {
                        x: e.pageX,
                        y: e.pageY,
                        id: e.pointerId
                    };
                }



                var startPointsList = _getTouchPoints(e),
                    numPoints = startPointsList.length;

                _currentPoints = null;

                _stopAllAnimations();

                // init drag
                if (!_isDragging || numPoints === 1) {



                    _isDragging = _isFirstMove = true;
                    framework.bind(window, _upMoveEvents, self);

                    _isZoomingIn =
                        _wasOverInitialZoom =
                        _opacityChanged =
                        _verticalDragInitiated =
                        _mainScrollShifted =
                        _moved =
                        _isMultitouch =
                        _zoomStarted = false;

                    _direction = null;

                    _shout('firstTouchStart', startPointsList);

                    _equalizePoints(_startPanOffset, _panOffset);

                    _currPanDist.x = _currPanDist.y = 0;
                    _equalizePoints(_currPoint, startPointsList[0]);
                    _equalizePoints(_startPoint, _currPoint);

                    //_equalizePoints(_startMainScrollPos, _mainScrollPos);
                    _startMainScrollPos.x = _slideSize.x * _currPositionIndex;

                    _posPoints = [{
                        x: _currPoint.x,
                        y: _currPoint.y
                    }];

                    _gestureCheckSpeedTime = _gestureStartTime = _getCurrentTime();

                    //_mainScrollAnimationEnd(true);
                    _calculatePanBounds(_currZoomLevel, true);

                    // Start rendering
                    _stopDragUpdateLoop();
                    _dragUpdateLoop();

                }

                // init zoom
                if (!_isZooming && numPoints > 1 && !_mainScrollAnimating && !_mainScrollShifted) {
                    _startZoomLevel = _currZoomLevel;
                    _zoomStarted = false; // true if zoom changed at least once

                    _isZooming = _isMultitouch = true;
                    _currPanDist.y = _currPanDist.x = 0;

                    _equalizePoints(_startPanOffset, _panOffset);

                    _equalizePoints(p, startPointsList[0]);
                    _equalizePoints(p2, startPointsList[1]);

                    _findCenterOfPoints(p, p2, _currCenterPoint);

                    _midZoomPoint.x = Math.abs(_currCenterPoint.x) - _panOffset.x;
                    _midZoomPoint.y = Math.abs(_currCenterPoint.y) - _panOffset.y;
                    _currPointsDistance = _startPointsDistance = _calculatePointsDistance(p, p2);
                }


            },

            // Pointermove/touchmove/mousemove handler
            _onDragMove = function(e) {

                e.preventDefault();

                if (_pointerEventEnabled) {
                    var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');
                    if (pointerIndex > -1) {
                        var p = _currPointers[pointerIndex];
                        p.x = e.pageX;
                        p.y = e.pageY;
                    }
                }

                if (_isDragging) {
                    var touchesList = _getTouchPoints(e);
                    if (!_direction && !_moved && !_isZooming) {

                        if (_mainScrollPos.x !== _slideSize.x * _currPositionIndex) {
                            // if main scroll position is shifted – direction is always horizontal
                            _direction = 'h';
                        } else {
                            var diff = Math.abs(touchesList[0].x - _currPoint.x) - Math.abs(touchesList[0].y - _currPoint.y);
                            // check the direction of movement
                            if (Math.abs(diff) >= DIRECTION_CHECK_OFFSET) {
                                _direction = diff > 0 ? 'h' : 'v';
                                _currentPoints = touchesList;
                            }
                        }

                    } else {
                        _currentPoints = touchesList;
                    }
                }
            },
            // 
            _renderMovement = function() {

                if (!_currentPoints) {
                    return;
                }

                var numPoints = _currentPoints.length;

                if (numPoints === 0) {
                    return;
                }

                _equalizePoints(p, _currentPoints[0]);

                delta.x = p.x - _currPoint.x;
                delta.y = p.y - _currPoint.y;

                if (_isZooming && numPoints > 1) {
                    // Handle behaviour for more than 1 point

                    _currPoint.x = p.x;
                    _currPoint.y = p.y;

                    // check if one of two points changed
                    if (!delta.x && !delta.y && _isEqualPoints(_currentPoints[1], p2)) {
                        return;
                    }

                    _equalizePoints(p2, _currentPoints[1]);


                    if (!_zoomStarted) {
                        _zoomStarted = true;
                        _shout('zoomGestureStarted');
                    }

                    // Distance between two points
                    var pointsDistance = _calculatePointsDistance(p, p2);

                    var zoomLevel = _calculateZoomLevel(pointsDistance);

                    // slightly over the of initial zoom level
                    if (zoomLevel > self.currItem.initialZoomLevel + self.currItem.initialZoomLevel / 15) {
                        _wasOverInitialZoom = true;
                    }

                    // Apply the friction if zoom level is out of the bounds
                    var zoomFriction = 1,
                        minZoomLevel = _getMinZoomLevel(),
                        maxZoomLevel = _getMaxZoomLevel();

                    if (zoomLevel < minZoomLevel) {

                        if (_options.pinchToClose && !_wasOverInitialZoom && _startZoomLevel <= self.currItem.initialZoomLevel) {
                            // fade out background if zooming out
                            var minusDiff = minZoomLevel - zoomLevel;
                            var percent = 1 - minusDiff / (minZoomLevel / 1.2);

                            _applyBgOpacity(percent);
                            _shout('onPinchClose', percent);
                            _opacityChanged = true;
                        } else {
                            zoomFriction = (minZoomLevel - zoomLevel) / minZoomLevel;
                            if (zoomFriction > 1) {
                                zoomFriction = 1;
                            }
                            zoomLevel = minZoomLevel - zoomFriction * (minZoomLevel / 3);
                        }

                    } else if (zoomLevel > maxZoomLevel) {
                        // 1.5 - extra zoom level above the max. E.g. if max is x6, real max 6 + 1.5 = 7.5
                        zoomFriction = (zoomLevel - maxZoomLevel) / (minZoomLevel * 6);
                        if (zoomFriction > 1) {
                            zoomFriction = 1;
                        }
                        zoomLevel = maxZoomLevel + zoomFriction * minZoomLevel;
                    }

                    if (zoomFriction < 0) {
                        zoomFriction = 0;
                    }

                    // distance between touch points after friction is applied
                    _currPointsDistance = pointsDistance;

                    // _centerPoint - The point in the middle of two pointers
                    _findCenterOfPoints(p, p2, _centerPoint);

                    // paning with two pointers pressed
                    _currPanDist.x += _centerPoint.x - _currCenterPoint.x;
                    _currPanDist.y += _centerPoint.y - _currCenterPoint.y;
                    _equalizePoints(_currCenterPoint, _centerPoint);

                    _panOffset.x = _calculatePanOffset('x', zoomLevel);
                    _panOffset.y = _calculatePanOffset('y', zoomLevel);

                    _isZoomingIn = zoomLevel > _currZoomLevel;
                    _currZoomLevel = zoomLevel;
                    _applyCurrentZoomPan();

                } else {

                    // handle behaviour for one point (dragging or panning)

                    if (!_direction) {
                        return;
                    }

                    if (_isFirstMove) {
                        _isFirstMove = false;

                        // subtract drag distance that was used during the detection direction  

                        if (Math.abs(delta.x) >= DIRECTION_CHECK_OFFSET) {
                            delta.x -= _currentPoints[0].x - _startPoint.x;
                        }

                        if (Math.abs(delta.y) >= DIRECTION_CHECK_OFFSET) {
                            delta.y -= _currentPoints[0].y - _startPoint.y;
                        }
                    }

                    _currPoint.x = p.x;
                    _currPoint.y = p.y;

                    // do nothing if pointers position hasn't changed
                    if (delta.x === 0 && delta.y === 0) {
                        return;
                    }

                    if (_direction === 'v' && _options.closeOnVerticalDrag) {
                        if (!_canPan()) {
                            _currPanDist.y += delta.y;
                            _panOffset.y += delta.y;

                            var opacityRatio = _calculateVerticalDragOpacityRatio();

                            _verticalDragInitiated = true;
                            _shout('onVerticalDrag', opacityRatio);

                            _applyBgOpacity(opacityRatio);
                            _applyCurrentZoomPan();
                            return;
                        }
                    }

                    _pushPosPoint(_getCurrentTime(), p.x, p.y);

                    _moved = true;
                    _currPanBounds = self.currItem.bounds;

                    var mainScrollChanged = _panOrMoveMainScroll('x', delta);
                    if (!mainScrollChanged) {
                        _panOrMoveMainScroll('y', delta);

                        _roundPoint(_panOffset);
                        _applyCurrentZoomPan();
                    }

                }

            },

            // Pointerup/pointercancel/touchend/touchcancel/mouseup event handler
            _onDragRelease = function(e) {

                if (_features.isOldAndroid) {

                    if (_oldAndroidTouchEndTimeout && e.type === 'mouseup') {
                        return;
                    }

                    // on Android (v4.1, 4.2, 4.3 & possibly older) 
                    // ghost mousedown/up event isn't preventable via e.preventDefault,
                    // which causes fake mousedown event
                    // so we block mousedown/up for 600ms
                    if (e.type.indexOf('touch') > -1) {
                        clearTimeout(_oldAndroidTouchEndTimeout);
                        _oldAndroidTouchEndTimeout = setTimeout(function() {
                            _oldAndroidTouchEndTimeout = 0;
                        }, 600);
                    }

                }

                _shout('pointerUp');

                if (_preventDefaultEventBehaviour(e, false)) {
                    e.preventDefault();
                }

                var releasePoint;

                if (_pointerEventEnabled) {
                    var pointerIndex = framework.arraySearch(_currPointers, e.pointerId, 'id');

                    if (pointerIndex > -1) {
                        releasePoint = _currPointers.splice(pointerIndex, 1)[0];

                        if (navigator.pointerEnabled) {
                            releasePoint.type = e.pointerType || 'mouse';
                        } else {
                            var MSPOINTER_TYPES = {
                                4: 'mouse', // event.MSPOINTER_TYPE_MOUSE
                                2: 'touch', // event.MSPOINTER_TYPE_TOUCH 
                                3: 'pen' // event.MSPOINTER_TYPE_PEN
                            };
                            releasePoint.type = MSPOINTER_TYPES[e.pointerType];

                            if (!releasePoint.type) {
                                releasePoint.type = e.pointerType || 'mouse';
                            }
                        }

                    }
                }

                var touchList = _getTouchPoints(e),
                    gestureType,
                    numPoints = touchList.length;

                if (e.type === 'mouseup') {
                    numPoints = 0;
                }

                // Do nothing if there were 3 touch points or more
                if (numPoints === 2) {
                    _currentPoints = null;
                    return true;
                }

                // if second pointer released
                if (numPoints === 1) {
                    _equalizePoints(_startPoint, touchList[0]);
                }


                // pointer hasn't moved, send "tap release" point
                if (numPoints === 0 && !_direction && !_mainScrollAnimating) {
                    if (!releasePoint) {
                        if (e.type === 'mouseup') {
                            releasePoint = {
                                x: e.pageX,
                                y: e.pageY,
                                type: 'mouse'
                            };
                        } else if (e.changedTouches && e.changedTouches[0]) {
                            releasePoint = {
                                x: e.changedTouches[0].pageX,
                                y: e.changedTouches[0].pageY,
                                type: 'touch'
                            };
                        }
                    }

                    _shout('touchRelease', e, releasePoint);
                }

                // Difference in time between releasing of two last touch points (zoom gesture)
                var releaseTimeDiff = -1;

                // Gesture completed, no pointers left
                if (numPoints === 0) {
                    _isDragging = false;
                    framework.unbind(window, _upMoveEvents, self);

                    _stopDragUpdateLoop();

                    if (_isZooming) {
                        // Two points released at the same time
                        releaseTimeDiff = 0;
                    } else if (_lastReleaseTime !== -1) {
                        releaseTimeDiff = _getCurrentTime() - _lastReleaseTime;
                    }
                }
                _lastReleaseTime = numPoints === 1 ? _getCurrentTime() : -1;

                if (releaseTimeDiff !== -1 && releaseTimeDiff < 150) {
                    gestureType = 'zoom';
                } else {
                    gestureType = 'swipe';
                }

                if (_isZooming && numPoints < 2) {
                    _isZooming = false;

                    // Only second point released
                    if (numPoints === 1) {
                        gestureType = 'zoomPointerUp';
                    }
                    _shout('zoomGestureEnded');
                }

                _currentPoints = null;
                if (!_moved && !_zoomStarted && !_mainScrollAnimating && !_verticalDragInitiated) {
                    // nothing to animate
                    return;
                }

                _stopAllAnimations();


                if (!_releaseAnimData) {
                    _releaseAnimData = _initDragReleaseAnimationData();
                }

                _releaseAnimData.calculateSwipeSpeed('x');


                if (_verticalDragInitiated) {

                    var opacityRatio = _calculateVerticalDragOpacityRatio();

                    if (opacityRatio < _options.verticalDragRange) {
                        self.close();
                    } else {
                        var initalPanY = _panOffset.y,
                            initialBgOpacity = _bgOpacity;

                        _animateProp('verticalDrag', 0, 1, 300, framework.easing.cubic.out, function(now) {

                            _panOffset.y = (self.currItem.initialPosition.y - initalPanY) * now + initalPanY;

                            _applyBgOpacity((1 - initialBgOpacity) * now + initialBgOpacity);
                            _applyCurrentZoomPan();
                        });

                        _shout('onVerticalDrag', 1);
                    }

                    return;
                }


                // main scroll 
                if ((_mainScrollShifted || _mainScrollAnimating) && numPoints === 0) {
                    var itemChanged = _finishSwipeMainScrollGesture(gestureType, _releaseAnimData);
                    if (itemChanged) {
                        return;
                    }
                    gestureType = 'zoomPointerUp';
                }

                // prevent zoom/pan animation when main scroll animation runs
                if (_mainScrollAnimating) {
                    return;
                }

                // Complete simple zoom gesture (reset zoom level if it's out of the bounds)  
                if (gestureType !== 'swipe') {
                    _completeZoomGesture();
                    return;
                }

                // Complete pan gesture if main scroll is not shifted, and it's possible to pan current image
                if (!_mainScrollShifted && _currZoomLevel > self.currItem.fitRatio) {
                    _completePanGesture(_releaseAnimData);
                }
            },


            // Returns object with data about gesture
            // It's created only once and then reused
            _initDragReleaseAnimationData = function() {
                // temp local vars
                var lastFlickDuration,
                    tempReleasePos;

                // s = this
                var s = {
                    lastFlickOffset: {},
                    lastFlickDist: {},
                    lastFlickSpeed: {},
                    slowDownRatio: {},
                    slowDownRatioReverse: {},
                    speedDecelerationRatio: {},
                    speedDecelerationRatioAbs: {},
                    distanceOffset: {},
                    backAnimDestination: {},
                    backAnimStarted: {},
                    calculateSwipeSpeed: function(axis) {


                        if (_posPoints.length > 1) {
                            lastFlickDuration = _getCurrentTime() - _gestureCheckSpeedTime + 50;
                            tempReleasePos = _posPoints[_posPoints.length - 2][axis];
                        } else {
                            lastFlickDuration = _getCurrentTime() - _gestureStartTime; // total gesture duration
                            tempReleasePos = _startPoint[axis];
                        }
                        s.lastFlickOffset[axis] = _currPoint[axis] - tempReleasePos;
                        s.lastFlickDist[axis] = Math.abs(s.lastFlickOffset[axis]);
                        if (s.lastFlickDist[axis] > 20) {
                            s.lastFlickSpeed[axis] = s.lastFlickOffset[axis] / lastFlickDuration;
                        } else {
                            s.lastFlickSpeed[axis] = 0;
                        }
                        if (Math.abs(s.lastFlickSpeed[axis]) < 0.1) {
                            s.lastFlickSpeed[axis] = 0;
                        }

                        s.slowDownRatio[axis] = 0.95;
                        s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                        s.speedDecelerationRatio[axis] = 1;
                    },

                    calculateOverBoundsAnimOffset: function(axis, speed) {
                        if (!s.backAnimStarted[axis]) {

                            if (_panOffset[axis] > _currPanBounds.min[axis]) {
                                s.backAnimDestination[axis] = _currPanBounds.min[axis];

                            } else if (_panOffset[axis] < _currPanBounds.max[axis]) {
                                s.backAnimDestination[axis] = _currPanBounds.max[axis];
                            }

                            if (s.backAnimDestination[axis] !== undefined) {
                                s.slowDownRatio[axis] = 0.7;
                                s.slowDownRatioReverse[axis] = 1 - s.slowDownRatio[axis];
                                if (s.speedDecelerationRatioAbs[axis] < 0.05) {

                                    s.lastFlickSpeed[axis] = 0;
                                    s.backAnimStarted[axis] = true;

                                    _animateProp('bounceZoomPan' + axis, _panOffset[axis],
                                        s.backAnimDestination[axis],
                                        speed || 300,
                                        framework.easing.sine.out,
                                        function(pos) {
                                            _panOffset[axis] = pos;
                                            _applyCurrentZoomPan();
                                        }
                                    );

                                }
                            }
                        }
                    },

                    // Reduces the speed by slowDownRatio (per 10ms)
                    calculateAnimOffset: function(axis) {
                        if (!s.backAnimStarted[axis]) {
                            s.speedDecelerationRatio[axis] = s.speedDecelerationRatio[axis] * (s.slowDownRatio[axis] +
                                s.slowDownRatioReverse[axis] -
                                s.slowDownRatioReverse[axis] * s.timeDiff / 10);

                            s.speedDecelerationRatioAbs[axis] = Math.abs(s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis]);
                            s.distanceOffset[axis] = s.lastFlickSpeed[axis] * s.speedDecelerationRatio[axis] * s.timeDiff;
                            _panOffset[axis] += s.distanceOffset[axis];

                        }
                    },

                    panAnimLoop: function() {
                        if (_animations.zoomPan) {
                            _animations.zoomPan.raf = _requestAF(s.panAnimLoop);

                            s.now = _getCurrentTime();
                            s.timeDiff = s.now - s.lastNow;
                            s.lastNow = s.now;

                            s.calculateAnimOffset('x');
                            s.calculateAnimOffset('y');

                            _applyCurrentZoomPan();

                            s.calculateOverBoundsAnimOffset('x');
                            s.calculateOverBoundsAnimOffset('y');


                            if (s.speedDecelerationRatioAbs.x < 0.05 && s.speedDecelerationRatioAbs.y < 0.05) {

                                // round pan position
                                _panOffset.x = Math.round(_panOffset.x);
                                _panOffset.y = Math.round(_panOffset.y);
                                _applyCurrentZoomPan();

                                _stopAnimation('zoomPan');
                                return;
                            }
                        }

                    }
                };
                return s;
            },

            _completePanGesture = function(animData) {
                // calculate swipe speed for Y axis (paanning)
                animData.calculateSwipeSpeed('y');

                _currPanBounds = self.currItem.bounds;

                animData.backAnimDestination = {};
                animData.backAnimStarted = {};

                // Avoid acceleration animation if speed is too low
                if (Math.abs(animData.lastFlickSpeed.x) <= 0.05 && Math.abs(animData.lastFlickSpeed.y) <= 0.05) {
                    animData.speedDecelerationRatioAbs.x = animData.speedDecelerationRatioAbs.y = 0;

                    // Run pan drag release animation. E.g. if you drag image and release finger without momentum.
                    animData.calculateOverBoundsAnimOffset('x');
                    animData.calculateOverBoundsAnimOffset('y');
                    return true;
                }

                // Animation loop that controls the acceleration after pan gesture ends
                _registerStartAnimation('zoomPan');
                animData.lastNow = _getCurrentTime();
                animData.panAnimLoop();
            },


            _finishSwipeMainScrollGesture = function(gestureType, _releaseAnimData) {
                var itemChanged;
                if (!_mainScrollAnimating) {
                    _currZoomedItemIndex = _currentItemIndex;
                }



                var itemsDiff;

                if (gestureType === 'swipe') {
                    var totalShiftDist = _currPoint.x - _startPoint.x,
                        isFastLastFlick = _releaseAnimData.lastFlickDist.x < 10;

                    // if container is shifted for more than MIN_SWIPE_DISTANCE, 
                    // and last flick gesture was in right direction
                    if (totalShiftDist > MIN_SWIPE_DISTANCE &&
                        (isFastLastFlick || _releaseAnimData.lastFlickOffset.x > 20)) {
                        // go to prev item
                        itemsDiff = -1;
                    } else if (totalShiftDist < -MIN_SWIPE_DISTANCE &&
                        (isFastLastFlick || _releaseAnimData.lastFlickOffset.x < -20)) {
                        // go to next item
                        itemsDiff = 1;
                    }
                }

                var nextCircle;

                if (itemsDiff) {

                    _currentItemIndex += itemsDiff;

                    if (_currentItemIndex < 0) {
                        _currentItemIndex = _options.loop ? _getNumItems() - 1 : 0;
                        nextCircle = true;
                    } else if (_currentItemIndex >= _getNumItems()) {
                        _currentItemIndex = _options.loop ? 0 : _getNumItems() - 1;
                        nextCircle = true;
                    }

                    if (!nextCircle || _options.loop) {
                        _indexDiff += itemsDiff;
                        _currPositionIndex -= itemsDiff;
                        itemChanged = true;
                    }



                }

                var animateToX = _slideSize.x * _currPositionIndex;
                var animateToDist = Math.abs(animateToX - _mainScrollPos.x);
                var finishAnimDuration;


                if (!itemChanged && animateToX > _mainScrollPos.x !== _releaseAnimData.lastFlickSpeed.x > 0) {
                    // "return to current" duration, e.g. when dragging from slide 0 to -1
                    finishAnimDuration = 333;
                } else {
                    finishAnimDuration = Math.abs(_releaseAnimData.lastFlickSpeed.x) > 0 ?
                        animateToDist / Math.abs(_releaseAnimData.lastFlickSpeed.x) :
                        333;

                    finishAnimDuration = Math.min(finishAnimDuration, 400);
                    finishAnimDuration = Math.max(finishAnimDuration, 250);
                }

                if (_currZoomedItemIndex === _currentItemIndex) {
                    itemChanged = false;
                }

                _mainScrollAnimating = true;

                _shout('mainScrollAnimStart');

                _animateProp('mainScroll', _mainScrollPos.x, animateToX, finishAnimDuration, framework.easing.cubic.out,
                    _moveMainScroll,
                    function() {
                        _stopAllAnimations();
                        _mainScrollAnimating = false;
                        _currZoomedItemIndex = -1;

                        if (itemChanged || _currZoomedItemIndex !== _currentItemIndex) {
                            self.updateCurrItem();
                        }

                        _shout('mainScrollAnimComplete');
                    }
                );

                if (itemChanged) {
                    self.updateCurrItem(true);
                }

                return itemChanged;
            },

            _calculateZoomLevel = function(touchesDistance) {
                return 1 / _startPointsDistance * touchesDistance * _startZoomLevel;
            },

            // Resets zoom if it's out of bounds
            _completeZoomGesture = function() {
                var destZoomLevel = _currZoomLevel,
                    minZoomLevel = _getMinZoomLevel(),
                    maxZoomLevel = _getMaxZoomLevel();

                if (_currZoomLevel < minZoomLevel) {
                    destZoomLevel = minZoomLevel;
                } else if (_currZoomLevel > maxZoomLevel) {
                    destZoomLevel = maxZoomLevel;
                }

                var destOpacity = 1,
                    onUpdate,
                    initialOpacity = _bgOpacity;

                if (_opacityChanged && !_isZoomingIn && !_wasOverInitialZoom && _currZoomLevel < minZoomLevel) {
                    //_closedByScroll = true;
                    self.close();
                    return true;
                }

                if (_opacityChanged) {
                    onUpdate = function(now) {
                        _applyBgOpacity((destOpacity - initialOpacity) * now + initialOpacity);
                    };
                }

                self.zoomTo(destZoomLevel, 0, 200, framework.easing.cubic.out, onUpdate);
                return true;
            };


        _registerModule('Gestures', {
            publicMethods: {

                initGestures: function() {

                    // helper function that builds touch/pointer/mouse events
                    var addEventNames = function(pref, down, move, up, cancel) {
                        _dragStartEvent = pref + down;
                        _dragMoveEvent = pref + move;
                        _dragEndEvent = pref + up;
                        if (cancel) {
                            _dragCancelEvent = pref + cancel;
                        } else {
                            _dragCancelEvent = '';
                        }
                    };

                    _pointerEventEnabled = _features.pointerEvent;
                    if (_pointerEventEnabled && _features.touch) {
                        // we don't need touch events, if browser supports pointer events
                        _features.touch = false;
                    }

                    if (_pointerEventEnabled) {
                        if (navigator.pointerEnabled) {
                            addEventNames('pointer', 'down', 'move', 'up', 'cancel');
                        } else {
                            // IE10 pointer events are case-sensitive
                            addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
                        }
                    } else if (_features.touch) {
                        addEventNames('touch', 'start', 'move', 'end', 'cancel');
                        _likelyTouchDevice = true;
                    } else {
                        addEventNames('mouse', 'down', 'move', 'up');
                    }

                    _upMoveEvents = _dragMoveEvent + ' ' + _dragEndEvent + ' ' + _dragCancelEvent;
                    _downEvents = _dragStartEvent;

                    if (_pointerEventEnabled && !_likelyTouchDevice) {
                        _likelyTouchDevice = (navigator.maxTouchPoints > 1) || (navigator.msMaxTouchPoints > 1);
                    }
                    // make variable public
                    self.likelyTouchDevice = _likelyTouchDevice;

                    _globalEventHandlers[_dragStartEvent] = _onDragStart;
                    _globalEventHandlers[_dragMoveEvent] = _onDragMove;
                    _globalEventHandlers[_dragEndEvent] = _onDragRelease; // the Kraken

                    if (_dragCancelEvent) {
                        _globalEventHandlers[_dragCancelEvent] = _globalEventHandlers[_dragEndEvent];
                    }

                    // Bind mouse events on device with detected hardware touch support, in case it supports multiple types of input.
                    if (_features.touch) {
                        _downEvents += ' mousedown';
                        _upMoveEvents += ' mousemove mouseup';
                        _globalEventHandlers.mousedown = _globalEventHandlers[_dragStartEvent];
                        _globalEventHandlers.mousemove = _globalEventHandlers[_dragMoveEvent];
                        _globalEventHandlers.mouseup = _globalEventHandlers[_dragEndEvent];
                    }

                    if (!_likelyTouchDevice) {
                        // don't allow pan to next slide from zoomed state on Desktop
                        _options.allowPanToNext = false;
                    }
                }

            }
        });


        /*>>gestures*/

        /*>>show-hide-transition*/
        /**
         * show-hide-transition.js:
         *
         * Manages initial opening or closing transition.
         *
         * If you're not planning to use transition for gallery at all,
         * you may set options hideAnimationDuration and showAnimationDuration to 0,
         * and just delete startAnimation function.
         * 
         */


        var _showOrHideTimeout,
            _showOrHide = function(item, img, out, completeFn) {

                if (_showOrHideTimeout) {
                    clearTimeout(_showOrHideTimeout);
                }

                _initialZoomRunning = true;
                _initialContentSet = true;

                // dimensions of small thumbnail {x:,y:,w:}.
                // Height is optional, as calculated based on large image.
                var thumbBounds;
                if (item.initialLayout) {
                    thumbBounds = item.initialLayout;
                    item.initialLayout = null;
                } else {
                    thumbBounds = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
                }

                var duration = out ? _options.hideAnimationDuration : _options.showAnimationDuration;

                var onComplete = function() {
                    _stopAnimation('initialZoom');
                    if (!out) {
                        _applyBgOpacity(1);
                        if (img) {
                            img.style.display = 'block';
                        }
                        framework.addClass(template, 'pswp--animated-in');
                        _shout('initialZoom' + (out ? 'OutEnd' : 'InEnd'));
                    } else {
                        self.template.removeAttribute('style');
                        self.bg.removeAttribute('style');
                    }

                    if (completeFn) {
                        completeFn();
                    }
                    _initialZoomRunning = false;
                };

                // if bounds aren't provided, just open gallery without animation
                if (!duration || !thumbBounds || thumbBounds.x === undefined) {

                    _shout('initialZoom' + (out ? 'Out' : 'In'));

                    _currZoomLevel = item.initialZoomLevel;
                    _equalizePoints(_panOffset, item.initialPosition);
                    _applyCurrentZoomPan();

                    template.style.opacity = out ? 0 : 1;
                    _applyBgOpacity(1);

                    if (duration) {
                        setTimeout(function() {
                            onComplete();
                        }, duration);
                    } else {
                        onComplete();
                    }

                    return;
                }

                var startAnimation = function() {
                    var closeWithRaf = _closedByScroll,
                        fadeEverything = !self.currItem.src || self.currItem.loadError || _options.showHideOpacity;

                    // apply hw-acceleration to image
                    if (item.miniImg) {
                        item.miniImg.style.webkitBackfaceVisibility = 'hidden';
                    }

                    if (!out) {
                        _currZoomLevel = thumbBounds.w / item.w;
                        _panOffset.x = thumbBounds.x;
                        _panOffset.y = thumbBounds.y - _initalWindowScrollY;

                        self[fadeEverything ? 'template' : 'bg'].style.opacity = 0.001;
                        _applyCurrentZoomPan();
                    }

                    _registerStartAnimation('initialZoom');

                    if (out && !closeWithRaf) {
                        framework.removeClass(template, 'pswp--animated-in');
                    }

                    if (fadeEverything) {
                        if (out) {
                            framework[(closeWithRaf ? 'remove' : 'add') + 'Class'](template, 'pswp--animate_opacity');
                        } else {
                            setTimeout(function() {
                                framework.addClass(template, 'pswp--animate_opacity');
                            }, 30);
                        }
                    }

                    _showOrHideTimeout = setTimeout(function() {

                        _shout('initialZoom' + (out ? 'Out' : 'In'));


                        if (!out) {

                            // "in" animation always uses CSS transitions (instead of rAF).
                            // CSS transition work faster here, 
                            // as developer may also want to animate other things, 
                            // like ui on top of sliding area, which can be animated just via CSS

                            _currZoomLevel = item.initialZoomLevel;
                            _equalizePoints(_panOffset, item.initialPosition);
                            _applyCurrentZoomPan();
                            _applyBgOpacity(1);

                            if (fadeEverything) {
                                template.style.opacity = 1;
                            } else {
                                _applyBgOpacity(1);
                            }

                            _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                        } else {

                            // "out" animation uses rAF only when PhotoSwipe is closed by browser scroll, to recalculate position
                            var destZoomLevel = thumbBounds.w / item.w,
                                initialPanOffset = {
                                    x: _panOffset.x,
                                    y: _panOffset.y
                                },
                                initialZoomLevel = _currZoomLevel,
                                initalBgOpacity = _bgOpacity,
                                onUpdate = function(now) {

                                    if (now === 1) {
                                        _currZoomLevel = destZoomLevel;
                                        _panOffset.x = thumbBounds.x;
                                        _panOffset.y = thumbBounds.y - _currentWindowScrollY;
                                    } else {
                                        _currZoomLevel = (destZoomLevel - initialZoomLevel) * now + initialZoomLevel;
                                        _panOffset.x = (thumbBounds.x - initialPanOffset.x) * now + initialPanOffset.x;
                                        _panOffset.y = (thumbBounds.y - _currentWindowScrollY - initialPanOffset.y) * now + initialPanOffset.y;
                                    }

                                    _applyCurrentZoomPan();
                                    if (fadeEverything) {
                                        template.style.opacity = 1 - now;
                                    } else {
                                        _applyBgOpacity(initalBgOpacity - now * initalBgOpacity);
                                    }
                                };

                            if (closeWithRaf) {
                                _animateProp('initialZoom', 0, 1, duration, framework.easing.cubic.out, onUpdate, onComplete);
                            } else {
                                onUpdate(1);
                                _showOrHideTimeout = setTimeout(onComplete, duration + 20);
                            }
                        }

                    }, out ? 25 : 90); // Main purpose of this delay is to give browser time to paint and
                    // create composite layers of PhotoSwipe UI parts (background, controls, caption, arrows).
                    // Which avoids lag at the beginning of scale transition.
                };
                startAnimation();


            };

        /*>>show-hide-transition*/

        /*>>items-controller*/
        /**
         *
         * Controller manages gallery items, their dimensions, and their content.
         * 
         */

        var _items,
            _tempPanAreaSize = {},
            _imagesToAppendPool = [],
            _initialContentSet,
            _initialZoomRunning,
            _controllerDefaultOptions = {
                index: 0,
                errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
                forceProgressiveLoading: false, // TODO
                preload: [1, 1],
                getNumItemsFn: function() {
                    return _items.length;
                }
            };


        var _getItemAt,
            _getNumItems,
            _initialIsLoop,
            _getZeroBounds = function() {
                return {
                    center: {
                        x: 0,
                        y: 0
                    },
                    max: {
                        x: 0,
                        y: 0
                    },
                    min: {
                        x: 0,
                        y: 0
                    }
                };
            },
            _calculateSingleItemPanBounds = function(item, realPanElementW, realPanElementH) {
                var bounds = item.bounds;

                // position of element when it's centered
                bounds.center.x = Math.round((_tempPanAreaSize.x - realPanElementW) / 2);
                bounds.center.y = Math.round((_tempPanAreaSize.y - realPanElementH) / 2) + item.vGap.top;

                // maximum pan position
                bounds.max.x = (realPanElementW > _tempPanAreaSize.x) ?
                    Math.round(_tempPanAreaSize.x - realPanElementW) :
                    bounds.center.x;

                bounds.max.y = (realPanElementH > _tempPanAreaSize.y) ?
                    Math.round(_tempPanAreaSize.y - realPanElementH) + item.vGap.top :
                    bounds.center.y;

                // minimum pan position
                bounds.min.x = (realPanElementW > _tempPanAreaSize.x) ? 0 : bounds.center.x;
                bounds.min.y = (realPanElementH > _tempPanAreaSize.y) ? item.vGap.top : bounds.center.y;
            },
            _calculateItemSize = function(item, viewportSize, zoomLevel) {

                if (item.src && !item.loadError) {
                    var isInitial = !zoomLevel;

                    if (isInitial) {
                        if (!item.vGap) {
                            item.vGap = {
                                top: 0,
                                bottom: 0
                            };
                        }
                        // allows overriding vertical margin for individual items
                        _shout('parseVerticalMargin', item);
                    }


                    _tempPanAreaSize.x = viewportSize.x;
                    _tempPanAreaSize.y = viewportSize.y - item.vGap.top - item.vGap.bottom;

                    if (isInitial) {
                        var hRatio = _tempPanAreaSize.x / item.w;
                        var vRatio = _tempPanAreaSize.y / item.h;

                        item.fitRatio = hRatio < vRatio ? hRatio : vRatio;
                        //item.fillRatio = hRatio > vRatio ? hRatio : vRatio;

                        var scaleMode = _options.scaleMode;

                        if (scaleMode === 'orig') {
                            zoomLevel = 1;
                        } else if (scaleMode === 'fit') {
                            zoomLevel = item.fitRatio;
                        }

                        if (zoomLevel > 1) {
                            zoomLevel = 1;
                        }

                        item.initialZoomLevel = zoomLevel;

                        if (!item.bounds) {
                            // reuse bounds object
                            item.bounds = _getZeroBounds();
                        }
                    }

                    if (!zoomLevel) {
                        return;
                    }

                    _calculateSingleItemPanBounds(item, item.w * zoomLevel, item.h * zoomLevel);

                    if (isInitial && zoomLevel === item.initialZoomLevel) {
                        item.initialPosition = item.bounds.center;
                    }

                    return item.bounds;
                } else {
                    item.w = item.h = 0;
                    item.initialZoomLevel = item.fitRatio = 1;
                    item.bounds = _getZeroBounds();
                    item.initialPosition = item.bounds.center;

                    // if it's not image, we return zero bounds (content is not zoomable)
                    return item.bounds;
                }

            },




            _appendImage = function(index, item, baseDiv, img, preventAnimation, keepPlaceholder) {


                if (item.loadError) {
                    return;
                }

                if (img) {

                    item.imageAppended = true;
                    _setImageSize(item, img, (item === self.currItem && _renderMaxResolution));

                    baseDiv.appendChild(img);

                    if (keepPlaceholder) {
                        setTimeout(function() {
                            if (item && item.loaded && item.placeholder) {
                                item.placeholder.style.display = 'none';
                                item.placeholder = null;
                            }
                        }, 500);
                    }
                }
            },



            _preloadImage = function(item) {
                item.loading = true;
                item.loaded = false;
                var img = item.img = framework.createEl('pswp__img', 'img');
                var onComplete = function() {
                    item.loading = false;
                    item.loaded = true;

                    if (item.loadComplete) {
                        item.loadComplete(item);
                    } else {
                        item.img = null; // no need to store image object
                    }
                    img.onload = img.onerror = null;
                    img = null;
                };
                img.onload = onComplete;
                img.onerror = function() {
                    item.loadError = true;
                    onComplete();
                };

                img.src = item.src; // + '?a=' + Math.random();

                return img;
            },
            _checkForError = function(item, cleanUp) {
                if (item.src && item.loadError && item.container) {

                    if (cleanUp) {
                        item.container.innerHTML = '';
                    }

                    item.container.innerHTML = _options.errorMsg.replace('%url%', item.src);
                    return true;

                }
            },
            _setImageSize = function(item, img, maxRes) {
                if (!item.src) {
                    return;
                }

                if (!img) {
                    img = item.container.lastChild;
                }

                var w = maxRes ? item.w : Math.round(item.w * item.fitRatio),
                    h = maxRes ? item.h : Math.round(item.h * item.fitRatio);

                if (item.placeholder && !item.loaded) {
                    item.placeholder.style.width = w + 'px';
                    item.placeholder.style.height = h + 'px';
                }

                img.style.width = w + 'px';
                img.style.height = h + 'px';
            },
            _appendImagesPool = function() {

                if (_imagesToAppendPool.length) {
                    var poolItem;

                    for (var i = 0; i < _imagesToAppendPool.length; i++) {
                        poolItem = _imagesToAppendPool[i];
                        if (poolItem.holder.index === poolItem.index) {
                            _appendImage(poolItem.index, poolItem.item, poolItem.baseDiv, poolItem.img, false, poolItem.clearPlaceholder);
                        }
                    }
                    _imagesToAppendPool = [];
                }
            };



        _registerModule('Controller', {

            publicMethods: {

                lazyLoadItem: function(index) {
                    index = _getLoopedId(index);
                    var item = _getItemAt(index);

                    if (!item || ((item.loaded || item.loading) && !_itemsNeedUpdate)) {
                        return;
                    }

                    _shout('gettingData', index, item);

                    if (!item.src) {
                        return;
                    }

                    _preloadImage(item);
                },
                initController: function() {
                    framework.extend(_options, _controllerDefaultOptions, true);
                    self.items = _items = items;
                    _getItemAt = self.getItemAt;
                    _getNumItems = _options.getNumItemsFn; //self.getNumItems;



                    _initialIsLoop = _options.loop;
                    if (_getNumItems() < 3) {
                        _options.loop = false; // disable loop if less then 3 items
                    }

                    _listen('beforeChange', function(diff) {

                        var p = _options.preload,
                            isNext = diff === null ? true : (diff >= 0),
                            preloadBefore = Math.min(p[0], _getNumItems()),
                            preloadAfter = Math.min(p[1], _getNumItems()),
                            i;


                        for (i = 1; i <= (isNext ? preloadAfter : preloadBefore); i++) {
                            self.lazyLoadItem(_currentItemIndex + i);
                        }
                        for (i = 1; i <= (isNext ? preloadBefore : preloadAfter); i++) {
                            self.lazyLoadItem(_currentItemIndex - i);
                        }
                    });

                    _listen('initialLayout', function() {
                        self.currItem.initialLayout = _options.getThumbBoundsFn && _options.getThumbBoundsFn(_currentItemIndex);
                    });

                    _listen('mainScrollAnimComplete', _appendImagesPool);
                    _listen('initialZoomInEnd', _appendImagesPool);



                    _listen('destroy', function() {
                        var item;
                        for (var i = 0; i < _items.length; i++) {
                            item = _items[i];
                            // remove reference to DOM elements, for GC
                            if (item.container) {
                                item.container = null;
                            }
                            if (item.placeholder) {
                                item.placeholder = null;
                            }
                            if (item.img) {
                                item.img = null;
                            }
                            if (item.preloader) {
                                item.preloader = null;
                            }
                            if (item.loadError) {
                                item.loaded = item.loadError = false;
                            }
                        }
                        _imagesToAppendPool = null;
                    });
                },


                getItemAt: function(index) {
                    if (index >= 0) {
                        return _items[index] !== undefined ? _items[index] : false;
                    }
                    return false;
                },

                allowProgressiveImg: function() {
                    // 1. Progressive image loading isn't working on webkit/blink 
                    //    when hw-acceleration (e.g. translateZ) is applied to IMG element.
                    //    That's why in PhotoSwipe parent element gets zoom transform, not image itself.
                    //    
                    // 2. Progressive image loading sometimes blinks in webkit/blink when applying animation to parent element.
                    //    That's why it's disabled on touch devices (mainly because of swipe transition)
                    //    
                    // 3. Progressive image loading sometimes doesn't work in IE (up to 11).

                    // Don't allow progressive loading on non-large touch devices
                    return _options.forceProgressiveLoading || !_likelyTouchDevice || _options.mouseUsed || screen.width > 1200;
                    // 1200 - to eliminate touch devices with large screen (like Chromebook Pixel)
                },

                setContent: function(holder, index) {

                    if (_options.loop) {
                        index = _getLoopedId(index);
                    }

                    var prevItem = self.getItemAt(holder.index);
                    if (prevItem) {
                        prevItem.container = null;
                    }

                    var item = self.getItemAt(index),
                        img;

                    if (!item) {
                        holder.el.innerHTML = '';
                        return;
                    }

                    // allow to override data
                    _shout('gettingData', index, item);

                    holder.index = index;
                    holder.item = item;

                    // base container DIV is created only once for each of 3 holders
                    var baseDiv = item.container = framework.createEl('pswp__zoom-wrap');



                    if (!item.src && item.html) {
                        if (item.html.tagName) {
                            baseDiv.appendChild(item.html);
                        } else {
                            baseDiv.innerHTML = item.html;
                        }
                    }

                    _checkForError(item);

                    _calculateItemSize(item, _viewportSize);

                    if (item.src && !item.loadError && !item.loaded) {

                        item.loadComplete = function(item) {

                            // gallery closed before image finished loading
                            if (!_isOpen) {
                                return;
                            }

                            // check if holder hasn't changed while image was loading
                            if (holder && holder.index === index) {
                                if (_checkForError(item, true)) {
                                    item.loadComplete = item.img = null;
                                    _calculateItemSize(item, _viewportSize);
                                    _applyZoomPanToItem(item);

                                    if (holder.index === _currentItemIndex) {
                                        // recalculate dimensions
                                        self.updateCurrZoomItem();
                                    }
                                    return;
                                }
                                if (!item.imageAppended) {
                                    if (_features.transform && (_mainScrollAnimating || _initialZoomRunning)) {
                                        _imagesToAppendPool.push({
                                            item: item,
                                            baseDiv: baseDiv,
                                            img: item.img,
                                            index: index,
                                            holder: holder,
                                            clearPlaceholder: true
                                        });
                                    } else {
                                        _appendImage(index, item, baseDiv, item.img, _mainScrollAnimating || _initialZoomRunning, true);
                                    }
                                } else {
                                    // remove preloader & mini-img
                                    if (!_initialZoomRunning && item.placeholder) {
                                        item.placeholder.style.display = 'none';
                                        item.placeholder = null;
                                    }
                                }
                            }

                            item.loadComplete = null;
                            item.img = null; // no need to store image element after it's added

                            _shout('imageLoadComplete', index, item);
                        };

                        if (framework.features.transform) {

                            var placeholderClassName = 'pswp__img pswp__img--placeholder';
                            placeholderClassName += (item.msrc ? '' : ' pswp__img--placeholder--blank');

                            var placeholder = framework.createEl(placeholderClassName, item.msrc ? 'img' : '');
                            if (item.msrc) {
                                placeholder.src = item.msrc;
                            }

                            _setImageSize(item, placeholder);

                            baseDiv.appendChild(placeholder);
                            item.placeholder = placeholder;

                        }




                        if (!item.loading) {
                            _preloadImage(item);
                        }


                        if (self.allowProgressiveImg()) {
                            // just append image
                            if (!_initialContentSet && _features.transform) {
                                _imagesToAppendPool.push({
                                    item: item,
                                    baseDiv: baseDiv,
                                    img: item.img,
                                    index: index,
                                    holder: holder
                                });
                            } else {
                                _appendImage(index, item, baseDiv, item.img, true, true);
                            }
                        }

                    } else if (item.src && !item.loadError) {
                        // image object is created every time, due to bugs of image loading & delay when switching images
                        img = framework.createEl('pswp__img', 'img');
                        img.style.opacity = 1;
                        img.src = item.src;
                        _setImageSize(item, img);
                        _appendImage(index, item, baseDiv, img, true);
                    }


                    if (!_initialContentSet && index === _currentItemIndex) {
                        _currZoomElementStyle = baseDiv.style;
                        _showOrHide(item, (img || item.img));
                    } else {
                        _applyZoomPanToItem(item);
                    }

                    holder.el.innerHTML = '';
                    holder.el.appendChild(baseDiv);
                },

                cleanSlide: function(item) {
                    if (item.img) {
                        item.img.onload = item.img.onerror = null;
                    }
                    item.loaded = item.loading = item.img = item.imageAppended = false;
                }

            }
        });

        /*>>items-controller*/

        /*>>tap*/
        /**
         * tap.js:
         *
         * Displatches tap and double-tap events.
         * 
         */

        var tapTimer,
            tapReleasePoint = {},
            _dispatchTapEvent = function(origEvent, releasePoint, pointerType) {
                var e = document.createEvent('CustomEvent'),
                    eDetail = {
                        origEvent: origEvent,
                        target: origEvent.target,
                        releasePoint: releasePoint,
                        pointerType: pointerType || 'touch'
                    };

                e.initCustomEvent('pswpTap', true, true, eDetail);
                origEvent.target.dispatchEvent(e);
            };

        _registerModule('Tap', {
            publicMethods: {
                initTap: function() {
                    _listen('firstTouchStart', self.onTapStart);
                    _listen('touchRelease', self.onTapRelease);
                    _listen('destroy', function() {
                        tapReleasePoint = {};
                        tapTimer = null;
                    });
                },
                onTapStart: function(touchList) {
                    if (touchList.length > 1) {
                        clearTimeout(tapTimer);
                        tapTimer = null;
                    }
                },
                onTapRelease: function(e, releasePoint) {
                    if (!releasePoint) {
                        return;
                    }

                    if (!_moved && !_isMultitouch && !_numAnimations) {
                        var p0 = releasePoint;
                        if (tapTimer) {
                            clearTimeout(tapTimer);
                            tapTimer = null;

                            // Check if taped on the same place
                            if (_isNearbyPoints(p0, tapReleasePoint)) {
                                _shout('doubleTap', p0);
                                return;
                            }
                        }

                        if (releasePoint.type === 'mouse') {
                            _dispatchTapEvent(e, releasePoint, 'mouse');
                            return;
                        }

                        var clickedTagName = e.target.tagName.toUpperCase();
                        // avoid double tap delay on buttons and elements that have class pswp__single-tap
                        if (clickedTagName === 'BUTTON' || framework.hasClass(e.target, 'pswp__single-tap')) {
                            _dispatchTapEvent(e, releasePoint);
                            return;
                        }

                        _equalizePoints(tapReleasePoint, p0);

                        tapTimer = setTimeout(function() {
                            _dispatchTapEvent(e, releasePoint);
                            tapTimer = null;
                        }, 300);
                    }
                }
            }
        });

        /*>>tap*/

        /*>>desktop-zoom*/
        /**
         *
         * desktop-zoom.js:
         *
         * - Binds mousewheel event for paning zoomed image.
         * - Manages "dragging", "zoomed-in", "zoom-out" classes.
         *   (which are used for cursors and zoom icon)
         * - Adds toggleDesktopZoom function.
         * 
         */

        var _wheelDelta;

        _registerModule('DesktopZoom', {

            publicMethods: {

                initDesktopZoom: function() {

                    if (_oldIE) {
                        // no zoom for old IE (<=8)
                        return;
                    }

                    if (_likelyTouchDevice) {
                        // if detected hardware touch support, we wait until mouse is used,
                        // and only then apply desktop-zoom features
                        _listen('mouseUsed', function() {
                            self.setupDesktopZoom();
                        });
                    } else {
                        self.setupDesktopZoom(true);
                    }

                },

                setupDesktopZoom: function(onInit) {

                    _wheelDelta = {};

                    var events = 'wheel mousewheel DOMMouseScroll';

                    _listen('bindEvents', function() {
                        framework.bind(template, events, self.handleMouseWheel);
                    });

                    _listen('unbindEvents', function() {
                        if (_wheelDelta) {
                            framework.unbind(template, events, self.handleMouseWheel);
                        }
                    });

                    self.mouseZoomedIn = false;

                    var hasDraggingClass,
                        updateZoomable = function() {
                            if (self.mouseZoomedIn) {
                                framework.removeClass(template, 'pswp--zoomed-in');
                                self.mouseZoomedIn = false;
                            }
                            if (_currZoomLevel < 1) {
                                framework.addClass(template, 'pswp--zoom-allowed');
                            } else {
                                framework.removeClass(template, 'pswp--zoom-allowed');
                            }
                            removeDraggingClass();
                        },
                        removeDraggingClass = function() {
                            if (hasDraggingClass) {
                                framework.removeClass(template, 'pswp--dragging');
                                hasDraggingClass = false;
                            }
                        };

                    _listen('resize', updateZoomable);
                    _listen('afterChange', updateZoomable);
                    _listen('pointerDown', function() {
                        if (self.mouseZoomedIn) {
                            hasDraggingClass = true;
                            framework.addClass(template, 'pswp--dragging');
                        }
                    });
                    _listen('pointerUp', removeDraggingClass);

                    if (!onInit) {
                        updateZoomable();
                    }

                },

                handleMouseWheel: function(e) {

                    if (_currZoomLevel <= self.currItem.fitRatio) {
                        if (_options.modal) {

                            if (!_options.closeOnScroll || _numAnimations || _isDragging) {
                                e.preventDefault();
                            } else if (_transformKey && Math.abs(e.deltaY) > 2) {
                                // close PhotoSwipe
                                // if browser supports transforms & scroll changed enough
                                _closedByScroll = true;
                                self.close();
                            }

                        }
                        return true;
                    }

                    // allow just one event to fire
                    e.stopPropagation();

                    // https://developer.mozilla.org/en-US/docs/Web/Events/wheel
                    _wheelDelta.x = 0;

                    if ('deltaX' in e) {
                        if (e.deltaMode === 1 /* DOM_DELTA_LINE */ ) {
                            // 18 - average line height
                            _wheelDelta.x = e.deltaX * 18;
                            _wheelDelta.y = e.deltaY * 18;
                        } else {
                            _wheelDelta.x = e.deltaX;
                            _wheelDelta.y = e.deltaY;
                        }
                    } else if ('wheelDelta' in e) {
                        if (e.wheelDeltaX) {
                            _wheelDelta.x = -0.16 * e.wheelDeltaX;
                        }
                        if (e.wheelDeltaY) {
                            _wheelDelta.y = -0.16 * e.wheelDeltaY;
                        } else {
                            _wheelDelta.y = -0.16 * e.wheelDelta;
                        }
                    } else if ('detail' in e) {
                        _wheelDelta.y = e.detail;
                    } else {
                        return;
                    }

                    _calculatePanBounds(_currZoomLevel, true);

                    var newPanX = _panOffset.x - _wheelDelta.x,
                        newPanY = _panOffset.y - _wheelDelta.y;

                    // only prevent scrolling in nonmodal mode when not at edges
                    if (_options.modal ||
                        (
                            newPanX <= _currPanBounds.min.x && newPanX >= _currPanBounds.max.x &&
                            newPanY <= _currPanBounds.min.y && newPanY >= _currPanBounds.max.y
                        )) {
                        e.preventDefault();
                    }

                    // TODO: use rAF instead of mousewheel?
                    self.panTo(newPanX, newPanY);
                },

                toggleDesktopZoom: function(centerPoint) {
                    centerPoint = centerPoint || {
                        x: _viewportSize.x / 2 + _offset.x,
                        y: _viewportSize.y / 2 + _offset.y
                    };

                    var doubleTapZoomLevel = _options.getDoubleTapZoom(true, self.currItem);
                    var zoomOut = _currZoomLevel === doubleTapZoomLevel;

                    self.mouseZoomedIn = !zoomOut;

                    self.zoomTo(zoomOut ? self.currItem.initialZoomLevel : doubleTapZoomLevel, centerPoint, 333);
                    framework[(!zoomOut ? 'add' : 'remove') + 'Class'](template, 'pswp--zoomed-in');
                }

            }
        });


        /*>>desktop-zoom*/

        /*>>history*/
        /**
         *
         * history.js:
         *
         * - Back button to close gallery.
         * 
         * - Unique URL for each slide: example.com/&pid=1&gid=3
         *   (where PID is picture index, and GID and gallery index)
         *   
         * - Switch URL when slides change.
         * 
         */


        var _historyDefaultOptions = {
            history: true,
            galleryUID: 1
        };

        var _historyUpdateTimeout,
            _hashChangeTimeout,
            _hashAnimCheckTimeout,
            _hashChangedByScript,
            _hashChangedByHistory,
            _hashReseted,
            _initialHash,
            _historyChanged,
            _closedFromURL,
            _urlChangedOnce,
            _windowLoc,

            _supportsPushState,

            _getHash = function() {
                return _windowLoc.hash.substring(1);
            },
            _cleanHistoryTimeouts = function() {

                if (_historyUpdateTimeout) {
                    clearTimeout(_historyUpdateTimeout);
                }

                if (_hashAnimCheckTimeout) {
                    clearTimeout(_hashAnimCheckTimeout);
                }
            },

            // pid - Picture index
            // gid - Gallery index
            _parseItemIndexFromURL = function() {
                var hash = _getHash(),
                    params = {};

                if (hash.length < 5) { // pid=1
                    return params;
                }

                var i, vars = hash.split('&');
                for (i = 0; i < vars.length; i++) {
                    if (!vars[i]) {
                        continue;
                    }
                    var pair = vars[i].split('=');
                    if (pair.length < 2) {
                        continue;
                    }
                    params[pair[0]] = pair[1];
                }
                if (_options.galleryPIDs) {
                    // detect custom pid in hash and search for it among the items collection
                    var searchfor = params.pid;
                    params.pid = 0; // if custom pid cannot be found, fallback to the first item
                    for (i = 0; i < _items.length; i++) {
                        if (_items[i].pid === searchfor) {
                            params.pid = i;
                            break;
                        }
                    }
                } else {
                    params.pid = parseInt(params.pid, 10) - 1;
                }
                if (params.pid < 0) {
                    params.pid = 0;
                }
                return params;
            },
            _updateHash = function() {

                if (_hashAnimCheckTimeout) {
                    clearTimeout(_hashAnimCheckTimeout);
                }


                if (_numAnimations || _isDragging) {
                    // changing browser URL forces layout/paint in some browsers, which causes noticable lag during animation
                    // that's why we update hash only when no animations running
                    _hashAnimCheckTimeout = setTimeout(_updateHash, 500);
                    return;
                }

                if (_hashChangedByScript) {
                    clearTimeout(_hashChangeTimeout);
                } else {
                    _hashChangedByScript = true;
                }


                var pid = (_currentItemIndex + 1);
                var item = _getItemAt(_currentItemIndex);
                if (item.hasOwnProperty('pid')) {
                    // carry forward any custom pid assigned to the item
                    pid = item.pid;
                }
                var newHash = _initialHash + '&' + 'gid=' + _options.galleryUID + '&' + 'pid=' + pid;

                if (!_historyChanged) {
                    if (_windowLoc.hash.indexOf(newHash) === -1) {
                        _urlChangedOnce = true;
                    }
                    // first time - add new hisory record, then just replace
                }

                var newURL = _windowLoc.href.split('#')[0] + '#' + newHash;

                if (_supportsPushState) {

                    if ('#' + newHash !== window.location.hash) {
                        history[_historyChanged ? 'replaceState' : 'pushState']('', document.title, newURL);
                    }

                } else {
                    if (_historyChanged) {
                        _windowLoc.replace(newURL);
                    } else {
                        _windowLoc.hash = newHash;
                    }
                }



                _historyChanged = true;
                _hashChangeTimeout = setTimeout(function() {
                    _hashChangedByScript = false;
                }, 60);
            };





        _registerModule('History', {



            publicMethods: {
                initHistory: function() {

                    framework.extend(_options, _historyDefaultOptions, true);

                    if (!_options.history) {
                        return;
                    }


                    _windowLoc = window.location;
                    _urlChangedOnce = false;
                    _closedFromURL = false;
                    _historyChanged = false;
                    _initialHash = _getHash();
                    _supportsPushState = ('pushState' in history);


                    if (_initialHash.indexOf('gid=') > -1) {
                        _initialHash = _initialHash.split('&gid=')[0];
                        _initialHash = _initialHash.split('?gid=')[0];
                    }


                    _listen('afterChange', self.updateURL);
                    _listen('unbindEvents', function() {
                        framework.unbind(window, 'hashchange', self.onHashChange);
                    });


                    var returnToOriginal = function() {
                        _hashReseted = true;
                        if (!_closedFromURL) {

                            if (_urlChangedOnce) {
                                history.back();
                            } else {

                                if (_initialHash) {
                                    _windowLoc.hash = _initialHash;
                                } else {
                                    if (_supportsPushState) {

                                        // remove hash from url without refreshing it or scrolling to top
                                        history.pushState('', document.title, _windowLoc.pathname + _windowLoc.search);
                                    } else {
                                        _windowLoc.hash = '';
                                    }
                                }
                            }

                        }

                        _cleanHistoryTimeouts();
                    };


                    _listen('unbindEvents', function() {
                        if (_closedByScroll) {
                            // if PhotoSwipe is closed by scroll, we go "back" before the closing animation starts
                            // this is done to keep the scroll position
                            returnToOriginal();
                        }
                    });
                    _listen('destroy', function() {
                        if (!_hashReseted) {
                            returnToOriginal();
                        }
                    });
                    _listen('firstUpdate', function() {
                        _currentItemIndex = _parseItemIndexFromURL().pid;
                    });




                    var index = _initialHash.indexOf('pid=');
                    if (index > -1) {
                        _initialHash = _initialHash.substring(0, index);
                        if (_initialHash.slice(-1) === '&') {
                            _initialHash = _initialHash.slice(0, -1);
                        }
                    }


                    setTimeout(function() {
                        if (_isOpen) { // hasn't destroyed yet
                            framework.bind(window, 'hashchange', self.onHashChange);
                        }
                    }, 40);

                },
                onHashChange: function() {

                    if (_getHash() === _initialHash) {

                        _closedFromURL = true;
                        self.close();
                        return;
                    }
                    if (!_hashChangedByScript) {

                        _hashChangedByHistory = true;
                        self.goTo(_parseItemIndexFromURL().pid);
                        _hashChangedByHistory = false;
                    }

                },
                updateURL: function() {

                    // Delay the update of URL, to avoid lag during transition, 
                    // and to not to trigger actions like "refresh page sound" or "blinking favicon" to often

                    _cleanHistoryTimeouts();


                    if (_hashChangedByHistory) {
                        return;
                    }

                    if (!_historyChanged) {
                        _updateHash(); // first time
                    } else {
                        _historyUpdateTimeout = setTimeout(_updateHash, 800);
                    }
                }

            }
        });


        /*>>history*/
        framework.extend(self, publicMethods);
    };
    return PhotoSwipe;
});
/* end photoswipe*/

/* for jquery.flex-slider.min.js*/
/*
 * jQuery FlexSlider v2.6.3
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
! function($) {
    var e = !0;
    $.flexslider = function(t, a) {
        var n = $(t);
        n.vars = $.extend({}, $.flexslider.defaults, a);
        var i = n.vars.namespace,
            s = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            r = ("ontouchstart" in window || s || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
            o = "click touchend MSPointerUp keyup",
            l = "",
            c, d = "vertical" === n.vars.direction,
            u = n.vars.reverse,
            v = n.vars.itemWidth > 0,
            p = "fade" === n.vars.animation,
            m = "" !== n.vars.asNavFor,
            f = {};
        $.data(t, "flexslider", n), f = {
            init: function() {
                n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = $(n.vars.selector, n), n.container = $(n.containerSelector, n), n.count = n.slides.length, n.syncExists = $(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function() {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var a in t)
                        if (void 0 !== e.style[t[a]]) return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
                    return !1
                }(), n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = $(n.vars.controlsContainer).length > 0 && $(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = $(n.vars.manualControls).length > 0 && $(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === $(n.vars.customDirectionNav).length && $(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function() {
                    return Math.round(Math.random()) - .5
                }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === $(n.containerSelector).length || n.vars.multipleKeyboard) && $(document).bind("keyup", function(e) {
                    var t = e.keyCode;
                    if (!n.animating && (39 === t || 37 === t)) {
                        var a = 39 === t ? n.getTarget("next") : 37 === t ? n.getTarget("prev") : !1;
                        n.flexAnimate(a, n.vars.pauseOnAction)
                    }
                }), n.vars.mousewheel && n.bind("mousewheel", function(e, t, a, i) {
                    e.preventDefault();
                    var s = 0 > t ? n.getTarget("next") : n.getTarget("prev");
                    n.flexAnimate(s, n.vars.pauseOnAction)
                }), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function() {
                    n.manualPlay || n.manualPause || n.pause()
                }, function() {
                    n.manualPause || n.manualPlay || n.stopped || n.play()
                }), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), r && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && $(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function() {
                    n.vars.start(n)
                }, 200)
            },
            asNav: {
                setup: function() {
                    n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(i + "active-slide").eq(n.currentItem).addClass(i + "active-slide"), s ? (t._slider = n, n.slides.each(function() {
                        var e = this;
                        e._gesture = new MSGesture, e._gesture.target = e, e.addEventListener("MSPointerDown", function(e) {
                            e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                        }, !1), e.addEventListener("MSGestureTap", function(e) {
                            e.preventDefault();
                            var t = $(this),
                                a = t.index();
                            $(n.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : n.slides.on(o, function(e) {
                        e.preventDefault();
                        var t = $(this),
                            a = t.index(),
                            s = t.offset().left - $(n).scrollLeft();
                        0 >= s && t.hasClass(i + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : $(n.vars.asNavFor).data("flexslider").animating || t.hasClass(i + "active-slide") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            },
            controlNav: {
                setup: function() {
                    n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging()
                },
                setupPaging: function() {
                    var e = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
                        t = 1,
                        a, s;
                    if (n.controlNavScaffold = $('<ol class="' + i + "control-nav " + i + e + '"></ol>'), n.pagingCount > 1)
                        for (var r = 0; r < n.pagingCount; r++) {
                            s = n.slides.eq(r), void 0 === s.attr("data-thumb-alt") && s.attr("data-thumb-alt", "");
                            var c = "" !== s.attr("data-thumb-alt") ? c = ' alt="' + s.attr("data-thumb-alt") + '"' : "";
                            if (a = "thumbnails" === n.vars.controlNav ? '<img src="' + s.attr("data-thumb") + '"' + c + "/>" : '<a href="#">' + t + "</a>", "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
                                var d = s.attr("data-thumbcaption");
                                "" !== d && void 0 !== d && (a += '<span class="' + i + 'caption">' + d + "</span>")
                            }
                            n.controlNavScaffold.append("<li>" + a + "</li>"), t++
                        }
                    n.controlsContainer ? $(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", o, function(e) {
                        if (e.preventDefault(), "" === l || l === e.type) {
                            var t = $(this),
                                a = n.controlNav.index(t);
                            t.hasClass(i + "active") || (n.direction = a > n.currentSlide ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction))
                        }
                        "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                },
                setupManual: function() {
                    n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(o, function(e) {
                        if (e.preventDefault(), "" === l || l === e.type) {
                            var t = $(this),
                                a = n.controlNav.index(t);
                            t.hasClass(i + "active") || (a > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(a, n.vars.pauseOnAction))
                        }
                        "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                },
                set: function() {
                    var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
                    n.controlNav = $("." + i + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n)
                },
                active: function() {
                    n.controlNav.removeClass(i + "active").eq(n.animatingTo).addClass(i + "active")
                },
                update: function(e, t) {
                    n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append($('<li><a href="#">' + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(t).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(t, e) : f.controlNav.active()
                }
            },
            directionNav: {
                setup: function() {
                    var e = $('<ul class="' + i + 'direction-nav"><li class="' + i + 'nav-prev"><a class="' + i + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + i + 'nav-next"><a class="' + i + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
                    n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? ($(n.controlsContainer).append(e), n.directionNav = $("." + i + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = $("." + i + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(o, function(e) {
                        e.preventDefault();
                        var t;
                        "" !== l && l !== e.type || (t = $(this).hasClass(i + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(t, n.vars.pauseOnAction)), "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                },
                update: function() {
                    var e = i + "disabled";
                    1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex")
                }
            },
            pausePlay: {
                setup: function() {
                    var e = $('<div class="' + i + 'pauseplay"><a href="#"></a></div>');
                    n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = $("." + i + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = $("." + i + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? i + "pause" : i + "play"), n.pausePlay.bind(o, function(e) {
                        e.preventDefault(), "" !== l && l !== e.type || ($(this).hasClass(i + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === l && (l = e.type), f.setToClearWatchedEvent()
                    })
                },
                update: function(e) {
                    "play" === e ? n.pausePlay.removeClass(i + "pause").addClass(i + "play").html(n.vars.playText) : n.pausePlay.removeClass(i + "play").addClass(i + "pause").html(n.vars.pauseText)
                }
            },
            touch: function() {
                function e(e) {
                    e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), T = 0, c = d ? n.h : n.w, f = Number(new Date), l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c)
                }

                function a(e) {
                    e.stopPropagation();
                    var a = e.target._slider;
                    if (a) {
                        var n = -e.translationX,
                            i = -e.translationY;
                        return T += d ? i : n, m = T, y = d ? Math.abs(T) < Math.abs(-n) : Math.abs(T) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function() {
                            t._gesture.stop()
                        }) : void((!y || Number(new Date) - f > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (m = T / (0 === a.currentSlide && 0 > T || a.currentSlide === a.last && T > 0 ? Math.abs(T) / c + 2 : 1)), a.setProps(l + m, "setTouch"))))
                    }
                }

                function i(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        if (t.animatingTo === t.currentSlide && !y && null !== m) {
                            var a = u ? -m : m,
                                n = a > 0 ? t.getTarget("next") : t.getTarget("prev");
                            t.canAdvance(n) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                        }
                        r = null, o = null, m = null, l = null, T = 0
                    }
                }
                var r, o, l, c, m, f, g, h, S, y = !1,
                    x = 0,
                    b = 0,
                    T = 0;
                s ? (t.style.msTouchAction = "none", t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", e, !1), t._slider = n, t.addEventListener("MSGestureChange", a, !1), t.addEventListener("MSGestureEnd", i, !1)) : (g = function(e) {
                    n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), c = d ? n.h : n.w, f = Number(new Date), x = e.touches[0].pageX, b = e.touches[0].pageY, l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c, r = d ? b : x, o = d ? x : b, t.addEventListener("touchmove", h, !1), t.addEventListener("touchend", S, !1))
                }, h = function(e) {
                    x = e.touches[0].pageX, b = e.touches[0].pageY, m = d ? r - b : r - x, y = d ? Math.abs(m) < Math.abs(x - o) : Math.abs(m) < Math.abs(b - o);
                    var t = 500;
                    (!y || Number(new Date) - f > t) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (m /= 0 === n.currentSlide && 0 > m || n.currentSlide === n.last && m > 0 ? Math.abs(m) / c + 2 : 1), n.setProps(l + m, "setTouch")))
                }, S = function(e) {
                    if (t.removeEventListener("touchmove", h, !1), n.animatingTo === n.currentSlide && !y && null !== m) {
                        var a = u ? -m : m,
                            i = a > 0 ? n.getTarget("next") : n.getTarget("prev");
                        n.canAdvance(i) && (Number(new Date) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? n.flexAnimate(i, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0)
                    }
                    t.removeEventListener("touchend", S, !1), r = null, o = null, m = null, l = null
                }, t.addEventListener("touchstart", g, !1))
            },
            resize: function() {
                !n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")))
            },
            smoothHeight: function(e) {
                if (!d || p) {
                    var t = p ? n : n.viewport;
                    e ? t.animate({
                        height: n.slides.eq(n.animatingTo).innerHeight()
                    }, e) : t.innerHeight(n.slides.eq(n.animatingTo).innerHeight())
                }
            },
            sync: function(e) {
                var t = $(n.vars.sync).data("flexslider"),
                    a = n.animatingTo;
                switch (e) {
                    case "animate":
                        t.flexAnimate(a, n.vars.pauseOnAction, !1, !0);
                        break;
                    case "play":
                        t.playing || t.asNav || t.play();
                        break;
                    case "pause":
                        t.pause()
                }
            },
            uniqueID: function(e) {
                return e.filter("[id]").add(e.find("[id]")).each(function() {
                    var e = $(this);
                    e.attr("id", e.attr("id") + "_clone")
                }), e
            },
            pauseInvisible: {
                visProp: null,
                init: function() {
                    var e = f.pauseInvisible.getHiddenProp();
                    if (e) {
                        var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(t, function() {
                            f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play()
                        })
                    }
                },
                isHidden: function() {
                    var e = f.pauseInvisible.getHiddenProp();
                    return e ? document[e] : !1
                },
                getHiddenProp: function() {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++)
                        if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }
            },
            setToClearWatchedEvent: function() {
                clearTimeout(c), c = setTimeout(function() {
                    l = ""
                }, 3e3)
            }
        }, n.flexAnimate = function(e, t, a, s, o) {
            if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, o) || a) && n.is(":visible")) {
                if (m && s) {
                    var l = $(n.vars.asNavFor).data("flexslider");
                    if (n.atEnd = 0 === e || e === n.count - 1, l.flexAnimate(e, !0, !1, !0, o), n.direction = n.currentItem < e ? "next" : "prev", l.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), !1;
                    n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), e = Math.floor(e / n.visible)
                }
                if (n.animating = !0, n.animatingTo = e, t && n.pause(), n.vars.before(n), n.syncExists && !o && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && f.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) r ? (n.slides.eq(n.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), n.slides.eq(e).css({
                    opacity: 1,
                    zIndex: 2
                }), n.wrapup(c)) : (n.slides.eq(n.currentSlide).css({
                    zIndex: 1
                }).animate({
                    opacity: 0
                }, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({
                    zIndex: 2
                }).animate({
                    opacity: 1
                }, n.vars.animationSpeed, n.vars.easing, n.wrapup));
                else {
                    var c = d ? n.slides.filter(":first").height() : n.computedW,
                        g, h, S;
                    v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * c : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * c : u ? (n.count - 1 - e + n.cloneOffset) * c : (e + n.cloneOffset) * c, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function() {
                        clearTimeout(n.ensureAnimationEnd), n.wrapup(c)
                    }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function() {
                        n.wrapup(c)
                    }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function() {
                        n.wrapup(c)
                    })
                }
                n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed)
            }
        }, n.wrapup = function(e) {
            p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n)
        }, n.animateSlides = function() {
            !n.animating && e && n.flexAnimate(n.getTarget("next"))
        }, n.pause = function() {
            clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause")
        }, n.play = function() {
            n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play")
        }, n.stop = function() {
            n.pause(), n.stopped = !0
        }, n.canAdvance = function(e, t) {
            var a = m ? n.pagingCount - 1 : n.last;
            return t ? !0 : m && n.currentItem === n.count - 1 && 0 === e && "prev" === n.direction ? !0 : m && 0 === n.currentItem && e === n.pagingCount - 1 && "next" !== n.direction ? !1 : e !== n.currentSlide || m ? n.vars.animationLoop ? !0 : n.atEnd && 0 === n.currentSlide && e === a && "next" !== n.direction ? !1 : !n.atEnd || n.currentSlide !== a || 0 !== e || "next" !== n.direction : !1
        }, n.getTarget = function(e) {
            return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1
        }, n.setProps = function(e, t, a) {
            var i = function() {
                var a = e ? e : (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo,
                    i = function() {
                        if (v) return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;
                        switch (t) {
                            case "setTotal":
                                return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;
                            case "setTouch":
                                return u ? e : e;
                            case "jumpEnd":
                                return u ? e : n.count * e;
                            case "jumpStart":
                                return u ? n.count * e : e;
                            default:
                                return e
                        }
                    }();
                return -1 * i + "px"
            }();
            n.transitions && (i = d ? "translate3d(0," + i + ",0)" : "translate3d(" + i + ",0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i)
        }, n.setup = function(e) {
            if (p) n.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === e && (r ? n.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(n.currentSlide).css({
                opacity: 1,
                zIndex: 2
            }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({
                zIndex: 2
            }).css({
                opacity: 1
            }) : n.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(n.currentSlide).css({
                zIndex: 2
            }).animate({
                opacity: 1
            }, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight();
            else {
                var t, a;
                "init" === e && (n.viewport = $('<div class="' + i + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (a = $.makeArray(n.slides).reverse(), n.slides = $(a), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = $(n.vars.selector, n), t = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
                    n.newSlides.css({
                        display: "block"
                    }), n.doMath(), n.viewport.height(n.h), n.setProps(t * n.h, "init")
                }, "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(t * n.computedW, "init"), setTimeout(function() {
                    n.doMath(), n.newSlides.css({
                        width: n.computedW,
                        marginRight: n.computedM,
                        "float": "left",
                        display: "block"
                    }), n.vars.smoothHeight && f.smoothHeight()
                }, "init" === e ? 100 : 0))
            }
            v || n.slides.removeClass(i + "active-slide").eq(n.currentSlide).addClass(i + "active-slide"), n.vars.init(n)
        }, n.doMath = function() {
            var e = n.slides.first(),
                t = n.vars.itemMargin,
                a = n.vars.minItems,
                i = n.vars.maxItems;
            n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.itemM = t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.itemM = t, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding, n.computedM = n.itemM
        }, n.update = function(e, t) {
            n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update()
        }, n.addSlide = function(e, t) {
            var a = $(e);
            n.count += 1, n.last = n.count - 1, d && u ? void 0 !== t ? n.slides.eq(n.count - t).after(a) : n.container.prepend(a) : void 0 !== t ? n.slides.eq(t).before(a) : n.container.append(a), n.update(t, "add"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n)
        }, n.removeSlide = function(e) {
            var t = isNaN(e) ? n.slides.index($(e)) : e;
            n.count -= 1, n.last = n.count - 1, isNaN(e) ? $(e, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(t, "remove"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n)
        }, f.init()
    }, $(window).blur(function(t) {
        e = !1
    }).focus(function(t) {
        e = !0
    }), $.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function() {},
        before: function() {},
        after: function() {},
        end: function() {},
        added: function() {},
        removed: function() {},
        init: function() {}
    }, $.fn.flexslider = function(e) {
        if (void 0 === e && (e = {}), "object" == typeof e) return this.each(function() {
            var t = $(this),
                a = e.selector ? e.selector : ".slides > li",
                n = t.find(a);
            1 === n.length && e.allowOneSlide === !1 || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e)
        });
        var t = $(this).data("flexslider");
        switch (e) {
            case "play":
                t.play();
                break;
            case "pause":
                t.pause();
                break;
            case "stop":
                t.stop();
                break;
            case "next":
                t.flexAnimate(t.getTarget("next"), !0);
                break;
            case "prev":
            case "previous":
                t.flexAnimate(t.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof e && t.flexAnimate(e, !0)
        }
    }
}(jQuery);

/* end jquery.flex-slider.min.js*/


/* for jquery.ui.totop.js*/
/*
|--------------------------------------------------------------------------
| UItoTop jQuery Plugin 1.2 by Matt Varone
| http://www.mattvarone.com/web-design/uitotop-jquery-plugin/
|--------------------------------------------------------------------------
*/
(function($) {
    $.fn.UItoTop = function(options) {

        var defaults = {
                text: 'To Top',
                min: 200,
                inDelay: 600,
                outDelay: 400,
                containerID: 'toTop',
                containerHoverID: 'toTopHover',
                scrollSpeed: 1200,
                easingType: 'linear'
            },
            settings = $.extend(defaults, options),
            containerIDhash = '#' + settings.containerID,
            containerHoverIDHash = '#' + settings.containerHoverID;

        $('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>');
        $(containerIDhash).hide().on('click.UItoTop', function() {
                $('html, body').animate({
                    scrollTop: 0
                }, settings.scrollSpeed, settings.easingType);
                $('#' + settings.containerHoverID, this).stop().animate({
                    'opacity': 0
                }, settings.inDelay, settings.easingType);
                return false;
            })
            .prepend('<span id="' + settings.containerHoverID + '"></span>')
            .hover(function() {
                $(containerHoverIDHash, this).stop().animate({
                    'opacity': 1
                }, 600, 'linear');
            }, function() {
                $(containerHoverIDHash, this).stop().animate({
                    'opacity': 0
                }, 700, 'linear');
            });

        $(window).scroll(function() {
            var sd = $(window).scrollTop();
            if (typeof document.body.style.maxHeight === "undefined") {
                $(containerIDhash).css({
                    'position': 'absolute',
                    'top': sd + $(window).height() - 50
                });
            }
            if (sd > settings.min)
                $(containerIDhash).fadeIn(settings.inDelay);
            else
                $(containerIDhash).fadeOut(settings.Outdelay);
        });
    };
})(jQuery);
/* end jquery.ui.totop */


/* for jquery.scrollTo.min.js */
/**
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.2
 */
 ;
 (function(f) {
     "use strict";
     "function" === typeof define && define.amd ? define(["jquery"], f) : "undefined" !== typeof module && module.exports ? module.exports = f(require("jquery")) : f(jQuery)
 })(function($) {
     "use strict";
 
     function n(a) {
         return !a.nodeName || -1 !== $.inArray(a.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"])
     }
 
     function h(a) {
         return $.isFunction(a) || $.isPlainObject(a) ? a : {
             top: a,
             left: a
         }
     }
     var p = $.scrollTo = function(a, d, b) {
         return $(window).scrollTo(a, d, b)
     };
     p.defaults = {
         axis: "xy",
         duration: 0,
         limit: !0
     };
     $.fn.scrollTo = function(a, d, b) {
         "object" === typeof d && (b = d, d = 0);
         "function" === typeof b && (b = {
             onAfter: b
         });
         "max" === a && (a = 9E9);
         b = $.extend({}, p.defaults, b);
         d = d || b.duration;
         var u = b.queue && 1 < b.axis.length;
         u && (d /= 2);
         b.offset = h(b.offset);
         b.over = h(b.over);
         return this.each(function() {
             function k(a) {
                 var k = $.extend({}, b, {
                     queue: !0,
                     duration: d,
                     complete: a && function() {
                         a.call(q, e, b)
                     }
                 });
                 r.animate(f, k)
             }
             if (null !== a) {
                 var l = n(this),
                     q = l ? this.contentWindow || window : this,
                     r = $(q),
                     e = a,
                     f = {},
                     t;
                 switch (typeof e) {
                     case "number":
                     case "string":
                         if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)) {
                             e = h(e);
                             break
                         }
                         e = l ? $(e) : $(e, q);
                     case "object":
                         if (e.length === 0) return;
                         if (e.is || e.style) t = (e = $(e)).offset()
                 }
                 var v = $.isFunction(b.offset) && b.offset(q, e) || b.offset;
                 $.each(b.axis.split(""), function(a, c) {
                     var d = "x" === c ? "Left" : "Top",
                         m = d.toLowerCase(),
                         g = "scroll" + d,
                         h = r[g](),
                         n = p.max(q, c);
                     t ? (f[g] = t[m] + (l ? 0 : h - r.offset()[m]), b.margin && (f[g] -= parseInt(e.css("margin" + d), 10) || 0, f[g] -= parseInt(e.css("border" + d + "Width"), 10) || 0), f[g] += v[m] || 0, b.over[m] && (f[g] += e["x" === c ? "width" : "height"]() * b.over[m])) : (d = e[m], f[g] = d.slice && "%" === d.slice(-1) ? parseFloat(d) / 100 * n : d);
                     b.limit && /^\d+$/.test(f[g]) && (f[g] = 0 >= f[g] ? 0 : Math.min(f[g], n));
                     !a && 1 < b.axis.length && (h === f[g] ? f = {} : u && (k(b.onAfterFirst), f = {}))
                 });
                 k(b.onAfter)
             }
         })
     };
     p.max = function(a, d) {
         var b = "x" === d ? "Width" : "Height",
             h = "scroll" + b;
         if (!n(a)) return a[h] - $(a)[b.toLowerCase()]();
         var b = "client" + b,
             k = a.ownerDocument || a.document,
             l = k.documentElement,
             k = k.body;
         return Math.max(l[h], k[h]) - Math.min(l[b], k[b])
     };
     $.Tween.propHooks.scrollLeft = $.Tween.propHooks.scrollTop = {
         get: function(a) {
             return $(a.elem)[a.prop]()
         },
         set: function(a) {
             var d = this.get(a);
             if (a.options.interrupt && a._last && a._last !== d) return $(a.elem).stop();
             var b = Math.round(a.now);
             d !== b && ($(a.elem)[a.prop](b), a._last = this.get(a))
         }
     };
     return p
 });

/* end jquery.scrollTo */

/* for jquery.localScroll.min.js */
/**
 * Copyright (c) 2007 Ariel Flesler - aflesler<a>gmail<d>com | https://github.com/flesler
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.0.0
 */
 ! function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(t, o, n) {
        var i = o.hash.slice(1),
            a = document.getElementById(i) || document.getElementsByName(i)[0];
        if (a) {
            t && t.preventDefault();
            var l = e(n.target);
            if (!(n.lock && l.is(":animated") || n.onBefore && !1 === n.onBefore(t, a, l))) {
                if (n.stop && l.stop(!0), n.hash) {
                    var r = a.id === i ? "id" : "name",
                        s = e("<a> </a>").attr(r, i).css({
                            position: "absolute",
                            top: e(window).scrollTop(),
                            left: e(window).scrollLeft()
                        });
                    a[r] = "", e("body").prepend(s), location.hash = o.hash, s.remove(), a[r] = i
                }
                l.scrollTo(a, n).trigger("notify.serialScroll", [a])
            }
        }
    }
    var o = location.href.replace(/#.*/, ""),
        n = e.localScroll = function(t) {
            e("body").localScroll(t)
        };
    return n.defaults = {
        duration: 1e3,
        axis: "y",
        event: "click",
        stop: !0,
        target: window,
        autoscroll: !0
    }, e.fn.localScroll = function(i) {
        function a() {
            return !!this.href && !!this.hash && this.href.replace(this.hash, "") === o && (!i.filter || e(this).is(i.filter))
        }
        return (i = e.extend({}, n.defaults, i)).autoscroll && i.hash && location.hash && (i.target && window.scrollTo(0, 0), t(0, location, i)), i.lazy ? this.on(i.event, "a,area", function(e) {
            a.call(this) && t(e, this, i)
        }) : this.find("a,area").filter(a).bind(i.event, function(e) {
            t(e, this, i)
        }).end().end()
    }, n.hash = function() {}, n
});
/* end jquery.localScroll */


/* for jquery.easing.1.3.js */ 

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) return b;
        if (t == d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d) == 1) return b + c;
        if (!p) p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) return b;
        if ((t /= d / 2) == 2) return b + c;
        if (!p) p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) s = 1.70158;
        if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
/* end jquery.easing.1.3 */ 



/* for superfish.js */ 

/*
 * jQuery Superfish Menu Plugin - v1.7.9
 * Copyright (c) 2016 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

 ;
 (function($, w) {
     "use strict";
 
     var methods = (function() {
         // private properties and methods go here
         var c = {
                 bcClass: 'sf-breadcrumb',
                 menuClass: 'sf-js-enabled',
                 anchorClass: 'sf-with-ul',
                 menuArrowClass: 'sf-arrows'
             },
             ios = (function() {
                 var ios = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
                 if (ios) {
                     // tap anywhere on iOS to unfocus a submenu
                     $('html').css('cursor', 'pointer').on('click', $.noop);
                 }
                 return ios;
             })(),
             wp7 = (function() {
                 var style = document.documentElement.style;
                 return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
             })(),
             unprefixedPointerEvents = (function() {
                 return (!!w.PointerEvent);
             })(),
             toggleMenuClasses = function($menu, o, add) {
                 var classes = c.menuClass,
                     method;
                 if (o.cssArrows) {
                     classes += ' ' + c.menuArrowClass;
                 }
                 method = (add) ? 'addClass' : 'removeClass';
                 $menu[method](classes);
             },
             setPathToCurrent = function($menu, o) {
                 return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
                     .addClass(o.hoverClass + ' ' + c.bcClass)
                     .filter(function() {
                         return ($(this).children(o.popUpSelector).hide().show().length);
                     }).removeClass(o.pathClass);
             },
             toggleAnchorClass = function($li, add) {
                 var method = (add) ? 'addClass' : 'removeClass';
                 $li.children('a')[method](c.anchorClass);
             },
             toggleTouchAction = function($menu) {
                 var msTouchAction = $menu.css('ms-touch-action');
                 var touchAction = $menu.css('touch-action');
                 touchAction = touchAction || msTouchAction;
                 touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
                 $menu.css({
                     'ms-touch-action': touchAction,
                     'touch-action': touchAction
                 });
             },
             getMenu = function($el) {
                 return $el.closest('.' + c.menuClass);
             },
             getOptions = function($el) {
                 return getMenu($el).data('sfOptions');
             },
             over = function() {
                 var $this = $(this),
                     o = getOptions($this);
                 clearTimeout(o.sfTimer);
                 $this.siblings().superfish('hide').end().superfish('show');
             },
             close = function(o) {
                 o.retainPath = ($.inArray(this[0], o.$path) > -1);
                 this.superfish('hide');
 
                 if (!this.parents('.' + o.hoverClass).length) {
                     o.onIdle.call(getMenu(this));
                     if (o.$path.length) {
                         $.proxy(over, o.$path)();
                     }
                 }
             },
             out = function() {
                 var $this = $(this),
                     o = getOptions($this);
                 if (ios) {
                     $.proxy(close, $this, o)();
                 } else {
                     clearTimeout(o.sfTimer);
                     o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
                 }
             },
             touchHandler = function(e) {
                 var $this = $(this),
                     o = getOptions($this),
                     $ul = $this.siblings(e.data.popUpSelector);
 
                 if (o.onHandleTouch.call($ul) === false) {
                     return this;
                 }
 
                 if ($ul.length > 0 && $ul.is(':hidden')) {
                     $this.one('click.superfish', false);
                     if (e.type === 'MSPointerDown' || e.type === 'pointerdown') {
                         $this.trigger('focus');
                     } else {
                         $.proxy(over, $this.parent('li'))();
                     }
                 }
             },
             applyHandlers = function($menu, o) {
                 var targets = 'li:has(' + o.popUpSelector + ')';
                 if ($.fn.hoverIntent && !o.disableHI) {
                     $menu.hoverIntent(over, out, targets);
                 } else {
                     $menu
                         .on('mouseenter.superfish', targets, over)
                         .on('mouseleave.superfish', targets, out);
                 }
                 var touchevent = 'MSPointerDown.superfish';
                 if (unprefixedPointerEvents) {
                     touchevent = 'pointerdown.superfish';
                 }
                 if (!ios) {
                     touchevent += ' touchend.superfish';
                 }
                 if (wp7) {
                     touchevent += ' mousedown.superfish';
                 }
                 $menu
                     .on('focusin.superfish', 'li', over)
                     .on('focusout.superfish', 'li', out)
                     .on(touchevent, 'a', o, touchHandler);
             };
 
         return {
             // public methods
             hide: function(instant) {
                 if (this.length) {
                     var $this = this,
                         o = getOptions($this);
                     if (!o) {
                         return this;
                     }
                     var not = (o.retainPath === true) ? o.$path : '',
                         $ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
                         speed = o.speedOut;
 
                     if (instant) {
                         $ul.show();
                         speed = 0;
                     }
                     o.retainPath = false;
 
                     if (o.onBeforeHide.call($ul) === false) {
                         return this;
                     }
 
                     $ul.stop(true, true).animate(o.animationOut, speed, function() {
                         var $this = $(this);
                         o.onHide.call($this);
                     });
                 }
                 return this;
             },
             show: function() {
                 var o = getOptions(this);
                 if (!o) {
                     return this;
                 }
                 var $this = this.addClass(o.hoverClass),
                     $ul = $this.children(o.popUpSelector);
 
                 if (o.onBeforeShow.call($ul) === false) {
                     return this;
                 }
 
                 $ul.stop(true, true).animate(o.animation, o.speed, function() {
                     o.onShow.call($ul);
                 });
                 return this;
             },
             destroy: function() {
                 return this.each(function() {
                     var $this = $(this),
                         o = $this.data('sfOptions'),
                         $hasPopUp;
                     if (!o) {
                         return false;
                     }
                     $hasPopUp = $this.find(o.popUpSelector).parent('li');
                     clearTimeout(o.sfTimer);
                     toggleMenuClasses($this, o);
                     toggleAnchorClass($hasPopUp);
                     toggleTouchAction($this);
                     // remove event handlers
                     $this.off('.superfish').off('.hoverIntent');
                     // clear animation's inline display style
                     $hasPopUp.children(o.popUpSelector).attr('style', function(i, style) {
                         return style.replace(/display[^;]+;?/g, '');
                     });
                     // reset 'current' path classes
                     o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
                     $this.find('.' + o.hoverClass).removeClass(o.hoverClass);
                     o.onDestroy.call($this);
                     $this.removeData('sfOptions');
                 });
             },
             init: function(op) {
                 return this.each(function() {
                     var $this = $(this);
                     if ($this.data('sfOptions')) {
                         return false;
                     }
                     var o = $.extend({}, $.fn.superfish.defaults, op),
                         $hasPopUp = $this.find(o.popUpSelector).parent('li');
                     o.$path = setPathToCurrent($this, o);
 
                     $this.data('sfOptions', o);
 
                     toggleMenuClasses($this, o, true);
                     toggleAnchorClass($hasPopUp, true);
                     toggleTouchAction($this);
                     applyHandlers($this, o);
 
                     $hasPopUp.not('.' + c.bcClass).superfish('hide', true);
 
                     o.onInit.call(this);
                 });
             }
         };
     })();
 
     $.fn.superfish = function(method, args) {
         if (methods[method]) {
             return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
         } else if (typeof method === 'object' || !method) {
             return methods.init.apply(this, arguments);
         } else {
             return $.error('Method ' + method + ' does not exist on jQuery.fn.superfish');
         }
     };
 
     $.fn.superfish.defaults = {
         popUpSelector: 'ul,.sf-mega', // within menu context
         hoverClass: 'sfHover',
         pathClass: 'overrideThisToUse',
         pathLevels: 1,
         delay: 800,
         animation: {
             opacity: 'show'
         },
         animationOut: {
             opacity: 'hide'
         },
         speed: 'normal',
         speedOut: 'fast',
         cssArrows: true,
         disableHI: false,
         onInit: $.noop,
         onBeforeShow: $.noop,
         onShow: $.noop,
         onBeforeHide: $.noop,
         onHide: $.noop,
         onIdle: $.noop,
         onDestroy: $.noop,
         onHandleTouch: $.noop
     };
 
 })(jQuery, window);

/* end superfish */ 










