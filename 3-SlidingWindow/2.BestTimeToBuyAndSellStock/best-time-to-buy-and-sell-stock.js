/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxP = 0; //minBuy - currentPrice = greatest earning
    let minBuy = prices[0]; //Lowest price to buy

    for (let sell of prices) {
        maxP = Math.max(maxP, sell - minBuy);
        minBuy = Math.min(minBuy, sell);
    }
    return maxP;
};