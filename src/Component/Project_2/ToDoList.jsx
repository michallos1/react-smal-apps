import React, { useState, useEffect } from 'react';
import './projectTodo.css'

function Task({task, index, completeTask, removeTask}){
    return(
        <div
            className="task"
            style={{ textDecoration: task.completed ? "line-through" : "" }}
        >
            {task.title}

            <button className='button-1' style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>
            <button className='button-1' onClick={() => completeTask(index)}>Complete</button>

        </div>
    );
}

function CreateTask({ addTask }) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTask(value);
        setValue("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add a new task"
                onChange={e => setValue(e.target.value)}
            />
        </form>
    );
}



export default function ToDoList() {

    const [tasksRemaining, setTasksRemaining] = useState(0);
    const [tasks, setTasks] = useState([
        {
            title: 'Pizza try it',
            completed: false,
        },
    ]);

    useEffect(() => { setTasksRemaining(tasks.filter(task => !task.completed).length) });

    const addTask = title => {
        const newTask = [...tasks, {title, completed: false}];
        setTasks(newTask);
    };

    const completeTask = index => {
        const newTask = [...tasks];
        if(newTask[index].completed === false)
        newTask[index].completed = true;
        else
        newTask[index].completed = false;

        setTasks(newTask);
    };

    const removeTask = index => {
        const newTask = [...tasks];
        newTask.splice(index, 1);
        setTasks(newTask);
    };


        return(
            <div className="bg-color project-1">
                <div className='task-name'>To Do List</div>
                <div className='main-todo'>
                  {tasks.map((task,index) => (
                      <Task 
                        task={task}
                        index={index}
                        completeTask={completeTask}
                        removeTask={removeTask}
                        key={index}
                      />
                  ))}
                   
                </div>
                <div className='create-task'>
                    <CreateTask addTask={addTask} />
                </div>
            </div>
        );

}