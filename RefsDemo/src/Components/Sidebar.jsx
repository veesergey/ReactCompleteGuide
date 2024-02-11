export default function Sidebar({projectList, Home, CreateNewProject, GoToProject}) {
            
    function ViewProject(event, index){
        GoToProject(index);
    }

    return (                     
        <aside className="w-1/5 md:w-72 bg-black text-white p-4 border rounded-r-xl h-screen">
            <div>
                <h1 className="uppercase text-lg ml-5 my-5">Your Projects</h1>
                <button className="ml-5 bg-gray-800 text-white rounded-lg px-4 py-2" onClick={CreateNewProject}>+ Add Project</button>
            </div>
            <div className="mt-10">
                <ul>
                    {projectList.map((project, index) => {
                        return <li key={index} onClick={()=>ViewProject(event,index)} className="text-sm ml-5 my-2 hover:bg-slate-700">{project.ProjectTitle}</li>
                    })}
                </ul>
                </div>
        </aside>
    )
}


