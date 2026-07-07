/*****************************************************************
 * Karatech ELV
 * File : src/components/projects/NewProject.tsx
 * Description :
 * Create New Engineering Project
 *****************************************************************/

import { useState } from "react";

import "./NewProject.css";

function NewProject() {

    const [projectName,setProjectName]=useState("");

    const [client,setClient]=useState("");

    const [location,setLocation]=useState("");

    const createProject=()=>{

        const project={

            id:Date.now(),

            projectName,

            client,

            location,

            created:new Date().toISOString()

        };

        localStorage.setItem(

            "karatech-current-project",

            JSON.stringify(project)

        );

        alert("پروژه با موفقیت ایجاد شد.");

    };

    return(

        <div className="newProject">

            <h2>پروژه جدید</h2>

            <input

                type="text"

                placeholder="نام پروژه"

                value={projectName}

                onChange={(e)=>setProjectName(e.target.value)}

            />

            <input

                type="text"

                placeholder="کارفرما"

                value={client}

                onChange={(e)=>setClient(e.target.value)}

            />

            <input

                type="text"

                placeholder="محل پروژه"

                value={location}

                onChange={(e)=>setLocation(e.target.value)}

            />

            <button onClick={createProject}>

                ایجاد پروژه

            </button>

        </div>

    );

}

export default NewProject;
