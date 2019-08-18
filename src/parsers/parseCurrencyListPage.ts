import * as cheerio from 'cheerio';
import { ParsedCurrency, CurrencyName, Link, MarketCap, Price, Volume24h, Supply, Change24h } from '../types';

const parseName = (element: CheerioElement): CurrencyName => {
  const name = cheerio(element)
    .find('.currency-symbol a')
    .text();

  if (!name) {
    throw new Error(`Invalid name "${name}"!`);
  }

  return name;
};

const parseLink = (element: CheerioElement): Link => {
  const link = cheerio(element)
    .find('.currency-symbol a')
    .attr('href');

  if (!link.match(/^\/[a-zA-Z0-9]+/)) {
    throw new Error(`Invalid link "${link}"!`);
  }

  return link;
};

const parseMarketCap = (element: CheerioElement): MarketCap => {
  const value = cheerio(element).attr('data-sort');
  const marketCap = +value;

  if (isNaN(marketCap)) {
    throw new Error(`Invalid marketCap "${value}"!`);
  }

  return marketCap;
};

const parsePrice = (element: CheerioElement): Price => {
  const value = cheerio(element).attr('data-sort');
  const price = +value;

  if (isNaN(price)) {
    throw new Error(`Invalid price "${value}"!`);
  }

  return price;
};

const parseVolume24h = (element: CheerioElement): Volume24h => {
  const value = cheerio(element).attr('data-sort');
  const volume24h = +value;

  if (isNaN(volume24h)) {
    throw new Error(`Invalid volume24h "${value}"!`);
  }

  return volume24h;
};

const parseSupply = (element: CheerioElement): Supply => {
  const value = cheerio(element).attr('data-sort');
  const supply = +value;

  if (isNaN(supply)) {
    throw new Error(`Invalid supply "${value}"!`);
  }

  return supply;
};

const parseChange = (element: CheerioElement): Change24h => {
  const value = cheerio(element).attr('data-sort');
  const change24 = +value;

  if (isNaN(change24)) {
    throw new Error(`Invalid change24 "${value}"!`);
  }

  return change24;
};

export function parseCurrencyListPage(page: string): Array<ParsedCurrency> {
  if (!page || typeof page !== 'string') {
    throw new Error('Empty input!');
  }

  const trs = cheerio(page)
    .find('#currencies-all tbody tr')
    .toArray();

  if (!trs.length) {
    throw new Error('No table found');
  }

  return trs.map(tr => {
    const tds = cheerio(tr).find('td');

    try {
      const name = parseName(tds[1]);
      const link = parseLink(tds[1]);
      const marketCap = parseMarketCap(tds[3]);
      const price = parsePrice(tds[4]);
      const volume24h = parseVolume24h(tds[6]);
      const supply = parseSupply(tds[5]);
      const change1h = parseChange(tds[7]);
      const change24h = parseChange(tds[8]);
      const change7d = parseChange(tds[9]);

      return {
        currencyName: name,
        marketCap: +marketCap,
        price: +price,
        volume24h: +volume24h,
        supply: +supply,
        change1h: +change1h,
        change24h: +change24h,
        change7d: +change7d,
        link,
      };
    } catch (error) {
      throw new Error(error);
    }
  });
}
