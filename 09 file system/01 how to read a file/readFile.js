const fs = require('fs');

const filename = "hello.txt";

fs.readFile(filename, { encoding: 'utf8' }, (err, data) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log(`content of ${filename}: ${data}`);
    }
});