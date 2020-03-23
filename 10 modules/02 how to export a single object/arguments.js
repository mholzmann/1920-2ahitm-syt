require('fs');
const args = process.argv.slice(2)


const typedArgs = args.map(value => {
    const lowerCase = value.toLocaleLowerCase();
    if (lowerCase === 'true' || lowerCase === 'false') {
        return Boolean(value);
    }

    if (Number.isFinite(+value)) {
        return +value;
    }

    return value;
});

// a single object or function can be exported by assigning it to the module.exports property
module.exports = typedArgs;