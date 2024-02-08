import { useState } from "react";
export default function ProjectView({projectObj: {key, ProjectTitle, ProjectDesc, ProjectDueDate, tasks}, AddTask, DeleteTask, DeleteProject}){
    
    const [taskList, setTaskList] = useState(tasks);
    const [error, setError] = useState(false);
    function AddTaskHandler(){
        console.log("AddTaskHandler()"); 
        var taskInput = document.querySelector("input");
        if (taskInput.value.length > 0){
            AddTask(key, taskInput.value)    
            setTaskList([...taskList, document.querySelector("input").value]);   
        }else{
            setError(true);
            setInterval(() => {
                setError(false);
            }, 5000);
        }
        taskInput.value="";
    }
    
    function DeleteTaskHandler(e, task){
        console.log("deleteTask("+key+","+task+")");
        DeleteTask(key, task);
        setTaskList(taskList.filter((t) => t !== task));
        console.log(taskList);
    };

    function DeleteProjectHandler(){
        console.log("DeleteProjectHandler("+key+")");        
        DeleteProject(ProjectTitle);
    }
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            AddTaskHandler();
        }
      };
      
    ProjectDueDate = new Date(ProjectDueDate).toDateString();

    return (
        <div className="space-y-5">
            <div className="flex justify-between">
            <h1 className="text-4xl font-bold text-gray-800 ">{ProjectTitle}</h1>
            <button className="font-semibold" onClick={DeleteProjectHandler}>Delete</button>
            </div>
            <p className="text-2xl">{ProjectDueDate}</p>
            <p className="text-2xl">{ProjectDesc}</p>
            <hr />
            {error && <div className="text-red-500">Task must be at least 1 character long.</div>}
            <h1 className="text-3xl font-bold text-gray-800">Tasks</h1>
            <div className="flex">
                <input type="text" onKeyDown={handleKeyDown} className="bg-slate-100 w-72 mr-5 rounded-lg" />
                <button className="py-3 px-8 font-medium bg-gray-800 rounded-lg text-white" onClick={AddTaskHandler}>Add Task</button>
            </div>
            {tasks.length > 0 &&
            <ul className="mt-8 py-7 px-5 bg-slate-50 space-y-2">
                {tasks && tasks.map((task, index) => {
                    return (
                        <li key={index} className="font-semibold flex justify-between">
                            {task}
                            <button className="justify-end" onClick={(e)=>DeleteTaskHandler(e, task)}>Clear</button>
                        </li>
                    )
                })}
                
            </ul>
            }
            {tasks.length === 0 && <p>No tasks yet</p>}
            
        </div>
    )
}