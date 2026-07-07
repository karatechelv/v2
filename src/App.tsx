/*****************************************************************
 * Karatech ELV
 * File : src/App.tsx
 *****************************************************************/

import AppRoutes from "./router/routes";

import LogoWatermark from "./components/layout/LogoWatermark";

function App(){

    return(

        <>

            <LogoWatermark />

            <AppRoutes />

        </>

    );

}

export default App;
