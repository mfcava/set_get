//
//
//
var digitalData = {
  "page": {
    "category": {
      "pageType":       "multi:it:splashpage",
      "primaryCategory":"multi:it:splashpage",
      "subCategory1": 	"multi:it:splashpage",
      "subCategory2": 	"multi:it:splashpage",
      "subCategory": 	"splashpage"
    },
    "attributes": {
      "platform": {
        "device": "desktop"
      }
    },
    "component": {
      "form": {
        "leadType": "",
        "nameType": "",
        "stepName": ""
      },
      "inventorySearch": {
        "filterList": "",
        "searchType": ""
      },
      "configurator": {
        "engine": ""
      }
    },
    "pageInfo": {
      "countryCode": 		"it",
      "language": 			"it",
      "pageName": 			"multi:it:splashpage",
      "vehicleBrand": 		"multi",
      "dealershipName": 	"BOSSONI",
      "dealerID": 			"0063426.013.00001578",
      "siteType": 			"dealer website",
      "assetOwner": 		"dealer",
      "vehicleModel": 		"",
      "usedvehicleBrand": 	"",
      "usedvehicleModel": 	"",
      "dealervehicleBrand": "",
      "vehicleTrim": 		"",
      "vehicleID": 			"",
      "vehicleType": 		"",
      "discountedPrice": 	"",
      "mktgCampaignID": 	"",
      "offerIncentiveID": 	"",
      "businessArea": 		"",
      "tabName": 			"",
      "url": 				"https://aemstagems-www.master-it.fcagroup.it/concessionario",
      "referrer": 			"",
      "visitorID": 			"46847735547288667941067261370079830893"
    },
    "product": {
      "productInfo": {
        "productId": ""
      }
    },
    "service": {
      "pack": ""
    }
  }
}



//
//
//
//
//
//
//
//
function AdobeEverestTech__Tracking_Pixel(pageName) {
	/* Adobe EverestTech Tag
		Activity:      Traffic
		Creation Date: 03/16/2017
	*/
  if ( ( typeof(pageName) != "undefined" ) ) {
		var AdobeEverestTech__Tracking_Pixel = new Image(1, 1);
		    AdobeEverestTech__Tracking_Pixel.src="//pixel.everesttech.net/px2/4507__?px_evt=t&ev_" + pageName +"=1";
		console.log("Fire AdobeEverestTech__Tracking_Pixel: "+"//pixel.everesttech.net/px2/4507__?px_evt=t&ev_" + pageName +"=1")
		document.body.appendChild(AdobeEverestTech__Tracking_Pixel);
	} else {
  		console.log("Fire AdobeEverestTech__Tracking_Pixel: missing parameter");
  }
}

function DoubleClick__Tracking_Pixel(vehicleBrand,vehicleModel,dealerID) {
    if (( typeof(vehicleBrand) != "undefined" ) && ( typeof(vehicleModel) != "undefined" ) &&
        ( typeof(dealerID) != "undefined" )  ) {
        //
	    var axel = Math.random() + "";
	    var a = axel * 10000000000000;
	    var DoubleClick__Tracking_Pixel = new Image(1,1);
	    DoubleClick__Tracking_Pixel.src = "//ad.doubleclick.net/ddm/activity/src=4396110;type=traffic;cat=traffic;"+
            "u1="+vehicleBrand+";"+
            "u2="+vehicleBrand+";"+
            "u3="+vehicleModel+";"+
            "u4="+dealerID+";"+
    		"dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + a + "?";
	    DoubleClick__Tracking_Pixel.alt="";
	    DoubleClick__Tracking_Pixel.height="1";
        //
        console.log("Fire DoubleClick__Tracking_Pixel: "+
            "//ad.doubleclick.net/ddm/activity/src=4396110;type=traffic;cat=traffic;" +
            "u1="+vehicleBrand+";"+
            "u2="+vehicleBrand+";"+
            "u3="+vehicleModel+";"+
            "u4="+dealerID+";"+
            "dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + a + "?");
	    document.body.appendChild(DoubleClick__Tracking_Pixel);
    }
}

function GoogleAdwords__Conversion() {
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

  console.log("Fire GoogleAdwords__Conversion: //www.googleadservices.com/pagead/conversion_async.js")
  var jsElm = document.createElement("script");
	jsElm.type = "application/javascript";
	jsElm.src = "//www.googleadservices.com/pagead/conversion_async.js";
	document.body.appendChild(jsElm);
}

function DoubleClick__Conversion(vehicleBrand, vehicleModel, dealershipName, program_type, OrderID, Revenue) {
	/* TAG CODE
		Start:         Please do not remove
		Activity:      Lead Form Conversion
		Creation Date: 03/16/2017
	*/
	// <script>
  if ( ( typeof(vehicleBrand) != "undefined" )   && ( typeof(vehicleModel) != "undefined" ) &&
  	   ( typeof(dealershipName) != "undefined" ) && ( typeof(OrderID) != "undefined" ) ) {
		var AdobeEverestTech__Lead_Form = new Image(1,1);
		AdobeEverestTech__Lead_Form.src = "//ad.doubleclick.net/ddm/activity/src=4396110;type=forms;cat=leadform;qty=1;"+
			"cost="+Revenue+";"+
			"u1="+ vehicleBrand   +";"+
			"u2="+ vehicleBrand   +";"+
			"u3="+ vehicleModel   +";"+
			"u4="+ dealershipName +";"+
			"u5="+ program_type+";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;"+
			"ord="+OrderID+"?";

  	console.log("Fired DoubleClick__Conversion");
		document.body.appendChild(AdobeEverestTech__Lead_Form);
	} else {
  	console.log("Fire DoubleClick__Conversion: missing parameters.\n"+
    	"cost="+Revenue+"\n"+
			"u1="+ vehicleBrand   +"\n"+
			"u2="+ vehicleBrand   +"\n"+
			"u3="+ vehicleModel   +"\n"+
			"u4="+ dealershipName +"\n"+
			"u5="+ program_type+"\n"+
			"ord="+OrderID+"\n");
  }
}

function sd_tracking_tags() {
    var pn = digitalData.page.pageInfo.pageName;
    var vb = digitalData.page.pageInfo.vehicleBrand;
    var vm = digitalData.page.pageInfo.vehicleModel;
    var di = digitalData.page.pageInfo.dealerID;

    AdobeEverestTech__Tracking_Pixel( pn );
    DoubleClick__Tracking_Pixel( vb, vm, di );
    //
    //
    //
    if ( (typeof(digitalData.page.pageInfo.pageName)  == "undefined") || ( digitalData.page.pageInfo.vehicleModel  == "" ) ) {
        digitalData.page.pageInfo.watch("pageName", function (id, oldval, newval) {
            console.log("pageName." + id + " changed from: '" + oldval + "' to '" + newval + "'");
            pn = newval;
            AdobeEverestTech__Tracking_Pixel( pn );
            return newval;
        });
    }

    if ((typeof(digitalData.page.pageInfo.vehicleBrand)  == "undefined") || ( digitalData.page.pageInfo.vehicleModel  == "" )) {
        digitalData.page.pageInfo.watch("vehicleBrand", function (id, oldval, newval) {
            console.log("vehicleModel." + id + " changed from: '" + oldval + "' to '" + newval + "'");
            vb = newval
            DoubleClick__Tracking_Pixel( vb, vm, di );
            return newval;
          });
      }

    if ((typeof(digitalData.page.pageInfo.vehicleModel)  == "undefined") || ( digitalData.page.pageInfo.vehicleModel  == "" )) {
        digitalData.page.pageInfo.watch("vehicleModel", function (id, oldval, newval) {
            console.log("vehicleModel." + id + " changed from: '" + oldval + "' to '" + newval + "'");
            vm = newval;
            DoubleClick__Tracking_Pixel( vb, vm, di );
        return newval;
        });
    }


    if ((typeof(digitalData.page.pageInfo.dealerID)  == "undefined") || ( digitalData.page.pageInfo.dealerID  == "" )) {
        digitalData.page.pageInfo.watch("dealerID", function (id, oldval, newval) {
            console.log("dealerID." + id + " changed from: '" + oldval + "' to '" + newval + "'");
            di = newval;
            DoubleClick__Tracking_Pixel( vb, vb, di );
        return newval;
        });
    }


    if ((typeof(digitalData.page.pageInfo.transactionID)  == "undefined") || ( digitalData.page.pageInfo.transactionID  == "" )) {
        digitalData.page.pageInfo.watch("transactionID", function (id, oldval, newval) {
            console.log("transactionID." + id + " changed from: '" + oldval + "' to '" + newval + "'");
            DoubleClick__Conversion( digitalData.page.pageInfo.vehicleBrand, digitalData.page.pageInfo.vehicleModel, digitalData.page.pageInfo.dealerID, "XXX", newval, 100 );
        return newval;
        });
    }
}

function sd_conversion_tags() {
    var vb = digitalData.page.pageInfo.vehicleBrand;
    var vm = digitalData.page.pageInfo.vehicleModel;
    var di = digitalData.page.pageInfo.dealerID;
    var pt = "DDA"
    var oi = digitalData.page.pageInfo.transactionID;
    var rv = 1;
    GoogleAdwords__Conversion();
    DoubleClick__Conversion( vb, vm, di, pt, oi, rv );
    //
    //
    //
    if ((typeof(digitalData.page.pageInfo.vehicleBrand)  == "undefined") || ( digitalData.page.pageInfo.vehicleModel  == "" )) {
        digitalData.page.pageInfo.watch("vehicleBrand", function (id, oldval, newval) {
            console.log("vehicleModel." + id + " changed from: '" + oldval + "' to '" + newval + "'");
            DoubleClick__Conversion( newval, vm, di, pt, oi, rv );
            return newval;
        });
      }

    if ((typeof(digitalData.page.pageInfo.vehicleModel)  == "undefined") || ( digitalData.page.pageInfo.vehicleModel  == "" )) {
        digitalData.page.pageInfo.watch("vehicleModel", function (id, oldval, newval) {
            console.log("vehicleModel." + id + " changed from: '" + oldval + "' to '" + newval + "'");
            DoubleClick__Conversion( vb, newval, di, pt, oi, rv );
            return newval;
        });
    }


    if ((typeof(digitalData.page.pageInfo.dealerID)  == "undefined") || ( digitalData.page.pageInfo.dealerID  == "" )) {
        digitalData.page.pageInfo.watch("dealerID", function (id, oldval, newval) {
            console.log("dealerID." + id + " changed from: '" + oldval + "' to '" + newval + "'");
            DoubleClick__Conversion( vb, vm, newval, pt, oi, rv );
            return newval;
        });
    }


    if ((typeof(digitalData.page.pageInfo.transactionID)  == "undefined") || ( digitalData.page.pageInfo.transactionID  == "" )) {
        digitalData.page.pageInfo.watch("transactionID", function (id, oldval, newval) {
            console.log("transactionID." + id + " changed from: '" + oldval + "' to '" + newval + "'");
            DoubleClick__Conversion( vb, vm, di, pt, newval, rv );
            return newval;
        });
    }
}
//
//
//


sd_tracking_tags();
sd_conversion_tags();


digitalData.page.pageInfo.transactionID = "12345678900000";









// console.log("ORIGINAL DATA: "+digitalData.page.pageInfo.countryCode);
// digitalData.page.pageInfo.countryCode = "UK";
// digitalData.page.pageInfo.countryCode = "DE";

// Dopo il delete della variabile la funzione watch viene distrutta.
// digitalData.pageInfo.countryCode
// digitalData.pageInfo.countryCode = "DE";

// Oppure si utilizza il metodo unwatch()
// digitalData.unwatch('p');
// digitalData.pageInfo.countryCode = "FR";
