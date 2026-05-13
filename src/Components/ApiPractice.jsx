
import { useState } from 'react';
import axios from 'axios';

const ApiUrl = 'https://jsonplaceholder.typicode.com/posts';
axios.get(ApiUrl)
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

export default ApiUrl
  
