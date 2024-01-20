import { useRef } from "react";
import Button from "./Button";
import  Input  from "./Input";

export default function ProjectSelected({projSelected,handleAddTask}){

const taskRef=useRef();
let  title=projSelected.map((proj)=>proj.title);
let desc=projSelected.map((proj)=>proj.desc);
let duedate=projSelected.map((proj)=>proj.duedate);
let pid=projSelected.map((proj)=>proj.id);
function handlebuttonAddTask(){
    const taskName=taskRef.current.value;
    const task={'pid':pid,'task':taskName};
    handleAddTask(task);
}

console.log("projectselected::",projSelected);
console.log("Project title:",projSelected.map((proj)=>proj.title));





return(
    <div className="project-details" style={{backgroundColor:"aqua"}}>
        <span>selected Projected</span>
        <div className="project-title" style={{color:"blue", fontFamily:"roman"}}>
            {title}    
        </div>    
        <div className="detail">{desc}</div>  
        <div className="detail">{duedate}</div> 
        
        <Input ref={taskRef} type="text" title="Task Name:"></Input> 
        <Button title="Add Task" handleClick={handlebuttonAddTask}></Button>
    </div>
);
}