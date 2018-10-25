

// Register babel to transpile before our test run.
require('babel-register')();


// Disable webpack features that Mocha doesn't undestand.
require.extensions['.css'] = function() {};