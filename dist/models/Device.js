"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Device {
    constructor() {
        this.serialNumber = `${Device.serialIncrementalNumber}`;
        Device.serialIncrementalNumber++;
    }
    getSerialNumber() {
        return this.serialNumber;
    }
}
exports.default = Device;
Device.serialIncrementalNumber = 1;
