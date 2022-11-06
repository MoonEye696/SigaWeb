"use strict";var __assign=this&&this.__assign||function(){return(__assign=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,s,o,u){return new(o=o||Promise)(function(r,t){function n(e){try{a(u.next(e))}catch(e){t(e)}}function i(e){try{a(u.throw(e))}catch(e){t(e)}}function a(e){var t;e.done?r(e.value):((t=e.value)instanceof o?t:new o(function(e){e(t)})).then(n,i)}a((u=u.apply(e,s||[])).next())})},__generator=this&&this.__generator||function(n,i){var a,s,o,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(r){return function(e){var t=[r,e];if(a)throw new TypeError("Generator is already executing.");for(;u;)try{if(a=1,s&&(o=2&t[0]?s.return:t[0]?s.throw||((o=s.return)&&o.call(s),0):s.next)&&!(o=o.call(s,t[1])).done)return o;switch(s=0,(t=o?[2&t[0],o.value]:t)[0]){case 0:case 1:o=t;break;case 4:return u.label++,{value:t[1],done:!1};case 5:u.label++,s=t[1],t=[0];continue;case 7:t=u.ops.pop(),u.trys.pop();continue;default:if(!(o=0<(o=u.trys).length&&o[o.length-1])&&(6===t[0]||2===t[0])){u=0;continue}if(3===t[0]&&(!o||t[1]>o[0]&&t[1]<o[3])){u.label=t[1];break}if(6===t[0]&&u.label<o[1]){u.label=o[1],o=t;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(t);break}o[2]&&u.ops.pop(),u.trys.pop();continue}t=i.call(n,u)}catch(e){t=[6,e],s=0}finally{a=o=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}}},path=(Object.defineProperty(exports,"__esModule",{value:!0}),exports.add=exports.getAll=void 0,require("path")),fs=require("fs-extra"),utils_1=(require("../../../global"),require("../../utils"));function getAll(r,n){return __awaiter(this,void 0,void 0,function(){var t;return __generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,3]),r.type="json",[4,getSigninInfos()];case 1:return t=e.sent(),r.body=JSON.stringify(t),[3,3];case 2:return t=e.sent(),console.error(t),r.body=t,[3,3];case 3:return[4,n()];case 4:return e.sent(),[2]}})})}function add(i,a){return __awaiter(this,void 0,void 0,function(){var t,r,n;return __generator(this,function(e){switch(e.label){case 0:return e.trys.push([0,4,,5]),i.type="json",t=getSigninInfoFilePath(),[4,getSigninInfos()];case 1:return n=e.sent(),r=i.request.body,n.some(function(e){return!!isSamePortalUrl(e.portalUrl,r.portalUrl)&&(Object.assign(e,__assign({},r)),!0)})||n.push(r),[4,fs.outputFile(t,JSON.stringify(n,null,2),"utf-8")];case 2:return e.sent(),[4,updateBuilderSetting(r)];case 3:return e.sent(),i.body=i.request.body,[3,5];case 4:return n=e.sent(),console.error(n),i.body=n,[3,5];case 5:return[4,a()];case 6:return e.sent(),[2]}})})}function getSigninInfos(){return __awaiter(this,void 0,void 0,function(){var t,r,n,i;return __generator(this,function(e){switch(e.label){case 0:return(r=getSigninInfoFilePath(),fs.existsSync(r))?(i=(n=JSON).parse,[4,fs.readFile(r,"utf-8")]):[3,2];case 1:return t=i.apply(n,[e.sent()]),[3,3];case 2:t=[],e.label=3;case 3:return[2,t]}})})}function getSigninInfoFilePath(){return path.join(__dirname,"../../../../public/signin-info.json")}function updateBuilderSetting(a){return __awaiter(this,void 0,void 0,function(){var t,r,n,i;return __generator(this,function(e){switch(e.label){case 0:return t=(0,utils_1.getBuilderSettingFilePath)(),i=(n=JSON).parse,[4,fs.readFile(t,"utf-8")];case 1:return(r=i.apply(n,[e.sent()])).devEnv[global.hostEnv]={portalUrl:a.portalUrl,clientId:a.clientId,isWebTier:a.isWebTier},[4,fs.outputFile(t,JSON.stringify(r,null,2),"utf-8")];case 2:return e.sent(),[2]}})})}function isSamePortalUrl(e,t){var r=/^http(s?):\/\//gi;return e.replace(r,"")===t.replace(r,"")}exports.getAll=getAll,exports.add=add;