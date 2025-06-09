const newman = require('newman');
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/45712648-a24ebf4b-b39b-4a74-b24b-90ad6d993685?access_key=${process.env.pmatKey}`,
    // collection: require('./collection/dmoney-user-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be saved in default location
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
