/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import "./Toolbar.css";

function Toolbar(){

    return(

        <div className="toolbar">

            <button>Save</button>

            <button>Load</button>

            <button>Undo</button>

            <button>Redo</button>

            <button>Export PDF</button>

        </div>

    );

}

export default Toolbar;
