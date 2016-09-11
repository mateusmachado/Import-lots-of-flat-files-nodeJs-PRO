'use strict';

const fs = require('fs');
const inputFilePath = "/Users/mateus/Documents/pacIlegra/ilegraNodeApp/data/in/file.dat";

module.exports = {
	inputFile: function() {
		try{ return fs.readFileSync(inputFilePath).toString();}
		catch(err){throw err;}
	}		
};