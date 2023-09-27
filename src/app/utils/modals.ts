export class Device {
  constructor(
    public name: string,
    public version: string | number,
    public brand: string,

    public type?: any,
    public status?: any,
  ) {}
}
