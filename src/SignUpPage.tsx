import React, { useState } from 'react';
import './LoginPage.css';

const SignUpPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = () => {
        // Handle sign up logic here
        if (password !== confirmPassword) {
            alert('گذرواژه و تایید گذرواژه برابر نیستند!');
            return;
        }
        alert('ثبت نام شده!');
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>ثبت نام در سامانه</h1>
                <div>
                    <label>نام کاربری: </label>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>گذرواژه: </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>تایید گذرواژه: </label>
                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <button onClick={handleSubmit}>ثبت نام</button>
            </div>
        </div>
    );

}

export default SignUpPage;
