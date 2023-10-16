import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Week from './components/Week';
import DayExpanded from './components/DayExpanded';
import NewTaskForm from './components/NewTaskForm';

function App() {
  return (
    <div className="App container">
      <div className="row">
        <div className="col-md-8">
          <Week />
          <DayExpanded />
        </div>
        <div className="col-md-4">
          <NewTaskForm />
        </div>
      </div>
    </div>
  );
}

export default App;
