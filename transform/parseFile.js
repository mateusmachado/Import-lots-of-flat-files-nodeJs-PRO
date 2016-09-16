'use strict';

const split = require("./splitFile.js");
const salesman = require("./model/salesman.js");
const sale = require("./model/sale.js");
const customer = require("./model/customer.js");
const bigDecimal = require('big-decimal');

const lineID = 0;
const dataID = 1;
const itemID = 2;

//
let total =0;
let bigSale = bigDecimal.ZERO;
let smallSale = bigDecimal.ZERO;
let idBestSales = 0;
let worstSalesman = 3;
let nameWorstSalesman;
//

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


 	    setIdBestSale(value);  
	    setNameWorstSalesman(value);                                   
 } 
}

function setTotal(quantity, price){
  total = bigDecimal.ZERO;	
  quantity.forEach(priceItem => {
    priceItem = new bigDecimal(quantity).multiply(new bigDecimal(price));
    total = total.add(priceItem);    
  });	
}

function setIdBestSale(value) {
  if (total.compareTo(bigSale) == 1) {
     bigSale = bigSale.add(total);
	   idBestSales = value[dataID];
  }
}

function setNameWorstSalesman(value) {
  if ((total.compareTo(smallSale) == -1) || (smallSale.compareTo(bigDecimal.ZERO) == 0)) {
    smallSale = smallSale.add(total);
    nameWorstSalesman = value[worstSalesman];
  } 	
}


module.exports = {
	outputValues: function() {
	    return 'SalesMan: ' +salesman.amount+ '\nCustomers: ' +customer.amount+ '\nID of the most expensive sale: ' +idBestSales+ '\nWorst salesman ever: ' +nameWorstSalesman;          
	}		
};
