/****************************************************************************************
 * Karatech ELV
 * File : src/router/routes.tsx
 * Description :
 * Application Routes
 ****************************************************************************************/

import {

    BrowserRouter,

    Routes,

    Route

}

from "react-router-dom";

import Dashboard from "../pages/Dashboard";

import EngineeringLab from "../pages/EngineeringLab";

import PanelBuilder from "../pages/PanelBuilder";

function AppRoutes(){

    return(

        <BrowserRouter>

            <Routes>

                <Route

                    path="/"

                    element={<Dashboard />}

                />

                <Route

                    path="/engineering-lab"

                    element={<EngineeringLab />}

                />

                <Route

                    path="/panel-builder"

                    element={<PanelBuilder />}

                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;
