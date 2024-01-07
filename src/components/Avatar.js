import React, { useContext } from 'react';

import AuthContext from '../contexts/AuthContext';

function Login(props) {
    const { setShowLogin } = props;
    const { user, signUp, signOut } = useContext(AuthContext);

    const handleSignUp = () => {
        signUp('test2@abc.com', 'test1234').catch((err) => {
            console.log('err', err)
        });
    }

    const opeLoginForm = (e) => {
        e.preventDefault()
        setShowLogin(true)
    }


    return (
        <div>
            { user ? <div>Logged In: {user.email} </div> : <button onClick={opeLoginForm}>Login</button> }
            { user &&  <button onClick={signOut}>Logout</button>}
        </div>
    );
}

export default Login;