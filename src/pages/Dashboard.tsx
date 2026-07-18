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

                            <h3>⚡ Engineering Lab</h3>

                            <p>

                                Electrical calculations,
                                Cable sizing,
                                Voltage Drop,
                                Short Circuit,
                                Protection Coordination

                            </p>

                        </div>

                        <div className="dashboard__card">

                            <h3>🗂 Projects</h3>

                            <p>

                                Project Management,
                                Documents,
                                Drawings,
                                Revisions,
                                Progress Monitoring

                            </p>

                        </div>

                        <div className="dashboard__card">

                            <h3>🖥 Panel Builder</h3>

                            <p>

                                Build Electrical Panels,
                                BOM Generator,
                                Layout Designer,
                                Component Library

                            </p>

                        </div>

                        <div className="dashboard__card">

                            <h3>🔌 Wiring</h3>

                            <p>

                                Wiring Diagram,
                                Terminal Plan,
                                Cable Routing,
                                Cable Numbering

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;
