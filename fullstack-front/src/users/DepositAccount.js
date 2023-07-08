import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function DepositAccount() {

    let navigate = useNavigate();

    const { id } = useParams();

    const [user, setUser] = useState({
        amount: 0,
        tempAmount: 0
    });

    const { amount, tempAmount } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/user/deposit/${id}`, user);
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
                    <h2 className='text-center m-4'>Deposit to Card</h2>

                    <form onSubmit={(e) => onSubmit(e)}>
                        <div className='mb-3'>
                            <label htmlFor='Card Name' className='form-label'>
                                Deposit - Current amount: {tempAmount}
                            </label>
                            <input
                                type={"number"}
                                step={0.01}
                                min={0.00}
                                className='form-control'
                                placeholder='Enter your deposit amount'
                                name='amount'
                                onChange={(e) => onInputChange(e)}
                            />
                        </div>
                        <button type='sumbit' className='btn btn-outline-primary' >
                            Deposit
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
