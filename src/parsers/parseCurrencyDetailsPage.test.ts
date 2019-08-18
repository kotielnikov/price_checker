import currencyDetailsPageMock from '../../mocks/currencyDetailsPage';
import { parseCurrencyDetailsPage } from './parseCurrencyDetailsPage';

describe('parseCurrencyDetailsPage', () => {
  it('throws error when invalid input', () => expect(() => parseCurrencyDetailsPage(undefined as string)).toThrow());

  it('throws error when table not found', () =>
    expect(() => parseCurrencyDetailsPage('invalid structure')).toThrowError(new Error('No table found')));

  it('throws error when invalid table', () =>
    expect(() =>
      parseCurrencyDetailsPage(`
        <table id="markets-table">
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </table>
      `),
    ).toThrow());

  it('does correct parsing', () =>
    expect(parseCurrencyDetailsPage(currencyDetailsPageMock)).toEqual([
      {
        category: 'Derivatives',
        feeType: 'No Fees',
        market: 'BitMEX',
        pair: ['BTC', 'USD'],
        price: 6433,
        updated: 'Recently',
        volumePercent: 28.2996568762,
        volume24h: 3344983205.92,
      },
      {
        category: 'Spot',
        feeType: 'Unknown',
        market: 'BitForex',
        pair: ['BTC', 'USDT'],
        price: 6447.81774379,
        updated: 'Recently',
        volumePercent: 27.4985453729,
        volume24h: 3250292852.03,
      },
    ]));
});
