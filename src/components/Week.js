import React from 'react';
import Day from './Day';

const Week = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return (
        <div className="week-container">
            {days.map(day => <Day day={day} />)}
        </div>
    );
};

export default Week;