const { createSlice } = require("@reduxjs/toolkit");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    showMiniCart: false,
    cartItem: [],
  },

  reducers: {
    showMiniCart(state) {
      state.showMiniCart = true;
    },
    hideMiniCart(state) {
      state.showMiniCart = false;
    },

    addToCart(state, actions) {
      //newItem = {id, product, quantity}
      const newItem = actions.payload;
      const index = state.cartItem.findIndex((x) => x.id === newItem.id);

      if (index >= 0) {
        //increase
        state.cartItem[index].quantity += newItem.quantity;
      } else {
        //add to cart
        state.cartItem.push(newItem);
      }
    },

    setQuantity(state, actions) {
      const { id, quantity } = actions.payload;
      //check if product is available in cart
      const index = state.cartItem.findIndex((x) => x.id === id);
      if (index >= 0) {
        state.cartItem[index].quantity = quantity;
      }
    },

    removeFromCart(state, actions) {
      const idNeedToRemove = actions.payload;
      state.cartItem = state.cartItem.filter((x) => x.id !== idNeedToRemove);
    },
  },
});

const { actions, reducer } = cartSlice;
export const {
  showMiniCart,
  hideMiniCart,
  addToCart,
  setQuantity,
  removeFromCart,
} = actions; //name export
export default reducer; //default export
