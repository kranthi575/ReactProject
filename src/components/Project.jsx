import { useState } from "react";

export default function Project({setProjects,setAddProject}){


    const [project,setProject]=useState(new Map());

    function addProjDetails(key,value){

        setProject((proj)=>proj.set(key,value))
        

    }

    function handleSubmit(){

        console.log(project);
        setProjects((projects)=>[...projects,project]);
        setAddProject(false);
    }
    function handleInputchange(e){

        const input_val=e.target.value;
        const input_id=e.target.id;
        addProjDetails(input_id,input_val);
    }

    return (
        <div className="form-container">
            
                    <label>Name:</label>
                    <input id="name" type="text" onChange={handleInputchange}></input>
                    <br></br>
                    <label>Description:</label>
                    <textarea id="desc" onChange={handleInputchange}></textarea>
                    <br/>
                    <label>Due date</label>
                    <input id="duedate" type="date" onChange={handleInputchange}></input>
                    <br/>
                    <button onClick={handleSubmit}>save</button>
            


        </div>
    );
}