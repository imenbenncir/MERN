import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreateProduct = (props) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const {productList, setProductlist} = props;
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
            setProductlist([...productList, res.data])
            nav("/")
        })
        .catch((err)=> {
            console.log(err);
        });
    }

    return (
        <div>
            <header>
                Product Manager
            </header>
            <form onSubmit={SubmitHandler}>
                <div className="form-group">
                    <label>Title</label>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} name="title" type="text" className="form-control"/>
                </div>
                <br />
                <div className="form-group">
                    <label>Price</label>
                    <input onChange={(e) => setPrice(e.target.value)} value={price} name="price" type="number" className="form-control"/>
                </div>
                <br />
                <div className="form-group">
                    <label>Description</label>
                    <input onChange={(e) => setDescription(e.target.value)} value={description} name="description" type="text"className="form-control"/>
                </div>
                <br />
                <input className="submit-input" type="submit" value="Create" />
            </form>
        </div>
    );
};

export default CreateProduct;