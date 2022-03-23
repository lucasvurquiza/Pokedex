import {api, source} from 'utils/axios';

class Pokemon {
  async getAllPokemons() {
    return api.get()
  }
}