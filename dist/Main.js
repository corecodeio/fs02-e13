"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Iphone_1 = __importDefault(require("./models/Iphone"));
const Kindle_1 = __importDefault(require("./models/Kindle"));
const Tablet_1 = __importDefault(require("./models/Tablet"));
class Main {
    addToPosition(device) {
        const [x, y] = device.position;
        device.position[0] = x + 1;
        device.position[1] = y + 1;
    }
    callToGt(device) {
        device.call('+502', 1234567890);
    }
    start() {
        const iphone1 = new Iphone_1.default(0, 0, 12345);
        const iphone2 = new Iphone_1.default(0, 0, 6789);
        const kindle = new Kindle_1.default(0, 0);
        const tablet = new Tablet_1.default([3, 1]);
        console.log(iphone1.getSerialNumber());
        console.log(iphone2.getSerialNumber());
        console.log(kindle.getSerialNumber());
        console.log(tablet.getSerialNumber());
    }
}
exports.default = Main;
