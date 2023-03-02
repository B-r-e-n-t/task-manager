import Header from './components/Header'
import Tasks from './components/Tasks'
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
