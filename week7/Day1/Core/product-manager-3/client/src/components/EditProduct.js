import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const { id } = useParams();
    const nav = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);;
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const SubmitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
                title,
                price,
                description
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                nav("/")
            })
            .catch(error => console.error(error));
    };


    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header justify-content-start">
                            <h1>Edit Product</h1>
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
                                <button type="submit" className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
