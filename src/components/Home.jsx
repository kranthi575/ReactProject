import { useState } from "react";
import Project from "./Project";
import ProjectTask from "./ProjectTask";

export default function Home(){


    const [projects,setProjects]=useState([]);
    const [addProj,setAddProject]=useState(false);
    const [projTasks,setprojTasks]=useState([]);
    const [addprojTask,setaddProjTask]=useState(false);
  
    const [activeProj,setactiveProj]=useState({
        name:undefined,
        desc:undefined,
        duedate:undefined
    });
    
    function handleAdd(){
        setAddProject("true");
    }

    function addProjectTasks(projname){
        setactiveProj(projname);
    }

    function handleProjClick(proj){

        console.log([proj.name]);
        setaddProjTask(true);
    }
    // console.log("activeproj",activeProj.entries());
   console.log(activeProj.name)
   
   console.log(projects);
    return(
        <>
         <aside style={{backgroundColor:"aliceblue"}}>
            <button className="add-project-button" onClick={handleAdd}>+ Add Project</button>
              <ul>
              {projects.map((map, index) => (
          <li key={index}>
            <h4>Project {index + 1}</h4>
            <ul>
              {[...map].map(([key, value]) => (
               key==="name" &&
               <li key={key}>
                <button onClick={()=>handleProjClick(map)} >{value}</button>
                </li>
              ))}
            </ul>
          </li>
        ))}  
              </ul> 
         </aside>
         <br/><br/>
         <div>

            {addProj?<Project setProjects={setProjects} setAddProject={setAddProject}/>:null}
            
        {/* {!addprojTask?<ProjectTask activeProj={activeProj} setaddProjTask={setaddProjTask} setprojTasks={setprojTasks}/>:null} */}
         </div>
         
        </>
    );
}