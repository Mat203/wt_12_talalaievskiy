import React from 'react';

const Task = ({ text, time }) => {
    return (
        <div className="task">
            <h3>{text}</h3>
            <p>{time}</p>
        </div>
    );
};

export default Task;
