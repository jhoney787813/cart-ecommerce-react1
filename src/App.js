import React, {useEffect}from 'react';
import TopMenu from './components/TopMenu';
import useFech from './hooks/useFecth';
import Products from './components/Products';
import {urlApiProducts} from './utils/constants';

function App() {


 const products=useFech(urlApiProducts,null);
  console.log(products);



  return (
    <div>
      <TopMenu></TopMenu>
     <Products products={products}></Products>
    </div>
  );
}

export default App;
