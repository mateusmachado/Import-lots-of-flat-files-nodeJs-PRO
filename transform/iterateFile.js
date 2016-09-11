'use strict';

const file = require("./splitFile.js");
const bigDecimal = require('big-decimal');

const salesManData = '001';
const customerData = '002';
const salesData = '003';

const dataID = 0;
const saleID = 1;
const itemID = 2;
const worstSalesman = 3;

let salesMan = 0;
let customers = 0;
let idBestSales = 0;
let nameWorstSalesman = 0;
let bigSale = bigDecimal.ZERO;
let smallSale = bigDecimal.ZERO;
let total = bigDecimal.ZERO;

let quantity;
let price;



file.splittedFile().forEach(function(value){
  parseFile(value);
});

function parseFile(value) {
  switch (value[dataID]) {
    case salesManData:
      salesMan +=1;
      break;
    case customerData:
      customers +=1;
      break;
    case salesData:
	  splitValues(value);
	  setTotal();
 	  setIdBestSale(value);   
	  setNameWorstSalesman(value);                                   
 } 
}

function splitValues(value){
  var item = value[itemID].replace("[", "").replace("]", "").split(",");
  quantity = item[saleID].split("-");
  price = item[itemID].split("-");
  total = bigDecimal.ZERO;	
}

function setTotal(){
  for (let priceItem of quantity) {
    priceItem = new bigDecimal(quantity).multiply(new bigDecimal(price));
    total = total.add(priceItem);    
  } 	
}

function setIdBestSale(value) {
  if (total.compareTo(bigSale) == 1) {
    bigSale = bigSale.add(total);
	idBestSales = value[saleID];
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
	    return 'SalesMan: ' +salesMan+ '\nCustomers: ' +customers+ '\nID of the most expensive sale: ' +idBestSales+ '\nWorst salesman ever: ' +nameWorstSalesman;          
	}		
};

// console.log(salesMan);
// console.log(customers);
// console.log(idBestSales);
// console.log(nameWorstSalesman);
