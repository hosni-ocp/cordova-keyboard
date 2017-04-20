cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-console.console",
        "file": "plugins/cordova-plugin-console/www/console-via-logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "console"
        ]
    },
    {
        "id": "cordova-plugin-console.logger",
        "file": "plugins/cordova-plugin-console/www/logger.js",
        "pluginId": "cordova-plugin-console",
        "clobbers": [
            "cordova.logger"
        ]
    },
    {
        "id": "ru.appsm.customkeyboard.customkeyboard",
        "file": "plugins/ru.appsm.customkeyboard/www/customkeyboard.js",
        "pluginId": "ru.appsm.customkeyboard",
        "clobbers": [
            "window.CustomKeyboard"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-console": "1.0.6",
    "cordova-plugin-whitelist": "1.3.2",
    "ru.appsm.customkeyboard": "0.1.2"
};
// BOTTOM OF METADATA
});