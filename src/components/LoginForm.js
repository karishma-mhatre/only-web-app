import React, { useContext, useEffect, useState } from 'react';

import AuthContext from '../contexts/AuthContext';

function LoginForm(props) {
    const [data, setData] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { login } = useContext(AuthContext)
    const { setShowLogin } = props;


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            await login(data.email, data.password);
            setIsLoading(false);
            setShowLogin(false)
        } catch (error) {
            console.log(error)
            setError(error.message);
            setIsLoading(false);
        }
    }

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }

    console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={data.password}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button disabled={isLoading}>{isLoading ? 'Logging In...' : 'Login'}</button>
                </div>
                {error && <div>{error}</div>}
            </form>
        </div>
    );
}

export default LoginForm;