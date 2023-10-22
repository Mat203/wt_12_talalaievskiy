import React from 'react';
import { useContext } from 'react';
import { TasksContext } from './Week';

const Task = ({ text, time, day, startTime, endTime }) => {
    const { tasks, setTasks } = useContext(TasksContext);

    const handleDelete = () => {
        setTasks(tasks.filter(task => task.text !== text || task.time !== time || task.day !== day));
    };

    return (
        <div className="task">
            <h3>{text}</h3>
            <p>{startTime}</p>
            <p>{endTime}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Task;
