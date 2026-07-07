/*****************************************************************
 * Karatech ELV
 *****************************************************************/

import {

BrowserRouter,

Routes,

Route

}

from "react-router-dom";

import Dashboard from "../pages/Dashboard";

import EngineeringLab from "../pages/EngineeringLab";

function AppRoutes(){

    return(

        <BrowserRouter>

            <Routes>

                <Route

                    path="/"

                    element={<Dashboard/>}

                />

                <Route

                    path="/engineering-lab"

                    element={<EngineeringLab/>}

                />

            </Routes>

        </BrowserRouter>

    );

}

export default AppRoutes;
