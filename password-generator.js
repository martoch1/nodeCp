const generatePassword = require('generate-password');

// Generate a random password
const password = generatePassword.generate({
  length: 6, 
  numbers: true,
  symbols: false,
  uppercase: true,
  excludeSimilarCharacters: true,
});

console.log('Generated Password:', password);
