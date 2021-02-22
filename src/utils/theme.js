import fs from 'fs';
import path from 'path';
import lessToJs from 'less-vars-to-js';

function getColorObj() {
  const themePath = path.join(__dirname, '../styles/color-board.less');
  return lessToJs(fs.readFileSync(themePath, 'utf8'));
}

export {
  getColorObj
}
