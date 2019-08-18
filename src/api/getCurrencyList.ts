import { ParsedCurrency } from '../types';
import * as request from 'request';
import { baseUrl } from '../const';
import { parseCurrencyListPage } from '../parsers/parseCurrencyListPage';

const coinsListUrl = `${baseUrl}/coins/views/all/`;

export function getCurrencyList(): Promise<Array<ParsedCurrency>> {
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
