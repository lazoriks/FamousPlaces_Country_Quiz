// ===================================================
// Total.js start script
// https://www.totaljs.com
// ===================================================

const options = {};

options.port = parseInt(process.env.PORT);

// Enables cluster or threads if needed:
// options.cluster = 'auto';
// options.cluster_limit = 10; // max 10 threads (works only with "auto" scaling)
// options.threads = '/api/';

// Example of enabling release mode
const type = process.argv.indexOf('--release', 1) !== -1 || process.argv.indexOf('release', 1) !== -1 ? 'release' : 'debug';

// Start Total.js HTTP server
require('total4').http(type, options);
