import React from 'react';

const Task = ({ title, description, startTime, endTime }) => {
    return (
        <div className="task-container">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Start Time: {startTime}</p>
            <p>End Time: {endTime}</p>
        </div>
    );
};

export default Task;
