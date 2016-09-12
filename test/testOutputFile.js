'use strict';

const fs = require('fs');
const path = "/Users/mateus/Documents/pacIlegra/ilegraNodeApp/data/out/flat_file_name.done.dat";

var chai = require('chai');
var expect = chai.expect;

describe('tests the file existence:', () => {	
	it('it should return true if the file exists ', () => {    	  	 
      expect(fs.existsSync(path)).to.be.equal(true); 
	});
});