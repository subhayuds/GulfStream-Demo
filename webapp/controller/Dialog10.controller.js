sap.ui.define(["sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "./utilities",
    "sap/ui/core/routing/History"
    ], function(BaseController, MessageBox, Utilities, History) {
    "use strict";

    return BaseController.extend("com.sap.build.standard.wbRas.controller.Dialog10", {
    setRouter: function (oRouter) {
            		                this.oRouter = oRouter;
		
        },
getBindingParameters: function () {
            		return {};
		
        },
_onButtonPress5: function (oEvent) {
            		
		oEvent = jQuery.extend(true, {}, oEvent);
		return new Promise(function (fnResolve) { fnResolve(true); })
		.then(function (result) {
		    return new Promise(function(fnResolve) {
		    var sTargetPos = "";
		    sTargetPos = (sTargetPos === "default") ? undefined : sTargetPos;
		    sap.m.MessageToast.show("Work added", {
		        onClose: fnResolve,
		        duration: 0 || 3000,
		        at: sTargetPos,
		        my: sTargetPos
		    });
		});
		
		}.bind(this))
		.then(function (result) { if (result === false) { return false; } else {
		    var oDialog = this.getView().getContent()[0];
		
		return new Promise(function (fnResolve) {
		    oDialog.attachEventOnce("afterClose", null, fnResolve);
		    oDialog.close();
		});
		
		}}.bind(this)).catch(function (err) { if (err !== undefined) { MessageBox.error(err.message); }});
        },
_onButtonPress6: function () {
            		var oDialog = this.getView().getContent()[0];
		
		return new Promise(function (fnResolve) {
		    oDialog.attachEventOnce("afterClose", null, fnResolve);
		    oDialog.close();
		});
		
        },
onInit: function () {
            		        this.mBindingOptions = {};
        this._oDialog = this.getView().getContent()[0];

        },
onExit: function () {
            		                this._oDialog.destroy();

        }
});
}, /* bExport= */true);
