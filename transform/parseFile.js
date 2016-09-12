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

let salesMan, customers, idBestSales, nameWorstSalesman;
salesMan = customers = idBestSales = nameWorstSalesman =0;
let bigSale, smallSale, total;
bigSale = smallSale = total = bigDecimal.ZERO;
let quantity,price;

file.splittedFile().forEach(function(value){
  parseValues(value); 
  console.log(value);
});

function parseValues(value) {
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
  let item = value[itemID].replace("[", "").replace("]", "").split(",");
  quantity = item[saleID].split("-");
  price = item[itemID].split("-");  	
}

function setTotal(){
  total = bigDecimal.ZERO;	
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

console.log(salesMan);
console.log(customers);
console.log(idBestSales);
console.log(nameWorstSalesman);
