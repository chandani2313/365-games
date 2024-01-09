import axios from 'axios';
import { setCart, getCart, removeCart } from '@/StorageFactory';

export default {
  state: () => ({
    cart: [],
  }),
  mutations: {
    UPDATE_CART(state, cart) {
      state.cart = [...cart];
    },
    RENEW_CART(state) {
      state.cart = [];
    }
  },
  actions: {
    async loadCartOnAppStart({ rootGetters, dispatch, commit }) {
      if (rootGetters.loggedIn) {
        const cart = await dispatch('getCartFromDatabase');
        if (isCartNotEmpty(cart)) {
          commit('UPDATE_CART', cart);
        } else {
          commit('RENEW_CART');
        }
      } else {
        const cart = getCart();
        if (isCartNotEmpty(cart)) {
          commit('UPDATE_CART', cart);
        } else {
          commit('RENEW_CART');
        }
      }
    },

    async addCartToDatabaseAndRemoveCartFromLocalStorageOnUserLogin({ commit, dispatch }) {
      const cartInDatabase = await dispatch('getCartFromDatabase');
      const cartInLocalStorage = getCart();
      if (isCartNotEmpty(cartInLocalStorage)) {
        let cart;
        if (isCartNotEmpty(cartInDatabase)) {
          cart = [ ...cartInDatabase, ...cartInLocalStorage ];
          cart = removeDuplicateItems(cart);
          await dispatch('updateCartInDatabase', cart);
        } else {
          cart = [ ...cartInLocalStorage ];
          dispatch('createNewCartWithProductInDatabase', ...cart);
        }
        removeCart();
      } else {
        if (isCartNotEmpty(cartInDatabase)) {
          commit('UPDATE_CART', cartInDatabase)
        } else {
          commit('RENEW_CART');
        }
      }
    },

    checkProductAlreadyPresent({ getters }, product) {
      const cart = getters.cart;
      if (!cart?.length) return false;
      const isProductPresent = element => element.product._id === product._id;
      return !!cart.find(isProductPresent);
    },

    async addToCart({ getters, rootGetters, dispatch }, product) {
      if (!getters.cartCount) {
        if (rootGetters.loggedIn) {
          await dispatch('createNewCartWithProductInDatabase', { product, quantity: 1 });
        } else {
          dispatch('createNewCartWithProductInLocalStorage', { product, quantity: 1 });
        }
      } else {
        if (rootGetters.loggedIn) {
          dispatch('addProductToCartInDatabase', product);
        } else {
          dispatch('addProductToCartInLocalStorage', product);
        }
      }
    },

    deleteFromCart({ rootGetters, dispatch }, item) {
      if (rootGetters.loggedIn) {
        dispatch('deleteProductFromCartInDatabase', item);
      } else {
        dispatch('deleteProductFromCartInLocalStorage', item);
      }
    },

    // CRUD cart in local storage
    // Create
    createNewCartWithProductInLocalStorage({ commit }, cart) {
      const productList = [cart];
      setCart(productList);
      commit('UPDATE_CART', productList);
    },

    async addProductToCartInLocalStorage({ getters, dispatch }, product) {
      const isDuplicate = await dispatch('checkProductAlreadyPresent', product);
      if (!isDuplicate) {
        const cart = [ ...getters.cart, { product, quantity: 1 } ];
        dispatch('updateCartInLocalStorage', cart);
      } else {
        const cart = [ ...getters.cart ]
        const productIndex = cart.findIndex(element => element.product._id === product._id)
        if(cart[productIndex].quantity !== 10) cart[productIndex].quantity += 1
        dispatch('updateCartInLocalStorage', cart);
      }
    },

    deleteProductFromCartInLocalStorage({ dispatch, getters }, item) {
      const cart = reduceProductQuantity(getters.cart, item);
      dispatch('updateCartInLocalStorage', cart);
    },

    // Update
    updateCartInLocalStorage({ commit, dispatch }, cart) {
      if (cart?.length) {
        setCart(cart);
        commit('UPDATE_CART', cart);
      } else {
        dispatch('deleteCartFromLocalStorage');
      }
    },

    // Delete
    deleteCartFromLocalStorage({ commit }) {
      removeCart();
      commit('RENEW_CART');
    },

    // CRUD cart in database
    // Create
    async createNewCartWithProductInDatabase({ commit, rootGetters }, cart) {
      const formattedCart = changeCartFormat([cart]);
      const body = {
        data: {
          user: rootGetters.user._id,
          productList: formattedCart,
        },
      };
      const res = await axios.post('cart/create', body);
      commit('UPDATE_CART', res.data)
    },

    // Read
    async getCartFromDatabase() {
      // const body = { criteria: { user: rootGetters.user?._id } };
      const res = await axios.get('cart/get');
      return res.data;
    },

    async addProductToCartInDatabase({ dispatch, getters }, product) {
      const isDuplicate = await dispatch('checkProductAlreadyPresent', product);
      console.log("Duplicate", isDuplicate);
      if (!isDuplicate) {
        const cart = [ ...getters.cart, { product, quantity: 1 } ];
        await dispatch('updateCartInDatabase', cart);
      } else {
        const cart = [ ...getters.cart ]
        const productIndex = cart.findIndex(element => element.product._id === product._id)
        if(cart[productIndex].quantity !== 10) cart[productIndex].quantity += 1
        dispatch('updateCartInDatabase', cart);
      }
    },

    async deleteProductFromCartInDatabase({ dispatch, getters }, item) {
      const newCart = reduceProductQuantity(getters.cart, item);
      await dispatch('updateCartInDatabase', newCart);
    },

    // Update
    async updateCartInDatabase({ rootGetters, commit, dispatch }, newCart) {
      const formattedCart = changeCartFormat(newCart);
      const body = {
        criteria: { user: rootGetters.user._id },
        data: { productList: formattedCart }
      };
      const res = await axios.post('cart/update', body);
      const cart = res.data;
        if (isCartNotEmpty(cart)) {
          commit('UPDATE_CART', cart);
        } else {
          await dispatch('deleteCartFromDatabase');
        }
      return cart;
    },

    // Delete
    async deleteCartFromDatabase({ rootGetters, commit }) {
      const body = { criteria: { user: rootGetters.user._id } };
      const res = await axios.get('cart/delete', body);
      commit('RENEW_CART');
      return res.data;
    }
  },
  getters: {
    cartCount: state => state.cart?.length ? state.cart.length : 0,
    cart: state => state.cart,
    mrp: (state, getters) => {
      if (!getters.cart?.length) return 0;
      const calculateMrp = (acc, cart) => acc + (cart.product.price * cart.quantity);
      return getters.cart.reduce(calculateMrp, 0);
    }
  }
}

// helper functions

const getProductId = productList => ({ product: productList.product._id, quantity: productList.quantity })
export const changeCartFormat = productList => productList.map(getProductId);

const isCartNotEmpty = cart => !!cart?.length

const removeDuplicateItems = productList => productList.filter(
  (cart, index, self) =>
    self.findIndex(c => c.product._id === cart.product._id) === index
);

const reduceProductQuantity = (cart, { product, whole }) => {
  const productIndex = cart.findIndex(element => element.product._id === product._id)
  if(cart[productIndex].quantity === 1 || whole) return cart.filter(element => element.product._id !== product._id)
  cart[productIndex].quantity -= 1
  return cart
}

