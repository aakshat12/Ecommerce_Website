//define  state and actions to change state
export const initialstate = {
  basket:[]
}

export const total = (basket) => {
  if (Array.isArray(basket)) {
      return basket.reduce((amount, item) => amount + item.price, 0);
  } else {
      // Handle the case when basket is not an array, e.g., return an error message or default value.
      return 0; // or throw an error, or return an appropriate default value
  }
}

const Reducer =(state = initialstate,action) =>{
  console.log("..state" , state ,action)
  switch(action.type){
      case "ADD_TO_BASKET":
          return{
              ...state,
              basket: [...state.basket, action.item]
          }
          // default:
          //     return state;
          case "REMOVE_FROM_CART":
const index = state.basket.findIndex(item => item.id === action.id);
if (index >= 0) {
  // Use filter to create a new array with the item removed
  const newBasket = state.basket.filter(item => item.id !== action.id);
  console.log("...",index)
  return {
    ...state,
    basket: newBasket
    
  };
  
}
 else {
  console.warn("Can't find the ID to remove.");
  return state; // Return the current state if the item is not found
}
default:
  return state;

            

              
     
              
              
  }
}


export default Reducer;