import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../actions/cartActions';

const initialState = {
  cakes: [],
  totalItems: 0,
  totalPrice: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cakes: [...state.cakes, action.payload],
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + action.payload.price
      };
    
    case REMOVE_FROM_CART:
      const cakeToRemove = state.cakes.find(cake => cake.id === action.payload);
      return {
        ...state,
        cakes: state.cakes.filter(cake => cake.id !== action.payload),
        totalItems: state.totalItems - 1,
        totalPrice: state.totalPrice - (cakeToRemove ? cakeToRemove.price : 0)
      };
    
    case CLEAR_CART:
      return initialState;
    
    default:
      return state;
  }
};

export default cartReducer;
