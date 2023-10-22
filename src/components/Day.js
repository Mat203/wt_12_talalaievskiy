import React from 'react';
import { useContext } from 'react';
import Task from './Task';
import { SelectedDayContext, TasksContext } from './Week';

const Day = ({ day }) => {
    const { selectedDay, setSelectedDay } = useContext(SelectedDayContext);
    const { tasks } = useContext(TasksContext);

    const dayTasks = tasks.filter(task => task.day === day);
    const totalDuration = dayTasks.reduce((total, task) => total + task.duration, 0);

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
            {dayTasks.map(task => <Task {...task} />)}
        </div>
    );
};

export default Day;
