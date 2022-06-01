"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Device_1 = __importDefault(require("./Device"));
class Tablet extends Device_1.default {
    constructor(pos) {
        super();
        this.position = [0, 0];
        this.volumen = 0;
        this.position = [...pos];
    }
    tap() {
        const [x, y] = this.position;
        console.log(`Position[Tablet]: ${x}, ${y}`);
    }
    play(song) {
        console.log(`Playing: ${song} 🎶`);
    }
    show() {
        console.log(Device_1.default.serialIncrementalNumber);
    }
    getUniqueClassIdentifier(x) {
        if (typeof x !== undefined)
            return 'T';
        return this.getUniqueClassIdentifier2(x);
    }
    getUniqueClassIdentifier2(x) {
        return 'T' + x;
    }
}
exports.default = Tablet;
