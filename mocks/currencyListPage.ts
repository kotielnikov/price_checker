export default `
<!doctype html>
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
               <table class="table floating-header " id="currencies">
                  <thead>
                     <tr>
                        <th class="col-rank text-center sortable">#</th>
                        <th id="th-name" class="sortable">Name</th>
                        <th id="th-marketcap" class="sortable text-right" data-mobile-text="M. Cap">Market Cap</th>
                        <th id="th-price" class="sortable text-right">Price</th>
                        <th id="th-volume" class="sortable text-right" data-mobile-text="Volume">Volume (24h)</th>
                        <th id="th-totalsupply" class="sortable text-right" title="The number of coins in existence available to the public" data-mobile-text="Supply">Circulating Supply</th>
                        <th id="th-change" class="sortable text-right" data-mobile-text="Change">Change (24h)</th>
                        <th id="th-marketcap-graph" class="text-right">Price Graph (7d)</th>
                        <th id="th-more-options"></th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr id="id-bitcoin" class="">
                        <td class="text-center">
                           1
                        </td>
                        <td class="no-wrap currency-name" data-sort="Bitcoin">
                           <img src="https://s2.coinmarketcap.com/static/img/coins/16x16/1.png" class="logo-sprite" alt="Bitcoin" height="16" width="16">
                           <span class="currency-symbol visible-xs"><a class="link-secondary" href="/currencies/bitcoin/">BTC</a></span>
                           <br class="visible-xs">
                           <a class="currency-name-container link-secondary" href="/currencies/bitcoin/">Bitcoin</a>
                        </td>
                        <td class="no-wrap market-cap text-right" data-usd="1.11262521274e+11" data-btc="17224900.0" data-sort="1.11262521274e+11">
                           $111,262,521,274
                        </td>
                        <td class="no-wrap text-right" data-sort="6459.40012853">
                           <a href="/currencies/bitcoin/#markets" class="price" data-usd="6459.40012853" data-btc="1.0">$6459.40</a>
                        </td>
                        <td class="no-wrap text-right" data-sort="4191953459.72">
                           <a href="/currencies/bitcoin/#markets" class="volume" data-usd="4191953459.72" data-btc="650201.223177">$4,191,953,460</a>
                        </td>
                        <td class="no-wrap text-right circulating-supply" data-sort="17224900.0">
                           <span data-supply="17224900.0">
                           <span data-supply-container>17,224,900</span>
                           <span class="hidden-xs">BTC</span>
                           </a>
                        </td>
                        <td class="no-wrap percent-change  positive_change  text-right" data-timespan="24h" data-percentusd="0.104873" data-symbol="BTC" data-sort="0.104873">0.10%</td>
                        <td><a href="/currencies/bitcoin/#charts">
                           <img class="sparkline" alt="sparkline" src="https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/1.png">
                           </a>
                        </td>
                        <td class="dropdown" data-more-options data-cc-id="1" data-cc-slug="bitcoin">
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
                              <li role="presentation"><a role="menuitem" tabindex="-1" href="https://payments.changelly.com/?crypto=BTC&amp;fiat=USD&amp;ref_id=coinmarketcap" target="_blank" rel="nofollow noopener">Buy / Sell Instantly</a></li>
                           </ul>
                        </td>
                     </tr>
                     <tr id="id-ethereum" class="">
                        <td class="text-center">
                           2
                        </td>
                        <td class="no-wrap currency-name" data-sort="Ethereum">
                           <img src="https://s2.coinmarketcap.com/static/img/coins/16x16/1027.png" class="logo-sprite" alt="Ethereum" height="16" width="16">
                           <span class="currency-symbol visible-xs"><a class="link-secondary" href="/currencies/ethereum/">ETH</a></span>
                           <br class="visible-xs">
                           <a class="currency-name-container link-secondary" href="/currencies/ethereum/">Ethereum</a>
                        </td>
                        <td class="no-wrap market-cap text-right" data-usd="27960169593.3" data-btc="4336817.34411" data-sort="27960169593.3">
                           $27,960,169,593
                        </td>
                        <td class="no-wrap text-right" data-sort="275.500740256">
                           <a href="/currencies/ethereum/#markets" class="price" data-usd="275.500740256" data-btc="0.0427320866088">$275.50</a>
                        </td>
                        <td class="no-wrap text-right" data-sort="1348748037.61">
                           <a href="/currencies/ethereum/#markets" class="volume" data-usd="1348748037.61" data-btc="209200.22902">$1,348,748,038</a>
                        </td>
                        <td class="no-wrap text-right circulating-supply" data-sort="101488546.155">
                           <span data-supply="101488546.155">
                           <span data-supply-container>101,488,546</span>
                           <span class="hidden-xs">ETH</span>
                           </a>
                        </td>
                        <td class="no-wrap percent-change  negative_change text-right" data-timespan="24h" data-percentusd="-0.805003" data-symbol="ETH" data-sort="-0.805003">-0.81%</td>
                        <td><a href="/currencies/ethereum/#charts">
                           <img class="sparkline" alt="sparkline" src="https://s2.coinmarketcap.com/generated/sparklines/web/7d/usd/1027.png">
                           </a>
                        </td>
                        <td class="dropdown" data-more-options data-cc-id="1027" data-cc-slug="ethereum">
                           <button class="btn btn-transparent dropdown-toggle" type="button" id="dropdown-menu-1027" data-toggle="dropdown">
                           <span class="glyphicons glyphicons-more text-gray"></span>
                           </button>
                           <ul class="dropdown-menu dropdown-menu-right" role="menu" aria-labelledby="dropdown-menu-1027">
                              <li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-watchlist-add>Add to Watchlist</a></li>
                              <li role="presentation"><a role="menuitem" tabindex="-1" href="#" data-watchlist-remove>Remove from Watchlist</a></li>
                              <li class="disabled" role="presentation"><a role="menuitem" tabindex="-1" href="#" data-watchlist-full>Watchlist full!</a></li>
                              <li role="presentation"><a role="menuitem" tabindex="-1" href="/currencies/ethereum/#charts">View Chart</a></li>
                              <li role="presentation"><a role="menuitem" tabindex="-1" href="/currencies/ethereum/#markets">View Markets</a></li>
                              <li role="presentation"><a role="menuitem" tabindex="-1" href="/currencies/ethereum/historical-data/">View Historical Data</a></li>
                              <li role="presentation"><a role="menuitem" tabindex="-1" href="https://payments.changelly.com/?crypto=ETH&amp;fiat=USD&amp;ref_id=coinmarketcap" target="_blank" rel="nofollow noopener">Buy / Sell Instantly</a></li>
                           </ul>
                        </td>
                     </tr>
                  </tbody>
               </table>
            </body>
         </html>
`;
