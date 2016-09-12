'use strict';

const fs = require('fs');
const file = require("./../transform/splitFile.js");

var chai = require('chai');
var expect = chai.expect;

describe('tests the splitted file:', () => {	
	it('it should return true if the array is not empty', () => { 
      expect(file.splittedFile()).to.not.be.empty;      
	});
});