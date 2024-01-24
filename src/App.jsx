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
  const [projTasks,setprojTasks]=useState({})

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

  //to show project details and to add tasks
  function handleShowProject(projectId){

    console.log("selected project ID:",projectId);
    setActiveProject(projectId);

  }
  //handle deleting tasks from the project
  function handleTasksDelete(pid,proj){

   console.log("console to delelte task",pid,proj)
   setprojTasks((projTasks)=>({
    ...projTasks,[pid]: Array.isArray(projTasks[pid]) ? [...projTasks[pid], addTask] : [addTask],
  }));
   }
  //handles adding tasks from project selected component
  function handleAddTask(pid,addTask){
    console.log("task addded",addTask);
    setprojTasks((projTasks)=>({
      ...projTasks,[pid]: Array.isArray(projTasks[pid]) ? [...projTasks[pid], addTask] : [addTask],
    }));

  }
  console.log("Project tasks::",projTasks)
  let content;
  if(projects.selectedProject===undefined || addProject===false){
    console.log("content selected")
    content =<NoProjectSelected handleAddProject={handleAddProject}/>;
  }else{
    content=<NewProject handleSaveProject={handleSaveProject}/>
  }

  let projSelectedContent=<p>NO project selected</p>;
  if(activeProject!=undefined){
        let selectedProjId;
        let selectedProjTitle;
        let selectedProjDesc;
        let selectedProjDueDate;

        projects.projects.map((project)=>{
          if(project.id===activeProject){
            selectedProjId=project.id;
            selectedProjTitle=project.title;
            selectedProjDesc=project.desc;
            selectedProjDueDate=project.duedate;
          }

        });

        if(projTasks.hasOwnProperty(selectedProjId)){console.log("project key::",projTasks[selectedProjId])}
        else{console.log("No key")}
       // projSelectedContent= <p>{activeProject}<br/>Title:{selectedProjTitle}<br/>Desc:{selectedProjDesc}<br/>DueDate:{selectedProjDueDate}</p>;
        projSelectedContent=<ProjectSelected pid={selectedProjId} title={selectedProjTitle} desc={selectedProjDesc} duedate={selectedProjDueDate} projTasks={projTasks[selectedProjId]} handleAddTask={handleAddTask}/>
  }
  console.log("projects",projects)
  console.log("ProjectData::",projects.projects)
  return (
    <>
      <div className="header">
      Project Management
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
