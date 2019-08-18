import { ParsedMarket } from '../types';

const arbitrageMin = 0.15;

export function getArbitragePairs(markets: Array<ParsedMarket>) {
  const sortedMarkets = [...markets].sort((market1, market2) => market1.price - market2.price);
  const reverseSortedMarkets = [...markets].sort((market1, market2) => market2.price - market1.price);
  const arbitragePairs: Array<Array<ParsedMarket>> = [];
  let stopSearch = false;
  for (const market1 of sortedMarkets) {
    for (const market2 of reverseSortedMarkets) {
      if ((market2.price - market1.price) / market2.price >= arbitrageMin) {
        arbitragePairs.push([market1, market2]);
      } else {
        stopSearch = true;
      }

      if (stopSearch) {
        break;
      }
    }

    if (stopSearch) {
      break;
    }
  }

  return arbitragePairs;
}
