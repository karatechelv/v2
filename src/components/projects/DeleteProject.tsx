/*****************************************************************
 * Karatech ELV
 *****************************************************************/

function DeleteProject(){

    const removeProject=()=>{

        if(confirm("پروژه حذف شود؟")){

            localStorage.removeItem("karatech-current-project");

            location.reload();

        }

    }

    return(

        <button

            onClick={removeProject}

        >

            حذف پروژه

        </button>

    )

}

export default DeleteProject;
