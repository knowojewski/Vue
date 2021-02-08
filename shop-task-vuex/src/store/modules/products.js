import axios from 'axios';

const state = {
    products: [],
    error: '',
    cart: [],
    cartLength: 0,
    cartTotal: 0,
    singleProduct: {},
    displayAlert: false
};

const getters = {
    allProducts: state => state.products,
    getError: state => state.error,
    cartProducts: state => state.cart,
    cartProductsLength: state => state.cartLength,
    alertDisplay: state => state.displayAlert,
    product: state => state.singleProduct
};
const actions = {
    async fetchProducts({ commit, state }) {
        if(state.products.length === 0) {
            try {
                const response = await axios.get('http://www.mocky.io/v2/5ab0d1882e0000e60ae8b7a6');
    
                commit('createProductsArray', response.data);
            } 
            catch (error) {
                const errorContent = 'Something went wrong. Refresh page or try again later...'
    
                commit('generateError', errorContent);
            }
        }
    },

    async fetchSingleProduct({commit, state}, id) {
        await this.dispatch('fetchProducts');

        const product = state.products.find( item => item.id == id);
        
        commit('createSingleProduct', product);
    },

    addToCart({ commit, state }, product) {
        const checkCart = state.cart.find(item => item.id === product.id);
        
        if(!checkCart) {
            product.quantity = 1;
            product.totalPrice = product.price.split('').splice(1).join('') * 1;

            state.cart.push(product);
        } else {
            checkCart.quantity++;
            checkCart.totalPrice = checkCart.price.split('').splice(1).join('') * checkCart.quantity;
        }
        
        state.cartLength++;
        commit('displayAlertMutation');

        this.dispatch('saveToLocalStorage');
    },

    changeQuantity({ commit, state }, {id, amount}) {
        commit('changeQuantity', {amount, id});
        state.cartLength += amount;

        this.dispatch('saveToLocalStorage');
    },

    deleteFromCart({ commit, state }, {index, quantity}) {
        state.cartLength -= quantity;

        commit('deleteFromCartMutation', index);

        this.dispatch('saveToLocalStorage');
    },

    loadCart({commit, state}) {
        if(localStorage.getItem('cart')) {
            try {
                const parseObj = JSON.parse(localStorage.getItem('cart'));
                commit('loadCartFromLocalStorage', parseObj);
            }
            catch (error) { 
                console.log(error);
            }

            state.cart.forEach( product => state.cartLength += product.quantity)
        }
    },

    saveToLocalStorage({ state }) {
        console.log('save to local')
        try{
            const stringifyCart = JSON.stringify(state.cart);
            localStorage.setItem('cart', stringifyCart);
        }
        catch (error) {
            console.log(error);
        }
    },

    clearCart({ state }) {
        state.cart = [];
        state.cartLength = 0;
        localStorage.setItem('cart', state.cart);
    }
};

const mutations = {
    createProductsArray: (state, data) => (state.products = data),
    generateError: (state, error) => (state.error = error),
    displayAlertMutation: (state) => {
        state.displayAlert = true;
        setTimeout(() => { state.displayAlert = false }, 2000);
    },
    deleteFromCartMutation: (state, index) => (state.cart.splice(index, 1)),
    createSingleProduct: (state, product) => (state.singleProduct = product),
    loadCartFromLocalStorage: (state, parseObj) => (state.cart = parseObj),
    changeQuantity: (state, {amount, id}) => {
        const index = state.cart.findIndex(item => item.id === id);
        state.cart[index].quantity += amount;
        state.cart[index].totalPrice = state.cart[index].price.split('').splice(1).join('') * state.cart[index].quantity;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}