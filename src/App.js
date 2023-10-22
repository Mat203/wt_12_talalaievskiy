import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Week, { SelectedDayContext, TasksContext } from './components/Week';
import DayExpanded from './components/DayExpanded';
import NewTaskForm from './components/NewTaskForm';

function App() {
  const [selectedDay, setSelectedDay] = React.useState(null);
  const [tasks, setTasks] = React.useState([]);

  return (
    <SelectedDayContext.Provider value={{ selectedDay, setSelectedDay }}>
      <TasksContext.Provider value={{ tasks, setTasks }}>
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
                  {selectedDay && <DayExpanded />}
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 border">
                  <h2>New Task</h2>
                  <NewTaskForm setTasks={setTasks} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </TasksContext.Provider>
    </SelectedDayContext.Provider>
  );
}

export default App;