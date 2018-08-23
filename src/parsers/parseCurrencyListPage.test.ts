import currencyListPageMock from '../../mocks/currencyListPage';
import parseCurrencyListPage from './parseCurrencyListPage';

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
        change24h: 0.104873,
        currencyName: 'BTC',
        link: '/currencies/bitcoin/',
        marketCap: 111262521274,
        price: 6459.40012853,
        supply: 17224900,
        volume24h: 4191953459.72,
      },
      {
        change24h: -0.805003,
        currencyName: 'ETH',
        link: '/currencies/ethereum/',
        marketCap: 27960169593.3,
        price: 275.500740256,
        supply: 101488546.155,
        volume24h: 1348748037.61,
      },
    ]));
});
