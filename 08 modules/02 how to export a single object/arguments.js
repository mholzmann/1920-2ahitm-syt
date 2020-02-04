const args = process.argv.slice(2)

const typedArgs = args.map(value => {
    if (value === 'true' || value === 'false') {
        return Boolean(value);
    }

    if (Number.isFinite(+value)) {
        return +value;
    }

    return value;
});

// a single object or function can be exported by assigning it to the module.exports property
module.exports = typedArgs;