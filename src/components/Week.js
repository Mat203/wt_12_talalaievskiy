import React, { useState, createContext } from 'react';
import Day from './Day';
import DayExpanded from './DayExpanded';

export const SelectedDayContext = createContext();
export const TasksContext = createContext();

const Week = () => {
    const [selectedDay, setSelectedDay] = useState(null);
    const [tasks, setTasks] = useState([]);
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    return (
        <SelectedDayContext.Provider value={{ selectedDay, setSelectedDay }}>
            <TasksContext.Provider value={{ tasks, setTasks }}>
                <div className="week-container">
                    {days.map((day, index) => (
                        <div key={index}>
                            <Day day={day} />
                        </div>
                    ))}
                    {selectedDay && <DayExpanded day={selectedDay} />}
                </div>
            </TasksContext.Provider>
        </SelectedDayContext.Provider>
    );
};

export default Week;