import React from 'react';
import { useContext } from 'react';
import { SelectedDayContext, TasksContext } from './Week';

const Day = ({ day }) => {
    const { selectedDay, setSelectedDay } = useContext(SelectedDayContext);
    const { tasks } = useContext(TasksContext);

    const dayTasks = tasks.filter(task => task.day === day);
    let totalTaskTime = 0;
    dayTasks.forEach(task => {
        const startTime = new Date(`1970-01-01T${task.startTime}Z`);
        const endTime = new Date(`1970-01-01T${task.endTime}Z`);
        const duration = (endTime - startTime) / (1000 * 60); 
        totalTaskTime += duration;
    });

    const handleClick = () => {
        setSelectedDay(day);
    };

    return (
        <div 
            className={`day-container ${selectedDay === day ? 'bg-success' : ''}`} 
            onClick={handleClick}
            style={{ border: '3px dashed #ccc', marginBottom: '20px', cursor: 'pointer' }}
        >
             <h2>{day}</h2>
            <p>Amount of tasks: {dayTasks.length}</p>
            <p>Total task time: {totalTaskTime} minutes</p>
        </div>
    );
};

export default Day;
