'use strict';

const bigDecimal = require('big-decimal');

module.exports = {
  DATA: '003',
  total: bigDecimal.ZERO,

  setTotal: function setTotal(quantity, price){
  	let total = bigDecimal.ZERO;	
    quantity.forEach(priceItem => {
    	priceItem = new bigDecimal(quantity).multiply(new bigDecimal(price));
    	total = total.add(priceItem);        
    });	
   return total
  },

  setIdBestSale: function setIdBestSale(value, totalValue, dataID, idBestSales) {
  	let bigSale = bigDecimal.ZERO;
   	if (totalValue.compareTo(bigSale) == 1) {
    	bigSale = bigSale.add(totalValue);
		idBestSales = value[dataID];
   }
   return idBestSales
  }
};
