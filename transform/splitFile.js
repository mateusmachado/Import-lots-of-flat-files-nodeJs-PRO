'use strict';

const readFile = require("./../read/readFile.js");

module.exports = {
	splittedFile: function() {				
		let arr = [];
		readFile.inputFile().split('\n').forEach((line) => {   			  			
  			arr.push(line.split('ç'));
        });  
        return arr;            
	}		
};

