enum DeviceType {
  Modem,
  Repeater,
  Hub,
  Switch,
  Router,
  Bridge,
  Gateway
};

export class Device {
  constructor(
    public name: string,
    public brand: string,
    public version: string | number,

    public type?: any,

    public id?: string,
    public status?: any,
  ) {}
}
