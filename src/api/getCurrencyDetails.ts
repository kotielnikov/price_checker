import { ParsedCurrency, ParsedMarket } from '../types';
import { parseCurrencyDetailsPage } from '../parsers/parseCurrencyDetailsPage';
import * as request from 'request';
import { baseUrl } from '../const';

export function getCurrencyDetails(currency: ParsedCurrency): Promise<Array<ParsedMarket>> {
  return new Promise((resolve, reject) => {
    // console.log(`${baseUrl}/${currency.link}`);
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
