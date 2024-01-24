export default function ProjectTask({activeProj,setaddProjTask,setprojTasks}){


return (
    <>
    <h2>{projName}</h2><button>Delete</button>
    <h4>{dueDate}</h4>
    <p>{desc}</p>
    <div>
        <span >Tasks</span>
        <input type="text"/>
        <button>Add Task</button>
    </div>
    </>
);

}