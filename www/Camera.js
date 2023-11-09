const exec = require('cordova/exec');

/**
 * @namespace navigator
 */

/**
 * @exports camera
 */
const cameraExport = {};

/**
 * Callback function that provides an error message.
 * @callback module:camera.onError
 * @param {string} message - The message is provided by the device's native code.
 */

/**
 * Checks camera permission and requests if not granted already.
 *
 * __Supported Platforms__
 *
 * - Android
 *
 * @example
 * navigator.camera.handlePermission(onSuccess, onFail);
 *
 * function onSuccess() {
 *     console.log("Camera permission granted.")
 * }
 *
 * function onFail(message) {
 *     alert('Camera permission denied: ' + message);
 * }
 * @param {module:camera.onSuccess} successCallback
 * @param {module:camera.onError} errorCallback
 */
cameraExport.handlePermission = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'Camera', 'cameraPermission', []);
};

module.exports = cameraExport;
