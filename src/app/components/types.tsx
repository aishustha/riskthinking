export type AssetData = {
    name: string;
    lat: number;
    long: number;
    category: string;
    rating: number;
    factors: Record<string, number>;
  }