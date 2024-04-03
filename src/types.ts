export interface AdvancedMetricsOptions {
  enableHeatmaps: boolean;
  enableSessionReplays: boolean;
}

export interface InitializationOptions {
  apiKey: string;
  clickIds?: string[];
  impressionIds?: string[];
  advancedMetrics?: AdvancedMetricsOptions;
}

export interface NFAContainersDetails {
  tokenId: number;
  containerId: string;
  footer?: boolean;
}
