import * as request from 'request';
import parseCurrencyListPage from '../parsers/parseCurrencyListPage';
import { ParsedCurrency, ParsedMarket } from '../types';
import parseCurrencyDetailsPage from '../parsers/parseCurrencyDetailsPage';

const baseUrl = 'https://coinmarketcap.com';
const coinsListUrl = `${baseUrl}/coins/views/all/`;

function getCurrencyList(): Promise<Array<ParsedCurrency>> {
  return new Promise((resolve, reject) =>
    request(coinsListUrl, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const coins = parseCurrencyListPage(body);
        resolve(coins);
      } else {
        reject({ error, response });
      }
    }),
  );
}

function getCurrencyDetails(currency: ParsedCurrency): Promise<Array<ParsedMarket>> {
  return new Promise((resolve, reject) => {
    request(`${baseUrl}/${currency.link}`, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        const markets = parseCurrencyDetailsPage(body);
        resolve(markets);
      } else {
        reject({ error, response });
      }
    });
  });
}

const arbitrageMin = 0.15;

function findArbitragePairs(markets: Array<ParsedMarket>) {
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
  console.log(coins.length);
  const markets0 = await getCurrencyDetails(coins[0]);
}
