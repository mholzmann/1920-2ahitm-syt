const fsPromises = require('fs').promises;

async function mergeFiles() {
    try {
        let text = await fsPromises.readFile('./part1.txt', {encoding: 'utf8'});
        text += await fsPromises.readFile('./part2.txt', {encoding: 'utf8'});
        await fsPromises.writeFile('./merged-with-promises.txt', text);
        console.log('wrote file successfully');
    } catch (error) {
        console.log(error);
    }
}

mergeFiles();