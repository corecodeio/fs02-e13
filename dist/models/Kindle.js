"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Device_1 = __importDefault(require("./Device"));
class Kindle extends Device_1.default {
    constructor(x, y) {
        super();
        this.position = [0, 0];
        this.position[0] = x;
        this.position[1] = y;
    }
    getUniqueClassIdentifier() {
        return 'K';
    }
    tap() {
        const [x, y] = this.position;
        console.log(`Position[Kindle]: ${x}, ${y}`);
    }
    show() {
        console.log(Device_1.default.serialIncrementalNumber);
    }
}
exports.default = Kindle;
