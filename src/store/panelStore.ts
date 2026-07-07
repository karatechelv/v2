/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import { create } from "zustand";

import { PanelComponent } from "../types/PanelComponent";

interface PanelState{

    components:PanelComponent[];

    addComponent:(name:string)=>void;

}

export const usePanelStore=create<PanelState>((set)=>({

    components:[],

    addComponent:(name)=>set((state)=>({

        components:[

            ...state.components,

            {

                id:Date.now(),

                name,

                x:100,

                y:100

            }

        ]

    }))

}));
