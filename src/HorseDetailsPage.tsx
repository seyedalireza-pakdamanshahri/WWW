// src/HorseDetailsPage.tsx

import './HorseDetailsPage.css';

import React, { useState } from 'react';

const HorseDetailsPage: React.FC = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [race, setRace] = useState('');

    const handleSubmit = () => {
        // Handle save logic here
        alert('جزئیات ذخیره شد!');
    }

    return (
        <div id="horse-details-container">
            <h1 id="horse-details-title">جزئیات اسب</h1>
            <div className="input-group">
                <label htmlFor="horse-height">ارتفاع: </label>
                <input id="horse-height" type="text" value={height} onChange={(e) => setHeight(e.target.value)} />
            </div>
            <div className="input-group">
                <label htmlFor="horse-weight">وزن: </label>
                <input id="horse-weight" type="text" value={weight} onChange={(e) => setWeight(e.target.value)} />
            </div>
            <div className="input-group">
                <label htmlFor="horse-race">نژاد: </label>
                <input id="horse-race" type="text" value={race} onChange={(e) => setRace(e.target.value)} />
            </div>
            <button id="horse-details-save" onClick={handleSubmit}>ذخیره</button>
        </div>
    );
}

export default HorseDetailsPage;

