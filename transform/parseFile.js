'use strict';

const split = require("./splitFile.js");
const salesman = require("./model/salesman.js");
const sale = require("./model/sale.js");
const customer = require("./model/customer.js");
const bigDecimal = require('big-decimal');

const lineID = 0;
const dataID = 1;
const itemID = 2;

let bigSale = bigDecimal.ZERO;
let smallSale = bigDecimal.ZERO;

let worstSalesman = 3;
let nameWorstSalesman;
let aux = 0;
let idBestSales = 0;
let idBestSaleValue = 0;

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

	    let totalValue = sale.setTotal(quantity, price);
 	    idBestSaleValue = sale.setIdBestSale(value, totalValue, dataID, idBestSales);
	    nameWorstSalesman = salesman.setNameWorstSalesman(value, totalValue, smallSale, worstSalesman);                            
 } 
}

module.exports = {
	outputValues: function() {
	    return 'SalesMan: ' +salesman.amount+ '\nCustomers: ' +customer.amount+ '\nID of the most expensive sale: ' +idBestSaleValue+ '\nWorst salesman ever: ' +nameWorstSalesman;          
	}		
};
