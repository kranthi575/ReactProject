import img from '../assets/no-projects.png';
import Button from './Button';
export default function NoProjectSelected({handleAddProject}){

    return(
        <div>
            <img className="short-image" src={img} alt="img"></img>
            <h2>No projects selected</h2>
            <Button title="+ create new project" handleClick={handleAddProject}></Button>
        </div>
    );
}