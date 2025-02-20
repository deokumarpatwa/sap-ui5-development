sap.ui.define(['sap/base/i18n/ResourceBundle'], function (ResourceBundle) {
    "use strict";

    return {

        classText: function (sClass) {
            var oResourceBundle = ResourceBundle.create({ url: "i18n/i18n.properties" });

            switch (sClass) {
                case "C":
                    return oResourceBundle.getText("flightClassC");//"Business Class";
                case "Y":
                    return oResourceBundle.getText("flightClassY");//"Economy Class";
                case "F":
                    return oResourceBundle.getText("flightClassF"); //"First Class";
                default:
                    return sClass;
            }
        }
    }
})