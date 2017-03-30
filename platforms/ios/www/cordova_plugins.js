cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
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
    "cordova-plugin-whitelist": "1.3.2",
    "ru.appsm.customkeyboard": "0.1.2"
};
// BOTTOM OF METADATA
});