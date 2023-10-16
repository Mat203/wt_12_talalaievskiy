import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Week from './components/Week';
import DayExpanded from './components/DayExpanded';
import NewTaskForm from './components/NewTaskForm';

function App() {
  return (
    <div className="App container-fluid">
      <div className="row">
        <div className="col-md-6 border">
          <h2>Weekly Planner</h2>
          <Week />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-12 border">
              <h2>Day in details</h2>
              <DayExpanded />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 border">
              <h2>New Task</h2>
              <NewTaskForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
