/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import "./PanelCanvas.css";

import PanelItem from "./PanelItem";

import { usePanelStore } from "../../store/panelStore";

function PanelCanvas(){

    const components=

        usePanelStore(

            state=>state.components

        );

    return(

        <div className="panelCanvas">

            <div className="panelGrid">

                {

                    components.map(component=>(

                        <PanelItem

                            key={component.id}

                            component={component}

                        />

                    ))

                }

            </div>

        </div>

    );

}

export default PanelCanvas;
