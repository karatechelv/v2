/******************************************************************************
 * Karatech ELV
 * File : Dashboard.tsx
******************************************************************************/

import "./Dashboard.css";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

function Dashboard() {

    return (

        <div className="dashboard">

            <Sidebar />

            <div className="dashboard__main">

                <Header />

                <div className="dashboard__content">

                    <h1 className="dashboard__title">
                        Engineering Operating System
                    </h1>

                    <p className="dashboard__subtitle">
                        Smart Electrical Engineering Platform
                    </p>

                  <div className="dashboard__cards">

    <div className="dashboard__card">
        <div className="cardGlow"></div>
        <h3>Engineering Lab</h3>
        <p>
            Electrical calculations, Cable Sizing,
            Voltage Drop, Short Circuit,
            Motor Starting, Load Calculation.
        </p>
    </div>

    <div className="dashboard__card">
        <div className="cardGlow"></div>
        <h3>Projects</h3>
        <p>
            Project Management,
            Documentation,
            Drawings,
            Revision Control,
            Reports.
        </p>
    </div>

    <div className="dashboard__card">
        <div className="cardGlow"></div>
        <h3>Panel Builder</h3>
        <p>
            MCC Panel,
            PCC Panel,
            Control Panel,
            BOM Generator,
            Layout Designer.
        </p>
    </div>

    <div className="dashboard__card">
        <div className="cardGlow"></div>
        <h3>Wiring</h3>
        <p>
            Terminal Plan,
            Cable Numbering,
            Ferrule,
            Routing,
            Interconnection.
        </p>
    </div>

</div>

<div className="dashboard__quick">

    <div className="quickCard">
        <h4>Quality Control</h4>
        <p>Inspection Forms, FAT, SAT, Checklist.</p>
        <span>OPEN →</span>
    </div>

    <div className="quickCard">
        <h4>Standards</h4>
        <p>IEC • NEC • IEC61439 • NFPA • IPS</p>
        <span>OPEN →</span>
    </div>

    <div className="quickCard">
        <h4>Management</h4>
        <p>Planning, KPI, Strategy, Reports.</p>
        <span>OPEN →</span>
    </div>

    <div className="quickCard">
        <h4>HSE</h4>
        <p>Risk Assessment, Permit, PPE, Safety.</p>
        <span>OPEN →</span>
    </div>

</div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;
