import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSlider from "./components/ProjectSlider";
import './index.css';
import NewProject from "./components/NewProject";
import Button from "./components/Button";
import ProjectSelected from "./components/ProjectSelected";
function App() {

  //storing projects and selected project
  const [projects,setProjects]=useState({
    selectedProject:undefined,
    projects:[]
  });

  const [activeProject,setActiveProject]=useState(undefined);
  const [addProject,setaddProj]=useState(false)
  const [projTasks,setprojTasks]=useState([])

  function handleAddProject(){
    setActiveProject(undefined);
    setProjects((prevData)=>{
      return{
        ...prevData,selectedProject:null
      };
    })
    setaddProj(true);

  }
  function handleSaveProject(projectData){

    setProjects((prevData)=>{
      const newProj={
        ...projectData,id:Math.random()
      };

      return {
        ...prevData,
        projects:[...prevData.projects,newProj]
      };

    })
    setaddProj(false);
  }

  function handleShowProject(projectId){

    
    setActiveProject(projectId);

  }

  function handleAddTask(addTask){
    console.log("task addded",addTask);
    setprojTasks((projtask)=>[...projTasks],addTask);

  }
  console.log("Project tasks::",projTasks)
  let content;
  if(projects.selectedProject===undefined || addProject===false){
    console.log("content selected")
    content =<NoProjectSelected handleAddProject={handleAddProject}/>;
  }else{
    content=<NewProject handleSaveProject={handleSaveProject}/>
  }

  let projSelectedContent;
  if(activeProject!=undefined){
    let projSelected=projects.projects.map((project)=>{

      if(project.id===activeProject){
        return project;
      }

    });
    console.log("Project selected::",projSelected);
    projSelectedContent=<ProjectSelected projSelected={projSelected} handleAddTask={handleAddTask}/>;
  }
  console.log("projects",projects)
  console.log("ProjectData::",projects.projects)
  return (
    <>
      <div className="header">
      Header Content
      </div>

  <div className="page-container">
    <div className="left-half">
        <ProjectSlider handleAddProject={handleAddProject}/>
        <ul>
             {projects.projects.map((project)=>{

              return <li key={project.id}><Button title={project.title} handleClick={()=>handleShowProject(project.id)}/></li>
             })}

        </ul>
    </div>
    <div className="right-half">
        {content}
        
    </div>
   </div>
             
             {projSelectedContent}
   

    </>
  );
}

export default App;
