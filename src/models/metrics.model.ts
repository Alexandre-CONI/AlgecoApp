export class Metrics{
    constructor(
        public value?: number
    ){}

    public static mapperMetrics(mMetrics: any): Metrics{
        let metrics: Metrics = null;

        metrics = new Metrics (
            mMetrics.value,
        );
        return metrics;
    }
}