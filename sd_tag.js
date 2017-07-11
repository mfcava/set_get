//
//
//
//
//
//
const log_debug_color = "color: CornflowerBlue";
const log_debug_error = "color: red";

var pn = digitalData.page.pageInfo.pageName;
var vb = digitalData.page.pageInfo.vehicleBrand;
var vm = digitalData.page.pageInfo.vehicleModel;
var di = digitalData.page.pageInfo.dealerID;
var pt = "DDA"
var oi = digitalData.page.pageInfo.transactionID;
var rv = 1;


var pn_onChangeFn = [];
var vb_onChangeFn = [];
var vm_onChangeFn = [];
var di_onChangeFn = [];
var oi_onChangeFn = [];

function AdobeEverestTech__Tracking_Pixel(pageName) {
	/* Adobe EverestTech Tag
		Activity:      Traffic
		Creation Date: 03/16/2017
	*/
    if ( ( typeof(pageName) != "undefined" ) && ( pageName != "" ) ) {
	    var AdobeEverestTech__Tracking_Pixel = new Image(1, 1);
		AdobeEverestTech__Tracking_Pixel.src="//pixel.everesttech.net/px2/4507?px_evt=t&ev_" + pageName +"=1";
		console.log("%c AdobeEverestTech__Tracking_Pixel Fired!", log_debug_color);
		document.body.appendChild(AdobeEverestTech__Tracking_Pixel);
	} else {
  		console.log("%c Fire AdobeEverestTech__Tracking_Pixel: missing parameter", log_debug_error);
  }
}

function DoubleClick__Tracking_Pixel(vehicleBrand,vehicleModel,dealerID) {
    if (( typeof(vehicleBrand) != "undefined" ) && ( typeof(vehicleModel) != "undefined" ) &&
        ( typeof(dealerID) != "undefined" )     && ( vehicleBrand != "" ) &&
        ( vehicleModel != "" )                  && ( dealerID != "" ) ) {
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
        console.log("%c DoubleClick__Tracking_Pixel Fired!", log_debug_color);
	    document.body.appendChild(DoubleClick__Tracking_Pixel);
    } else {
  		console.log("%c DoubleClick__Tracking_Pixel: missing parameter: \n"+
            "//ad.doubleclick.net/ddm/activity/src=4396110;type=traffic;cat=traffic;" +
            "u1="+vehicleBrand+";"+
            "u2="+vehicleBrand+";"+
            "u3="+vehicleModel+";"+
            "u4="+dealerID+";"+
            "dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + a + "?", log_debug_error
        );
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

    console.log("%c GoogleAdwords__Conversion Fired!", log_debug_color);
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
    if (( typeof(vehicleBrand) != "undefined" )   && ( typeof(vehicleModel) != "undefined" ) &&
  	    ( typeof(dealershipName) != "undefined" ) && ( typeof(OrderID) != "undefined" ) &&
        ( vehicleBrand != "" )                    && ( vehicleModel != "" ) &&
        ( dealershipName != "" )                  && ( OrderID != "" ) ) {
        //
        //
        //
        var AdobeEverestTech__Lead_Form = new Image(1,1);
		AdobeEverestTech__Lead_Form.src = "//ad.doubleclick.net/ddm/activity/src=4396110;type=forms;cat=leadform;qty=1;"+
			"cost="+Revenue+";"+
			"u1="+ vehicleBrand   +";"+
			"u2="+ vehicleBrand   +";"+
			"u3="+ vehicleModel   +";"+
			"u4="+ dealershipName +";"+
			"u5="+ program_type+";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;"+
			"ord="+OrderID+"?";
        //
        //
        //
  	    console.log("%c DoubleClick__Conversion Fired!", log_debug_color);
		document.body.appendChild(AdobeEverestTech__Lead_Form);
	} else {
        console.log("%c Fire DoubleClick__Conversion: missing parameters.\n"+
    	    "cost="+Revenue+"\n"+
		    "u1="+ vehicleBrand   +"\n"+
		    "u2="+ vehicleBrand   +"\n"+
		    "u3="+ vehicleModel   +"\n"+
		    "u4="+ dealershipName +"\n"+
		    "u5="+ program_type+"\n"+
		    "ord="+OrderID+"\n", log_debug_error
        );
    }
}

function sd_tracking_tags() {
    //
    pn_onChangeFn.push( function() { AdobeEverestTech__Tracking_Pixel( pn ) });
    vb_onChangeFn.push( function() { DoubleClick__Tracking_Pixel( vb, vm, di ) } );
    vm_onChangeFn.push( function() { DoubleClick__Tracking_Pixel( vb, vm, di ) } );
    di_onChangeFn.push( function() { DoubleClick__Tracking_Pixel( vb, vm, di ) } );

    AdobeEverestTech__Tracking_Pixel( pn );
    DoubleClick__Tracking_Pixel( vb, vm, di );

}

function sd_conversion_tags() {

    vb_onChangeFn.push( function() { DoubleClick__Conversion( vb, vm, di, pt, oi, rv ) });
    vm_onChangeFn.push( function() { DoubleClick__Conversion( vb, vm, di, pt, oi, rv ) });
    di_onChangeFn.push( function() { DoubleClick__Conversion( vb, vm, di, pt, oi, rv ) });
    oi_onChangeFn.push( function() { DoubleClick__Conversion( vb, vm, di, pt, oi, rv ) });

    GoogleAdwords__Conversion();
    DoubleClick__Conversion( vb, vm, di, pt, oi, rv );
}
    //
    //
    //

    if ( (typeof(digitalData.page.pageInfo.pageName)  == "undefined") || ( digitalData.page.pageInfo.vehicleModel  == "" ) ) {
        digitalData.page.pageInfo.watch("pageName", function (id, ov, nv) {
            console.log("%c digitalData.page.pageInfo." + id + " changed from: '" + ov + "' to '" + nv + "'", log_debug_color);
            pn = nv;
            for (var i=0; i < pn_onChangeFn.length; i++) {
                pn_onChangeFn[i]();
            }
            return nv;
        });
    }

    if ((typeof(digitalData.page.pageInfo.vehicleBrand)  == "undefined") || ( digitalData.page.pageInfo.vehicleModel  == "" )) {
        digitalData.page.pageInfo.watch("vehicleBrand", function (id, ov, nv) {
            console.log("%c digitalData.page.pageInfo." + id + " changed from: '" + ov + "' to '" + nv + "'", log_debug_color);
            vb = nv
            for (var i=0; i < vb_onChangeFn.length; i++) {
                vb_onChangeFn[i]();
            }
            return nv;
          });
      }

    if ((typeof(digitalData.page.pageInfo.vehicleModel)  == "undefined") || ( digitalData.page.pageInfo.vehicleModel  == "" )) {
        digitalData.page.pageInfo.watch("vehicleModel", function (id, ov, nv) {
            console.log("%c digitalData.page.pageInfo." + id + " changed from: '" + ov + "' to '" + nv + "'", log_debug_color);
            vm = nv;
            // DoubleClick__Tracking_Pixel( vb, vm, di );
            for (var i=0; i < vm_onChangeFn.length; i++) {
                vm_onChangeFn[i]();
            }
        return nv;
        });
    }


    if ((typeof(digitalData.page.pageInfo.dealerID)  == "undefined") || ( digitalData.page.pageInfo.dealerID  == "" )) {
        digitalData.page.pageInfo.watch("dealerID", function (id, ov, nv) {
            console.log("%c digitalData.page.pageInfo." + id + " changed from: '" + ov + "' to '" + nv + "'", log_debug_color);
            di = nv;
            for (var i=0; i < di_onChangeFn.length; i++) {
                di_onChangeFn[i]();
            }
            return nv;
        });
    }



    if ((typeof(digitalData.page.pageInfo.transactionID)  == "undefined") || ( digitalData.page.pageInfo.transactionID  == "" )) {
        digitalData.page.pageInfo.watch("transactionID", function (id, ov, nv) {
            console.log("%c digitalData.page.pageInfo." + id + " changed from: '" + ov + "' to '" + nv + "'", log_debug_color);
            oi = nv;
            // DoubleClick__Conversion( vb, vm, di, pt, oi, rv );
            for ( var i=0; i < oi_onChangeFn.length; i++ ) {
                oi_onChangeFn[i]();
            }
            return nv;
        });
    }

//
//
//

sd_tracking_tags();

// To add only in the success form callbacks.
// sd_conversion_tags();
