// Example with opts object
let opts = {
    downloadFileName: 'report2024.csv'
};

const downloadFileName = (_opts$downloadFileNam = opts.downloadFileName) !== null && _opts$downloadFileNam !== void 0 ? _opts$downloadFileNam : 'visualization';

console.log(downloadFileName); // Output: 'report2024.csv'

// Example where opts.downloadFileName is not defined
opts = {};

const downloadFileName2 = (_opts$downloadFileNam = opts.downloadFileName) !== null && _opts$downloadFileNam !== void 0 ? _opts$downloadFileNam : 'visualization';

console.log(downloadFileName2); // Output: 'visualization'
