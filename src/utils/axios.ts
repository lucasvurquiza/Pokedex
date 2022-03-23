import axios from 'axios';
import {POKE_API} from './urls';

const api = axios.create({
  baseURL: POKE_API,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const source = axios.CancelToken.source();

export {api, source};
