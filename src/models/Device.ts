// import { v4 as uuidv4 } from 'uuid';

export default abstract class Device {
  static serialIncrementalNumber: number = 1;

  private serialNumber: string;

  abstract color: string | undefined;

  constructor() {
    //this.serialNumber = uuidv4();
    this.serialNumber = `${Device.serialIncrementalNumber}`;
    Device.serialIncrementalNumber++;
  }

  abstract getUniqueClassIdentifier(): string;

  // private serialIncrementalNumber: number = 1;
  // private serialNumber: string;

  // constructor() {
  //   //this.serialNumber = uuidv4();
  //   this.serialNumber = `${this.serialIncrementalNumber}`;
  //   this.serialIncrementalNumber++;
  // }

  public getSerialNumber() {
    return this.serialNumber;
  }
}
