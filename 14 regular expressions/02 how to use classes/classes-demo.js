const names = [
    'Maier', 
    'Mair', 
    'Majer', 
    'Majr', 
    'Mayer', 
    'Mayr', 
    'Meier', 
    'Meir', 
    'Mejer', 
    'Mejr', 
    'Meyer', 
    'Meyr',
    'Mahr',
    'Ma_er',
    'Ma_r',
    'M_yr',
    'Myer',
    'Baier',
    'Bayr'
];

/**
 * 
 * @param {RegExp} pattern 
 */
function printMatchingNames(pattern) {
    console.log(`Pattern: ${pattern}`);
    let filteredNames = names.filter(name => pattern.test(name));
    console.log(filteredNames);
    console.log();
}

console.log('Print all "Maiers" with "a" or "e" at second position that end with "er"');
printMatchingNames(/^M[ae][a-z]*er$/);

console.log('Print all names which end with "r" but not "er"');
printMatchingNames(/^[A-Z][a-z]*[^e]r$/);                       
printMatchingNames(/^[A-Z][a-z]*[a-df-z]r$/); // better, because it makes sure that there is a letter at second last position

console.log('Print all "Maiers" with no "j" at third position');
printMatchingNames(/M[a-z][^jh_][a-z]*r/);                       