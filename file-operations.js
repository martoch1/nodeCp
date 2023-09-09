const fs = require('fs');

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('File "welcome.txt" created successfully.');
  }
});

fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Data from hello.txt:', data);
  }
});
