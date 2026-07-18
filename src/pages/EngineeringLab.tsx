/******************************************************************************
 * Karatech ELV
 * Engineering Lab
******************************************************************************/

import "./EngineeringLab.css";

function EngineeringLab() {

    const tools = [

        {
            title:"Cable Sizing",
            desc:"IEC 60364 Cable Size Calculation",
            icon:"⚡"
        },

        {
            title:"Voltage Drop",
            desc:"Voltage Drop Calculator",
            icon:"🔋"
        },

        {
            title:"Short Circuit",
            desc:"IEC60909 Fault Calculation",
            icon:"⚠"
        },

        {
            title:"Motor Calculation",
            desc:"Motor Current & Protection",
            icon:"⚙"
        },

        {
            title:"Power Factor",

            desc:"Reactive Power Compensation",

            icon:"📈"

        },

        {

            title:"Protection",

            desc:"Breaker Coordination",

            icon:"🛡"

        },

        {

            title:"Transformer",

            desc:"Sizing & Loading",

            icon:"🔌"

        },

        {

            title:"Generator",

            desc:"Load & Capacity",

            icon:"🏭"

        }

    ];

    return(

        <div className="engineering">

            <div className="engineering__header">

                <h1>

                    Engineering Lab

                </h1>

                <p>

                    Electrical Engineering Toolbox

                </p>

            </div>

            <div className="engineering__grid">

                {

                    tools.map((item,index)=>(

                        <div

                            key={index}

                            className="toolCard"

                        >

                            <div className="toolIcon">

                                {item.icon}

                            </div>

                            <h3>

                                {item.title}

                            </h3>

                            <p>

                                {item.desc}

                            </p>

                            <button>

                                OPEN

                            </button>

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default EngineeringLab;
