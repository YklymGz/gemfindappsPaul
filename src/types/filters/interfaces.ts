export interface IShapeFilter {
  shapeImage: string;
  shapeName: string;
}

export interface IRangeFilterOption {
  name: string;
  value: string;
  idx: number;
}

export interface IFilters {
  [key: string]: Record<string, string>[];
}
