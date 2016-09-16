'use strict';

const bigDecimal = require('big-decimal');

module.exports = {
  DATA: '001',
  amount: 0,

  setNameWorstSalesman: function setNameWorstSalesman(value, totalValue, smallSale, worstSalesman) {
  let nameWorstSalesman;	
    if ((totalValue.compareTo(smallSale) == -1) || (smallSale.compareTo(bigDecimal.ZERO) == 0)) {
      smallSale = smallSale.add(totalValue);
      nameWorstSalesman = value[worstSalesman];
    } 	
  return nameWorstSalesman;
  }
};