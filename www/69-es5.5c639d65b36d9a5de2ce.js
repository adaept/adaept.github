function asyncGeneratorStep(t,e,r,n,o,i,s){try{var l=t[i](s),a=l.value}catch(c){return void r(c)}l.done?e(a):Promise.resolve(a).then(n,o)}function _asyncToGenerator(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var i=t.apply(e,r);function s(t){asyncGeneratorStep(i,n,o,s,l,"next",t)}function l(t){asyncGeneratorStep(i,n,o,s,l,"throw",t)}s(void 0)})}}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{IdzL:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_reorder",function(){return i}),r.d(e,"ion_reorder_group",function(){return s});var n=r("sWJ8"),o=(r("AfW+"),r("opz7")),i=function(){function t(t){Object(n.l)(this,t)}var e=t.prototype;return e.onClick=function(t){t.preventDefault(),t.stopImmediatePropagation()},e.render=function(){return Object(n.i)(n.a,{class:Object(n.e)(this)},Object(n.i)("slot",null,Object(n.i)("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"})))},_createClass(t,null,[{key:"style",get:function(){return":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px;font-size:34px;opacity:.4}"}}]),t}(),s=function(){function t(t){Object(n.l)(this,t),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0,this.ionItemReorder=Object(n.d)(this,"ionItemReorder",7)}var e=t.prototype;return e.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.connectedCallback=function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e,n=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.el.closest("ion-content"),t.t0=e,!t.t0){t.next=6;break}return t.next=5,e.getScrollElement();case 5:this.scrollEl=t.sent;case 6:return t.next=8,Promise.resolve().then(r.bind(null,"mUkt"));case 8:t.t1={el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(t){return n.canStart(t)},onStart:function(t){return n.onStart(t)},onMove:function(t){return n.onMove(t)},onEnd:function(){return n.onEnd()}},this.gesture=t.sent.createGesture(t.t1),this.disabledChanged();case 11:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),e.disconnectedCallback=function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},e.complete=function(t){return Promise.resolve(this.completeSync(t))},e.canStart=function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=a(e,this.el);return!!r&&(t.data=r,!0)},e.onStart=function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var n=this.el,i=n.children;if(i&&0!==i.length){for(var s=0,a=0;a<i.length;a++){var h=i[a];r.push(s+=h.offsetHeight),h.$ionIndex=a}var d=n.getBoundingClientRect();if(this.containerTop=d.top,this.containerBottom=d.bottom,this.scrollEl){var f=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=f.top+c,this.scrollElBottom=f.bottom-c}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=l(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(u),Object(o.a)()}},e.onMove=function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),n=this.containerTop-r,i=Math.max(n,Math.min(t.currentY,this.containerBottom-r)),s=r+i-t.startY,a=this.itemIndexForTop(i-n);if(a!==this.lastToIndex){var c=l(e);this.lastToIndex=a,Object(o.b)(),this.reorderMove(c,a)}e.style.transform="translateY("+s+"px)"}},e.onEnd=function(){var t=this.selectedItemEl;if(this.state=2,t){var e=this.lastToIndex,r=l(t);e===r?this.completeSync():this.ionItemReorder.emit({from:r,to:e,complete:this.completeSync.bind(this)}),Object(o.c)()}else this.state=0},e.completeSync=function(t){var e=this.selectedItemEl;if(e&&2===this.state){var r=this.el.children,n=r.length,o=this.lastToIndex,i=l(e);o===i||t&&!0!==t||this.el.insertBefore(e,i<o?r[o+1]:r[o]),Array.isArray(t)&&(t=d(t,i,o));for(var s=0;s<n;s++)r[s].style.transform="";e.style.transition="",e.classList.remove(u),this.selectedItemEl=void 0,this.state=0}return t},e.itemIndexForTop=function(t){var e=this.cachedHeights,r=0;for(r=0;r<e.length&&!(e[r]>t);r++);return r},e.reorderMove=function(t,e){for(var r=this.selectedItemHeight,n=this.el.children,o=0;o<n.length;o++){var i="";o>t&&o<=e?i="translateY("+-r+"px)":o<t&&o>=e&&(i="translateY("+r+"px)"),n[o].style.transform=i}},e.autoscroll=function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-h:t>this.scrollElBottom&&(e=h),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial},e.render=function(){var t,e=Object(n.e)(this);return Object(n.i)(n.a,{class:(t={},t[e]=!0,t["reorder-enabled"]=!this.disabled,t["reorder-list-active"]=0!==this.state,t)})},_createClass(t,[{key:"el",get:function(){return Object(n.f)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}},{key:"style",get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translateZ(0);transform:translateZ(0)}"}}]),t}(),l=function(t){return t.$ionIndex},a=function(t,e){for(var r;t;){if((r=t.parentElement)===e)return t;t=r}},c=60,h=10,u="reorder-selected",d=function(t,e,r){var n=t[e];return t.splice(e,1),t.splice(r,0,n),t.slice()}}}]);