import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Device {
    constructor(
        public deviceID?: string,
        public name?: string,
        public type?: DeviceType
    ) {}

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

export enum DeviceType { 
    PRESENCE = "presenceSensor",
    TEMPERATURE = "temperatureSensor",
    BRIGHT = "brightnessSensor",
    PRESSURE = "atmosphericPressureSensor",
    HUMIDITY = "humiditySensor",
    SOUND_LEVEL = "soundLevelSensor",
    GPS = "gpsSensor",
    CO2 = "co2Sensor",
    LED = "ledDevice",
    BEEPER = "beeperDevice"
}