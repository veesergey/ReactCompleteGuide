export default function ProjectView({projectObj}){
    
    return (
        <div>
            <h1>{projectObj.ProjectTitle}</h1>
            <p>{projectObj.ProjectDueDate}</p>
            <p>{projectObj.ProjectDesc}</p>
            <hr />
            <h1>Tasks</h1>
            <div className="inline">
                <input type="text" />
                <button>Add Task</button>
            </div>
            
        </div>
    )
}