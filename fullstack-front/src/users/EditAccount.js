import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function EditAccount() {

    let navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
        cardName: "",
        name: "",
        email: "",
    });

    const { cardName, name, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/${id}`, user);
        navigate("/");
    };

    const loadUser = async () => {
        const result = await axios.get(`http://localhost:8080/user/${id}`);
        setUser(result.data);
    };

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                    <h2 className='text-center m-4'>Edit Card Information</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Card Name' className='form-label'>
                                New Card Name (Letters and Numbers only)
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Edit your card name'
                                name='cardName'
                                value={cardName}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Name and Surname' className='form-label'>
                                New Name and Surname (Name blank Surname)
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Edit your name and surname'
                                name='name'
                                value={name}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='Email' className='form-label'>
                                New E-mail (example@gmail.com)
                            </label>
                            <input
                                type={"text"}
                                className='form-control'
                                placeholder='Edit your e-mail adress'
                                name='email'
                                value={email}
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type='sumbit' className='btn btn-outline-primary' >
                            Update Card Information
                        </button>
                        <Link className='btn btn-outline-danger mx-2' to="/">
                            Cancel
                        </Link>
                    </form>

                </div>
            </div>
        </div>
    );
}
