import React, {useEffect, useState}from 'react';
import{ToastContainer,toast} from 'react-toastify';
import TopMenu from './components/TopMenu';
import useFech from './hooks/useFecth';
import Products from './components/Products';
import {urlApiProducts} from './utils/constants';
import {STORAGE_PRODUCTS_CART} from './utils/constants'

function App() {


const products=useFech(urlApiProducts,null);
const [productsCart,setproductsCar]=useState([]);
const getProductsCart=()=>{

const idsProducts=localStorage.getItem(STORAGE_PRODUCTS_CART);

  if(idsProducts){
     const idsProductSplit =idsProducts.split(',');
      setproductsCar(idsProductSplit);
  }else{
      setproductsCar([]);
  }

}

useEffect(()=>{
  getProductsCart();

},[]);

 const  addProductCart=(id,name)=>{
   //console.log(`SE añadio el producto:  ${name} con id: ${id} a el carrito!`);
   const idsProducts=productsCart;
   idsProducts.push(id);
   setproductsCar(idsProducts);
  localStorage.setItem(STORAGE_PRODUCTS_CART,productsCart);
 // console.log('producto añadido!');
  toast.success(`Se añadio ${name} al carrito.`);
  getProductsCart();
 };
  //console.log(products);



  return (
    <div>
      <TopMenu productsCart={productsCart} getProductsCart={getProductsCart} products={products}></TopMenu>
     <Products products={products}  addProductCart={addProductCart}></Products>
     <ToastContainer
      position="bottom-left"
      autoClose={5000}
      hideProgressBar={true}   
      newestOnTop={true}
      closeOnClick={false}  
      rtl={false}
      pauseOnVisibilityChange={false}
      draggable={true}
      pauseOnHover={false}
     />
    </div>
  );
}

export default App;
