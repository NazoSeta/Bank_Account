import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddAccount() {

  let navigate = useNavigate();

  const [user, setUser] = useState({
    cardName: "",
    amount: 0.00,
    type: "",
    name: "",
    email: "",
  });

  const { cardName, amount, type, name, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/user", user);
    navigate("/");
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'>Register New Card</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className='mb-3'>
              <label htmlFor='Card Name' className='form-label'>
                Card Name (Letters and Numbers only)
              </label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter your card name'
                name='cardName'
                value={cardName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Amount' className='form-label'>
                Amount (Min deposit €0,- and two decimals)
              </label>
              <input
                type={"number"}
                step={0.01}
                min={0.00}
                className='form-control'
                placeholder='Enter your first deposit'
                name='amount'
                value={amount}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Type' className='form-label'>
                Card Type (Credit Card / Debit Card)
              </label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter your card type'
                name='type'
                value={type}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Name and Surname' className='form-label'>
                Name and Surname (Name blank Surname)
              </label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter your name and surname'
                name='name'
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='Email' className='form-label'>
                E-mail (example@gmail.com)
              </label>
              <input
                type={"text"}
                className='form-control'
                placeholder='Enter your e-mail adress'
                name='email'
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type='sumbit' className='btn btn-outline-primary' >
              Create New Card
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
