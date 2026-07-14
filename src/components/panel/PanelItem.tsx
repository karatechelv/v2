/*****************************************************************
 * Karatech ELV
 * File : PanelItem.tsx
 *****************************************************************/

import { PanelComponent } from "../../types/PanelComponent";

import { usePanelStore } from "../../store/panelStore";

interface Props{

    component:PanelComponent;

}

function PanelItem({component}:Props){

    const moveComponent=

        usePanelStore(

            state=>state.moveComponent

        );

    const drag=(e:React.DragEvent)=>{

        moveComponent(

            component.id,

            e.clientX-50,

            e.clientY-25

        );

    };

    return(

        <div

            draggable

            onDragEnd={drag}

            className="panelItem"

            style={{

                left:component.x,

                top:component.y

            }}

        >

            {component.name}

        </div>

    );

}

export default PanelItem;
