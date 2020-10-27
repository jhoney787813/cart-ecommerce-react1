import React  from 'react';
import {Container,Row} from 'react-bootstrap';
import Loading from '../Loading';
import Product from '../Product';
import './Products.scss';

export default function Products(props)
{   const {products:{result,loading,error},
            addProductCart }=props;

           // console.log(props);
    return (
        <Container>
            <Row>
                {loading||!result ?(
                    <Loading></Loading>
                   
                ):
                ( 
                    result.map((product,index)=>(  
                          
                        <Product key={index} Product={product} addProductCart={addProductCart}></Product>
                        
                        ))               
                    )
                }
            </Row>
        </Container>
    );
}
