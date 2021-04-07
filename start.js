require('dotenv').config()
const jwt = require('jsonwebtoken');
const data = {
  id: 0001,
  name: 'John Wick',
  email: 'johnwick@gmail.com',
  role: 'user',
};

const run = () => {
  const encodedJwt = jwt.sign(data, process.env.PRIVATE_KEY);
  console.log('\n', '===============================================', '\n');
  console.log(encodedJwt);
  console.log('\n', '===============================================', '\n');

  jwt.verify(encodedJwt, process.env.PRIVATE_KEY, (err, decoded) => {
    if (err) {
      console.log(err);
      console.log('Token inválido.');
      return;
    }

    console.log(decoded);
  })
}

run();
