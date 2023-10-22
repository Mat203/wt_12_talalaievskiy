import React, { createContext } from 'react';
import Day from './Day';

export const SelectedDayContext = createContext();
export const TasksContext = createContext();

const Week = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <div className="week-container">
            {days.map((day, index) => (
                <div key={index}>
                    <Day day={day} />
                </div>
            ))}
        </div>
    );
};


export default Week;
