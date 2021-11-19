import * as Actiontypes from '../Actiontypes';

const intialState = {
  products: [],
};


export const productsReducer=(state=intialState,action)=>{
  switch(action.type){
    case Actiontypes.ADD_PRODUCTS:
      return {...state,products:action.payload}
    default:
      return state
  }

}

export const productReducer=(state={product:{}},action)=>{
  switch(action.type){
    case Actiontypes.ADD_PRODUCT:
      return {...state,product:action.payload}
    default:
      return state
  }
}