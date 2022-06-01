import Touchable from '../interfaces/Touchable';
import Audible from '../interfaces/Audible';
import Device from './Device';
export default class Tablet extends Device implements Touchable, Audible {
  position: [number, number] = [0, 0];
  volumen: number = 0;
  color: string | undefined;

  constructor(pos: [number, number]) {
    super();
    this.position = [...pos];
  }

  tap(): void {
    const [x, y] = this.position;
    console.log(`Position[Tablet]: ${x}, ${y}`);
  }

  play(song: string) {
    console.log(`Playing: ${song} 🎶`);
  }

  show() {
    console.log(Device.serialIncrementalNumber);
  }

  getUniqueClassIdentifier(x?: number): string {
    if (typeof x !== undefined) return 'T';
    return this.getUniqueClassIdentifier2(x);
  }

  getUniqueClassIdentifier2(x: number | undefined): string {
    return 'T' + x;
  }
}
