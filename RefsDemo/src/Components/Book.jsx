import { useState, useRef } from 'react';
import ProjectCreation from './ProjectCreation';
import Sidebar from './Sidebar';
import ProjectView from './ProjectView';
export default function Book() {
    
    const [page, setPage] = useState("");
    const [projects, setProjects] = useState([{key: 0, ProjectTitle: "React", ProjectDesc: "Learn React", ProjectDueDate: "2021-10-10", tasks: ["Take Course", "Launch Website"]}, 
                                              {key: 1, ProjectTitle: "Vue", ProjectDesc: "Learn Vue", ProjectDueDate: "2021-10-10", tasks: ["Take Course", "Launch Website"]},
                                              {key: 2, ProjectTitle: "Game Design", ProjectDesc: "Learn to make IdleGame", ProjectDueDate: "2024-10-10", tasks: ["Take Courses", "Launch Game"]}]); 
    const [view, setView] = useState("");
    const projRef = useRef();
 

    function CreateNewProject() {
        setPage("ProjectCreation");
    }

    function Home(){
        console.log("Home()");

        setPage("");       
    }

    function flipPage(page){
        console.log("FlipPage("+page+")");
        setPage(page);
    }

    function OnSave(){
        projRef.current.key = projects.length;
        setProjects([...projects, projRef.current]);
        flipPage("");          
    }

    function ViewProject(index){                 
        setView(projects[index]);       
        flipPage("ProjectView");
               
    }
    
    function AddTask(index, task){        
        projects[index].tasks.push(task);
        setProjects([...projects]);
    }

    function DeleteTask(index, task){
        console.log("DeleteTask("+index+","+task+")");
        projects[index].tasks = projects[index].tasks.filter((t) => t !== task);
        setProjects([...projects]);
    }

    function DeleteProject(title){
        console.log("DeleteProject("+title+")");
        let tempProjects = projects.filter((p) => p.ProjectTitle !== title);
        setProjects([...tempProjects]);
        Home();
        console.log(projects);
    }

    return (
        <div className="flex">
        <Sidebar projectList={projects} Home={Home} CreateNewProject={CreateNewProject} GoToProject={ViewProject}/>
        <div className=" text-black p-4 relative left-40 top-32 w-1/2">
           {
                (page === "ProjectCreation" && <ProjectCreation ref={projRef} cancelClick={Home} OnSave={OnSave}/>) 
                ||
                (page === "ProjectView" && <ProjectView projectObj={view} AddTask={AddTask} DeleteTask={DeleteTask} DeleteProject={DeleteProject}/>)
                ||
                (page === "" &&
                //Return create new project page (Home Page)
                <>
                    <div className="text-center">
                        <img src="logo.png" alt="logo" className="w-20 h-20 m-auto" />
                        <h1 className="text-lg text-center text my-2">No Project Selected</h1>
                        <p className="text-slate-400 my-2">Select a project or get started with a new one</p>
                        <button className="bg-gray-800 text-white px-4 py-2 rounded-lg my-2" onClick={CreateNewProject}>Create new project</button>
                    </div>
                </>
                )
            }       
        </div>
        </div>
        
    );
}