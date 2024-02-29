import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const Create = () => {
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/authors", { name })
        .then((res) => navigate("/authors"))
        .catch((err) => { 
            console.log(err.response.data.errors);
        const errorResponse = err.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header justify-content-start">
                            <h2 className="mb-4">Favorite authors</h2>
                            <Link to="/authors" className="btn btn-link text-start">Home</Link>
                            <h6 className="text-start">Add a new author</h6>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                                    {errors.name ? <p>{errors.name.message}</p> : null}
                                </div>
                                <div className="d-grid gap-2">
                                    <button type="button" onClick={() => navigate("/authors")} className="btn btn-secondary">Cancel</button>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Create;
