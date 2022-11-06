"use strict";var __awaiter=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{u(n.next(e))}catch(e){o(e)}}function s(e){try{u(n.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!((i=(i=a.trys).length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.ReportTemplatesManager=void 0;var ArcGISClient_1=require("./ArcGISClient"),GEClient_1=require("./GEClient"),WebAppSettings_1=require("./WebAppSettings"),SettingsHelper_1=require("./SettingsHelper"),ReportTemplatesManager=function(){function e(){}return e._condenseResultsArray=function(e){return e.map((function(e){return{id:e.id,title:e.title}}))},e.getDefaultHierarchy=function(e){return new Promise((function(t,r){GEClient_1.GEClient.execute({taskPath:"/Geoenrichment/Countries/"+e}).then((function(e){for(var n,i=0;i<e.countries[0].hierarchies.length;i++){var o=e.countries[0].hierarchies[i];if(o.default){n=o.ID.toString();break}}n?t(n):r()})).catch(r)}))},e.getReportTemplates=function(t,r){return void 0===r&&(r=!1),new Promise((function(n,i){var o={ge:void 0,shared:void 0,user:void 0,favoriteIds:void 0};ArcGISClient_1.ArcGISClient.executeSelf().then((function(a){var s=a.user.username;Promise.allSettled([e._getSharedCustomReportTemplateItems(s),e._getMyCustomReportTemplateItems(s),e._getFavoriteReportsIds(s,t)]).then((function(a){o.ge=a[0].value?a[0].value:[],o.shared=e._createReportTemplateInfos(a[1]&&a[1].value?a[1].value:[],t),o.user=e._createReportTemplateInfos(a[2]&&a[2].value?a[2].value:[],t),o.favoriteIds=a[3]&&a[3].value?a[3].value:[],WebAppSettings_1.WebAppSettings.getDisabledReports().then((function(t){var i=o.ge,a=o.shared;null!=i&&(o.ge=i.filter((function(e){return!t[e.reportID]})),null!=a&&(o.shared=a.filter((function(e){return!t[e.reportID.itemid]})))),r||(o.ge=e._condenseResultsArray(o.ge),o.shared=e._condenseResultsArray(o.shared),o.user=e._condenseResultsArray(o.user),o.favoriteIds=e._condenseResultsArray(o.favoriteIds)),n(o)})).catch((function(e){return i(e)}))}))})).catch((function(e){return i(e)}))}))},e._getGEReportTemplates=function(t){return new Promise((function(r,n){var i=e._geReportTemplatesCache[t];i?r(i):GEClient_1.GEClient.execute({taskPath:"/GeoEnrichment/Reports/"+t}).then((function(n){var i=n.reports;e._geReportTemplatesCache[t]=i,r(i)})).catch(n)}))},e._getSharedCustomReportTemplateItems=function(t){var r='type:"Report Template" (access:shared OR access:org) typekeywords:(esriWebReport NOT esriWebInfographicReport) NOT owner:'+t;return e._searchItems(r,e._removeInfographicTemplates)},e._getMyCustomReportTemplateItems=function(t){var r='type:"Report Template" typekeywords:(esriWebReport NOT esriWebInfographicReport) owner:'+t;return e._searchItems(r,e._removeInfographicTemplates)},e._removeInfographicTemplates=function(e){return!SettingsHelper_1.SettingsHelper.isTrueString(e.properties.isGraphicReport)},e.getInfographicReportTemplateItems=function(t,r){var n=this;return void 0===r&&(r=!1),new Promise((function(i,o){var a={public:void 0,shared:void 0,user:void 0,favoriteIds:void 0};ArcGISClient_1.ArcGISClient.executeSelf().then((function(s){var u=s.user.username,c=s.user.orgId;Promise.allSettled([e._getEsriInfographicReportTemplateItems(),e._getSharedInfographicReportTemplateItems(u,c),e._getUserInfographicReportTemplateItems(u),e._getFavoriteReportsIds(u,t)]).then((function(s){return __awaiter(n,void 0,void 0,(function(){var n,u,c,l,p,f,h;return __generator(this,(function(g){switch(g.label){case 0:return n=e._byCountry(t),a.public=s[0].value?s[0].value.filter(n):[],a.shared=s[1].value?s[1].value.filter(n):[],a.user=s[2].value?s[2].value.filter(n):[],a.favoriteIds=s[3].value?s[3].value:[],console.log(a),null!=(u=a.user)&&u.sort((function(e,t){return e.title.localeCompare(t.title)})),[4,e.getDefaultHierarchy(t)];case 1:return c=g.sent(),l=function(e){return e.properties.hierarchy===c},null!=(p=a.public)&&(a.public=p.filter(l)),null!=(f=a.shared)&&(a.shared=f.filter(l)),null!=(h=a.user)&&(a.user=h.filter(l)),console.log(a.public),WebAppSettings_1.WebAppSettings.getDisabledReports().then((function(t){var n=function(e){return!t[e.id]},o=a.public;null!=o&&(a.public=o.filter(n));var s=a.shared;null!=s&&(a.shared=s.filter(n)),r||(a.public=e._condenseResultsArray(a.public),a.shared=e._condenseResultsArray(a.shared),a.user=e._condenseResultsArray(a.user),a.favoriteIds=e._condenseResultsArray(a.favoriteIds)),i(a)})).catch((function(e){return o(e)})),[2]}}))}))}))})).catch((function(e){return o(e)}))}))},e._byCountry=function(e){return function(t){var r=t&&t.properties&&t.properties.countries.toLowerCase();return r&&r.indexOf(e.toLowerCase())>=0}},e._getEsriInfographicReportTemplateItems=function(){return e._searchItems('type:"Report Template" typekeywords:esriWebStandardInfographicReport owner:esri_reports',e._infographicFilter)},e._getSharedInfographicReportTemplateItems=function(t,r){var n='type:"Report Template" (access:shared OR access:org OR (access:public AND orgid:'+r+"))  typekeywords:esriWebInfographicReport  NOT owner:"+t;return e._searchItems(n,e._infographicFilter)},e._getUserInfographicReportTemplateItems=function(t){return new Promise((function(r,n){var i='type:"Report Template" typekeywords:esriWebInfographicReport  owner:'+t,o=e._searchItems(i,e._infographicFilter),a=e._getUserGalleryInfographicReportTemplateItems();Promise.allSettled([o,a]).then((function(e){var t=e[0].value?e[0].value:[],n=e[1].value?e[1].value:[];r(t.concat(n))}),(function(e){n(e)}))}))},e._getFavoriteReportsIds=function(t,r){return new Promise((function(n,i){var o='type:"Web Mapping Application" typekeywords:"BAUserData.FavoriteReports" owner:'+t;e._searchItems(o,null).then((function(e){var t=e&&e[0];t?ArcGISClient_1.ArcGISClient.getItemData(t.id).then((function(e){if(e){var t=e.data&&e.data["favorites"+r];if(t){var i=t.map((function(e){return e.reportID}));n(i)}else n([])}else n([])})).catch((function(e){return i(e)})):n([])})).catch((function(e){return i(e)}))}))},e._getUserGalleryInfographicReportTemplateItems=function(){return new Promise((function(t,r){WebAppSettings_1.WebAppSettings.getUserGalleryInfographicReportIds().then((function(n){if(n&&n.length){var i=n.map((function(e){return"id:"+e})).join(" OR ");e._searchItems(i,e._infographicFilter).then((function(e){t(e)})).catch((function(e){return r(e)}))}else t([])})).catch((function(e){return r(e)}))}))},e._searchItems=function(e,t){return new Promise((function(r,n){var i={start:1,num:1e3,sortField:"title",sortOrder:"asc",q:e};ArcGISClient_1.ArcGISClient.searchAllItems({},i).then((function(e){var n=t?e.filter(t):e;r(n)})).catch((function(e){return n(e)}))}))},e._createReportTemplateInfos=function(e,t){var r=[];return e.forEach((function(e){var n=e.properties;if(n){var i=n.countries;if(SettingsHelper_1.SettingsHelper.isTrueString(n.isComparisonReport))return;if(i&&-1!==i.indexOf(t)){var o={reportID:{itemid:e.id},formats:n.formats&&n.formats.split(","),headers:[],metadata:{author:n.author,categories:[],countries:i,coverage:n.coverage,hierarchy:n.hierarchy,keywords:n.keywords,owner:e.owner,title:e.title,type:n.type}};r.push(o)}}})),r},e._infographicFilter=function(e){var t=e.properties;return SettingsHelper_1.SettingsHelper.isTrueString(t.isGraphicReport)&&!SettingsHelper_1.SettingsHelper.isTrueString(t.isSingleInfographic)&&!SettingsHelper_1.SettingsHelper.isTrueString(t.isHidden)&&!SettingsHelper_1.SettingsHelper.isTrueString(t.isBlank)},e._geReportTemplatesCache={},e}();exports.ReportTemplatesManager=ReportTemplatesManager;