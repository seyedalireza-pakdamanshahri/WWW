// src/MenuBar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar: React.FC = () => {
    return (
        <div className="menu-container">
            <ul>
                <li><Link to="/">درباره ما</Link></li>
                <li><Link to="/sign-in">ورود</Link></li>
                <li><Link to="/sign-up">ثبت نام</Link></li>
                <li><Link to="/horse-details">جزئیات اسب</Link></li>
            </ul>
        </div>
    );
}

export default MenuBar;
