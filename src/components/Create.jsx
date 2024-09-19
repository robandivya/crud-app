import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
    const [value, setValue] = useState({
        name: '',
        email: '',
        phone: ''
    });

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get('http://localhost:2001/users');
            const users = response.data;
            const highestId = Math.max(...users.map(user => parseInt(user.id, 10)), 0);
            const newId = (highestId + 1).toString();

            await axios.post('http://localhost:2001/users', { id: newId, ...value });
            console.log("User added");
            navigate('/');
        } catch (error) {
            console.log("Error adding user:", error);
        }
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
                <h1>Add a User</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter name" required
                            onChange={e => setValue({ ...value, name: e.target.value })}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" className="form-control" placeholder="Enter Email" required
                            onChange={e => setValue({ ...value, email: e.target.value })}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="phone">Phone:</label>
                        <input type="text" name="phone" className="form-control" placeholder="Enter Phone" required
                            onChange={e => setValue({ ...value, phone: e.target.value })}
                        />
                    </div>
                    <button className="btn btn-success">Submit</button>
                    <Link to='/' className="btn btn-primary ms-3">Back</Link>
                </form>
            </div>
        </div>
    );
};

export default Create;
