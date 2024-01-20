import Button from "./Button";

export default function ProjectSlider({handleAddProject}){

    console.log("handleAddProject")
return(
    <Button title="+Add Project" handleClick={handleAddProject}></Button>
);

}