import Input from "./Input";
import Button from "./Button";
import { useRef } from "react";

export default function NewProject({handleSaveProject}){

    const titleRef=useRef();
    const descriptionRef=useRef();
    const duedateRef=useRef();

    function handleSaveNewProject(){
        const projTitle=titleRef.current.value;
        const projDescp=descriptionRef.current.value;
        const projDuedate=duedateRef.current.value;

        const projDetails={'title':projTitle,'desc':projDescp,'duedate':projDuedate};
        console.log(projDetails)
        handleSaveProject(projDetails)


    }

    console.log("new project is called")
    return (<>
    
    <Input ref={titleRef} type="text" title="Project Title"/>
    <Input ref={descriptionRef} type="text" title="Description"/>
    <Input ref={duedateRef} type="date" title="Due Date"/>

    <Button title="Save Project" handleClick={handleSaveNewProject}></Button>
    </>);

}