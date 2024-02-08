import {useRef, forwardRef} from 'react';

const ProjectCreation = forwardRef(function ProjectCreation({cancelClick, OnSave}, ref){

function OnSaveHandler(){
    console.log("OnSaveHandler()");
    ref.current = {
        ProjectTitle: document.getElementById("Title").value,
        ProjectDesc: document.getElementById("Desc").value,
        ProjectDueDate: document.getElementById("DueDate").value,
        tasks: [],
        Something: "Else"
    }
    OnSave();
}
    return (
        <div>
           <div className="flex justify-end">
                <button className="py-3 px-8 font-medium" onClick={cancelClick}>Cancel</button>
                <button className="py-3 px-8 font-medium bg-gray-800 rounded-lg text-white" onClick={OnSaveHandler}>Save</button>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input id="Title" type="text" className="bg-gray-200 mt-1 p-2 rounded-lg w-full" />
                <label className="block text-sm font-medium text-gray-700 mt-4">Description</label>
                <textarea id="Desc" type="textarea" className="bg-gray-200 mt-1 py-10 rounded-lg w-full"></textarea>
                <label className="block text-sm font-medium text-gray-700 mt-4">Due Date</label>
                <input id="DueDate" type="date" className="bg-gray-200 mt-1 p-2 rounded-lg w-full" />
            </div>
        </div>
    )
});

export default ProjectCreation;