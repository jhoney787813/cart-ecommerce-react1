import React,{useState,useEffect} from 'react';
import {Button} from 'react-bootstrap';

import {ReactComponent as CartEmpty} from '../../assets/Iconos/cart-empty.svg';
import {ReactComponent as CartFull} from '../../assets/Iconos/cart-full.svg';
import {ReactComponent as CartClose} from '../../assets/Iconos/close.svg';
import {ReactComponent as CartDelete} from '../../assets/Iconos/garbage.svg';
import {STORAGE_PRODUCTS_CART,BASE_PATH} from '../../utils/constants'
import {countDuplicatesItemArray, removeArrayDuplicates, removeItemArray} from '../../utils/arrayFunc';
import './Cart.scss';
export default function Cart(props)
{
    const {productsCart,getProductsCart,products}=props;
    //console.log(productsCart);

    const [cartOpen,setCartOpen]=useState(false);
    const openCart=()=>{
        setCartOpen(true);
        document.body.style.overflow="hidden";
    };

    const widthCarContent= cartOpen? 400:0;
    const [singelProductsCart,setSingelProductsCart]=useState([]);

    useEffect(()=>{
        const allProductsId=removeArrayDuplicates(productsCart);
       setSingelProductsCart(allProductsId);
    },[productsCart]);

    const closeCart =()=>{
        setCartOpen(false);
        document.body.style.overflow="scroll";
    };

    const EmptyCart =()=>
    {
        localStorage.removeItem(STORAGE_PRODUCTS_CART);   
        getProductsCart();
    };

    const increaseQuantity=(id)=>{
        const arrayItemsCart=productsCart;
        arrayItemsCart.push(id);
        localStorage.setItem(STORAGE_PRODUCTS_CART,arrayItemsCart);
        getProductsCart();

    };

    const decreaseQuantity=(id)=>{
        const arrayItemsCart=productsCart;
        const result=removeItemArray(arrayItemsCart,id.tosString());
        localStorage.setItem(STORAGE_PRODUCTS_CART,result);
        getProductsCart();
    };

    return (
        <>
        <Button variant="link" className="cart">
            {productsCart.length >0 ?(
                <CartFull onClick={openCart}/>
            ) :(
                <CartEmpty onClick={openCart}/>
                )
            }
            
        </Button>
        <div className="cart-content" style={{width:widthCarContent}}>
            <CartContentHeader closeCart={closeCart} EmptyCart={EmptyCart}/>
           
           <div className="cart-content__products">        
            {singelProductsCart.map((idProductsCart,index)=> (
                <CartContentProducts 
                key={index} 
                products={products} 
                idsProductsCart={productsCart}
                idProductCart={idProductsCart}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                />
            )            
            )}
            </div> 
        </div>
        </>
    );
}

function CartContentHeader(props)
{
    const {closeCart,EmptyCart}=props;
    return (
        <div className="cart-content__header">
            <div>
                <CartClose onClick={closeCart}/>
                <h2>Carrito</h2>
            </div>
            <Button variant="link" onClick={EmptyCart}>Vaciar
            <CartDelete/>
            </Button>
        </div>

    );
}


function CartContentProducts(props){

    const {products:{loading,result},
            idsProductsCart,
            idProductCart,
            increaseQuantity,
            decreaseQuantity
         }=props;

         if(!loading && result)
         {
            return result.map((product,index)=>{

                if(idProductCart==product.id){
                    const quantity=countDuplicatesItemArray(product.id,idsProductsCart);
                    return(
                        <RenderProduct
                        key={index}
                        product={product}
                        quantity={quantity}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        />
                    );
                }
            })
         }


    return(
            <>
            
            </>
     );
};

function RenderProduct(props)
{
     const {product,quantity,increaseQuantity,decreaseQuantity}=props;
    return (

        <div className="cart-content__product">
            <img src={`${BASE_PATH}/${product.image}`}  alt={product.name}/>
            <div className="cart-content__product-info">
                <div>
                    <h3>{product.name.substr(0,25)}...</h3>
                    <p>{product.price.toFixed(2)}  $/ Und</p>

                </div>
                <div>
                    <p>En carro: {quantity} und</p>
                    <div>
                        <button onClick={()=>increaseQuantity(product.id)}>+</button>
                        <button onClick={()=>decreaseQuantity(product.id)}>-</button>
                    </div>
                </div>
            </div>

        </div>

    );
}