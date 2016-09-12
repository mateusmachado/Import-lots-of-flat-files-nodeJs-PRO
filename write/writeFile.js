'use strict';

var fs = require('fs');
const file = require("./../transform/parseFile.js");
const outputFilePath = '/Users/mateus/Documents/pacIlegra/ilegraNodeApp/data/out/flat_file_name.done.dat';

try{ fs.writeFileSync(outputFilePath, file.outputValues());}
catch(err){throw err;}

         
