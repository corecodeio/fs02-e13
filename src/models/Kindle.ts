import Touchable from '../interfaces/Touchable';
import Device from './Device';
export default class Kindle extends Device implements Touchable {
  position: [number, number] = [0, 0];
  color: string | undefined;

  constructor(x: number, y: number) {
    super();
    this.position[0] = x;
    this.position[1] = y;
  }

  getUniqueClassIdentifier(): string {
    return 'K';
  }

  tap(): void {
    const [x, y] = this.position;
    console.log(`Position[Kindle]: ${x}, ${y}`);
  }

  show() {
    console.log(Device.serialIncrementalNumber);
  }
}
