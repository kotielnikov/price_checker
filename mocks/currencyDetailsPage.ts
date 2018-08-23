export default `
<!--[if lt IE 7]>      
<html class="no-js lt-ie9 lt-ie8 lt-ie7">
   <![endif]-->
   <!--[if IE 7]>         
   <html class="no-js lt-ie9 lt-ie8">
      <![endif]-->
      <!--[if IE 8]>         
      <html class="no-js lt-ie9">
         <![endif]-->
         <!--[if gt IE 8]><!-->
         <html lang="en">
            <!--<![endif]-->
            <body>
               <table id="markets-table" class="table no-border table-condensed floating-header">
                  <thead>
                     <tr>
                        <th class="text-right sortable">#</th>
                        <th id="th-source" class="sortable">Source</th>
                        <th id="th-pair" class="sortable">Pair</th>
                        <th class="text-right sortable">Volume (24h)</th>
                        <th class="text-right sortable">Price</th>
                        <th class="text-right sortable">Volume (%)</th>
                        <th class="text-right sortable">Category</th>
                        <th class="text-right sortable">Fee Type</th>
                        <th class="text-right sortable">Updated</th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td class="text-right">1</td>
                        <td data-sort="BitMEX"><img src="https://s2.coinmarketcap.com/static/img/exchanges/16x16/157.png" class="logo" alt="BitMEX"><a class="link-secondary" href="/exchanges/bitmex/">BitMEX</a></td>
                        <td data-sort="BTC/USD"><a href="https://www.bitmex.com/" target="_blank">BTC/USD</a></td>
                        <td class="text-right" data-sort="3344983205.92">
                           **
                           <span class="volume" data-usd="3344983205.92" data-btc="0.0" data-native="519972.517632">
                           $3,344,983,206
                           </span>
                        </td>
                        <td class="text-right" data-sort="6433.0">
                           *
                           <span class="price" data-usd="6433.0" data-btc="0.997737069506" data-native="6433.0">
                           $6433.00
                           </span>
                        </td>
                        <td class="text-right" data-sort="28.2996568762">
                           <span data-format-percentage data-format-value="28.2996568762">28.30</span>%
                        </td>
                        <td class="text-right">Derivatives</td>
                        <td class="text-right">No Fees</td>
                        <td class="text-right ">Recently</td>
                     </tr>
                     <tr>
                        <td class="text-right">2</td>
                        <td data-sort="BitForex"><img src="https://s2.coinmarketcap.com/static/img/exchanges/16x16/403.png" class="logo" alt="BitForex"><a class="link-secondary" href="/exchanges/bitforex/">BitForex</a></td>
                        <td data-sort="BTC/USDT"><a href="https://bitforex.com/trade/spotTrading?commodityCode=BTC&amp;currencyCode=USDT" target="_blank">BTC/USDT</a></td>
                        <td class="text-right" data-sort="3250292852.03">
                           **
                           <span class="volume" data-usd="3250292852.03" data-btc="0.0" data-native="504091.923995">
                           $3,250,292,852
                           </span>
                        </td>
                        <td class="text-right" data-sort="6447.81774379">
                           *
                           <span class="price" data-usd="6447.81774379" data-btc="1.00003525266" data-native="6437.72">
                           $6447.82
                           </span>
                        </td>
                        <td class="text-right" data-sort="27.4985453729">
                           <span data-format-percentage data-format-value="27.4985453729">27.50</span>%
                        </td>
                        <td class="text-right">Spot</td>
                        <td class="text-right">Unknown</td>
                        <td class="text-right ">Recently</td>
                     </tr>
                  </tbody>
               </table>
            </body>
         </html>
`;
