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

	itemValues: function itemValues(value, itemID) {
      return value[itemID].replace("[", "").replace("]", "").split(",");
    }
};

