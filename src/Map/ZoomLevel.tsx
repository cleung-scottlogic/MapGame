export interface ZoomLevel {
  zoom: number;
  boundsFactor: number;
}

// max zoom level 17
export const ZOOM_LEVELS: ZoomLevel[] = [
  { zoom: 16, boundsFactor: 0.006 },
  { zoom: 14, boundsFactor: 0.012 },
  { zoom: 12, boundsFactor: 0.024 },
  { zoom: 11, boundsFactor: 0.048 },
  { zoom: 10, boundsFactor: 0.096 },
  { zoom: 8, boundsFactor: 0.18 },
];
