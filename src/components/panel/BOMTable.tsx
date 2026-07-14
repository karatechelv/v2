/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import "./BOMTable.css";

import { usePanelStore } from "../../store/panelStore";

import { generateBOM } from "../../utils/generateBOM";

function BOMTable(){

    const components=

        usePanelStore(

            state=>state.components

        );

    const bom=generateBOM(components);

    return(

        <table className="bomTable">

            <thead>

                <tr>

                    <th>Component</th>

                    <th>Qty</th>

                </tr>

            </thead>

            <tbody>

                {

                    bom.map(item=>(

                        <tr key={item.name}>

                            <td>{item.name}</td>

                            <td>{item.quantity}</td>

                        </tr>

                    ))

                }

            </tbody>

        </table>

    );

}

export default BOMTable;
