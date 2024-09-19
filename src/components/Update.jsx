import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {

    const [value, setValue] = useState({ name: '', email: '', phone: '' })
    const { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:2001/users/' + id)
            .then(res => setValue(res.data))
            .catch(error => console.log(error))

    }, [id]);

    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        axios.put('http://localhost:2001/users/' + id, value)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(error => {
                console.log("Error updating user:", error);
            });
    }


    return (
        <>
            <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
                <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                    <h1>Update User</h1>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-2">
                            <label htmlFor="name">Name:</label>
                            <input type="text" name="name" className="form-control" placeholder="Enter name" required
                                value={value.name} onChange={e => setValue({ ...value, name: e.target.value })} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" className="form-control" placeholder="Enter Email" required
                                value={value.email} onChange={e => setValue({ ...value, email: e.target.value })} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="phone">Phone:</label>
                            <input type="text" name="phone" className="form-control" placeholder="Enter Phone" required
                                value={value.phone} onChange={e => setValue({ ...value, phone: e.target.value })} />
                        </div>
                        <button className="btn btn-success">Update</button>
                        <Link to='/' className="btn btn-primary ms-3">Back</Link>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Update