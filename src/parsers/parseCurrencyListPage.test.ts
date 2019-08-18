import currencyListPageMock from '../../mocks/currencyListPage';
import { parseCurrencyListPage } from './parseCurrencyListPage';

describe('parseCurrencyListPage', () => {
  it('throws error when invalid input', () => expect(() => parseCurrencyListPage(undefined as string)).toThrow());

  it('throws error when table not found', () =>
    expect(() => parseCurrencyListPage('invalid structure')).toThrowError(new Error('No table found')));

  it('throws error when invalid table', () =>
    expect(() =>
      parseCurrencyListPage(`
        <table id="currencies">
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
    expect(parseCurrencyListPage(currencyListPageMock)).toEqual([
      {
        change1h: -0.138363,
        change24h: -0.220157,
        change7d: -3.15549,
        currencyName: 'BTC',
        link: '/currencies/bitcoin/',
        marketCap: 60878313229.9,
        price: 3475.3624473,
        supply: 17517112,
        volume24h: 4897311346.83,
      },
      {
        change1h: -0.505579,
        change24h: -0.890039,
        change7d: -2.09716,
        currencyName: 'XRP',
        link: '/currencies/ripple/',
        marketCap: 12519489563.7,
        price: 0.304140798724,
        supply: 41163466448,
        volume24h: 429886423.324,
      },
    ]));
});
