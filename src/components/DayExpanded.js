import React from 'react';
import { useContext } from 'react';
import Task from './Task';
import { SelectedDayContext, TasksContext } from './Week';

const DayExpanded = () => {
    const { selectedDay } = useContext(SelectedDayContext);
    const { tasks } = useContext(TasksContext);

    const dayTasks = tasks.filter(task => task.day === selectedDay);

    return (
        <div className="day-expanded-container">
            <h2>{selectedDay}</h2>
            {dayTasks.map(task => <Task {...task} />)}
        </div>
    );
};

export default DayExpanded;
