/*****************************************************************
 * Karatech ELV
 * File : Toolbox.tsx
 *****************************************************************/

import "./Toolbox.css";

const components = [

    "MCCB",

    "MCB",

    "ACB",

    "CONTACTOR",

    "RELAY",

    "PLC",

    "SPD",

    "UPS",

    "FAN",

    "TERMINAL"

];

function Toolbox(){

    return(

        <div className="toolbox">

            <h2>Components</h2>

            {

                components.map((item,index)=>(

                    <button

                        key={index}

                        className="toolboxButton"

                    >

                        {item}

                    </button>

                ))

            }

        </div>

    )

}

export default Toolbox;
