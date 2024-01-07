import React, { useState } from 'react';
import { Link } from "gatsby"

import Avatar from './Avatar';
import LoginForm from './LoginForm';

const headerContainer = {
    maxWidth: '100%',
    height: '60px',
    backgroundColor: 'grey',
    display: 'flex',
    justifyContent: 'space-between',
    color: 'white',
    padding: '20px'
}

function Header(props) {
    const [showLogin, setShowLogin] = useState(false)
    return (
        <>
            <div style={headerContainer}>
                <div>Header</div>
                <Link to='/about'>About</Link>
                <Avatar setShowLogin={setShowLogin} />
            </div>
            {showLogin && <LoginForm setShowLogin={setShowLogin}/>}
        </>
    );
}

export default Header;