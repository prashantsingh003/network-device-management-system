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

    public active:boolean=true,
    
    public description?:string,
    public type?: any,
    public index?: number,
  ) {}
}
