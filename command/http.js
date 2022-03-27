'use strict'
const axios = require('axios');
//https://www.cnblogs.com/itech/p/13253319.html
module.exports = () => {
     const data = {
          name: 'John Doe',
          job: 'Content Writer'
     };

     axios.post('https://reqres.in/api/users', data)
          .then((res) => {
               console.log(`Status: ${res.status}`);
               console.log('Body: ', res.data);
          }).catch((err) => {
               console.error(err);
          });

}