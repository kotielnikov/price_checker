import { getCurrencyList } from './api/getCurrencyList';
import { ParsedCurrency } from './types';
import { getCurrencyDetails } from './api/getCurrencyDetails';

// import manager from './manager';

// manager();

function currencyListFilter(currency: ParsedCurrency) {
  const minVolume24h = 1000;

  if (currency.volume24h < minVolume24h) {
    return false;
  }

  return true;
}

(async () => {
  const all = await getCurrencyList();
  const filtered = all.filter(currencyListFilter);

  try {
    const data = await Promise.all(filtered.slice(1).map(getCurrencyDetails));
  } catch (e) {
    console.log(e);
  }

  // try {
  //   const data = await getCurrencyDetails(filtered[0]);
  //   console.log(data, 'done');
  // } catch (e) {
  //   console.log(e);
  // }
})();
