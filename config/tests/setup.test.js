const { resolve } = require('path');
// Load test specify env configurations
require('dotenv').config({path: resolve(__dirname, '../', 'environment', '.env.test')})
console.log('process.env.BASE_URL==>',process.env.BASE_URL)