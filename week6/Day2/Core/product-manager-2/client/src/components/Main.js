import React, {useState} from 'react'
import CreateProduct from './CreateProduct'
import ProductList from './ProductList'

function Main(props) {
    const [productList , setProductList] = useState ([])
  return (
    <div>
        <CreateProduct productList={productList} setProductList={setProductList}/>
        <ProductList productList={productList} setProductList={setProductList}/>
    </div>
  )
}
export default Main ;