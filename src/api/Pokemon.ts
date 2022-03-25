import {api, source} from 'utils/axios';

class Pokemon {
  async getAllPokemons() {
    return api
      .get('/pokemon?offset=0&limit=10', {
        cancelToken: source.token,
      })
      .then(async response => {
        return response.data;
      })
      .catch(() => {
        return null;
      });
  }

  async getLoadMorePokemons(offsetLimit: string) {
    return api
      .get(`/pokemon${offsetLimit}`, {
        cancelToken: source.token,
      })
      .then(async response => {
        return response.data;
      })
      .catch(() => {
        return null;
      });
  }

  getImagePokemon(id: string) {
    return `https://cdn.traction.one/pokedex/pokemon/${id}.png`;
  }
}

export default new Pokemon();
