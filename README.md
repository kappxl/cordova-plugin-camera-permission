# cordova-plugin-camera-permission

Handle and request camera permission on Android.

Depends on cordova-android >= 12 (below version 12 it is not needed).

This plugin defines a global `navigator.camera` object, which provides an API for handling the camera permission of the device.

Although the object is attached to the global scoped `navigator`, it is not available until after the `deviceready` event.

    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady() {
        console.log(navigator.camera);
    }


## Installation

    cordova plugin add cordova-plugin-camera-permission

It is also possible to install via repo url directly ( unstable )

    cordova plugin add https://github.com/kappxl/cordova-plugin-camera-permission.git


## Usage

If using a Framework like quasar, check if platform is android before use:

    navigator.camera.handlePermission(successCallback, errorCallback)
