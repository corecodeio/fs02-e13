import Audible from '../interfaces/Audible';
import Callable from '../interfaces/Callable';
import Touchable from '../interfaces/Touchable';
import Device from './Device';
export default class Iphone
  extends Device
  implements Touchable, Audible, Callable
{
  position: [number, number] = [0, 0];
  volumen: number = 0;
  secterCode: string = '0';
  number: number;
  color: string | undefined;

  constructor(x: number, y: number, number: number) {
    super();
    this.position[0] = x;
    this.position[1] = y;
    this.number = number;
  }

  tap(): void {
    const [x, y] = this.position;
    console.log(`Position[Iphone]: ${x}, ${y}`);
  }

  play(song: string) {
    console.log(`Playing: ${song} 🎶`);
  }

  call(zone_code: string, number_to_call: number) {
    console.log(`Calling: ${zone_code} ${number_to_call} from ${this.number}`);
  }

  show() {
    console.log(Device.serialIncrementalNumber);
  }

  getUniqueClassIdentifier(): string {
    return 'I';
  }
}
