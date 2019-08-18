export type CurrencyName = string;
export type MarketCap = number;
export type Price = number;
export type Volume24h = number;
export type VolumePercent = number;
export type Supply = number;
export type ChangePercent = number;
export type Link = string;
export type MarketName = string;
export type Change24h = ChangePercent;

export interface ParsedCurrency {
  currencyName: CurrencyName;
  marketCap: MarketCap;
  price: Price;
  volume24h: Volume24h;
  supply: Supply;
  change1h: ChangePercent;
  change24h: ChangePercent;
  change7d: ChangePercent;
  link: Link;
}

export type CurrencyPair = Array<CurrencyName>;

export interface ParsedMarket {
  market: MarketName;
  pair: CurrencyPair;
  volume24h: Volume24h;
  price: Price;
  volumePercent: VolumePercent;
  category: string;
  feeType: string;
  updated: string;
}
