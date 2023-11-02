// LoginPage.tsx
import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Username:', username, 'Password:', password);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>ورود</h1>
        <form onSubmit={handleSubmit}>
          <label>نام‌کاربری</label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <label>رمز ورود</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button type="submit">ورود</button>
        </form>
        <p>ساخت حساب‌کاربری جدید</p>

      </div>
    </div>
  );
};

export default LoginPage;
