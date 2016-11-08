#!/usr/bin/node
/**
 * Parses CSV input and quotes all string fields
 *
 * @author David Knoll <david@futurefirst.org.uk>
 * @file
 */

'use strict';

// Library imports
const csv = require('csv');

function onError() {
  console.error('An error occurred');
  process.exit(1);
}

process.stdout.on('error', onError);

const stringifier = csv.stringify({
  quotedString: true,
  quotedEmpty: false,
});
stringifier.on('error', onError);
stringifier.pipe(process.stdout);

const parser = csv.parse();
parser.on('error', onError);
parser.pipe(stringifier);

process.stdin.on('error', onError);
process.stdin.pipe(parser);
