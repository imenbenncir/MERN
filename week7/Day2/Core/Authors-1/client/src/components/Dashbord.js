import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link , useNavigate } from 'react-router-dom';

const Dashboard =() =>{
    const [allAuthors, setAllAuthors] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/authors")
            .then((response) => setAllAuthors(response.data))
            .catch((err) => console.log(err.response));
    }, []);

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
            .then((res) => {
                console.log("Author deleted successfully:", res.data);
                const filteredAuthors = allAuthors.filter((author) => author._id !== id);
                setAllAuthors(filteredAuthors);
                navigate("/authors");
        })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Favorite authors</h2>
            <Link to="/authors/new" className="btn btn-primary mb-3">Add an author</Link>
            <p className="text-primary">We have quotes by:</p>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {allAuthors.map((author) => (
                    <tr key={author._id}>
                        <td>{author.name}</td>
                        <td>
                        <Link to={`/authors/${author._id}/edit`} ><button className="btn btn-primary me-2"> Edit</button></Link>
                        <button onClick={() => deleteAuthor(author._id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default Dashboard;
