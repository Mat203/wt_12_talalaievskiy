import React from 'react';

const NewTaskForm = () => {
    return (
        <form className="new-task-form">
            <div className="mb-3">
                <label className="form-label">Text</label>
                <input type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Time</label>
                <input type="time" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Number</label>
                <input type="number" className="form-control" />
            </div>
        </form>
    );
};

export default NewTaskForm;
