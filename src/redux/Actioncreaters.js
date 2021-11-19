import * as Actiontypes from './Actiontypes';

export const addProducts=(products)=>{
  return({
    type:Actiontypes.ADD_PRODUCTS,
    payload:products
  })
}

export const addProduct=(product)=>{
  return({
    type:Actiontypes.ADD_PRODUCT,
    payload:product
  })
}