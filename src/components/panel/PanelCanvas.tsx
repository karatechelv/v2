/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import "./PanelCanvas.css";

import { usePanelStore } from "../../store/panelStore";

function PanelCanvas(){

    const components=usePanelStore(

        state=>state.components

    );

    return(

        <div className="panelCanvas">

            <div className="panelGrid">

                {

                    components.map(component=>(

                        <div

                            key={component.id}

                            className="panelItem"

                            style={{

                                left:component.x,

                                top:component.y

                            }}

                        >

                            {component.name}

                        </div>

                    ))

                }

            </div>

        </div>

    );

}

export default PanelCanvas;
