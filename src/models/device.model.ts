import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Device {
    constructor(
        public ID?: number,
        public deviceID?: string,
        public name?: string,
        public type?: DeviceType
    ) {}

    public static mapperDevice(mDevice: any): Device {
        let device: Device = null;

        device = new Device(
            mDevice.Id,
            mDevice.Ip,
            mDevice.Name,
            mDevice.Type
        );
        return device;
    }
}

export enum DeviceType { 
    PRESENCE = "Presence",
    TEMPERATURE = "Temperature",
    BRIGHT = "Brightness",
    PRESSURE = "AtmosphericPressure",
    HUMIDITY = "Humidity",
    SOUND_LEVEL = "SoundLevel",
    GPS = "GPS",
    CO2 = "CO2",
    LED = "Led",
    BEEPER = "Beeper"
}