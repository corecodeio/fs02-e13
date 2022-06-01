"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Device_1 = __importDefault(require("./Device"));
class Iphone extends Device_1.default {
    constructor(x, y, number) {
        super();
        this.position = [0, 0];
        this.volumen = 0;
        this.secterCode = '0';
        this.position[0] = x;
        this.position[1] = y;
        this.number = number;
    }
    tap() {
        const [x, y] = this.position;
        console.log(`Position[Iphone]: ${x}, ${y}`);
    }
    play(song) {
        console.log(`Playing: ${song} 🎶`);
    }
    call(zone_code, number_to_call) {
        console.log(`Calling: ${zone_code} ${number_to_call} from ${this.number}`);
    }
    show() {
        console.log(Device_1.default.serialIncrementalNumber);
    }
    getUniqueClassIdentifier() {
        return 'I';
    }
}
exports.default = Iphone;
