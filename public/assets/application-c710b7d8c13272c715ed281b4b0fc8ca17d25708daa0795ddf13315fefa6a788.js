/*! 
 * This is a opensource javascript jquery library
 * the code is taken from:

jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */

!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  'use strict';

  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]), textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[name][type=file]:not([disabled])',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Up-to-date Cross-Site Request Forgery token
    csrfToken: function() {
     return $('meta[name=csrf-token]').attr('content');
    },

    // URL param that must contain the CSRF token
    csrfParam: function() {
     return $('meta[name=csrf-param]').attr('content');
    },

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = rails.csrfToken();
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // Make sure that all forms have actual up-to-date tokens (cached forms contain old ones)
    refreshCSRFTokens: function(){
      $('form input[name="' + rails.csrfParam() + '"]').val(rails.csrfToken());
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element[0].href;
    },

    // Checks "data-remote" if true to handle the request through a XHR request.
    isRemote: function(element) {
      return element.data('remote') !== undefined && element.data('remote') !== false;
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.data('ujs:submit-button-formmethod') || element.attr('method');
          url = element.data('ujs:submit-button-formaction') || element.attr('action');
          data = $(element[0]).serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
          element.data('ujs:submit-button-formmethod', null);
          element.data('ujs:submit-button-formaction', null);
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + '&' + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: rails.isCrossDomain(url)
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Determines if the request is a cross domain request.
    isCrossDomain: function(url) {
      var originAnchor = document.createElement('a');
      originAnchor.href = location.href;
      var urlAnchor = document.createElement('a');

      try {
        urlAnchor.href = url;
        // This is a workaround to a IE bug.
        urlAnchor.href = urlAnchor.href;

        // If URL protocol is false or is a string containing a single colon
        // *and* host are false, assume it is not a cross-domain request
        // (should only be the case for IE7 and IE compatibility mode).
        // Otherwise, evaluate protocol and host of the URL against the origin
        // protocol and host.
        return !(((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host) ||
          (originAnchor.protocol + '//' + originAnchor.host ===
            urlAnchor.protocol + '//' + urlAnchor.host));
      } catch (e) {
        // If there is an error parsing the URL, assume it is crossDomain.
        return true;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = rails.csrfToken(),
        csrfParam = rails.csrfParam(),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined && !rails.isCrossDomain(href)) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element[method]());
        element[method](replacement);
      }

      element.prop('disabled', true);
      element.data('ujs:disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with') !== undefined) {
        element[method](element.data('ujs:enable-with'));
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.prop('disabled', false);
      element.removeData('ujs:disabled');
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        try {
          answer = rails.confirm(message);
        } catch (e) {
          (console.error || console.log).call(console, e.stack || e);
        }
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var foundInputs = $(),
        input,
        valueToCheck,
        radiosForNameWithNoneSelected,
        radioName,
        selector = specifiedSelector || 'input,textarea',
        requiredInputs = form.find(selector),
        checkedRadioButtonNames = {};

      requiredInputs.each(function() {
        input = $(this);
        if (input.is('input[type=radio]')) {

          // Don't count unchecked required radio as blank if other radio with same name is checked,
          // regardless of whether same-name radio input has required attribute or not. The spec
          // states https://www.w3.org/TR/html5/forms.html#the-required-attribute
          radioName = input.attr('name');

          // Skip if we've already seen the radio with this name.
          if (!checkedRadioButtonNames[radioName]) {

            // If none checked
            if (form.find('input[type=radio]:checked[name="' + radioName + '"]').length === 0) {
              radiosForNameWithNoneSelected = form.find(
                'input[type=radio][name="' + radioName + '"]');
              foundInputs = foundInputs.add(radiosForNameWithNoneSelected);
            }

            // We only need to check each name once.
            checkedRadioButtonNames[radioName] = radioName;
          }
        } else {
          valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : !!input.val();
          if (valueToCheck === nonBlank) {
            foundInputs = foundInputs.add(input);
          }
        }
      });
      return foundInputs.length ? foundInputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  Replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      if (replacement !== undefined) {
        element.data('ujs:enable-with', element.html()); // store enabled state
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
      element.data('ujs:disabled', true);
    },

    // Restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
      element.removeData('ujs:disabled');
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    // This event works the same as the load event, except that it fires every
    // time the page is loaded.
    //
    // See https://github.com/rails/jquery-ujs/issues/357
    // See https://developer.mozilla.org/en-US/docs/Using_Firefox_1.5_caching
    $(window).on('pageshow.rails', function () {
      $($.rails.enableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableFormElement(element);
        }
      });

      $($.rails.linkDisableSelector).each(function () {
        var element = $(this);

        if (element.data('ujs:disabled')) {
          $.rails.enableElement(element);
        }
      });
    });

    $document.on('ajax:complete', rails.linkDisableSelector, function() {
        rails.enableElement($(this));
    });

    $document.on('ajax:complete', rails.buttonDisableSelector, function() {
        rails.enableFormElement($(this));
    });

    $document.on('click.rails', rails.linkClickSelector, function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (rails.isRemote(link)) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // Response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.fail( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (method) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.on('click.rails', rails.buttonClickSelector, function(e) {
      var button = $(this);

      if (!rails.allowAction(button) || !rails.isRemote(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // Response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.fail( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.on('change.rails', rails.inputChangeSelector, function(e) {
      var link = $(this);
      if (!rails.allowAction(link) || !rails.isRemote(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.on('submit.rails', rails.formSubmitSelector, function(e) {
      var form = $(this),
        remote = rails.isRemote(form),
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // Skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') === undefined) {
        if (form.data('ujs:formnovalidate-button') === undefined) {
          blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector, false);
          if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
            return rails.stopEverything(e);
          }
        } else {
          // Clear the formnovalidate in case the next button click is not on a formnovalidate button
          // Not strictly necessary to do here, since it is also reset on each button click, but just to be certain
          form.data('ujs:formnovalidate-button', undefined);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // Slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // Re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // Slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.on('click.rails', rails.formInputClickSelector, function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // Register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      var form = button.closest('form');
      if (form.length === 0) {
        form = $('#' + button.attr('form'));
      }
      form.data('ujs:submit-button', data);

      // Save attributes from button
      form.data('ujs:formnovalidate-button', button.attr('formnovalidate'));
      form.data('ujs:submit-button-formaction', button.attr('formaction'));
      form.data('ujs:submit-button-formmethod', button.attr('formmethod'));
    });

    $document.on('ajax:send.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.disableFormElements($(this));
    });

    $document.on('ajax:complete.rails', rails.formSubmitSelector, function(event) {
      if (this === event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
/*!
 *This is an opensource javascript bootstrab library
 *the code is taken from:
 * Bootstrap v3.3.7 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under the MIT license
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){if(a(b.target).is(this))return b.handleObj.handler.apply(this,arguments)}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.7",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a("#"===f?[]:f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.7",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c).prop(c,!0)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c).prop(c,!1))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target).closest(".btn");b.call(d,"toggle"),a(c.target).is('input[type="radio"], input[type="checkbox"]')||(c.preventDefault(),d.is("input,button")?d.trigger("focus"):d.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(a>this.$items.length-1||a<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.7",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.7",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h))}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.7",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){document===a.target||this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);if(c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),!c.isInStateTrue())return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","")},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);if(this.$element.trigger(g),!g.isDefaultPrevented())return f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=window.SVGElement&&c instanceof window.SVGElement,g=d?{top:0,left:0}:f?null:b.offset(),h={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},i=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,h,i,g)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null,a.$element=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;!e&&/destroy|hide/.test(b)||(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.7",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.7",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){
this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.7",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.7",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return e<c&&"top";if("bottom"==this.affixed)return null!=c?!(e+this.unpin<=f.top)&&"bottom":!(e+g<=a-d)&&"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&e<=c?"top":null!=d&&i+j>=a-d&&"bottom"},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);
/*
Turbolinks 5.1.0
Copyright © 2018 Basecamp, LLC
 */

(function(){this.Turbolinks={supported:function(){return null!=window.history.pushState&&null!=window.requestAnimationFrame&&null!=window.addEventListener}(),visit:function(t,e){return Turbolinks.controller.visit(t,e)},clearCache:function(){return Turbolinks.controller.clearCache()},setProgressBarDelay:function(t){return Turbolinks.controller.setProgressBarDelay(t)}}}).call(this),function(){var t,e,r,n=[].slice;Turbolinks.copyObject=function(t){var e,r,n;r={};for(e in t)n=t[e],r[e]=n;return r},Turbolinks.closest=function(e,r){return t.call(e,r)},t=function(){var t,r;return t=document.documentElement,null!=(r=t.closest)?r:function(t){var r;for(r=this;r;){if(r.nodeType===Node.ELEMENT_NODE&&e.call(r,t))return r;r=r.parentNode}}}(),Turbolinks.defer=function(t){return setTimeout(t,1)},Turbolinks.throttle=function(t){var e;return e=null,function(){var r;return r=1<=arguments.length?n.call(arguments,0):[],null!=e?e:e=requestAnimationFrame(function(n){return function(){return e=null,t.apply(n,r)}}(this))}},Turbolinks.dispatch=function(t,e){var n,o,i,s,a,u;return a=null!=e?e:{},u=a.target,n=a.cancelable,o=a.data,i=document.createEvent("Events"),i.initEvent(t,!0,n===!0),i.data=null!=o?o:{},i.cancelable&&!r&&(s=i.preventDefault,i.preventDefault=function(){return this.defaultPrevented||Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),s.call(this)}),(null!=u?u:document).dispatchEvent(i),i},r=function(){var t;return t=document.createEvent("Events"),t.initEvent("test",!0,!0),t.preventDefault(),t.defaultPrevented}(),Turbolinks.match=function(t,r){return e.call(t,r)},e=function(){var t,e,r,n;return t=document.documentElement,null!=(e=null!=(r=null!=(n=t.matchesSelector)?n:t.webkitMatchesSelector)?r:t.msMatchesSelector)?e:t.mozMatchesSelector}(),Turbolinks.uuid=function(){var t,e,r;for(r="",t=e=1;36>=e;t=++e)r+=9===t||14===t||19===t||24===t?"-":15===t?"4":20===t?(Math.floor(4*Math.random())+8).toString(16):Math.floor(15*Math.random()).toString(16);return r}}.call(this),function(){Turbolinks.Location=function(){function t(t){var e,r;null==t&&(t=""),r=document.createElement("a"),r.href=t.toString(),this.absoluteURL=r.href,e=r.hash.length,2>e?this.requestURL=this.absoluteURL:(this.requestURL=this.absoluteURL.slice(0,-e),this.anchor=r.hash.slice(1))}var e,r,n,o;return t.wrap=function(t){return t instanceof this?t:new this(t)},t.prototype.getOrigin=function(){return this.absoluteURL.split("/",3).join("/")},t.prototype.getPath=function(){var t,e;return null!=(t=null!=(e=this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/))?e[1]:void 0)?t:"/"},t.prototype.getPathComponents=function(){return this.getPath().split("/").slice(1)},t.prototype.getLastPathComponent=function(){return this.getPathComponents().slice(-1)[0]},t.prototype.getExtension=function(){var t,e;return null!=(t=null!=(e=this.getLastPathComponent().match(/\.[^.]*$/))?e[0]:void 0)?t:""},t.prototype.isHTML=function(){return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)},t.prototype.isPrefixedBy=function(t){var e;return e=r(t),this.isEqualTo(t)||o(this.absoluteURL,e)},t.prototype.isEqualTo=function(t){return this.absoluteURL===(null!=t?t.absoluteURL:void 0)},t.prototype.toCacheKey=function(){return this.requestURL},t.prototype.toJSON=function(){return this.absoluteURL},t.prototype.toString=function(){return this.absoluteURL},t.prototype.valueOf=function(){return this.absoluteURL},r=function(t){return e(t.getOrigin()+t.getPath())},e=function(t){return n(t,"/")?t:t+"/"},o=function(t,e){return t.slice(0,e.length)===e},n=function(t,e){return t.slice(-e.length)===e},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.HttpRequest=function(){function e(e,r,n){this.delegate=e,this.requestCanceled=t(this.requestCanceled,this),this.requestTimedOut=t(this.requestTimedOut,this),this.requestFailed=t(this.requestFailed,this),this.requestLoaded=t(this.requestLoaded,this),this.requestProgressed=t(this.requestProgressed,this),this.url=Turbolinks.Location.wrap(r).requestURL,this.referrer=Turbolinks.Location.wrap(n).absoluteURL,this.createXHR()}return e.NETWORK_FAILURE=0,e.TIMEOUT_FAILURE=-1,e.timeout=60,e.prototype.send=function(){var t;return this.xhr&&!this.sent?(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(),this.sent=!0,"function"==typeof(t=this.delegate).requestStarted?t.requestStarted():void 0):void 0},e.prototype.cancel=function(){return this.xhr&&this.sent?this.xhr.abort():void 0},e.prototype.requestProgressed=function(t){return t.lengthComputable?this.setProgress(t.loaded/t.total):void 0},e.prototype.requestLoaded=function(){return this.endRequest(function(t){return function(){var e;return 200<=(e=t.xhr.status)&&300>e?t.delegate.requestCompletedWithResponse(t.xhr.responseText,t.xhr.getResponseHeader("Turbolinks-Location")):(t.failed=!0,t.delegate.requestFailedWithStatusCode(t.xhr.status,t.xhr.responseText))}}(this))},e.prototype.requestFailed=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)}}(this))},e.prototype.requestTimedOut=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)}}(this))},e.prototype.requestCanceled=function(){return this.endRequest()},e.prototype.notifyApplicationBeforeRequestStart=function(){return Turbolinks.dispatch("turbolinks:request-start",{data:{url:this.url,xhr:this.xhr}})},e.prototype.notifyApplicationAfterRequestEnd=function(){return Turbolinks.dispatch("turbolinks:request-end",{data:{url:this.url,xhr:this.xhr}})},e.prototype.createXHR=function(){return this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.url,!0),this.xhr.timeout=1e3*this.constructor.timeout,this.xhr.setRequestHeader("Accept","text/html, application/xhtml+xml"),this.xhr.setRequestHeader("Turbolinks-Referrer",this.referrer),this.xhr.onprogress=this.requestProgressed,this.xhr.onload=this.requestLoaded,this.xhr.onerror=this.requestFailed,this.xhr.ontimeout=this.requestTimedOut,this.xhr.onabort=this.requestCanceled},e.prototype.endRequest=function(t){return this.xhr?(this.notifyApplicationAfterRequestEnd(),null!=t&&t.call(this),this.destroy()):void 0},e.prototype.setProgress=function(t){var e;return this.progress=t,"function"==typeof(e=this.delegate).requestProgressed?e.requestProgressed(this.progress):void 0},e.prototype.destroy=function(){var t;return this.setProgress(1),"function"==typeof(t=this.delegate).requestFinished&&t.requestFinished(),this.delegate=null,this.xhr=null},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.ProgressBar=function(){function e(){this.trickle=t(this.trickle,this),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement()}var r;return r=300,e.defaultCSS=".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width "+r+"ms ease-out, opacity "+r/2+"ms "+r/2+"ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",e.prototype.show=function(){return this.visible?void 0:(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())},e.prototype.hide=function(){return this.visible&&!this.hiding?(this.hiding=!0,this.fadeProgressElement(function(t){return function(){return t.uninstallProgressElement(),t.stopTrickling(),t.visible=!1,t.hiding=!1}}(this))):void 0},e.prototype.setValue=function(t){return this.value=t,this.refresh()},e.prototype.installStylesheetElement=function(){return document.head.insertBefore(this.stylesheetElement,document.head.firstChild)},e.prototype.installProgressElement=function(){return this.progressElement.style.width=0,this.progressElement.style.opacity=1,document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()},e.prototype.fadeProgressElement=function(t){return this.progressElement.style.opacity=0,setTimeout(t,1.5*r)},e.prototype.uninstallProgressElement=function(){return this.progressElement.parentNode?document.documentElement.removeChild(this.progressElement):void 0},e.prototype.startTrickling=function(){return null!=this.trickleInterval?this.trickleInterval:this.trickleInterval=setInterval(this.trickle,r)},e.prototype.stopTrickling=function(){return clearInterval(this.trickleInterval),this.trickleInterval=null},e.prototype.trickle=function(){return this.setValue(this.value+Math.random()/100)},e.prototype.refresh=function(){return requestAnimationFrame(function(t){return function(){return t.progressElement.style.width=10+90*t.value+"%"}}(this))},e.prototype.createStylesheetElement=function(){var t;return t=document.createElement("style"),t.type="text/css",t.textContent=this.constructor.defaultCSS,t},e.prototype.createProgressElement=function(){var t;return t=document.createElement("div"),t.className="turbolinks-progress-bar",t},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.BrowserAdapter=function(){function e(e){this.controller=e,this.showProgressBar=t(this.showProgressBar,this),this.progressBar=new Turbolinks.ProgressBar}var r,n,o;return o=Turbolinks.HttpRequest,r=o.NETWORK_FAILURE,n=o.TIMEOUT_FAILURE,e.prototype.visitProposedToLocationWithAction=function(t,e){return this.controller.startVisitToLocationWithAction(t,e)},e.prototype.visitStarted=function(t){return t.issueRequest(),t.changeHistory(),t.loadCachedSnapshot()},e.prototype.visitRequestStarted=function(t){return this.progressBar.setValue(0),t.hasCachedSnapshot()||"restore"!==t.action?this.showProgressBarAfterDelay():this.showProgressBar()},e.prototype.visitRequestProgressed=function(t){return this.progressBar.setValue(t.progress)},e.prototype.visitRequestCompleted=function(t){return t.loadResponse()},e.prototype.visitRequestFailedWithStatusCode=function(t,e){switch(e){case r:case n:return this.reload();default:return t.loadResponse()}},e.prototype.visitRequestFinished=function(t){return this.hideProgressBar()},e.prototype.visitCompleted=function(t){return t.followRedirect()},e.prototype.pageInvalidated=function(){return this.reload()},e.prototype.showProgressBarAfterDelay=function(){return this.progressBarTimeout=setTimeout(this.showProgressBar,this.controller.progressBarDelay)},e.prototype.showProgressBar=function(){return this.progressBar.show()},e.prototype.hideProgressBar=function(){return this.progressBar.hide(),clearTimeout(this.progressBarTimeout)},e.prototype.reload=function(){return window.location.reload()},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.History=function(){function e(e){this.delegate=e,this.onPageLoad=t(this.onPageLoad,this),this.onPopState=t(this.onPopState,this)}return e.prototype.start=function(){return this.started?void 0:(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0)},e.prototype.stop=function(){return this.started?(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1):void 0},e.prototype.push=function(t,e){return t=Turbolinks.Location.wrap(t),this.update("push",t,e)},e.prototype.replace=function(t,e){return t=Turbolinks.Location.wrap(t),this.update("replace",t,e)},e.prototype.onPopState=function(t){var e,r,n,o;return this.shouldHandlePopState()&&(o=null!=(r=t.state)?r.turbolinks:void 0)?(e=Turbolinks.Location.wrap(window.location),n=o.restorationIdentifier,this.delegate.historyPoppedToLocationWithRestorationIdentifier(e,n)):void 0},e.prototype.onPageLoad=function(t){return Turbolinks.defer(function(t){return function(){return t.pageLoaded=!0}}(this))},e.prototype.shouldHandlePopState=function(){return this.pageIsLoaded()},e.prototype.pageIsLoaded=function(){return this.pageLoaded||"complete"===document.readyState},e.prototype.update=function(t,e,r){var n;return n={turbolinks:{restorationIdentifier:r}},history[t+"State"](n,null,e)},e}()}.call(this),function(){Turbolinks.Snapshot=function(){function t(t){var e,r;r=t.head,e=t.body,this.head=null!=r?r:document.createElement("head"),this.body=null!=e?e:document.createElement("body")}return t.wrap=function(t){return t instanceof this?t:this.fromHTML(t)},t.fromHTML=function(t){var e;return e=document.createElement("html"),e.innerHTML=t,this.fromElement(e)},t.fromElement=function(t){return new this({head:t.querySelector("head"),body:t.querySelector("body")})},t.prototype.clone=function(){return new t({head:this.head.cloneNode(!0),body:this.body.cloneNode(!0)})},t.prototype.getRootLocation=function(){var t,e;return e=null!=(t=this.getSetting("root"))?t:"/",new Turbolinks.Location(e)},t.prototype.getCacheControlValue=function(){return this.getSetting("cache-control")},t.prototype.getElementForAnchor=function(t){try{return this.body.querySelector("[id='"+t+"'], a[name='"+t+"']")}catch(e){}},t.prototype.hasAnchor=function(t){return null!=this.getElementForAnchor(t)},t.prototype.isPreviewable=function(){return"no-preview"!==this.getCacheControlValue()},t.prototype.isCacheable=function(){return"no-cache"!==this.getCacheControlValue()},t.prototype.isVisitable=function(){return"reload"!==this.getSetting("visit-control")},t.prototype.getSetting=function(t){var e,r;return r=this.head.querySelectorAll("meta[name='turbolinks-"+t+"']"),e=r[r.length-1],null!=e?e.getAttribute("content"):void 0},t}()}.call(this),function(){var t=[].slice;Turbolinks.Renderer=function(){function e(){}var r;return e.render=function(){var e,r,n,o;return n=arguments[0],r=arguments[1],e=3<=arguments.length?t.call(arguments,2):[],o=function(t,e,r){r.prototype=t.prototype;var n=new r,o=t.apply(n,e);return Object(o)===o?o:n}(this,e,function(){}),o.delegate=n,o.render(r),o},e.prototype.renderView=function(t){return this.delegate.viewWillRender(this.newBody),t(),this.delegate.viewRendered(this.newBody)},e.prototype.invalidateView=function(){return this.delegate.viewInvalidated()},e.prototype.createScriptElement=function(t){var e;return"false"===t.getAttribute("data-turbolinks-eval")?t:(e=document.createElement("script"),e.textContent=t.textContent,e.async=!1,r(e,t),e)},r=function(t,e){var r,n,o,i,s,a,u;for(i=e.attributes,a=[],r=0,n=i.length;n>r;r++)s=i[r],o=s.name,u=s.value,a.push(t.setAttribute(o,u));return a},e}()}.call(this),function(){Turbolinks.HeadDetails=function(){function t(t){var e,r,i,s,a,u,l;for(this.element=t,this.elements={},l=this.element.childNodes,s=0,u=l.length;u>s;s++)i=l[s],i.nodeType===Node.ELEMENT_NODE&&(a=i.outerHTML,r=null!=(e=this.elements)[a]?e[a]:e[a]={type:o(i),tracked:n(i),elements:[]},r.elements.push(i))}var e,r,n,o;return t.prototype.hasElementWithKey=function(t){return t in this.elements},t.prototype.getTrackedElementSignature=function(){var t,e;return function(){var r,n;r=this.elements,n=[];for(t in r)e=r[t].tracked,e&&n.push(t);return n}.call(this).join("")},t.prototype.getScriptElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("script",t)},t.prototype.getStylesheetElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("stylesheet",t)},t.prototype.getElementsMatchingTypeNotInDetails=function(t,e){var r,n,o,i,s,a;o=this.elements,s=[];for(n in o)i=o[n],a=i.type,r=i.elements,a!==t||e.hasElementWithKey(n)||s.push(r[0]);return s},t.prototype.getProvisionalElements=function(){var t,e,r,n,o,i,s;r=[],n=this.elements;for(e in n)o=n[e],s=o.type,i=o.tracked,t=o.elements,null!=s||i?t.length>1&&r.push.apply(r,t.slice(1)):r.push.apply(r,t);return r},o=function(t){return e(t)?"script":r(t)?"stylesheet":void 0},n=function(t){return"reload"===t.getAttribute("data-turbolinks-track")},e=function(t){var e;return e=t.tagName.toLowerCase(),"script"===e},r=function(t){var e;return e=t.tagName.toLowerCase(),"style"===e||"link"===e&&"stylesheet"===t.getAttribute("rel")},t}()}.call(this),function(){var t=function(t,r){function n(){this.constructor=t}for(var o in r)e.call(r,o)&&(t[o]=r[o]);return n.prototype=r.prototype,t.prototype=new n,t.__super__=r.prototype,t},e={}.hasOwnProperty;Turbolinks.SnapshotRenderer=function(e){function r(t,e,r){this.currentSnapshot=t,this.newSnapshot=e,this.isPreview=r,this.currentHeadDetails=new Turbolinks.HeadDetails(this.currentSnapshot.head),this.newHeadDetails=new Turbolinks.HeadDetails(this.newSnapshot.head),this.newBody=this.newSnapshot.body}return t(r,e),r.prototype.render=function(t){return this.shouldRender()?(this.mergeHead(),this.renderView(function(e){return function(){return e.replaceBody(),e.isPreview||e.focusFirstAutofocusableElement(),t()}}(this))):this.invalidateView()},r.prototype.mergeHead=function(){return this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()},r.prototype.replaceBody=function(){return this.activateBodyScriptElements(),this.importBodyPermanentElements(),this.assignNewBody()},r.prototype.shouldRender=function(){return this.newSnapshot.isVisitable()&&this.trackedElementsAreIdentical()},r.prototype.trackedElementsAreIdentical=function(){return this.currentHeadDetails.getTrackedElementSignature()===this.newHeadDetails.getTrackedElementSignature()},r.prototype.copyNewHeadStylesheetElements=function(){var t,e,r,n,o;for(n=this.getNewHeadStylesheetElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},r.prototype.copyNewHeadScriptElements=function(){var t,e,r,n,o;for(n=this.getNewHeadScriptElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(this.createScriptElement(t)));return o},r.prototype.removeCurrentHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getCurrentHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.removeChild(t));return o},r.prototype.copyNewHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getNewHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},r.prototype.importBodyPermanentElements=function(){var t,e,r,n,o,i;for(n=this.getNewBodyPermanentElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],(t=this.findCurrentBodyPermanentElement(o))?i.push(o.parentNode.replaceChild(t,o)):i.push(void 0);return i},r.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getNewBodyScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},r.prototype.assignNewBody=function(){return document.body=this.newBody},r.prototype.focusFirstAutofocusableElement=function(){var t;return null!=(t=this.findFirstAutofocusableElement())?t.focus():void 0},r.prototype.getNewHeadStylesheetElements=function(){return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)},r.prototype.getNewHeadScriptElements=function(){return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)},r.prototype.getCurrentHeadProvisionalElements=function(){return this.currentHeadDetails.getProvisionalElements()},r.prototype.getNewHeadProvisionalElements=function(){return this.newHeadDetails.getProvisionalElements()},r.prototype.getNewBodyPermanentElements=function(){return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")},r.prototype.findCurrentBodyPermanentElement=function(t){return document.body.querySelector("#"+t.id+"[data-turbolinks-permanent]")},r.prototype.getNewBodyScriptElements=function(){return this.newBody.querySelectorAll("script")},r.prototype.findFirstAutofocusableElement=function(){return document.body.querySelector("[autofocus]")},r}(Turbolinks.Renderer)}.call(this),function(){var t=function(t,r){function n(){this.constructor=t}for(var o in r)e.call(r,o)&&(t[o]=r[o]);return n.prototype=r.prototype,t.prototype=new n,t.__super__=r.prototype,t},e={}.hasOwnProperty;Turbolinks.ErrorRenderer=function(e){function r(t){this.html=t}return t(r,e),r.prototype.render=function(t){return this.renderView(function(e){return function(){return e.replaceDocumentHTML(),e.activateBodyScriptElements(),t()}}(this))},r.prototype.replaceDocumentHTML=function(){return document.documentElement.innerHTML=this.html},r.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},r.prototype.getScriptElements=function(){return document.documentElement.querySelectorAll("script")},r}(Turbolinks.Renderer)}.call(this),function(){Turbolinks.View=function(){function t(t){this.delegate=t,this.element=document.documentElement}return t.prototype.getRootLocation=function(){return this.getSnapshot().getRootLocation()},t.prototype.getElementForAnchor=function(t){return this.getSnapshot().getElementForAnchor(t)},t.prototype.getSnapshot=function(){return Turbolinks.Snapshot.fromElement(this.element)},t.prototype.render=function(t,e){var r,n,o;return o=t.snapshot,r=t.error,n=t.isPreview,this.markAsPreview(n),null!=o?this.renderSnapshot(o,n,e):this.renderError(r,e)},t.prototype.markAsPreview=function(t){return t?this.element.setAttribute("data-turbolinks-preview",""):this.element.removeAttribute("data-turbolinks-preview")},t.prototype.renderSnapshot=function(t,e,r){return Turbolinks.SnapshotRenderer.render(this.delegate,r,this.getSnapshot(),Turbolinks.Snapshot.wrap(t),e)},t.prototype.renderError=function(t,e){return Turbolinks.ErrorRenderer.render(this.delegate,e,t)},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.ScrollManager=function(){function e(e){this.delegate=e,this.onScroll=t(this.onScroll,this),this.onScroll=Turbolinks.throttle(this.onScroll)}return e.prototype.start=function(){return this.started?void 0:(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)},e.prototype.stop=function(){return this.started?(removeEventListener("scroll",this.onScroll,!1),this.started=!1):void 0},e.prototype.scrollToElement=function(t){return t.scrollIntoView()},e.prototype.scrollToPosition=function(t){var e,r;return e=t.x,r=t.y,window.scrollTo(e,r)},e.prototype.onScroll=function(t){return this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},e.prototype.updatePosition=function(t){var e;return this.position=t,null!=(e=this.delegate)?e.scrollPositionChanged(this.position):void 0},e}()}.call(this),function(){Turbolinks.SnapshotCache=function(){function t(t){this.size=t,this.keys=[],this.snapshots={}}var e;return t.prototype.has=function(t){var r;return r=e(t),r in this.snapshots},t.prototype.get=function(t){var e;if(this.has(t))return e=this.read(t),this.touch(t),e},t.prototype.put=function(t,e){return this.write(t,e),this.touch(t),e},t.prototype.read=function(t){var r;return r=e(t),this.snapshots[r]},t.prototype.write=function(t,r){var n;return n=e(t),this.snapshots[n]=r},t.prototype.touch=function(t){var r,n;return n=e(t),r=this.keys.indexOf(n),r>-1&&this.keys.splice(r,1),this.keys.unshift(n),this.trim()},t.prototype.trim=function(){var t,e,r,n,o;for(n=this.keys.splice(this.size),o=[],t=0,r=n.length;r>t;t++)e=n[t],o.push(delete this.snapshots[e]);return o},e=function(t){return Turbolinks.Location.wrap(t).toCacheKey()},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.Visit=function(){function e(e,r,n){this.controller=e,this.action=n,this.performScroll=t(this.performScroll,this),this.identifier=Turbolinks.uuid(),this.location=Turbolinks.Location.wrap(r),this.adapter=this.controller.adapter,this.state="initialized",this.timingMetrics={}}var r;return e.prototype.start=function(){return"initialized"===this.state?(this.recordTimingMetric("visitStart"),this.state="started",this.adapter.visitStarted(this)):void 0},e.prototype.cancel=function(){var t;return"started"===this.state?(null!=(t=this.request)&&t.cancel(),this.cancelRender(),this.state="canceled"):void 0},e.prototype.complete=function(){var t;return"started"===this.state?(this.recordTimingMetric("visitEnd"),this.state="completed","function"==typeof(t=this.adapter).visitCompleted&&t.visitCompleted(this),this.controller.visitCompleted(this)):void 0},e.prototype.fail=function(){var t;return"started"===this.state?(this.state="failed","function"==typeof(t=this.adapter).visitFailed?t.visitFailed(this):void 0):void 0},e.prototype.changeHistory=function(){var t,e;return this.historyChanged?void 0:(t=this.location.isEqualTo(this.referrer)?"replace":this.action,e=r(t),this.controller[e](this.location,this.restorationIdentifier),this.historyChanged=!0)},e.prototype.issueRequest=function(){return this.shouldIssueRequest()&&null==this.request?(this.progress=0,this.request=new Turbolinks.HttpRequest(this,this.location,this.referrer),this.request.send()):void 0},e.prototype.getCachedSnapshot=function(){var t;return!(t=this.controller.getCachedSnapshotForLocation(this.location))||null!=this.location.anchor&&!t.hasAnchor(this.location.anchor)||"restore"!==this.action&&!t.isPreviewable()?void 0:t},e.prototype.hasCachedSnapshot=function(){return null!=this.getCachedSnapshot()},e.prototype.loadCachedSnapshot=function(){var t,e;return(e=this.getCachedSnapshot())?(t=this.shouldIssueRequest(),this.render(function(){var r;return this.cacheSnapshot(),this.controller.render({snapshot:e,isPreview:t},this.performScroll),"function"==typeof(r=this.adapter).visitRendered&&r.visitRendered(this),t?void 0:this.complete()})):void 0},e.prototype.loadResponse=function(){return null!=this.response?this.render(function(){var t,e;return this.cacheSnapshot(),this.request.failed?(this.controller.render({error:this.response},this.performScroll),"function"==typeof(t=this.adapter).visitRendered&&t.visitRendered(this),this.fail()):(this.controller.render({snapshot:this.response},this.performScroll),"function"==typeof(e=this.adapter).visitRendered&&e.visitRendered(this),this.complete())}):void 0},e.prototype.followRedirect=function(){return this.redirectedToLocation&&!this.followedRedirect?(this.location=this.redirectedToLocation,this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation,this.restorationIdentifier),this.followedRedirect=!0):void 0},e.prototype.requestStarted=function(){var t;return this.recordTimingMetric("requestStart"),"function"==typeof(t=this.adapter).visitRequestStarted?t.visitRequestStarted(this):void 0},e.prototype.requestProgressed=function(t){var e;return this.progress=t,"function"==typeof(e=this.adapter).visitRequestProgressed?e.visitRequestProgressed(this):void 0},e.prototype.requestCompletedWithResponse=function(t,e){return this.response=t,null!=e&&(this.redirectedToLocation=Turbolinks.Location.wrap(e)),this.adapter.visitRequestCompleted(this)},e.prototype.requestFailedWithStatusCode=function(t,e){return this.response=e,this.adapter.visitRequestFailedWithStatusCode(this,t)},e.prototype.requestFinished=function(){var t;return this.recordTimingMetric("requestEnd"),"function"==typeof(t=this.adapter).visitRequestFinished?t.visitRequestFinished(this):void 0},e.prototype.performScroll=function(){return this.scrolled?void 0:("restore"===this.action?this.scrollToRestoredPosition()||this.scrollToTop():this.scrollToAnchor()||this.scrollToTop(),this.scrolled=!0)},e.prototype.scrollToRestoredPosition=function(){var t,e;return t=null!=(e=this.restorationData)?e.scrollPosition:void 0,null!=t?(this.controller.scrollToPosition(t),!0):void 0},e.prototype.scrollToAnchor=function(){return null!=this.location.anchor?(this.controller.scrollToAnchor(this.location.anchor),!0):void 0},e.prototype.scrollToTop=function(){return this.controller.scrollToPosition({x:0,y:0})},e.prototype.recordTimingMetric=function(t){var e;return null!=(e=this.timingMetrics)[t]?e[t]:e[t]=(new Date).getTime()},e.prototype.getTimingMetrics=function(){return Turbolinks.copyObject(this.timingMetrics)},r=function(t){switch(t){case"replace":return"replaceHistoryWithLocationAndRestorationIdentifier";case"advance":case"restore":return"pushHistoryWithLocationAndRestorationIdentifier"}},e.prototype.shouldIssueRequest=function(){return"restore"===this.action?!this.hasCachedSnapshot():!0},e.prototype.cacheSnapshot=function(){return this.snapshotCached?void 0:(this.controller.cacheSnapshot(),this.snapshotCached=!0)},e.prototype.render=function(t){return this.cancelRender(),this.frame=requestAnimationFrame(function(e){return function(){return e.frame=null,t.call(e)}}(this))},e.prototype.cancelRender=function(){return this.frame?cancelAnimationFrame(this.frame):void 0},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};Turbolinks.Controller=function(){function e(){this.clickBubbled=t(this.clickBubbled,this),this.clickCaptured=t(this.clickCaptured,this),this.pageLoaded=t(this.pageLoaded,this),this.history=new Turbolinks.History(this),this.view=new Turbolinks.View(this),this.scrollManager=new Turbolinks.ScrollManager(this),this.restorationData={},this.clearCache(),this.setProgressBarDelay(500)}return e.prototype.start=function(){return Turbolinks.supported&&!this.started?(addEventListener("click",this.clickCaptured,!0),addEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.start(),this.startHistory(),this.started=!0,this.enabled=!0):void 0},e.prototype.disable=function(){return this.enabled=!1},e.prototype.stop=function(){return this.started?(removeEventListener("click",this.clickCaptured,!0),removeEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.stop(),this.stopHistory(),this.started=!1):void 0},e.prototype.clearCache=function(){return this.cache=new Turbolinks.SnapshotCache(10)},e.prototype.visit=function(t,e){var r,n;return null==e&&(e={}),t=Turbolinks.Location.wrap(t),this.applicationAllowsVisitingLocation(t)?this.locationIsVisitable(t)?(r=null!=(n=e.action)?n:"advance",this.adapter.visitProposedToLocationWithAction(t,r)):window.location=t:void 0},e.prototype.startVisitToLocationWithAction=function(t,e,r){var n;return Turbolinks.supported?(n=this.getRestorationDataForIdentifier(r),this.startVisit(t,e,{restorationData:n})):window.location=t},e.prototype.setProgressBarDelay=function(t){return this.progressBarDelay=t},e.prototype.startHistory=function(){return this.location=Turbolinks.Location.wrap(window.location),this.restorationIdentifier=Turbolinks.uuid(),this.history.start(),this.history.replace(this.location,this.restorationIdentifier)},e.prototype.stopHistory=function(){return this.history.stop()},e.prototype.pushHistoryWithLocationAndRestorationIdentifier=function(t,e){return this.restorationIdentifier=e,this.location=Turbolinks.Location.wrap(t),this.history.push(this.location,this.restorationIdentifier)},e.prototype.replaceHistoryWithLocationAndRestorationIdentifier=function(t,e){return this.restorationIdentifier=e,this.location=Turbolinks.Location.wrap(t),this.history.replace(this.location,this.restorationIdentifier)},e.prototype.historyPoppedToLocationWithRestorationIdentifier=function(t,e){var r;return this.restorationIdentifier=e,this.enabled?(r=this.getRestorationDataForIdentifier(this.restorationIdentifier),this.startVisit(t,"restore",{restorationIdentifier:this.restorationIdentifier,restorationData:r,historyChanged:!0}),this.location=Turbolinks.Location.wrap(t)):this.adapter.pageInvalidated()},e.prototype.getCachedSnapshotForLocation=function(t){var e;return e=this.cache.get(t),e?e.clone():void 0},e.prototype.shouldCacheSnapshot=function(){return this.view.getSnapshot().isCacheable()},e.prototype.cacheSnapshot=function(){var t;return this.shouldCacheSnapshot()?(this.notifyApplicationBeforeCachingSnapshot(),t=this.view.getSnapshot(),this.cache.put(this.lastRenderedLocation,t.clone())):void 0},e.prototype.scrollToAnchor=function(t){var e;return(e=this.view.getElementForAnchor(t))?this.scrollToElement(e):this.scrollToPosition({x:0,y:0})},e.prototype.scrollToElement=function(t){return this.scrollManager.scrollToElement(t)},e.prototype.scrollToPosition=function(t){return this.scrollManager.scrollToPosition(t)},e.prototype.scrollPositionChanged=function(t){var e;return e=this.getCurrentRestorationData(),e.scrollPosition=t},e.prototype.render=function(t,e){return this.view.render(t,e)},e.prototype.viewInvalidated=function(){return this.adapter.pageInvalidated()},e.prototype.viewWillRender=function(t){return this.notifyApplicationBeforeRender(t)},e.prototype.viewRendered=function(){return this.lastRenderedLocation=this.currentVisit.location,this.notifyApplicationAfterRender()},e.prototype.pageLoaded=function(){
return this.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()},e.prototype.clickCaptured=function(){return removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},e.prototype.clickBubbled=function(t){var e,r,n;return this.enabled&&this.clickEventIsSignificant(t)&&(r=this.getVisitableLinkForNode(t.target))&&(n=this.getVisitableLocationForLink(r))&&this.applicationAllowsFollowingLinkToLocation(r,n)?(t.preventDefault(),e=this.getActionForLink(r),this.visit(n,{action:e})):void 0},e.prototype.applicationAllowsFollowingLinkToLocation=function(t,e){var r;return r=this.notifyApplicationAfterClickingLinkToLocation(t,e),!r.defaultPrevented},e.prototype.applicationAllowsVisitingLocation=function(t){var e;return e=this.notifyApplicationBeforeVisitingLocation(t),!e.defaultPrevented},e.prototype.notifyApplicationAfterClickingLinkToLocation=function(t,e){return Turbolinks.dispatch("turbolinks:click",{target:t,data:{url:e.absoluteURL},cancelable:!0})},e.prototype.notifyApplicationBeforeVisitingLocation=function(t){return Turbolinks.dispatch("turbolinks:before-visit",{data:{url:t.absoluteURL},cancelable:!0})},e.prototype.notifyApplicationAfterVisitingLocation=function(t){return Turbolinks.dispatch("turbolinks:visit",{data:{url:t.absoluteURL}})},e.prototype.notifyApplicationBeforeCachingSnapshot=function(){return Turbolinks.dispatch("turbolinks:before-cache")},e.prototype.notifyApplicationBeforeRender=function(t){return Turbolinks.dispatch("turbolinks:before-render",{data:{newBody:t}})},e.prototype.notifyApplicationAfterRender=function(){return Turbolinks.dispatch("turbolinks:render")},e.prototype.notifyApplicationAfterPageLoad=function(t){return null==t&&(t={}),Turbolinks.dispatch("turbolinks:load",{data:{url:this.location.absoluteURL,timing:t}})},e.prototype.startVisit=function(t,e,r){var n;return null!=(n=this.currentVisit)&&n.cancel(),this.currentVisit=this.createVisit(t,e,r),this.currentVisit.start(),this.notifyApplicationAfterVisitingLocation(t)},e.prototype.createVisit=function(t,e,r){var n,o,i,s,a;return o=null!=r?r:{},s=o.restorationIdentifier,i=o.restorationData,n=o.historyChanged,a=new Turbolinks.Visit(this,t,e),a.restorationIdentifier=null!=s?s:Turbolinks.uuid(),a.restorationData=Turbolinks.copyObject(i),a.historyChanged=n,a.referrer=this.location,a},e.prototype.visitCompleted=function(t){return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())},e.prototype.clickEventIsSignificant=function(t){return!(t.defaultPrevented||t.target.isContentEditable||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)},e.prototype.getVisitableLinkForNode=function(t){return this.nodeIsVisitable(t)?Turbolinks.closest(t,"a[href]:not([target]):not([download])"):void 0},e.prototype.getVisitableLocationForLink=function(t){var e;return e=new Turbolinks.Location(t.getAttribute("href")),this.locationIsVisitable(e)?e:void 0},e.prototype.getActionForLink=function(t){var e;return null!=(e=t.getAttribute("data-turbolinks-action"))?e:"advance"},e.prototype.nodeIsVisitable=function(t){var e;return(e=Turbolinks.closest(t,"[data-turbolinks]"))?"false"!==e.getAttribute("data-turbolinks"):!0},e.prototype.locationIsVisitable=function(t){return t.isPrefixedBy(this.view.getRootLocation())&&t.isHTML()},e.prototype.getCurrentRestorationData=function(){return this.getRestorationDataForIdentifier(this.restorationIdentifier)},e.prototype.getRestorationDataForIdentifier=function(t){var e;return null!=(e=this.restorationData)[t]?e[t]:e[t]={}},e}()}.call(this),function(){!function(){var t,e;if((t=e=document.currentScript)&&!e.hasAttribute("data-turbolinks-suppress-warning"))for(;t=t.parentNode;)if(t===document.body)return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s",e.outerHTML)}()}.call(this),function(){var t,e,r;Turbolinks.start=function(){return e()?(null==Turbolinks.controller&&(Turbolinks.controller=t()),Turbolinks.controller.start()):void 0},e=function(){return null==window.Turbolinks&&(window.Turbolinks=Turbolinks),r()},t=function(){var t;return t=new Turbolinks.Controller,t.adapter=new Turbolinks.BrowserAdapter(t),t},r=function(){return window.Turbolinks===Turbolinks},r()&&Turbolinks.start()}.call(this);
/*
  *This is an opensource javascript bootstrab library with some third party modification.
 *This code is taken from: https://www.creative-tim.com/product/light-bootstrap-dashboard#_=_   
    

     Creative Tim Modifications
     
     Lines: 239, 240 was changed from top: 5px to top: 50% and we added margin-top: -13px. In this way the close button will be aligned vertically 
     Line:242 - modified when the icon is set, we add the class "alert-with-icon", so there will be enough space for the icon.




*/


/*
* Project: Bootstrap Notify = v3.1.5
* Description: Turns standard Bootstrap alerts into "Growl-like" notifications.
* Author: Mouse0270 aka Robert McIntosh
* License: MIT License
* Website: https://github.com/mouse0270/bootstrap-growl
*/

/* global define:false, require: false, jQuery:false */


(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {
	// Create the defaults once
	var defaults = {
		element: 'body',
		position: null,
		type: "info",
		allow_dismiss: true,
		allow_duplicates: true,
		newest_on_top: false,
		showProgressbar: false,
		placement: {
			from: "top",
			align: "right"
		},
		offset: 20,
		spacing: 10,
		z_index: 1031,
		delay: 5000,
		timer: 1000,
		url_target: '_blank',
		mouse_over: null,
		animate: {
			enter: 'animated fadeInDown',
			exit: 'animated fadeOutUp'
		},
		onShow: null,
		onShown: null,
		onClose: null,
		onClosed: null,
		icon_type: 'class',
		template: '<div data-notify="container" class="col-xs-11 col-sm-4 alert alert-{0}" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">&times;</button><span data-notify="icon"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
	};

	String.format = function () {
		var str = arguments[0];
		for (var i = 1; i < arguments.length; i++) {
			str = str.replace(RegExp("\\{" + (i - 1) + "\\}", "gm"), arguments[i]);
		}
		return str;
	};

	function isDuplicateNotification(notification) {
		var isDupe = false;

		$('[data-notify="container"]').each(function (i, el) {
			var $el = $(el);
			var title = $el.find('[data-notify="title"]').text().trim();
			var message = $el.find('[data-notify="message"]').html().trim();

			// The input string might be different than the actual parsed HTML string!
			// (<br> vs <br /> for example)
			// So we have to force-parse this as HTML here!
			var isSameTitle = title === $("<div>" + notification.settings.content.title + "</div>").html().trim();
			var isSameMsg = message === $("<div>" + notification.settings.content.message + "</div>").html().trim();
			var isSameType = $el.hasClass('alert-' + notification.settings.type);

			if (isSameTitle && isSameMsg && isSameType) {
				//we found the dupe. Set the var and stop checking.
				isDupe = true;
			}
			return !isDupe;
		});

		return isDupe;
	}

	function Notify(element, content, options) {
		// Setup Content of Notify
		var contentObj = {
			content: {
				message: typeof content === 'object' ? content.message : content,
				title: content.title ? content.title : '',
				icon: content.icon ? content.icon : '',
				url: content.url ? content.url : '#',
				target: content.target ? content.target : '-'
			}
		};

		options = $.extend(true, {}, contentObj, options);
		this.settings = $.extend(true, {}, defaults, options);
		this._defaults = defaults;
		if (this.settings.content.target === "-") {
			this.settings.content.target = this.settings.url_target;
		}
		this.animations = {
			start: 'webkitAnimationStart oanimationstart MSAnimationStart animationstart',
			end: 'webkitAnimationEnd oanimationend MSAnimationEnd animationend'
		};

		if (typeof this.settings.offset === 'number') {
			this.settings.offset = {
				x: this.settings.offset,
				y: this.settings.offset
			};
		}

		//if duplicate messages are not allowed, then only continue if this new message is not a duplicate of one that it already showing
		if (this.settings.allow_duplicates || (!this.settings.allow_duplicates && !isDuplicateNotification(this))) {
			this.init();
		}
	}
	
	$.extend(Notify.prototype, {
		init: function () {
			var self = this;

			this.buildNotify();
			if (this.settings.content.icon) {
				this.setIcon();
			}
			if (this.settings.content.url != "#") {
				this.styleURL();
			}
			this.styleDismiss();
			this.placement();
			this.bind();

			this.notify = {
				$ele: this.$ele,
				update: function (command, update) {
					var commands = {};
					if (typeof command === "string") {
						commands[command] = update;
					} else {
						commands = command;
					}
					for (var cmd in commands) {
						switch (cmd) {
							case "type":
								this.$ele.removeClass('alert-' + self.settings.type);
								this.$ele.find('[data-notify="progressbar"] > .progress-bar').removeClass('progress-bar-' + self.settings.type);
								self.settings.type = commands[cmd];
								this.$ele.addClass('alert-' + commands[cmd]).find('[data-notify="progressbar"] > .progress-bar').addClass('progress-bar-' + commands[cmd]);
								break;
							case "icon":
								var $icon = this.$ele.find('[data-notify="icon"]');
								if (self.settings.icon_type.toLowerCase() === 'class') {
									$icon.removeClass(self.settings.content.icon).addClass(commands[cmd]);
								} else {
									if (!$icon.is('img')) {
										$icon.find('img');
									}
									$icon.attr('src', commands[cmd]);
								}
								break;
							case "progress":
								var newDelay = self.settings.delay - (self.settings.delay * (commands[cmd] / 100));
								this.$ele.data('notify-delay', newDelay);
								this.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', commands[cmd]).css('width', commands[cmd] + '%');
								break;
							case "url":
								this.$ele.find('[data-notify="url"]').attr('href', commands[cmd]);
								break;
							case "target":
								this.$ele.find('[data-notify="url"]').attr('target', commands[cmd]);
								break;
							default:
								this.$ele.find('[data-notify="' + cmd + '"]').html(commands[cmd]);
						}
					}
					var posX = this.$ele.outerHeight() + parseInt(self.settings.spacing) + parseInt(self.settings.offset.y);
					self.reposition(posX);
				},
				close: function () {
					self.close();
				}
			};

		},
		buildNotify: function () {
			var content = this.settings.content;
			this.$ele = $(String.format(this.settings.template, this.settings.type, content.title, content.message, content.url, content.target));
			this.$ele.attr('data-notify-position', this.settings.placement.from + '-' + this.settings.placement.align);
			if (!this.settings.allow_dismiss) {
				this.$ele.find('[data-notify="dismiss"]').css('display', 'none');
			}
			if ((this.settings.delay <= 0 && !this.settings.showProgressbar) || !this.settings.showProgressbar) {
				this.$ele.find('[data-notify="progressbar"]').remove();
			}
		},
		setIcon: function () {
    		
    		this.$ele.addClass('alert-with-icon');
    		
			if (this.settings.icon_type.toLowerCase() === 'class') {
				this.$ele.find('[data-notify="icon"]').addClass(this.settings.content.icon);
			} else {
				if (this.$ele.find('[data-notify="icon"]').is('img')) {
					this.$ele.find('[data-notify="icon"]').attr('src', this.settings.content.icon);
				} else {
					this.$ele.find('[data-notify="icon"]').append('<img src="' + this.settings.content.icon + '" alt="Notify Icon" />');
				}
			}
		},
		styleDismiss: function () {
			this.$ele.find('[data-notify="dismiss"]').css({
				position: 'absolute',
				right: '10px',
				top: '50%',
				marginTop: '-13px',
				zIndex: this.settings.z_index + 2
			});
		},
		styleURL: function () {
			this.$ele.find('[data-notify="url"]').css({
				backgroundImage: 'url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)',
				height: '100%',
				left: 0,
				position: 'absolute',
				top: 0,
				width: '100%',
				zIndex: this.settings.z_index + 1
			});
		},
		placement: function () {
			var self = this,
				offsetAmt = this.settings.offset.y,
				css = {
					display: 'inline-block',
					margin: '0px auto',
					position: this.settings.position ? this.settings.position : (this.settings.element === 'body' ? 'fixed' : 'absolute'),
					transition: 'all .5s ease-in-out',
					zIndex: this.settings.z_index
				},
				hasAnimation = false,
				settings = this.settings;

			$('[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])').each(function () {
				offsetAmt = Math.max(offsetAmt, parseInt($(this).css(settings.placement.from)) + parseInt($(this).outerHeight()) + parseInt(settings.spacing));
			});
			if (this.settings.newest_on_top === true) {
				offsetAmt = this.settings.offset.y;
			}
			css[this.settings.placement.from] = offsetAmt + 'px';

			switch (this.settings.placement.align) {
				case "left":
				case "right":
					css[this.settings.placement.align] = this.settings.offset.x + 'px';
					break;
				case "center":
					css.left = 0;
					css.right = 0;
					break;
			}
			this.$ele.css(css).addClass(this.settings.animate.enter);
			$.each(Array('webkit-', 'moz-', 'o-', 'ms-', ''), function (index, prefix) {
				self.$ele[0].style[prefix + 'AnimationIterationCount'] = 1;
			});

			$(this.settings.element).append(this.$ele);

			if (this.settings.newest_on_top === true) {
				offsetAmt = (parseInt(offsetAmt) + parseInt(this.settings.spacing)) + this.$ele.outerHeight();
				this.reposition(offsetAmt);
			}

			if ($.isFunction(self.settings.onShow)) {
				self.settings.onShow.call(this.$ele);
			}

			this.$ele.one(this.animations.start, function () {
				hasAnimation = true;
			}).one(this.animations.end, function () {
				if ($.isFunction(self.settings.onShown)) {
					self.settings.onShown.call(this);
				}
			});

			setTimeout(function () {
				if (!hasAnimation) {
					if ($.isFunction(self.settings.onShown)) {
						self.settings.onShown.call(this);
					}
				}
			}, 600);
		},
		bind: function () {
			var self = this;

			this.$ele.find('[data-notify="dismiss"]').on('click', function () {
				self.close();
			});

			this.$ele.mouseover(function () {
				$(this).data('data-hover', "true");
			}).mouseout(function () {
				$(this).data('data-hover', "false");
			});
			this.$ele.data('data-hover', "false");

			if (this.settings.delay > 0) {
				self.$ele.data('notify-delay', self.settings.delay);
				var timer = setInterval(function () {
					var delay = parseInt(self.$ele.data('notify-delay')) - self.settings.timer;
					if ((self.$ele.data('data-hover') === 'false' && self.settings.mouse_over === "pause") || self.settings.mouse_over != "pause") {
						var percent = ((self.settings.delay - delay) / self.settings.delay) * 100;
						self.$ele.data('notify-delay', delay);
						self.$ele.find('[data-notify="progressbar"] > div').attr('aria-valuenow', percent).css('width', percent + '%');
					}
					if (delay <= -(self.settings.timer)) {
						clearInterval(timer);
						self.close();
					}
				}, self.settings.timer);
			}
		},
		close: function () {
			var self = this,
				posX = parseInt(this.$ele.css(this.settings.placement.from)),
				hasAnimation = false;

			this.$ele.data('closing', 'true').addClass(this.settings.animate.exit);
			self.reposition(posX);

			if ($.isFunction(self.settings.onClose)) {
				self.settings.onClose.call(this.$ele);
			}

			this.$ele.one(this.animations.start, function () {
				hasAnimation = true;
			}).one(this.animations.end, function () {
				$(this).remove();
				if ($.isFunction(self.settings.onClosed)) {
					self.settings.onClosed.call(this);
				}
			});

			setTimeout(function () {
				if (!hasAnimation) {
					self.$ele.remove();
					if (self.settings.onClosed) {
						self.settings.onClosed(self.$ele);
					}
				}
			}, 600);
		},
		reposition: function (posX) {
			var self = this,
				notifies = '[data-notify-position="' + this.settings.placement.from + '-' + this.settings.placement.align + '"]:not([data-closing="true"])',
				$elements = this.$ele.nextAll(notifies);
			if (this.settings.newest_on_top === true) {
				$elements = this.$ele.prevAll(notifies);
			}
			$elements.each(function () {
				$(this).css(self.settings.placement.from, posX);
				posX = (parseInt(posX) + parseInt(self.settings.spacing)) + $(this).outerHeight();
			});
		}
	});

	$.notify = function (content, options) {
		var plugin = new Notify(this, content, options);
		return plugin.notify;
	};
	$.notifyDefaults = function (options) {
		defaults = $.extend(true, {}, defaults, options);
		return defaults;
	};
	$.notifyClose = function (command) {
		if (typeof command === "undefined" || command === "all") {
			$('[data-notify]').find('[data-notify="dismiss"]').trigger('click');
		} else {
			$('[data-notify-position="' + command + '"]').find('[data-notify="dismiss"]').trigger('click');
		}
	};

}));
/*
  *This is an opensource Bootstrap-select is a plugin that helps to turn standard bootstrap alerts into "growl" like notifications.
  *This code is taken from: https://www.creative-tim.com/product/light-bootstrap-dashboard#_=_   
    

     Creative Tim Modifications
     
     Lines: 239, 240 was changed from top: 5px to top: 50% and we added margin-top: -13px. In this way the close button will be aligned vertically 
     Line:242 - modified when the icon is set, we add the class "alert-with-icon", so there will be enough space for the icon.




*/

!function($) {
    var Selectpicker = function(element, options, e) {
        if (e ) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.$element = $(element);
        this.$newElement = null;
        this.button = null;

        //Merge defaults, options and data-attributes to make our options
        this.options = $.extend({}, $.fn.selectpicker.defaults, this.$element.data(), typeof options == 'object' && options);

        //If we have no title yet, check the attribute 'title' (this is missed by jq as its not a data-attribute
        if(this.options.title==null)
            this.options.title = this.$element.attr('title');

        //Expose public methods
        this.val = Selectpicker.prototype.val;
        this.render = Selectpicker.prototype.render;
        this.init();
    };

    Selectpicker.prototype = {

        constructor: Selectpicker,

        init: function (e) {
            var _this = this;
            this.$element.hide();
            this.multiple = this.$element.prop('multiple');


            var classList = this.$element.attr('class') !== undefined ? this.$element.attr('class').split(/\s+/) : '';
            var id = this.$element.attr('id');
            this.$element.after( this.createView() );
            this.$newElement = this.$element.next('.select');
            var select = this.$newElement;
            var menu = this.$newElement.find('.dropdown-menu');
            var menuArrow = this.$newElement.find('.dropdown-arrow');
            var menuA = menu.find('li > a');
            var liHeight = select.addClass('open').find('.dropdown-menu li > a').outerHeight();
            select.removeClass('open');
            var divHeight = menu.find('li .divider').outerHeight(true);
            var selectOffset_top = this.$newElement.offset().top;
            var size = 0;
            var menuHeight = 0;
            var selectHeight = this.$newElement.outerHeight();
            this.button = this.$newElement.find('> button');
            if (id !== undefined) {
                this.button.attr('id', id);
                $('label[for="' + id + '"]').click(function(){ select.find('button#'+id).focus(); })
            }
            for (var i = 0; i < classList.length; i++) {
                if(classList[i] != 'selectpicker') {
                    this.$newElement.addClass(classList[i]);
                }
            }
            //If we are multiple, then add the show-tick class by default
            if(this.multiple) {
                 this.$newElement.addClass('select-multiple');
            }
            this.button.addClass(this.options.style);
            menu.addClass(this.options.menuStyle);
            menuArrow.addClass(function() {
                if (_this.options.menuStyle) {
                    return _this.options.menuStyle.replace('dropdown-', 'dropdown-arrow-');
                }
            });
            this.checkDisabled();
            this.checkTabIndex();
            this.clickListener();
            var menuPadding = parseInt(menu.css('padding-top')) + parseInt(menu.css('padding-bottom')) + parseInt(menu.css('border-top-width')) + parseInt(menu.css('border-bottom-width'));
            if (this.options.size == 'auto') {
                
                // Creative Tim Changes: We changed the regular function made in bootstrap-select with this function so the getSize() will not be triggered one million times per second while you scroll.
                
                var getSize = debounce(function() {
                     var selectOffset_top_scroll = selectOffset_top - $(window).scrollTop();
                    var windowHeight = $(window).innerHeight();
                    var menuExtras = menuPadding + parseInt(menu.css('margin-top')) + parseInt(menu.css('margin-bottom')) + 2;
                    var selectOffset_bot = windowHeight - selectOffset_top_scroll - selectHeight - menuExtras;
                    menuHeight = selectOffset_bot;
                    if (select.hasClass('dropup')) {
                        menuHeight = selectOffset_top_scroll - menuExtras;
                    }
                    //limit menuHeight to 300px to have a smooth transition with cubic bezier on dropdown
                    if(menuHeight >= 300){
                        menuHeight = 300;
                    }

                    menu.css({'max-height' : menuHeight + 'px', 'overflow-y' : 'auto', 'min-height' : liHeight * 3 + 'px'});
                    
                }, 50);

                getSize;
                $(window).on('scroll', getSize);
                $(window).on('resize', getSize);
        
                if (window.MutationObserver) {
                    new MutationObserver(getSize).observe(this.$element.get(0), {
                        childList: true
                    });
                } else {
                    this.$element.bind('DOMNodeInserted', getSize);
                }
            } else if (this.options.size && this.options.size != 'auto' && menu.find('li').length > this.options.size) {
                var optIndex = menu.find("li > *").filter(':not(.divider)').slice(0,this.options.size).last().parent().index();
                var divLength = menu.find("li").slice(0,optIndex + 1).find('.divider').length;
                menuHeight = liHeight*this.options.size + divLength*divHeight + menuPadding;
                menu.css({'max-height' : menuHeight + 'px', 'overflow-y' : 'scroll'});
                //console.log('sunt in if');
            }

            // Listen for updates to the DOM and re render... (Use Mutation Observer when availiable)
            if (window.MutationObserver) {
                new MutationObserver($.proxy(this.reloadLi, this)).observe(this.$element.get(0), {
                    childList: true
                });
            } else {
                this.$element.bind('DOMNodeInserted', $.proxy(this.reloadLi, this));
            }

            this.render();
        },

        createDropdown: function() {
            var drop =
                "<div class='btn-group select'>" +                    
                    "<button class='btn dropdown-toggle clearfix' data-toggle='dropdown'>" +
                        "<span class='filter-option'></span>&nbsp;" +
                        "<span class='caret'></span>" +
                    "</button>" +
                    "<span class='dropdown-arrow'></span>" +
                    "<ul class='dropdown-menu' role='menu'>" +
                    "</ul>" +
                "</div>";

            return $(drop);
        },


        createView: function() {
            var $drop = this.createDropdown();
            var $li = this.createLi();
            $drop.find('ul').append($li);
            return $drop;
        },

        reloadLi: function() {
            //Remove all children.
            this.destroyLi();
            //Re build
            $li = this.createLi();
            this.$newElement.find('ul').append( $li );
            //render view
            this.render();
        },

        destroyLi:function() {
            this.$newElement.find('li').remove();
        },

        createLi: function() {

            var _this = this;
            var _li = [];
            var _liA = [];
            var _liHtml = '';

            this.$element.find('option').each(function(){
                _li.push($(this).text());
            });

            this.$element.find('option').each(function(index) {
                //Get the class and text for the option
                var optionClass = $(this).attr("class") !== undefined ? $(this).attr("class") : '';
               	var text =  $(this).text();
               	var subtext = $(this).data('subtext') !== undefined ? '<small class="muted">'+$(this).data('subtext')+'</small>' : '';

                //Append any subtext to the main text.
                text+=subtext;

                if ($(this).parent().is('optgroup') && $(this).data('divider') != true) {
                    if ($(this).index() == 0) {
                        //Get the opt group label
                        var label = $(this).parent().attr('label');
                        var labelSubtext = $(this).parent().data('subtext') !== undefined ? '<small class="muted">'+$(this).parent().data('subtext')+'</small>' : '';
                        label += labelSubtext;

                        if ($(this)[0].index != 0) {
                            _liA.push(
                                '<div class="divider"></div>'+
                                '<dt>'+label+'</dt>'+ 
                                _this.createA(text, "opt " + optionClass )
                                );
                        } else {
                            _liA.push(
                                '<dt>'+label+'</dt>'+ 
                                _this.createA(text, "opt " + optionClass ));
                        }
                    } else {
                         _liA.push( _this.createA(text, "opt " + optionClass )  );
                    }
                } else if ($(this).data('divider') == true) {
                    _liA.push('<div class="divider"></div>');
                } else if ($(this).data('hidden') == true) {
	                _liA.push('');
                } else {
                    _liA.push( _this.createA(text, optionClass ) );
                }
            });

            if (_li.length > 0) {
                for (var i = 0; i < _li.length; i++) {
                    var $option = this.$element.find('option').eq(i);
                    _liHtml += "<li rel=" + i + ">" + _liA[i] + "</li>";
                }
            }

            //If we dont have a selected item, and we dont have a title, select the first element so something is set in the button
            if(this.$element.find('option:selected').length==0 && !_this.options.title) {
                this.$element.find('option').eq(0).prop('selected', true).attr('selected', 'selected');
            }

            return $(_liHtml);
        },

        createA:function(test, classes) {
         return '<a tabindex="-1" href="#" class="'+classes+'">' +
                 '<span class="">' + test + '</span>' +
                 '</a>';

        },

         render:function() {
            var _this = this;

            //Set width of select
             if (this.options.width == 'auto') {
                 var ulWidth = this.$newElement.find('.dropdown-menu').css('width');
                 this.$newElement.css('width',ulWidth);
             } else if (this.options.width && this.options.width != 'auto') {
                 this.$newElement.css('width',this.options.width);
             }

            //Update the LI to match the SELECT
            this.$element.find('option').each(function(index) {
               _this.setDisabled(index, $(this).is(':disabled') || $(this).parent().is(':disabled') );
               _this.setSelected(index, $(this).is(':selected') );
            });



            var selectedItems = this.$element.find('option:selected').map(function(index,value) {
                if($(this).attr('title')!=undefined) {
                    return $(this).attr('title');
                } else {
                    return $(this).text();
                }
            }).toArray();

            //Convert all the values into a comma delimited string    
            var title = selectedItems.join(", ");

            //If this is multi select, and the selectText type is count, the show 1 of 2 selected etc..                    
            if(_this.multiple && _this.options.selectedTextFormat.indexOf('count') > -1) {
                var max = _this.options.selectedTextFormat.split(">");
                if( (max.length>1 && selectedItems.length > max[1]) || (max.length==1 && selectedItems.length>=2)) {
                    title = selectedItems.length +' of ' + this.$element.find('option').length + ' selected';
                }
             }  
            
            //If we dont have a title, then use the default, or if nothing is set at all, use the not selected text
            if(!title) {
                title = _this.options.title != undefined ? _this.options.title : _this.options.noneSelectedText;    
            }
            
            this.$element.next('.select').find('.filter-option').html( title );
	    },
	    
        
        
        setSelected:function(index, selected) {
            if(selected) {
                this.$newElement.find('li').eq(index).addClass('selected');
            } else {
                this.$newElement.find('li').eq(index).removeClass('selected');
            }
        },
        
        setDisabled:function(index, disabled) {
            if(disabled) {
                this.$newElement.find('li').eq(index).addClass('disabled');
            } else {
                this.$newElement.find('li').eq(index).removeClass('disabled');
            }
        },
       
        checkDisabled: function() {
            if (this.$element.is(':disabled')) {
                this.button.addClass('disabled');
                this.button.click(function(e) {
                    e.preventDefault();
                });
            }
        },
		
		checkTabIndex: function() {
			if (this.$element.is('[tabindex]')) {
				var tabindex = this.$element.attr("tabindex");
				this.button.attr('tabindex', tabindex);
			}
		},
		
		clickListener: function() {
            var _this = this;
            
            $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });
            
           
            
            this.$newElement.on('click', 'li a', function(e){
                var clickedIndex = $(this).parent().index(),
                    $this = $(this).parent(),
                    $select = $this.parents('.select');
                
                
                //Dont close on multi choice menu    
                if(_this.multiple) {
                    e.stopPropagation();
                }
                
                e.preventDefault();
                
                //Dont run if we have been disabled
                if ($select.prev('select').not(':disabled') && !$(this).parent().hasClass('disabled')){
                    //Deselect all others if not multi select box
                    if (!_this.multiple) {
                        $select.prev('select').find('option').removeAttr('selected');
                        $select.prev('select').find('option').eq(clickedIndex).prop('selected', true).attr('selected', 'selected');
                    } 
                    //Else toggle the one we have chosen if we are multi selet.
                    else {
                        var selected = $select.prev('select').find('option').eq(clickedIndex).prop('selected');
                        
                        if(selected) {
                            $select.prev('select').find('option').eq(clickedIndex).removeAttr('selected');
                        } else {
                            $select.prev('select').find('option').eq(clickedIndex).prop('selected', true).attr('selected', 'selected');
                        }
                    }
                    
                    
                    $select.find('.filter-option').html($this.text());
                    $select.find('button').focus();

                    // Trigger select 'change'
                    $select.prev('select').trigger('change');
                }

            });
            
           this.$newElement.on('click', 'li.disabled a, li dt, li .divider', function(e) {
                e.preventDefault();
                e.stopPropagation();
                $select = $(this).parent().parents('.select');
                $select.find('button').focus();
            });

            this.$element.on('change', function(e) {
                _this.render();
            });
        },
        
        val:function(value) {
            
            if(value!=undefined) {
                this.$element.val( value );
                
                this.$element.trigger('change');
                return this.$element;
            } else {
                return this.$element.val();
            }
        }

    };

    $.fn.selectpicker = function(option, event) {
       //get the args of the outer function..
       var args = arguments;
       var value;
       var chain = this.each(function () {
            var $this = $(this),
                data = $this.data('selectpicker'),
                options = typeof option == 'object' && option;
            
            if (!data) {
            	$this.data('selectpicker', (data = new Selectpicker(this, options, event)));
            } else {
            	for(var i in option) {
            		data[i]=option[i];
            	}
            }
            
            if (typeof option == 'string') {
                //Copy the value of option, as once we shift the arguments
                //it also shifts the value of option.
                property = option;
                if(data[property] instanceof Function) {
                    [].shift.apply(args);
                    value = data[property].apply(data, args);
                } else {
                    value = data[property];
                }
            }
        });
        
        if(value!=undefined) {
            return value;
        } else {
            return chain;
        } 
    };

    $.fn.selectpicker.defaults = {
        style: null,
        size: 'auto',
        title: null,
        selectedTextFormat : 'values',
        noneSelectedText : 'Nothing selected',
        width: null,
        menuStyle: null,
        toggleSize: null
    }

}(window.jQuery);
/* 
 *This is an opensource javascript chart library
 * the code is taken from:
 * Chartist.js 0.11.0
 * Copyright © 2017 Gion Kunz
 * Free to use under either the WTFPL license or the MIT license.
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-WTFPL
 * https://raw.githubusercontent.com/gionkunz/chartist-js/master/LICENSE-MIT
 */


!function(a,b){"function"==typeof define&&define.amd?define("Chartist",[],function(){return a.Chartist=b()}):"object"==typeof module&&module.exports?module.exports=b():a.Chartist=b()}(this,function(){var a={version:"0.11.0"};return function(a,b,c){"use strict";c.namespaces={svg:"http://www.w3.org/2000/svg",xmlns:"http://www.w3.org/2000/xmlns/",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",ct:"http://gionkunz.github.com/chartist-js/ct"},c.noop=function(a){return a},c.alphaNumerate=function(a){return String.fromCharCode(97+a%26)},c.extend=function(a){var b,d,e;for(a=a||{},b=1;b<arguments.length;b++){d=arguments[b];for(var f in d)e=d[f],"object"!=typeof e||null===e||e instanceof Array?a[f]=e:a[f]=c.extend(a[f],e)}return a},c.replaceAll=function(a,b,c){return a.replace(new RegExp(b,"g"),c)},c.ensureUnit=function(a,b){return"number"==typeof a&&(a+=b),a},c.quantity=function(a){if("string"==typeof a){var b=/^(\d+)\s*(.*)$/g.exec(a);return{value:+b[1],unit:b[2]||void 0}}return{value:a}},c.querySelector=function(a){return a instanceof Node?a:b.querySelector(a)},c.times=function(a){return Array.apply(null,new Array(a))},c.sum=function(a,b){return a+(b?b:0)},c.mapMultiply=function(a){return function(b){return b*a}},c.mapAdd=function(a){return function(b){return b+a}},c.serialMap=function(a,b){var d=[],e=Math.max.apply(null,a.map(function(a){return a.length}));return c.times(e).forEach(function(c,e){var f=a.map(function(a){return a[e]});d[e]=b.apply(null,f)}),d},c.roundWithPrecision=function(a,b){var d=Math.pow(10,b||c.precision);return Math.round(a*d)/d},c.precision=8,c.escapingMap={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"},c.serialize=function(a){return null===a||void 0===a?a:("number"==typeof a?a=""+a:"object"==typeof a&&(a=JSON.stringify({data:a})),Object.keys(c.escapingMap).reduce(function(a,b){return c.replaceAll(a,b,c.escapingMap[b])},a))},c.deserialize=function(a){if("string"!=typeof a)return a;a=Object.keys(c.escapingMap).reduce(function(a,b){return c.replaceAll(a,c.escapingMap[b],b)},a);try{a=JSON.parse(a),a=void 0!==a.data?a.data:a}catch(b){}return a},c.createSvg=function(a,b,d,e){var f;return b=b||"100%",d=d||"100%",Array.prototype.slice.call(a.querySelectorAll("svg")).filter(function(a){return a.getAttributeNS(c.namespaces.xmlns,"ct")}).forEach(function(b){a.removeChild(b)}),f=new c.Svg("svg").attr({width:b,height:d}).addClass(e),f._node.style.width=b,f._node.style.height=d,a.appendChild(f._node),f},c.normalizeData=function(a,b,d){var e,f={raw:a,normalized:{}};return f.normalized.series=c.getDataArray({series:a.series||[]},b,d),e=f.normalized.series.every(function(a){return a instanceof Array})?Math.max.apply(null,f.normalized.series.map(function(a){return a.length})):f.normalized.series.length,f.normalized.labels=(a.labels||[]).slice(),Array.prototype.push.apply(f.normalized.labels,c.times(Math.max(0,e-f.normalized.labels.length)).map(function(){return""})),b&&c.reverseData(f.normalized),f},c.safeHasProperty=function(a,b){return null!==a&&"object"==typeof a&&a.hasOwnProperty(b)},c.isDataHoleValue=function(a){return null===a||void 0===a||"number"==typeof a&&isNaN(a)},c.reverseData=function(a){a.labels.reverse(),a.series.reverse();for(var b=0;b<a.series.length;b++)"object"==typeof a.series[b]&&void 0!==a.series[b].data?a.series[b].data.reverse():a.series[b]instanceof Array&&a.series[b].reverse()},c.getDataArray=function(a,b,d){function e(a){if(c.safeHasProperty(a,"value"))return e(a.value);if(c.safeHasProperty(a,"data"))return e(a.data);if(a instanceof Array)return a.map(e);if(!c.isDataHoleValue(a)){if(d){var b={};return"string"==typeof d?b[d]=c.getNumberOrUndefined(a):b.y=c.getNumberOrUndefined(a),b.x=a.hasOwnProperty("x")?c.getNumberOrUndefined(a.x):b.x,b.y=a.hasOwnProperty("y")?c.getNumberOrUndefined(a.y):b.y,b}return c.getNumberOrUndefined(a)}}return a.series.map(e)},c.normalizePadding=function(a,b){return b=b||0,"number"==typeof a?{top:a,right:a,bottom:a,left:a}:{top:"number"==typeof a.top?a.top:b,right:"number"==typeof a.right?a.right:b,bottom:"number"==typeof a.bottom?a.bottom:b,left:"number"==typeof a.left?a.left:b}},c.getMetaData=function(a,b){var c=a.data?a.data[b]:a[b];return c?c.meta:void 0},c.orderOfMagnitude=function(a){return Math.floor(Math.log(Math.abs(a))/Math.LN10)},c.projectLength=function(a,b,c){return b/c.range*a},c.getAvailableHeight=function(a,b){return Math.max((c.quantity(b.height).value||a.height())-(b.chartPadding.top+b.chartPadding.bottom)-b.axisX.offset,0)},c.getHighLow=function(a,b,d){function e(a){if(void 0!==a)if(a instanceof Array)for(var b=0;b<a.length;b++)e(a[b]);else{var c=d?+a[d]:+a;g&&c>f.high&&(f.high=c),h&&c<f.low&&(f.low=c)}}b=c.extend({},b,d?b["axis"+d.toUpperCase()]:{});var f={high:void 0===b.high?-Number.MAX_VALUE:+b.high,low:void 0===b.low?Number.MAX_VALUE:+b.low},g=void 0===b.high,h=void 0===b.low;return(g||h)&&e(a),(b.referenceValue||0===b.referenceValue)&&(f.high=Math.max(b.referenceValue,f.high),f.low=Math.min(b.referenceValue,f.low)),f.high<=f.low&&(0===f.low?f.high=1:f.low<0?f.high=0:f.high>0?f.low=0:(f.high=1,f.low=0)),f},c.isNumeric=function(a){return null!==a&&isFinite(a)},c.isFalseyButZero=function(a){return!a&&0!==a},c.getNumberOrUndefined=function(a){return c.isNumeric(a)?+a:void 0},c.isMultiValue=function(a){return"object"==typeof a&&("x"in a||"y"in a)},c.getMultiValue=function(a,b){return c.isMultiValue(a)?c.getNumberOrUndefined(a[b||"y"]):c.getNumberOrUndefined(a)},c.rho=function(a){function b(a,c){return a%c===0?c:b(c,a%c)}function c(a){return a*a+1}if(1===a)return a;var d,e=2,f=2;if(a%2===0)return 2;do e=c(e)%a,f=c(c(f))%a,d=b(Math.abs(e-f),a);while(1===d);return d},c.getBounds=function(a,b,d,e){function f(a,b){return a===(a+=b)&&(a*=1+(b>0?o:-o)),a}var g,h,i,j=0,k={high:b.high,low:b.low};k.valueRange=k.high-k.low,k.oom=c.orderOfMagnitude(k.valueRange),k.step=Math.pow(10,k.oom),k.min=Math.floor(k.low/k.step)*k.step,k.max=Math.ceil(k.high/k.step)*k.step,k.range=k.max-k.min,k.numberOfSteps=Math.round(k.range/k.step);var l=c.projectLength(a,k.step,k),m=l<d,n=e?c.rho(k.range):0;if(e&&c.projectLength(a,1,k)>=d)k.step=1;else if(e&&n<k.step&&c.projectLength(a,n,k)>=d)k.step=n;else for(;;){if(m&&c.projectLength(a,k.step,k)<=d)k.step*=2;else{if(m||!(c.projectLength(a,k.step/2,k)>=d))break;if(k.step/=2,e&&k.step%1!==0){k.step*=2;break}}if(j++>1e3)throw new Error("Exceeded maximum number of iterations while optimizing scale step!")}var o=2.221e-16;for(k.step=Math.max(k.step,o),h=k.min,i=k.max;h+k.step<=k.low;)h=f(h,k.step);for(;i-k.step>=k.high;)i=f(i,-k.step);k.min=h,k.max=i,k.range=k.max-k.min;var p=[];for(g=k.min;g<=k.max;g=f(g,k.step)){var q=c.roundWithPrecision(g);q!==p[p.length-1]&&p.push(q)}return k.values=p,k},c.polarToCartesian=function(a,b,c,d){var e=(d-90)*Math.PI/180;return{x:a+c*Math.cos(e),y:b+c*Math.sin(e)}},c.createChartRect=function(a,b,d){var e=!(!b.axisX&&!b.axisY),f=e?b.axisY.offset:0,g=e?b.axisX.offset:0,h=a.width()||c.quantity(b.width).value||0,i=a.height()||c.quantity(b.height).value||0,j=c.normalizePadding(b.chartPadding,d);h=Math.max(h,f+j.left+j.right),i=Math.max(i,g+j.top+j.bottom);var k={padding:j,width:function(){return this.x2-this.x1},height:function(){return this.y1-this.y2}};return e?("start"===b.axisX.position?(k.y2=j.top+g,k.y1=Math.max(i-j.bottom,k.y2+1)):(k.y2=j.top,k.y1=Math.max(i-j.bottom-g,k.y2+1)),"start"===b.axisY.position?(k.x1=j.left+f,k.x2=Math.max(h-j.right,k.x1+1)):(k.x1=j.left,k.x2=Math.max(h-j.right-f,k.x1+1))):(k.x1=j.left,k.x2=Math.max(h-j.right,k.x1+1),k.y2=j.top,k.y1=Math.max(i-j.bottom,k.y2+1)),k},c.createGrid=function(a,b,d,e,f,g,h,i){var j={};j[d.units.pos+"1"]=a,j[d.units.pos+"2"]=a,j[d.counterUnits.pos+"1"]=e,j[d.counterUnits.pos+"2"]=e+f;var k=g.elem("line",j,h.join(" "));i.emit("draw",c.extend({type:"grid",axis:d,index:b,group:g,element:k},j))},c.createGridBackground=function(a,b,c,d){var e=a.elem("rect",{x:b.x1,y:b.y2,width:b.width(),height:b.height()},c,!0);d.emit("draw",{type:"gridBackground",group:a,element:e})},c.createLabel=function(a,d,e,f,g,h,i,j,k,l,m){var n,o={};if(o[g.units.pos]=a+i[g.units.pos],o[g.counterUnits.pos]=i[g.counterUnits.pos],o[g.units.len]=d,o[g.counterUnits.len]=Math.max(0,h-10),l){var p=b.createElement("span");p.className=k.join(" "),p.setAttribute("xmlns",c.namespaces.xhtml),p.innerText=f[e],p.style[g.units.len]=Math.round(o[g.units.len])+"px",p.style[g.counterUnits.len]=Math.round(o[g.counterUnits.len])+"px",n=j.foreignObject(p,c.extend({style:"overflow: visible;"},o))}else n=j.elem("text",o,k.join(" ")).text(f[e]);m.emit("draw",c.extend({type:"label",axis:g,index:e,group:j,element:n,text:f[e]},o))},c.getSeriesOption=function(a,b,c){if(a.name&&b.series&&b.series[a.name]){var d=b.series[a.name];return d.hasOwnProperty(c)?d[c]:b[c]}return b[c]},c.optionsProvider=function(b,d,e){function f(b){var f=h;if(h=c.extend({},j),d)for(i=0;i<d.length;i++){var g=a.matchMedia(d[i][0]);g.matches&&(h=c.extend(h,d[i][1]))}e&&b&&e.emit("optionsChanged",{previousOptions:f,currentOptions:h})}function g(){k.forEach(function(a){a.removeListener(f)})}var h,i,j=c.extend({},b),k=[];if(!a.matchMedia)throw"window.matchMedia not found! Make sure you're using a polyfill.";if(d)for(i=0;i<d.length;i++){var l=a.matchMedia(d[i][0]);l.addListener(f),k.push(l)}return f(),{removeMediaQueryListeners:g,getCurrentOptions:function(){return c.extend({},h)}}},c.splitIntoSegments=function(a,b,d){var e={increasingX:!1,fillHoles:!1};d=c.extend({},e,d);for(var f=[],g=!0,h=0;h<a.length;h+=2)void 0===c.getMultiValue(b[h/2].value)?d.fillHoles||(g=!0):(d.increasingX&&h>=2&&a[h]<=a[h-2]&&(g=!0),g&&(f.push({pathCoordinates:[],valueData:[]}),g=!1),f[f.length-1].pathCoordinates.push(a[h],a[h+1]),f[f.length-1].valueData.push(b[h/2]));return f}}(window,document,a),function(a,b,c){"use strict";c.Interpolation={},c.Interpolation.none=function(a){var b={fillHoles:!1};return a=c.extend({},b,a),function(b,d){for(var e=new c.Svg.Path,f=!0,g=0;g<b.length;g+=2){var h=b[g],i=b[g+1],j=d[g/2];void 0!==c.getMultiValue(j.value)?(f?e.move(h,i,!1,j):e.line(h,i,!1,j),f=!1):a.fillHoles||(f=!0)}return e}},c.Interpolation.simple=function(a){var b={divisor:2,fillHoles:!1};a=c.extend({},b,a);var d=1/Math.max(1,a.divisor);return function(b,e){for(var f,g,h,i=new c.Svg.Path,j=0;j<b.length;j+=2){var k=b[j],l=b[j+1],m=(k-f)*d,n=e[j/2];void 0!==n.value?(void 0===h?i.move(k,l,!1,n):i.curve(f+m,g,k-m,l,k,l,!1,n),f=k,g=l,h=n):a.fillHoles||(f=k=h=void 0)}return i}},c.Interpolation.cardinal=function(a){var b={tension:1,fillHoles:!1};a=c.extend({},b,a);var d=Math.min(1,Math.max(0,a.tension)),e=1-d;return function f(b,g){var h=c.splitIntoSegments(b,g,{fillHoles:a.fillHoles});if(h.length){if(h.length>1){var i=[];return h.forEach(function(a){i.push(f(a.pathCoordinates,a.valueData))}),c.Svg.Path.join(i)}if(b=h[0].pathCoordinates,g=h[0].valueData,b.length<=4)return c.Interpolation.none()(b,g);for(var j,k=(new c.Svg.Path).move(b[0],b[1],!1,g[0]),l=0,m=b.length;m-2*!j>l;l+=2){var n=[{x:+b[l-2],y:+b[l-1]},{x:+b[l],y:+b[l+1]},{x:+b[l+2],y:+b[l+3]},{x:+b[l+4],y:+b[l+5]}];j?l?m-4===l?n[3]={x:+b[0],y:+b[1]}:m-2===l&&(n[2]={x:+b[0],y:+b[1]},n[3]={x:+b[2],y:+b[3]}):n[0]={x:+b[m-2],y:+b[m-1]}:m-4===l?n[3]=n[2]:l||(n[0]={x:+b[l],y:+b[l+1]}),k.curve(d*(-n[0].x+6*n[1].x+n[2].x)/6+e*n[2].x,d*(-n[0].y+6*n[1].y+n[2].y)/6+e*n[2].y,d*(n[1].x+6*n[2].x-n[3].x)/6+e*n[2].x,d*(n[1].y+6*n[2].y-n[3].y)/6+e*n[2].y,n[2].x,n[2].y,!1,g[(l+2)/2])}return k}return c.Interpolation.none()([])}},c.Interpolation.monotoneCubic=function(a){var b={fillHoles:!1};return a=c.extend({},b,a),function d(b,e){var f=c.splitIntoSegments(b,e,{fillHoles:a.fillHoles,increasingX:!0});if(f.length){if(f.length>1){var g=[];return f.forEach(function(a){g.push(d(a.pathCoordinates,a.valueData))}),c.Svg.Path.join(g)}if(b=f[0].pathCoordinates,e=f[0].valueData,b.length<=4)return c.Interpolation.none()(b,e);var h,i,j=[],k=[],l=b.length/2,m=[],n=[],o=[],p=[];for(h=0;h<l;h++)j[h]=b[2*h],k[h]=b[2*h+1];for(h=0;h<l-1;h++)o[h]=k[h+1]-k[h],p[h]=j[h+1]-j[h],n[h]=o[h]/p[h];for(m[0]=n[0],m[l-1]=n[l-2],h=1;h<l-1;h++)0===n[h]||0===n[h-1]||n[h-1]>0!=n[h]>0?m[h]=0:(m[h]=3*(p[h-1]+p[h])/((2*p[h]+p[h-1])/n[h-1]+(p[h]+2*p[h-1])/n[h]),isFinite(m[h])||(m[h]=0));for(i=(new c.Svg.Path).move(j[0],k[0],!1,e[0]),h=0;h<l-1;h++)i.curve(j[h]+p[h]/3,k[h]+m[h]*p[h]/3,j[h+1]-p[h]/3,k[h+1]-m[h+1]*p[h]/3,j[h+1],k[h+1],!1,e[h+1]);return i}return c.Interpolation.none()([])}},c.Interpolation.step=function(a){var b={postpone:!0,fillHoles:!1};return a=c.extend({},b,a),function(b,d){for(var e,f,g,h=new c.Svg.Path,i=0;i<b.length;i+=2){var j=b[i],k=b[i+1],l=d[i/2];void 0!==l.value?(void 0===g?h.move(j,k,!1,l):(a.postpone?h.line(j,f,!1,g):h.line(e,k,!1,l),h.line(j,k,!1,l)),e=j,f=k,g=l):a.fillHoles||(e=f=g=void 0)}return h}}}(window,document,a),function(a,b,c){"use strict";c.EventEmitter=function(){function a(a,b){d[a]=d[a]||[],d[a].push(b)}function b(a,b){d[a]&&(b?(d[a].splice(d[a].indexOf(b),1),0===d[a].length&&delete d[a]):delete d[a])}function c(a,b){d[a]&&d[a].forEach(function(a){a(b)}),d["*"]&&d["*"].forEach(function(c){c(a,b)})}var d=[];return{addEventHandler:a,removeEventHandler:b,emit:c}}}(window,document,a),function(a,b,c){"use strict";function d(a){var b=[];if(a.length)for(var c=0;c<a.length;c++)b.push(a[c]);return b}function e(a,b){var d=b||this.prototype||c.Class,e=Object.create(d);c.Class.cloneDefinitions(e,a);var f=function(){var a,b=e.constructor||function(){};return a=this===c?Object.create(e):this,b.apply(a,Array.prototype.slice.call(arguments,0)),a};return f.prototype=e,f["super"]=d,f.extend=this.extend,f}function f(){var a=d(arguments),b=a[0];return a.splice(1,a.length-1).forEach(function(a){Object.getOwnPropertyNames(a).forEach(function(c){delete b[c],Object.defineProperty(b,c,Object.getOwnPropertyDescriptor(a,c))})}),b}c.Class={extend:e,cloneDefinitions:f}}(window,document,a),function(a,b,c){"use strict";function d(a,b,d){return a&&(this.data=a||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.eventEmitter.emit("data",{type:"update",data:this.data})),b&&(this.options=c.extend({},d?this.options:this.defaultOptions,b),this.initializeTimeoutId||(this.optionsProvider.removeMediaQueryListeners(),this.optionsProvider=c.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter))),this.initializeTimeoutId||this.createChart(this.optionsProvider.getCurrentOptions()),this}function e(){return this.initializeTimeoutId?a.clearTimeout(this.initializeTimeoutId):(a.removeEventListener("resize",this.resizeListener),this.optionsProvider.removeMediaQueryListeners()),this}function f(a,b){return this.eventEmitter.addEventHandler(a,b),this}function g(a,b){return this.eventEmitter.removeEventHandler(a,b),this}function h(){a.addEventListener("resize",this.resizeListener),this.optionsProvider=c.optionsProvider(this.options,this.responsiveOptions,this.eventEmitter),this.eventEmitter.addEventHandler("optionsChanged",function(){this.update()}.bind(this)),this.options.plugins&&this.options.plugins.forEach(function(a){a instanceof Array?a[0](this,a[1]):a(this)}.bind(this)),this.eventEmitter.emit("data",{type:"initial",data:this.data}),this.createChart(this.optionsProvider.getCurrentOptions()),this.initializeTimeoutId=void 0}function i(a,b,d,e,f){this.container=c.querySelector(a),this.data=b||{},this.data.labels=this.data.labels||[],this.data.series=this.data.series||[],this.defaultOptions=d,this.options=e,this.responsiveOptions=f,this.eventEmitter=c.EventEmitter(),this.supportsForeignObject=c.Svg.isSupported("Extensibility"),this.supportsAnimations=c.Svg.isSupported("AnimationEventsAttribute"),this.resizeListener=function(){this.update()}.bind(this),this.container&&(this.container.__chartist__&&this.container.__chartist__.detach(),this.container.__chartist__=this),this.initializeTimeoutId=setTimeout(h.bind(this),0)}c.Base=c.Class.extend({constructor:i,optionsProvider:void 0,container:void 0,svg:void 0,eventEmitter:void 0,createChart:function(){throw new Error("Base chart type can't be instantiated!")},update:d,detach:e,on:f,off:g,version:c.version,supportsForeignObject:!1})}(window,document,a),function(a,b,c){"use strict";function d(a,d,e,f,g){a instanceof Element?this._node=a:(this._node=b.createElementNS(c.namespaces.svg,a),"svg"===a&&this.attr({"xmlns:ct":c.namespaces.ct})),d&&this.attr(d),e&&this.addClass(e),f&&(g&&f._node.firstChild?f._node.insertBefore(this._node,f._node.firstChild):f._node.appendChild(this._node))}function e(a,b){return"string"==typeof a?b?this._node.getAttributeNS(b,a):this._node.getAttribute(a):(Object.keys(a).forEach(function(b){if(void 0!==a[b])if(b.indexOf(":")!==-1){var d=b.split(":");this._node.setAttributeNS(c.namespaces[d[0]],b,a[b])}else this._node.setAttribute(b,a[b])}.bind(this)),this)}function f(a,b,d,e){return new c.Svg(a,b,d,this,e)}function g(){return this._node.parentNode instanceof SVGElement?new c.Svg(this._node.parentNode):null}function h(){for(var a=this._node;"svg"!==a.nodeName;)a=a.parentNode;return new c.Svg(a)}function i(a){var b=this._node.querySelector(a);return b?new c.Svg(b):null}function j(a){var b=this._node.querySelectorAll(a);return b.length?new c.Svg.List(b):null}function k(){return this._node}function l(a,d,e,f){if("string"==typeof a){var g=b.createElement("div");g.innerHTML=a,a=g.firstChild}a.setAttribute("xmlns",c.namespaces.xmlns);var h=this.elem("foreignObject",d,e,f);return h._node.appendChild(a),h}function m(a){return this._node.appendChild(b.createTextNode(a)),this}function n(){for(;this._node.firstChild;)this._node.removeChild(this._node.firstChild);return this}function o(){return this._node.parentNode.removeChild(this._node),this.parent()}function p(a){return this._node.parentNode.replaceChild(a._node,this._node),a}function q(a,b){return b&&this._node.firstChild?this._node.insertBefore(a._node,this._node.firstChild):this._node.appendChild(a._node),this}function r(){return this._node.getAttribute("class")?this._node.getAttribute("class").trim().split(/\s+/):[]}function s(a){return this._node.setAttribute("class",this.classes(this._node).concat(a.trim().split(/\s+/)).filter(function(a,b,c){return c.indexOf(a)===b}).join(" ")),this}function t(a){var b=a.trim().split(/\s+/);return this._node.setAttribute("class",this.classes(this._node).filter(function(a){return b.indexOf(a)===-1}).join(" ")),this}function u(){return this._node.setAttribute("class",""),this}function v(){return this._node.getBoundingClientRect().height}function w(){return this._node.getBoundingClientRect().width}function x(a,b,d){return void 0===b&&(b=!0),Object.keys(a).forEach(function(e){function f(a,b){var f,g,h,i={};a.easing&&(h=a.easing instanceof Array?a.easing:c.Svg.Easing[a.easing],delete a.easing),a.begin=c.ensureUnit(a.begin,"ms"),a.dur=c.ensureUnit(a.dur,"ms"),h&&(a.calcMode="spline",a.keySplines=h.join(" "),a.keyTimes="0;1"),b&&(a.fill="freeze",i[e]=a.from,this.attr(i),g=c.quantity(a.begin||0).value,a.begin="indefinite"),f=this.elem("animate",c.extend({attributeName:e},a)),b&&setTimeout(function(){try{f._node.beginElement()}catch(b){i[e]=a.to,this.attr(i),f.remove()}}.bind(this),g),d&&f._node.addEventListener("beginEvent",function(){d.emit("animationBegin",{element:this,animate:f._node,params:a})}.bind(this)),f._node.addEventListener("endEvent",function(){d&&d.emit("animationEnd",{element:this,animate:f._node,params:a}),b&&(i[e]=a.to,this.attr(i),f.remove())}.bind(this))}a[e]instanceof Array?a[e].forEach(function(a){f.bind(this)(a,!1)}.bind(this)):f.bind(this)(a[e],b)}.bind(this)),this}function y(a){var b=this;this.svgElements=[];for(var d=0;d<a.length;d++)this.svgElements.push(new c.Svg(a[d]));Object.keys(c.Svg.prototype).filter(function(a){return["constructor","parent","querySelector","querySelectorAll","replace","append","classes","height","width"].indexOf(a)===-1}).forEach(function(a){b[a]=function(){var d=Array.prototype.slice.call(arguments,0);return b.svgElements.forEach(function(b){c.Svg.prototype[a].apply(b,d)}),b}})}c.Svg=c.Class.extend({constructor:d,attr:e,elem:f,parent:g,root:h,querySelector:i,querySelectorAll:j,getNode:k,foreignObject:l,text:m,empty:n,remove:o,replace:p,append:q,classes:r,addClass:s,removeClass:t,removeAllClasses:u,height:v,width:w,animate:x}),c.Svg.isSupported=function(a){return b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#"+a,"1.1")};var z={easeInSine:[.47,0,.745,.715],easeOutSine:[.39,.575,.565,1],easeInOutSine:[.445,.05,.55,.95],easeInQuad:[.55,.085,.68,.53],easeOutQuad:[.25,.46,.45,.94],easeInOutQuad:[.455,.03,.515,.955],easeInCubic:[.55,.055,.675,.19],easeOutCubic:[.215,.61,.355,1],easeInOutCubic:[.645,.045,.355,1],easeInQuart:[.895,.03,.685,.22],easeOutQuart:[.165,.84,.44,1],easeInOutQuart:[.77,0,.175,1],easeInQuint:[.755,.05,.855,.06],easeOutQuint:[.23,1,.32,1],easeInOutQuint:[.86,0,.07,1],easeInExpo:[.95,.05,.795,.035],easeOutExpo:[.19,1,.22,1],easeInOutExpo:[1,0,0,1],easeInCirc:[.6,.04,.98,.335],easeOutCirc:[.075,.82,.165,1],easeInOutCirc:[.785,.135,.15,.86],easeInBack:[.6,-.28,.735,.045],easeOutBack:[.175,.885,.32,1.275],easeInOutBack:[.68,-.55,.265,1.55]};c.Svg.Easing=z,c.Svg.List=c.Class.extend({constructor:y})}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e,f,g){var h=c.extend({command:f?a.toLowerCase():a.toUpperCase()},b,g?{data:g}:{});d.splice(e,0,h)}function e(a,b){a.forEach(function(c,d){u[c.command.toLowerCase()].forEach(function(e,f){b(c,e,d,f,a)})})}function f(a,b){this.pathElements=[],this.pos=0,this.close=a,this.options=c.extend({},v,b)}function g(a){return void 0!==a?(this.pos=Math.max(0,Math.min(this.pathElements.length,a)),this):this.pos}function h(a){return this.pathElements.splice(this.pos,a),this}function i(a,b,c,e){return d("M",{x:+a,y:+b},this.pathElements,this.pos++,c,e),this}function j(a,b,c,e){return d("L",{x:+a,y:+b},this.pathElements,this.pos++,c,e),this}function k(a,b,c,e,f,g,h,i){return d("C",{x1:+a,y1:+b,x2:+c,y2:+e,x:+f,y:+g},this.pathElements,this.pos++,h,i),this}function l(a,b,c,e,f,g,h,i,j){return d("A",{rx:+a,ry:+b,xAr:+c,lAf:+e,sf:+f,x:+g,y:+h},this.pathElements,this.pos++,i,j),this}function m(a){var b=a.replace(/([A-Za-z])([0-9])/g,"$1 $2").replace(/([0-9])([A-Za-z])/g,"$1 $2").split(/[\s,]+/).reduce(function(a,b){return b.match(/[A-Za-z]/)&&a.push([]),a[a.length-1].push(b),a},[]);"Z"===b[b.length-1][0].toUpperCase()&&b.pop();var d=b.map(function(a){var b=a.shift(),d=u[b.toLowerCase()];return c.extend({command:b},d.reduce(function(b,c,d){return b[c]=+a[d],b},{}))}),e=[this.pos,0];return Array.prototype.push.apply(e,d),Array.prototype.splice.apply(this.pathElements,e),this.pos+=d.length,this}function n(){var a=Math.pow(10,this.options.accuracy);return this.pathElements.reduce(function(b,c){var d=u[c.command.toLowerCase()].map(function(b){return this.options.accuracy?Math.round(c[b]*a)/a:c[b]}.bind(this));return b+c.command+d.join(",")}.bind(this),"")+(this.close?"Z":"")}function o(a,b){return e(this.pathElements,function(c,d){c[d]*="x"===d[0]?a:b}),this}function p(a,b){return e(this.pathElements,function(c,d){c[d]+="x"===d[0]?a:b}),this}function q(a){return e(this.pathElements,function(b,c,d,e,f){var g=a(b,c,d,e,f);(g||0===g)&&(b[c]=g)}),this}function r(a){var b=new c.Svg.Path(a||this.close);return b.pos=this.pos,b.pathElements=this.pathElements.slice().map(function(a){return c.extend({},a)}),b.options=c.extend({},this.options),b}function s(a){var b=[new c.Svg.Path];return this.pathElements.forEach(function(d){d.command===a.toUpperCase()&&0!==b[b.length-1].pathElements.length&&b.push(new c.Svg.Path),b[b.length-1].pathElements.push(d)}),b}function t(a,b,d){for(var e=new c.Svg.Path(b,d),f=0;f<a.length;f++)for(var g=a[f],h=0;h<g.pathElements.length;h++)e.pathElements.push(g.pathElements[h]);return e}var u={m:["x","y"],l:["x","y"],c:["x1","y1","x2","y2","x","y"],a:["rx","ry","xAr","lAf","sf","x","y"]},v={accuracy:3};c.Svg.Path=c.Class.extend({constructor:f,position:g,remove:h,move:i,line:j,curve:k,arc:l,scale:o,translate:p,transform:q,parse:m,stringify:n,clone:r,splitByCommand:s}),c.Svg.Path.elementDescriptions=u,c.Svg.Path.join=t}(window,document,a),function(a,b,c){"use strict";function d(a,b,c,d){this.units=a,this.counterUnits=a===f.x?f.y:f.x,this.chartRect=b,this.axisLength=b[a.rectEnd]-b[a.rectStart],this.gridOffset=b[a.rectOffset],this.ticks=c,this.options=d}function e(a,b,d,e,f){var g=e["axis"+this.units.pos.toUpperCase()],h=this.ticks.map(this.projectValue.bind(this)),i=this.ticks.map(g.labelInterpolationFnc);h.forEach(function(j,k){var l,m={x:0,y:0};l=h[k+1]?h[k+1]-j:Math.max(this.axisLength-j,30),c.isFalseyButZero(i[k])&&""!==i[k]||("x"===this.units.pos?(j=this.chartRect.x1+j,m.x=e.axisX.labelOffset.x,"start"===e.axisX.position?m.y=this.chartRect.padding.top+e.axisX.labelOffset.y+(d?5:20):m.y=this.chartRect.y1+e.axisX.labelOffset.y+(d?5:20)):(j=this.chartRect.y1-j,m.y=e.axisY.labelOffset.y-(d?l:0),"start"===e.axisY.position?m.x=d?this.chartRect.padding.left+e.axisY.labelOffset.x:this.chartRect.x1-10:m.x=this.chartRect.x2+e.axisY.labelOffset.x+10),g.showGrid&&c.createGrid(j,k,this,this.gridOffset,this.chartRect[this.counterUnits.len](),a,[e.classNames.grid,e.classNames[this.units.dir]],f),g.showLabel&&c.createLabel(j,l,k,i,this,g.offset,m,b,[e.classNames.label,e.classNames[this.units.dir],"start"===g.position?e.classNames[g.position]:e.classNames.end],d,f))}.bind(this))}var f={x:{pos:"x",len:"width",dir:"horizontal",rectStart:"x1",rectEnd:"x2",rectOffset:"y2"},y:{pos:"y",len:"height",dir:"vertical",rectStart:"y2",rectEnd:"y1",rectOffset:"x1"}};c.Axis=c.Class.extend({constructor:d,createGridAndLabels:e,projectValue:function(a,b,c){throw new Error("Base axis can't be instantiated!")}}),c.Axis.units=f}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e){var f=e.highLow||c.getHighLow(b,e,a.pos);this.bounds=c.getBounds(d[a.rectEnd]-d[a.rectStart],f,e.scaleMinSpace||20,e.onlyInteger),this.range={min:this.bounds.min,max:this.bounds.max},c.AutoScaleAxis["super"].constructor.call(this,a,d,this.bounds.values,e)}function e(a){return this.axisLength*(+c.getMultiValue(a,this.units.pos)-this.bounds.min)/this.bounds.range}c.AutoScaleAxis=c.Axis.extend({constructor:d,projectValue:e})}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e){var f=e.highLow||c.getHighLow(b,e,a.pos);this.divisor=e.divisor||1,this.ticks=e.ticks||c.times(this.divisor).map(function(a,b){return f.low+(f.high-f.low)/this.divisor*b}.bind(this)),this.ticks.sort(function(a,b){return a-b}),this.range={min:f.low,max:f.high},c.FixedScaleAxis["super"].constructor.call(this,a,d,this.ticks,e),this.stepLength=this.axisLength/this.divisor}function e(a){return this.axisLength*(+c.getMultiValue(a,this.units.pos)-this.range.min)/(this.range.max-this.range.min)}c.FixedScaleAxis=c.Axis.extend({constructor:d,projectValue:e})}(window,document,a),function(a,b,c){"use strict";function d(a,b,d,e){c.StepAxis["super"].constructor.call(this,a,d,e.ticks,e);var f=Math.max(1,e.ticks.length-(e.stretch?1:0));this.stepLength=this.axisLength/f}function e(a,b){return this.stepLength*b}c.StepAxis=c.Axis.extend({constructor:d,projectValue:e})}(window,document,a),function(a,b,c){"use strict";function d(a){var b=c.normalizeData(this.data,a.reverseData,!0);this.svg=c.createSvg(this.container,a.width,a.height,a.classNames.chart);var d,e,g=this.svg.elem("g").addClass(a.classNames.gridGroup),h=this.svg.elem("g"),i=this.svg.elem("g").addClass(a.classNames.labelGroup),j=c.createChartRect(this.svg,a,f.padding);d=void 0===a.axisX.type?new c.StepAxis(c.Axis.units.x,b.normalized.series,j,c.extend({},a.axisX,{ticks:b.normalized.labels,stretch:a.fullWidth})):a.axisX.type.call(c,c.Axis.units.x,b.normalized.series,j,a.axisX),e=void 0===a.axisY.type?new c.AutoScaleAxis(c.Axis.units.y,b.normalized.series,j,c.extend({},a.axisY,{high:c.isNumeric(a.high)?a.high:a.axisY.high,low:c.isNumeric(a.low)?a.low:a.axisY.low})):a.axisY.type.call(c,c.Axis.units.y,b.normalized.series,j,a.axisY),d.createGridAndLabels(g,i,this.supportsForeignObject,a,this.eventEmitter),e.createGridAndLabels(g,i,this.supportsForeignObject,a,this.eventEmitter),a.showGridBackground&&c.createGridBackground(g,j,a.classNames.gridBackground,this.eventEmitter),b.raw.series.forEach(function(f,g){var i=h.elem("g");i.attr({"ct:series-name":f.name,"ct:meta":c.serialize(f.meta)}),i.addClass([a.classNames.series,f.className||a.classNames.series+"-"+c.alphaNumerate(g)].join(" "));var k=[],l=[];b.normalized.series[g].forEach(function(a,h){var i={x:j.x1+d.projectValue(a,h,b.normalized.series[g]),y:j.y1-e.projectValue(a,h,b.normalized.series[g])};k.push(i.x,i.y),l.push({value:a,valueIndex:h,meta:c.getMetaData(f,h)})}.bind(this));var m={lineSmooth:c.getSeriesOption(f,a,"lineSmooth"),showPoint:c.getSeriesOption(f,a,"showPoint"),showLine:c.getSeriesOption(f,a,"showLine"),showArea:c.getSeriesOption(f,a,"showArea"),areaBase:c.getSeriesOption(f,a,"areaBase")},n="function"==typeof m.lineSmooth?m.lineSmooth:m.lineSmooth?c.Interpolation.monotoneCubic():c.Interpolation.none(),o=n(k,l);if(m.showPoint&&o.pathElements.forEach(function(b){var h=i.elem("line",{x1:b.x,y1:b.y,x2:b.x+.01,y2:b.y},a.classNames.point).attr({"ct:value":[b.data.value.x,b.data.value.y].filter(c.isNumeric).join(","),"ct:meta":c.serialize(b.data.meta)});this.eventEmitter.emit("draw",{type:"point",value:b.data.value,index:b.data.valueIndex,meta:b.data.meta,series:f,seriesIndex:g,axisX:d,axisY:e,group:i,element:h,x:b.x,y:b.y})}.bind(this)),m.showLine){var p=i.elem("path",{d:o.stringify()},a.classNames.line,!0);this.eventEmitter.emit("draw",{type:"line",values:b.normalized.series[g],path:o.clone(),chartRect:j,index:g,series:f,seriesIndex:g,seriesMeta:f.meta,axisX:d,axisY:e,group:i,element:p})}if(m.showArea&&e.range){var q=Math.max(Math.min(m.areaBase,e.range.max),e.range.min),r=j.y1-e.projectValue(q);o.splitByCommand("M").filter(function(a){return a.pathElements.length>1}).map(function(a){var b=a.pathElements[0],c=a.pathElements[a.pathElements.length-1];return a.clone(!0).position(0).remove(1).move(b.x,r).line(b.x,b.y).position(a.pathElements.length+1).line(c.x,r)}).forEach(function(c){var h=i.elem("path",{d:c.stringify()},a.classNames.area,!0);this.eventEmitter.emit("draw",{type:"area",values:b.normalized.series[g],path:c.clone(),series:f,seriesIndex:g,axisX:d,axisY:e,chartRect:j,index:g,group:i,element:h})}.bind(this))}}.bind(this)),this.eventEmitter.emit("created",{bounds:e.bounds,chartRect:j,axisX:d,axisY:e,svg:this.svg,options:a})}function e(a,b,d,e){c.Line["super"].constructor.call(this,a,b,f,c.extend({},f,d),e)}var f={axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,type:void 0},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,type:void 0,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,showLine:!0,showPoint:!0,showArea:!1,areaBase:0,lineSmooth:!0,showGridBackground:!1,low:void 0,high:void 0,chartPadding:{top:15,right:15,bottom:5,left:10},fullWidth:!1,reverseData:!1,classNames:{chart:"ct-chart-line",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",line:"ct-line",point:"ct-point",area:"ct-area",grid:"ct-grid",gridGroup:"ct-grids",gridBackground:"ct-grid-background",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}};c.Line=c.Base.extend({constructor:e,createChart:d})}(window,document,a),function(a,b,c){"use strict";function d(a){var b,d;a.distributeSeries?(b=c.normalizeData(this.data,a.reverseData,a.horizontalBars?"x":"y"),b.normalized.series=b.normalized.series.map(function(a){return[a]})):b=c.normalizeData(this.data,a.reverseData,a.horizontalBars?"x":"y"),this.svg=c.createSvg(this.container,a.width,a.height,a.classNames.chart+(a.horizontalBars?" "+a.classNames.horizontalBars:""));var e=this.svg.elem("g").addClass(a.classNames.gridGroup),g=this.svg.elem("g"),h=this.svg.elem("g").addClass(a.classNames.labelGroup);if(a.stackBars&&0!==b.normalized.series.length){var i=c.serialMap(b.normalized.series,function(){
return Array.prototype.slice.call(arguments).map(function(a){return a}).reduce(function(a,b){return{x:a.x+(b&&b.x)||0,y:a.y+(b&&b.y)||0}},{x:0,y:0})});d=c.getHighLow([i],a,a.horizontalBars?"x":"y")}else d=c.getHighLow(b.normalized.series,a,a.horizontalBars?"x":"y");d.high=+a.high||(0===a.high?0:d.high),d.low=+a.low||(0===a.low?0:d.low);var j,k,l,m,n,o=c.createChartRect(this.svg,a,f.padding);k=a.distributeSeries&&a.stackBars?b.normalized.labels.slice(0,1):b.normalized.labels,a.horizontalBars?(j=m=void 0===a.axisX.type?new c.AutoScaleAxis(c.Axis.units.x,b.normalized.series,o,c.extend({},a.axisX,{highLow:d,referenceValue:0})):a.axisX.type.call(c,c.Axis.units.x,b.normalized.series,o,c.extend({},a.axisX,{highLow:d,referenceValue:0})),l=n=void 0===a.axisY.type?new c.StepAxis(c.Axis.units.y,b.normalized.series,o,{ticks:k}):a.axisY.type.call(c,c.Axis.units.y,b.normalized.series,o,a.axisY)):(l=m=void 0===a.axisX.type?new c.StepAxis(c.Axis.units.x,b.normalized.series,o,{ticks:k}):a.axisX.type.call(c,c.Axis.units.x,b.normalized.series,o,a.axisX),j=n=void 0===a.axisY.type?new c.AutoScaleAxis(c.Axis.units.y,b.normalized.series,o,c.extend({},a.axisY,{highLow:d,referenceValue:0})):a.axisY.type.call(c,c.Axis.units.y,b.normalized.series,o,c.extend({},a.axisY,{highLow:d,referenceValue:0})));var p=a.horizontalBars?o.x1+j.projectValue(0):o.y1-j.projectValue(0),q=[];l.createGridAndLabels(e,h,this.supportsForeignObject,a,this.eventEmitter),j.createGridAndLabels(e,h,this.supportsForeignObject,a,this.eventEmitter),a.showGridBackground&&c.createGridBackground(e,o,a.classNames.gridBackground,this.eventEmitter),b.raw.series.forEach(function(d,e){var f,h,i=e-(b.raw.series.length-1)/2;f=a.distributeSeries&&!a.stackBars?l.axisLength/b.normalized.series.length/2:a.distributeSeries&&a.stackBars?l.axisLength/2:l.axisLength/b.normalized.series[e].length/2,h=g.elem("g"),h.attr({"ct:series-name":d.name,"ct:meta":c.serialize(d.meta)}),h.addClass([a.classNames.series,d.className||a.classNames.series+"-"+c.alphaNumerate(e)].join(" ")),b.normalized.series[e].forEach(function(g,k){var r,s,t,u;if(u=a.distributeSeries&&!a.stackBars?e:a.distributeSeries&&a.stackBars?0:k,r=a.horizontalBars?{x:o.x1+j.projectValue(g&&g.x?g.x:0,k,b.normalized.series[e]),y:o.y1-l.projectValue(g&&g.y?g.y:0,u,b.normalized.series[e])}:{x:o.x1+l.projectValue(g&&g.x?g.x:0,u,b.normalized.series[e]),y:o.y1-j.projectValue(g&&g.y?g.y:0,k,b.normalized.series[e])},l instanceof c.StepAxis&&(l.options.stretch||(r[l.units.pos]+=f*(a.horizontalBars?-1:1)),r[l.units.pos]+=a.stackBars||a.distributeSeries?0:i*a.seriesBarDistance*(a.horizontalBars?-1:1)),t=q[k]||p,q[k]=t-(p-r[l.counterUnits.pos]),void 0!==g){var v={};v[l.units.pos+"1"]=r[l.units.pos],v[l.units.pos+"2"]=r[l.units.pos],!a.stackBars||"accumulate"!==a.stackMode&&a.stackMode?(v[l.counterUnits.pos+"1"]=p,v[l.counterUnits.pos+"2"]=r[l.counterUnits.pos]):(v[l.counterUnits.pos+"1"]=t,v[l.counterUnits.pos+"2"]=q[k]),v.x1=Math.min(Math.max(v.x1,o.x1),o.x2),v.x2=Math.min(Math.max(v.x2,o.x1),o.x2),v.y1=Math.min(Math.max(v.y1,o.y2),o.y1),v.y2=Math.min(Math.max(v.y2,o.y2),o.y1);var w=c.getMetaData(d,k);s=h.elem("line",v,a.classNames.bar).attr({"ct:value":[g.x,g.y].filter(c.isNumeric).join(","),"ct:meta":c.serialize(w)}),this.eventEmitter.emit("draw",c.extend({type:"bar",value:g,index:k,meta:w,series:d,seriesIndex:e,axisX:m,axisY:n,chartRect:o,group:h,element:s},v))}}.bind(this))}.bind(this)),this.eventEmitter.emit("created",{bounds:j.bounds,chartRect:o,axisX:m,axisY:n,svg:this.svg,options:a})}function e(a,b,d,e){c.Bar["super"].constructor.call(this,a,b,f,c.extend({},f,d),e)}var f={axisX:{offset:30,position:"end",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,scaleMinSpace:30,onlyInteger:!1},axisY:{offset:40,position:"start",labelOffset:{x:0,y:0},showLabel:!0,showGrid:!0,labelInterpolationFnc:c.noop,scaleMinSpace:20,onlyInteger:!1},width:void 0,height:void 0,high:void 0,low:void 0,referenceValue:0,chartPadding:{top:15,right:15,bottom:5,left:10},seriesBarDistance:15,stackBars:!1,stackMode:"accumulate",horizontalBars:!1,distributeSeries:!1,reverseData:!1,showGridBackground:!1,classNames:{chart:"ct-chart-bar",horizontalBars:"ct-horizontal-bars",label:"ct-label",labelGroup:"ct-labels",series:"ct-series",bar:"ct-bar",grid:"ct-grid",gridGroup:"ct-grids",gridBackground:"ct-grid-background",vertical:"ct-vertical",horizontal:"ct-horizontal",start:"ct-start",end:"ct-end"}};c.Bar=c.Base.extend({constructor:e,createChart:d})}(window,document,a),function(a,b,c){"use strict";function d(a,b,c){var d=b.x>a.x;return d&&"explode"===c||!d&&"implode"===c?"start":d&&"implode"===c||!d&&"explode"===c?"end":"middle"}function e(a){var b,e,f,h,i,j=c.normalizeData(this.data),k=[],l=a.startAngle;this.svg=c.createSvg(this.container,a.width,a.height,a.donut?a.classNames.chartDonut:a.classNames.chartPie),e=c.createChartRect(this.svg,a,g.padding),f=Math.min(e.width()/2,e.height()/2),i=a.total||j.normalized.series.reduce(function(a,b){return a+b},0);var m=c.quantity(a.donutWidth);"%"===m.unit&&(m.value*=f/100),f-=a.donut&&!a.donutSolid?m.value/2:0,h="outside"===a.labelPosition||a.donut&&!a.donutSolid?f:"center"===a.labelPosition?0:a.donutSolid?f-m.value/2:f/2,h+=a.labelOffset;var n={x:e.x1+e.width()/2,y:e.y2+e.height()/2},o=1===j.raw.series.filter(function(a){return a.hasOwnProperty("value")?0!==a.value:0!==a}).length;j.raw.series.forEach(function(a,b){k[b]=this.svg.elem("g",null,null)}.bind(this)),a.showLabel&&(b=this.svg.elem("g",null,null)),j.raw.series.forEach(function(e,g){if(0!==j.normalized.series[g]||!a.ignoreEmptyValues){k[g].attr({"ct:series-name":e.name}),k[g].addClass([a.classNames.series,e.className||a.classNames.series+"-"+c.alphaNumerate(g)].join(" "));var p=i>0?l+j.normalized.series[g]/i*360:0,q=Math.max(0,l-(0===g||o?0:.2));p-q>=359.99&&(p=q+359.99);var r,s,t,u=c.polarToCartesian(n.x,n.y,f,q),v=c.polarToCartesian(n.x,n.y,f,p),w=new c.Svg.Path(!a.donut||a.donutSolid).move(v.x,v.y).arc(f,f,0,p-l>180,0,u.x,u.y);a.donut?a.donutSolid&&(t=f-m.value,r=c.polarToCartesian(n.x,n.y,t,l-(0===g||o?0:.2)),s=c.polarToCartesian(n.x,n.y,t,p),w.line(r.x,r.y),w.arc(t,t,0,p-l>180,1,s.x,s.y)):w.line(n.x,n.y);var x=a.classNames.slicePie;a.donut&&(x=a.classNames.sliceDonut,a.donutSolid&&(x=a.classNames.sliceDonutSolid));var y=k[g].elem("path",{d:w.stringify()},x);if(y.attr({"ct:value":j.normalized.series[g],"ct:meta":c.serialize(e.meta)}),a.donut&&!a.donutSolid&&(y._node.style.strokeWidth=m.value+"px"),this.eventEmitter.emit("draw",{type:"slice",value:j.normalized.series[g],totalDataSum:i,index:g,meta:e.meta,series:e,group:k[g],element:y,path:w.clone(),center:n,radius:f,startAngle:l,endAngle:p}),a.showLabel){var z;z=1===j.raw.series.length?{x:n.x,y:n.y}:c.polarToCartesian(n.x,n.y,h,l+(p-l)/2);var A;A=j.normalized.labels&&!c.isFalseyButZero(j.normalized.labels[g])?j.normalized.labels[g]:j.normalized.series[g];var B=a.labelInterpolationFnc(A,g);if(B||0===B){var C=b.elem("text",{dx:z.x,dy:z.y,"text-anchor":d(n,z,a.labelDirection)},a.classNames.label).text(""+B);this.eventEmitter.emit("draw",{type:"label",index:g,group:b,element:C,text:""+B,x:z.x,y:z.y})}}l=p}}.bind(this)),this.eventEmitter.emit("created",{chartRect:e,svg:this.svg,options:a})}function f(a,b,d,e){c.Pie["super"].constructor.call(this,a,b,g,c.extend({},g,d),e)}var g={width:void 0,height:void 0,chartPadding:5,classNames:{chartPie:"ct-chart-pie",chartDonut:"ct-chart-donut",series:"ct-series",slicePie:"ct-slice-pie",sliceDonut:"ct-slice-donut",sliceDonutSolid:"ct-slice-donut-solid",label:"ct-label"},startAngle:0,total:void 0,donut:!1,donutSolid:!1,donutWidth:60,showLabel:!0,labelOffset:0,labelPosition:"inside",labelInterpolationFnc:c.noop,labelDirection:"neutral",reverseData:!1,ignoreEmptyValues:!1};c.Pie=c.Base.extend({constructor:f,createChart:e,determineAnchorPosition:d})}(window,document,a),a});

(function() {


}).call(this);
(function() {


}).call(this);
/*
 * This is a opensource javascript chart library
 * the code is taken from:
 Highcharts JS v6.0.7 (2018-02-16)

 (c) 2009-2016 Torstein Honsi

 License: www.highcharts.com/license
*/

(function(S,K){"object"===typeof module&&module.exports?module.exports=S.document?K(S):K:S.Highcharts=K(S)})("undefined"!==typeof window?window:this,function(S){var K=function(){var a="undefined"===typeof S?window:S,B=a.document,H=a.navigator&&a.navigator.userAgent||"",E=B&&B.createElementNS&&!!B.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,q=/(edge|msie|trident)/i.test(H)&&!a.opera,f=-1!==H.indexOf("Firefox"),l=-1!==H.indexOf("Chrome"),t=f&&4>parseInt(H.split("Firefox/")[1],
10);return a.Highcharts?a.Highcharts.error(16,!0):{product:"Highcharts",version:"6.0.7",deg2rad:2*Math.PI/360,doc:B,hasBidiBug:t,hasTouch:B&&void 0!==B.documentElement.ontouchstart,isMS:q,isWebKit:-1!==H.indexOf("AppleWebKit"),isFirefox:f,isChrome:l,isSafari:!l&&-1!==H.indexOf("Safari"),isTouchDevice:/(Mobile|Android|Windows Phone)/.test(H),SVG_NS:"http://www.w3.org/2000/svg",chartCount:0,seriesTypes:{},symbolSizes:{},svg:E,win:a,marginNames:["plotTop","marginRight","marginBottom","plotLeft"],noop:function(){},
charts:[]}}();(function(a){a.timers=[];var B=a.charts,H=a.doc,E=a.win;a.error=function(q,f){q=a.isNumber(q)?"Highcharts error #"+q+": www.highcharts.com/errors/"+q:q;if(f)throw Error(q);E.console&&console.log(q)};a.Fx=function(a,f,l){this.options=f;this.elem=a;this.prop=l};a.Fx.prototype={dSetter:function(){var a=this.paths[0],f=this.paths[1],l=[],t=this.now,n=a.length,v;if(1===t)l=this.toD;else if(n===f.length&&1>t)for(;n--;)v=parseFloat(a[n]),l[n]=isNaN(v)?f[n]:t*parseFloat(f[n]-v)+v;else l=f;this.elem.attr("d",
l,null,!0)},update:function(){var a=this.elem,f=this.prop,l=this.now,t=this.options.step;if(this[f+"Setter"])this[f+"Setter"]();else a.attr?a.element&&a.attr(f,l,null,!0):a.style[f]=l+this.unit;t&&t.call(a,l,this)},run:function(q,f,l){var t=this,n=t.options,v=function(a){return v.stopped?!1:t.step(a)},u=E.requestAnimationFrame||function(a){setTimeout(a,13)},c=function(){for(var b=0;b<a.timers.length;b++)a.timers[b]()||a.timers.splice(b--,1);a.timers.length&&u(c)};q===f?(delete n.curAnim[this.prop],
n.complete&&0===a.keys(n.curAnim).length&&n.complete.call(this.elem)):(this.startTime=+new Date,this.start=q,this.end=f,this.unit=l,this.now=this.start,this.pos=0,v.elem=this.elem,v.prop=this.prop,v()&&1===a.timers.push(v)&&u(c))},step:function(q){var f=+new Date,l,t=this.options,n=this.elem,v=t.complete,u=t.duration,c=t.curAnim;n.attr&&!n.element?q=!1:q||f>=u+this.startTime?(this.now=this.end,this.pos=1,this.update(),l=c[this.prop]=!0,a.objectEach(c,function(a){!0!==a&&(l=!1)}),l&&v&&v.call(n),q=
!1):(this.pos=t.easing((f-this.startTime)/u),this.now=this.start+(this.end-this.start)*this.pos,this.update(),q=!0);return q},initPath:function(q,f,l){function t(a){var c,h;for(e=a.length;e--;)c="M"===a[e]||"L"===a[e],h=/[a-zA-Z]/.test(a[e+3]),c&&h&&a.splice(e+1,0,a[e+1],a[e+2],a[e+1],a[e+2])}function n(a,c){for(;a.length<h;){a[0]=c[h-a.length];var b=a.slice(0,d);[].splice.apply(a,[0,0].concat(b));p&&(b=a.slice(a.length-d),[].splice.apply(a,[a.length,0].concat(b)),e--)}a[0]="M"}function v(a,c){for(var b=
(h-a.length)/d;0<b&&b--;)k=a.slice().splice(a.length/r-d,d*r),k[0]=c[h-d-b*d],m&&(k[d-6]=k[d-2],k[d-5]=k[d-1]),[].splice.apply(a,[a.length/r,0].concat(k)),p&&b--}f=f||"";var u,c=q.startX,b=q.endX,m=-1<f.indexOf("C"),d=m?7:3,h,k,e;f=f.split(" ");l=l.slice();var p=q.isArea,r=p?2:1,I;m&&(t(f),t(l));if(c&&b){for(e=0;e<c.length;e++)if(c[e]===b[0]){u=e;break}else if(c[0]===b[b.length-c.length+e]){u=e;I=!0;break}void 0===u&&(f=[])}f.length&&a.isNumber(u)&&(h=l.length+u*r*d,I?(n(f,l),v(l,f)):(n(l,f),v(f,
l)));return[f,l]}};a.Fx.prototype.fillSetter=a.Fx.prototype.strokeSetter=function(){this.elem.attr(this.prop,a.color(this.start).tweenTo(a.color(this.end),this.pos),null,!0)};a.merge=function(){var q,f=arguments,l,t={},n=function(l,q){"object"!==typeof l&&(l={});a.objectEach(q,function(c,b){!a.isObject(c,!0)||a.isClass(c)||a.isDOMElement(c)?l[b]=q[b]:l[b]=n(l[b]||{},c)});return l};!0===f[0]&&(t=f[1],f=Array.prototype.slice.call(f,2));l=f.length;for(q=0;q<l;q++)t=n(t,f[q]);return t};a.pInt=function(a,
f){return parseInt(a,f||10)};a.isString=function(a){return"string"===typeof a};a.isArray=function(a){a=Object.prototype.toString.call(a);return"[object Array]"===a||"[object Array Iterator]"===a};a.isObject=function(q,f){return!!q&&"object"===typeof q&&(!f||!a.isArray(q))};a.isDOMElement=function(q){return a.isObject(q)&&"number"===typeof q.nodeType};a.isClass=function(q){var f=q&&q.constructor;return!(!a.isObject(q,!0)||a.isDOMElement(q)||!f||!f.name||"Object"===f.name)};a.isNumber=function(a){return"number"===
typeof a&&!isNaN(a)&&Infinity>a&&-Infinity<a};a.erase=function(a,f){for(var l=a.length;l--;)if(a[l]===f){a.splice(l,1);break}};a.defined=function(a){return void 0!==a&&null!==a};a.attr=function(q,f,l){var t;a.isString(f)?a.defined(l)?q.setAttribute(f,l):q&&q.getAttribute&&(t=q.getAttribute(f)):a.defined(f)&&a.isObject(f)&&a.objectEach(f,function(a,l){q.setAttribute(l,a)});return t};a.splat=function(q){return a.isArray(q)?q:[q]};a.syncTimeout=function(a,f,l){if(f)return setTimeout(a,f,l);a.call(0,
l)};a.extend=function(a,f){var l;a||(a={});for(l in f)a[l]=f[l];return a};a.pick=function(){var a=arguments,f,l,t=a.length;for(f=0;f<t;f++)if(l=a[f],void 0!==l&&null!==l)return l};a.css=function(q,f){a.isMS&&!a.svg&&f&&void 0!==f.opacity&&(f.filter="alpha(opacity\x3d"+100*f.opacity+")");a.extend(q.style,f)};a.createElement=function(q,f,l,t,n){q=H.createElement(q);var v=a.css;f&&a.extend(q,f);n&&v(q,{padding:0,border:"none",margin:0});l&&v(q,l);t&&t.appendChild(q);return q};a.extendClass=function(q,
f){var l=function(){};l.prototype=new q;a.extend(l.prototype,f);return l};a.pad=function(a,f,l){return Array((f||2)+1-String(a).length).join(l||0)+a};a.relativeLength=function(a,f,l){return/%$/.test(a)?f*parseFloat(a)/100+(l||0):parseFloat(a)};a.wrap=function(a,f,l){var t=a[f];a[f]=function(){var a=Array.prototype.slice.call(arguments),v=arguments,u=this;u.proceed=function(){t.apply(u,arguments.length?arguments:v)};a.unshift(t);a=l.apply(this,a);u.proceed=null;return a}};a.formatSingle=function(q,
f,l){var t=/\.([0-9])/,n=a.defaultOptions.lang;/f$/.test(q)?(l=(l=q.match(t))?l[1]:-1,null!==f&&(f=a.numberFormat(f,l,n.decimalPoint,-1<q.indexOf(",")?n.thousandsSep:""))):f=(l||a.time).dateFormat(q,f);return f};a.format=function(q,f,l){for(var t="{",n=!1,v,u,c,b,m=[],d;q;){t=q.indexOf(t);if(-1===t)break;v=q.slice(0,t);if(n){v=v.split(":");u=v.shift().split(".");b=u.length;d=f;for(c=0;c<b;c++)d&&(d=d[u[c]]);v.length&&(d=a.formatSingle(v.join(":"),d,l));m.push(d)}else m.push(v);q=q.slice(t+1);t=(n=
!n)?"}":"{"}m.push(q);return m.join("")};a.getMagnitude=function(a){return Math.pow(10,Math.floor(Math.log(a)/Math.LN10))};a.normalizeTickInterval=function(q,f,l,t,n){var v,u=q;l=a.pick(l,1);v=q/l;f||(f=n?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===t&&(1===l?f=a.grep(f,function(a){return 0===a%1}):.1>=l&&(f=[1/l])));for(t=0;t<f.length&&!(u=f[t],n&&u*l>=q||!n&&v<=(f[t]+(f[t+1]||f[t]))/2);t++);return u=a.correctFloat(u*l,-Math.round(Math.log(.001)/Math.LN10))};a.stableSort=function(a,f){var l=
a.length,t,n;for(n=0;n<l;n++)a[n].safeI=n;a.sort(function(a,l){t=f(a,l);return 0===t?a.safeI-l.safeI:t});for(n=0;n<l;n++)delete a[n].safeI};a.arrayMin=function(a){for(var f=a.length,l=a[0];f--;)a[f]<l&&(l=a[f]);return l};a.arrayMax=function(a){for(var f=a.length,l=a[0];f--;)a[f]>l&&(l=a[f]);return l};a.destroyObjectProperties=function(q,f){a.objectEach(q,function(a,t){a&&a!==f&&a.destroy&&a.destroy();delete q[t]})};a.discardElement=function(q){var f=a.garbageBin;f||(f=a.createElement("div"));q&&f.appendChild(q);
f.innerHTML=""};a.correctFloat=function(a,f){return parseFloat(a.toPrecision(f||14))};a.setAnimation=function(q,f){f.renderer.globalAnimation=a.pick(q,f.options.chart.animation,!0)};a.animObject=function(q){return a.isObject(q)?a.merge(q):{duration:q?500:0}};a.timeUnits={millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5};a.numberFormat=function(q,f,l,t){q=+q||0;f=+f;var n=a.defaultOptions.lang,v=(q.toString().split(".")[1]||"").split("e")[0].length,u,
c,b=q.toString().split("e");-1===f?f=Math.min(v,20):a.isNumber(f)?f&&b[1]&&0>b[1]&&(u=f+ +b[1],0<=u?(b[0]=(+b[0]).toExponential(u).split("e")[0],f=u):(b[0]=b[0].split(".")[0]||0,q=20>f?(b[0]*Math.pow(10,b[1])).toFixed(f):0,b[1]=0)):f=2;c=(Math.abs(b[1]?b[0]:q)+Math.pow(10,-Math.max(f,v)-1)).toFixed(f);v=String(a.pInt(c));u=3<v.length?v.length%3:0;l=a.pick(l,n.decimalPoint);t=a.pick(t,n.thousandsSep);q=(0>q?"-":"")+(u?v.substr(0,u)+t:"");q+=v.substr(u).replace(/(\d{3})(?=\d)/g,"$1"+t);f&&(q+=l+c.slice(-f));
b[1]&&0!==+q&&(q+="e"+b[1]);return q};Math.easeInOutSine=function(a){return-.5*(Math.cos(Math.PI*a)-1)};a.getStyle=function(q,f,l){if("width"===f)return Math.min(q.offsetWidth,q.scrollWidth)-a.getStyle(q,"padding-left")-a.getStyle(q,"padding-right");if("height"===f)return Math.min(q.offsetHeight,q.scrollHeight)-a.getStyle(q,"padding-top")-a.getStyle(q,"padding-bottom");E.getComputedStyle||a.error(27,!0);if(q=E.getComputedStyle(q,void 0))q=q.getPropertyValue(f),a.pick(l,"opacity"!==f)&&(q=a.pInt(q));
return q};a.inArray=function(q,f){return(a.indexOfPolyfill||Array.prototype.indexOf).call(f,q)};a.grep=function(q,f){return(a.filterPolyfill||Array.prototype.filter).call(q,f)};a.find=Array.prototype.find?function(a,f){return a.find(f)}:function(a,f){var l,t=a.length;for(l=0;l<t;l++)if(f(a[l],l))return a[l]};a.map=function(a,f){for(var l=[],t=0,n=a.length;t<n;t++)l[t]=f.call(a[t],a[t],t,a);return l};a.keys=function(q){return(a.keysPolyfill||Object.keys).call(void 0,q)};a.reduce=function(q,f,l){return(a.reducePolyfill||
Array.prototype.reduce).call(q,f,l)};a.offset=function(a){var f=H.documentElement;a=a.parentElement?a.getBoundingClientRect():{top:0,left:0};return{top:a.top+(E.pageYOffset||f.scrollTop)-(f.clientTop||0),left:a.left+(E.pageXOffset||f.scrollLeft)-(f.clientLeft||0)}};a.stop=function(q,f){for(var l=a.timers.length;l--;)a.timers[l].elem!==q||f&&f!==a.timers[l].prop||(a.timers[l].stopped=!0)};a.each=function(q,f,l){return(a.forEachPolyfill||Array.prototype.forEach).call(q,f,l)};a.objectEach=function(a,
f,l){for(var t in a)a.hasOwnProperty(t)&&f.call(l,a[t],t,a)};a.isPrototype=function(q){return q===a.Axis.prototype||q===a.Chart.prototype||q===a.Point.prototype||q===a.Series.prototype||q===a.Tick.prototype};a.addEvent=function(q,f,l){var t,n=q.addEventListener||a.addEventListenerPolyfill;t=a.isPrototype(q)?"protoEvents":"hcEvents";t=q[t]=q[t]||{};n&&n.call(q,f,l,!1);t[f]||(t[f]=[]);t[f].push(l);return function(){a.removeEvent(q,f,l)}};a.removeEvent=function(q,f,l){function t(c,b){var m=q.removeEventListener||
a.removeEventListenerPolyfill;m&&m.call(q,c,b,!1)}function n(c){var b,m;q.nodeName&&(f?(b={},b[f]=!0):b=c,a.objectEach(b,function(a,h){if(c[h])for(m=c[h].length;m--;)t(h,c[h][m])}))}var v,u;a.each(["protoEvents","hcEvents"],function(c){var b=q[c];b&&(f?(v=b[f]||[],l?(u=a.inArray(l,v),-1<u&&(v.splice(u,1),b[f]=v),t(f,l)):(n(b),b[f]=[])):(n(b),q[c]={}))})};a.fireEvent=function(q,f,l,t){var n,v,u,c,b;l=l||{};H.createEvent&&(q.dispatchEvent||q.fireEvent)?(n=H.createEvent("Events"),n.initEvent(f,!0,!0),
a.extend(n,l),q.dispatchEvent?q.dispatchEvent(n):q.fireEvent(f,n)):a.each(["protoEvents","hcEvents"],function(m){if(q[m])for(v=q[m][f]||[],u=v.length,l.target||a.extend(l,{preventDefault:function(){l.defaultPrevented=!0},target:q,type:f}),c=0;c<u;c++)(b=v[c])&&!1===b.call(q,l)&&l.preventDefault()});t&&!l.defaultPrevented&&t(l)};a.animate=function(q,f,l){var t,n="",v,u,c;a.isObject(l)||(c=arguments,l={duration:c[2],easing:c[3],complete:c[4]});a.isNumber(l.duration)||(l.duration=400);l.easing="function"===
typeof l.easing?l.easing:Math[l.easing]||Math.easeInOutSine;l.curAnim=a.merge(f);a.objectEach(f,function(c,m){a.stop(q,m);u=new a.Fx(q,l,m);v=null;"d"===m?(u.paths=u.initPath(q,q.d,f.d),u.toD=f.d,t=0,v=1):q.attr?t=q.attr(m):(t=parseFloat(a.getStyle(q,m))||0,"opacity"!==m&&(n="px"));v||(v=c);v&&v.match&&v.match("px")&&(v=v.replace(/px/g,""));u.run(t,v,n)})};a.seriesType=function(q,f,l,t,n){var v=a.getOptions(),u=a.seriesTypes;v.plotOptions[q]=a.merge(v.plotOptions[f],l);u[q]=a.extendClass(u[f]||function(){},
t);u[q].prototype.type=q;n&&(u[q].prototype.pointClass=a.extendClass(a.Point,n));return u[q]};a.uniqueKey=function(){var a=Math.random().toString(36).substring(2,9),f=0;return function(){return"highcharts-"+a+"-"+f++}}();E.jQuery&&(E.jQuery.fn.highcharts=function(){var q=[].slice.call(arguments);if(this[0])return q[0]?(new (a[a.isString(q[0])?q.shift():"Chart"])(this[0],q[0],q[1]),this):B[a.attr(this[0],"data-highcharts-chart")]})})(K);(function(a){var B=a.each,H=a.isNumber,E=a.map,q=a.merge,f=a.pInt;
a.Color=function(l){if(!(this instanceof a.Color))return new a.Color(l);this.init(l)};a.Color.prototype={parsers:[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[f(a[1]),f(a[2]),f(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[f(a[1]),f(a[2]),f(a[3]),1]}}],names:{none:"rgba(255,255,255,0)",white:"#ffffff",black:"#000000"},init:function(l){var f,
n,v,u;if((this.input=l=this.names[l&&l.toLowerCase?l.toLowerCase():""]||l)&&l.stops)this.stops=E(l.stops,function(c){return new a.Color(c[1])});else if(l&&l.charAt&&"#"===l.charAt()&&(f=l.length,l=parseInt(l.substr(1),16),7===f?n=[(l&16711680)>>16,(l&65280)>>8,l&255,1]:4===f&&(n=[(l&3840)>>4|(l&3840)>>8,(l&240)>>4|l&240,(l&15)<<4|l&15,1])),!n)for(v=this.parsers.length;v--&&!n;)u=this.parsers[v],(f=u.regex.exec(l))&&(n=u.parse(f));this.rgba=n||[]},get:function(a){var l=this.input,n=this.rgba,v;this.stops?
(v=q(l),v.stops=[].concat(v.stops),B(this.stops,function(n,c){v.stops[c]=[v.stops[c][0],n.get(a)]})):v=n&&H(n[0])?"rgb"===a||!a&&1===n[3]?"rgb("+n[0]+","+n[1]+","+n[2]+")":"a"===a?n[3]:"rgba("+n.join(",")+")":l;return v},brighten:function(a){var l,n=this.rgba;if(this.stops)B(this.stops,function(n){n.brighten(a)});else if(H(a)&&0!==a)for(l=0;3>l;l++)n[l]+=f(255*a),0>n[l]&&(n[l]=0),255<n[l]&&(n[l]=255);return this},setOpacity:function(a){this.rgba[3]=a;return this},tweenTo:function(a,f){var n=this.rgba,
l=a.rgba;l.length&&n&&n.length?(a=1!==l[3]||1!==n[3],f=(a?"rgba(":"rgb(")+Math.round(l[0]+(n[0]-l[0])*(1-f))+","+Math.round(l[1]+(n[1]-l[1])*(1-f))+","+Math.round(l[2]+(n[2]-l[2])*(1-f))+(a?","+(l[3]+(n[3]-l[3])*(1-f)):"")+")"):f=a.input||"none";return f}};a.color=function(l){return new a.Color(l)}})(K);(function(a){var B,H,E=a.addEvent,q=a.animate,f=a.attr,l=a.charts,t=a.color,n=a.css,v=a.createElement,u=a.defined,c=a.deg2rad,b=a.destroyObjectProperties,m=a.doc,d=a.each,h=a.extend,k=a.erase,e=a.grep,
p=a.hasTouch,r=a.inArray,I=a.isArray,z=a.isFirefox,M=a.isMS,D=a.isObject,C=a.isString,x=a.isWebKit,F=a.merge,A=a.noop,J=a.objectEach,G=a.pick,g=a.pInt,w=a.removeEvent,L=a.stop,P=a.svg,N=a.SVG_NS,O=a.symbolSizes,R=a.win;B=a.SVGElement=function(){return this};h(B.prototype,{opacity:1,SVG_NS:N,textProps:"direction fontSize fontWeight fontFamily fontStyle color lineHeight width textAlign textDecoration textOverflow textOutline".split(" "),init:function(a,g){this.element="span"===g?v(g):m.createElementNS(this.SVG_NS,
g);this.renderer=a},animate:function(y,g,c){g=a.animObject(G(g,this.renderer.globalAnimation,!0));0!==g.duration?(c&&(g.complete=c),q(this,y,g)):(this.attr(y,null,c),g.step&&g.step.call(this));return this},colorGradient:function(y,g,c){var w=this.renderer,h,b,e,k,p,Q,x,N,m,A,r=[],P;y.radialGradient?b="radialGradient":y.linearGradient&&(b="linearGradient");b&&(e=y[b],p=w.gradients,x=y.stops,A=c.radialReference,I(e)&&(y[b]=e={x1:e[0],y1:e[1],x2:e[2],y2:e[3],gradientUnits:"userSpaceOnUse"}),"radialGradient"===
b&&A&&!u(e.gradientUnits)&&(k=e,e=F(e,w.getRadialAttr(A,k),{gradientUnits:"userSpaceOnUse"})),J(e,function(a,y){"id"!==y&&r.push(y,a)}),J(x,function(a){r.push(a)}),r=r.join(","),p[r]?A=p[r].attr("id"):(e.id=A=a.uniqueKey(),p[r]=Q=w.createElement(b).attr(e).add(w.defs),Q.radAttr=k,Q.stops=[],d(x,function(y){0===y[1].indexOf("rgba")?(h=a.color(y[1]),N=h.get("rgb"),m=h.get("a")):(N=y[1],m=1);y=w.createElement("stop").attr({offset:y[0],"stop-color":N,"stop-opacity":m}).add(Q);Q.stops.push(y)})),P="url("+
w.url+"#"+A+")",c.setAttribute(g,P),c.gradient=r,y.toString=function(){return P})},applyTextOutline:function(y){var g=this.element,c,w,h,e,b;-1!==y.indexOf("contrast")&&(y=y.replace(/contrast/g,this.renderer.getContrast(g.style.fill)));y=y.split(" ");w=y[y.length-1];if((h=y[0])&&"none"!==h&&a.svg){this.fakeTS=!0;y=[].slice.call(g.getElementsByTagName("tspan"));this.ySetter=this.xSetter;h=h.replace(/(^[\d\.]+)(.*?)$/g,function(a,y,g){return 2*y+g});for(b=y.length;b--;)c=y[b],"highcharts-text-outline"===
c.getAttribute("class")&&k(y,g.removeChild(c));e=g.firstChild;d(y,function(a,y){0===y&&(a.setAttribute("x",g.getAttribute("x")),y=g.getAttribute("y"),a.setAttribute("y",y||0),null===y&&g.setAttribute("y",0));a=a.cloneNode(1);f(a,{"class":"highcharts-text-outline",fill:w,stroke:w,"stroke-width":h,"stroke-linejoin":"round"});g.insertBefore(a,e)})}},attr:function(a,g,c,w){var y,h=this.element,b,e=this,d,k;"string"===typeof a&&void 0!==g&&(y=a,a={},a[y]=g);"string"===typeof a?e=(this[a+"Getter"]||this._defaultGetter).call(this,
a,h):(J(a,function(y,g){d=!1;w||L(this,g);this.symbolName&&/^(x|y|width|height|r|start|end|innerR|anchorX|anchorY)$/.test(g)&&(b||(this.symbolAttr(a),b=!0),d=!0);!this.rotation||"x"!==g&&"y"!==g||(this.doTransform=!0);d||(k=this[g+"Setter"]||this._defaultSetter,k.call(this,y,g,h),this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(g)&&this.updateShadows(g,y,k))},this),this.afterSetters());c&&c.call(this);return e},afterSetters:function(){this.doTransform&&(this.updateTransform(),
this.doTransform=!1)},updateShadows:function(a,g,c){for(var y=this.shadows,w=y.length;w--;)c.call(y[w],"height"===a?Math.max(g-(y[w].cutHeight||0),0):"d"===a?this.d:g,a,y[w])},addClass:function(a,g){var y=this.attr("class")||"";-1===y.indexOf(a)&&(g||(a=(y+(y?" ":"")+a).replace("  "," ")),this.attr("class",a));return this},hasClass:function(a){return-1!==r(a,(this.attr("class")||"").split(" "))},removeClass:function(a){return this.attr("class",(this.attr("class")||"").replace(a,""))},symbolAttr:function(a){var y=
this;d("x y r start end width height innerR anchorX anchorY".split(" "),function(g){y[g]=G(a[g],y[g])});y.attr({d:y.renderer.symbols[y.symbolName](y.x,y.y,y.width,y.height,y)})},clip:function(a){return this.attr("clip-path",a?"url("+this.renderer.url+"#"+a.id+")":"none")},crisp:function(a,g){var y;g=g||a.strokeWidth||0;y=Math.round(g)%2/2;a.x=Math.floor(a.x||this.x||0)+y;a.y=Math.floor(a.y||this.y||0)+y;a.width=Math.floor((a.width||this.width||0)-2*y);a.height=Math.floor((a.height||this.height||0)-
2*y);u(a.strokeWidth)&&(a.strokeWidth=g);return a},css:function(a){var y=this.styles,c={},w=this.element,b,e="",d,k=!y,p=["textOutline","textOverflow","width"];a&&a.color&&(a.fill=a.color);y&&J(a,function(a,g){a!==y[g]&&(c[g]=a,k=!0)});k&&(y&&(a=h(y,c)),b=this.textWidth=a&&a.width&&"auto"!==a.width&&"text"===w.nodeName.toLowerCase()&&g(a.width),this.styles=a,b&&!P&&this.renderer.forExport&&delete a.width,w.namespaceURI===this.SVG_NS?(d=function(a,y){return"-"+y.toLowerCase()},J(a,function(a,y){-1===
r(y,p)&&(e+=y.replace(/([A-Z])/g,d)+":"+a+";")}),e&&f(w,"style",e)):n(w,a),this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),a&&a.textOutline&&this.applyTextOutline(a.textOutline)));return this},strokeWidth:function(){return this["stroke-width"]||0},on:function(a,g){var y=this,c=y.element;p&&"click"===a?(c.ontouchstart=function(a){y.touchEventFired=Date.now();a.preventDefault();g.call(c,a)},c.onclick=function(a){(-1===R.navigator.userAgent.indexOf("Android")||1100<Date.now()-
(y.touchEventFired||0))&&g.call(c,a)}):c["on"+a]=g;return this},setRadialReference:function(a){var y=this.renderer.gradients[this.element.gradient];this.element.radialReference=a;y&&y.radAttr&&y.animate(this.renderer.getRadialAttr(a,y.radAttr));return this},translate:function(a,g){return this.attr({translateX:a,translateY:g})},invert:function(a){this.inverted=a;this.updateTransform();return this},updateTransform:function(){var a=this.translateX||0,g=this.translateY||0,c=this.scaleX,w=this.scaleY,
h=this.inverted,e=this.rotation,b=this.matrix,d=this.element;h&&(a+=this.width,g+=this.height);a=["translate("+a+","+g+")"];u(b)&&a.push("matrix("+b.join(",")+")");h?a.push("rotate(90) scale(-1,1)"):e&&a.push("rotate("+e+" "+G(this.rotationOriginX,d.getAttribute("x"),0)+" "+G(this.rotationOriginY,d.getAttribute("y")||0)+")");(u(c)||u(w))&&a.push("scale("+G(c,1)+" "+G(w,1)+")");a.length&&d.setAttribute("transform",a.join(" "))},toFront:function(){var a=this.element;a.parentNode.appendChild(a);return this},
align:function(a,g,c){var y,w,h,e,d={};w=this.renderer;h=w.alignedObjects;var b,p;if(a){if(this.alignOptions=a,this.alignByTranslate=g,!c||C(c))this.alignTo=y=c||"renderer",k(h,this),h.push(this),c=null}else a=this.alignOptions,g=this.alignByTranslate,y=this.alignTo;c=G(c,w[y],w);y=a.align;w=a.verticalAlign;h=(c.x||0)+(a.x||0);e=(c.y||0)+(a.y||0);"right"===y?b=1:"center"===y&&(b=2);b&&(h+=(c.width-(a.width||0))/b);d[g?"translateX":"x"]=Math.round(h);"bottom"===w?p=1:"middle"===w&&(p=2);p&&(e+=(c.height-
(a.height||0))/p);d[g?"translateY":"y"]=Math.round(e);this[this.placed?"animate":"attr"](d);this.placed=!0;this.alignAttr=d;return this},getBBox:function(a,g){var y,w=this.renderer,b,e=this.element,k=this.styles,p,x=this.textStr,N,m=w.cache,A=w.cacheKeys,F;g=G(g,this.rotation);b=g*c;p=k&&k.fontSize;u(x)&&(F=x.toString(),-1===F.indexOf("\x3c")&&(F=F.replace(/[0-9]/g,"0")),F+=["",g||0,p,k&&k.width,k&&k.textOverflow].join());F&&!a&&(y=m[F]);if(!y){if(e.namespaceURI===this.SVG_NS||w.forExport){try{(N=
this.fakeTS&&function(a){d(e.querySelectorAll(".highcharts-text-outline"),function(y){y.style.display=a})})&&N("none"),y=e.getBBox?h({},e.getBBox()):{width:e.offsetWidth,height:e.offsetHeight},N&&N("")}catch(W){}if(!y||0>y.width)y={width:0,height:0}}else y=this.htmlGetBBox();w.isSVG&&(a=y.width,w=y.height,k&&"11px"===k.fontSize&&17===Math.round(w)&&(y.height=w=14),g&&(y.width=Math.abs(w*Math.sin(b))+Math.abs(a*Math.cos(b)),y.height=Math.abs(w*Math.cos(b))+Math.abs(a*Math.sin(b))));if(F&&0<y.height){for(;250<
A.length;)delete m[A.shift()];m[F]||A.push(F);m[F]=y}}return y},show:function(a){return this.attr({visibility:a?"inherit":"visible"})},hide:function(){return this.attr({visibility:"hidden"})},fadeOut:function(a){var y=this;y.animate({opacity:0},{duration:a||150,complete:function(){y.attr({y:-9999})}})},add:function(a){var y=this.renderer,g=this.element,c;a&&(this.parentGroup=a);this.parentInverted=a&&a.inverted;void 0!==this.textStr&&y.buildText(this);this.added=!0;if(!a||a.handleZ||this.zIndex)c=
this.zIndexSetter();c||(a?a.element:y.box).appendChild(g);if(this.onAdd)this.onAdd();return this},safeRemoveChild:function(a){var y=a.parentNode;y&&y.removeChild(a)},destroy:function(){var a=this,g=a.element||{},c=a.renderer.isSVG&&"SPAN"===g.nodeName&&a.parentGroup,w=g.ownerSVGElement,h=a.clipPath;g.onclick=g.onmouseout=g.onmouseover=g.onmousemove=g.point=null;L(a);h&&w&&(d(w.querySelectorAll("[clip-path],[CLIP-PATH]"),function(a){var g=a.getAttribute("clip-path"),y=h.element.id;(-1<g.indexOf("(#"+
y+")")||-1<g.indexOf('("#'+y+'")'))&&a.removeAttribute("clip-path")}),a.clipPath=h.destroy());if(a.stops){for(w=0;w<a.stops.length;w++)a.stops[w]=a.stops[w].destroy();a.stops=null}a.safeRemoveChild(g);for(a.destroyShadows();c&&c.div&&0===c.div.childNodes.length;)g=c.parentGroup,a.safeRemoveChild(c.div),delete c.div,c=g;a.alignTo&&k(a.renderer.alignedObjects,a);J(a,function(g,y){delete a[y]});return null},shadow:function(a,g,c){var y=[],w,h,e=this.element,b,d,k,p;if(!a)this.destroyShadows();else if(!this.shadows){d=
G(a.width,3);k=(a.opacity||.15)/d;p=this.parentInverted?"(-1,-1)":"("+G(a.offsetX,1)+", "+G(a.offsetY,1)+")";for(w=1;w<=d;w++)h=e.cloneNode(0),b=2*d+1-2*w,f(h,{isShadow:"true",stroke:a.color||"#000000","stroke-opacity":k*w,"stroke-width":b,transform:"translate"+p,fill:"none"}),c&&(f(h,"height",Math.max(f(h,"height")-b,0)),h.cutHeight=b),g?g.element.appendChild(h):e.parentNode&&e.parentNode.insertBefore(h,e),y.push(h);this.shadows=y}return this},destroyShadows:function(){d(this.shadows||[],function(a){this.safeRemoveChild(a)},
this);this.shadows=void 0},xGetter:function(a){"circle"===this.element.nodeName&&("x"===a?a="cx":"y"===a&&(a="cy"));return this._defaultGetter(a)},_defaultGetter:function(a){a=G(this[a+"Value"],this[a],this.element?this.element.getAttribute(a):null,0);/^[\-0-9\.]+$/.test(a)&&(a=parseFloat(a));return a},dSetter:function(a,g,c){a&&a.join&&(a=a.join(" "));/(NaN| {2}|^$)/.test(a)&&(a="M 0 0");this[g]!==a&&(c.setAttribute(g,a),this[g]=a)},dashstyleSetter:function(a){var y,c=this["stroke-width"];"inherit"===
c&&(c=1);if(a=a&&a.toLowerCase()){a=a.replace("shortdashdotdot","3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(y=a.length;y--;)a[y]=g(a[y])*c;a=a.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",a)}},alignSetter:function(a){this.alignValue=a;this.element.setAttribute("text-anchor",{left:"start",center:"middle",
right:"end"}[a])},opacitySetter:function(a,g,c){this[g]=a;c.setAttribute(g,a)},titleSetter:function(a){var g=this.element.getElementsByTagName("title")[0];g||(g=m.createElementNS(this.SVG_NS,"title"),this.element.appendChild(g));g.firstChild&&g.removeChild(g.firstChild);g.appendChild(m.createTextNode(String(G(a),"").replace(/<[^>]*>/g,"").replace(/&lt;/g,"\x3c").replace(/&gt;/g,"\x3e")))},textSetter:function(a){a!==this.textStr&&(delete this.bBox,this.textStr=a,this.added&&this.renderer.buildText(this))},
fillSetter:function(a,g,c){"string"===typeof a?c.setAttribute(g,a):a&&this.colorGradient(a,g,c)},visibilitySetter:function(a,g,c){"inherit"===a?c.removeAttribute(g):this[g]!==a&&c.setAttribute(g,a);this[g]=a},zIndexSetter:function(a,c){var w=this.renderer,y=this.parentGroup,h=(y||w).element||w.box,e,b=this.element,d,k,w=h===w.box;e=this.added;var p;u(a)&&(b.zIndex=a,a=+a,this[c]===a&&(e=!1),this[c]=a);if(e){(a=this.zIndex)&&y&&(y.handleZ=!0);c=h.childNodes;for(p=c.length-1;0<=p&&!d;p--)if(y=c[p],
e=y.zIndex,k=!u(e),y!==b)if(0>a&&k&&!w&&!p)h.insertBefore(b,c[p]),d=!0;else if(g(e)<=a||k&&(!u(a)||0<=a))h.insertBefore(b,c[p+1]||null),d=!0;d||(h.insertBefore(b,c[w?3:0]||null),d=!0)}return d},_defaultSetter:function(a,g,c){c.setAttribute(g,a)}});B.prototype.yGetter=B.prototype.xGetter;B.prototype.translateXSetter=B.prototype.translateYSetter=B.prototype.rotationSetter=B.prototype.verticalAlignSetter=B.prototype.rotationOriginXSetter=B.prototype.rotationOriginYSetter=B.prototype.scaleXSetter=B.prototype.scaleYSetter=
B.prototype.matrixSetter=function(a,g){this[g]=a;this.doTransform=!0};B.prototype["stroke-widthSetter"]=B.prototype.strokeSetter=function(a,g,c){this[g]=a;this.stroke&&this["stroke-width"]?(B.prototype.fillSetter.call(this,this.stroke,"stroke",c),c.setAttribute("stroke-width",this["stroke-width"]),this.hasStroke=!0):"stroke-width"===g&&0===a&&this.hasStroke&&(c.removeAttribute("stroke"),this.hasStroke=!1)};H=a.SVGRenderer=function(){this.init.apply(this,arguments)};h(H.prototype,{Element:B,SVG_NS:N,
init:function(a,g,c,w,h,e){var y;w=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}).css(this.getStyle(w));y=w.element;a.appendChild(y);f(a,"dir","ltr");-1===a.innerHTML.indexOf("xmlns")&&f(y,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=y;this.boxWrapper=w;this.alignedObjects=[];this.url=(z||x)&&m.getElementsByTagName("base").length?R.location.href.replace(/#.*?$/,"").replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20"):"";this.createElement("desc").add().element.appendChild(m.createTextNode("Created with Highcharts 6.0.7"));
this.defs=this.createElement("defs").add();this.allowHTML=e;this.forExport=h;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(g,c,!1);var b;z&&a.getBoundingClientRect&&(g=function(){n(a,{left:0,top:0});b=a.getBoundingClientRect();n(a,{left:Math.ceil(b.left)-b.left+"px",top:Math.ceil(b.top)-b.top+"px"})},g(),this.unSubPixelFix=E(R,"resize",g))},getStyle:function(a){return this.style=h({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},
a)},setStyle:function(a){this.boxWrapper.css(this.getStyle(a))},isHidden:function(){return!this.boxWrapper.getBBox().width},destroy:function(){var a=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();b(this.gradients||{});this.gradients=null;a&&(this.defs=a.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null},createElement:function(a){var g=new this.Element;g.init(this,a);return g},draw:A,getRadialAttr:function(a,g){return{cx:a[0]-a[2]/2+g.cx*a[2],cy:a[1]-
a[2]/2+g.cy*a[2],r:g.r*a[2]}},getSpanWidth:function(a){return a.getBBox(!0).width},applyEllipsis:function(a,g,c,w){var h=a.rotation,y=c,b,e=0,d=c.length,k=function(a){g.removeChild(g.firstChild);a&&g.appendChild(m.createTextNode(a))},p;a.rotation=0;y=this.getSpanWidth(a,g);if(p=y>w){for(;e<=d;)b=Math.ceil((e+d)/2),y=c.substring(0,b)+"\u2026",k(y),y=this.getSpanWidth(a,g),e===d?e=d+1:y>w?d=b-1:e=b;0===d&&k("")}a.rotation=h;return p},escapes:{"\x26":"\x26amp;","\x3c":"\x26lt;","\x3e":"\x26gt;","'":"\x26#39;",
'"':"\x26quot;"},buildText:function(a){var c=a.element,w=this,h=w.forExport,b=G(a.textStr,"").toString(),y=-1!==b.indexOf("\x3c"),k=c.childNodes,p,x,A,F,z=f(c,"x"),L=a.styles,O=a.textWidth,l=L&&L.lineHeight,D=L&&L.textOutline,C=L&&"ellipsis"===L.textOverflow,v=L&&"nowrap"===L.whiteSpace,u=L&&L.fontSize,M,t,I=k.length,L=O&&!a.added&&this.box,R=function(a){var h;h=/(px|em)$/.test(a&&a.style.fontSize)?a.style.fontSize:u||w.style.fontSize||12;return l?g(l):w.fontMetrics(h,a.getAttribute("style")?a:c).h},
q=function(a,g){J(w.escapes,function(c,w){g&&-1!==r(c,g)||(a=a.toString().replace(new RegExp(c,"g"),w))});return a};M=[b,C,v,l,D,u,O].join();if(M!==a.textCache){for(a.textCache=M;I--;)c.removeChild(k[I]);y||D||C||O||-1!==b.indexOf(" ")?(p=/<.*class="([^"]+)".*>/,x=/<.*style="([^"]+)".*>/,A=/<.*href="([^"]+)".*>/,L&&L.appendChild(c),b=y?b.replace(/<(b|strong)>/g,'\x3cspan style\x3d"font-weight:bold"\x3e').replace(/<(i|em)>/g,'\x3cspan style\x3d"font-style:italic"\x3e').replace(/<a/g,"\x3cspan").replace(/<\/(b|strong|i|em|a)>/g,
"\x3c/span\x3e").split(/<br.*?>/g):[b],b=e(b,function(a){return""!==a}),d(b,function(g,b){var e,y=0;g=g.replace(/^\s+|\s+$/g,"").replace(/<span/g,"|||\x3cspan").replace(/<\/span>/g,"\x3c/span\x3e|||");e=g.split("|||");d(e,function(g){if(""!==g||1===e.length){var d={},k=m.createElementNS(w.SVG_NS,"tspan"),r,L;p.test(g)&&(r=g.match(p)[1],f(k,"class",r));x.test(g)&&(L=g.match(x)[1].replace(/(;| |^)color([ :])/,"$1fill$2"),f(k,"style",L));A.test(g)&&!h&&(f(k,"onclick",'location.href\x3d"'+g.match(A)[1]+
'"'),f(k,"class","highcharts-anchor"),n(k,{cursor:"pointer"}));g=q(g.replace(/<[a-zA-Z\/](.|\n)*?>/g,"")||" ");if(" "!==g){k.appendChild(m.createTextNode(g));y?d.dx=0:b&&null!==z&&(d.x=z);f(k,d);c.appendChild(k);!y&&t&&(!P&&h&&n(k,{display:"block"}),f(k,"dy",R(k)));if(O){d=g.replace(/([^\^])-/g,"$1- ").split(" ");r=1<e.length||b||1<d.length&&!v;var l=[],D,J=R(k),G=a.rotation;for(C&&(F=w.applyEllipsis(a,k,g,O));!C&&r&&(d.length||l.length);)a.rotation=0,D=w.getSpanWidth(a,k),g=D>O,void 0===F&&(F=g),
g&&1!==d.length?(k.removeChild(k.firstChild),l.unshift(d.pop())):(d=l,l=[],d.length&&!v&&(k=m.createElementNS(N,"tspan"),f(k,{dy:J,x:z}),L&&f(k,"style",L),c.appendChild(k)),D>O&&(O=D)),d.length&&k.appendChild(m.createTextNode(d.join(" ").replace(/- /g,"-")));a.rotation=G}y++}}});t=t||c.childNodes.length}),F&&a.attr("title",q(a.textStr,["\x26lt;","\x26gt;"])),L&&L.removeChild(c),D&&a.applyTextOutline&&a.applyTextOutline(D)):c.appendChild(m.createTextNode(q(b)))}},getContrast:function(a){a=t(a).rgba;
return 510<a[0]+a[1]+a[2]?"#000000":"#FFFFFF"},button:function(a,g,c,w,b,d,e,k,p){var y=this.label(a,g,c,p,null,null,null,null,"button"),x=0;y.attr(F({padding:8,r:2},b));var N,m,A,r;b=F({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1,style:{color:"#333333",cursor:"pointer",fontWeight:"normal"}},b);N=b.style;delete b.style;d=F(b,{fill:"#e6e6e6"},d);m=d.style;delete d.style;e=F(b,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},e);A=e.style;delete e.style;k=F(b,{style:{color:"#cccccc"}},
k);r=k.style;delete k.style;E(y.element,M?"mouseover":"mouseenter",function(){3!==x&&y.setState(1)});E(y.element,M?"mouseout":"mouseleave",function(){3!==x&&y.setState(x)});y.setState=function(a){1!==a&&(y.state=x=a);y.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][a||0]);y.attr([b,d,e,k][a||0]).css([N,m,A,r][a||0])};y.attr(b).css(h({cursor:"default"},N));return y.on("click",function(a){3!==x&&w.call(y,a)})},crispLine:function(a,
g){a[1]===a[4]&&(a[1]=a[4]=Math.round(a[1])-g%2/2);a[2]===a[5]&&(a[2]=a[5]=Math.round(a[2])+g%2/2);return a},path:function(a){var g={fill:"none"};I(a)?g.d=a:D(a)&&h(g,a);return this.createElement("path").attr(g)},circle:function(a,g,c){a=D(a)?a:{x:a,y:g,r:c};g=this.createElement("circle");g.xSetter=g.ySetter=function(a,g,c){c.setAttribute("c"+g,a)};return g.attr(a)},arc:function(a,g,c,w,b,h){D(a)?(w=a,g=w.y,c=w.r,a=w.x):w={innerR:w,start:b,end:h};a=this.symbol("arc",a,g,c,c,w);a.r=c;return a},rect:function(a,
g,c,w,b,h){b=D(a)?a.r:b;var d=this.createElement("rect");a=D(a)?a:void 0===a?{}:{x:a,y:g,width:Math.max(c,0),height:Math.max(w,0)};void 0!==h&&(a.strokeWidth=h,a=d.crisp(a));a.fill="none";b&&(a.r=b);d.rSetter=function(a,g,c){f(c,{rx:a,ry:a})};return d.attr(a)},setSize:function(a,g,c){var w=this.alignedObjects,b=w.length;this.width=a;this.height=g;for(this.boxWrapper.animate({width:a,height:g},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:G(c,!0)?
void 0:0});b--;)w[b].align()},g:function(a){var g=this.createElement("g");return a?g.attr({"class":"highcharts-"+a}):g},image:function(a,g,c,w,b){var d={preserveAspectRatio:"none"};1<arguments.length&&h(d,{x:g,y:c,width:w,height:b});d=this.createElement("image").attr(d);d.element.setAttributeNS?d.element.setAttributeNS("http://www.w3.org/1999/xlink","href",a):d.element.setAttribute("hc-svg-href",a);return d},symbol:function(a,g,c,w,b,e){var k=this,p,y=/^url\((.*?)\)$/,x=y.test(a),N=!x&&(this.symbols[a]?
a:"circle"),A=N&&this.symbols[N],F=u(g)&&A&&A.call(this.symbols,Math.round(g),Math.round(c),w,b,e),r,L;A?(p=this.path(F),p.attr("fill","none"),h(p,{symbolName:N,x:g,y:c,width:w,height:b}),e&&h(p,e)):x&&(r=a.match(y)[1],p=this.image(r),p.imgwidth=G(O[r]&&O[r].width,e&&e.width),p.imgheight=G(O[r]&&O[r].height,e&&e.height),L=function(){p.attr({width:p.width,height:p.height})},d(["width","height"],function(a){p[a+"Setter"]=function(a,g){var c={},w=this["img"+g],b="width"===g?"translateX":"translateY";
this[g]=a;u(w)&&(this.element&&this.element.setAttribute(g,w),this.alignByTranslate||(c[b]=((this[g]||0)-w)/2,this.attr(c)))}}),u(g)&&p.attr({x:g,y:c}),p.isImg=!0,u(p.imgwidth)&&u(p.imgheight)?L():(p.attr({width:0,height:0}),v("img",{onload:function(){var a=l[k.chartIndex];0===this.width&&(n(this,{position:"absolute",top:"-999em"}),m.body.appendChild(this));O[r]={width:this.width,height:this.height};p.imgwidth=this.width;p.imgheight=this.height;p.element&&L();this.parentNode&&this.parentNode.removeChild(this);
k.imgCount--;if(!k.imgCount&&a&&a.onload)a.onload()},src:r}),this.imgCount++));return p},symbols:{circle:function(a,g,c,w){return this.arc(a+c/2,g+w/2,c/2,w/2,{start:0,end:2*Math.PI,open:!1})},square:function(a,g,c,w){return["M",a,g,"L",a+c,g,a+c,g+w,a,g+w,"Z"]},triangle:function(a,g,c,w){return["M",a+c/2,g,"L",a+c,g+w,a,g+w,"Z"]},"triangle-down":function(a,g,c,w){return["M",a,g,"L",a+c,g,a+c/2,g+w,"Z"]},diamond:function(a,g,c,w){return["M",a+c/2,g,"L",a+c,g+w/2,a+c/2,g+w,a,g+w/2,"Z"]},arc:function(a,
g,c,w,b){var h=b.start,d=b.r||c,e=b.r||w||c,k=b.end-.001;c=b.innerR;w=G(b.open,.001>Math.abs(b.end-b.start-2*Math.PI));var p=Math.cos(h),y=Math.sin(h),x=Math.cos(k),k=Math.sin(k);b=.001>b.end-h-Math.PI?0:1;d=["M",a+d*p,g+e*y,"A",d,e,0,b,1,a+d*x,g+e*k];u(c)&&d.push(w?"M":"L",a+c*x,g+c*k,"A",c,c,0,b,0,a+c*p,g+c*y);d.push(w?"":"Z");return d},callout:function(a,g,c,w,b){var h=Math.min(b&&b.r||0,c,w),d=h+6,e=b&&b.anchorX;b=b&&b.anchorY;var k;k=["M",a+h,g,"L",a+c-h,g,"C",a+c,g,a+c,g,a+c,g+h,"L",a+c,g+w-
h,"C",a+c,g+w,a+c,g+w,a+c-h,g+w,"L",a+h,g+w,"C",a,g+w,a,g+w,a,g+w-h,"L",a,g+h,"C",a,g,a,g,a+h,g];e&&e>c?b>g+d&&b<g+w-d?k.splice(13,3,"L",a+c,b-6,a+c+6,b,a+c,b+6,a+c,g+w-h):k.splice(13,3,"L",a+c,w/2,e,b,a+c,w/2,a+c,g+w-h):e&&0>e?b>g+d&&b<g+w-d?k.splice(33,3,"L",a,b+6,a-6,b,a,b-6,a,g+h):k.splice(33,3,"L",a,w/2,e,b,a,w/2,a,g+h):b&&b>w&&e>a+d&&e<a+c-d?k.splice(23,3,"L",e+6,g+w,e,g+w+6,e-6,g+w,a+h,g+w):b&&0>b&&e>a+d&&e<a+c-d&&k.splice(3,3,"L",e-6,g,e,g-6,e+6,g,c-h,g);return k}},clipRect:function(g,c,w,
b){var h=a.uniqueKey(),d=this.createElement("clipPath").attr({id:h}).add(this.defs);g=this.rect(g,c,w,b,0).add(d);g.id=h;g.clipPath=d;g.count=0;return g},text:function(a,g,c,w){var b={};if(w&&(this.allowHTML||!this.forExport))return this.html(a,g,c);b.x=Math.round(g||0);c&&(b.y=Math.round(c));if(a||0===a)b.text=a;a=this.createElement("text").attr(b);w||(a.xSetter=function(a,g,c){var w=c.getElementsByTagName("tspan"),b,h=c.getAttribute(g),d;for(d=0;d<w.length;d++)b=w[d],b.getAttribute(g)===h&&b.setAttribute(g,
a);c.setAttribute(g,a)});return a},fontMetrics:function(a,c){a=a||c&&c.style&&c.style.fontSize||this.style&&this.style.fontSize;a=/px/.test(a)?g(a):/em/.test(a)?parseFloat(a)*(c?this.fontMetrics(null,c.parentNode).f:16):12;c=24>a?a+3:Math.round(1.2*a);return{h:c,b:Math.round(.8*c),f:a}},rotCorr:function(a,g,w){var b=a;g&&w&&(b=Math.max(b*Math.cos(g*c),4));return{x:-a/3*Math.sin(g*c),y:b}},label:function(g,c,b,e,k,p,x,N,m){var A=this,r=A.g("button"!==m&&"label"),y=r.text=A.text("",0,0,x).attr({zIndex:1}),
L,P,z=0,O=3,l=0,n,D,f,J,C,G={},v,M,t=/^url\((.*?)\)$/.test(e),I=t,R,q,Q,T;m&&r.addClass("highcharts-"+m);I=t;R=function(){return(v||0)%2/2};q=function(){var a=y.element.style,g={};P=(void 0===n||void 0===D||C)&&u(y.textStr)&&y.getBBox();r.width=(n||P.width||0)+2*O+l;r.height=(D||P.height||0)+2*O;M=O+A.fontMetrics(a&&a.fontSize,y).b;I&&(L||(r.box=L=A.symbols[e]||t?A.symbol(e):A.rect(),L.addClass(("button"===m?"":"highcharts-label-box")+(m?" highcharts-"+m+"-box":"")),L.add(r),a=R(),g.x=a,g.y=(N?-M:
0)+a),g.width=Math.round(r.width),g.height=Math.round(r.height),L.attr(h(g,G)),G={})};Q=function(){var a=l+O,g;g=N?0:M;u(n)&&P&&("center"===C||"right"===C)&&(a+={center:.5,right:1}[C]*(n-P.width));if(a!==y.x||g!==y.y)y.attr("x",a),void 0!==g&&y.attr("y",g);y.x=a;y.y=g};T=function(a,g){L?L.attr(a,g):G[a]=g};r.onAdd=function(){y.add(r);r.attr({text:g||0===g?g:"",x:c,y:b});L&&u(k)&&r.attr({anchorX:k,anchorY:p})};r.widthSetter=function(g){n=a.isNumber(g)?g:null};r.heightSetter=function(a){D=a};r["text-alignSetter"]=
function(a){C=a};r.paddingSetter=function(a){u(a)&&a!==O&&(O=r.padding=a,Q())};r.paddingLeftSetter=function(a){u(a)&&a!==l&&(l=a,Q())};r.alignSetter=function(a){a={left:0,center:.5,right:1}[a];a!==z&&(z=a,P&&r.attr({x:f}))};r.textSetter=function(a){void 0!==a&&y.textSetter(a);q();Q()};r["stroke-widthSetter"]=function(a,g){a&&(I=!0);v=this["stroke-width"]=a;T(g,a)};r.strokeSetter=r.fillSetter=r.rSetter=function(a,g){"r"!==g&&("fill"===g&&a&&(I=!0),r[g]=a);T(g,a)};r.anchorXSetter=function(a,g){k=r.anchorX=
a;T(g,Math.round(a)-R()-f)};r.anchorYSetter=function(a,g){p=r.anchorY=a;T(g,a-J)};r.xSetter=function(a){r.x=a;z&&(a-=z*((n||P.width)+2*O));f=Math.round(a);r.attr("translateX",f)};r.ySetter=function(a){J=r.y=Math.round(a);r.attr("translateY",J)};var U=r.css;return h(r,{css:function(a){if(a){var g={};a=F(a);d(r.textProps,function(c){void 0!==a[c]&&(g[c]=a[c],delete a[c])});y.css(g)}return U.call(r,a)},getBBox:function(){return{width:P.width+2*O,height:P.height+2*O,x:P.x-O,y:P.y-O}},shadow:function(a){a&&
(q(),L&&L.shadow(a));return r},destroy:function(){w(r.element,"mouseenter");w(r.element,"mouseleave");y&&(y=y.destroy());L&&(L=L.destroy());B.prototype.destroy.call(r);r=A=q=Q=T=null}})}});a.Renderer=H})(K);(function(a){var B=a.attr,H=a.createElement,E=a.css,q=a.defined,f=a.each,l=a.extend,t=a.isFirefox,n=a.isMS,v=a.isWebKit,u=a.pick,c=a.pInt,b=a.SVGRenderer,m=a.win,d=a.wrap;l(a.SVGElement.prototype,{htmlCss:function(a){var c=this.element;if(c=a&&"SPAN"===c.tagName&&a.width)delete a.width,this.textWidth=
c,this.updateTransform();a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=l(this.styles,a);E(this.element,a);return this},htmlGetBBox:function(){var a=this.element;return{x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}},htmlUpdateTransform:function(){if(this.added){var a=this.renderer,b=this.element,d=this.translateX||0,p=this.translateY||0,r=this.x||0,m=this.y||0,z=this.textAlign||"left",l={left:0,center:.5,right:1}[z],n=this.styles,
C=n&&n.whiteSpace;E(b,{marginLeft:d,marginTop:p});this.shadows&&f(this.shadows,function(a){E(a,{marginLeft:d+1,marginTop:p+1})});this.inverted&&f(b.childNodes,function(c){a.invertChild(c,b)});if("SPAN"===b.tagName){var n=this.rotation,x=this.textWidth&&c(this.textWidth),F=[n,z,b.innerHTML,this.textWidth,this.textAlign].join(),A;(A=x!==this.oldTextWidth)&&!(A=x>this.oldTextWidth)&&((A=this.textPxLength)||(E(b,{width:"",whiteSpace:C||"nowrap"}),A=b.offsetWidth),A=A>x);A&&/[ \-]/.test(b.textContent||
b.innerText)&&(E(b,{width:x+"px",display:"block",whiteSpace:C||"normal"}),this.oldTextWidth=x);F!==this.cTT&&(C=a.fontMetrics(b.style.fontSize).b,q(n)&&n!==(this.oldRotation||0)&&this.setSpanRotation(n,l,C),this.getSpanCorrection(this.textPxLength||b.offsetWidth,C,l,n,z));E(b,{left:r+(this.xCorr||0)+"px",top:m+(this.yCorr||0)+"px"});this.cTT=F;this.oldRotation=n}}else this.alignOnAdd=!0},setSpanRotation:function(a,c,b){var d={},e=this.renderer.getTransformKey();d[e]=d.transform="rotate("+a+"deg)";
d[e+(t?"Origin":"-origin")]=d.transformOrigin=100*c+"% "+b+"px";E(this.element,d)},getSpanCorrection:function(a,c,b){this.xCorr=-a*b;this.yCorr=-c}});l(b.prototype,{getTransformKey:function(){return n&&!/Edge/.test(m.navigator.userAgent)?"-ms-transform":v?"-webkit-transform":t?"MozTransform":m.opera?"-o-transform":""},html:function(a,c,b){var e=this.createElement("span"),h=e.element,k=e.renderer,m=k.isSVG,n=function(a,c){f(["opacity","visibility"],function(b){d(a,b+"Setter",function(a,b,e,d){a.call(this,
b,e,d);c[e]=b})})};e.textSetter=function(a){a!==h.innerHTML&&delete this.bBox;this.textStr=a;h.innerHTML=u(a,"");e.doTransform=!0};m&&n(e,e.element.style);e.xSetter=e.ySetter=e.alignSetter=e.rotationSetter=function(a,c){"align"===c&&(c="textAlign");e[c]=a;e.doTransform=!0};e.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};e.attr({text:a,x:Math.round(c),y:Math.round(b)}).css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize,position:"absolute"});
h.style.whiteSpace="nowrap";e.css=e.htmlCss;m&&(e.add=function(a){var c,b=k.box.parentNode,d=[];if(this.parentGroup=a){if(c=a.div,!c){for(;a;)d.push(a),a=a.parentGroup;f(d.reverse(),function(a){function h(g,c){a[c]=g;"translateX"===c?k.left=g+"px":k.top=g+"px";a.doTransform=!0}var k,g=B(a.element,"class");g&&(g={className:g});c=a.div=a.div||H("div",g,{position:"absolute",left:(a.translateX||0)+"px",top:(a.translateY||0)+"px",display:a.display,opacity:a.opacity,pointerEvents:a.styles&&a.styles.pointerEvents},
c||b);k=c.style;l(a,{classSetter:function(a){return function(g){this.element.setAttribute("class",g);a.className=g}}(c),on:function(){d[0].div&&e.on.apply({element:d[0].div},arguments);return a},translateXSetter:h,translateYSetter:h});n(a,k)})}}else c=b;c.appendChild(h);e.added=!0;e.alignOnAdd&&e.htmlUpdateTransform();return e});return e}})})(K);(function(a){var B=a.defined,H=a.each,E=a.extend,q=a.merge,f=a.pick,l=a.timeUnits,t=a.win;a.Time=function(a){this.update(a,!1)};a.Time.prototype={defaultOptions:{},
update:function(n){var l=f(n&&n.useUTC,!0),u=this;this.options=n=q(!0,this.options||{},n);this.Date=n.Date||t.Date;this.timezoneOffset=(this.useUTC=l)&&n.timezoneOffset;this.getTimezoneOffset=this.timezoneOffsetFunction();(this.variableTimezone=!(l&&!n.getTimezoneOffset&&!n.timezone))||this.timezoneOffset?(this.get=function(a,b){var c=b.getTime(),d=c-u.getTimezoneOffset(b);b.setTime(d);a=b["getUTC"+a]();b.setTime(c);return a},this.set=function(c,b,m){var d;if(-1!==a.inArray(c,["Milliseconds","Seconds",
"Minutes"]))b["set"+c](m);else d=u.getTimezoneOffset(b),d=b.getTime()-d,b.setTime(d),b["setUTC"+c](m),c=u.getTimezoneOffset(b),d=b.getTime()+c,b.setTime(d)}):l?(this.get=function(a,b){return b["getUTC"+a]()},this.set=function(a,b,m){return b["setUTC"+a](m)}):(this.get=function(a,b){return b["get"+a]()},this.set=function(a,b,m){return b["set"+a](m)})},makeTime:function(l,v,u,c,b,m){var d,h,k;this.useUTC?(d=this.Date.UTC.apply(0,arguments),h=this.getTimezoneOffset(d),d+=h,k=this.getTimezoneOffset(d),
h!==k?d+=k-h:h-36E5!==this.getTimezoneOffset(d-36E5)||a.isSafari||(d-=36E5)):d=(new this.Date(l,v,f(u,1),f(c,0),f(b,0),f(m,0))).getTime();return d},timezoneOffsetFunction:function(){var l=this,f=this.options,u=t.moment;if(!this.useUTC)return function(a){return 6E4*(new Date(a)).getTimezoneOffset()};if(f.timezone){if(u)return function(a){return 6E4*-u.tz(a,f.timezone).utcOffset()};a.error(25)}return this.useUTC&&f.getTimezoneOffset?function(a){return 6E4*f.getTimezoneOffset(a)}:function(){return 6E4*
(l.timezoneOffset||0)}},dateFormat:function(l,f,u){if(!a.defined(f)||isNaN(f))return a.defaultOptions.lang.invalidDate||"";l=a.pick(l,"%Y-%m-%d %H:%M:%S");var c=this,b=new this.Date(f),m=this.get("Hours",b),d=this.get("Day",b),h=this.get("Date",b),k=this.get("Month",b),e=this.get("FullYear",b),p=a.defaultOptions.lang,r=p.weekdays,n=p.shortWeekdays,z=a.pad,b=a.extend({a:n?n[d]:r[d].substr(0,3),A:r[d],d:z(h),e:z(h,2," "),w:d,b:p.shortMonths[k],B:p.months[k],m:z(k+1),y:e.toString().substr(2,2),Y:e,H:z(m),
k:m,I:z(m%12||12),l:m%12||12,M:z(c.get("Minutes",b)),p:12>m?"AM":"PM",P:12>m?"am":"pm",S:z(b.getSeconds()),L:z(Math.round(f%1E3),3)},a.dateFormats);a.objectEach(b,function(a,b){for(;-1!==l.indexOf("%"+b);)l=l.replace("%"+b,"function"===typeof a?a.call(c,f):a)});return u?l.substr(0,1).toUpperCase()+l.substr(1):l},getTimeTicks:function(a,v,u,c){var b=this,m=[],d={},h,k=new b.Date(v),e=a.unitRange,p=a.count||1,r;if(B(v)){b.set("Milliseconds",k,e>=l.second?0:p*Math.floor(b.get("Milliseconds",k)/p));e>=
l.second&&b.set("Seconds",k,e>=l.minute?0:p*Math.floor(b.get("Seconds",k)/p));e>=l.minute&&b.set("Minutes",k,e>=l.hour?0:p*Math.floor(b.get("Minutes",k)/p));e>=l.hour&&b.set("Hours",k,e>=l.day?0:p*Math.floor(b.get("Hours",k)/p));e>=l.day&&b.set("Date",k,e>=l.month?1:p*Math.floor(b.get("Date",k)/p));e>=l.month&&(b.set("Month",k,e>=l.year?0:p*Math.floor(b.get("Month",k)/p)),h=b.get("FullYear",k));e>=l.year&&b.set("FullYear",k,h-h%p);e===l.week&&b.set("Date",k,b.get("Date",k)-b.get("Day",k)+f(c,1));
h=b.get("FullYear",k);c=b.get("Month",k);var n=b.get("Date",k),z=b.get("Hours",k);v=k.getTime();b.variableTimezone&&(r=u-v>4*l.month||b.getTimezoneOffset(v)!==b.getTimezoneOffset(u));k=k.getTime();for(v=1;k<u;)m.push(k),k=e===l.year?b.makeTime(h+v*p,0):e===l.month?b.makeTime(h,c+v*p):!r||e!==l.day&&e!==l.week?r&&e===l.hour&&1<p?b.makeTime(h,c,n,z+v*p):k+e*p:b.makeTime(h,c,n+v*p*(e===l.day?1:7)),v++;m.push(k);e<=l.hour&&1E4>m.length&&H(m,function(a){0===a%18E5&&"000000000"===b.dateFormat("%H%M%S%L",
a)&&(d[a]="day")})}m.info=E(a,{higherRanks:d,totalRange:e*p});return m}}})(K);(function(a){var B=a.color,H=a.merge;a.defaultOptions={colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:a.Time.prototype.defaultOptions,chart:{borderRadius:0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"},
title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},plotOptions:{},labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},
shadow:!1,itemCheckboxStyle:{position:"absolute",width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:a.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",
day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",month:"%B %Y",year:"%Y"},footerFormat:"",padding:8,snap:a.isTouchDevice?25:10,backgroundColor:B("#f7f7f7").setOpacity(.85).get(),borderWidth:1,headerFormat:'\x3cspan style\x3d"font-size: 10px"\x3e{point.key}\x3c/span\x3e\x3cbr/\x3e',pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e',shadow:!0,style:{color:"#333333",cursor:"default",fontSize:"12px",pointerEvents:"none",
whiteSpace:"nowrap"}},credits:{enabled:!0,href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};a.setOptions=function(B){a.defaultOptions=H(!0,a.defaultOptions,B);a.time.update(H(a.defaultOptions.global,a.defaultOptions.time),!1);return a.defaultOptions};a.getOptions=function(){return a.defaultOptions};a.defaultPlotOptions=a.defaultOptions.plotOptions;a.time=new a.Time(H(a.defaultOptions.global,
a.defaultOptions.time));a.dateFormat=function(B,q,f){return a.time.dateFormat(B,q,f)}})(K);(function(a){var B=a.correctFloat,H=a.defined,E=a.destroyObjectProperties,q=a.isNumber,f=a.merge,l=a.pick,t=a.deg2rad;a.Tick=function(a,l,f,c){this.axis=a;this.pos=l;this.type=f||"";this.isNewLabel=this.isNew=!0;f||c||this.addLabel()};a.Tick.prototype={addLabel:function(){var a=this.axis,v=a.options,u=a.chart,c=a.categories,b=a.names,m=this.pos,d=v.labels,h=a.tickPositions,k=m===h[0],e=m===h[h.length-1],b=c?
l(c[m],b[m],m):m,c=this.label,h=h.info,p;a.isDatetimeAxis&&h&&(p=v.dateTimeLabelFormats[h.higherRanks[m]||h.unitName]);this.isFirst=k;this.isLast=e;v=a.labelFormatter.call({axis:a,chart:u,isFirst:k,isLast:e,dateTimeLabelFormat:p,value:a.isLog?B(a.lin2log(b)):b,pos:m});if(H(c))c&&c.attr({text:v});else{if(this.label=c=H(v)&&d.enabled?u.renderer.text(v,0,0,d.useHTML).css(f(d.style)).add(a.labelGroup):null)c.textPxLength=c.getBBox().width;this.rotation=0}},getLabelSize:function(){return this.label?this.label.getBBox()[this.axis.horiz?
"height":"width"]:0},handleOverflow:function(a){var f=this.axis,n=f.options.labels,c=a.x,b=f.chart.chartWidth,m=f.chart.spacing,d=l(f.labelLeft,Math.min(f.pos,m[3])),m=l(f.labelRight,Math.max(f.isRadial?0:f.pos+f.len,b-m[1])),h=this.label,k=this.rotation,e={left:0,center:.5,right:1}[f.labelAlign||h.attr("align")],p=h.getBBox().width,r=f.getSlotWidth(),I=r,z=1,M,D={};if(k||!1===n.overflow)0>k&&c-e*p<d?M=Math.round(c/Math.cos(k*t)-d):0<k&&c+e*p>m&&(M=Math.round((b-c)/Math.cos(k*t)));else if(b=c+(1-
e)*p,c-e*p<d?I=a.x+I*(1-e)-d:b>m&&(I=m-a.x+I*e,z=-1),I=Math.min(r,I),I<r&&"center"===f.labelAlign&&(a.x+=z*(r-I-e*(r-Math.min(p,I)))),p>I||f.autoRotation&&(h.styles||{}).width)M=I;M&&(D.width=M,(n.style||{}).textOverflow||(D.textOverflow="ellipsis"),h.css(D))},getPosition:function(l,f,u,c){var b=this.axis,m=b.chart,d=c&&m.oldChartHeight||m.chartHeight;return{x:l?a.correctFloat(b.translate(f+u,null,null,c)+b.transB):b.left+b.offset+(b.opposite?(c&&m.oldChartWidth||m.chartWidth)-b.right-b.left:0),y:l?
d-b.bottom+b.offset-(b.opposite?b.height:0):a.correctFloat(d-b.translate(f+u,null,null,c)-b.transB)}},getLabelPosition:function(a,l,f,c,b,m,d,h){var k=this.axis,e=k.transA,p=k.reversed,r=k.staggerLines,n=k.tickRotCorr||{x:0,y:0},z=b.y,u=c||k.reserveSpaceDefault?0:-k.labelOffset*("center"===k.labelAlign?.5:1);H(z)||(z=0===k.side?f.rotation?-8:-f.getBBox().height:2===k.side?n.y+8:Math.cos(f.rotation*t)*(n.y-f.getBBox(!1,0).height/2));a=a+b.x+u+n.x-(m&&c?m*e*(p?-1:1):0);l=l+z-(m&&!c?m*e*(p?1:-1):0);
r&&(f=d/(h||1)%r,k.opposite&&(f=r-f-1),l+=k.labelOffset/r*f);return{x:a,y:Math.round(l)}},getMarkPath:function(a,l,f,c,b,m){return m.crispLine(["M",a,l,"L",a+(b?0:-f),l+(b?f:0)],c)},renderGridLine:function(a,l,f){var c=this.axis,b=c.options,m=this.gridLine,d={},h=this.pos,k=this.type,e=c.tickmarkOffset,p=c.chart.renderer,r=k?k+"Grid":"grid",n=b[r+"LineWidth"],z=b[r+"LineColor"],b=b[r+"LineDashStyle"];m||(d.stroke=z,d["stroke-width"]=n,b&&(d.dashstyle=b),k||(d.zIndex=1),a&&(d.opacity=0),this.gridLine=
m=p.path().attr(d).addClass("highcharts-"+(k?k+"-":"")+"grid-line").add(c.gridGroup));if(!a&&m&&(a=c.getPlotLinePath(h+e,m.strokeWidth()*f,a,!0)))m[this.isNew?"attr":"animate"]({d:a,opacity:l})},renderMark:function(a,f,u){var c=this.axis,b=c.options,m=c.chart.renderer,d=this.type,h=d?d+"Tick":"tick",k=c.tickSize(h),e=this.mark,p=!e,r=a.x;a=a.y;var n=l(b[h+"Width"],!d&&c.isXAxis?1:0),b=b[h+"Color"];k&&(c.opposite&&(k[0]=-k[0]),p&&(this.mark=e=m.path().addClass("highcharts-"+(d?d+"-":"")+"tick").add(c.axisGroup),
e.attr({stroke:b,"stroke-width":n})),e[p?"attr":"animate"]({d:this.getMarkPath(r,a,k[0],e.strokeWidth()*u,c.horiz,m),opacity:f}))},renderLabel:function(a,f,u,c){var b=this.axis,m=b.horiz,d=b.options,h=this.label,k=d.labels,e=k.step,b=b.tickmarkOffset,p=!0,r=a.x;a=a.y;h&&q(r)&&(h.xy=a=this.getLabelPosition(r,a,h,m,k,b,c,e),this.isFirst&&!this.isLast&&!l(d.showFirstLabel,1)||this.isLast&&!this.isFirst&&!l(d.showLastLabel,1)?p=!1:!m||k.step||k.rotation||f||0===u||this.handleOverflow(a),e&&c%e&&(p=!1),
p&&q(a.y)?(a.opacity=u,h[this.isNewLabel?"attr":"animate"](a),this.isNewLabel=!1):(h.attr("y",-9999),this.isNewLabel=!0))},render:function(f,t,u){var c=this.axis,b=c.horiz,m=this.getPosition(b,this.pos,c.tickmarkOffset,t),d=m.x,h=m.y,c=b&&d===c.pos+c.len||!b&&h===c.pos?-1:1;u=l(u,1);this.isActive=!0;this.renderGridLine(t,u,c);this.renderMark(m,u,c);this.renderLabel(m,t,u,f);this.isNew=!1;a.fireEvent(this,"afterRender")},destroy:function(){E(this,this.axis)}}})(K);var V=function(a){var B=a.addEvent,
H=a.animObject,E=a.arrayMax,q=a.arrayMin,f=a.color,l=a.correctFloat,t=a.defaultOptions,n=a.defined,v=a.deg2rad,u=a.destroyObjectProperties,c=a.each,b=a.extend,m=a.fireEvent,d=a.format,h=a.getMagnitude,k=a.grep,e=a.inArray,p=a.isArray,r=a.isNumber,I=a.isString,z=a.merge,M=a.normalizeTickInterval,D=a.objectEach,C=a.pick,x=a.removeEvent,F=a.splat,A=a.syncTimeout,J=a.Tick,G=function(){this.init.apply(this,arguments)};a.extend(G.prototype,{defaultOptions:{dateTimeLabelFormats:{millisecond:"%H:%M:%S.%L",
second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,labels:{enabled:!0,style:{color:"#666666",cursor:"default",fontSize:"11px"},x:0},maxPadding:.01,minorTickLength:2,minorTickPosition:"outside",minPadding:.01,startOfWeek:1,startOnTick:!1,tickLength:10,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",title:{align:"middle",style:{color:"#666666"}},type:"linear",minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",
lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",tickColor:"#ccd6eb"},defaultYAxisOptions:{endOnTick:!0,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},maxPadding:.05,minPadding:.05,startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{allowOverlap:!1,enabled:!1,formatter:function(){return a.numberFormat(this.total,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"#000000",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0},defaultLeftAxisOptions:{labels:{x:-15},title:{rotation:270}},
defaultRightAxisOptions:{labels:{x:15},title:{rotation:90}},defaultBottomAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},defaultTopAxisOptions:{labels:{autoRotation:[-45],x:0},title:{rotation:0}},init:function(a,c){var g=c.isX,b=this;b.chart=a;b.horiz=a.inverted&&!b.isZAxis?!g:g;b.isXAxis=g;b.coll=b.coll||(g?"xAxis":"yAxis");b.opposite=c.opposite;b.side=c.side||(b.horiz?b.opposite?0:2:b.opposite?1:3);b.setOptions(c);var w=this.options,d=w.type;b.labelFormatter=w.labels.formatter||
b.defaultLabelFormatter;b.userOptions=c;b.minPixelPadding=0;b.reversed=w.reversed;b.visible=!1!==w.visible;b.zoomEnabled=!1!==w.zoomEnabled;b.hasNames="category"===d||!0===w.categories;b.categories=w.categories||b.hasNames;b.names||(b.names=[],b.names.keys={});b.plotLinesAndBandsGroups={};b.isLog="logarithmic"===d;b.isDatetimeAxis="datetime"===d;b.positiveValuesOnly=b.isLog&&!b.allowNegativeLog;b.isLinked=n(w.linkedTo);b.ticks={};b.labelEdge=[];b.minorTicks={};b.plotLinesAndBands=[];b.alternateBands=
{};b.len=0;b.minRange=b.userMinRange=w.minRange||w.maxZoom;b.range=w.range;b.offset=w.offset||0;b.stacks={};b.oldStacks={};b.stacksTouched=0;b.max=null;b.min=null;b.crosshair=C(w.crosshair,F(a.options.tooltip.crosshairs)[g?0:1],!1);c=b.options.events;-1===e(b,a.axes)&&(g?a.axes.splice(a.xAxis.length,0,b):a.axes.push(b),a[b.coll].push(b));b.series=b.series||[];a.inverted&&!b.isZAxis&&g&&void 0===b.reversed&&(b.reversed=!0);D(c,function(a,g){B(b,g,a)});b.lin2log=w.linearToLogConverter||b.lin2log;b.isLog&&
(b.val2lin=b.log2lin,b.lin2val=b.lin2log)},setOptions:function(a){this.options=z(this.defaultOptions,"yAxis"===this.coll&&this.defaultYAxisOptions,[this.defaultTopAxisOptions,this.defaultRightAxisOptions,this.defaultBottomAxisOptions,this.defaultLeftAxisOptions][this.side],z(t[this.coll],a))},defaultLabelFormatter:function(){var g=this.axis,c=this.value,b=g.chart.time,e=g.categories,h=this.dateTimeLabelFormat,k=t.lang,p=k.numericSymbols,k=k.numericSymbolMagnitude||1E3,x=p&&p.length,r,m=g.options.labels.format,
g=g.isLog?Math.abs(c):g.tickInterval;if(m)r=d(m,this,b);else if(e)r=c;else if(h)r=b.dateFormat(h,c);else if(x&&1E3<=g)for(;x--&&void 0===r;)b=Math.pow(k,x+1),g>=b&&0===10*c%b&&null!==p[x]&&0!==c&&(r=a.numberFormat(c/b,-1)+p[x]);void 0===r&&(r=1E4<=Math.abs(c)?a.numberFormat(c,-1):a.numberFormat(c,-1,void 0,""));return r},getSeriesExtremes:function(){var a=this,b=a.chart;a.hasVisibleSeries=!1;a.dataMin=a.dataMax=a.threshold=null;a.softThreshold=!a.isXAxis;a.buildStacks&&a.buildStacks();c(a.series,
function(g){if(g.visible||!b.options.chart.ignoreHiddenSeries){var c=g.options,w=c.threshold,d;a.hasVisibleSeries=!0;a.positiveValuesOnly&&0>=w&&(w=null);if(a.isXAxis)c=g.xData,c.length&&(g=q(c),d=E(c),r(g)||g instanceof Date||(c=k(c,r),g=q(c),d=E(c)),c.length&&(a.dataMin=Math.min(C(a.dataMin,c[0],g),g),a.dataMax=Math.max(C(a.dataMax,c[0],d),d)));else if(g.getExtremes(),d=g.dataMax,g=g.dataMin,n(g)&&n(d)&&(a.dataMin=Math.min(C(a.dataMin,g),g),a.dataMax=Math.max(C(a.dataMax,d),d)),n(w)&&(a.threshold=
w),!c.softThreshold||a.positiveValuesOnly)a.softThreshold=!1}})},translate:function(a,c,b,d,e,h){var g=this.linkedParent||this,w=1,k=0,p=d?g.oldTransA:g.transA;d=d?g.oldMin:g.min;var x=g.minPixelPadding;e=(g.isOrdinal||g.isBroken||g.isLog&&e)&&g.lin2val;p||(p=g.transA);b&&(w*=-1,k=g.len);g.reversed&&(w*=-1,k-=w*(g.sector||g.len));c?(a=(a*w+k-x)/p+d,e&&(a=g.lin2val(a))):(e&&(a=g.val2lin(a)),a=r(d)?w*(a-d)*p+k+w*x+(r(h)?p*h:0):void 0);return a},toPixels:function(a,c){return this.translate(a,!1,!this.horiz,
null,!0)+(c?0:this.pos)},toValue:function(a,c){return this.translate(a-(c?0:this.pos),!0,!this.horiz,null,!0)},getPlotLinePath:function(a,c,b,d,e){var g=this.chart,w=this.left,h=this.top,k,p,x=b&&g.oldChartHeight||g.chartHeight,m=b&&g.oldChartWidth||g.chartWidth,N;k=this.transB;var A=function(a,g,c){if(a<g||a>c)d?a=Math.min(Math.max(g,a),c):N=!0;return a};e=C(e,this.translate(a,null,null,b));e=Math.min(Math.max(-1E5,e),1E5);a=b=Math.round(e+k);k=p=Math.round(x-e-k);r(e)?this.horiz?(k=h,p=x-this.bottom,
a=b=A(a,w,w+this.width)):(a=w,b=m-this.right,k=p=A(k,h,h+this.height)):(N=!0,d=!1);return N&&!d?null:g.renderer.crispLine(["M",a,k,"L",b,p],c||1)},getLinearTickPositions:function(a,c,b){var g,w=l(Math.floor(c/a)*a);b=l(Math.ceil(b/a)*a);var d=[],e;l(w+a)===w&&(e=20);if(this.single)return[c];for(c=w;c<=b;){d.push(c);c=l(c+a,e);if(c===g)break;g=c}return d},getMinorTickInterval:function(){var a=this.options;return!0===a.minorTicks?C(a.minorTickInterval,"auto"):!1===a.minorTicks?null:a.minorTickInterval},
getMinorTickPositions:function(){var a=this,b=a.options,d=a.tickPositions,e=a.minorTickInterval,h=[],k=a.pointRangePadding||0,p=a.min-k,k=a.max+k,x=k-p;if(x&&x/e<a.len/3)if(a.isLog)c(this.paddedTicks,function(g,c,b){c&&h.push.apply(h,a.getLogTickPositions(e,b[c-1],b[c],!0))});else if(a.isDatetimeAxis&&"auto"===this.getMinorTickInterval())h=h.concat(a.getTimeTicks(a.normalizeTimeTickInterval(e),p,k,b.startOfWeek));else for(b=p+(d[0]-p)%e;b<=k&&b!==h[0];b+=e)h.push(b);0!==h.length&&a.trimTicks(h);return h},
adjustForMinRange:function(){var a=this.options,b=this.min,d=this.max,e,h,k,p,x,r,m,A;this.isXAxis&&void 0===this.minRange&&!this.isLog&&(n(a.min)||n(a.max)?this.minRange=null:(c(this.series,function(a){r=a.xData;for(p=m=a.xIncrement?1:r.length-1;0<p;p--)if(x=r[p]-r[p-1],void 0===k||x<k)k=x}),this.minRange=Math.min(5*k,this.dataMax-this.dataMin)));d-b<this.minRange&&(h=this.dataMax-this.dataMin>=this.minRange,A=this.minRange,e=(A-d+b)/2,e=[b-e,C(a.min,b-e)],h&&(e[2]=this.isLog?this.log2lin(this.dataMin):
this.dataMin),b=E(e),d=[b+A,C(a.max,b+A)],h&&(d[2]=this.isLog?this.log2lin(this.dataMax):this.dataMax),d=q(d),d-b<A&&(e[0]=d-A,e[1]=C(a.min,d-A),b=E(e)));this.min=b;this.max=d},getClosest:function(){var a;this.categories?a=1:c(this.series,function(g){var c=g.closestPointRange,b=g.visible||!g.chart.options.chart.ignoreHiddenSeries;!g.noSharedTooltip&&n(c)&&b&&(a=n(a)?Math.min(a,c):c)});return a},nameToX:function(a){var g=p(this.categories),c=g?this.categories:this.names,b=a.options.x,d;a.series.requireSorting=
!1;n(b)||(b=!1===this.options.uniqueNames?a.series.autoIncrement():g?e(a.name,c):C(c.keys[a.name],-1));-1===b?g||(d=c.length):d=b;void 0!==d&&(this.names[d]=a.name,this.names.keys[a.name]=d);return d},updateNames:function(){var g=this,b=this.names;0<b.length&&(c(a.keys(b.keys),function(a){delete b.keys[a]}),b.length=0,this.minRange=this.userMinRange,c(this.series||[],function(a){a.xIncrement=null;if(!a.points||a.isDirtyData)a.processData(),a.generatePoints();c(a.points,function(c,b){var d;c.options&&
(d=g.nameToX(c),void 0!==d&&d!==c.x&&(c.x=d,a.xData[b]=d))})}))},setAxisTranslation:function(a){var g=this,b=g.max-g.min,d=g.axisPointRange||0,e,h=0,k=0,p=g.linkedParent,x=!!g.categories,r=g.transA,m=g.isXAxis;if(m||x||d)e=g.getClosest(),p?(h=p.minPointOffset,k=p.pointRangePadding):c(g.series,function(a){var c=x?1:m?C(a.options.pointRange,e,0):g.axisPointRange||0;a=a.options.pointPlacement;d=Math.max(d,c);g.single||(h=Math.max(h,I(a)?0:c/2),k=Math.max(k,"on"===a?0:c))}),p=g.ordinalSlope&&e?g.ordinalSlope/
e:1,g.minPointOffset=h*=p,g.pointRangePadding=k*=p,g.pointRange=Math.min(d,b),m&&(g.closestPointRange=e);a&&(g.oldTransA=r);g.translationSlope=g.transA=r=g.options.staticScale||g.len/(b+k||1);g.transB=g.horiz?g.left:g.bottom;g.minPixelPadding=r*h},minFromRange:function(){return this.max-this.range},setTickInterval:function(g){var b=this,d=b.chart,e=b.options,k=b.isLog,p=b.log2lin,x=b.isDatetimeAxis,A=b.isXAxis,F=b.isLinked,f=e.maxPadding,z=e.minPadding,D=e.tickInterval,J=e.tickPixelInterval,G=b.categories,
u=b.threshold,t=b.softThreshold,v,q,I,B;x||G||F||this.getTickAmount();I=C(b.userMin,e.min);B=C(b.userMax,e.max);F?(b.linkedParent=d[b.coll][e.linkedTo],d=b.linkedParent.getExtremes(),b.min=C(d.min,d.dataMin),b.max=C(d.max,d.dataMax),e.type!==b.linkedParent.options.type&&a.error(11,1)):(!t&&n(u)&&(b.dataMin>=u?(v=u,z=0):b.dataMax<=u&&(q=u,f=0)),b.min=C(I,v,b.dataMin),b.max=C(B,q,b.dataMax));k&&(b.positiveValuesOnly&&!g&&0>=Math.min(b.min,C(b.dataMin,b.min))&&a.error(10,1),b.min=l(p(b.min),15),b.max=
l(p(b.max),15));b.range&&n(b.max)&&(b.userMin=b.min=I=Math.max(b.dataMin,b.minFromRange()),b.userMax=B=b.max,b.range=null);m(b,"foundExtremes");b.beforePadding&&b.beforePadding();b.adjustForMinRange();!(G||b.axisPointRange||b.usePercentage||F)&&n(b.min)&&n(b.max)&&(p=b.max-b.min)&&(!n(I)&&z&&(b.min-=p*z),!n(B)&&f&&(b.max+=p*f));r(e.softMin)&&!r(b.userMin)&&(b.min=Math.min(b.min,e.softMin));r(e.softMax)&&!r(b.userMax)&&(b.max=Math.max(b.max,e.softMax));r(e.floor)&&(b.min=Math.max(b.min,e.floor));r(e.ceiling)&&
(b.max=Math.min(b.max,e.ceiling));t&&n(b.dataMin)&&(u=u||0,!n(I)&&b.min<u&&b.dataMin>=u?b.min=u:!n(B)&&b.max>u&&b.dataMax<=u&&(b.max=u));b.tickInterval=b.min===b.max||void 0===b.min||void 0===b.max?1:F&&!D&&J===b.linkedParent.options.tickPixelInterval?D=b.linkedParent.tickInterval:C(D,this.tickAmount?(b.max-b.min)/Math.max(this.tickAmount-1,1):void 0,G?1:(b.max-b.min)*J/Math.max(b.len,J));A&&!g&&c(b.series,function(a){a.processData(b.min!==b.oldMin||b.max!==b.oldMax)});b.setAxisTranslation(!0);b.beforeSetTickPositions&&
b.beforeSetTickPositions();b.postProcessTickInterval&&(b.tickInterval=b.postProcessTickInterval(b.tickInterval));b.pointRange&&!D&&(b.tickInterval=Math.max(b.pointRange,b.tickInterval));g=C(e.minTickInterval,b.isDatetimeAxis&&b.closestPointRange);!D&&b.tickInterval<g&&(b.tickInterval=g);x||k||D||(b.tickInterval=M(b.tickInterval,null,h(b.tickInterval),C(e.allowDecimals,!(.5<b.tickInterval&&5>b.tickInterval&&1E3<b.max&&9999>b.max)),!!this.tickAmount));this.tickAmount||(b.tickInterval=b.unsquish());
this.setTickPositions()},setTickPositions:function(){var a=this.options,b,c=a.tickPositions;b=this.getMinorTickInterval();var d=a.tickPositioner,e=a.startOnTick,h=a.endOnTick;this.tickmarkOffset=this.categories&&"between"===a.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===b&&this.tickInterval?this.tickInterval/5:b;this.single=this.min===this.max&&n(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==a.allowDecimals);this.tickPositions=b=c&&c.slice();
!b&&(b=this.isDatetimeAxis?this.getTimeTicks(this.normalizeTimeTickInterval(this.tickInterval,a.units),this.min,this.max,a.startOfWeek,this.ordinalPositions,this.closestPointRange,!0):this.isLog?this.getLogTickPositions(this.tickInterval,this.min,this.max):this.getLinearTickPositions(this.tickInterval,this.min,this.max),b.length>this.len&&(b=[b[0],b.pop()],b[0]===b[1]&&(b.length=1)),this.tickPositions=b,d&&(d=d.apply(this,[this.min,this.max])))&&(this.tickPositions=b=d);this.paddedTicks=b.slice(0);
this.trimTicks(b,e,h);this.isLinked||(this.single&&2>b.length&&(this.min-=.5,this.max+=.5),c||d||this.adjustTickAmount())},trimTicks:function(a,b,c){var g=a[0],d=a[a.length-1],e=this.minPointOffset||0;if(!this.isLinked){if(b&&-Infinity!==g)this.min=g;else for(;this.min-e>a[0];)a.shift();if(c)this.max=d;else for(;this.max+e<a[a.length-1];)a.pop();0===a.length&&n(g)&&!this.options.tickPositions&&a.push((d+g)/2)}},alignToOthers:function(){var a={},b,d=this.options;!1===this.chart.options.chart.alignTicks||
!1===d.alignTicks||this.isLog||c(this.chart[this.coll],function(g){var c=g.options,c=[g.horiz?c.left:c.top,c.width,c.height,c.pane].join();g.series.length&&(a[c]?b=!0:a[c]=1)});return b},getTickAmount:function(){var a=this.options,b=a.tickAmount,c=a.tickPixelInterval;!n(a.tickInterval)&&this.len<c&&!this.isRadial&&!this.isLog&&a.startOnTick&&a.endOnTick&&(b=2);!b&&this.alignToOthers()&&(b=Math.ceil(this.len/c)+1);4>b&&(this.finalTickAmt=b,b=5);this.tickAmount=b},adjustTickAmount:function(){var a=
this.tickInterval,b=this.tickPositions,c=this.tickAmount,d=this.finalTickAmt,e=b&&b.length,h=C(this.threshold,this.softThreshold?0:null);if(this.hasData()){if(e<c){for(;b.length<c;)b.length%2||this.min===h?b.push(l(b[b.length-1]+a)):b.unshift(l(b[0]-a));this.transA*=(e-1)/(c-1);this.min=b[0];this.max=b[b.length-1]}else e>c&&(this.tickInterval*=2,this.setTickPositions());if(n(d)){for(a=c=b.length;a--;)(3===d&&1===a%2||2>=d&&0<a&&a<c-1)&&b.splice(a,1);this.finalTickAmt=void 0}}},setScale:function(){var a,
b;this.oldMin=this.min;this.oldMax=this.max;this.oldAxisLength=this.len;this.setAxisSize();b=this.len!==this.oldAxisLength;c(this.series,function(b){if(b.isDirtyData||b.isDirty||b.xAxis.isDirty)a=!0});b||a||this.isLinked||this.forceRedraw||this.userMin!==this.oldUserMin||this.userMax!==this.oldUserMax||this.alignToOthers()?(this.resetStacks&&this.resetStacks(),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.oldUserMin=this.userMin,this.oldUserMax=this.userMax,this.isDirty||
(this.isDirty=b||this.min!==this.oldMin||this.max!==this.oldMax)):this.cleanStacks&&this.cleanStacks();m(this,"afterSetScale")},setExtremes:function(a,d,e,h,k){var g=this,p=g.chart;e=C(e,!0);c(g.series,function(a){delete a.kdTree});k=b(k,{min:a,max:d});m(g,"setExtremes",k,function(){g.userMin=a;g.userMax=d;g.eventArgs=k;e&&p.redraw(h)})},zoom:function(a,b){var g=this.dataMin,c=this.dataMax,d=this.options,e=Math.min(g,C(d.min,g)),d=Math.max(c,C(d.max,c));if(a!==this.min||b!==this.max)this.allowZoomOutside||
(n(g)&&(a<e&&(a=e),a>d&&(a=d)),n(c)&&(b<e&&(b=e),b>d&&(b=d))),this.displayBtn=void 0!==a||void 0!==b,this.setExtremes(a,b,!1,void 0,{trigger:"zoom"});return!0},setAxisSize:function(){var b=this.chart,c=this.options,d=c.offsets||[0,0,0,0],e=this.horiz,h=this.width=Math.round(a.relativeLength(C(c.width,b.plotWidth-d[3]+d[1]),b.plotWidth)),k=this.height=Math.round(a.relativeLength(C(c.height,b.plotHeight-d[0]+d[2]),b.plotHeight)),p=this.top=Math.round(a.relativeLength(C(c.top,b.plotTop+d[0]),b.plotHeight,
b.plotTop)),c=this.left=Math.round(a.relativeLength(C(c.left,b.plotLeft+d[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-k-p;this.right=b.chartWidth-h-c;this.len=Math.max(e?h:k,0);this.pos=e?c:p},getExtremes:function(){var a=this.isLog,b=this.lin2log;return{min:a?l(b(this.min)):this.min,max:a?l(b(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}},getThreshold:function(a){var b=this.isLog,c=this.lin2log,g=b?c(this.min):this.min,b=b?c(this.max):
this.max;null===a?a=g:g>a?a=g:b<a&&(a=b);return this.translate(a,0,1,0,1)},autoLabelAlign:function(a){a=(C(a,0)-90*this.side+720)%360;return 15<a&&165>a?"right":195<a&&345>a?"left":"center"},tickSize:function(a){var b=this.options,c=b[a+"Length"],g=C(b[a+"Width"],"tick"===a&&this.isXAxis?1:0);if(g&&c)return"inside"===b[a+"Position"]&&(c=-c),[c,g]},labelMetrics:function(){var a=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style&&this.options.labels.style.fontSize,
this.ticks[a]&&this.ticks[a].label)},unsquish:function(){var a=this.options.labels,b=this.horiz,d=this.tickInterval,e=d,h=this.len/(((this.categories?1:0)+this.max-this.min)/d),k,p=a.rotation,x=this.labelMetrics(),r,m=Number.MAX_VALUE,A,F=function(a){a/=h||1;a=1<a?Math.ceil(a):1;return a*d};b?(A=!a.staggerLines&&!a.step&&(n(p)?[p]:h<C(a.autoRotationLimit,80)&&a.autoRotation))&&c(A,function(a){var b;if(a===p||a&&-90<=a&&90>=a)r=F(Math.abs(x.h/Math.sin(v*a))),b=r+Math.abs(a/360),b<m&&(m=b,k=a,e=r)}):
a.step||(e=F(x.h));this.autoRotation=A;this.labelRotation=C(k,p);return e},getSlotWidth:function(){var a=this.chart,b=this.horiz,c=this.options.labels,d=Math.max(this.tickPositions.length-(this.categories?0:1),1),e=a.margin[3];return b&&2>(c.step||0)&&!c.rotation&&(this.staggerLines||1)*this.len/d||!b&&(c.style&&parseInt(c.style.width,10)||e&&e-a.spacing[3]||.33*a.chartWidth)},renderUnsquish:function(){var a=this.chart,b=a.renderer,d=this.tickPositions,e=this.ticks,h=this.options.labels,k=this.horiz,
p=this.getSlotWidth(),x=Math.max(1,Math.round(p-2*(h.padding||5))),r={},m=this.labelMetrics(),A=h.style&&h.style.textOverflow,F,l,f=0,z;I(h.rotation)||(r.rotation=h.rotation||0);c(d,function(a){(a=e[a])&&a.label&&a.label.textPxLength>f&&(f=a.label.textPxLength)});this.maxLabelLength=f;if(this.autoRotation)f>x&&f>m.h?r.rotation=this.labelRotation:this.labelRotation=0;else if(p&&(F=x,!A))for(l="clip",x=d.length;!k&&x--;)if(z=d[x],z=e[z].label)z.styles&&"ellipsis"===z.styles.textOverflow?z.css({textOverflow:"clip"}):
z.textPxLength>p&&z.css({width:p+"px"}),z.getBBox().height>this.len/d.length-(m.h-m.f)&&(z.specificTextOverflow="ellipsis");r.rotation&&(F=f>.5*a.chartHeight?.33*a.chartHeight:a.chartHeight,A||(l="ellipsis"));if(this.labelAlign=h.align||this.autoLabelAlign(this.labelRotation))r.align=this.labelAlign;c(d,function(a){var b=(a=e[a])&&a.label;b&&(b.attr(r),!F||h.style&&h.style.width||!(F<b.textPxLength||"SPAN"===b.element.tagName)||b.css({width:F,textOverflow:b.specificTextOverflow||l}),delete b.specificTextOverflow,
a.rotation=r.rotation)});this.tickRotCorr=b.rotCorr(m.b,this.labelRotation||0,0!==this.side)},hasData:function(){return this.hasVisibleSeries||n(this.min)&&n(this.max)&&this.tickPositions&&0<this.tickPositions.length},addTitle:function(a){var b=this.chart.renderer,c=this.horiz,g=this.opposite,d=this.options.title,e;this.axisTitle||((e=d.textAlign)||(e=(c?{low:"left",middle:"center",high:"right"}:{low:g?"right":"left",middle:"center",high:g?"left":"right"})[d.align]),this.axisTitle=b.text(d.text,0,
0,d.useHTML).attr({zIndex:7,rotation:d.rotation||0,align:e}).addClass("highcharts-axis-title").css(z(d.style)).add(this.axisGroup),this.axisTitle.isNew=!0);d.style.width||this.isRadial||this.axisTitle.css({width:this.len});this.axisTitle[a?"show":"hide"](!0)},generateTick:function(a){var b=this.ticks;b[a]?b[a].addLabel():b[a]=new J(this,a)},getOffset:function(){var a=this,b=a.chart,d=b.renderer,e=a.options,h=a.tickPositions,k=a.ticks,p=a.horiz,x=a.side,r=b.inverted&&!a.isZAxis?[1,0,3,2][x]:x,m,A,
F=0,l,f=0,z=e.title,J=e.labels,G=0,u=b.axisOffset,b=b.clipOffset,t=[-1,1,1,-1][x],v=e.className,M=a.axisParent,q=this.tickSize("tick");m=a.hasData();a.showAxis=A=m||C(e.showEmpty,!0);a.staggerLines=a.horiz&&J.staggerLines;a.axisGroup||(a.gridGroup=d.g("grid").attr({zIndex:e.gridZIndex||1}).addClass("highcharts-"+this.coll.toLowerCase()+"-grid "+(v||"")).add(M),a.axisGroup=d.g("axis").attr({zIndex:e.zIndex||2}).addClass("highcharts-"+this.coll.toLowerCase()+" "+(v||"")).add(M),a.labelGroup=d.g("axis-labels").attr({zIndex:J.zIndex||
7}).addClass("highcharts-"+a.coll.toLowerCase()+"-labels "+(v||"")).add(M));m||a.isLinked?(c(h,function(b,c){a.generateTick(b,c)}),a.renderUnsquish(),a.reserveSpaceDefault=0===x||2===x||{1:"left",3:"right"}[x]===a.labelAlign,C(J.reserveSpace,"center"===a.labelAlign?!0:null,a.reserveSpaceDefault)&&c(h,function(a){G=Math.max(k[a].getLabelSize(),G)}),a.staggerLines&&(G*=a.staggerLines),a.labelOffset=G*(a.opposite?-1:1)):D(k,function(a,b){a.destroy();delete k[b]});z&&z.text&&!1!==z.enabled&&(a.addTitle(A),
A&&!1!==z.reserveSpace&&(a.titleOffset=F=a.axisTitle.getBBox()[p?"height":"width"],l=z.offset,f=n(l)?0:C(z.margin,p?5:10)));a.renderLine();a.offset=t*C(e.offset,u[x]);a.tickRotCorr=a.tickRotCorr||{x:0,y:0};d=0===x?-a.labelMetrics().h:2===x?a.tickRotCorr.y:0;f=Math.abs(G)+f;G&&(f=f-d+t*(p?C(J.y,a.tickRotCorr.y+8*t):J.x));a.axisTitleMargin=C(l,f);u[x]=Math.max(u[x],a.axisTitleMargin+F+t*a.offset,f,m&&h.length&&q?q[0]+t*a.offset:0);e=e.offset?0:2*Math.floor(a.axisLine.strokeWidth()/2);b[r]=Math.max(b[r],
e)},getLinePath:function(a){var b=this.chart,c=this.opposite,g=this.offset,d=this.horiz,e=this.left+(c?this.width:0)+g,g=b.chartHeight-this.bottom-(c?this.height:0)+g;c&&(a*=-1);return b.renderer.crispLine(["M",d?this.left:e,d?g:this.top,"L",d?b.chartWidth-this.right:e,d?g:b.chartHeight-this.bottom],a)},renderLine:function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,
zIndex:7}))},getTitlePosition:function(){var a=this.horiz,b=this.left,c=this.top,d=this.len,e=this.options.title,h=a?b:c,k=this.opposite,p=this.offset,x=e.x||0,r=e.y||0,m=this.axisTitle,A=this.chart.renderer.fontMetrics(e.style&&e.style.fontSize,m),m=Math.max(m.getBBox(null,0).height-A.h-1,0),d={low:h+(a?0:d),middle:h+d/2,high:h+(a?d:0)}[e.align],b=(a?c+this.height:b)+(a?1:-1)*(k?-1:1)*this.axisTitleMargin+[-m,m,A.f,-m][this.side];return{x:a?d+x:b+(k?this.width:0)+p+x,y:a?b+r-(k?this.height:0)+p:
d+r}},renderMinorTick:function(a){var b=this.chart.hasRendered&&r(this.oldMin),c=this.minorTicks;c[a]||(c[a]=new J(this,a,"minor"));b&&c[a].isNew&&c[a].render(null,!0);c[a].render(null,!1,1)},renderTick:function(a,b){var c=this.isLinked,g=this.ticks,d=this.chart.hasRendered&&r(this.oldMin);if(!c||a>=this.min&&a<=this.max)g[a]||(g[a]=new J(this,a)),d&&g[a].isNew&&g[a].render(b,!0,.1),g[a].render(b)},render:function(){var b=this,d=b.chart,e=b.options,h=b.isLog,k=b.lin2log,p=b.isLinked,x=b.tickPositions,
m=b.axisTitle,F=b.ticks,l=b.minorTicks,f=b.alternateBands,z=e.stackLabels,G=e.alternateGridColor,n=b.tickmarkOffset,u=b.axisLine,C=b.showAxis,t=H(d.renderer.globalAnimation),v,M;b.labelEdge.length=0;b.overlap=!1;c([F,l,f],function(a){D(a,function(a){a.isActive=!1})});if(b.hasData()||p)b.minorTickInterval&&!b.categories&&c(b.getMinorTickPositions(),function(a){b.renderMinorTick(a)}),x.length&&(c(x,function(a,c){b.renderTick(a,c)}),n&&(0===b.min||b.single)&&(F[-1]||(F[-1]=new J(b,-1,null,!0)),F[-1].render(-1))),
G&&c(x,function(c,e){M=void 0!==x[e+1]?x[e+1]+n:b.max-n;0===e%2&&c<b.max&&M<=b.max+(d.polar?-n:n)&&(f[c]||(f[c]=new a.PlotLineOrBand(b)),v=c+n,f[c].options={from:h?k(v):v,to:h?k(M):M,color:G},f[c].render(),f[c].isActive=!0)}),b._addedPlotLB||(c((e.plotLines||[]).concat(e.plotBands||[]),function(a){b.addPlotBandOrLine(a)}),b._addedPlotLB=!0);c([F,l,f],function(a){var b,c=[],e=t.duration;D(a,function(a,b){a.isActive||(a.render(b,!1,0),a.isActive=!1,c.push(b))});A(function(){for(b=c.length;b--;)a[c[b]]&&
!a[c[b]].isActive&&(a[c[b]].destroy(),delete a[c[b]])},a!==f&&d.hasRendered&&e?e:0)});u&&(u[u.isPlaced?"animate":"attr"]({d:this.getLinePath(u.strokeWidth())}),u.isPlaced=!0,u[C?"show":"hide"](!0));m&&C&&(e=b.getTitlePosition(),r(e.y)?(m[m.isNew?"attr":"animate"](e),m.isNew=!1):(m.attr("y",-9999),m.isNew=!0));z&&z.enabled&&b.renderStackTotals();b.isDirty=!1},redraw:function(){this.visible&&(this.render(),c(this.plotLinesAndBands,function(a){a.render()}));c(this.series,function(a){a.isDirty=!0})},
keepProps:"extKey hcEvents names series userMax userMin".split(" "),destroy:function(a){var b=this,d=b.stacks,g=b.plotLinesAndBands,h;a||x(b);D(d,function(a,b){u(a);d[b]=null});c([b.ticks,b.minorTicks,b.alternateBands],function(a){u(a)});if(g)for(a=g.length;a--;)g[a].destroy();c("stackTotalGroup axisLine axisTitle axisGroup gridGroup labelGroup cross".split(" "),function(a){b[a]&&(b[a]=b[a].destroy())});for(h in b.plotLinesAndBandsGroups)b.plotLinesAndBandsGroups[h]=b.plotLinesAndBandsGroups[h].destroy();
D(b,function(a,c){-1===e(c,b.keepProps)&&delete b[c]})},drawCrosshair:function(a,b){var c,d=this.crosshair,e=C(d.snap,!0),g,h=this.cross;a||(a=this.cross&&this.cross.e);this.crosshair&&!1!==(n(b)||!e)?(e?n(b)&&(g=this.isXAxis?b.plotX:this.len-b.plotY):g=a&&(this.horiz?a.chartX-this.pos:this.len-a.chartY+this.pos),n(g)&&(c=this.getPlotLinePath(b&&(this.isXAxis?b.x:C(b.stackY,b.y)),null,null,null,g)||null),n(c)?(b=this.categories&&!this.isRadial,h||(this.cross=h=this.chart.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+
(b?"category ":"thin ")+d.className).attr({zIndex:C(d.zIndex,2)}).add(),h.attr({stroke:d.color||(b?f("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":C(d.width,1)}).css({"pointer-events":"none"}),d.dashStyle&&h.attr({dashstyle:d.dashStyle})),h.show().attr({d:c}),b&&!d.width&&h.attr({"stroke-width":this.transA}),this.cross.e=a):this.hideCrosshair()):this.hideCrosshair()},hideCrosshair:function(){this.cross&&this.cross.hide()}});return a.Axis=G}(K);(function(a){var B=a.Axis,H=a.getMagnitude,
E=a.normalizeTickInterval,q=a.timeUnits;B.prototype.getTimeTicks=function(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)};B.prototype.normalizeTimeTickInterval=function(a,l){var f=l||[["millisecond",[1,2,5,10,20,25,50,100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];l=f[f.length-1];var n=q[l[0]],v=l[1],u;for(u=0;u<f.length&&!(l=f[u],n=q[l[0]],v=l[1],f[u+1]&&a<=(n*
v[v.length-1]+q[f[u+1][0]])/2);u++);n===q.year&&a<5*n&&(v=[1,2,5]);a=E(a/n,v,"year"===l[0]?Math.max(H(a/n),1):1);return{unitRange:n,count:a,unitName:l[0]}}})(K);(function(a){var B=a.Axis,H=a.getMagnitude,E=a.map,q=a.normalizeTickInterval,f=a.pick;B.prototype.getLogTickPositions=function(a,t,n,v){var l=this.options,c=this.len,b=this.lin2log,m=this.log2lin,d=[];v||(this._minorAutoInterval=null);if(.5<=a)a=Math.round(a),d=this.getLinearTickPositions(a,t,n);else if(.08<=a)for(var c=Math.floor(t),h,k,
e,p,r,l=.3<a?[1,2,4]:.15<a?[1,2,4,6,8]:[1,2,3,4,5,6,7,8,9];c<n+1&&!r;c++)for(k=l.length,h=0;h<k&&!r;h++)e=m(b(c)*l[h]),e>t&&(!v||p<=n)&&void 0!==p&&d.push(p),p>n&&(r=!0),p=e;else t=b(t),n=b(n),a=v?this.getMinorTickInterval():l.tickInterval,a=f("auto"===a?null:a,this._minorAutoInterval,l.tickPixelInterval/(v?5:1)*(n-t)/((v?c/this.tickPositions.length:c)||1)),a=q(a,null,H(a)),d=E(this.getLinearTickPositions(a,t,n),m),v||(this._minorAutoInterval=a/5);v||(this.tickInterval=a);return d};B.prototype.log2lin=
function(a){return Math.log(a)/Math.LN10};B.prototype.lin2log=function(a){return Math.pow(10,a)}})(K);(function(a,B){var H=a.arrayMax,E=a.arrayMin,q=a.defined,f=a.destroyObjectProperties,l=a.each,t=a.erase,n=a.merge,v=a.pick;a.PlotLineOrBand=function(a,c){this.axis=a;c&&(this.options=c,this.id=c.id)};a.PlotLineOrBand.prototype={render:function(){var f=this,c=f.axis,b=c.horiz,m=f.options,d=m.label,h=f.label,k=m.to,e=m.from,p=m.value,r=q(e)&&q(k),l=q(p),z=f.svgElem,t=!z,D=[],C=m.color,x=v(m.zIndex,
0),F=m.events,D={"class":"highcharts-plot-"+(r?"band ":"line ")+(m.className||"")},A={},J=c.chart.renderer,G=r?"bands":"lines",g=c.log2lin;c.isLog&&(e=g(e),k=g(k),p=g(p));l?(D={stroke:C,"stroke-width":m.width},m.dashStyle&&(D.dashstyle=m.dashStyle)):r&&(C&&(D.fill=C),m.borderWidth&&(D.stroke=m.borderColor,D["stroke-width"]=m.borderWidth));A.zIndex=x;G+="-"+x;(C=c.plotLinesAndBandsGroups[G])||(c.plotLinesAndBandsGroups[G]=C=J.g("plot-"+G).attr(A).add());t&&(f.svgElem=z=J.path().attr(D).add(C));if(l)D=
c.getPlotLinePath(p,z.strokeWidth());else if(r)D=c.getPlotBandPath(e,k,m);else return;t&&D&&D.length?(z.attr({d:D}),F&&a.objectEach(F,function(a,b){z.on(b,function(a){F[b].apply(f,[a])})})):z&&(D?(z.show(),z.animate({d:D})):(z.hide(),h&&(f.label=h=h.destroy())));d&&q(d.text)&&D&&D.length&&0<c.width&&0<c.height&&!D.flat?(d=n({align:b&&r&&"center",x:b?!r&&4:10,verticalAlign:!b&&r&&"middle",y:b?r?16:10:r?6:-4,rotation:b&&!r&&90},d),this.renderLabel(d,D,r,x)):h&&h.hide();return f},renderLabel:function(a,
c,b,m){var d=this.label,h=this.axis.chart.renderer;d||(d={align:a.textAlign||a.align,rotation:a.rotation,"class":"highcharts-plot-"+(b?"band":"line")+"-label "+(a.className||"")},d.zIndex=m,this.label=d=h.text(a.text,0,0,a.useHTML).attr(d).add(),d.css(a.style));m=c.xBounds||[c[1],c[4],b?c[6]:c[1]];c=c.yBounds||[c[2],c[5],b?c[7]:c[2]];b=E(m);h=E(c);d.align(a,!1,{x:b,y:h,width:H(m)-b,height:H(c)-h});d.show()},destroy:function(){t(this.axis.plotLinesAndBands,this);delete this.axis;f(this)}};a.extend(B.prototype,
{getPlotBandPath:function(a,c){var b=this.getPlotLinePath(c,null,null,!0),m=this.getPlotLinePath(a,null,null,!0),d=[],h=this.horiz,k=1,e;a=a<this.min&&c<this.min||a>this.max&&c>this.max;if(m&&b)for(a&&(e=m.toString()===b.toString(),k=0),a=0;a<m.length;a+=6)h&&b[a+1]===m[a+1]?(b[a+1]+=k,b[a+4]+=k):h||b[a+2]!==m[a+2]||(b[a+2]+=k,b[a+5]+=k),d.push("M",m[a+1],m[a+2],"L",m[a+4],m[a+5],b[a+4],b[a+5],b[a+1],b[a+2],"z"),d.flat=e;return d},addPlotBand:function(a){return this.addPlotBandOrLine(a,"plotBands")},
addPlotLine:function(a){return this.addPlotBandOrLine(a,"plotLines")},addPlotBandOrLine:function(f,c){var b=(new a.PlotLineOrBand(this,f)).render(),m=this.userOptions;b&&(c&&(m[c]=m[c]||[],m[c].push(f)),this.plotLinesAndBands.push(b));return b},removePlotBandOrLine:function(a){for(var c=this.plotLinesAndBands,b=this.options,m=this.userOptions,d=c.length;d--;)c[d].id===a&&c[d].destroy();l([b.plotLines||[],m.plotLines||[],b.plotBands||[],m.plotBands||[]],function(b){for(d=b.length;d--;)b[d].id===a&&
t(b,b[d])})},removePlotBand:function(a){this.removePlotBandOrLine(a)},removePlotLine:function(a){this.removePlotBandOrLine(a)}})})(K,V);(function(a){var B=a.each,H=a.extend,E=a.format,q=a.isNumber,f=a.map,l=a.merge,t=a.pick,n=a.splat,v=a.syncTimeout,u=a.timeUnits;a.Tooltip=function(){this.init.apply(this,arguments)};a.Tooltip.prototype={init:function(a,b){this.chart=a;this.options=b;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=b.split&&!a.inverted;this.shared=b.shared||this.split},
cleanSplit:function(a){B(this.chart.series,function(b){var c=b&&b.tt;c&&(!c.isActive||a?b.tt=c.destroy():c.isActive=!1)})},getLabel:function(){var a=this.chart.renderer,b=this.options;this.label||(this.split?this.label=a.g("tooltip"):(this.label=a.label("",0,0,b.shape||"callout",null,null,b.useHTML,null,"tooltip").attr({padding:b.padding,r:b.borderRadius}),this.label.attr({fill:b.backgroundColor,"stroke-width":b.borderWidth}).css(b.style).shadow(b.shadow)),this.label.attr({zIndex:8}).add());return this.label},
update:function(a){this.destroy();l(!0,this.chart.options.tooltip.userOptions,a);this.init(this.chart,l(!0,this.options,a))},destroy:function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(this.chart,!0),this.tt=this.tt.destroy());clearTimeout(this.hideTimer);clearTimeout(this.tooltipTimeout)},move:function(a,b,m,d){var c=this,k=c.now,e=!1!==c.options.animation&&!c.isHidden&&(1<Math.abs(a-k.x)||1<Math.abs(b-k.y)),p=c.followPointer||1<c.len;H(k,{x:e?(2*k.x+a)/
3:a,y:e?(k.y+b)/2:b,anchorX:p?void 0:e?(2*k.anchorX+m)/3:m,anchorY:p?void 0:e?(k.anchorY+d)/2:d});c.getLabel().attr(k);e&&(clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){c&&c.move(a,b,m,d)},32))},hide:function(a){var b=this;clearTimeout(this.hideTimer);a=t(a,this.options.hideDelay,500);this.isHidden||(this.hideTimer=v(function(){b.getLabel()[a?"fadeOut":"hide"]();b.isHidden=!0},a))},getAnchor:function(a,b){var c,d=this.chart,h=d.inverted,k=d.plotTop,e=d.plotLeft,p=0,r=
0,l,z;a=n(a);c=a[0].tooltipPos;this.followPointer&&b&&(void 0===b.chartX&&(b=d.pointer.normalize(b)),c=[b.chartX-d.plotLeft,b.chartY-k]);c||(B(a,function(a){l=a.series.yAxis;z=a.series.xAxis;p+=a.plotX+(!h&&z?z.left-e:0);r+=(a.plotLow?(a.plotLow+a.plotHigh)/2:a.plotY)+(!h&&l?l.top-k:0)}),p/=a.length,r/=a.length,c=[h?d.plotWidth-r:p,this.shared&&!h&&1<a.length&&b?b.chartY-k:h?d.plotHeight-p:r]);return f(c,Math.round)},getPosition:function(a,b,m){var c=this.chart,h=this.distance,k={},e=c.inverted&&
m.h||0,p,r=["y",c.chartHeight,b,m.plotY+c.plotTop,c.plotTop,c.plotTop+c.plotHeight],f=["x",c.chartWidth,a,m.plotX+c.plotLeft,c.plotLeft,c.plotLeft+c.plotWidth],l=!this.followPointer&&t(m.ttBelow,!c.inverted===!!m.negative),n=function(a,b,c,d,g,p){var x=c<d-h,r=d+h+c<b,m=d-h-c;d+=h;if(l&&r)k[a]=d;else if(!l&&x)k[a]=m;else if(x)k[a]=Math.min(p-c,0>m-e?m:m-e);else if(r)k[a]=Math.max(g,d+e+c>b?d:d+e);else return!1},D=function(a,b,c,d){var e;d<h||d>b-h?e=!1:k[a]=d<c/2?1:d>b-c/2?b-c-2:d-c/2;return e},C=
function(a){var b=r;r=f;f=b;p=a},x=function(){!1!==n.apply(0,r)?!1!==D.apply(0,f)||p||(C(!0),x()):p?k.x=k.y=0:(C(!0),x())};(c.inverted||1<this.len)&&C();x();return k},defaultFormatter:function(a){var b=this.points||n(this),c;c=[a.tooltipFooterHeaderFormatter(b[0])];c=c.concat(a.bodyFormatter(b));c.push(a.tooltipFooterHeaderFormatter(b[0],!0));return c},refresh:function(a,b){var c,d=this.options,h,k=a,e,p={},r=[];c=d.formatter||this.defaultFormatter;var p=this.shared,f;d.enabled&&(clearTimeout(this.hideTimer),
this.followPointer=n(k)[0].series.tooltipOptions.followPointer,e=this.getAnchor(k,b),b=e[0],h=e[1],!p||k.series&&k.series.noSharedTooltip?p=k.getLabelConfig():(B(k,function(a){a.setState("hover");r.push(a.getLabelConfig())}),p={x:k[0].category,y:k[0].y},p.points=r,k=k[0]),this.len=r.length,p=c.call(p,this),f=k.series,this.distance=t(f.tooltipOptions.distance,16),!1===p?this.hide():(c=this.getLabel(),this.isHidden&&c.attr({opacity:1}).show(),this.split?this.renderSplit(p,n(a)):(d.style.width||c.css({width:this.chart.spacingBox.width}),
c.attr({text:p&&p.join?p.join(""):p}),c.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-"+t(k.colorIndex,f.colorIndex)),c.attr({stroke:d.borderColor||k.color||f.color||"#666666"}),this.updatePosition({plotX:b,plotY:h,negative:k.negative,ttBelow:k.ttBelow,h:e[2]||0})),this.isHidden=!1))},renderSplit:function(c,b){var m=this,d=[],h=this.chart,k=h.renderer,e=!0,p=this.options,r=0,f=this.getLabel();a.isString(c)&&(c=[!1,c]);B(c.slice(0,b.length+1),function(a,c){if(!1!==a){c=b[c-1]||
{isHeader:!0,plotX:b[0].plotX};var l=c.series||m,z=l.tt,x=c.series||{},F="highcharts-color-"+t(c.colorIndex,x.colorIndex,"none");z||(l.tt=z=k.label(null,null,null,"callout",null,null,p.useHTML).addClass("highcharts-tooltip-box "+F).attr({padding:p.padding,r:p.borderRadius,fill:p.backgroundColor,stroke:p.borderColor||c.color||x.color||"#333333","stroke-width":p.borderWidth}).add(f));z.isActive=!0;z.attr({text:a});z.css(p.style).shadow(p.shadow);a=z.getBBox();x=a.width+z.strokeWidth();c.isHeader?(r=
a.height,x=Math.max(0,Math.min(c.plotX+h.plotLeft-x/2,h.chartWidth-x))):x=c.plotX+h.plotLeft-t(p.distance,16)-x;0>x&&(e=!1);a=(c.series&&c.series.yAxis&&c.series.yAxis.pos)+(c.plotY||0);a-=h.plotTop;d.push({target:c.isHeader?h.plotHeight+r:a,rank:c.isHeader?1:0,size:l.tt.getBBox().height+1,point:c,x:x,tt:z})}});this.cleanSplit();a.distribute(d,h.plotHeight+r);B(d,function(a){var b=a.point,c=b.series;a.tt.attr({visibility:void 0===a.pos?"hidden":"inherit",x:e||b.isHeader?a.x:b.plotX+h.plotLeft+t(p.distance,
16),y:a.pos+h.plotTop,anchorX:b.isHeader?b.plotX+h.plotLeft:b.plotX+c.xAxis.pos,anchorY:b.isHeader?a.pos+h.plotTop-15:b.plotY+c.yAxis.pos})})},updatePosition:function(a){var b=this.chart,c=this.getLabel(),c=(this.options.positioner||this.getPosition).call(this,c.width,c.height,a);this.move(Math.round(c.x),Math.round(c.y||0),a.plotX+b.plotLeft,a.plotY+b.plotTop)},getDateFormat:function(a,b,m,d){var c=this.chart.time,k=c.dateFormat("%m-%d %H:%M:%S.%L",b),e,p,r={millisecond:15,second:12,minute:9,hour:6,
day:3},f="millisecond";for(p in u){if(a===u.week&&+c.dateFormat("%w",b)===m&&"00:00:00.000"===k.substr(6)){p="week";break}if(u[p]>a){p=f;break}if(r[p]&&k.substr(r[p])!=="01-01 00:00:00.000".substr(r[p]))break;"week"!==p&&(f=p)}p&&(e=d[p]);return e},getXDateFormat:function(a,b,m){b=b.dateTimeLabelFormats;var c=m&&m.closestPointRange;return(c?this.getDateFormat(c,a.x,m.options.startOfWeek,b):b.day)||b.year},tooltipFooterHeaderFormatter:function(a,b){b=b?"footer":"header";var c=a.series,d=c.tooltipOptions,
h=d.xDateFormat,k=c.xAxis,e=k&&"datetime"===k.options.type&&q(a.key),p=d[b+"Format"];e&&!h&&(h=this.getXDateFormat(a,d,k));e&&h&&B(a.point&&a.point.tooltipDateKeys||["key"],function(a){p=p.replace("{point."+a+"}","{point."+a+":"+h+"}")});return E(p,{point:a,series:c},this.chart.time)},bodyFormatter:function(a){return f(a,function(a){var b=a.series.tooltipOptions;return(b[(a.point.formatPrefix||"point")+"Formatter"]||a.point.tooltipFormatter).call(a.point,b[(a.point.formatPrefix||"point")+"Format"])})}}})(K);
(function(a){var B=a.addEvent,H=a.attr,E=a.charts,q=a.color,f=a.css,l=a.defined,t=a.each,n=a.extend,v=a.find,u=a.fireEvent,c=a.isNumber,b=a.isObject,m=a.offset,d=a.pick,h=a.splat,k=a.Tooltip;a.Pointer=function(a,b){this.init(a,b)};a.Pointer.prototype={init:function(a,b){this.options=b;this.chart=a;this.runChartClick=b.chart.events&&!!b.chart.events.click;this.pinchDown=[];this.lastValidTouch={};k&&(a.tooltip=new k(a,b.tooltip),this.followTouchMove=d(b.tooltip.followTouchMove,!0));this.setDOMEvents()},
zoomOption:function(a){var b=this.chart,c=b.options.chart,e=c.zoomType||"",b=b.inverted;/touch/.test(a.type)&&(e=d(c.pinchType,e));this.zoomX=a=/x/.test(e);this.zoomY=e=/y/.test(e);this.zoomHor=a&&!b||e&&b;this.zoomVert=e&&!b||a&&b;this.hasZoom=a||e},normalize:function(a,b){var c;c=a.touches?a.touches.length?a.touches.item(0):a.changedTouches[0]:a;b||(this.chartPosition=b=m(this.chart.container));return n(a,{chartX:Math.round(c.pageX-b.left),chartY:Math.round(c.pageY-b.top)})},getCoordinates:function(a){var b=
{xAxis:[],yAxis:[]};t(this.chart.axes,function(c){b[c.isXAxis?"xAxis":"yAxis"].push({axis:c,value:c.toValue(a[c.horiz?"chartX":"chartY"])})});return b},findNearestKDPoint:function(a,c,d){var e;t(a,function(a){var h=!(a.noSharedTooltip&&c)&&0>a.options.findNearestPointBy.indexOf("y");a=a.searchPoint(d,h);if((h=b(a,!0))&&!(h=!b(e,!0)))var h=e.distX-a.distX,k=e.dist-a.dist,p=(a.series.group&&a.series.group.zIndex)-(e.series.group&&e.series.group.zIndex),h=0<(0!==h&&c?h:0!==k?k:0!==p?p:e.series.index>
a.series.index?-1:1);h&&(e=a)});return e},getPointFromEvent:function(a){a=a.target;for(var b;a&&!b;)b=a.point,a=a.parentNode;return b},getChartCoordinatesFromPoint:function(a,b){var c=a.series,e=c.xAxis,c=c.yAxis,h=d(a.clientX,a.plotX);if(e&&c)return b?{chartX:e.len+e.pos-h,chartY:c.len+c.pos-a.plotY}:{chartX:h+e.pos,chartY:a.plotY+c.pos}},getHoverData:function(c,h,k,f,m,l,n){var e,x=[],p=n&&n.isBoosting;f=!(!f||!c);n=h&&!h.stickyTracking?[h]:a.grep(k,function(a){return a.visible&&!(!m&&a.directTouch)&&
d(a.options.enableMouseTracking,!0)&&a.stickyTracking});h=(e=f?c:this.findNearestKDPoint(n,m,l))&&e.series;e&&(m&&!h.noSharedTooltip?(n=a.grep(k,function(a){return a.visible&&!(!m&&a.directTouch)&&d(a.options.enableMouseTracking,!0)&&!a.noSharedTooltip}),t(n,function(a){var c=v(a.points,function(a){return a.x===e.x&&!a.isNull});b(c)&&(p&&(c=a.getPoint(c)),x.push(c))})):x.push(e));return{hoverPoint:e,hoverSeries:h,hoverPoints:x}},runPointActions:function(b,c){var e=this.chart,h=e.tooltip&&e.tooltip.options.enabled?
e.tooltip:void 0,k=h?h.shared:!1,p=c||e.hoverPoint,f=p&&p.series||e.hoverSeries,f=this.getHoverData(p,f,e.series,!!c||f&&f.directTouch&&this.isDirectTouch,k,b,{isBoosting:e.isBoosting}),m,p=f.hoverPoint;m=f.hoverPoints;c=(f=f.hoverSeries)&&f.tooltipOptions.followPointer;k=k&&f&&!f.noSharedTooltip;if(p&&(p!==e.hoverPoint||h&&h.isHidden)){t(e.hoverPoints||[],function(b){-1===a.inArray(b,m)&&b.setState()});t(m||[],function(a){a.setState("hover")});if(e.hoverSeries!==f)f.onMouseOver();e.hoverPoint&&e.hoverPoint.firePointEvent("mouseOut");
if(!p.series)return;p.firePointEvent("mouseOver");e.hoverPoints=m;e.hoverPoint=p;h&&h.refresh(k?m:p,b)}else c&&h&&!h.isHidden&&(p=h.getAnchor([{}],b),h.updatePosition({plotX:p[0],plotY:p[1]}));this.unDocMouseMove||(this.unDocMouseMove=B(e.container.ownerDocument,"mousemove",function(b){var c=E[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}));t(e.axes,function(c){var e=d(c.crosshair.snap,!0),h=e?a.find(m,function(a){return a.series[c.coll]===c}):void 0;h||!e?c.drawCrosshair(b,h):c.hideCrosshair()})},
reset:function(a,b){var c=this.chart,d=c.hoverSeries,e=c.hoverPoint,k=c.hoverPoints,p=c.tooltip,f=p&&p.shared?k:e;a&&f&&t(h(f),function(b){b.series.isCartesian&&void 0===b.plotX&&(a=!1)});if(a)p&&f&&(p.refresh(f),e&&(e.setState(e.state,!0),t(c.axes,function(a){a.crosshair&&a.drawCrosshair(null,e)})));else{if(e)e.onMouseOut();k&&t(k,function(a){a.setState()});if(d)d.onMouseOut();p&&p.hide(b);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());t(c.axes,function(a){a.hideCrosshair()});this.hoverX=
c.hoverPoints=c.hoverPoint=null}},scaleGroups:function(a,b){var c=this.chart,d;t(c.series,function(e){d=a||e.getPlotBox();e.xAxis&&e.xAxis.zoomEnabled&&e.group&&(e.group.attr(d),e.markerGroup&&(e.markerGroup.attr(d),e.markerGroup.clip(b?c.clipRect:null)),e.dataLabelsGroup&&e.dataLabelsGroup.attr(d))});c.clipRect.attr(b||c.clipBox)},dragStart:function(a){var b=this.chart;b.mouseIsDown=a.type;b.cancelClick=!1;b.mouseDownX=this.mouseDownX=a.chartX;b.mouseDownY=this.mouseDownY=a.chartY},drag:function(a){var b=
this.chart,c=b.options.chart,d=a.chartX,e=a.chartY,h=this.zoomHor,k=this.zoomVert,f=b.plotLeft,x=b.plotTop,m=b.plotWidth,A=b.plotHeight,l,n=this.selectionMarker,g=this.mouseDownX,w=this.mouseDownY,t=c.panKey&&a[c.panKey+"Key"];n&&n.touch||(d<f?d=f:d>f+m&&(d=f+m),e<x?e=x:e>x+A&&(e=x+A),this.hasDragged=Math.sqrt(Math.pow(g-d,2)+Math.pow(w-e,2)),10<this.hasDragged&&(l=b.isInsidePlot(g-f,w-x),b.hasCartesianSeries&&(this.zoomX||this.zoomY)&&l&&!t&&!n&&(this.selectionMarker=n=b.renderer.rect(f,x,h?1:m,
k?1:A,0).attr({fill:c.selectionMarkerFill||q("#335cad").setOpacity(.25).get(),"class":"highcharts-selection-marker",zIndex:7}).add()),n&&h&&(d-=g,n.attr({width:Math.abs(d),x:(0<d?0:d)+g})),n&&k&&(d=e-w,n.attr({height:Math.abs(d),y:(0<d?0:d)+w})),l&&!n&&c.panning&&b.pan(a,c.panning)))},drop:function(a){var b=this,d=this.chart,e=this.hasPinched;if(this.selectionMarker){var h={originalEvent:a,xAxis:[],yAxis:[]},k=this.selectionMarker,m=k.attr?k.attr("x"):k.x,C=k.attr?k.attr("y"):k.y,x=k.attr?k.attr("width"):
k.width,F=k.attr?k.attr("height"):k.height,A;if(this.hasDragged||e)t(d.axes,function(c){if(c.zoomEnabled&&l(c.min)&&(e||b[{xAxis:"zoomX",yAxis:"zoomY"}[c.coll]])){var d=c.horiz,g="touchend"===a.type?c.minPixelPadding:0,k=c.toValue((d?m:C)+g),d=c.toValue((d?m+x:C+F)-g);h[c.coll].push({axis:c,min:Math.min(k,d),max:Math.max(k,d)});A=!0}}),A&&u(d,"selection",h,function(a){d.zoom(n(a,e?{animation:!1}:null))});c(d.index)&&(this.selectionMarker=this.selectionMarker.destroy());e&&this.scaleGroups()}d&&c(d.index)&&
(f(d.container,{cursor:d._cursor}),d.cancelClick=10<this.hasDragged,d.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])},onContainerMouseDown:function(a){a=this.normalize(a);2!==a.button&&(this.zoomOption(a),a.preventDefault&&a.preventDefault(),this.dragStart(a))},onDocumentMouseUp:function(b){E[a.hoverChartIndex]&&E[a.hoverChartIndex].pointer.drop(b)},onDocumentMouseMove:function(a){var b=this.chart,c=this.chartPosition;a=this.normalize(a,c);!c||this.inClass(a.target,"highcharts-tracker")||
b.isInsidePlot(a.chartX-b.plotLeft,a.chartY-b.plotTop)||this.reset()},onContainerMouseLeave:function(b){var c=E[a.hoverChartIndex];c&&(b.relatedTarget||b.toElement)&&(c.pointer.reset(),c.pointer.chartPosition=null)},onContainerMouseMove:function(b){var c=this.chart;l(a.hoverChartIndex)&&E[a.hoverChartIndex]&&E[a.hoverChartIndex].mouseIsDown||(a.hoverChartIndex=c.index);b=this.normalize(b);b.returnValue=!1;"mousedown"===c.mouseIsDown&&this.drag(b);!this.inClass(b.target,"highcharts-tracker")&&!c.isInsidePlot(b.chartX-
c.plotLeft,b.chartY-c.plotTop)||c.openMenu||this.runPointActions(b)},inClass:function(a,b){for(var c;a;){if(c=H(a,"class")){if(-1!==c.indexOf(b))return!0;if(-1!==c.indexOf("highcharts-container"))return!1}a=a.parentNode}},onTrackerMouseOut:function(a){var b=this.chart.hoverSeries;a=a.relatedTarget||a.toElement;this.isDirectTouch=!1;if(!(!b||!a||b.stickyTracking||this.inClass(a,"highcharts-tooltip")||this.inClass(a,"highcharts-series-"+b.index)&&this.inClass(a,"highcharts-tracker")))b.onMouseOut()},
onContainerClick:function(a){var b=this.chart,c=b.hoverPoint,d=b.plotLeft,e=b.plotTop;a=this.normalize(a);b.cancelClick||(c&&this.inClass(a.target,"highcharts-tracker")?(u(c.series,"click",n(a,{point:c})),b.hoverPoint&&c.firePointEvent("click",a)):(n(a,this.getCoordinates(a)),b.isInsidePlot(a.chartX-d,a.chartY-e)&&u(b,"click",a)))},setDOMEvents:function(){var b=this,c=b.chart.container,d=c.ownerDocument;c.onmousedown=function(a){b.onContainerMouseDown(a)};c.onmousemove=function(a){b.onContainerMouseMove(a)};
c.onclick=function(a){b.onContainerClick(a)};this.unbindContainerMouseLeave=B(c,"mouseleave",b.onContainerMouseLeave);a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=B(d,"mouseup",b.onDocumentMouseUp));a.hasTouch&&(c.ontouchstart=function(a){b.onContainerTouchStart(a)},c.ontouchmove=function(a){b.onContainerTouchMove(a)},a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=B(d,"touchend",b.onDocumentTouchEnd)))},destroy:function(){var b=this;b.unDocMouseMove&&b.unDocMouseMove();this.unbindContainerMouseLeave();
a.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(b.tooltipTimeout);a.objectEach(b,function(a,c){b[c]=null})}}})(K);(function(a){var B=a.charts,H=a.each,E=a.extend,q=a.map,f=a.noop,l=a.pick;E(a.Pointer.prototype,{pinchTranslate:function(a,f,l,q,c,b){this.zoomHor&&this.pinchTranslateDirection(!0,a,f,l,q,c,b);this.zoomVert&&this.pinchTranslateDirection(!1,a,f,l,q,
c,b)},pinchTranslateDirection:function(a,f,l,q,c,b,m,d){var h=this.chart,k=a?"x":"y",e=a?"X":"Y",p="chart"+e,r=a?"width":"height",n=h["plot"+(a?"Left":"Top")],z,t,D=d||1,C=h.inverted,x=h.bounds[a?"h":"v"],F=1===f.length,A=f[0][p],J=l[0][p],G=!F&&f[1][p],g=!F&&l[1][p],w;l=function(){!F&&20<Math.abs(A-G)&&(D=d||Math.abs(J-g)/Math.abs(A-G));t=(n-J)/D+A;z=h["plot"+(a?"Width":"Height")]/D};l();f=t;f<x.min?(f=x.min,w=!0):f+z>x.max&&(f=x.max-z,w=!0);w?(J-=.8*(J-m[k][0]),F||(g-=.8*(g-m[k][1])),l()):m[k]=
[J,g];C||(b[k]=t-n,b[r]=z);b=C?1/D:D;c[r]=z;c[k]=f;q[C?a?"scaleY":"scaleX":"scale"+e]=D;q["translate"+e]=b*n+(J-b*A)},pinch:function(a){var n=this,t=n.chart,u=n.pinchDown,c=a.touches,b=c.length,m=n.lastValidTouch,d=n.hasZoom,h=n.selectionMarker,k={},e=1===b&&(n.inClass(a.target,"highcharts-tracker")&&t.runTrackerClick||n.runChartClick),p={};1<b&&(n.initiated=!0);d&&n.initiated&&!e&&a.preventDefault();q(c,function(a){return n.normalize(a)});"touchstart"===a.type?(H(c,function(a,b){u[b]={chartX:a.chartX,
chartY:a.chartY}}),m.x=[u[0].chartX,u[1]&&u[1].chartX],m.y=[u[0].chartY,u[1]&&u[1].chartY],H(t.axes,function(a){if(a.zoomEnabled){var b=t.bounds[a.horiz?"h":"v"],c=a.minPixelPadding,d=a.toPixels(l(a.options.min,a.dataMin)),e=a.toPixels(l(a.options.max,a.dataMax)),h=Math.max(d,e);b.min=Math.min(a.pos,Math.min(d,e)-c);b.max=Math.max(a.pos+a.len,h+c)}}),n.res=!0):n.followTouchMove&&1===b?this.runPointActions(n.normalize(a)):u.length&&(h||(n.selectionMarker=h=E({destroy:f,touch:!0},t.plotBox)),n.pinchTranslate(u,
c,k,h,p,m),n.hasPinched=d,n.scaleGroups(k,p),n.res&&(n.res=!1,this.reset(!1,0)))},touch:function(f,n){var t=this.chart,q,c;if(t.index!==a.hoverChartIndex)this.onContainerMouseLeave({relatedTarget:!0});a.hoverChartIndex=t.index;1===f.touches.length?(f=this.normalize(f),(c=t.isInsidePlot(f.chartX-t.plotLeft,f.chartY-t.plotTop))&&!t.openMenu?(n&&this.runPointActions(f),"touchmove"===f.type&&(n=this.pinchDown,q=n[0]?4<=Math.sqrt(Math.pow(n[0].chartX-f.chartX,2)+Math.pow(n[0].chartY-f.chartY,2)):!1),l(q,
!0)&&this.pinch(f)):n&&this.reset()):2===f.touches.length&&this.pinch(f)},onContainerTouchStart:function(a){this.zoomOption(a);this.touch(a,!0)},onContainerTouchMove:function(a){this.touch(a)},onDocumentTouchEnd:function(f){B[a.hoverChartIndex]&&B[a.hoverChartIndex].pointer.drop(f)}})})(K);(function(a){var B=a.addEvent,H=a.charts,E=a.css,q=a.doc,f=a.extend,l=a.noop,t=a.Pointer,n=a.removeEvent,v=a.win,u=a.wrap;if(!a.hasTouch&&(v.PointerEvent||v.MSPointerEvent)){var c={},b=!!v.PointerEvent,m=function(){var b=
[];b.item=function(a){return this[a]};a.objectEach(c,function(a){b.push({pageX:a.pageX,pageY:a.pageY,target:a.target})});return b},d=function(b,c,d,f){"touch"!==b.pointerType&&b.pointerType!==b.MSPOINTER_TYPE_TOUCH||!H[a.hoverChartIndex]||(f(b),f=H[a.hoverChartIndex].pointer,f[c]({type:d,target:b.currentTarget,preventDefault:l,touches:m()}))};f(t.prototype,{onContainerPointerDown:function(a){d(a,"onContainerTouchStart","touchstart",function(a){c[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})},
onContainerPointerMove:function(a){d(a,"onContainerTouchMove","touchmove",function(a){c[a.pointerId]={pageX:a.pageX,pageY:a.pageY};c[a.pointerId].target||(c[a.pointerId].target=a.currentTarget)})},onDocumentPointerUp:function(a){d(a,"onDocumentTouchEnd","touchend",function(a){delete c[a.pointerId]})},batchMSEvents:function(a){a(this.chart.container,b?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,b?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(q,b?
"pointerup":"MSPointerUp",this.onDocumentPointerUp)}});u(t.prototype,"init",function(a,b,c){a.call(this,b,c);this.hasZoom&&E(b.container,{"-ms-touch-action":"none","touch-action":"none"})});u(t.prototype,"setDOMEvents",function(a){a.apply(this);(this.hasZoom||this.followTouchMove)&&this.batchMSEvents(B)});u(t.prototype,"destroy",function(a){this.batchMSEvents(n);a.call(this)})}})(K);(function(a){var B=a.addEvent,H=a.css,E=a.discardElement,q=a.defined,f=a.each,l=a.isFirefox,t=a.marginNames,n=a.merge,
v=a.pick,u=a.setAnimation,c=a.stableSort,b=a.win,m=a.wrap;a.Legend=function(a,b){this.init(a,b)};a.Legend.prototype={init:function(a,b){this.chart=a;this.setOptions(b);b.enabled&&(this.render(),B(this.chart,"endResize",function(){this.legend.positionCheckboxes()}))},setOptions:function(a){var b=v(a.padding,8);this.options=a;this.itemStyle=a.itemStyle;this.itemHiddenStyle=n(this.itemStyle,a.itemHiddenStyle);this.itemMarginTop=a.itemMarginTop||0;this.padding=b;this.initialItemY=b-5;this.itemHeight=
this.maxItemWidth=0;this.symbolWidth=v(a.symbolWidth,16);this.pages=[]},update:function(a,b){var c=this.chart;this.setOptions(n(!0,this.options,a));this.destroy();c.isDirtyLegend=c.isDirtyBox=!0;v(b,!0)&&c.redraw()},colorizeItem:function(a,b){a.legendGroup[b?"removeClass":"addClass"]("highcharts-legend-item-hidden");var c=this.options,d=a.legendItem,h=a.legendLine,f=a.legendSymbol,m=this.itemHiddenStyle.color,c=b?c.itemStyle.color:m,l=b?a.color||m:m,n=a.options&&a.options.marker,D={fill:l};d&&d.css({fill:c,
color:c});h&&h.attr({stroke:l});f&&(n&&f.isMarker&&(D=a.pointAttribs(),b||(D.stroke=D.fill=m)),f.attr(D))},positionItem:function(a){var b=this.options,c=b.symbolPadding,b=!b.rtl,d=a._legendItemPos,f=d[0],d=d[1],m=a.checkbox;(a=a.legendGroup)&&a.element&&a.translate(b?f:this.legendWidth-f-2*c-4,d);m&&(m.x=f,m.y=d)},destroyItem:function(a){var b=a.checkbox;f(["legendItem","legendLine","legendSymbol","legendGroup"],function(b){a[b]&&(a[b]=a[b].destroy())});b&&E(a.checkbox)},destroy:function(){function a(a){this[a]&&
(this[a]=this[a].destroy())}f(this.getAllItems(),function(b){f(["legendItem","legendGroup"],a,b)});f("clipRect up down pager nav box title group".split(" "),a,this);this.display=null},positionCheckboxes:function(){var a=this.group&&this.group.alignAttr,b,c=this.clipHeight||this.legendHeight,e=this.titleHeight;a&&(b=a.translateY,f(this.allItems,function(d){var h=d.checkbox,k;h&&(k=b+e+h.y+(this.scrollOffset||0)+3,H(h,{left:a.translateX+d.checkboxOffset+h.x-20+"px",top:k+"px",display:k>b-6&&k<b+c-6?
"":"none"}))},this))},renderTitle:function(){var a=this.options,b=this.padding,c=a.title,e=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,b-3,b-4,null,null,null,a.useHTML,null,"legend-title").attr({zIndex:1}).css(c.style).add(this.group)),a=this.title.getBBox(),e=a.height,this.offsetWidth=a.width,this.contentGroup.attr({translateY:e}));this.titleHeight=e},setText:function(b){var c=this.options;b.legendItem.attr({text:c.labelFormat?a.format(c.labelFormat,b,this.chart.time):c.labelFormatter.call(b)})},
renderItem:function(a){var b=this.chart,c=b.renderer,d=this.options,f="horizontal"===d.layout,m=this.symbolWidth,l=d.symbolPadding,z=this.itemStyle,q=this.itemHiddenStyle,D=this.padding,C=f?v(d.itemDistance,20):0,x=!d.rtl,F=d.width,A=d.itemMarginBottom||0,J=this.itemMarginTop,G=a.legendItem,g=!a.series,w=!g&&a.series.drawLegendSymbol?a.series:a,t=w.options,u=this.createCheckboxForItem&&t&&t.showCheckbox,t=m+l+C+(u?20:0),N=d.useHTML,O=a.options.className;G||(a.legendGroup=c.g("legend-item").addClass("highcharts-"+
w.type+"-series highcharts-color-"+a.colorIndex+(O?" "+O:"")+(g?" highcharts-series-"+a.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.legendItem=G=c.text("",x?m+l:-l,this.baseline||0,N).css(n(a.visible?z:q)).attr({align:x?"left":"right",zIndex:2}).add(a.legendGroup),this.baseline||(m=z.fontSize,this.fontMetrics=c.fontMetrics(m,G),this.baseline=this.fontMetrics.f+3+J,G.attr("y",this.baseline)),this.symbolHeight=d.symbolHeight||this.fontMetrics.f,w.drawLegendSymbol(this,a),this.setItemEvents&&
this.setItemEvents(a,G,N),u&&this.createCheckboxForItem(a));this.colorizeItem(a,a.visible);z.width||G.css({width:(d.itemWidth||d.width||b.spacingBox.width)-t});this.setText(a);c=G.getBBox();z=a.checkboxOffset=d.itemWidth||a.legendItemWidth||c.width+t;this.itemHeight=c=Math.round(a.legendItemHeight||c.height||this.symbolHeight);f&&this.itemX-D+z>(F||b.spacingBox.width-2*D-d.x)&&(this.itemX=D,this.itemY+=J+this.lastLineHeight+A,this.lastLineHeight=0);this.maxItemWidth=Math.max(this.maxItemWidth,z);
this.lastItemY=J+this.itemY+A;this.lastLineHeight=Math.max(c,this.lastLineHeight);a._legendItemPos=[this.itemX,this.itemY];f?this.itemX+=z:(this.itemY+=J+c+A,this.lastLineHeight=c);this.offsetWidth=F||Math.max((f?this.itemX-D-(a.checkbox?0:C):z)+D,this.offsetWidth)},getAllItems:function(){var a=[];f(this.chart.series,function(b){var c=b&&b.options;b&&v(c.showInLegend,q(c.linkedTo)?!1:void 0,!0)&&(a=a.concat(b.legendItems||("point"===c.legendType?b.data:b)))});return a},getAlignment:function(){var a=
this.options;return a.floating?"":a.align.charAt(0)+a.verticalAlign.charAt(0)+a.layout.charAt(0)},adjustMargins:function(a,b){var c=this.chart,d=this.options,h=this.getAlignment();h&&f([/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/],function(e,k){e.test(h)&&!q(a[k])&&(c[t[k]]=Math.max(c[t[k]],c.legend[(k+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][k]*d[k%2?"x":"y"]+v(d.margin,12)+b[k]+(0===k?c.titleOffset+c.options.title.margin:0)))})},render:function(){var a=this,b=a.chart,k=b.renderer,
e=a.group,m,l,t,z,q=a.box,D=a.options,C=a.padding;a.itemX=C;a.itemY=a.initialItemY;a.offsetWidth=0;a.lastItemY=0;e||(a.group=e=k.g("legend").attr({zIndex:7}).add(),a.contentGroup=k.g().attr({zIndex:1}).add(e),a.scrollGroup=k.g().add(a.contentGroup));a.renderTitle();m=a.getAllItems();c(m,function(a,b){return(a.options&&a.options.legendIndex||0)-(b.options&&b.options.legendIndex||0)});D.reversed&&m.reverse();a.allItems=m;a.display=l=!!m.length;a.lastLineHeight=0;f(m,function(b){a.renderItem(b)});t=
(D.width||a.offsetWidth)+C;z=a.lastItemY+a.lastLineHeight+a.titleHeight;z=a.handleOverflow(z);z+=C;q||(a.box=q=k.rect().addClass("highcharts-legend-box").attr({r:D.borderRadius}).add(e),q.isNew=!0);q.attr({stroke:D.borderColor,"stroke-width":D.borderWidth||0,fill:D.backgroundColor||"none"}).shadow(D.shadow);0<t&&0<z&&(q[q.isNew?"attr":"animate"](q.crisp.call({},{x:0,y:0,width:t,height:z},q.strokeWidth())),q.isNew=!1);q[l?"show":"hide"]();a.legendWidth=t;a.legendHeight=z;f(m,function(b){a.positionItem(b)});
l&&(k=b.spacingBox,/(lth|ct|rth)/.test(a.getAlignment())&&(k=n(k,{y:k.y+b.titleOffset+b.options.title.margin})),e.align(n(D,{width:t,height:z}),!0,k));b.isResizing||this.positionCheckboxes()},handleOverflow:function(a){var b=this,c=this.chart,d=c.renderer,m=this.options,l=m.y,n=this.padding,c=c.spacingBox.height+("top"===m.verticalAlign?-l:l)-n,l=m.maxHeight,z,q=this.clipRect,D=m.navigation,t=v(D.animation,!0),x=D.arrowSize||12,F=this.nav,A=this.pages,J,G=this.allItems,g=function(a){"number"===typeof a?
q.attr({height:a}):q&&(b.clipRect=q.destroy(),b.contentGroup.clip());b.contentGroup.div&&(b.contentGroup.div.style.clip=a?"rect("+n+"px,9999px,"+(n+a)+"px,0)":"auto")};"horizontal"!==m.layout||"middle"===m.verticalAlign||m.floating||(c/=2);l&&(c=Math.min(c,l));A.length=0;a>c&&!1!==D.enabled?(this.clipHeight=z=Math.max(c-20-this.titleHeight-n,0),this.currentPage=v(this.currentPage,1),this.fullHeight=a,f(G,function(a,b){var c=a._legendItemPos[1],d=Math.round(a.legendItem.getBBox().height),g=A.length;
if(!g||c-A[g-1]>z&&(J||c)!==A[g-1])A.push(J||c),g++;a.pageIx=g-1;J&&(G[b-1].pageIx=g-1);b===G.length-1&&c+d-A[g-1]>z&&(A.push(c),a.pageIx=g);c!==J&&(J=c)}),q||(q=b.clipRect=d.clipRect(0,n,9999,0),b.contentGroup.clip(q)),g(z),F||(this.nav=F=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,x,x).on("click",function(){b.scroll(-1,t)}).add(F),this.pager=d.text("",15,10).addClass("highcharts-legend-navigation").css(D.style).add(F),this.down=d.symbol("triangle-down",0,0,x,x).on("click",
function(){b.scroll(1,t)}).add(F)),b.scroll(0),a=c):F&&(g(),this.nav=F.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return a},scroll:function(a,b){var c=this.pages,d=c.length;a=this.currentPage+a;var h=this.clipHeight,f=this.options.navigation,m=this.pager,l=this.padding;a>d&&(a=d);0<a&&(void 0!==b&&u(b,this.chart),this.nav.attr({translateX:l,translateY:h+this.padding+7+this.titleHeight,visibility:"visible"}),this.up.attr({"class":1===a?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),
m.attr({text:a+"/"+d}),this.down.attr({x:18+this.pager.getBBox().width,"class":a===d?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"}),this.up.attr({fill:1===a?f.inactiveColor:f.activeColor}).css({cursor:1===a?"default":"pointer"}),this.down.attr({fill:a===d?f.inactiveColor:f.activeColor}).css({cursor:a===d?"default":"pointer"}),this.scrollOffset=-c[a-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=a,this.positionCheckboxes())}};a.LegendSymbolMixin=
{drawRectangle:function(a,b){var c=a.symbolHeight,d=a.options.squareSymbol;b.legendSymbol=this.chart.renderer.rect(d?(a.symbolWidth-c)/2:0,a.baseline-c+1,d?c:a.symbolWidth,c,v(a.options.symbolRadius,c/2)).addClass("highcharts-point").attr({zIndex:3}).add(b.legendGroup)},drawLineMarker:function(a){var b=this.options,c=b.marker,d=a.symbolWidth,f=a.symbolHeight,m=f/2,l=this.chart.renderer,z=this.legendGroup;a=a.baseline-Math.round(.3*a.fontMetrics.b);var q;q={"stroke-width":b.lineWidth||0};b.dashStyle&&
(q.dashstyle=b.dashStyle);this.legendLine=l.path(["M",0,a,"L",d,a]).addClass("highcharts-graph").attr(q).add(z);c&&!1!==c.enabled&&(b=Math.min(v(c.radius,m),m),0===this.symbol.indexOf("url")&&(c=n(c,{width:f,height:f}),b=0),this.legendSymbol=c=l.symbol(this.symbol,d/2-b,a-b,2*b,2*b,c).addClass("highcharts-point").add(z),c.isMarker=!0)}};(/Trident\/7\.0/.test(b.navigator.userAgent)||l)&&m(a.Legend.prototype,"positionItem",function(a,b){var c=this,d=function(){b._legendItemPos&&a.call(c,b)};d();setTimeout(d)})})(K);
(function(a){var B=a.addEvent,H=a.animate,E=a.animObject,q=a.attr,f=a.doc,l=a.Axis,t=a.createElement,n=a.defaultOptions,v=a.discardElement,u=a.charts,c=a.css,b=a.defined,m=a.each,d=a.extend,h=a.find,k=a.fireEvent,e=a.grep,p=a.isNumber,r=a.isObject,I=a.isString,z=a.Legend,M=a.marginNames,D=a.merge,C=a.objectEach,x=a.Pointer,F=a.pick,A=a.pInt,J=a.removeEvent,G=a.seriesTypes,g=a.splat,w=a.syncTimeout,L=a.win,P=a.Chart=function(){this.getArgs.apply(this,arguments)};a.chart=function(a,b,c){return new P(a,
b,c)};d(P.prototype,{callbacks:[],getArgs:function(){var a=[].slice.call(arguments);if(I(a[0])||a[0].nodeName)this.renderTo=a.shift();this.init(a[0],a[1])},init:function(b,c){var g,d,e=b.series,h=b.plotOptions||{};b.series=null;g=D(n,b);for(d in g.plotOptions)g.plotOptions[d].tooltip=h[d]&&D(h[d].tooltip)||void 0;g.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;g.series=b.series=e;this.userOptions=b;d=g.chart;e=d.events;this.margin=[];this.spacing=[];this.bounds=
{h:{},v:{}};this.labelCollectors=[];this.callback=c;this.isResizing=0;this.options=g;this.axes=[];this.series=[];this.time=b.time&&a.keys(b.time).length?new a.Time(b.time):a.time;this.hasCartesianSeries=d.showAxes;var k=this;k.index=u.length;u.push(k);a.chartCount++;e&&C(e,function(a,b){B(k,b,a)});k.xAxis=[];k.yAxis=[];k.pointCount=k.colorCounter=k.symbolCounter=0;k.firstRender()},initSeries:function(b){var c=this.options.chart;(c=G[b.type||c.type||c.defaultSeriesType])||a.error(17,!0);c=new c;c.init(this,
b);return c},orderSeries:function(a){var b=this.series;for(a=a||0;a<b.length;a++)b[a]&&(b[a].index=a,b[a].name=b[a].getName())},isInsidePlot:function(a,b,c){var g=c?b:a;a=c?a:b;return 0<=g&&g<=this.plotWidth&&0<=a&&a<=this.plotHeight},redraw:function(b){var c=this.axes,g=this.series,e=this.pointer,h=this.legend,f=this.isDirtyLegend,x,l,p=this.hasCartesianSeries,A=this.isDirtyBox,F,n=this.renderer,w=n.isHidden(),r=[];this.setResponsive&&this.setResponsive(!1);a.setAnimation(b,this);w&&this.temporaryDisplay();
this.layOutTitles();for(b=g.length;b--;)if(F=g[b],F.options.stacking&&(x=!0,F.isDirty)){l=!0;break}if(l)for(b=g.length;b--;)F=g[b],F.options.stacking&&(F.isDirty=!0);m(g,function(a){a.isDirty&&"point"===a.options.legendType&&(a.updateTotals&&a.updateTotals(),f=!0);a.isDirtyData&&k(a,"updatedData")});f&&h.options.enabled&&(h.render(),this.isDirtyLegend=!1);x&&this.getStacks();p&&m(c,function(a){a.updateNames();a.setScale()});this.getMargins();p&&(m(c,function(a){a.isDirty&&(A=!0)}),m(c,function(a){var b=
a.min+","+a.max;a.extKey!==b&&(a.extKey=b,r.push(function(){k(a,"afterSetExtremes",d(a.eventArgs,a.getExtremes()));delete a.eventArgs}));(A||x)&&a.redraw()}));A&&this.drawChartBox();k(this,"predraw");m(g,function(a){(A||a.isDirty)&&a.visible&&a.redraw();a.isDirtyData=!1});e&&e.reset(!0);n.draw();k(this,"redraw");k(this,"render");w&&this.temporaryDisplay(!0);m(r,function(a){a.call()})},get:function(a){function b(b){return b.id===a||b.options&&b.options.id===a}var c,g=this.series,d;c=h(this.axes,b)||
h(this.series,b);for(d=0;!c&&d<g.length;d++)c=h(g[d].points||[],b);return c},getAxes:function(){var a=this,b=this.options,c=b.xAxis=g(b.xAxis||{}),b=b.yAxis=g(b.yAxis||{});k(this,"beforeGetAxes");m(c,function(a,b){a.index=b;a.isX=!0});m(b,function(a,b){a.index=b});c=c.concat(b);m(c,function(b){new l(a,b)})},getSelectedPoints:function(){var a=[];m(this.series,function(b){a=a.concat(e(b.data||[],function(a){return a.selected}))});return a},getSelectedSeries:function(){return e(this.series,function(a){return a.selected})},
setTitle:function(a,b,c){var g=this,d=g.options,e;e=d.title=D({style:{color:"#333333",fontSize:d.isStock?"16px":"18px"}},d.title,a);d=d.subtitle=D({style:{color:"#666666"}},d.subtitle,b);m([["title",a,e],["subtitle",b,d]],function(a,b){var c=a[0],d=g[c],e=a[1];a=a[2];d&&e&&(g[c]=d=d.destroy());a&&!d&&(g[c]=g.renderer.text(a.text,0,0,a.useHTML).attr({align:a.align,"class":"highcharts-"+c,zIndex:a.zIndex||4}).add(),g[c].update=function(a){g.setTitle(!b&&a,b&&a)},g[c].css(a.style))});g.layOutTitles(c)},
layOutTitles:function(a){var b=0,c,g=this.renderer,e=this.spacingBox;m(["title","subtitle"],function(a){var c=this[a],h=this.options[a];a="title"===a?-3:h.verticalAlign?0:b+2;var k;c&&(k=h.style.fontSize,k=g.fontMetrics(k,c).b,c.css({width:(h.width||e.width+h.widthAdjust)+"px"}).align(d({y:a+k},h),!1,"spacingBox"),h.floating||h.verticalAlign||(b=Math.ceil(b+c.getBBox(h.useHTML).height)))},this);c=this.titleOffset!==b;this.titleOffset=b;!this.isDirtyBox&&c&&(this.isDirtyBox=c,this.hasRendered&&F(a,
!0)&&this.isDirtyBox&&this.redraw())},getChartSize:function(){var c=this.options.chart,g=c.width,c=c.height,d=this.renderTo;b(g)||(this.containerWidth=a.getStyle(d,"width"));b(c)||(this.containerHeight=a.getStyle(d,"height"));this.chartWidth=Math.max(0,g||this.containerWidth||600);this.chartHeight=Math.max(0,a.relativeLength(c,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))},temporaryDisplay:function(b){var c=this.renderTo;if(b)for(;c&&c.style;)c.hcOrigStyle&&(a.css(c,c.hcOrigStyle),
delete c.hcOrigStyle),c.hcOrigDetached&&(f.body.removeChild(c),c.hcOrigDetached=!1),c=c.parentNode;else for(;c&&c.style;){f.body.contains(c)||c.parentNode||(c.hcOrigDetached=!0,f.body.appendChild(c));if("none"===a.getStyle(c,"display",!1)||c.hcOricDetached)c.hcOrigStyle={display:c.style.display,height:c.style.height,overflow:c.style.overflow},b={display:"block",overflow:"hidden"},c!==this.renderTo&&(b.height=0),a.css(c,b),c.offsetWidth||c.style.setProperty("display","block","important");c=c.parentNode;
if(c===f.body)break}},setClassName:function(a){this.container.className="highcharts-container "+(a||"")},getContainer:function(){var b,c=this.options,g=c.chart,e,h;b=this.renderTo;var k=a.uniqueKey(),x;b||(this.renderTo=b=g.renderTo);I(b)&&(this.renderTo=b=f.getElementById(b));b||a.error(13,!0);e=A(q(b,"data-highcharts-chart"));p(e)&&u[e]&&u[e].hasRendered&&u[e].destroy();q(b,"data-highcharts-chart",this.index);b.innerHTML="";g.skipClone||b.offsetWidth||this.temporaryDisplay();this.getChartSize();
e=this.chartWidth;h=this.chartHeight;x=d({position:"relative",overflow:"hidden",width:e+"px",height:h+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)"},g.style);this.container=b=t("div",{id:k},x,b);this._cursor=b.style.cursor;this.renderer=new (a[g.renderer]||a.Renderer)(b,e,h,null,g.forExport,c.exporting&&c.exporting.allowHTML);this.setClassName(g.className);this.renderer.setStyle(g.style);this.renderer.chartIndex=this.index},getMargins:function(a){var c=
this.spacing,g=this.margin,d=this.titleOffset;this.resetMargins();d&&!b(g[0])&&(this.plotTop=Math.max(this.plotTop,d+this.options.title.margin+c[0]));this.legend&&this.legend.display&&this.legend.adjustMargins(g,c);this.extraMargin&&(this[this.extraMargin.type]=(this[this.extraMargin.type]||0)+this.extraMargin.value);this.adjustPlotArea&&this.adjustPlotArea();a||this.getAxisMargins()},getAxisMargins:function(){var a=this,c=a.axisOffset=[0,0,0,0],g=a.margin;a.hasCartesianSeries&&m(a.axes,function(a){a.visible&&
a.getOffset()});m(M,function(d,e){b(g[e])||(a[d]+=c[e])});a.setChartSize()},reflow:function(c){var g=this,d=g.options.chart,e=g.renderTo,h=b(d.width)&&b(d.height),k=d.width||a.getStyle(e,"width"),d=d.height||a.getStyle(e,"height"),e=c?c.target:L;if(!h&&!g.isPrinting&&k&&d&&(e===L||e===f)){if(k!==g.containerWidth||d!==g.containerHeight)clearTimeout(g.reflowTimeout),g.reflowTimeout=w(function(){g.container&&g.setSize(void 0,void 0,!1)},c?100:0);g.containerWidth=k;g.containerHeight=d}},initReflow:function(){var a=
this,b;b=B(L,"resize",function(b){a.reflow(b)});B(a,"destroy",b)},setSize:function(b,g,d){var e=this,h=e.renderer;e.isResizing+=1;a.setAnimation(d,e);e.oldChartHeight=e.chartHeight;e.oldChartWidth=e.chartWidth;void 0!==b&&(e.options.chart.width=b);void 0!==g&&(e.options.chart.height=g);e.getChartSize();b=h.globalAnimation;(b?H:c)(e.container,{width:e.chartWidth+"px",height:e.chartHeight+"px"},b);e.setChartSize(!0);h.setSize(e.chartWidth,e.chartHeight,d);m(e.axes,function(a){a.isDirty=!0;a.setScale()});
e.isDirtyLegend=!0;e.isDirtyBox=!0;e.layOutTitles();e.getMargins();e.redraw(d);e.oldChartHeight=null;k(e,"resize");w(function(){e&&k(e,"endResize",null,function(){--e.isResizing})},E(b).duration)},setChartSize:function(a){var b=this.inverted,c=this.renderer,g=this.chartWidth,d=this.chartHeight,e=this.options.chart,h=this.spacing,k=this.clipOffset,f,x,l,p;this.plotLeft=f=Math.round(this.plotLeft);this.plotTop=x=Math.round(this.plotTop);this.plotWidth=l=Math.max(0,Math.round(g-f-this.marginRight));
this.plotHeight=p=Math.max(0,Math.round(d-x-this.marginBottom));this.plotSizeX=b?p:l;this.plotSizeY=b?l:p;this.plotBorderWidth=e.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:h[3],y:h[0],width:g-h[3]-h[1],height:d-h[0]-h[2]};this.plotBox=c.plotBox={x:f,y:x,width:l,height:p};g=2*Math.floor(this.plotBorderWidth/2);b=Math.ceil(Math.max(g,k[3])/2);c=Math.ceil(Math.max(g,k[0])/2);this.clipBox={x:b,y:c,width:Math.floor(this.plotSizeX-Math.max(g,k[1])/2-b),height:Math.max(0,Math.floor(this.plotSizeY-
Math.max(g,k[2])/2-c))};a||m(this.axes,function(a){a.setAxisSize();a.setAxisTranslation()})},resetMargins:function(){var a=this,b=a.options.chart;m(["margin","spacing"],function(c){var g=b[c],d=r(g)?g:[g,g,g,g];m(["Top","Right","Bottom","Left"],function(g,e){a[c][e]=F(b[c+g],d[e])})});m(M,function(b,c){a[b]=F(a.margin[c],a.spacing[c])});a.axisOffset=[0,0,0,0];a.clipOffset=[0,0,0,0]},drawChartBox:function(){var a=this.options.chart,b=this.renderer,c=this.chartWidth,g=this.chartHeight,d=this.chartBackground,
e=this.plotBackground,h=this.plotBorder,f,x=this.plotBGImage,m=a.backgroundColor,l=a.plotBackgroundColor,p=a.plotBackgroundImage,A,F=this.plotLeft,n=this.plotTop,w=this.plotWidth,r=this.plotHeight,z=this.plotBox,G=this.clipRect,J=this.clipBox,q="animate";d||(this.chartBackground=d=b.rect().addClass("highcharts-background").add(),q="attr");f=a.borderWidth||0;A=f+(a.shadow?8:0);m={fill:m||"none"};if(f||d["stroke-width"])m.stroke=a.borderColor,m["stroke-width"]=f;d.attr(m).shadow(a.shadow);d[q]({x:A/
2,y:A/2,width:c-A-f%2,height:g-A-f%2,r:a.borderRadius});q="animate";e||(q="attr",this.plotBackground=e=b.rect().addClass("highcharts-plot-background").add());e[q](z);e.attr({fill:l||"none"}).shadow(a.plotShadow);p&&(x?x.animate(z):this.plotBGImage=b.image(p,F,n,w,r).add());G?G.animate({width:J.width,height:J.height}):this.clipRect=b.clipRect(J);q="animate";h||(q="attr",this.plotBorder=h=b.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());h.attr({stroke:a.plotBorderColor,"stroke-width":a.plotBorderWidth||
0,fill:"none"});h[q](h.crisp({x:F,y:n,width:w,height:r},-h.strokeWidth()));this.isDirtyBox=!1;k(this,"afterDrawChartBox")},propFromSeries:function(){var a=this,b=a.options.chart,c,g=a.options.series,d,e;m(["inverted","angular","polar"],function(h){c=G[b.type||b.defaultSeriesType];e=b[h]||c&&c.prototype[h];for(d=g&&g.length;!e&&d--;)(c=G[g[d].type])&&c.prototype[h]&&(e=!0);a[h]=e})},linkSeries:function(){var a=this,b=a.series;m(b,function(a){a.linkedSeries.length=0});m(b,function(b){var c=b.options.linkedTo;
I(c)&&(c=":previous"===c?a.series[b.index-1]:a.get(c))&&c.linkedParent!==b&&(c.linkedSeries.push(b),b.linkedParent=c,b.visible=F(b.options.visible,c.options.visible,b.visible))})},renderSeries:function(){m(this.series,function(a){a.translate();a.render()})},renderLabels:function(){var a=this,b=a.options.labels;b.items&&m(b.items,function(c){var g=d(b.style,c.style),e=A(g.left)+a.plotLeft,h=A(g.top)+a.plotTop+12;delete g.left;delete g.top;a.renderer.text(c.html,e,h).attr({zIndex:2}).css(g).add()})},
render:function(){var a=this.axes,b=this.renderer,c=this.options,g,d,e;this.setTitle();this.legend=new z(this,c.legend);this.getStacks&&this.getStacks();this.getMargins(!0);this.setChartSize();c=this.plotWidth;g=this.plotHeight=Math.max(this.plotHeight-21,0);m(a,function(a){a.setScale()});this.getAxisMargins();d=1.1<c/this.plotWidth;e=1.05<g/this.plotHeight;if(d||e)m(a,function(a){(a.horiz&&d||!a.horiz&&e)&&a.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries&&m(a,
function(a){a.visible&&a.render()});this.seriesGroup||(this.seriesGroup=b.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0},addCredits:function(a){var b=this;a=D(!0,this.options.credits,a);a.enabled&&!this.credits&&(this.credits=this.renderer.text(a.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){a.href&&(L.location.href=a.href)}).attr({align:a.position.align,
zIndex:8}).css(a.style).add().align(a.position),this.credits.update=function(a){b.credits=b.credits.destroy();b.addCredits(a)})},destroy:function(){var b=this,c=b.axes,g=b.series,d=b.container,e,h=d&&d.parentNode;k(b,"destroy");b.renderer.forExport?a.erase(u,b):u[b.index]=void 0;a.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");J(b);for(e=c.length;e--;)c[e]=c[e].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(e=g.length;e--;)g[e]=g[e].destroy();m("title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" "),
function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML="",J(d),h&&v(d));C(b,function(a,c){delete b[c]})},firstRender:function(){var a=this,b=a.options;if(!a.isReadyToRender||a.isReadyToRender()){a.getContainer();k(a,"init");a.resetMargins();a.setChartSize();a.propFromSeries();a.getAxes();m(b.series||[],function(b){a.initSeries(b)});a.linkSeries();k(a,"beforeRender");x&&(a.pointer=new x(a,b));a.render();if(!a.renderer.imgCount&&a.onload)a.onload();a.temporaryDisplay(!0)}},onload:function(){m([this.callback].concat(this.callbacks),
function(a){a&&void 0!==this.index&&a.apply(this,[this])},this);k(this,"load");k(this,"render");b(this.index)&&!1!==this.options.chart.reflow&&this.initReflow();this.onload=null}})})(K);(function(a){var B,H=a.each,E=a.extend,q=a.erase,f=a.fireEvent,l=a.format,t=a.isArray,n=a.isNumber,v=a.pick,u=a.removeEvent;a.Point=B=function(){};a.Point.prototype={init:function(a,b,m){this.series=a;this.color=a.color;this.applyOptions(b,m);a.options.colorByPoint?(b=a.options.colors||a.chart.options.colors,this.color=
this.color||b[a.colorCounter],b=b.length,m=a.colorCounter,a.colorCounter++,a.colorCounter===b&&(a.colorCounter=0)):m=a.colorIndex;this.colorIndex=v(this.colorIndex,m);a.chart.pointCount++;f(this,"afterInit");return this},applyOptions:function(a,b){var c=this.series,d=c.options.pointValKey||c.pointValKey;a=B.prototype.optionsToObject.call(this,a);E(this,a);this.options=this.options?E(this.options,a):a;a.group&&delete this.group;d&&(this.y=this[d]);this.isNull=v(this.isValid&&!this.isValid(),null===
this.x||!n(this.y,!0));this.selected&&(this.state="select");"name"in this&&void 0===b&&c.xAxis&&c.xAxis.hasNames&&(this.x=c.xAxis.nameToX(this));void 0===this.x&&c&&(this.x=void 0===b?c.autoIncrement(this):b);return this},optionsToObject:function(a){var b={},c=this.series,d=c.options.keys,h=d||c.pointArrayMap||["y"],k=h.length,e=0,f=0;if(n(a)||null===a)b[h[0]]=a;else if(t(a))for(!d&&a.length>k&&(c=typeof a[0],"string"===c?b.name=a[0]:"number"===c&&(b.x=a[0]),e++);f<k;)d&&void 0===a[e]||(b[h[f]]=a[e]),
e++,f++;else"object"===typeof a&&(b=a,a.dataLabels&&(c._hasPointLabels=!0),a.marker&&(c._hasPointMarkers=!0));return b},getClassName:function(){return"highcharts-point"+(this.selected?" highcharts-point-select":"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+(void 0!==this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",
""):"")},getZone:function(){var a=this.series,b=a.zones,a=a.zoneAxis||"y",f=0,d;for(d=b[f];this[a]>=d.value;)d=b[++f];d&&d.color&&!this.options.color&&(this.color=d.color);return d},destroy:function(){var a=this.series.chart,b=a.hoverPoints,f;a.pointCount--;b&&(this.setState(),q(b,this),b.length||(a.hoverPoints=null));if(this===a.hoverPoint)this.onMouseOut();if(this.graphic||this.dataLabel)u(this),this.destroyElements();this.legendItem&&a.legend.destroyItem(this);for(f in this)this[f]=null},destroyElements:function(){for(var a=
["graphic","dataLabel","dataLabelUpper","connector","shadowGroup"],b,f=6;f--;)b=a[f],this[b]&&(this[b]=this[b].destroy())},getLabelConfig:function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}},tooltipFormatter:function(a){var b=this.series,c=b.tooltipOptions,d=v(c.valueDecimals,""),h=c.valuePrefix||"",k=c.valueSuffix||"";H(b.pointArrayMap||["y"],
function(b){b="{point."+b;if(h||k)a=a.replace(b+"}",h+b+"}"+k);a=a.replace(b+"}",b+":,."+d+"f}")});return l(a,{point:this,series:this.series},b.chart.time)},firePointEvent:function(a,b,m){var c=this,h=this.series.options;(h.point.events[a]||c.options&&c.options.events&&c.options.events[a])&&this.importEvents();"click"===a&&h.allowPointSelect&&(m=function(a){c.select&&c.select(null,a.ctrlKey||a.metaKey||a.shiftKey)});f(this,a,b,m)},visible:!0}})(K);(function(a){var B=a.addEvent,H=a.animObject,E=a.arrayMax,
q=a.arrayMin,f=a.correctFloat,l=a.defaultOptions,t=a.defaultPlotOptions,n=a.defined,v=a.each,u=a.erase,c=a.extend,b=a.fireEvent,m=a.grep,d=a.isArray,h=a.isNumber,k=a.isString,e=a.merge,p=a.objectEach,r=a.pick,I=a.removeEvent,z=a.splat,M=a.SVGElement,D=a.syncTimeout,C=a.win;a.Series=a.seriesType("line",null,{lineWidth:2,allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{lineWidth:0,lineColor:"#ffffff",enabledThreshold:2,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},
enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{align:"center",formatter:function(){return null===this.y?"":a.numberFormat(this.y,-1)},style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0,padding:5},cropThreshold:300,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},
select:{marker:{}}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"},{isCartesian:!0,pointClass:a.Point,sorted:!0,requireSorting:!0,directTouch:!1,axisTypes:["xAxis","yAxis"],colorCounter:0,parallelArrays:["x","y"],coll:"series",init:function(a,b){var d=this,e,h=a.series,g;d.chart=a;d.options=b=d.setOptions(b);d.linkedSeries=[];d.bindAxes();c(d,{name:b.name,state:"",visible:!1!==b.visible,selected:!0===b.selected});e=b.events;p(e,function(a,b){B(d,b,a)});if(e&&e.click||b.point&&b.point.events&&
b.point.events.click||b.allowPointSelect)a.runTrackerClick=!0;d.getColor();d.getSymbol();v(d.parallelArrays,function(a){d[a+"Data"]=[]});d.setData(b.data,!1);d.isCartesian&&(a.hasCartesianSeries=!0);h.length&&(g=h[h.length-1]);d._i=r(g&&g._i,-1)+1;a.orderSeries(this.insert(h))},insert:function(a){var b=this.options.index,c;if(h(b)){for(c=a.length;c--;)if(b>=r(a[c].options.index,a[c]._i)){a.splice(c+1,0,this);break}-1===c&&a.unshift(this);c+=1}else a.push(this);return r(c,a.length-1)},bindAxes:function(){var b=
this,c=b.options,d=b.chart,e;v(b.axisTypes||[],function(h){v(d[h],function(a){e=a.options;if(c[h]===e.index||void 0!==c[h]&&c[h]===e.id||void 0===c[h]&&0===e.index)b.insert(a.series),b[h]=a,a.isDirty=!0});b[h]||b.optionalAxis===h||a.error(18,!0)})},updateParallelArrays:function(a,b){var c=a.series,d=arguments,e=h(b)?function(g){var d="y"===g&&c.toYData?c.toYData(a):a[g];c[g+"Data"][b]=d}:function(a){Array.prototype[b].apply(c[a+"Data"],Array.prototype.slice.call(d,2))};v(c.parallelArrays,e)},autoIncrement:function(){var a=
this.options,b=this.xIncrement,c,d=a.pointIntervalUnit,e=this.chart.time,b=r(b,a.pointStart,0);this.pointInterval=c=r(this.pointInterval,a.pointInterval,1);d&&(a=new e.Date(b),"day"===d?e.set("Date",a,e.get("Date",a)+c):"month"===d?e.set("Month",a,e.get("Month",a)+c):"year"===d&&e.set("FullYear",a,e.get("FullYear",a)+c),c=a.getTime()-b);this.xIncrement=b+c;return b},setOptions:function(a){var b=this.chart,c=b.options,d=c.plotOptions,h=(b.userOptions||{}).plotOptions||{},g=d[this.type];this.userOptions=
a;b=e(g,d.series,a);this.tooltipOptions=e(l.tooltip,l.plotOptions.series&&l.plotOptions.series.tooltip,l.plotOptions[this.type].tooltip,c.tooltip.userOptions,d.series&&d.series.tooltip,d[this.type].tooltip,a.tooltip);this.stickyTracking=r(a.stickyTracking,h[this.type]&&h[this.type].stickyTracking,h.series&&h.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:b.stickyTracking);null===g.marker&&delete b.marker;this.zoneAxis=b.zoneAxis;a=this.zones=(b.zones||[]).slice();!b.negativeColor&&
!b.negativeFillColor||b.zones||a.push({value:b[this.zoneAxis+"Threshold"]||b.threshold||0,className:"highcharts-negative",color:b.negativeColor,fillColor:b.negativeFillColor});a.length&&n(a[a.length-1].value)&&a.push({color:this.color,fillColor:this.fillColor});return b},getName:function(){return this.name||"Series "+(this.index+1)},getCyclic:function(a,b,c){var d,e=this.chart,g=this.userOptions,h=a+"Index",k=a+"Counter",f=c?c.length:r(e.options.chart[a+"Count"],e[a+"Count"]);b||(d=r(g[h],g["_"+h]),
n(d)||(e.series.length||(e[k]=0),g["_"+h]=d=e[k]%f,e[k]+=1),c&&(b=c[d]));void 0!==d&&(this[h]=d);this[a]=b},getColor:function(){this.options.colorByPoint?this.options.color=null:this.getCyclic("color",this.options.color||t[this.type].color,this.chart.options.colors)},getSymbol:function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)},drawLegendSymbol:a.LegendSymbolMixin.drawLineMarker,setData:function(b,c,e,f){var m=this,g=m.points,l=g&&g.length||0,x,p=m.options,F=
m.chart,n=null,A=m.xAxis,z=p.turboThreshold,q=this.xData,D=this.yData,t=(x=m.pointArrayMap)&&x.length;b=b||[];x=b.length;c=r(c,!0);if(!1!==f&&x&&l===x&&!m.cropped&&!m.hasGroupedData&&m.visible)v(b,function(a,b){g[b].update&&a!==p.data[b]&&g[b].update(a,!1,null,!1)});else{m.xIncrement=null;m.colorCounter=0;v(this.parallelArrays,function(a){m[a+"Data"].length=0});if(z&&x>z){for(e=0;null===n&&e<x;)n=b[e],e++;if(h(n))for(e=0;e<x;e++)q[e]=this.autoIncrement(),D[e]=b[e];else if(d(n))if(t)for(e=0;e<x;e++)n=
b[e],q[e]=n[0],D[e]=n.slice(1,t+1);else for(e=0;e<x;e++)n=b[e],q[e]=n[0],D[e]=n[1];else a.error(12)}else for(e=0;e<x;e++)void 0!==b[e]&&(n={series:m},m.pointClass.prototype.applyOptions.apply(n,[b[e]]),m.updateParallelArrays(n,e));D&&k(D[0])&&a.error(14,!0);m.data=[];m.options.data=m.userOptions.data=b;for(e=l;e--;)g[e]&&g[e].destroy&&g[e].destroy();A&&(A.minRange=A.userMinRange);m.isDirty=F.isDirtyBox=!0;m.isDirtyData=!!g;e=!1}"point"===p.legendType&&(this.processData(),this.generatePoints());c&&
F.redraw(e)},processData:function(b){var c=this.xData,d=this.yData,e=c.length,h;h=0;var g,k,f=this.xAxis,m,l=this.options;m=l.cropThreshold;var x=this.getExtremesFromAll||l.getExtremesFromAll,p=this.isCartesian,l=f&&f.val2lin,n=f&&f.isLog,r=this.requireSorting,z,q;if(p&&!this.isDirty&&!f.isDirty&&!this.yAxis.isDirty&&!b)return!1;f&&(b=f.getExtremes(),z=b.min,q=b.max);if(p&&this.sorted&&!x&&(!m||e>m||this.forceCrop))if(c[e-1]<z||c[0]>q)c=[],d=[];else if(c[0]<z||c[e-1]>q)h=this.cropData(this.xData,
this.yData,z,q),c=h.xData,d=h.yData,h=h.start,g=!0;for(m=c.length||1;--m;)e=n?l(c[m])-l(c[m-1]):c[m]-c[m-1],0<e&&(void 0===k||e<k)?k=e:0>e&&r&&(a.error(15),r=!1);this.cropped=g;this.cropStart=h;this.processedXData=c;this.processedYData=d;this.closestPointRange=k},cropData:function(a,b,c,d){var e=a.length,g=0,h=e,k=r(this.cropShoulder,1),f;for(f=0;f<e;f++)if(a[f]>=c){g=Math.max(0,f-k);break}for(c=f;c<e;c++)if(a[c]>d){h=c+k;break}return{xData:a.slice(g,h),yData:b.slice(g,h),start:g,end:h}},generatePoints:function(){var a=
this.options,b=a.data,c=this.data,d,e=this.processedXData,g=this.processedYData,h=this.pointClass,k=e.length,f=this.cropStart||0,m,l=this.hasGroupedData,a=a.keys,p,n=[],r;c||l||(c=[],c.length=b.length,c=this.data=c);a&&l&&(this.options.keys=!1);for(r=0;r<k;r++)m=f+r,l?(p=(new h).init(this,[e[r]].concat(z(g[r]))),p.dataGroup=this.groupMap[r]):(p=c[m])||void 0===b[m]||(c[m]=p=(new h).init(this,b[m],e[r])),p&&(p.index=m,n[r]=p);this.options.keys=a;if(c&&(k!==(d=c.length)||l))for(r=0;r<d;r++)r!==f||l||
(r+=k),c[r]&&(c[r].destroyElements(),c[r].plotX=void 0);this.data=c;this.points=n},getExtremes:function(a){var b=this.yAxis,c=this.processedXData,e,k=[],g=0;e=this.xAxis.getExtremes();var f=e.min,m=e.max,l,p,x,n;a=a||this.stackedYData||this.processedYData||[];e=a.length;for(n=0;n<e;n++)if(p=c[n],x=a[n],l=(h(x,!0)||d(x))&&(!b.positiveValuesOnly||x.length||0<x),p=this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||(c[n+1]||p)>=f&&(c[n-1]||p)<=m,l&&p)if(l=x.length)for(;l--;)"number"===
typeof x[l]&&(k[g++]=x[l]);else k[g++]=x;this.dataMin=q(k);this.dataMax=E(k)},translate:function(){this.processedXData||this.processData();this.generatePoints();var a=this.options,c=a.stacking,e=this.xAxis,d=e.categories,k=this.yAxis,g=this.points,m=g.length,l=!!this.modifyValue,p=a.pointPlacement,z="between"===p||h(p),q=a.threshold,D=a.startFromThreshold?q:0,t,C,v,u,M=Number.MAX_VALUE;"between"===p&&(p=.5);h(p)&&(p*=r(a.pointRange||e.pointRange));for(a=0;a<m;a++){var I=g[a],B=I.x,E=I.y;C=I.low;var H=
c&&k.stacks[(this.negStacks&&E<(D?0:q)?"-":"")+this.stackKey],K;k.positiveValuesOnly&&null!==E&&0>=E&&(I.isNull=!0);I.plotX=t=f(Math.min(Math.max(-1E5,e.translate(B,0,0,0,1,p,"flags"===this.type)),1E5));c&&this.visible&&!I.isNull&&H&&H[B]&&(u=this.getStackIndicator(u,B,this.index),K=H[B],E=K.points[u.key],C=E[0],E=E[1],C===D&&u.key===H[B].base&&(C=r(q,k.min)),k.positiveValuesOnly&&0>=C&&(C=null),I.total=I.stackTotal=K.total,I.percentage=K.total&&I.y/K.total*100,I.stackY=E,K.setOffset(this.pointXOffset||
0,this.barW||0));I.yBottom=n(C)?Math.min(Math.max(-1E5,k.translate(C,0,1,0,1)),1E5):null;l&&(E=this.modifyValue(E,I));I.plotY=C="number"===typeof E&&Infinity!==E?Math.min(Math.max(-1E5,k.translate(E,0,1,0,1)),1E5):void 0;I.isInside=void 0!==C&&0<=C&&C<=k.len&&0<=t&&t<=e.len;I.clientX=z?f(e.translate(B,0,0,0,1,p)):t;I.negative=I.y<(q||0);I.category=d&&void 0!==d[I.x]?d[I.x]:I.x;I.isNull||(void 0!==v&&(M=Math.min(M,Math.abs(t-v))),v=t);I.zone=this.zones.length&&I.getZone()}this.closestPointRangePx=
M;b(this,"afterTranslate")},getValidPoints:function(a,b){var c=this.chart;return m(a||this.points||[],function(a){return b&&!c.isInsidePlot(a.plotX,a.plotY,c.inverted)?!1:!a.isNull})},setClip:function(a){var b=this.chart,c=this.options,e=b.renderer,d=b.inverted,g=this.clipBox,h=g||b.clipBox,k=this.sharedClipKey||["_sharedClip",a&&a.duration,a&&a.easing,h.height,c.xAxis,c.yAxis].join(),f=b[k],m=b[k+"m"];f||(a&&(h.width=0,d&&(h.x=b.plotSizeX),b[k+"m"]=m=e.clipRect(d?b.plotSizeX+99:-99,d?-b.plotLeft:
-b.plotTop,99,d?b.chartWidth:b.chartHeight)),b[k]=f=e.clipRect(h),f.count={length:0});a&&!f.count[this.index]&&(f.count[this.index]=!0,f.count.length+=1);!1!==c.clip&&(this.group.clip(a||g?f:b.clipRect),this.markerGroup.clip(m),this.sharedClipKey=k);a||(f.count[this.index]&&(delete f.count[this.index],--f.count.length),0===f.count.length&&k&&b[k]&&(g||(b[k]=b[k].destroy()),b[k+"m"]&&(b[k+"m"]=b[k+"m"].destroy())))},animate:function(a){var b=this.chart,c=H(this.options.animation),e;a?this.setClip(c):
(e=this.sharedClipKey,(a=b[e])&&a.animate({width:b.plotSizeX,x:0},c),b[e+"m"]&&b[e+"m"].animate({width:b.plotSizeX+99,x:0},c),this.animate=null)},afterAnimate:function(){this.setClip();b(this,"afterAnimate");this.finishedAnimating=!0},drawPoints:function(){var a=this.points,b=this.chart,c,e,d,g,h=this.options.marker,k,f,m,l=this[this.specialGroup]||this.markerGroup,p,n=r(h.enabled,this.xAxis.isRadial?!0:null,this.closestPointRangePx>=h.enabledThreshold*h.radius);if(!1!==h.enabled||this._hasPointMarkers)for(c=
0;c<a.length;c++)e=a[c],g=e.graphic,k=e.marker||{},f=!!e.marker,d=n&&void 0===k.enabled||k.enabled,m=e.isInside,d&&!e.isNull?(d=r(k.symbol,this.symbol),p=this.markerAttribs(e,e.selected&&"select"),g?g[m?"show":"hide"](!0).animate(p):m&&(0<p.width||e.hasImage)&&(e.graphic=g=b.renderer.symbol(d,p.x,p.y,p.width,p.height,f?k:h).add(l)),g&&g.attr(this.pointAttribs(e,e.selected&&"select")),g&&g.addClass(e.getClassName(),!0)):g&&(e.graphic=g.destroy())},markerAttribs:function(a,b){var c=this.options.marker,
e=a.marker||{},d=e.symbol||c.symbol,g=r(e.radius,c.radius);b&&(c=c.states[b],b=e.states&&e.states[b],g=r(b&&b.radius,c&&c.radius,g+(c&&c.radiusPlus||0)));a.hasImage=d&&0===d.indexOf("url");a.hasImage&&(g=0);a={x:Math.floor(a.plotX)-g,y:a.plotY-g};g&&(a.width=a.height=2*g);return a},pointAttribs:function(a,b){var c=this.options.marker,e=a&&a.options,d=e&&e.marker||{},g=this.color,h=e&&e.color,k=a&&a.color,e=r(d.lineWidth,c.lineWidth);a=a&&a.zone&&a.zone.color;g=h||a||k||g;a=d.fillColor||c.fillColor||
g;g=d.lineColor||c.lineColor||g;b&&(c=c.states[b],b=d.states&&d.states[b]||{},e=r(b.lineWidth,c.lineWidth,e+r(b.lineWidthPlus,c.lineWidthPlus,0)),a=b.fillColor||c.fillColor||a,g=b.lineColor||c.lineColor||g);return{stroke:g,"stroke-width":e,fill:a}},destroy:function(){var a=this,c=a.chart,e=/AppleWebKit\/533/.test(C.navigator.userAgent),d,h,g=a.data||[],k,f;b(a,"destroy");I(a);v(a.axisTypes||[],function(b){(f=a[b])&&f.series&&(u(f.series,a),f.isDirty=f.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);
for(h=g.length;h--;)(k=g[h])&&k.destroy&&k.destroy();a.points=null;clearTimeout(a.animationTimeout);p(a,function(a,b){a instanceof M&&!a.survive&&(d=e&&"group"===b?"hide":"destroy",a[d]())});c.hoverSeries===a&&(c.hoverSeries=null);u(c.series,a);c.orderSeries();p(a,function(b,c){delete a[c]})},getGraphPath:function(a,b,c){var e=this,d=e.options,g=d.step,h,k=[],f=[],m;a=a||e.points;(h=a.reversed)&&a.reverse();(g={right:1,center:2}[g]||g&&3)&&h&&(g=4-g);!d.connectNulls||b||c||(a=this.getValidPoints(a));
v(a,function(h,l){var p=h.plotX,x=h.plotY,r=a[l-1];(h.leftCliff||r&&r.rightCliff)&&!c&&(m=!0);h.isNull&&!n(b)&&0<l?m=!d.connectNulls:h.isNull&&!b?m=!0:(0===l||m?l=["M",h.plotX,h.plotY]:e.getPointSpline?l=e.getPointSpline(a,h,l):g?(l=1===g?["L",r.plotX,x]:2===g?["L",(r.plotX+p)/2,r.plotY,"L",(r.plotX+p)/2,x]:["L",p,r.plotY],l.push("L",p,x)):l=["L",p,x],f.push(h.x),g&&f.push(h.x),k.push.apply(k,l),m=!1)});k.xMap=f;return e.graphPath=k},drawGraph:function(){var a=this,b=this.options,c=(this.gappedPath||
this.getGraphPath).call(this),e=[["graph","highcharts-graph",b.lineColor||this.color,b.dashStyle]];v(this.zones,function(c,d){e.push(["zone-graph-"+d,"highcharts-graph highcharts-zone-graph-"+d+" "+(c.className||""),c.color||a.color,c.dashStyle||b.dashStyle])});v(e,function(e,d){var g=e[0],h=a[g];h?(h.endX=a.preventGraphAnimation?null:c.xMap,h.animate({d:c})):c.length&&(a[g]=a.chart.renderer.path(c).addClass(e[1]).attr({zIndex:1}).add(a.group),h={stroke:e[2],"stroke-width":b.lineWidth,fill:a.fillGraph&&
a.color||"none"},e[3]?h.dashstyle=e[3]:"square"!==b.linecap&&(h["stroke-linecap"]=h["stroke-linejoin"]="round"),h=a[g].attr(h).shadow(2>d&&b.shadow));h&&(h.startX=c.xMap,h.isArea=c.isArea)})},applyZones:function(){var a=this,b=this.chart,c=b.renderer,e=this.zones,d,g,h=this.clips||[],k,f=this.graph,m=this.area,l=Math.max(b.chartWidth,b.chartHeight),p=this[(this.zoneAxis||"y")+"Axis"],n,z,q=b.inverted,D,t,C,u,M=!1;e.length&&(f||m)&&p&&void 0!==p.min&&(z=p.reversed,D=p.horiz,f&&f.hide(),m&&m.hide(),
n=p.getExtremes(),v(e,function(e,x){d=z?D?b.plotWidth:0:D?0:p.toPixels(n.min);d=Math.min(Math.max(r(g,d),0),l);g=Math.min(Math.max(Math.round(p.toPixels(r(e.value,n.max),!0)),0),l);M&&(d=g=p.toPixels(n.max));t=Math.abs(d-g);C=Math.min(d,g);u=Math.max(d,g);p.isXAxis?(k={x:q?u:C,y:0,width:t,height:l},D||(k.x=b.plotHeight-k.x)):(k={x:0,y:q?u:C,width:l,height:t},D&&(k.y=b.plotWidth-k.y));q&&c.isVML&&(k=p.isXAxis?{x:0,y:z?C:u,height:k.width,width:b.chartWidth}:{x:k.y-b.plotLeft-b.spacingBox.x,y:0,width:k.height,
height:b.chartHeight});h[x]?h[x].animate(k):(h[x]=c.clipRect(k),f&&a["zone-graph-"+x].clip(h[x]),m&&a["zone-area-"+x].clip(h[x]));M=e.value>n.max}),this.clips=h)},invertGroups:function(a){function b(){v(["group","markerGroup"],function(b){c[b]&&(e.renderer.isVML&&c[b].attr({width:c.yAxis.len,height:c.xAxis.len}),c[b].width=c.yAxis.len,c[b].height=c.xAxis.len,c[b].invert(a))})}var c=this,e=c.chart,d;c.xAxis&&(d=B(e,"resize",b),B(c,"destroy",d),b(a),c.invertGroups=b)},plotGroup:function(a,b,c,e,d){var g=
this[a],h=!g;h&&(this[a]=g=this.chart.renderer.g().attr({zIndex:e||.1}).add(d));g.addClass("highcharts-"+b+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(n(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(g.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);g.attr({visibility:c})[h?"attr":"animate"](this.getPlotBox());return g},getPlotBox:function(){var a=this.chart,b=this.xAxis,c=this.yAxis;a.inverted&&(b=c,c=this.xAxis);
return{translateX:b?b.left:a.plotLeft,translateY:c?c.top:a.plotTop,scaleX:1,scaleY:1}},render:function(){var a=this,c=a.chart,e,d=a.options,h=!!a.animate&&c.renderer.isSVG&&H(d.animation).duration,g=a.visible?"inherit":"hidden",k=d.zIndex,f=a.hasRendered,m=c.seriesGroup,l=c.inverted;e=a.plotGroup("group","series",g,k,m);a.markerGroup=a.plotGroup("markerGroup","markers",g,k,m);h&&a.animate(!0);e.inverted=a.isCartesian?l:!1;a.drawGraph&&(a.drawGraph(),a.applyZones());a.drawDataLabels&&a.drawDataLabels();
a.visible&&a.drawPoints();a.drawTracker&&!1!==a.options.enableMouseTracking&&a.drawTracker();a.invertGroups(l);!1===d.clip||a.sharedClipKey||f||e.clip(c.clipRect);h&&a.animate();f||(a.animationTimeout=D(function(){a.afterAnimate()},h));a.isDirty=!1;a.hasRendered=!0;b(a,"afterRender")},redraw:function(){var a=this.chart,b=this.isDirty||this.isDirtyData,c=this.group,e=this.xAxis,d=this.yAxis;c&&(a.inverted&&c.attr({width:a.plotWidth,height:a.plotHeight}),c.animate({translateX:r(e&&e.left,a.plotLeft),
translateY:r(d&&d.top,a.plotTop)}));this.translate();this.render();b&&delete this.kdTree},kdAxisArray:["clientX","plotY"],searchPoint:function(a,b){var c=this.xAxis,e=this.yAxis,d=this.chart.inverted;return this.searchKDTree({clientX:d?c.len-a.chartY+c.pos:a.chartX-c.pos,plotY:d?e.len-a.chartX+e.pos:a.chartY-e.pos},b)},buildKDTree:function(){function a(c,e,d){var g,h;if(h=c&&c.length)return g=b.kdAxisArray[e%d],c.sort(function(a,b){return a[g]-b[g]}),h=Math.floor(h/2),{point:c[h],left:a(c.slice(0,
h),e+1,d),right:a(c.slice(h+1),e+1,d)}}this.buildingKdTree=!0;var b=this,c=-1<b.options.findNearestPointBy.indexOf("y")?2:1;delete b.kdTree;D(function(){b.kdTree=a(b.getValidPoints(null,!b.directTouch),c,c);b.buildingKdTree=!1},b.options.kdNow?0:1)},searchKDTree:function(a,b){function c(a,b,k,f){var m=b.point,l=e.kdAxisArray[k%f],p,r,z=m;r=n(a[d])&&n(m[d])?Math.pow(a[d]-m[d],2):null;p=n(a[g])&&n(m[g])?Math.pow(a[g]-m[g],2):null;p=(r||0)+(p||0);m.dist=n(p)?Math.sqrt(p):Number.MAX_VALUE;m.distX=n(r)?
Math.sqrt(r):Number.MAX_VALUE;l=a[l]-m[l];p=0>l?"left":"right";r=0>l?"right":"left";b[p]&&(p=c(a,b[p],k+1,f),z=p[h]<z[h]?p:m);b[r]&&Math.sqrt(l*l)<z[h]&&(a=c(a,b[r],k+1,f),z=a[h]<z[h]?a:z);return z}var e=this,d=this.kdAxisArray[0],g=this.kdAxisArray[1],h=b?"distX":"dist";b=-1<e.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree();if(this.kdTree)return c(a,this.kdTree,b,b)}})})(K);(function(a){var B=a.Axis,H=a.Chart,E=a.correctFloat,q=a.defined,f=a.destroyObjectProperties,
l=a.each,t=a.format,n=a.objectEach,v=a.pick,u=a.Series;a.StackItem=function(a,b,f,d,h){var c=a.chart.inverted;this.axis=a;this.isNegative=f;this.options=b;this.x=d;this.total=null;this.points={};this.stack=h;this.rightCliff=this.leftCliff=0;this.alignOptions={align:b.align||(c?f?"left":"right":"center"),verticalAlign:b.verticalAlign||(c?"middle":f?"bottom":"top"),y:v(b.y,c?4:f?14:-6),x:v(b.x,c?f?-6:6:0)};this.textAlign=b.textAlign||(c?f?"right":"left":"center")};a.StackItem.prototype={destroy:function(){f(this,
this.axis)},render:function(a){var b=this.axis.chart,c=this.options,d=c.format,d=d?t(d,this,b.time):c.formatter.call(this);this.label?this.label.attr({text:d,visibility:"hidden"}):this.label=b.renderer.text(d,null,null,c.useHTML).css(c.style).attr({align:this.textAlign,rotation:c.rotation,visibility:"hidden"}).add(a)},setOffset:function(a,b){var c=this.axis,d=c.chart,h=c.translate(c.usePercentage?100:this.total,0,0,0,1),c=c.translate(0),c=Math.abs(h-c);a=d.xAxis[0].translate(this.x)+a;h=this.getStackBox(d,
this,a,h,b,c);if(b=this.label)b.align(this.alignOptions,null,h),h=b.alignAttr,b[!1===this.options.crop||d.isInsidePlot(h.x,h.y)?"show":"hide"](!0)},getStackBox:function(a,b,f,d,h,k){var c=b.axis.reversed,m=a.inverted;a=a.plotHeight;b=b.isNegative&&!c||!b.isNegative&&c;return{x:m?b?d:d-k:f,y:m?a-f-h:b?a-d-k:a-d,width:m?k:h,height:m?h:k}}};H.prototype.getStacks=function(){var a=this;l(a.yAxis,function(a){a.stacks&&a.hasVisibleSeries&&(a.oldStacks=a.stacks)});l(a.series,function(b){!b.options.stacking||
!0!==b.visible&&!1!==a.options.chart.ignoreHiddenSeries||(b.stackKey=b.type+v(b.options.stack,""))})};B.prototype.buildStacks=function(){var a=this.series,b=v(this.options.reversedStacks,!0),f=a.length,d;if(!this.isXAxis){this.usePercentage=!1;for(d=f;d--;)a[b?d:f-d-1].setStackedPoints();for(d=0;d<f;d++)a[d].modifyStacks()}};B.prototype.renderStackTotals=function(){var a=this.chart,b=a.renderer,f=this.stacks,d=this.stackTotalGroup;d||(this.stackTotalGroup=d=b.g("stack-labels").attr({visibility:"visible",
zIndex:6}).add());d.translate(a.plotLeft,a.plotTop);n(f,function(a){n(a,function(a){a.render(d)})})};B.prototype.resetStacks=function(){var a=this,b=a.stacks;a.isXAxis||n(b,function(b){n(b,function(c,h){c.touched<a.stacksTouched?(c.destroy(),delete b[h]):(c.total=null,c.cumulative=null)})})};B.prototype.cleanStacks=function(){var a;this.isXAxis||(this.oldStacks&&(a=this.stacks=this.oldStacks),n(a,function(a){n(a,function(a){a.cumulative=a.total})}))};u.prototype.setStackedPoints=function(){if(this.options.stacking&&
(!0===this.visible||!1===this.chart.options.chart.ignoreHiddenSeries)){var c=this.processedXData,b=this.processedYData,f=[],d=b.length,h=this.options,k=h.threshold,e=v(h.startFromThreshold&&k,0),l=h.stack,h=h.stacking,n=this.stackKey,t="-"+n,z=this.negStacks,u=this.yAxis,D=u.stacks,C=u.oldStacks,x,F,A,J,G,g,w;u.stacksTouched+=1;for(G=0;G<d;G++)g=c[G],w=b[G],x=this.getStackIndicator(x,g,this.index),J=x.key,A=(F=z&&w<(e?0:k))?t:n,D[A]||(D[A]={}),D[A][g]||(C[A]&&C[A][g]?(D[A][g]=C[A][g],D[A][g].total=
null):D[A][g]=new a.StackItem(u,u.options.stackLabels,F,g,l)),A=D[A][g],null!==w?(A.points[J]=A.points[this.index]=[v(A.cumulative,e)],q(A.cumulative)||(A.base=J),A.touched=u.stacksTouched,0<x.index&&!1===this.singleStacks&&(A.points[J][0]=A.points[this.index+","+g+",0"][0])):A.points[J]=A.points[this.index]=null,"percent"===h?(F=F?n:t,z&&D[F]&&D[F][g]?(F=D[F][g],A.total=F.total=Math.max(F.total,A.total)+Math.abs(w)||0):A.total=E(A.total+(Math.abs(w)||0))):A.total=E(A.total+(w||0)),A.cumulative=v(A.cumulative,
e)+(w||0),null!==w&&(A.points[J].push(A.cumulative),f[G]=A.cumulative);"percent"===h&&(u.usePercentage=!0);this.stackedYData=f;u.oldStacks={}}};u.prototype.modifyStacks=function(){var a=this,b=a.stackKey,f=a.yAxis.stacks,d=a.processedXData,h,k=a.options.stacking;a[k+"Stacker"]&&l([b,"-"+b],function(b){for(var c=d.length,e,l;c--;)if(e=d[c],h=a.getStackIndicator(h,e,a.index,b),l=(e=f[b]&&f[b][e])&&e.points[h.key])a[k+"Stacker"](l,e,c)})};u.prototype.percentStacker=function(a,b,f){b=b.total?100/b.total:
0;a[0]=E(a[0]*b);a[1]=E(a[1]*b);this.stackedYData[f]=a[1]};u.prototype.getStackIndicator=function(a,b,f,d){!q(a)||a.x!==b||d&&a.key!==d?a={x:b,index:0,key:d}:a.index++;a.key=[f,b,a.index].join();return a}})(K);(function(a){var B=a.addEvent,H=a.animate,E=a.Axis,q=a.createElement,f=a.css,l=a.defined,t=a.each,n=a.erase,v=a.extend,u=a.fireEvent,c=a.inArray,b=a.isNumber,m=a.isObject,d=a.isArray,h=a.merge,k=a.objectEach,e=a.pick,p=a.Point,r=a.Series,I=a.seriesTypes,z=a.setAnimation,M=a.splat;v(a.Chart.prototype,
{addSeries:function(a,b,c){var d,h=this;a&&(b=e(b,!0),u(h,"addSeries",{options:a},function(){d=h.initSeries(a);h.isDirtyLegend=!0;h.linkSeries();b&&h.redraw(c)}));return d},addAxis:function(a,b,c,d){var k=b?"xAxis":"yAxis",f=this.options;a=h(a,{index:this[k].length,isX:b});b=new E(this,a);f[k]=M(f[k]||{});f[k].push(a);e(c,!0)&&this.redraw(d);return b},showLoading:function(a){var b=this,c=b.options,e=b.loadingDiv,d=c.loading,h=function(){e&&f(e,{left:b.plotLeft+"px",top:b.plotTop+"px",width:b.plotWidth+
"px",height:b.plotHeight+"px"})};e||(b.loadingDiv=e=q("div",{className:"highcharts-loading highcharts-loading-hidden"},null,b.container),b.loadingSpan=q("span",{className:"highcharts-loading-inner"},null,e),B(b,"redraw",h));e.className="highcharts-loading";b.loadingSpan.innerHTML=a||c.lang.loading;f(e,v(d.style,{zIndex:10}));f(b.loadingSpan,d.labelStyle);b.loadingShown||(f(e,{opacity:0,display:""}),H(e,{opacity:d.style.opacity||.5},{duration:d.showDuration||0}));b.loadingShown=!0;h()},hideLoading:function(){var a=
this.options,b=this.loadingDiv;b&&(b.className="highcharts-loading highcharts-loading-hidden",H(b,{opacity:0},{duration:a.loading.hideDuration||100,complete:function(){f(b,{display:"none"})}}));this.loadingShown=!1},propsRequireDirtyBox:"backgroundColor borderColor borderWidth margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" "),update:function(a,d,f){var p=this,m={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle"},n=a.chart,r,g,z=[];if(n){h(!0,p.options.chart,n);"className"in n&&p.setClassName(n.className);if("inverted"in n||"polar"in n)p.propFromSeries(),r=!0;"alignTicks"in n&&(r=!0);k(n,function(a,b){-1!==c("chart."+b,p.propsRequireUpdateSeries)&&(g=!0);-1!==c(b,p.propsRequireDirtyBox)&&
(p.isDirtyBox=!0)});"style"in n&&p.renderer.setStyle(n.style)}a.colors&&(this.options.colors=a.colors);a.plotOptions&&h(!0,this.options.plotOptions,a.plotOptions);k(a,function(a,b){if(p[b]&&"function"===typeof p[b].update)p[b].update(a,!1);else if("function"===typeof p[m[b]])p[m[b]](a);"chart"!==b&&-1!==c(b,p.propsRequireUpdateSeries)&&(g=!0)});t("xAxis yAxis zAxis series colorAxis pane".split(" "),function(b){a[b]&&(t(M(a[b]),function(a,c){(c=l(a.id)&&p.get(a.id)||p[b][c])&&c.coll===b&&(c.update(a,
!1),f&&(c.touched=!0));if(!c&&f)if("series"===b)p.addSeries(a,!1).touched=!0;else if("xAxis"===b||"yAxis"===b)p.addAxis(a,"xAxis"===b,!1).touched=!0}),f&&t(p[b],function(a){a.touched?delete a.touched:z.push(a)}))});t(z,function(a){a.remove(!1)});r&&t(p.axes,function(a){a.update({},!1)});g&&t(p.series,function(a){a.update({},!1)});a.loading&&h(!0,p.options.loading,a.loading);r=n&&n.width;n=n&&n.height;b(r)&&r!==p.chartWidth||b(n)&&n!==p.chartHeight?p.setSize(r,n):e(d,!0)&&p.redraw()},setSubtitle:function(a){this.setTitle(void 0,
a)}});v(p.prototype,{update:function(a,b,c,d){function h(){k.applyOptions(a);null===k.y&&g&&(k.graphic=g.destroy());m(a,!0)&&(g&&g.element&&a&&a.marker&&void 0!==a.marker.symbol&&(k.graphic=g.destroy()),a&&a.dataLabels&&k.dataLabel&&(k.dataLabel=k.dataLabel.destroy()),k.connector&&(k.connector=k.connector.destroy()));p=k.index;f.updateParallelArrays(k,p);n.data[p]=m(n.data[p],!0)||m(a,!0)?k.options:a;f.isDirty=f.isDirtyData=!0;!f.fixedBox&&f.hasCartesianSeries&&(l.isDirtyBox=!0);"point"===n.legendType&&
(l.isDirtyLegend=!0);b&&l.redraw(c)}var k=this,f=k.series,g=k.graphic,p,l=f.chart,n=f.options;b=e(b,!0);!1===d?h():k.firePointEvent("update",{options:a},h)},remove:function(a,b){this.series.removePoint(c(this,this.series.data),a,b)}});v(r.prototype,{addPoint:function(a,b,c,d){var h=this.options,k=this.data,f=this.chart,g=this.xAxis,g=g&&g.hasNames&&g.names,p=h.data,l,m,n=this.xData,r,z;b=e(b,!0);l={series:this};this.pointClass.prototype.applyOptions.apply(l,[a]);z=l.x;r=n.length;if(this.requireSorting&&
z<n[r-1])for(m=!0;r&&n[r-1]>z;)r--;this.updateParallelArrays(l,"splice",r,0,0);this.updateParallelArrays(l,r);g&&l.name&&(g[z]=l.name);p.splice(r,0,a);m&&(this.data.splice(r,0,null),this.processData());"point"===h.legendType&&this.generatePoints();c&&(k[0]&&k[0].remove?k[0].remove(!1):(k.shift(),this.updateParallelArrays(l,"shift"),p.shift()));this.isDirtyData=this.isDirty=!0;b&&f.redraw(d)},removePoint:function(a,b,c){var d=this,h=d.data,k=h[a],f=d.points,g=d.chart,p=function(){f&&f.length===h.length&&
f.splice(a,1);h.splice(a,1);d.options.data.splice(a,1);d.updateParallelArrays(k||{series:d},"splice",a,1);k&&k.destroy();d.isDirty=!0;d.isDirtyData=!0;b&&g.redraw()};z(c,g);b=e(b,!0);k?k.firePointEvent("remove",null,p):p()},remove:function(a,b,c){function d(){h.destroy();k.isDirtyLegend=k.isDirtyBox=!0;k.linkSeries();e(a,!0)&&k.redraw(b)}var h=this,k=h.chart;!1!==c?u(h,"remove",null,d):d()},update:function(a,b){var c=this,d=c.chart,k=c.userOptions,f=c.oldType||c.type,p=a.type||k.type||d.options.chart.type,
g=I[f].prototype,l,m=["group","markerGroup","dataLabelsGroup"],n=["navigatorSeries","baseSeries"],r=c.finishedAnimating&&{animation:!1};if(Object.keys&&"data"===Object.keys(a).toString())return this.setData(a.data,b);n=m.concat(n);t(n,function(a){n[a]=c[a];delete c[a]});a=h(k,r,{index:c.index,pointStart:c.xData[0]},{data:c.options.data},a);c.remove(!1,null,!1);for(l in g)c[l]=void 0;v(c,I[p||f].prototype);t(n,function(a){c[a]=n[a]});c.init(d,a);a.zIndex!==k.zIndex&&t(m,function(b){c[b]&&c[b].attr({zIndex:a.zIndex})});
c.oldType=f;d.linkSeries();e(b,!0)&&d.redraw(!1)}});v(E.prototype,{update:function(a,b){var c=this.chart;a=c.options[this.coll][this.options.index]=h(this.userOptions,a);this.destroy(!0);this.init(c,v(a,{events:void 0}));c.isDirtyBox=!0;e(b,!0)&&c.redraw()},remove:function(a){for(var b=this.chart,c=this.coll,h=this.series,k=h.length;k--;)h[k]&&h[k].remove(!1);n(b.axes,this);n(b[c],this);d(b.options[c])?b.options[c].splice(this.options.index,1):delete b.options[c];t(b[c],function(a,b){a.options.index=
b});this.destroy();b.isDirtyBox=!0;e(a,!0)&&b.redraw()},setTitle:function(a,b){this.update({title:a},b)},setCategories:function(a,b){this.update({categories:a},b)}})})(K);(function(a){var B=a.color,H=a.each,E=a.map,q=a.pick,f=a.Series,l=a.seriesType;l("area","line",{softThreshold:!1,threshold:0},{singleStacks:!1,getStackPoints:function(f){var l=[],t=[],u=this.xAxis,c=this.yAxis,b=c.stacks[this.stackKey],m={},d=this.index,h=c.series,k=h.length,e,p=q(c.options.reversedStacks,!0)?1:-1,r;f=f||this.points;
if(this.options.stacking){for(r=0;r<f.length;r++)f[r].leftNull=f[r].rightNull=null,m[f[r].x]=f[r];a.objectEach(b,function(a,b){null!==a.total&&t.push(b)});t.sort(function(a,b){return a-b});e=E(h,function(){return this.visible});H(t,function(a,h){var f=0,n,z;if(m[a]&&!m[a].isNull)l.push(m[a]),H([-1,1],function(c){var f=1===c?"rightNull":"leftNull",l=0,q=b[t[h+c]];if(q)for(r=d;0<=r&&r<k;)n=q.points[r],n||(r===d?m[a][f]=!0:e[r]&&(z=b[a].points[r])&&(l-=z[1]-z[0])),r+=p;m[a][1===c?"rightCliff":"leftCliff"]=
l});else{for(r=d;0<=r&&r<k;){if(n=b[a].points[r]){f=n[1];break}r+=p}f=c.translate(f,0,1,0,1);l.push({isNull:!0,plotX:u.translate(a,0,0,0,1),x:a,plotY:f,yBottom:f})}})}return l},getGraphPath:function(a){var l=f.prototype.getGraphPath,t=this.options,u=t.stacking,c=this.yAxis,b,m,d=[],h=[],k=this.index,e,p=c.stacks[this.stackKey],r=t.threshold,I=c.getThreshold(t.threshold),z,t=t.connectNulls||"percent"===u,M=function(b,f,l){var m=a[b];b=u&&p[m.x].points[k];var n=m[l+"Null"]||0;l=m[l+"Cliff"]||0;var z,
q,m=!0;l||n?(z=(n?b[0]:b[1])+l,q=b[0]+l,m=!!n):!u&&a[f]&&a[f].isNull&&(z=q=r);void 0!==z&&(h.push({plotX:e,plotY:null===z?I:c.getThreshold(z),isNull:m,isCliff:!0}),d.push({plotX:e,plotY:null===q?I:c.getThreshold(q),doCurve:!1}))};a=a||this.points;u&&(a=this.getStackPoints(a));for(b=0;b<a.length;b++)if(m=a[b].isNull,e=q(a[b].rectPlotX,a[b].plotX),z=q(a[b].yBottom,I),!m||t)t||M(b,b-1,"left"),m&&!u&&t||(h.push(a[b]),d.push({x:b,plotX:e,plotY:z})),t||M(b,b+1,"right");b=l.call(this,h,!0,!0);d.reversed=
!0;m=l.call(this,d,!0,!0);m.length&&(m[0]="L");m=b.concat(m);l=l.call(this,h,!1,t);m.xMap=b.xMap;this.areaPath=m;return l},drawGraph:function(){this.areaPath=[];f.prototype.drawGraph.apply(this);var a=this,l=this.areaPath,v=this.options,u=[["area","highcharts-area",this.color,v.fillColor]];H(this.zones,function(c,b){u.push(["zone-area-"+b,"highcharts-area highcharts-zone-area-"+b+" "+c.className,c.color||a.color,c.fillColor||v.fillColor])});H(u,function(c){var b=c[0],f=a[b];f?(f.endX=a.preventGraphAnimation?
null:l.xMap,f.animate({d:l})):(f=a[b]=a.chart.renderer.path(l).addClass(c[1]).attr({fill:q(c[3],B(c[2]).setOpacity(q(v.fillOpacity,.75)).get()),zIndex:0}).add(a.group),f.isArea=!0);f.startX=l.xMap;f.shiftUnit=v.step?2:1})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var B=a.pick;a=a.seriesType;a("spline","line",{},{getPointSpline:function(a,E,q){var f=E.plotX,l=E.plotY,t=a[q-1];q=a[q+1];var n,v,u,c;if(t&&!t.isNull&&!1!==t.doCurve&&!E.isCliff&&q&&!q.isNull&&!1!==q.doCurve&&
!E.isCliff){a=t.plotY;u=q.plotX;q=q.plotY;var b=0;n=(1.5*f+t.plotX)/2.5;v=(1.5*l+a)/2.5;u=(1.5*f+u)/2.5;c=(1.5*l+q)/2.5;u!==n&&(b=(c-v)*(u-f)/(u-n)+l-c);v+=b;c+=b;v>a&&v>l?(v=Math.max(a,l),c=2*l-v):v<a&&v<l&&(v=Math.min(a,l),c=2*l-v);c>q&&c>l?(c=Math.max(q,l),v=2*l-c):c<q&&c<l&&(c=Math.min(q,l),v=2*l-c);E.rightContX=u;E.rightContY=c}E=["C",B(t.rightContX,t.plotX),B(t.rightContY,t.plotY),B(n,f),B(v,l),f,l];t.rightContX=t.rightContY=null;return E}})})(K);(function(a){var B=a.seriesTypes.area.prototype,
H=a.seriesType;H("areaspline","spline",a.defaultPlotOptions.area,{getStackPoints:B.getStackPoints,getGraphPath:B.getGraphPath,drawGraph:B.drawGraph,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle})})(K);(function(a){var B=a.animObject,H=a.color,E=a.each,q=a.extend,f=a.isNumber,l=a.merge,t=a.pick,n=a.Series,v=a.seriesType,u=a.svg;v("column","line",{borderRadius:0,crisp:!0,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},
select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:null,verticalAlign:null,y:null},softThreshold:!1,startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"},{cropShoulder:0,directTouch:!0,trackerGroups:["group","dataLabelsGroup"],negStacks:!0,init:function(){n.prototype.init.apply(this,arguments);var a=this,b=a.chart;b.hasRendered&&E(b.series,function(b){b.type===a.type&&(b.isDirty=!0)})},getColumnMetrics:function(){var a=this,b=a.options,f=a.xAxis,
d=a.yAxis,h=f.reversed,k,e={},l=0;!1===b.grouping?l=1:E(a.chart.series,function(b){var c=b.options,h=b.yAxis,f;b.type!==a.type||!b.visible&&a.chart.options.chart.ignoreHiddenSeries||d.len!==h.len||d.pos!==h.pos||(c.stacking?(k=b.stackKey,void 0===e[k]&&(e[k]=l++),f=e[k]):!1!==c.grouping&&(f=l++),b.columnIndex=f)});var n=Math.min(Math.abs(f.transA)*(f.ordinalSlope||b.pointRange||f.closestPointRange||f.tickInterval||1),f.len),q=n*b.groupPadding,z=(n-2*q)/(l||1),b=Math.min(b.maxPointWidth||f.len,t(b.pointWidth,
z*(1-2*b.pointPadding)));a.columnMetrics={width:b,offset:(z-b)/2+(q+((a.columnIndex||0)+(h?1:0))*z-n/2)*(h?-1:1)};return a.columnMetrics},crispCol:function(a,b,f,d){var c=this.chart,k=this.borderWidth,e=-(k%2?.5:0),k=k%2?.5:1;c.inverted&&c.renderer.isVML&&(k+=1);this.options.crisp&&(f=Math.round(a+f)+e,a=Math.round(a)+e,f-=a);d=Math.round(b+d)+k;e=.5>=Math.abs(b)&&.5<d;b=Math.round(b)+k;d-=b;e&&d&&(--b,d+=1);return{x:a,y:b,width:f,height:d}},translate:function(){var a=this,b=a.chart,f=a.options,d=
a.dense=2>a.closestPointRange*a.xAxis.transA,d=a.borderWidth=t(f.borderWidth,d?0:1),h=a.yAxis,k=f.threshold,e=a.translatedThreshold=h.getThreshold(k),l=t(f.minPointLength,5),r=a.getColumnMetrics(),q=r.width,z=a.barW=Math.max(q,1+2*d),u=a.pointXOffset=r.offset;b.inverted&&(e-=.5);f.pointPadding&&(z=Math.ceil(z));n.prototype.translate.apply(a);E(a.points,function(c){var d=t(c.yBottom,e),f=999+Math.abs(d),f=Math.min(Math.max(-f,c.plotY),h.len+f),p=c.plotX+u,m=z,n=Math.min(f,d),r,g=Math.max(f,d)-n;l&&
Math.abs(g)<l&&(g=l,r=!h.reversed&&!c.negative||h.reversed&&c.negative,c.y===k&&a.dataMax<=k&&h.min<k&&(r=!r),n=Math.abs(n-e)>l?d-l:e-(r?l:0));c.barX=p;c.pointWidth=q;c.tooltipPos=b.inverted?[h.len+h.pos-b.plotLeft-f,a.xAxis.len-p-m/2,g]:[p+m/2,f+h.pos-b.plotTop,g];c.shapeType="rect";c.shapeArgs=a.crispCol.apply(a,c.isNull?[p,e,m,0]:[p,n,m,g])})},getSymbol:a.noop,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,drawGraph:function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")},
pointAttribs:function(a,b){var c=this.options,d,h=this.pointAttrToOptions||{};d=h.stroke||"borderColor";var f=h["stroke-width"]||"borderWidth",e=a&&a.color||this.color,p=a&&a[d]||c[d]||this.color||e,n=a&&a[f]||c[f]||this[f]||0,h=c.dashStyle;a&&this.zones.length&&(e=a.getZone(),e=a.options.color||e&&e.color||this.color);b&&(a=l(c.states[b],a.options.states&&a.options.states[b]||{}),b=a.brightness,e=a.color||void 0!==b&&H(e).brighten(a.brightness).get()||e,p=a[d]||p,n=a[f]||n,h=a.dashStyle||h);d={fill:e,
stroke:p,"stroke-width":n};h&&(d.dashstyle=h);return d},drawPoints:function(){var a=this,b=this.chart,m=a.options,d=b.renderer,h=m.animationLimit||250,k;E(a.points,function(c){var e=c.graphic;if(f(c.plotY)&&null!==c.y){k=c.shapeArgs;if(e)e[b.pointCount<h?"animate":"attr"](l(k));else c.graphic=e=d[c.shapeType](k).add(c.group||a.group);m.borderRadius&&e.attr({r:m.borderRadius});e.attr(a.pointAttribs(c,c.selected&&"select")).shadow(m.shadow,null,m.stacking&&!m.borderRadius);e.addClass(c.getClassName(),
!0)}else e&&(c.graphic=e.destroy())})},animate:function(a){var b=this,c=this.yAxis,d=b.options,h=this.chart.inverted,f={},e=h?"translateX":"translateY",l;u&&(a?(f.scaleY=.001,a=Math.min(c.pos+c.len,Math.max(c.pos,c.toPixels(d.threshold))),h?f.translateX=a-c.len:f.translateY=a,b.group.attr(f)):(l=b.group.attr(e),b.group.animate({scaleY:1},q(B(b.options.animation),{step:function(a,d){f[e]=l+d.pos*(c.pos-l);b.group.attr(f)}})),b.animate=null))},remove:function(){var a=this,b=a.chart;b.hasRendered&&E(b.series,
function(b){b.type===a.type&&(b.isDirty=!0)});n.prototype.remove.apply(a,arguments)}})})(K);(function(a){a=a.seriesType;a("bar","column",null,{inverted:!0})})(K);(function(a){var B=a.Series;a=a.seriesType;a("scatter","line",{lineWidth:0,findNearestPointBy:"xy",marker:{enabled:!0},tooltip:{headerFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e \x3cspan style\x3d"font-size: 0.85em"\x3e {series.name}\x3c/span\x3e\x3cbr/\x3e',pointFormat:"x: \x3cb\x3e{point.x}\x3c/b\x3e\x3cbr/\x3ey: \x3cb\x3e{point.y}\x3c/b\x3e\x3cbr/\x3e"}},
{sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1,drawGraph:function(){this.options.lineWidth&&B.prototype.drawGraph.call(this)}})})(K);(function(a){var B=a.deg2rad,H=a.isNumber,E=a.pick,q=a.relativeLength;a.CenteredSeriesMixin={getCenter:function(){var a=this.options,l=this.chart,t=2*(a.slicedOffset||0),n=l.plotWidth-2*t,l=l.plotHeight-2*t,v=a.center,v=[E(v[0],"50%"),E(v[1],"50%"),a.size||"100%",a.innerSize||0],u=Math.min(n,
l),c,b;for(c=0;4>c;++c)b=v[c],a=2>c||2===c&&/%$/.test(b),v[c]=q(b,[n,l,u,v[2]][c])+(a?t:0);v[3]>v[2]&&(v[3]=v[2]);return v},getStartAndEndRadians:function(a,l){a=H(a)?a:0;l=H(l)&&l>a&&360>l-a?l:a+360;return{start:B*(a+-90),end:B*(l+-90)}}}})(K);(function(a){var B=a.addEvent,H=a.CenteredSeriesMixin,E=a.defined,q=a.each,f=a.extend,l=H.getStartAndEndRadians,t=a.inArray,n=a.noop,v=a.pick,u=a.Point,c=a.Series,b=a.seriesType,m=a.setAnimation;b("pie","line",{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{distance:30,
enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},x:0},ignoreHiddenPoint:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,states:{hover:{brightness:.1}}},{isCartesian:!1,requireSorting:!1,directTouch:!0,noSharedTooltip:!0,trackerGroups:["group","dataLabelsGroup"],axisTypes:[],pointAttribs:a.seriesTypes.column.prototype.pointAttribs,animate:function(a){var b=this,
c=b.points,d=b.startAngleRad;a||(q(c,function(a){var c=a.graphic,e=a.shapeArgs;c&&(c.attr({r:a.startR||b.center[3]/2,start:d,end:d}),c.animate({r:e.r,start:e.start,end:e.end},b.options.animation))}),b.animate=null)},updateTotals:function(){var a,b=0,c=this.points,e=c.length,f,l=this.options.ignoreHiddenPoint;for(a=0;a<e;a++)f=c[a],b+=l&&!f.visible?0:f.isNull?0:f.y;this.total=b;for(a=0;a<e;a++)f=c[a],f.percentage=0<b&&(f.visible||!l)?f.y/b*100:0,f.total=b},generatePoints:function(){c.prototype.generatePoints.call(this);
this.updateTotals()},translate:function(a){this.generatePoints();var b=0,c=this.options,e=c.slicedOffset,d=e+(c.borderWidth||0),f,m,n,q=l(c.startAngle,c.endAngle),t=this.startAngleRad=q.start,q=(this.endAngleRad=q.end)-t,u=this.points,x,F=c.dataLabels.distance,c=c.ignoreHiddenPoint,A,B=u.length,G;a||(this.center=a=this.getCenter());this.getX=function(b,c,e){n=Math.asin(Math.min((b-a[1])/(a[2]/2+e.labelDistance),1));return a[0]+(c?-1:1)*Math.cos(n)*(a[2]/2+e.labelDistance)};for(A=0;A<B;A++){G=u[A];
G.labelDistance=v(G.options.dataLabels&&G.options.dataLabels.distance,F);this.maxLabelDistance=Math.max(this.maxLabelDistance||0,G.labelDistance);f=t+b*q;if(!c||G.visible)b+=G.percentage/100;m=t+b*q;G.shapeType="arc";G.shapeArgs={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*f)/1E3,end:Math.round(1E3*m)/1E3};n=(m+f)/2;n>1.5*Math.PI?n-=2*Math.PI:n<-Math.PI/2&&(n+=2*Math.PI);G.slicedTranslation={translateX:Math.round(Math.cos(n)*e),translateY:Math.round(Math.sin(n)*e)};m=Math.cos(n)*a[2]/
2;x=Math.sin(n)*a[2]/2;G.tooltipPos=[a[0]+.7*m,a[1]+.7*x];G.half=n<-Math.PI/2||n>Math.PI/2?1:0;G.angle=n;f=Math.min(d,G.labelDistance/5);G.labelPos=[a[0]+m+Math.cos(n)*G.labelDistance,a[1]+x+Math.sin(n)*G.labelDistance,a[0]+m+Math.cos(n)*f,a[1]+x+Math.sin(n)*f,a[0]+m,a[1]+x,0>G.labelDistance?"center":G.half?"right":"left",n]}},drawGraph:null,drawPoints:function(){var a=this,b=a.chart.renderer,c,e,l,m,n=a.options.shadow;n&&!a.shadowGroup&&(a.shadowGroup=b.g("shadow").add(a.group));q(a.points,function(d){e=
d.graphic;if(d.isNull)e&&(d.graphic=e.destroy());else{m=d.shapeArgs;c=d.getTranslate();var h=d.shadowGroup;n&&!h&&(h=d.shadowGroup=b.g("shadow").add(a.shadowGroup));h&&h.attr(c);l=a.pointAttribs(d,d.selected&&"select");e?e.setRadialReference(a.center).attr(l).animate(f(m,c)):(d.graphic=e=b[d.shapeType](m).setRadialReference(a.center).attr(c).add(a.group),d.visible||e.attr({visibility:"hidden"}),e.attr(l).attr({"stroke-linejoin":"round"}).shadow(n,h));e.addClass(d.getClassName())}})},searchPoint:n,
sortByAngle:function(a,b){a.sort(function(a,c){return void 0!==a.angle&&(c.angle-a.angle)*b})},drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,getCenter:H.getCenter,getSymbol:n},{init:function(){u.prototype.init.apply(this,arguments);var a=this,b;a.name=v(a.name,"Slice");b=function(b){a.slice("select"===b.type)};B(a,"select",b);B(a,"unselect",b);return a},isValid:function(){return a.isNumber(this.y,!0)&&0<=this.y},setVisible:function(a,b){var c=this,e=c.series,d=e.chart,h=e.options.ignoreHiddenPoint;
b=v(b,h);a!==c.visible&&(c.visible=c.options.visible=a=void 0===a?!c.visible:a,e.options.data[t(c,e.data)]=c.options,q(["graphic","dataLabel","connector","shadowGroup"],function(b){if(c[b])c[b][a?"show":"hide"](!0)}),c.legendItem&&d.legend.colorizeItem(c,a),a||"hover"!==c.state||c.setState(""),h&&(e.isDirty=!0),b&&d.redraw())},slice:function(a,b,c){var e=this.series;m(c,e.chart);v(b,!0);this.sliced=this.options.sliced=E(a)?a:!this.sliced;e.options.data[t(this,e.data)]=this.options;this.graphic.animate(this.getTranslate());
this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())},getTranslate:function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}},haloPath:function(a){var b=this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(b.x,b.y,b.r+a,b.r+a,{innerR:this.shapeArgs.r-1,start:b.start,end:b.end})}})})(K);(function(a){var B=a.addEvent,H=a.arrayMax,E=a.defined,q=a.each,f=a.extend,l=a.format,t=a.map,n=a.merge,v=a.noop,u=a.pick,c=a.relativeLength,b=
a.Series,m=a.seriesTypes,d=a.stableSort;a.distribute=function(a,b){function c(a,b){return a.target-b.target}var f,h=!0,k=a,l=[],m;m=0;for(f=a.length;f--;)m+=a[f].size;if(m>b){d(a,function(a,b){return(b.rank||0)-(a.rank||0)});for(m=f=0;m<=b;)m+=a[f].size,f++;l=a.splice(f-1,a.length)}d(a,c);for(a=t(a,function(a){return{size:a.size,targets:[a.target],align:u(a.align,.5)}});h;){for(f=a.length;f--;)h=a[f],m=(Math.min.apply(0,h.targets)+Math.max.apply(0,h.targets))/2,h.pos=Math.min(Math.max(0,m-h.size*
h.align),b-h.size);f=a.length;for(h=!1;f--;)0<f&&a[f-1].pos+a[f-1].size>a[f].pos&&(a[f-1].size+=a[f].size,a[f-1].targets=a[f-1].targets.concat(a[f].targets),a[f-1].align=.5,a[f-1].pos+a[f-1].size>b&&(a[f-1].pos=b-a[f-1].size),a.splice(f,1),h=!0)}f=0;q(a,function(a){var b=0;q(a.targets,function(){k[f].pos=a.pos+b;b+=k[f].size;f++})});k.push.apply(k,l);d(k,c)};b.prototype.drawDataLabels=function(){function b(a,b){var c=b.filter;return c?(b=c.operator,a=a[c.property],c=c.value,"\x3e"===b&&a>c||"\x3c"===
b&&a<c||"\x3e\x3d"===b&&a>=c||"\x3c\x3d"===b&&a<=c||"\x3d\x3d"===b&&a==c||"\x3d\x3d\x3d"===b&&a===c?!0:!1):!0}var c=this,e=c.chart,d=c.options,f=d.dataLabels,m=c.points,z,t,v=c.hasRendered||0,C,x,F=u(f.defer,!!d.animation),A=e.renderer;if(f.enabled||c._hasPointLabels)c.dlProcessOptions&&c.dlProcessOptions(f),x=c.plotGroup("dataLabelsGroup","data-labels",F&&!v?"hidden":"visible",f.zIndex||6),F&&(x.attr({opacity:+v}),v||B(c,"afterAnimate",function(){c.visible&&x.show(!0);x[d.animation?"animate":"attr"]({opacity:1},
{duration:200})})),t=f,q(m,function(h){var k,g=h.dataLabel,m,p,q=h.connector,r=!g,v;z=h.dlOptions||h.options&&h.options.dataLabels;(k=u(z&&z.enabled,t.enabled)&&!h.isNull)&&(k=!0===b(h,z||f));k&&(f=n(t,z),m=h.getLabelConfig(),v=f[h.formatPrefix+"Format"]||f.format,C=E(v)?l(v,m,e.time):(f[h.formatPrefix+"Formatter"]||f.formatter).call(m,f),v=f.style,m=f.rotation,v.color=u(f.color,v.color,c.color,"#000000"),"contrast"===v.color&&(h.contrastColor=A.getContrast(h.color||c.color),v.color=f.inside||0>u(h.labelDistance,
f.distance)||d.stacking?h.contrastColor:"#000000"),d.cursor&&(v.cursor=d.cursor),p={fill:f.backgroundColor,stroke:f.borderColor,"stroke-width":f.borderWidth,r:f.borderRadius||0,rotation:m,padding:f.padding,zIndex:1},a.objectEach(p,function(a,b){void 0===a&&delete p[b]}));!g||k&&E(C)?k&&E(C)&&(g?p.text=C:(g=h.dataLabel=m?A.text(C,0,-9999).addClass("highcharts-data-label"):A.label(C,0,-9999,f.shape,null,null,f.useHTML,null,"data-label"),g.addClass(" highcharts-data-label-color-"+h.colorIndex+" "+(f.className||
"")+(f.useHTML?"highcharts-tracker":""))),g.attr(p),g.css(v).shadow(f.shadow),g.added||g.add(x),c.alignDataLabel(h,g,f,null,r)):(h.dataLabel=g=g.destroy(),q&&(h.connector=q.destroy()))});a.fireEvent(this,"afterDrawDataLabels")};b.prototype.alignDataLabel=function(a,b,c,d,l){var e=this.chart,h=e.inverted,k=u(a.dlBox&&a.dlBox.centerX,a.plotX,-9999),m=u(a.plotY,-9999),n=b.getBBox(),p,q=c.rotation,r=c.align,t=this.visible&&(a.series.forceDL||e.isInsidePlot(k,Math.round(m),h)||d&&e.isInsidePlot(k,h?d.x+
1:d.y+d.height-1,h)),v="justify"===u(c.overflow,"justify");if(t&&(p=c.style.fontSize,p=e.renderer.fontMetrics(p,b).b,d=f({x:h?this.yAxis.len-m:k,y:Math.round(h?this.xAxis.len-k:m),width:0,height:0},d),f(c,{width:n.width,height:n.height}),q?(v=!1,k=e.renderer.rotCorr(p,q),k={x:d.x+c.x+d.width/2+k.x,y:d.y+c.y+{top:0,middle:.5,bottom:1}[c.verticalAlign]*d.height},b[l?"attr":"animate"](k).attr({align:r}),m=(q+720)%360,m=180<m&&360>m,"left"===r?k.y-=m?n.height:0:"center"===r?(k.x-=n.width/2,k.y-=n.height/
2):"right"===r&&(k.x-=n.width,k.y-=m?0:n.height)):(b.align(c,null,d),k=b.alignAttr),v?a.isLabelJustified=this.justifyDataLabel(b,c,k,n,d,l):u(c.crop,!0)&&(t=e.isInsidePlot(k.x,k.y)&&e.isInsidePlot(k.x+n.width,k.y+n.height)),c.shape&&!q))b[l?"attr":"animate"]({anchorX:h?e.plotWidth-a.plotY:a.plotX,anchorY:h?e.plotHeight-a.plotX:a.plotY});t||(b.attr({y:-9999}),b.placed=!1)};b.prototype.justifyDataLabel=function(a,b,c,d,f,l){var e=this.chart,h=b.align,k=b.verticalAlign,m,n,p=a.box?0:a.padding||0;m=c.x+
p;0>m&&("right"===h?b.align="left":b.x=-m,n=!0);m=c.x+d.width-p;m>e.plotWidth&&("left"===h?b.align="right":b.x=e.plotWidth-m,n=!0);m=c.y+p;0>m&&("bottom"===k?b.verticalAlign="top":b.y=-m,n=!0);m=c.y+d.height-p;m>e.plotHeight&&("top"===k?b.verticalAlign="bottom":b.y=e.plotHeight-m,n=!0);n&&(a.placed=!l,a.align(b,null,f));return n};m.pie&&(m.pie.prototype.drawDataLabels=function(){var c=this,d=c.data,e,f=c.chart,l=c.options.dataLabels,m=u(l.connectorPadding,10),n=u(l.connectorWidth,1),t=f.plotWidth,
v=f.plotHeight,C,x=c.center,F=x[2]/2,A=x[1],B,G,g,w,L=[[],[]],P,N,O,K,y=[0,0,0,0];c.visible&&(l.enabled||c._hasPointLabels)&&(q(d,function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),b.prototype.drawDataLabels.apply(c),q(d,function(a){a.dataLabel&&a.visible&&(L[a.half].push(a),a.dataLabel._pos=null)}),q(L,function(b,d){var h,k,n=b.length,p=[],r;if(n)for(c.sortByAngle(b,d-.5),0<c.maxLabelDistance&&
(h=Math.max(0,A-F-c.maxLabelDistance),k=Math.min(A+F+c.maxLabelDistance,f.plotHeight),q(b,function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,A-F-a.labelDistance),a.bottom=Math.min(A+F+a.labelDistance,f.plotHeight),r=a.dataLabel.getBBox().height||21,a.positionsIndex=p.push({target:a.labelPos[1]-a.top+r/2,size:r,rank:a.y})-1)}),a.distribute(p,k+r-h)),K=0;K<n;K++)e=b[K],k=e.positionsIndex,g=e.labelPos,B=e.dataLabel,O=!1===e.visible?"hidden":"inherit",N=h=g[1],p&&E(p[k])&&(void 0===p[k].pos?
O="hidden":(w=p[k].size,N=e.top+p[k].pos)),delete e.positionIndex,P=l.justify?x[0]+(d?-1:1)*(F+e.labelDistance):c.getX(N<e.top+2||N>e.bottom-2?h:N,d,e),B._attr={visibility:O,align:g[6]},B._pos={x:P+l.x+({left:m,right:-m}[g[6]]||0),y:N+l.y-10},g.x=P,g.y=N,u(l.crop,!0)&&(G=B.getBBox().width,h=null,P-G<m?(h=Math.round(G-P+m),y[3]=Math.max(h,y[3])):P+G>t-m&&(h=Math.round(P+G-t+m),y[1]=Math.max(h,y[1])),0>N-w/2?y[0]=Math.max(Math.round(-N+w/2),y[0]):N+w/2>v&&(y[2]=Math.max(Math.round(N+w/2-v),y[2])),B.sideOverflow=
h)}),0===H(y)||this.verifyDataLabelOverflow(y))&&(this.placeDataLabels(),n&&q(this.points,function(a){var b;C=a.connector;if((B=a.dataLabel)&&B._pos&&a.visible&&0<a.labelDistance){O=B._attr.visibility;if(b=!C)a.connector=C=f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+a.colorIndex).add(c.dataLabelsGroup),C.attr({"stroke-width":n,stroke:l.connectorColor||a.color||"#666666"});C[b?"attr":"animate"]({d:c.connectorPath(a.labelPos)});C.attr("visibility",O)}else C&&(a.connector=
C.destroy())}))},m.pie.prototype.connectorPath=function(a){var b=a.x,c=a.y;return u(this.options.dataLabels.softConnector,!0)?["M",b+("left"===a[6]?5:-5),c,"C",b,c,2*a[2]-a[4],2*a[3]-a[5],a[2],a[3],"L",a[4],a[5]]:["M",b+("left"===a[6]?5:-5),c,"L",a[2],a[3],"L",a[4],a[5]]},m.pie.prototype.placeDataLabels=function(){q(this.points,function(a){var b=a.dataLabel;b&&a.visible&&((a=b._pos)?(b.sideOverflow&&(b._attr.width=b.getBBox().width-b.sideOverflow,b.css({width:b._attr.width+"px",textOverflow:"ellipsis"}),
b.shortened=!0),b.attr(b._attr),b[b.moved?"animate":"attr"](a),b.moved=!0):b&&b.attr({y:-9999}))},this)},m.pie.prototype.alignDataLabel=v,m.pie.prototype.verifyDataLabelOverflow=function(a){var b=this.center,e=this.options,d=e.center,f=e.minSize||80,h,l=null!==e.size;l||(null!==d[0]?h=Math.max(b[2]-Math.max(a[1],a[3]),f):(h=Math.max(b[2]-a[1]-a[3],f),b[0]+=(a[3]-a[1])/2),null!==d[1]?h=Math.max(Math.min(h,b[2]-Math.max(a[0],a[2])),f):(h=Math.max(Math.min(h,b[2]-a[0]-a[2]),f),b[1]+=(a[0]-a[2])/2),h<
b[2]?(b[2]=h,b[3]=Math.min(c(e.innerSize||0,h),h),this.translate(b),this.drawDataLabels&&this.drawDataLabels()):l=!0);return l});m.column&&(m.column.prototype.alignDataLabel=function(a,c,d,f,l){var e=this.chart.inverted,h=a.series,k=a.dlBox||a.shapeArgs,m=u(a.below,a.plotY>u(this.translatedThreshold,h.yAxis.len)),p=u(d.inside,!!this.options.stacking);k&&(f=n(k),0>f.y&&(f.height+=f.y,f.y=0),k=f.y+f.height-h.yAxis.len,0<k&&(f.height-=k),e&&(f={x:h.yAxis.len-f.y-f.height,y:h.xAxis.len-f.x-f.width,width:f.height,
height:f.width}),p||(e?(f.x+=m?0:f.width,f.width=0):(f.y+=m?f.height:0,f.height=0)));d.align=u(d.align,!e||p?"center":m?"right":"left");d.verticalAlign=u(d.verticalAlign,e||p?"middle":m?"top":"bottom");b.prototype.alignDataLabel.call(this,a,c,d,f,l);a.isLabelJustified&&a.contrastColor&&a.dataLabel.css({color:a.contrastColor})})})(K);(function(a){var B=a.Chart,H=a.each,E=a.objectEach,q=a.pick;a=a.addEvent;a(B.prototype,"render",function(){var a=[];H(this.labelCollectors||[],function(f){a=a.concat(f())});
H(this.yAxis||[],function(f){f.options.stackLabels&&!f.options.stackLabels.allowOverlap&&E(f.stacks,function(f){E(f,function(f){a.push(f.label)})})});H(this.series||[],function(f){var l=f.options.dataLabels,n=f.dataLabelCollections||["dataLabel"];(l.enabled||f._hasPointLabels)&&!l.allowOverlap&&f.visible&&H(n,function(l){H(f.points,function(f){f[l]&&(f[l].labelrank=q(f.labelrank,f.shapeArgs&&f.shapeArgs.height),a.push(f[l]))})})});this.hideOverlappingLabels(a)});B.prototype.hideOverlappingLabels=
function(a){var f=a.length,q,n,v,u,c,b,m,d,h,k=function(a,b,c,d,f,h,k,l){return!(f>a+c||f+k<a||h>b+d||h+l<b)};for(n=0;n<f;n++)if(q=a[n])q.oldOpacity=q.opacity,q.newOpacity=1,q.width||(v=q.getBBox(),q.width=v.width,q.height=v.height);a.sort(function(a,b){return(b.labelrank||0)-(a.labelrank||0)});for(n=0;n<f;n++)for(v=a[n],q=n+1;q<f;++q)if(u=a[q],v&&u&&v!==u&&v.placed&&u.placed&&0!==v.newOpacity&&0!==u.newOpacity&&(c=v.alignAttr,b=u.alignAttr,m=v.parentGroup,d=u.parentGroup,h=2*(v.box?0:v.padding||
0),c=k(c.x+m.translateX,c.y+m.translateY,v.width-h,v.height-h,b.x+d.translateX,b.y+d.translateY,u.width-h,u.height-h)))(v.labelrank<u.labelrank?v:u).newOpacity=0;H(a,function(a){var b,c;a&&(c=a.newOpacity,a.oldOpacity!==c&&a.placed&&(c?a.show(!0):b=function(){a.hide()},a.alignAttr.opacity=c,a[a.isOld?"animate":"attr"](a.alignAttr,null,b)),a.isOld=!0)})}})(K);(function(a){var B=a.addEvent,H=a.Chart,E=a.createElement,q=a.css,f=a.defaultOptions,l=a.defaultPlotOptions,t=a.each,n=a.extend,v=a.fireEvent,
u=a.hasTouch,c=a.inArray,b=a.isObject,m=a.Legend,d=a.merge,h=a.pick,k=a.Point,e=a.Series,p=a.seriesTypes,r=a.svg,I;I=a.TrackerMixin={drawTrackerPoint:function(){var a=this,b=a.chart.pointer,c=function(a){var c=b.getPointFromEvent(a);void 0!==c&&(b.isDirectTouch=!0,c.onMouseOver(a))};t(a.points,function(a){a.graphic&&(a.graphic.element.point=a);a.dataLabel&&(a.dataLabel.div?a.dataLabel.div.point=a:a.dataLabel.element.point=a)});a._hasTracking||(t(a.trackerGroups,function(d){if(a[d]){a[d].addClass("highcharts-tracker").on("mouseover",
c).on("mouseout",function(a){b.onTrackerMouseOut(a)});if(u)a[d].on("touchstart",c);a.options.cursor&&a[d].css(q).css({cursor:a.options.cursor})}}),a._hasTracking=!0);v(this,"afterDrawTracker")},drawTrackerGraph:function(){var a=this,b=a.options,c=b.trackByArea,d=[].concat(c?a.areaPath:a.graphPath),e=d.length,f=a.chart,h=f.pointer,k=f.renderer,l=f.options.tooltip.snap,g=a.tracker,m,n=function(){if(f.hoverSeries!==a)a.onMouseOver()},p="rgba(192,192,192,"+(r?.0001:.002)+")";if(e&&!c)for(m=e+1;m--;)"M"===
d[m]&&d.splice(m+1,0,d[m+1]-l,d[m+2],"L"),(m&&"M"===d[m]||m===e)&&d.splice(m,0,"L",d[m-2]+l,d[m-1]);g?g.attr({d:d}):a.graph&&(a.tracker=k.path(d).attr({"stroke-linejoin":"round",visibility:a.visible?"visible":"hidden",stroke:p,fill:c?p:"none","stroke-width":a.graph.strokeWidth()+(c?0:2*l),zIndex:2}).add(a.group),t([a.tracker,a.markerGroup],function(a){a.addClass("highcharts-tracker").on("mouseover",n).on("mouseout",function(a){h.onTrackerMouseOut(a)});b.cursor&&a.css({cursor:b.cursor});if(u)a.on("touchstart",
n)}));v(this,"afterDrawTracker")}};p.column&&(p.column.prototype.drawTracker=I.drawTrackerPoint);p.pie&&(p.pie.prototype.drawTracker=I.drawTrackerPoint);p.scatter&&(p.scatter.prototype.drawTracker=I.drawTrackerPoint);n(m.prototype,{setItemEvents:function(a,b,c){var e=this,f=e.chart.renderer.boxWrapper,h="highcharts-legend-"+(a instanceof k?"point":"series")+"-active";(c?b:a.legendGroup).on("mouseover",function(){a.setState("hover");f.addClass(h);b.css(e.options.itemHoverStyle)}).on("mouseout",function(){b.css(d(a.visible?
e.itemStyle:e.itemHiddenStyle));f.removeClass(h);a.setState()}).on("click",function(b){var c=function(){a.setVisible&&a.setVisible()};f.removeClass(h);b={browserEvent:b};a.firePointEvent?a.firePointEvent("legendItemClick",b,c):v(a,"legendItemClick",b,c)})},createCheckboxForItem:function(a){a.checkbox=E("input",{type:"checkbox",checked:a.selected,defaultChecked:a.selected},this.options.itemCheckboxStyle,this.chart.container);B(a.checkbox,"click",function(b){v(a.series||a,"checkboxClick",{checked:b.target.checked,
item:a},function(){a.select()})})}});f.legend.itemStyle.cursor="pointer";n(H.prototype,{showResetZoom:function(){function a(){b.zoomOut()}var b=this,c=f.lang,d=b.options.chart.resetZoomButton,e=d.theme,h=e.states,k="chart"===d.relativeTo?null:"plotBox";v(this,"beforeShowResetZoom",null,function(){b.resetZoomButton=b.renderer.button(c.resetZoom,null,null,a,e,h&&h.hover).attr({align:d.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,k)})},zoomOut:function(){var a=
this;v(a,"selection",{resetSelection:!0},function(){a.zoom()})},zoom:function(a){var c,d=this.pointer,e=!1,f;!a||a.resetSelection?(t(this.axes,function(a){c=a.zoom()}),d.initiated=!1):t(a.xAxis.concat(a.yAxis),function(a){var b=a.axis;d[b.isXAxis?"zoomX":"zoomY"]&&(c=b.zoom(a.min,a.max),b.displayBtn&&(e=!0))});f=this.resetZoomButton;e&&!f?this.showResetZoom():!e&&b(f)&&(this.resetZoomButton=f.destroy());c&&this.redraw(h(this.options.chart.animation,a&&a.animation,100>this.pointCount))},pan:function(a,
b){var c=this,d=c.hoverPoints,e;d&&t(d,function(a){a.setState()});t("xy"===b?[1,0]:[1],function(b){b=c[b?"xAxis":"yAxis"][0];var d=b.horiz,f=a[d?"chartX":"chartY"],d=d?"mouseDownX":"mouseDownY",h=c[d],g=(b.pointRange||0)/2,k=b.getExtremes(),l=b.toValue(h-f,!0)+g,m=b.toValue(h+b.len-f,!0)-g,n=m<l,h=n?m:l,l=n?l:m,m=Math.min(k.dataMin,g?k.min:b.toValue(b.toPixels(k.min)-b.minPixelPadding)),g=Math.max(k.dataMax,g?k.max:b.toValue(b.toPixels(k.max)+b.minPixelPadding)),n=m-h;0<n&&(l+=n,h=m);n=l-g;0<n&&(l=
g,h-=n);b.series.length&&h!==k.min&&l!==k.max&&(b.setExtremes(h,l,!1,!1,{trigger:"pan"}),e=!0);c[d]=f});e&&c.redraw(!1);q(c.container,{cursor:"move"})}});n(k.prototype,{select:function(a,b){var d=this,e=d.series,f=e.chart;a=h(a,!d.selected);d.firePointEvent(a?"select":"unselect",{accumulate:b},function(){d.selected=d.options.selected=a;e.options.data[c(d,e.data)]=d.options;d.setState(a&&"select");b||t(f.getSelectedPoints(),function(a){a.selected&&a!==d&&(a.selected=a.options.selected=!1,e.options.data[c(a,
e.data)]=a.options,a.setState(""),a.firePointEvent("unselect"))})})},onMouseOver:function(a){var b=this.series.chart,c=b.pointer;a=a?c.normalize(a):c.getChartCoordinatesFromPoint(this,b.inverted);c.runPointActions(a,this)},onMouseOut:function(){var a=this.series.chart;this.firePointEvent("mouseOut");t(a.hoverPoints||[],function(a){a.setState()});a.hoverPoints=a.hoverPoint=null},importEvents:function(){if(!this.hasImportedEvents){var b=this,c=d(b.series.options.point,b.options).events;b.events=c;a.objectEach(c,
function(a,c){B(b,c,a)});this.hasImportedEvents=!0}},setState:function(a,b){var c=Math.floor(this.plotX),d=this.plotY,e=this.series,f=e.options.states[a||"normal"]||{},k=l[e.type].marker&&e.options.marker,m=k&&!1===k.enabled,p=k&&k.states&&k.states[a||"normal"]||{},g=!1===p.enabled,q=e.stateMarkerGraphic,r=this.marker||{},t=e.chart,u=e.halo,z,B=k&&e.markerAttribs;a=a||"";if(!(a===this.state&&!b||this.selected&&"select"!==a||!1===f.enabled||a&&(g||m&&!1===p.enabled)||a&&r.states&&r.states[a]&&!1===
r.states[a].enabled)){B&&(z=e.markerAttribs(this,a));if(this.graphic)this.state&&this.graphic.removeClass("highcharts-point-"+this.state),a&&this.graphic.addClass("highcharts-point-"+a),this.graphic.animate(e.pointAttribs(this,a),h(t.options.chart.animation,f.animation)),z&&this.graphic.animate(z,h(t.options.chart.animation,p.animation,k.animation)),q&&q.hide();else{if(a&&p){k=r.symbol||e.symbol;q&&q.currentSymbol!==k&&(q=q.destroy());if(q)q[b?"animate":"attr"]({x:z.x,y:z.y});else k&&(e.stateMarkerGraphic=
q=t.renderer.symbol(k,z.x,z.y,z.width,z.height).add(e.markerGroup),q.currentSymbol=k);q&&q.attr(e.pointAttribs(this,a))}q&&(q[a&&t.isInsidePlot(c,d,t.inverted)?"show":"hide"](),q.element.point=this)}(c=f.halo)&&c.size?(u||(e.halo=u=t.renderer.path().add((this.graphic||q).parentGroup)),u.show()[b?"animate":"attr"]({d:this.haloPath(c.size)}),u.attr({"class":"highcharts-halo highcharts-color-"+h(this.colorIndex,e.colorIndex)}),u.point=this,u.attr(n({fill:this.color||e.color,"fill-opacity":c.opacity,
zIndex:-1},c.attributes))):u&&u.point&&u.point.haloPath&&u.animate({d:u.point.haloPath(0)},null,u.hide);this.state=a;v(this,"afterSetState")}},haloPath:function(a){return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX)-a,this.plotY-a,2*a,2*a)}});n(e.prototype,{onMouseOver:function(){var a=this.chart,b=a.hoverSeries;if(b&&b!==this)b.onMouseOut();this.options.events.mouseOver&&v(this,"mouseOver");this.setState("hover");a.hoverSeries=this},onMouseOut:function(){var a=this.options,b=
this.chart,c=b.tooltip,d=b.hoverPoint;b.hoverSeries=null;if(d)d.onMouseOut();this&&a.events.mouseOut&&v(this,"mouseOut");!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();this.setState()},setState:function(a){var b=this,c=b.options,d=b.graph,e=c.states,f=c.lineWidth,c=0;a=a||"";if(b.state!==a&&(t([b.group,b.markerGroup,b.dataLabelsGroup],function(c){c&&(b.state&&c.removeClass("highcharts-series-"+b.state),a&&c.addClass("highcharts-series-"+a))}),b.state=a,!e[a]||!1!==e[a].enabled)&&
(a&&(f=e[a].lineWidth||f+(e[a].lineWidthPlus||0)),d&&!d.dashstyle))for(f={"stroke-width":f},d.animate(f,h(e[a||"normal"]&&e[a||"normal"].animation,b.chart.options.chart.animation));b["zone-graph-"+c];)b["zone-graph-"+c].attr(f),c+=1},setVisible:function(a,b){var c=this,d=c.chart,e=c.legendItem,f,h=d.options.chart.ignoreHiddenSeries,k=c.visible;f=(c.visible=a=c.options.visible=c.userOptions.visible=void 0===a?!k:a)?"show":"hide";t(["group","dataLabelsGroup","markerGroup","tracker","tt"],function(a){if(c[a])c[a][f]()});
if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();e&&d.legend.colorizeItem(c,a);c.isDirty=!0;c.options.stacking&&t(d.series,function(a){a.options.stacking&&a.visible&&(a.isDirty=!0)});t(c.linkedSeries,function(b){b.setVisible(a,!1)});h&&(d.isDirtyBox=!0);!1!==b&&d.redraw();v(c,f)},show:function(){this.setVisible(!0)},hide:function(){this.setVisible(!1)},select:function(a){this.selected=a=void 0===a?!this.selected:a;this.checkbox&&(this.checkbox.checked=a);v(this,a?"select":
"unselect")},drawTracker:I.drawTrackerGraph})})(K);(function(a){var B=a.Chart,H=a.each,E=a.inArray,q=a.isArray,f=a.isObject,l=a.pick,t=a.splat;B.prototype.setResponsive=function(f){var l=this.options.responsive,n=[],c=this.currentResponsive;l&&l.rules&&H(l.rules,function(b){void 0===b._id&&(b._id=a.uniqueKey());this.matchResponsiveRule(b,n,f)},this);var b=a.merge.apply(0,a.map(n,function(b){return a.find(l.rules,function(a){return a._id===b}).chartOptions})),n=n.toString()||void 0;n!==(c&&c.ruleIds)&&
(c&&this.update(c.undoOptions,f),n?(this.currentResponsive={ruleIds:n,mergedOptions:b,undoOptions:this.currentOptions(b)},this.update(b,f)):this.currentResponsive=void 0)};B.prototype.matchResponsiveRule=function(a,f){var n=a.condition;(n.callback||function(){return this.chartWidth<=l(n.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=l(n.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=l(n.minWidth,0)&&this.chartHeight>=l(n.minHeight,0)}).call(this)&&f.push(a._id)};B.prototype.currentOptions=function(l){function n(c,
b,l,d){var h;a.objectEach(c,function(a,c){if(!d&&-1<E(c,["series","xAxis","yAxis"]))for(a=t(a),l[c]=[],h=0;h<a.length;h++)b[c][h]&&(l[c][h]={},n(a[h],b[c][h],l[c][h],d+1));else f(a)?(l[c]=q(a)?[]:{},n(a,b[c]||{},l[c],d+1)):l[c]=b[c]||null})}var u={};n(l,this.options,u,0);return u}})(K);return K});
(function() {


}).call(this);
(function() {


}).call(this);
/*!

 * This is a opensource javascript template
 * the code is taken from:

 =========================================================
 * Light Bootstrap Dashboard - v1.4.0
 =========================================================

 * Product Page: http://www.creative-tim.com/product/light-bootstrap-dashboard
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard/blob/master/LICENSE.md)

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

 */


var searchVisible = 0;
var transparent = true;

var transparentDemo = true;
var fixedTop = false;

var navbar_initialized = false;

$(document).ready(function(){
    window_width = $(window).width();

    // check if there is an image set for the sidebar's background
    lbd.checkSidebarImage();

    // Init navigation toggle for small screens
    lbd.initRightMenu();

    //  Activate the tooltips
    $('[rel="tooltip"]').tooltip();

    $('.form-control').on("focus", function(){
        $(this).parent('.input-group').addClass("input-group-focus");
    }).on("blur", function(){
        $(this).parent(".input-group").removeClass("input-group-focus");
    });

    // Fixes sub-nav not working as expected on IOS
$('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });
});

$(document).on('click', '.navbar-toggle', function(){
    $toggle = $(this);

    if(lbd.misc.navbar_menu_visible == 1) {
        $('html').removeClass('nav-open');
       lbd.misc.navbar_menu_visible = 0;
        $('#bodyClick').remove();
        setTimeout(function(){
           $toggle.removeClass('toggled');
       }, 550);
    } else {
       setTimeout(function(){
           $toggle.addClass('toggled');
       }, 580);
       div = '<div id="bodyClick"></div>';
       $(div).appendTo('body').click(function() {
           $('html').removeClass('nav-open');
           lbd.misc.navbar_menu_visible = 0;
            setTimeout(function(){
               $toggle.removeClass('toggled');
               $('#bodyClick').remove();
            }, 550);
       });

      $('html').addClass('nav-open');
       lbd.misc.navbar_menu_visible = 1;
    }
});

$(window).on('resize', function(){
    if(navbar_initialized){
        lbd.initRightMenu();
        navbar_initialized = true;
    }
});

lbd = {
    misc:{
        navbar_menu_visible: 0
    },

    checkSidebarImage: function(){
        $sidebar = $('.sidebar');
        image_src = $sidebar.data('image');

        if(image_src !== undefined){
            sidebar_container = '<div class="sidebar-background" style="background-image: url(' + image_src + ') "/>'
            $sidebar.append(sidebar_container);
        }
    },

    initRightMenu: debounce(function(){
        if(!navbar_initialized){
            $sidebar_wrapper = $('.sidebar-wrapper');
            $navbar = $('nav').find('.navbar-collapse').html();

            mobile_menu_content = '';

            nav_content = $navbar;

            nav_content = '<ul class="nav nav-mobile-menu">' + nav_content + '</ul>';

            // navbar_form = $('nav').find('.navbar-form').get(0).outerHTML;

            $sidebar_nav = $sidebar_wrapper.find(' > .nav');

            // insert the navbar form before the sidebar list
            $nav_content = $(nav_content);
            // $navbar_form = $(navbar_form);
            $nav_content.insertBefore($sidebar_nav);
            // $navbar_form.insertBefore($nav_content);

            $(".sidebar-wrapper .dropdown .dropdown-menu > li > a").click(function(event) {
                event.stopPropagation();

            });

            mobile_menu_initialized = true;
        } else {
            if($(window).width() > 991){
                // reset all the additions that we made for the sidebar wrapper only if the screen is bigger than 991px
                // $sidebar_wrapper.find('.navbar-form').remove();
                $sidebar_wrapper.find('.nav-mobile-menu').remove();

                mobile_menu_initialized = false;
            }
        }
    },200)
}


// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.

function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		clearTimeout(timeout);
		timeout = setTimeout(function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		}, wait);
		if (immediate && !timeout) func.apply(context, args);
	};
};
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
/*
 * Chartkick.js
 * Create beautiful Javascript charts with minimal code
 * https://github.com/ankane/chartkick.js
 * v1.2.1
 * MIT License
 */

/*jslint browser: true, indent: 2, plusplus: true, vars: true */


(function (window) {
  'use strict';

  var Chartkick, ISO8601_PATTERN, DECIMAL_SEPARATOR, adapters = [];

  var $ = window.jQuery || window.Zepto || window.$;

  // helpers

  function isArray(variable) {
    return Object.prototype.toString.call(variable) === "[object Array]";
  }

  function isFunction(variable) {
    return variable instanceof Function;
  }

  function isPlainObject(variable) {
    return !isFunction(variable) && variable instanceof Object;
  }

  // https://github.com/madrobby/zepto/blob/master/src/zepto.js
  function extend(target, source) {
    var key;
    for (key in source) {
      if (isPlainObject(source[key]) || isArray(source[key])) {
        if (isPlainObject(source[key]) && !isPlainObject(target[key])) {
          target[key] = {};
        }
        if (isArray(source[key]) && !isArray(target[key])) {
          target[key] = [];
        }
        extend(target[key], source[key]);
      } else if (source[key] !== undefined) {
        target[key] = source[key];
      }
    }
  }

  function merge(obj1, obj2) {
    var target = {};
    extend(target, obj1);
    extend(target, obj2);
    return target;
  }

  // https://github.com/Do/iso8601.js
  ISO8601_PATTERN = /(\d\d\d\d)(\-)?(\d\d)(\-)?(\d\d)(T)?(\d\d)(:)?(\d\d)?(:)?(\d\d)?([\.,]\d+)?($|Z|([\+\-])(\d\d)(:)?(\d\d)?)/i;
  DECIMAL_SEPARATOR = String(1.5).charAt(1);

  function parseISO8601(input) {
    var day, hour, matches, milliseconds, minutes, month, offset, result, seconds, type, year;
    type = Object.prototype.toString.call(input);
    if (type === '[object Date]') {
      return input;
    }
    if (type !== '[object String]') {
      return;
    }
    if (matches = input.match(ISO8601_PATTERN)) {
      year = parseInt(matches[1], 10);
      month = parseInt(matches[3], 10) - 1;
      day = parseInt(matches[5], 10);
      hour = parseInt(matches[7], 10);
      minutes = matches[9] ? parseInt(matches[9], 10) : 0;
      seconds = matches[11] ? parseInt(matches[11], 10) : 0;
      milliseconds = matches[12] ? parseFloat(DECIMAL_SEPARATOR + matches[12].slice(1)) * 1000 : 0;
      result = Date.UTC(year, month, day, hour, minutes, seconds, milliseconds);
      if (matches[13] && matches[14]) {
        offset = matches[15] * 60;
        if (matches[17]) {
          offset += parseInt(matches[17], 10);
        }
        offset *= matches[14] === '-' ? -1 : 1;
        result -= offset * 60 * 1000;
      }
      return new Date(result);
    }
  }
  // end iso8601.js

  function negativeValues(series) {
    var i, j, data;
    for (i = 0; i < series.length; i++) {
      data = series[i].data;
      for (j = 0; j < data.length; j++) {
        if (data[j][1] < 0) {
          return true;
        }
      }
    }
    return false;
  }

  function jsOptionsFunc(defaultOptions, hideLegend, setMin, setMax, setStacked) {
    return function (series, opts, chartOptions) {
      var options = merge({}, defaultOptions);
      options = merge(options, chartOptions || {});

      // hide legend
      // this is *not* an external option!
      if (opts.hideLegend) {
        hideLegend(options);
      }

      // min
      if ("min" in opts) {
        setMin(options, opts.min);
      } else if (!negativeValues(series)) {
        setMin(options, 0);
      }

      // max
      if ("max" in opts) {
        setMax(options, opts.max);
      }

      if (opts.stacked) {
        setStacked(options);
      }

      if (opts.colors) {
        options.colors = opts.colors;
      }

      // merge library last
      options = merge(options, opts.library || {});

      return options;
    };
  }

  function setText(element, text) {
    if (document.body.innerText) {
      element.innerText = text;
    } else {
      element.textContent = text;
    }
  }

  function chartError(element, message) {
    setText(element, "Error Loading Chart: " + message);
    element.style.color = "#ff0000";
  }

  function getJSON(element, url, success) {
    $.ajax({
      dataType: "json",
      url: url,
      success: success,
      error: function (jqXHR, textStatus, errorThrown) {
        var message = (typeof errorThrown === "string") ? errorThrown : errorThrown.message;
        chartError(element, message);
      }
    });
  }

  function errorCatcher(chart, callback) {
    try {
      callback(chart);
    } catch (err) {
      chartError(chart.element, err.message);
      throw err;
    }
  }

  function fetchDataSource(chart, callback) {
    if (typeof chart.dataSource === "string") {
      getJSON(chart.element, chart.dataSource, function (data, textStatus, jqXHR) {
        chart.data = data;
        errorCatcher(chart, callback);
      });
    } else {
      chart.data = chart.dataSource;
      errorCatcher(chart, callback);
    }
  }

  // type conversions

  function toStr(n) {
    return "" + n;
  }

  function toFloat(n) {
    return parseFloat(n);
  }

  function toDate(n) {
    if (typeof n !== "object") {
      if (typeof n === "number") {
        n = new Date(n * 1000); // ms
      } else { // str
        // try our best to get the str into iso8601
        // TODO be smarter about this
        var str = n.replace(/ /, "T").replace(" ", "").replace("UTC", "Z");
        n = parseISO8601(str) || new Date(n);
      }
    }
    return n;
  }

  function toArr(n) {
    if (!isArray(n)) {
      var arr = [], i;
      for (i in n) {
        if (n.hasOwnProperty(i)) {
          arr.push([i, n[i]]);
        }
      }
      n = arr;
    }
    return n;
  }

  function sortByTime(a, b) {
    return a[0].getTime() - b[0].getTime();
  }

  if ("Highcharts" in window) {
    var HighchartsAdapter = new function () {
      var Highcharts = window.Highcharts;

      var defaultOptions = {
        chart: {},
        xAxis: {
          labels: {
            style: {
              fontSize: "12px"
            }
          }
        },
        yAxis: {
          title: {
            text: null
          },
          labels: {
            style: {
              fontSize: "12px"
            }
          }
        },
        title: {
          text: null
        },
        credits: {
          enabled: false
        },
        legend: {
          borderWidth: 0
        },
        tooltip: {
          style: {
            fontSize: "12px"
          }
        },
        plotOptions: {
          areaspline: {},
          series: {
            marker: {}
          }
        }
      };

      var hideLegend = function (options) {
        options.legend.enabled = false;
      };

      var setMin = function (options, min) {
        options.yAxis.min = min;
      };

      var setMax = function (options, max) {
        options.yAxis.max = max;
      };

      var setStacked = function (options) {
        options.plotOptions.series.stacking = "normal";
      };

      var jsOptions = jsOptionsFunc(defaultOptions, hideLegend, setMin, setMax, setStacked);

      this.renderLineChart = function (chart, chartType) {
        chartType = chartType || "spline";
        var chartOptions = {};
        if (chartType === "areaspline") {
          chartOptions = {
            plotOptions: {
              areaspline: {
                stacking: "normal"
              },
              series: {
                marker: {
                  enabled: false
                }
              }
            }
          };
        }
        var options = jsOptions(chart.data, chart.options, chartOptions), data, i, j;
        options.xAxis.type = chart.options.discrete ? "category" : "datetime";
        options.chart.type = chartType;
        options.chart.renderTo = chart.element.id;

        var series = chart.data;
        for (i = 0; i < series.length; i++) {
          data = series[i].data;
          if (!chart.options.discrete) {
            for (j = 0; j < data.length; j++) {
              data[j][0] = data[j][0].getTime();
            }
          }
          series[i].marker = {symbol: "circle"};
        }
        options.series = series;
        new Highcharts.Chart(options);
      };

      this.renderPieChart = function (chart) {
        var chartOptions = {};
        if (chart.options.colors) {
          chartOptions.colors = chart.options.colors;
        }
        var options = merge(merge(defaultOptions, chartOptions), chart.options.library || {});
        options.chart.renderTo = chart.element.id;
        options.series = [{
          type: "pie",
          name: "Value",
          data: chart.data
        }];
        new Highcharts.Chart(options);
      };

      this.renderColumnChart = function (chart, chartType) {
        var chartType = chartType || "column";
        var series = chart.data;
        var options = jsOptions(series, chart.options), i, j, s, d, rows = [];
        options.chart.type = chartType;
        options.chart.renderTo = chart.element.id;

        for (i = 0; i < series.length; i++) {
          s = series[i];

          for (j = 0; j < s.data.length; j++) {
            d = s.data[j];
            if (!rows[d[0]]) {
              rows[d[0]] = new Array(series.length);
            }
            rows[d[0]][i] = d[1];
          }
        }

        var categories = [];
        for (i in rows) {
          if (rows.hasOwnProperty(i)) {
            categories.push(i);
          }
        }
        options.xAxis.categories = categories;

        var newSeries = [];
        for (i = 0; i < series.length; i++) {
          d = [];
          for (j = 0; j < categories.length; j++) {
            d.push(rows[categories[j]][i] || 0);
          }

          newSeries.push({
            name: series[i].name,
            data: d
          });
        }
        options.series = newSeries;

        new Highcharts.Chart(options);
      };

      var self = this;

      this.renderBarChart = function (chart) {
        self.renderColumnChart(chart, "bar");
      };

      this.renderAreaChart = function (chart) {
        self.renderLineChart(chart, "areaspline");
      };
    };
    adapters.push(HighchartsAdapter);
  }
  if (window.google && window.google.setOnLoadCallback) {
    var GoogleChartsAdapter = new function () {
      var google = window.google;

      // load from google
      var loaded = false;
      google.setOnLoadCallback(function () {
        loaded = true;
      });
      google.load("visualization", "1.0", {"packages": ["corechart"]});

      var waitForLoaded = function (callback) {
        google.setOnLoadCallback(callback); // always do this to prevent race conditions (watch out for other issues due to this)
        if (loaded) {
          callback();
        }
      };

      // Set chart options
      var defaultOptions = {
        chartArea: {},
        fontName: "'Lucida Grande', 'Lucida Sans Unicode', Verdana, Arial, Helvetica, sans-serif",
        pointSize: 6,
        legend: {
          textStyle: {
            fontSize: 12,
            color: "#444"
          },
          alignment: "center",
          position: "right"
        },
        curveType: "function",
        hAxis: {
          textStyle: {
            color: "#666",
            fontSize: 12
          },
          gridlines: {
            color: "transparent"
          },
          baselineColor: "#ccc",
          viewWindow: {}
        },
        vAxis: {
          textStyle: {
            color: "#666",
            fontSize: 12
          },
          baselineColor: "#ccc",
          viewWindow: {}
        },
        tooltip: {
          textStyle: {
            color: "#666",
            fontSize: 12
          }
        }
      };

      var hideLegend = function (options) {
        options.legend.position = "none";
      };

      var setMin = function (options, min) {
        options.vAxis.viewWindow.min = min;
      };

      var setMax = function (options, max) {
        options.vAxis.viewWindow.max = max;
      };

      var setBarMin = function (options, min) {
        options.hAxis.viewWindow.min = min;
      };

      var setBarMax = function (options, max) {
        options.hAxis.viewWindow.max = max;
      };

      var setStacked = function (options) {
        options.isStacked = true;
      };

      var jsOptions = jsOptionsFunc(defaultOptions, hideLegend, setMin, setMax, setStacked);

      // cant use object as key
      var createDataTable = function (series, columnType) {
        var data = new google.visualization.DataTable();
        data.addColumn(columnType, "");

        var i, j, s, d, key, rows = [];
        for (i = 0; i < series.length; i++) {
          s = series[i];
          data.addColumn("number", s.name);

          for (j = 0; j < s.data.length; j++) {
            d = s.data[j];
            key = (columnType === "datetime") ? d[0].getTime() : d[0];
            if (!rows[key]) {
              rows[key] = new Array(series.length);
            }
            rows[key][i] = toFloat(d[1]);
          }
        }

        var rows2 = [];
        for (i in rows) {
          if (rows.hasOwnProperty(i)) {
            rows2.push([(columnType === "datetime") ? new Date(toFloat(i)) : i].concat(rows[i]));
          }
        }
        if (columnType === "datetime") {
          rows2.sort(sortByTime);
        }
        data.addRows(rows2);

        return data;
      };

      var resize = function (callback) {
        if (window.attachEvent) {
          window.attachEvent("onresize", callback);
        } else if (window.addEventListener) {
          window.addEventListener("resize", callback, true);
        }
        callback();
      };

      this.renderLineChart = function (chart) {
        waitForLoaded(function () {
          var options = jsOptions(chart.data, chart.options);
          var data = createDataTable(chart.data, chart.options.discrete ? "string" : "datetime");
          chart.chart = new google.visualization.LineChart(chart.element);
          resize(function () {
            chart.chart.draw(data, options);
          });
        });
      };

      this.renderPieChart = function (chart) {
        waitForLoaded(function () {
          var chartOptions = {
            chartArea: {
              top: "10%",
              height: "80%"
            }
          };
          if (chart.options.colors) {
            chartOptions.colors = chart.options.colors;
          }
          var options = merge(merge(defaultOptions, chartOptions), chart.options.library || {});

          var data = new google.visualization.DataTable();
          data.addColumn("string", "");
          data.addColumn("number", "Value");
          data.addRows(chart.data);

          chart.chart = new google.visualization.PieChart(chart.element);
          resize(function () {
            chart.chart.draw(data, options);
          });
        });
      };

      this.renderColumnChart = function (chart) {
        waitForLoaded(function () {
          var options = jsOptions(chart.data, chart.options);
          var data = createDataTable(chart.data, "string");
          chart.chart = new google.visualization.ColumnChart(chart.element);
          resize(function () {
            chart.chart.draw(data, options);
          });
        });
      };

      this.renderBarChart = function (chart) {
        waitForLoaded(function () {
          var chartOptions = {
            hAxis: {
              gridlines: {
                color: "#ccc"
              }
            }
          };
          var options = jsOptionsFunc(defaultOptions, hideLegend, setBarMin, setBarMax, setStacked)(chart.data, chart.options, chartOptions);
          var data = createDataTable(chart.data, "string");
          chart.chart = new google.visualization.BarChart(chart.element);
          resize(function () {
            chart.chart.draw(data, options);
          });
        });
      };

      this.renderAreaChart = function (chart) {
        waitForLoaded(function () {
          var chartOptions = {
            isStacked: true,
            pointSize: 0,
            areaOpacity: 0.5
          };
          var options = jsOptions(chart.data, chart.options, chartOptions);
          var data = createDataTable(chart.data, chart.options.discrete ? "string" : "datetime");
          chart.chart = new google.visualization.AreaChart(chart.element);
          resize(function () {
            chart.chart.draw(data, options);
          });
        });
      };

      this.renderGeoChart = function (chart) {
        waitForLoaded(function () {
          var chartOptions = {
            legend: "none",
            colorAxis: {
              colors: chart.options.colors || ["#f6c7b6", "#ce502d"]
            }
          };
          var options = merge(merge(defaultOptions, chartOptions), chart.options.library || {});

          var data = new google.visualization.DataTable();
          data.addColumn("string", "");
          data.addColumn("number", "Value");
          data.addRows(chart.data);

          chart.chart = new google.visualization.GeoChart(chart.element);
          resize(function () {
            chart.chart.draw(data, options);
          });
        });
      };
    };
    adapters.push(GoogleChartsAdapter);
  }

  // TODO add adapter option
  // TODO remove chartType if cross-browser way
  // to get the name of the chart class
  function renderChart(chartType, chart) {
    var i, adapter, fnName;
    fnName = "render" + chartType + "Chart";

    for (i = 0; i < adapters.length; i++) {
      adapter = adapters[i];
      if (isFunction(adapter[fnName])) {
        return adapter[fnName](chart);
      }
    }
    throw new Error("No adapter found");
  }

  // process data

  function processSeries(series, opts, time) {
    var i, j, data, r, key;

    // see if one series or multiple
    if (!isArray(series) || typeof series[0] !== "object" || isArray(series[0])) {
      series = [{name: "Value", data: series}];
      opts.hideLegend = true;
    } else {
      opts.hideLegend = false;
    }
    if (opts.discrete) {
      time = false;
    }

    // right format
    for (i = 0; i < series.length; i++) {
      data = toArr(series[i].data);
      r = [];
      for (j = 0; j < data.length; j++) {
        key = data[j][0];
        key = time ? toDate(key) : toStr(key);
        r.push([key, toFloat(data[j][1])]);
      }
      if (time) {
        r.sort(sortByTime);
      }
      series[i].data = r;
    }

    return series;
  }

  function processSimple(data) {
    var perfectData = toArr(data), i;
    for (i = 0; i < perfectData.length; i++) {
      perfectData[i] = [toStr(perfectData[i][0]), toFloat(perfectData[i][1])];
    }
    return perfectData;
  }

  function processLineData(chart) {
    chart.data = processSeries(chart.data, chart.options, true);
    renderChart("Line", chart);
  }

  function processColumnData(chart) {
    chart.data = processSeries(chart.data, chart.options, false);
    renderChart("Column", chart);
  }

  function processPieData(chart) {
    chart.data = processSimple(chart.data);
    renderChart("Pie", chart);
  }

  function processBarData(chart) {
    chart.data = processSeries(chart.data, chart.options, false);
    renderChart("Bar", chart);
  }

  function processAreaData(chart) {
    chart.data = processSeries(chart.data, chart.options, true);
    renderChart("Area", chart);
  }

  function processGeoData(chart) {
    chart.data = processSimple(chart.data);
    renderChart("Geo", chart);
  }

  function setElement(chart, element, dataSource, opts, callback) {
    if (typeof element === "string") {
      element = document.getElementById(element);
    }
    chart.element = element;
    chart.options = opts || {};
    chart.dataSource = dataSource;
    Chartkick.charts[element.id] = chart;
    fetchDataSource(chart, callback);
  }

  // define classes

  Chartkick = {
    LineChart: function (element, dataSource, opts) {
      setElement(this, element, dataSource, opts, processLineData);
    },
    PieChart: function (element, dataSource, opts) {
      setElement(this, element, dataSource, opts, processPieData);
    },
    ColumnChart: function (element, dataSource, opts) {
      setElement(this, element, dataSource, opts, processColumnData);
    },
    BarChart: function (element, dataSource, opts) {
      setElement(this, element, dataSource, opts, processBarData);
    },
    AreaChart: function (element, dataSource, opts) {
      setElement(this, element, dataSource, opts, processAreaData);
    },
    GeoChart: function (element, dataSource, opts) {
      setElement(this, element, dataSource, opts, processGeoData);
    },
    charts: {}
  };

  window.Chartkick = Chartkick;
}(window));
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//









;
