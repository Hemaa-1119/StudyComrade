// 1. Extract first five letters from a string
let str1 = ' gfuh ieiuei ';
console.log(str1.trim().slice(0, 5)); // 'gfuh'

// 2. Get the length of a string and make it uppercase
let str2 = 'hduej dij';
console.log(str2.toUpperCase()); // 'HDUEJ DIJ'
console.log(str2.length); // 9

// 3. Take a string, make it lowercase and trim it
let str3 = ' biji jdo ';
console.log(str3.toLowerCase().trim()); // 'biji jdo'

// 4. Replace specified word in a string
let str4 = 'Hello world, hello universe';
console.log(str4.replace('hello', 'hi')); // 'Hello world, hi universe'
console.log(str4.replaceAll('hello', 'hi')); // 'Hello world, hi universe'

// 5. Random statements in implicit coercion
console.log(89 + 'hello' + 90 / 9); // '89hello10'
console.log(true + 5); // 6
console.log('5' + 3); // '53'
console.log('5' - 3); // 2
console.log([] + {}); // '[object Object]'
console.log([] - {}); // NaN
console.log(null + 1); // 1
console.log(undefined + 1); // NaN