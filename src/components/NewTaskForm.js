// NewTaskForm.js
import React, { useState, useContext } from 'react';
import { SelectedDayContext, TasksContext } from './Week';

const NewTaskForm = () => {
    const { tasks, setTasks } = useContext(TasksContext);
    const { selectedDay } = useContext(SelectedDayContext);
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    const [taskText, setTaskText] = useState('');
    const [taskTime, setTaskTime] = useState('');
    const [taskDay, setTaskDay] = useState(days[0]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            text: taskText,
            time: taskTime,
            day: taskDay,
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
        setTaskText('');
        setTaskTime('');
    };

    return (
        <form className="new-task-form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label className="form-label">Text</label>
                <input type="text" className="form-control" value={taskText} onChange={(e) => setTaskText(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Time</label>
                <input type="time" className="form-control" value={taskTime} onChange={(e) => setTaskTime(e.target.value)} />
            </div>
            <div className="mb-3">
                <label className="form-label">Day</label>
                <select className="form-control" value={taskDay} onChange={(e) => setTaskDay(e.target.value)}>
                    {days.map((day, index) => (
                        <option key={index} value={day}>{day}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="btn btn-primary">Добавить задание</button>
        </form>
    );
};

export default NewTaskForm;
