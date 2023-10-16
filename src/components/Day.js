import React from 'react';
import Task from './Task';

const Day = ({ day }) => {
    return (
        <div className="day-container" style={{ border: '3px dashed #ccc', marginBottom: '20px' }}>
            <h2>{day}</h2>
            {}
            <Task />
        </div>
    );
};

export default Day;
