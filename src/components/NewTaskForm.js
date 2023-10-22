import React, { useState, useContext } from 'react';
import { TasksContext } from './Week';

const NewTaskForm = () => {
    const { tasks, setTasks } = useContext(TasksContext);
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [taskText, setTaskText] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [taskDay, setTaskDay] = useState(days[0]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            text: taskText,
            startTime: startTime,
            endTime: endTime,
            day: taskDay,
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
        setTaskText('');
        setStartTime('');
        setEndTime('');
    };

    return (
        <form className="new-task-form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Text</label>
                <input type="text" className="form-control" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Start Time</label>
                <input type="time" className="form-control" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">End Time</label>
                <input type="time" className="form-control" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Day</label>
                <select className="form-control" value={taskDay} onChange={(e) => setTaskDay(e.target.value)}>
                    {days.map((day, index) => (
                        <option key={index} value={day}>{day}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Add Task</button>
        </form>
    );
};

export default NewTaskForm;
