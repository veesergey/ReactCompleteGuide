import { useState, useRef } from 'react';
import ProjectCreation from './ProjectCreation';
import Sidebar from './Sidebar';
import ProjectView from './ProjectView';
export default function Book() {
    
    const [page, setPage] = useState("");
    const [projects, setProjects] = useState([{ProjectTitle: "React", ProjectDesc: "Learn React", ProjectDueDate: "2021-10-10"}, {ProjectTitle: "Vue", ProjectDesc: "Learn Vue", ProjectDueDate: "2021-10-10"}]); 
    const projRef = useRef();
    const viewRef = useRef();

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

    function onSaveProject(){
        setProjects([...projects, projRef.current]);
        flipPage("");          
    }

    function ViewProject(index){     
        console.log(projects[index]);
        flipPage("");      
        viewRef.current = projects[index];
        console.log(viewRef.current);
        flipPage("ProjectView");
        
        
    }

    return (
        <div className="flex">
        <Sidebar projectList={projects} Home={Home} CreateNewProject={CreateNewProject} GoToProject={ViewProject}/>
        <div className=" text-black p-4 relative left-40 top-32 w-1/2">
           {
                (page === "ProjectCreation" && <ProjectCreation ref={projRef} cancelClick={Home} onSave={onSaveProject}/>) 
                ||
                (page === "ProjectView" && <ProjectView title={viewRef.current.ProjectTitle}/>)
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