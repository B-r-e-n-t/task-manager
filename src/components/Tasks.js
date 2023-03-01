const tasks = [
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
]

function Tasks() {
  return (
    <div>
        {tasks.map((task) => (
            <h3>{task.text}</h3>
        ))}
    </div>
  )
}

export default Tasks
