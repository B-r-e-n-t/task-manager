import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Buy Groceries',
            day: 'March 1, 2023 at 12:27',
            reminder: true
        },
        {
            id: 2,
            text: 'Clean Kitchen',
            day: 'March 1, 2023 at 12:27',
            reminder: false
        },
        {
            id: 3,
            text: 'Buy rustoleum for car',
            day: 'March 1, 2023 at 12:27',
            reminder: true
        }
    ])

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header />
      <AddTask />
      { tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle= {toggleReminder}/> : ('No tasks to show')}
    </div>
  );
}

export default App;
