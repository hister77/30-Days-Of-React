const readline = require('readline');
const userIdGenerator = require('./e4_level2');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

const question = (things) => {
  return new Promise((resolve, reject) => {
    rl.question(`Number of ${things}: `, (val) => {
      resolve(val)
    })
  })
}

const userIdGeneratedByUser = async () => {
    const c = await question('characters')
    const n = await question('IDs')
    let output = ""
    rl.close();
    for (let i = 0; i < n; i++) {
        output += userIdGenerator(c) + '\n';
    }
    return output;
}

userIdGeneratedByUser().then(v=>process.stdout.write(v))
