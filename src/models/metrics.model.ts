import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Metrics{
    constructor(
        public value?: number,
        public date?: Date
    ){}

    public static mapperMetrics(mMetrics: any): Metrics{
        let metrics: Metrics = null;

        metrics = new Metrics (
            mMetrics.value,
            new Date(mMetrics.date)
        );
        return metrics;
    }
}