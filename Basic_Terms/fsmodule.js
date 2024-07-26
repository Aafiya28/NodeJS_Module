const fs = require('fs');

// const f1 = fs.readFile('text.txt', 'utf8', (err, data) => {
//     console.log(err, data)
// })


//f2 = fs.readFileSync('file.txt')
// console.log(f2.toString())

// const f3 = fs.writeFile('file.txt', 'This is a text file.', () => {
//     console.log('Write to the file.', 'Which was created by Node.js!')
// });

f = fs.writeFileSync('file2.txt', 'This is 2 text file.')
console.log(f)

console.log("Finished File Reading.");
