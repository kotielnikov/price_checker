import * as cheerio from 'cheerio';

const parseName = (element: CheerioElement) => {
  const name = cheerio(element)
    .find('.currency-symbol a')
    .text();

  if (!name) {
    throw new Error(`Invalid name "${name}"!`);
  }

  return name;
};

const parseLink = (element: CheerioElement) => {
  const link = cheerio(element)
    .find('.currency-symbol a')
    .attr('href');

  if (!link.match(/^\/[a-zA-Z0-9]+/)) {
    throw new Error(`Invalid link "${link}"!`);
  }

  return link;
};

const parseMarketCap = (element: CheerioElement) => {
  const value = cheerio(element).attr('data-sort');
  const marketCap = +value;

  if (isNaN(marketCap)) {
    throw new Error(`Invalid marketCap "${value}"!`);
  }

  return marketCap;
};

const parsePrice = (element: CheerioElement) => {
  const value = cheerio(element).attr('data-sort');
  const price = +value;

  if (isNaN(price)) {
    throw new Error(`Invalid price "${value}"!`);
  }

  return price;
};

const parseVolume24h = (element: CheerioElement) => {
  const value = cheerio(element).attr('data-sort');
  const volume24h = +value;

  if (isNaN(volume24h)) {
    throw new Error(`Invalid volume24h "${value}"!`);
  }

  return volume24h;
};

const parseSupply = (element: CheerioElement) => {
  const value = cheerio(element).attr('data-sort');
  const supply = +value;

  if (isNaN(supply)) {
    throw new Error(`Invalid supply "${value}"!`);
  }

  return supply;
};

const parseChange24 = (element: CheerioElement) => {
  const value = cheerio(element).attr('data-sort');
  const change24 = +value;

  if (isNaN(change24)) {
    throw new Error(`Invalid change24 "${value}"!`);
  }

  return change24;
};

export default function parseCurrencyDetailsPage(page: string) {
  if (!page || typeof page !== 'string') {
    throw new Error('Empty input!');
  }

  const trs = cheerio(page)
    .find('#currencies tr')
    .toArray()
    .splice(1);

  if (!trs.length) {
    throw new Error('No table found');
  }

  return trs.map(tr => {
    const tds = cheerio(tr).find('td');

    try {
      const name = parseName(tds[1]);
      const link = parseLink(tds[1]);
      const marketCap = parseMarketCap(tds[2]);
      const price = parsePrice(tds[3]);
      const volume24h = parseVolume24h(tds[4]);
      const supply = parseSupply(tds[5]);
      const change24h = parseChange24(tds[6]);

      return {
        currencyName: name,
        marketCap: +marketCap,
        price: +price,
        volume24h: +volume24h,
        supply: +supply,
        change24h: +change24h,
        link,
      };
    } catch (error) {
      throw new Error(error);
    }
  });
}
