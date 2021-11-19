import { useEffect } from "react";
import axios from 'axios';
import store from '../redux/store';
import { addProducts } from '../redux/Actioncreaters';
import { useSelector } from 'react-redux';
import {Card,CardImg,CardBody,CardText, CardTitle,Row,Col} from 'reactstrap';
import {Link} from 'react-router-dom';


const Products=()=>{

  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
    .then((response)=>
    //console.log(response.data),
    store.dispatch(addProducts(response.data))
    )
  },[])

  const products=useSelector((state)=>state.products.products)
  console.log(products)

  
  


  return(
    <>
      <Row style={{margin:'50px'}} xs={4}>
        {products.map((product)=>{
          return(
            <Col>
            <Link to={`/productdetail/${product.id}`} style={{textDecoration:'none',color:'black'}}>
            <Card key={product.id} style={{ width: '18rem' ,margin:'10px'}}>
              <CardBody>
                <CardImg variant="top" src={product.image} height="300px"></CardImg>
                <CardTitle><strong>{product.title}</strong></CardTitle>
                <CardText><strong>{product.price} Rs.</strong></CardText>
              </CardBody>

            </Card>
            </Link>
            </Col>

          )
        })}
      </Row>
    </>
  )
}

export default Products