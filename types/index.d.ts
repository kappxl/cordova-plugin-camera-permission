// Copyright (c) GitHub@kappxl
// Licensed under the MIT license.

interface Navigator {
    /**
     * This plugin provides an API for handling camera permission on the device.
     */
    camera: Camera;
}

/**
 * This plugin provides an API for handling camera permission on the device.
 */
interface Camera {
    /**
     * Handles camera permission.
     * @param onSuccess Success callback, that called when permission granted.
     * @param onError Error callback, that get an error message.
     */
    handlePermission(
        onSuccess: () => void,
        onError: (message: string) => void): void;
}
