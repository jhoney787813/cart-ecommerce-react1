import React from 'react';
import{Col,Card,Button} from 'react-bootstrap';
import {BASE_PATH} from '../../utils/constants';
import './Product.scss';

export default function Product(props)
{
    const {Product,addProductCart}=props;
 return(
        <Col xs={3} className="product">
            <Card>
                <Card.Img variant="top" src={`${BASE_PATH}/${Product.image}`}/>
                <Card.Body>
                    <Card.Title>{Product.name}</Card.Title>
                    <Card.Text>{Product.extraInfo}</Card.Text>
                    <Card.Text>$ {Product.price.toFixed(2)} Unidad</Card.Text>
                    <Button onClick={()=>addProductCart(Product.id,Product.name)} > Añadir al carrito</Button>
                </Card.Body>
            </Card>

        </Col>

 );
}