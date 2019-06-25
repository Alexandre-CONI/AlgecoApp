
export class Device {
    constructor(
        public deviceID?: String,
        public name?: String,
        public type?: Type
    ) { }

    public static mapperDevice(mDevice: any): Device {
        let device: Device = null;

        device = new Device(
            mDevice.id,
            mDevice.name,
            mDevice.type
        );
        return device;
    }
}

export enum Type { 
    to = "to"
}