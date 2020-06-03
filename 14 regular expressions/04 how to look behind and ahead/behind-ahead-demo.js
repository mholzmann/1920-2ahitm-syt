const string = 'Lion: "Rooaaaaar!"';

let pattern = /[^o]o{2,4}[^o]/;
let result = pattern.test(string);      // tests whether string contains 'oo', 'ooo' or 'oooo' preceded and followed by another character
console.log(`${pattern} => ${result}`); // => true

pattern = /[^a]a{2,4}[^a]/;
result = pattern.test(string);          // tests whether string contains 'aa', 'aaa' or 'aaaa' preceded and followed by another character
console.log(`${pattern} => ${result}`); // => false

pattern = /[^L]L[^L]/;          
result = pattern.test(string);          // tests whether string contains a 'L' preceded and followed by another character
console.log(`${pattern} => ${result}`); // => false (because 'L' is preceded by no character)

pattern = /(?<!L)L(?!L)/;               // (?<!...) negative lookbehind    (?!...) negative lookahead
result = pattern.test(string);          // tests whether string contains a 'L' and is preced and followed by no 'L'
console.log(`${pattern} => ${result}`); // => true