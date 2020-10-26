import React from 'react';
import{Col,Card,Button} from 'react-bootstrap';
import {BASE_PATH} from '../../utils/constants';
import './Product.scss';

export default function Product(props)
{
    const {Product}=props;
 return(
        <Col xs={3} className="product">
            <Card>
                <Card.Img variant="top" src={`${BASE_PATH}/${Product.image}`}/>
                <Card.Body>
                    <Card.Title>{Product.name}</Card.Title>
                    <Card.Text>{Product.extraInfo}</Card.Text>
                    <Card.Text>{Product.price} Unidad</Card.Text>
                    <Button>Añadir al carrito</Button>
                </Card.Body>
            </Card>

        </Col>

 );
}