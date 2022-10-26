'use strict';

const fs = require('fs');

function callback(err) {
  if (err) {
    throw err;
  }
  // eslint-disable-next-line no-console
  console.log('source.txt was copied to destination.txt');
}

fs.copyFile(
  process.argv[2],
  process.argv[3],
  fs.constants.COPYFILE_EXCL,
  callback,
);
