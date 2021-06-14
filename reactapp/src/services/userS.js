import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import SearchesHistory from '../components/searchesHistory';

export async function createUser(user) {
  debugger
  const headers = {
    'Authorization': 'Bearer my-token',
    'My-Custom-Header': 'foobar',
    'Accept': 'application/json',
    'content-type': 'application/json'
  };

  await axios.post(`http://localhost:3000/createUser`, user, { headers })
    // .then(response => response.json())
    .then(response => {
      debugger
      console.log(" user" + (response.data))
      return response.data
    })
    .catch(error => {
      console.error('There was an error!', error);
    });
}
