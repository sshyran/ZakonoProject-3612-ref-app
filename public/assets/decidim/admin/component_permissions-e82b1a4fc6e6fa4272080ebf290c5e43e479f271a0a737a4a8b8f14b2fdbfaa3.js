"use strict";function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function e(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(r,n,t){return n&&e(r.prototype,n),t&&e(r,t),r}}();!function(e){var r=function(){function e(){var r=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];_classCallCheck(this,e),this.controllerSelect=r.controllerSelect,this.subformWrapperClass=r.subformWrapperClass,this.globalWrapperSelector=r.globalWrapperSelector,this._bindEvent(),this._runAll()}return _createClass(e,[{key:"_runAll",value:function(){var e=this;this.controllerSelect.each(function(r,n){e.run(n)})}},{key:"run",value:function(e){var r=$(e),n=this.subformWrapperClass,t=r.val(),a=r.parents(this.globalWrapperSelector).find("."+n),l=a.filter("#"+n+"-"+t);a.find("input,textarea").prop("disabled",!0),a.hide(),l.find("input,textarea").prop("disabled",!1),l.show()}},{key:"_bindEvent",value:function(){var e=this;this.controllerSelect.on("change",function(r){e.run(r.target)})}}]),e}();e.DecidimAdmin=e.DecidimAdmin||{},e.DecidimAdmin.SubformTogglerComponent=r}(window),new(0,window.DecidimAdmin.SubformTogglerComponent)({controllerSelect:$("select[name$=\\[authorization_handler_name\\]]"),subformWrapperClass:"authorization-handler",globalWrapperSelector:"fieldset"}).run();