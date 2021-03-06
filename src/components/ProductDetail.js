import React ,{ useEffect }from 'react';
import axios from 'axios';
import store from '../redux/store';
import { addProduct } from '../redux/Actioncreaters';
import { useSelector } from 'react-redux';


function ProductDetail(props) {
  const productid=props.match.params.id;

  useEffect(()=>{
    const fetchdetails=()=>{
    axios.get(`https://fakestoreapi.com/products/${productid}`)
    .then((response)=>{
      //console.log(response.data)
      store.dispatch(addProduct(response.data))
    })
  }
  fetchdetails();
  },[productid])



  const product=useSelector((state)=>state.product.product)
  console.log(product)

  useEffect(()=>{
    store.dispatch(addProduct({}))
  },[])
  


  return (
    <>
      <div style={{display:'flex',marginTop:'110px'}}>
        <div >
          <img src={product.image} width="300px"  style={{marginLeft:'100px'}} alt={product.title}/>
        </div>
        <div style={{marginRight:'50px',marginLeft:'200px'}}>
          <h5>{product.title}</h5>
          <p>{product.description}</p>
          <div style={{display:'flex'}}>
            <p><strong>Price: {product.price} Rs.</strong></p>
            {/* <p style={{marginLeft:'300px'}}><strong>Rating: {product.rating.rate} </strong></p> */}
          </div>
          
        </div>
      </div>
    
    </>
  )
}

export default ProductDetail
