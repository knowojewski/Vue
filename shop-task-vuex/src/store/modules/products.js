import axios from 'axios';

const state = {
    products: []
};

const getters = {
    allProducts: state => state.products
};
const actions = {
    async fetchProducts({ commit }) {
        const response = await axios.get('http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6');
  
        commit('createProductsArray', response.data);
  
        console.log(this.state.products);
      }
};
const mutations = {
    createProductsArray: (state, data) => (state.products = data)
};

export default {
    state,
    getters,
    actions,
    mutations
}