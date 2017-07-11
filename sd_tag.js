function AdobeEverestTech__Tracking_Pixel() {
	/* Adobe EverestTech Tag
		Activity:      Traffic
		Creation Date: 03/16/2017
	*/
	var AdobeEverestTech__Tracking_Pixel = new Image(1, 1);
	AdobeEverestTech__Tracking_Pixel.src="http://pixel.everesttech.net/px2/4507?px_evt=t&ev_" + digitalData.page.pageInfo.pageName+"=1";
	document.body.appendChild(AdobeEverestTech__Tracking_Pixel);
}



function DoubleClick__Tracking_Pixel() {
	/* DoubleClick Floodlight Tag 
		Activity:      Traffic
		Creation Date: 03/16/2017
	*/
	// <script type="text/javascript" id="DoubleClickSpotlightTag3248448">
	//<![CDATA[
	var axel = Math.random() + "";
	var a = axel * 10000000000000;
	//
	//
	// var newImg=document.createElement("img");
	var DoubleClick__Tracking_Pixel = new Image(1,1);
	DoubleClick__Tracking_Pixel.src = "https://ad.doubleclick.net/ddm/activity/src=4396110;type=traffic;cat=traffic;"+
		"u1="+digitalData.page.pageInfo.vehicleBrand+";"+
		"u2="+digitalData.page.pageInfo.vehicleBrand+";"+
		"u3="+digitalData.page.pageInfo.vehicleModel+";"+
		"u4="+digitalData.page.pageInfo.vehicleModel+";"+
		"dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + a + "?";
		newImg.alt="";
		newImg.height="1";
	//
	//
	// var scriptNode=document.getElementById("DoubleClickSpotlightTag3248448");
	// scriptNode.parentNode.insertBefore(newImg,scriptNode);
	document.body.appendChild(DoubleClick__Tracking_Pixel);
	//]]>
	// </script>
	// <noscript>
	// 	<p>
	// 		<img src="https://ad.doubleclick.net/ddm/activity/src=4396110;type=traffic;cat=traffic;u1=[brand];u2=[make];u3=[model];u4=[dealer];dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?" width="1" height="1" alt=""/>
	// 	</p>
	// </noscript>

	/* End of DoubleClick Floodlight Tag: Please do not remove */
}






<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion_async.js"></script>
function GoogleAdwords__Conversion() {
	/* Google Adwords Form Submission Tags 
		Activity: 		Traffic
		Creation Date:  00/00/2000
	*/
	// <script type="text/javascript">
	/* <![CDATA[ */
	goog_snippet_vars = function() {
		var w = window;
		w.google_conversion_id = 982778857;
		w.google_conversion_label = "PU5ZCJeU7QcQ6YfQ1AM";
		w.google_remarketing_only = false;
	}
	// DO NOT CHANGE THE CODE BELOW.
	goog_report_conversion = function(url) {
		goog_snippet_vars();
		window.google_conversion_format = "3";
		var opt = new Object();
		opt.onload_callback = function() {
			if (typeof(url) != "undefined") {
				window.location = url;
			}
		}
		var conv_handler = window["google_trackConversion"];
		if (typeof(conv_handler) == "function") {
			conv_handler(opt);
		}
	}
	/* ]]> */
	//</script>
}




function DoubleClick__Conversion() {
	/* TAG CODE 
		Start:         Please do not remove
		Activity:      Lead Form Conversion
		Creation Date: 03/16/2017
	*/
	// <script>
	var AdobeEverestTech__Lead_Form = new Image(1, 1);
	var AdobeEverestTech__Lead_Form="https://ad.doubleclick.net/ddm/activity/src=4396110;type=forms;cat=leadform;qty=1;"+
		"cost="+[Revenue]+";"+
		"u1="+ digitalData.page.pageInfo.vehicleBrand   +";"+
		"u2="+ digitalData.page.pageInfo.vehicleBrand   +";"+
		"u3="+ digitalData.page.pageInfo.vehicleModel   +";"+
		"u4="+ digitalData.page.pageInfo.dealershipName +";"+
		"u5="+ [program_type]+";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;"+
		"ord="+[OrderID]+"?";
	document.body.appendChild(AdobeEverestTech__Lead_Form);
	//</script>
}


