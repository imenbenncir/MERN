import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const OneProduct = () => {
    const [oneProduct, setOneProduct] = useState(null)
    const navigate = useNavigate();
    const { id } = useParams()

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + id)
            .then(res => {
                console.log(res)
                console.log(res.data)
                setOneProduct(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [id])

    const deleteHandler = () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h2>{oneProduct ? oneProduct.title : 'Loading...'}</h2>
                        </div>
                        <div className="card-body">
                            {oneProduct ? (
                                <>
                                    <p className="card-text"> Price: ${oneProduct.price}</p>
                                    <p className="card-text">Description: {oneProduct.description}</p>
                                    <button className="btn btn-danger" onClick={deleteHandler}>Delete</button>
                                </>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OneProduct;
