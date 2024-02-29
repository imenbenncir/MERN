import React, {useEffect} from 'react'
import axios from 'axios';
import { useNavigate ,Link } from "react-router-dom"

const ProductList = (props) => {
    const {productList , setProductList} = props
    const navigate = useNavigate();
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products")
        .then((res)=>{
            console.log(res.data);
            setProductList(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [setProductList])
    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log("Product deleted successfully:", res.data);
                const filteredProduct = productList.filter((product) => product._id !== id);
                setProductList(filteredProduct);
                navigate("/");
        })
            .catch((err) => console.log(err));
    };
    return (
        <div className="container mt-5">
            <h1 className="mb-4">All Products:</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        productList.map((product, index)=>{
                            return (
                                <tr key={product._id}>
                                    <td>
                                        <Link to={`/products/${product._id}`} className ="btn">{product.title} </Link>
                                    </td>
                                    <td  className="d-grid gap-2 d-md-flex justify-content-md-end" >
                                        <Link to ={`/products/edit/${product._id}`} className ="btn btn-primary mr-2"> Edit</Link>
                                        <button onClick={() => deleteProduct(product._id)} className="btn btn-danger">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ProductList;

