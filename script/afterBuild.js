const fs = require('fs');
const rm = require('rimraf').sync;
const path = require('path');

let list = [];
try {
  list = fs.readdirSync('./dist/v2');
} catch {
  list = [];
}

list && list.forEach(file => {
  if (path.basename(file).includes('.map')) {
    rm(`./dist/v2/${path.basename(file)}`);
  }
});
