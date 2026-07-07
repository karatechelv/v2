/*****************************************************************
 * Karatech ELV
 * File : panelStore.ts
 *****************************************************************/

import { create } from "zustand";

import { PanelComponent } from "../types/PanelComponent";

interface PanelState{

    components:PanelComponent[];

    addComponent:(name:string)=>void;

    moveComponent:(

        id:number,

        x:number,

        y:number

    )=>void;

}

export const usePanelStore=create<PanelState>((set)=>({

    components:[],

    addComponent:(name)=>set((state)=>({

        components:[

            ...state.components,

            {

    id:Date.now(),

    name,

    x:120,

    y:120,

    rotation:0,

    selected:false

}

        ]

    })),

    moveComponent:(id,x,y)=>set((state)=>({

        components:state.components.map(component=>

            component.id===id

            ?{

                ...component,

                x,

                y

            }

            :component

        )

    }))

}));
