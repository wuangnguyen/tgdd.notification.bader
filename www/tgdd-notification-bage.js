/*global cordova, module*/

module.exports = {
    setBadge: function (name, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "TGDDNotification", "setBadge", [name]);
    }
};
