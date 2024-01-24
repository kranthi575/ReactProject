import { useRef } from "react";
import Button from "./Button";
import  Input  from "./Input";

export default function ProjectSelected({pid,title,desc,duedate,projTasks,handleAddTask,handleTasksDelete}){

const taskRef=useRef();
function handlebuttonAddTask(){
    const taskName=taskRef.current.value;
    taskRef.current.value=null;
    //const task={'pid':pid,'task':taskName};
    handleAddTask(pid,taskName);
}

function handleTaskDelete(proj){

    handleTasksDelete(pid,proj);
}

console.log("Proj tasks insides projectselectedz;",projTasks)



return(
    <div className="project-details" style={{backgroundColor:"aqua"}}>
        <span>selected Projected</span>
        <div className="project-title" style={{color:"blue", fontFamily:"roman"}}>
            {title}    
        </div>    
        <div className="detail">{desc}</div>  
        <div className="detail">{duedate}</div> 
        <div>
            <span>Avialable Tasks::</span>
            <ul>
                {projTasks.map((proj)=>{
                    return (<><li>{proj}</li><Button title={Delete} handleClick={()=>handleTaskDelete(proj)}/></>);
                })}
            </ul>
        </div>
        <Input ref={taskRef} type="text" title="Task Name:"></Input> 
        <Button title="Add Task" handleClick={handlebuttonAddTask}></Button>
    </div>
);
}