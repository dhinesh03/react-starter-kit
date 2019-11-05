const { resolve } = require('path');

module.exports = {
    contextPath: resolve(__dirname, '../', '../', 'src'),
    outputPath: resolve(__dirname, '../', '../', 'dist'),
    bundleReportPath: resolve(__dirname, '../', '../', 'dist', 'report.html'),
    entryPath: resolve(__dirname, '../', '../', 'src/index.js'),
    templatePath: resolve(__dirname, '../', '../', 'src/index.html'),
    envDevPath: resolve(__dirname, '../', 'environment', '.env.development'),
    envPath: resolve(__dirname, '../', 'environment' , '.env'),
    eslintConfigPath: resolve(__dirname, '../', '../', '.eslintrc.js'),
};
