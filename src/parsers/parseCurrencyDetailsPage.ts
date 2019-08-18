import { CurrencyPair, Volume24h, Price, VolumePercent, ParsedMarket, MarketName } from '../types';
import * as cheerio from 'cheerio';

const parseMarket = (element: CheerioElement): MarketName => {
  const market = cheerio(element).attr('data-sort');

  if (!market) {
    throw new Error(`Invalid market "${market}"!`);
  }

  return market;
};

const parsePair = (element: CheerioElement): CurrencyPair => {
  const value = cheerio(element).attr('data-sort');
  const pair = value.split('/');

  if (pair.length !== 2) {
    throw new Error(`Invalid pair "${value}"!`);
  }

  return pair;
};

const parseVolume24h = (element: CheerioElement): Volume24h => {
  const value = cheerio(element).attr('data-sort');
  const volume24h = +value;

  if (isNaN(volume24h)) {
    throw new Error(`Invalid volume24h "${value}"!`);
  }

  return volume24h;
};

const parsePrice = (element: CheerioElement): Price => {
  const value = cheerio(element).attr('data-sort');
  const price = +value;

  if (isNaN(price)) {
    throw new Error(`Invalid price "${value}"!`);
  }

  return price;
};

const parseVolumePercent = (element: CheerioElement): VolumePercent => {
  const value = cheerio(element).attr('data-sort');
  const volumePercent = +value;

  if (isNaN(volumePercent)) {
    throw new Error(`Invalid volumePercent "${value}"!`);
  }

  return volumePercent;
};

const parseCategory = (element: CheerioElement) => {
  const category = cheerio(element).text();

  if (!category) {
    throw new Error(`Invalid category "${category}"!`);
  }

  return category;
};

const parseFeeType = (element: CheerioElement) => {
  const feeType = cheerio(element).text();

  if (!feeType) {
    throw new Error(`Invalid feeType "${feeType}"!`);
  }

  return feeType;
};

const parseUpdated = (element: CheerioElement) => {
  const updated = cheerio(element).text();

  if (!updated) {
    throw new Error(`Invalid updated "${updated}"!`);
  }

  return updated;
};

export function parseCurrencyDetailsPage(page: string): Array<ParsedMarket> {
  if (!page || typeof page !== 'string') {
    throw new Error('Invalid input data');
  }

  const trs = cheerio(page)
    .find('#markets-table tr')
    .toArray()
    .splice(1);

  if (!trs.length) {
    throw new Error('No table found');
  }

  return trs.map(tr => {
    const tds = cheerio(tr).find('td');

    try {
      const market = parseMarket(tds[1]);
      const pair = parsePair(tds[2]);
      const volume24h = parseVolume24h(tds[3]);
      const price = parsePrice(tds[4]);
      const volumePercent = parseVolumePercent(tds[5]);
      const category = parseCategory(tds[6]);
      const feeType = parseFeeType(tds[7]);
      const updated = parseUpdated(tds[8]);

      return {
        market,
        pair,
        volume24h,
        price,
        volumePercent,
        category,
        feeType,
        updated,
      };
    } catch (error) {
      throw new Error(error);
    }
  });
}
