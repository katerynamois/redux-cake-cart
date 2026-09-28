import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions/cartActions';

const initialState = {
  cakes: [],
  totalItems: 0,
  totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existing = state.cakes.find(cake => cake.id === action.payload.id);

      let newCakes;
      if (existing) {
        newCakes = state.cakes.map(cake =>
          cake.id === action.payload.id
            ? { ...cake, quantity: cake.quantity + 1 }
            : cake
        );
      } else {
        newCakes = [...state.cakes, { ...action.payload, quantity: 1 }];
      }

      return {
        ...state,
        cakes: newCakes,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.price
      };
    }

    case REMOVE_FROM_CART: {
      const cakeToRemove = state.cakes.find(cake => cake.id === action.payload);
      if (!cakeToRemove) return state;

      let newCakes;
      if (cakeToRemove.quantity > 1) {
        newCakes = state.cakes.map(cake =>
          cake.id === action.payload
            ? { ...cake, quantity: cake.quantity - 1 }
            : cake
        );
      } else {
        newCakes = state.cakes.filter(cake => cake.id !== action.payload);
      }

      return {
        ...state,
        cakes: newCakes,
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - cakeToRemove.price
      };
    }

    case CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};

export default cartReducer;
