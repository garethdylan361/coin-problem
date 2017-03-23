describe("Cashier", function() {
  var Cashier = require('../lib/Cashier');
  var cashier;

  beforeEach(function() {
    cashier = new Cashier();
  });

  it("should be able to receive change", function() {
    cashier.giveCents(11);
    expect(cashier.getCents()).toEqual(11);
  });

  it("should only be able to return one combination of coins for 4 cents (4 pennies)", function() {
    cashier.giveCents(4);
    expect(cashier.getCoinCombinations()).toEqual(1);
  });

  it("should only be able to return two combinations of coins for 5 cents (5 pennies, or 1 nickle)", function() {
        cashier.giveCents(5);
        expect(cashier.getCoinCombinations()).toEqual(2);
  });
  it("should only be able to return four combinations of coins for 11 cents", function() {
        cashier.giveCents(11);
        expect(cashier.getCoinCombinations()).toEqual(4);
  });
  it("should only be able to return 13 combinations of coins for 26 cents", function() {
        cashier.giveCents(26);
        expect(cashier.getCoinCombinations()).toEqual(13);
  });

});
