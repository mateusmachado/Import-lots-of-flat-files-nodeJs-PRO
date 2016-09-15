'use strict';

const readFile = require("./../read/readFile.js");

module.exports = {
	splittedFile: function() {				
		let arr = [];
		readFile.inputFile().split('\n').forEach((line) => {   			  			
  			arr.push(line.split(/ç(?![a-zç])/));
        });  
        return arr;            
	},

    itemValues: function splitItemValues(value, itemID) {
  	  return value[itemID].replace("[", "").replace("]", "").split(",");
	},

	quantityValues: function splitItemQuantity(dataID, value, itemValues) {
	  return itemValues[dataID].split("-");
	},

	priceValues: function splitItemPrice(itemID, value, itemValues){
	  return itemValues[itemID].split("-");
	}
};

