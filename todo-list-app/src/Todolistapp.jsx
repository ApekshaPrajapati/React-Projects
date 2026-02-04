// import { element } from "prop-types";
import React, { useState } from "react";

function Todolistapp() {
    const [tasks, settasks] = useState([]);
    const [newtasks, setnewtaks] = useState("");

    function handleinputchange(event) {
        setnewtaks(event.target.value)
    }

    function addtasks() {
        if (newtasks.trim() !== "") {

            settasks(t => [...t, newtasks]);
            setnewtaks("");
        }
    }

    function deletetasks(index) {
        const updatedtasks = tasks.filter((_, i) => i !== index);
        settasks(updatedtasks);
    }

    function movetasksup(index) {
        if (index > 0) {
            const updatedtasks = [...tasks];
            [updatedtasks[index], updatedtasks[index - 1]] = [updatedtasks[index - 1], updatedtasks[index]];
        settasks(updatedtasks);
        }
    }

    function movetasksdown(index) {
if (index < tasks.length -1) {
            const updatedtasks = [...tasks];
            [updatedtasks[index], updatedtasks[index + 1]] = [updatedtasks[index + 1], updatedtasks[index]];
        settasks(updatedtasks);
        }
    }
    return (
        <div className="todolist">
            <h1>To-Do-List</h1>
            <div className="btn">
                <input id="int" type="text" placeholder="Enter any tasks" value={newtasks} onChange={handleinputchange} />
                <button className="addbutton" onClick={addtasks}>Add</button>

            </div>
            <ol className="text">
                {tasks.map((tasks, index) => <li key={index}><span className="type" >{tasks}</span>
                    <button className="deletebtn" onClick={() => deletetasks(index)}>Delete</button>
                    <button className="movebtn" onClick={() => movetasksup(index)}>👆</button>
                    <button className="movebtn" onClick={() => movetasksdown(index)}>👇</button>
                </li>
                )}

            </ol>

        </div>
    )
}
export default Todolistapp