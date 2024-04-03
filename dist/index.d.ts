interface AdvancedMetricsOptions {
    enableHeatmaps: boolean;
    enableSessionReplays: boolean;
}
interface InitializationOptions {
    apiKey: string;
    clickIds?: string[];
    impressionIds?: string[];
    advancedMetrics?: AdvancedMetricsOptions;
}
interface NFAContainersDetails {
    tokenId: number;
    containerId: string;
    footer?: boolean;
}

declare function initialize(options: InitializationOptions): void;

declare function placeNFAsOnWebsite(containerDetails: NFAContainersDetails[]): Promise<void>;

export { type AdvancedMetricsOptions, type InitializationOptions, type NFAContainersDetails, initialize, placeNFAsOnWebsite };
