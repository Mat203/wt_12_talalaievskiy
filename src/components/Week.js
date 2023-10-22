import React, { useState, useContext, createContext } from 'react';
import Day from './Day';

export const SelectedDayContext = createContext();
export const TasksContext = createContext();

const Week = () => {
    const { setSelectedDay } = useContext(SelectedDayContext);
    const [tasks, setTasks] = useState([
        { text: 'Task 1', time: '10:00', day: 'Monday' },
        { text: 'Task 2', time: '11:00', day: 'Tuesday' },
        { text: 'Task 3', time: '12:00', day: 'Wednesday' },
    ]);
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            <div className="week-container">
                {days.map((day, index) => (
                    <div key={index}>
                        <Day day={day} />
                    </div>
                ))}
            </div>
        </TasksContext.Provider>
    );
};

export default Week;
