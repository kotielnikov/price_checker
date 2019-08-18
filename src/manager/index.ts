import { ParsedMarket } from '../types';

const blacklistCurrencies = ['BTC', 'USD', 'EUR', 'CNY', 'JPY'];
const blacklistMarkets = [];

const RECENTLY = 'Recently';
const MIN_VOLUME = 1500;
function filterCurrencyMarkets(currencyMarkets: Array<ParsedMarket>) {
  return currencyMarkets.filter(currencyMarket => {
    if (currencyMarket.updated !== RECENTLY) {
      return false;
    }

    for (const currency of currencyMarket.pair) {
      if (blacklistCurrencies.indexOf(currency) !== -1) {
        return false;
      }
    }

    if (currencyMarket.volume24h < MIN_VOLUME) {
      return false;
    }

    return true;
  });
}

export default async function manager() {
  const coins = await getCurrencyList();
  console.log(coins);
  // const markets0 = await getCurrencyDetails(coins[0]);
}
