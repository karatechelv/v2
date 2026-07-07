/*****************************************************************
 * Karatech ELV
 * Engineering Lab
 *****************************************************************/
import { Link } from "react-router-dom";

import "./EngineeringLab.css";

function EngineeringLab(){

    return(

        <div className="engineeringLab">

            <h1>

                Engineering Lab

            </h1>

            <div className="engineeringGrid">

                <Link to="/panel-builder">

    <button>

        ⚡ Panel Builder

    </button>

</Link>

                <button>🧮 Calculator Engine</button>

                <button>📚 Standards</button>

                <button>📄 BOM Generator</button>

                <button>📐 Single Line</button>

                <button>💡 Lighting</button>

                <button>🌍 Earthing</button>

                <button>🤖 AI Engineer</button>

            </div>

        </div>

    );

}

export default EngineeringLab;
