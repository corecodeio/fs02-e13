import Runnable from './interfaces/Runnable';
import Iphone from './models/Iphone';
import Kindle from './models/Kindle';
import Touchable from './interfaces/Touchable';
import Callable from './interfaces/Callable';
import Tablet from './models/Tablet';
import Audible from './interfaces/Audible';
import Device from './models/Device';

export default class Main implements Runnable {
  addToPosition(device: Touchable): void {
    const [x, y] = device.position;
    device.position[0] = x + 1;
    device.position[1] = y + 1;
  }

  callToGt(device: Callable) {
    device.call('+502', 1234567890);
  }

  start() {
    const iphone1 = new Iphone(0, 0, 12345);
    const iphone2 = new Iphone(0, 0, 6789);
    const kindle = new Kindle(0, 0);
    const tablet = new Tablet([3, 1]);
    console.log(iphone1.getSerialNumber());
    console.log(iphone2.getSerialNumber());
    console.log(kindle.getSerialNumber());
    console.log(tablet.getSerialNumber());
  }
}
