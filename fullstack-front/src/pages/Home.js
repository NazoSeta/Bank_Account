import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/users");
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`);
        loadUsers();
    };

    return (
        <div className='container'>
            <div className='py-4'>
                <table className="table border shadow">
                    <thead>
                        <tr>
                            <th scope="col">IBAN</th>
                            <th scope="col">Card Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Card Type</th>
                            <th scope="col">Name/Surname</th>
                            <th scope="col">E-mail</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, index) => (
                                <tr>
                                    <td>{user.iban}</td>
                                    <td>{user.cardName}</td>
                                    <td>{user.amount}</td>
                                    <td>{user.type}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link
                                            className='btn btn-primary mx-2'
                                            to={`/viewaccount/${user.id}`}
                                        >View</Link>
                                        <Link
                                            className='btn btn-primary mx-2'
                                            to={`/editaccount/${user.id}`}
                                        >Edit</Link>
                                        <Link
                                            className='btn btn-danger mx-2'
                                            onClick={() => deleteUser(user.id)}
                                        >Delete</Link>
                                        <Link
                                            className='btn btn-outline-secondary mx-2'
                                            to={`/depositaccount/${user.id}`}
                                        >Deposit</Link>
                                        <Link
                                            className='btn btn-outline-secondary mx-2'
                                            to={`/withdrawaccount/${user.id}`}
                                        >Withdraw</Link>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
