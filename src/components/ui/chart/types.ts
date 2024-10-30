import { ChartConfig } from "./chart-container";

export type PayloadType = {
  dataKey?: string;
  name?: string;
  value?: any;
  color?: string;
  payload?: Record<string, any>;
};

export type ChartContextType = {
  config: ChartConfig;
};