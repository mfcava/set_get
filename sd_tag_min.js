function AdobeEverestTech__Tracking_Pixel(o){if(void 0!==o&&""!=o){var e=new Image(1,1);e.src="//pixel.everesttech.net/px2/4507?px_evt=t&ev_"+o+"=1",console.log("%c AdobeEverestTech__Tracking_Pixel Fired!",log_debug_color),document.body.appendChild(e)}else console.log("%c Fire AdobeEverestTech__Tracking_Pixel: missing parameter",log_debug_error)}function DoubleClick__Tracking_Pixel(o,e,n){if(void 0!==o&&void 0!==e&&void 0!==n&&""!=o&&""!=e&&""!=n){var a=1e13*(Math.random()+""),i=new Image(1,1);i.src="//ad.doubleclick.net/ddm/activity/src=4396110;type=traffic;cat=traffic;u1="+o+";u2="+o+";u3="+e+";u4="+n+";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord="+a+"?",i.alt="",i.height="1",console.log("%c DoubleClick__Tracking_Pixel Fired!",log_debug_color),document.body.appendChild(i)}else console.log("%c DoubleClick__Tracking_Pixel: missing parameter: \n//ad.doubleclick.net/ddm/activity/src=4396110;type=traffic;cat=traffic;u1="+o+";u2="+o+";u3="+e+";u4="+n+";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord="+a+"?",log_debug_error)}function GoogleAdwords__Conversion(){goog_snippet_vars=function(){var o=window;o.google_conversion_id=982778857,o.google_conversion_label="PU5ZCJeU7QcQ6YfQ1AM",o.google_remarketing_only=!1},goog_report_conversion=function(o){goog_snippet_vars(),window.google_conversion_format="3";var e=new Object;e.onload_callback=function(){void 0!==o&&(window.location=o)};var n=window.google_trackConversion;"function"==typeof n&&n(e)},console.log("%c GoogleAdwords__Conversion Fired!",log_debug_color);var o=document.createElement("script");o.type="application/javascript",o.src="//www.googleadservices.com/pagead/conversion_async.js",document.body.appendChild(o)}function DoubleClick__Conversion(o,e,n,a,i,g){if(void 0!==o&&void 0!==e&&void 0!==n&&void 0!==i&&""!=o&&""!=e&&""!=n&&""!=i){var t=new Image(1,1);t.src="//ad.doubleclick.net/ddm/activity/src=4396110;type=forms;cat=leadform;qty=1;cost="+g+";u1="+o+";u2="+o+";u3="+e+";u4="+n+";u5="+a+";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord="+i+"?",console.log("%c DoubleClick__Conversion Fired!",log_debug_color),document.body.appendChild(t)}else console.log("%c Fire DoubleClick__Conversion: missing parameters.\ncost="+g+"\nu1="+o+"\nu2="+o+"\nu3="+e+"\nu4="+n+"\nu5="+a+"\nord="+i+"\n",log_debug_error)}function sd_tracking_tags(){pn_onChangeFn.push(function(){AdobeEverestTech__Tracking_Pixel(pn)}),vb_onChangeFn.push(function(){DoubleClick__Tracking_Pixel(vb,vm,di)}),vm_onChangeFn.push(function(){DoubleClick__Tracking_Pixel(vb,vm,di)}),di_onChangeFn.push(function(){DoubleClick__Tracking_Pixel(vb,vm,di)}),AdobeEverestTech__Tracking_Pixel(pn),DoubleClick__Tracking_Pixel(vb,vm,di)}function sd_conversion_tags(){vb_onChangeFn.push(function(){DoubleClick__Conversion(vb,vm,di,pt,oi,rv)}),vm_onChangeFn.push(function(){DoubleClick__Conversion(vb,vm,di,pt,oi,rv)}),di_onChangeFn.push(function(){DoubleClick__Conversion(vb,vm,di,pt,oi,rv)}),oi_onChangeFn.push(function(){DoubleClick__Conversion(vb,vm,di,pt,oi,rv)}),GoogleAdwords__Conversion(),DoubleClick__Conversion(vb,vm,di,pt,oi,rv)}var log_debug_color="color: CornflowerBlue",log_debug_error="color: red",pn=digitalData.page.pageInfo.pageName,vb=digitalData.page.pageInfo.vehicleBrand,vm=digitalData.page.pageInfo.vehicleModel,di=digitalData.page.pageInfo.dealerID,pt="DDA",oi=digitalData.page.pageInfo.transactionID,rv=1,pn_onChangeFn=[],vb_onChangeFn=[],vm_onChangeFn=[],di_onChangeFn=[],oi_onChangeFn=[];void 0!==digitalData.page.pageInfo.pageName&&""!=digitalData.page.pageInfo.vehicleModel||digitalData.page.pageInfo.watch("pageName",function(o,e,n){console.log("%c digitalData.page.pageInfo."+o+" changed from: '"+e+"' to '"+n+"'",log_debug_color),pn=n;for(var a=0;a<pn_onChangeFn.length;a++)pn_onChangeFn[a]();return n}),void 0!==digitalData.page.pageInfo.vehicleBrand&&""!=digitalData.page.pageInfo.vehicleModel||digitalData.page.pageInfo.watch("vehicleBrand",function(o,e,n){console.log("%c digitalData.page.pageInfo."+o+" changed from: '"+e+"' to '"+n+"'",log_debug_color),vb=n;for(var a=0;a<vb_onChangeFn.length;a++)vb_onChangeFn[a]();return n}),void 0!==digitalData.page.pageInfo.vehicleModel&&""!=digitalData.page.pageInfo.vehicleModel||digitalData.page.pageInfo.watch("vehicleModel",function(o,e,n){console.log("%c digitalData.page.pageInfo."+o+" changed from: '"+e+"' to '"+n+"'",log_debug_color),vm=n;for(var a=0;a<vm_onChangeFn.length;a++)vm_onChangeFn[a]();return n}),void 0!==digitalData.page.pageInfo.dealerID&&""!=digitalData.page.pageInfo.dealerID||digitalData.page.pageInfo.watch("dealerID",function(o,e,n){console.log("%c digitalData.page.pageInfo."+o+" changed from: '"+e+"' to '"+n+"'",log_debug_color),di=n;for(var a=0;a<di_onChangeFn.length;a++)di_onChangeFn[a]();return n}),void 0!==digitalData.page.pageInfo.transactionID&&""!=digitalData.page.pageInfo.transactionID||digitalData.page.pageInfo.watch("transactionID",function(o,e,n){console.log("%c digitalData.page.pageInfo."+o+" changed from: '"+e+"' to '"+n+"'",log_debug_color),oi=n;for(var a=0;a<oi_onChangeFn.length;a++)oi_onChangeFn[a]();return n});
