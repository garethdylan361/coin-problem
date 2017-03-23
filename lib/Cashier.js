function Cashier() {
  this.individualCoins = [50, 25, 10, 5];
}

Cashier.prototype.giveCents = function(cents) {
  this.cents = cents;
};

Cashier.prototype.getCents = function() {
  return this.cents;
}

Cashier.prototype.getDivisbleBy = function(coinIndex) {
    return Math.floor(this.cents/this.individualCoins[coinIndex]);
}

Cashier.prototype.addCombinationsForCoin = function(i, coinIndex, combinations) {
    combinations += 1;
    var leftOverChange = this.cents - i * this.individualCoins[coinIndex];
    if (coinIndex + 1 < this.individualCoins.length) {
        var leftOverDivisibleBy = Math.floor(leftOverChange / this.individualCoins[coinIndex + 1]);
        combinations += leftOverDivisibleBy;
    }
    return combinations;
}

Cashier.prototype.getForCoin = function(coinIndex) {
    var combinations = 0;
    if(coinIndex < this.individualCoins.length)
        var divisibleBy = this.getDivisbleBy(coinIndex);
        if (divisibleBy > 0)
            for (var i = divisibleBy; i > 0; i--) combinations = this.addCombinationsForCoin(i, coinIndex, combinations);
    return combinations;
}

Cashier.prototype.getCoinCombinations = function() {
  var combinations = 1;
  for(var i = 0; i < this.individualCoins.length; i++) {
      var divisibleBy = this.getDivisbleBy(i);
      if (divisibleBy > 0) {
          if (combinations == 1) combinations += 1;
          combinations += this.getForCoin(i + 1);
          if (this.individualCoins[i] == 10) break;
      }
  }
  return combinations;
}

module.exports = Cashier;
