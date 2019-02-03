export default `
<html>
   <body>
      <table class="table floating-header summary-table js-summary-table" id="currencies-all" style="font-size:14px">
         <thead>
            <tr>
               <th class="text-center sortable">#</th>
               <th id="th-name" class="sortable">Name</th>
               <th id="th-symbol" class="sortable col-symbol">Symbol</th>
               <th id="th-marketcap" class="sortable text-right" data-mobile-text="M. Cap">Market Cap</th>
               <th id="th-price" class="sortable text-right">Price</th>
               <th id="th-totalsupply" class="sortable text-right" title="The number of coins in existence available to the public" data-mobile-text="Supply">Circulating Supply</th>
               <th id="th-volume" class="sortable text-right" data-mobile-text="Volume">Volume (24h)</th>
               <th id="th-change1h" class="sortable text-right">% 1h</th>
               <th id="th-change24h" class="sortable text-right">% 24h</th>
               <th id="th-change7d" class="sortable text-right">% 7d</th>
               <th id="th-more-options" class="hide"></th>
            </tr>
         </thead>
         <tbody>
            <tr id="id-bitcoin" class="">
               <td class="text-center">
                  1
               </td>
               <td class="no-wrap currency-name" data-sort="Bitcoin">
                  <div class="s-s-1 logo-sprite"></div>
                  <span class="currency-symbol visible-xs"><a class="link-secondary" href="/currencies/bitcoin/">BTC</a></span>
                  <br class="visible-xs">
                  <a class="currency-name-container link-secondary" href="/currencies/bitcoin/">Bitcoin</a>
               </td>
               <td class="text-left col-symbol">BTC</td>
               <td class="no-wrap market-cap text-right" data-usd="60878313229.9" data-btc="17517112.0" data-sort="60878313229.9">
                  $60,878,313,230
               </td>
               <td class="no-wrap text-right" data-sort="3475.3624473">
                  <a href="/currencies/bitcoin/#markets" class="price" data-usd="3475.3624473" data-btc="1.0">$3475.36</a>
               </td>
               <td class="no-wrap text-right circulating-supply" data-sort="17517112.0">
                  <span data-supply="17517112.0" data-supply-container>17,517,112</span>
               </td>
               <td class="no-wrap text-right " data-sort="4897311346.83">
                  <a href="/currencies/bitcoin/#markets" class="volume" data-usd="4897311346.83" data-btc="1411496.88023">$4,897,311,347</a>
               </td>
               <td class="no-wrap percent-change  negative_change text-right" data-timespan="1h" data-percentusd="-0.14" data-symbol="BTC" data-sort="-0.138363">-0.14%</td>
               <td class="no-wrap percent-change  negative_change text-right" data-timespan="24h" data-percentusd="-0.22" data-symbol="BTC" data-sort="-0.220157">-0.22%</td>
               <td class="no-wrap percent-change  negative_change text-right" data-timespan="7d" data-percentusd="-3.16" data-symbol="BTC" data-sort="-3.15549">-3.16%</td>
               <td class="more-options-cell dropdown hide" data-more-options data-cc-id="1" data-cc-slug="bitcoin">
                  <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdown-menu-1" data-toggle="dropdown">
                  <span class="glyphicons glyphicons-more text-gray"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdown-menu-1">
                     <li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-watchlist-add>Add to Watchlist</a></li>
                     <li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-watchlist-remove>Remove from Watchlist</a></li>
                     <li class="disabled" role="presentation"><a role="menuitem" tabindex="-1" href="#" data-watchlist-full>Watchlist full!</a></li>
                     <li role="presentation"><a role="menuitem" tabindex="-1" href="/currencies/bitcoin/#charts">View Chart</a></li>
                     <li role="presentation"><a role="menuitem" tabindex="-1" href="/currencies/bitcoin/#markets">View Markets</a></li>
                     <li role="presentation"><a role="menuitem" tabindex="-1" href="/currencies/bitcoin/historical-data/">View Historical Data</a></li>
                  </ul>
               </td>
            </tr>
            <tr id="id-ripple" class="">
               <td class="text-center">
                  2
               </td>
               <td class="no-wrap currency-name" data-sort="XRP">
                  <div class="s-s-52 logo-sprite"></div>
                  <span class="currency-symbol visible-xs"><a class="link-secondary" href="/currencies/ripple/">XRP</a></span>
                  <br class="visible-xs">
                  <a class="currency-name-container link-secondary" href="/currencies/ripple/">XRP</a>
               </td>
               <td class="text-left col-symbol">XRP</td>
               <td class="no-wrap market-cap text-right" data-usd="12519489563.7" data-btc="3611592.36953" data-sort="12519489563.7">
                  $12,519,489,564
               </td>
               <td class="no-wrap text-right" data-sort="0.304140798724">
                  <a href="/currencies/ripple/#markets" class="price" data-usd="0.304140798724" data-btc="8.77378093046e-05">$0.304141</a>
               </td>
               <td class="no-wrap text-right circulating-supply" data-sort="41163466448.0">
                  <span data-supply="41163466448.0" data-supply-container>41,163,466,448</span>
                  *
               </td>
               <td class="no-wrap text-right " data-sort="429886423.324">
                  <a href="/currencies/ripple/#markets" class="volume" data-usd="429886423.324" data-btc="124012.605972">$429,886,423</a>
               </td>
               <td class="no-wrap percent-change  negative_change text-right" data-timespan="1h" data-percentusd="-0.51" data-symbol="XRP" data-sort="-0.505579">-0.51%</td>
               <td class="no-wrap percent-change  negative_change text-right" data-timespan="24h" data-percentusd="-0.89" data-symbol="XRP" data-sort="-0.890039">-0.89%</td>
               <td class="no-wrap percent-change  negative_change text-right" data-timespan="7d" data-percentusd="-2.10" data-symbol="XRP" data-sort="-2.09716">-2.10%</td>
               <td class="more-options-cell dropdown hide" data-more-options data-cc-id="52" data-cc-slug="ripple">
                  <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdown-menu-52" data-toggle="dropdown">
                  <span class="glyphicons glyphicons-more text-gray"></span>
                  </button>
                  <ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdown-menu-52">
                     <li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-watchlist-add>Add to Watchlist</a></li>
                     <li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-watchlist-remove>Remove from Watchlist</a></li>
                     <li class="disabled" role="presentation"><a role="menuitem" tabindex="-1" href="#" data-watchlist-full>Watchlist full!</a></li>
                     <li role="presentation"><a role="menuitem" tabindex="-1" href="/currencies/ripple/#charts">View Chart</a></li>
                     <li role="presentation"><a role="menuitem" tabindex="-1" href="/currencies/ripple/#markets">View Markets</a></li>
                     <li role="presentation"><a role="menuitem" tabindex="-1" href="/currencies/ripple/historical-data/">View Historical Data</a></li>
                  </ul>
               </td>
            </tr>
         </tbody>
      </table>
   </body>
</html>
`;
