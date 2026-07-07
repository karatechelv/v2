/*****************************************************************
 * Karatech ELV
 * File : src/pages/PanelBuilder.tsx
 * Description :
 * Panel Builder Workspace
 *****************************************************************/

import "./PanelBuilder.css";

function PanelBuilder() {

    return (

        <div className="panelBuilder">

            <aside className="toolbox">

                <h2>ToolBox</h2>

                <button>MCCB</button>

                <button>MCB</button>

                <button>ACB</button>

                <button>Contactor</button>

                <button>Relay</button>

                <button>PLC</button>

                <button>SPD</button>

                <button>Terminal</button>

                <button>Power Supply</button>

                <button>Fan</button>

                <button>Filter</button>

            </aside>

            <main className="workspace">

                <h2>Panel Workspace</h2>

                <div className="drawingArea">

                    Drop Components Here

                </div>

            </main>

            <aside className="properties">

                <h2>Properties</h2>

                <p>Select a component...</p>

            </aside>

        </div>

    );

}

export default PanelBuilder;
