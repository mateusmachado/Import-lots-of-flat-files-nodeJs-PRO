'use strict';

const split = require("./splitFile.js");
const salesman = require("./model/salesman.js");
const sale = require("./model/sale.js");
const customer = require("./model/customer.js");
const bigDecimal = require('big-decimal');

const lineID = 0;
const dataID = 1;
const itemID = 2;

split.splittedFile().forEach(function(value){
  parseValues(value); 
});

function parseValues(value) {
  switch (value[lineID]) {
    case salesman.DATA:
      salesman.amount +=1;
      break;
    case customer.DATA:
      customer.amount +=1;
      break;
    case sale.DATA:
      let item = split.itemValues(value, itemID);
      let quantity = split.quantityValues(dataID, value, item);
      let price = split.priceValues(itemID, value, item);

	    setTotal(quantity, price);
 	    // setIdBestSale(value);   
	    // setNameWorstSalesman(value);                                   
 } 
}

function setTotal(quantity, price){
  sale.total = bigDecimal.ZERO;	
  quantity.forEach(priceItem => {
    priceItem = new bigDecimal(quantity).multiply(new bigDecimal(price));
    sale.total = sale.total.add(priceItem);    
  });	
}

function setIdBestSale(value) {
  if (sale.total.compareTo(sale.bigSale) == 1) {
    sale.bigSale = sale.bigSale.add(sale.total);
	  salesman.idBestSales = value[dataID];
  }
}

function setNameWorstSalesman(value) {
  if ((sale.total.compareTo(sale.smallSale) == -1) || (sale.smallSale.compareTo(bigDecimal.ZERO) == 0)) {
    sale.smallSale = sale.smallSale.add(sale.total);
    salesman.nameWorstSalesman = value[salesman.worstSalesman];
  } 	
}


module.exports = {
	outputValues: function() {
	    return 'SalesMan: ' +salesman.amount+ '\nCustomers: ' +customer.amount+ '\nID of the most expensive sale: ' +salesman.idBestSales+ '\nWorst salesman ever: ' +salesman.nameWorstSalesman;          
	}		
};
