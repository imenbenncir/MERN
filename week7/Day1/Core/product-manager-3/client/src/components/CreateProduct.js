import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreateProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {productList, setProductList} = props
    const nav = useNavigate();

    const SubmitHandler = (e) => {
        e.preventDefault();
        console.log("it is working")
        axios.post("http://localhost:8000/api/products", {
        title,
        price,
        description
        })
        .then((res)=> {
            console.log(res);
            console.log(res.data);
            setTitle("");
            setPrice("");
            setDescription("");
            setProductList([...productList, res.data])
            nav("/")
        })
        .catch((err)=> {console.log(err);
        });
    }

    return (
        <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header justify-content-start">
                        <h1>Create Product</h1>
                    </div>
                    <div className="card-body">
                        <form onSubmit={SubmitHandler}>
                            <div className="form-group">
                                <label>Title:</label>
                                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"  />
                                </div>
                            <div className="form-group">
                                <label className="form-control">Price:</label>
                                <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="form-control">Description:</label>
                                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
                            </div>
                            <br />
                            <div className="grid gap-1">
                            <button  className="btn btn-primary" type="submit"> Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default CreateProduct;