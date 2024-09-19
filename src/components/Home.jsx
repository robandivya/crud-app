import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:2001/users')
            .then(res => setData(res.data))
            .catch(error => console.log(error))

    }, [])

    const handleDelete = (id) => {
        const confirmDelete = window.confirm("Would you like to delete?");
        if (confirmDelete) {
            axios.delete('http://localhost:2001/users/' + id)
                .then(res => {
                    console.log("User deleted:", res);
                    location.reload();
                })
                .catch(err => {
                    console.log("Error deleting user:", err);
                });
        }
    }


    return (
        <>
            <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
                <h1>List of Users</h1>
                <div className="w-75 rounded bg-white border shadow p-4">
                    <div className="d-flex justify-content-end">
                        <Link to='/create' className="btn btn-success">Add +</Link>
                    </div>
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((data, index) => (
                                    <tr key={index.id}>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>
                                            <Link to={`/read/${data.id}`} className="btn btn-sm btn-info me-2">Read</Link>
                                            <Link to={`/update/${data.id}`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                            <button onClick={() => handleDelete(data.id)} className="btn btn-sm btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
