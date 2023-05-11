const fs = require(`fs`);

console.log(`start`);

fs.readFile(`example.txt`, `utf8`, (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log(`end`);
