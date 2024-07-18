// ===================================================
// Total.js start script
// https://www.totaljs.com
// ===================================================

const options = {};

options.port = parseInt(process.env.PORT);

const type = process.argv.indexOf('--release', 1) !== -1 || process.argv.indexOf('release', 1) !== -1 ? 'release' : 'debug';

// Start Total.js HTTP server
const total = require('total4');

// Add a route for the root path
total.http(type, options);
F.route('/', function() {
    this.plain('Hello, Total.js!');
});
