/*****************************************************************
 * Karatech ELV
 * File : src/pages/Dashboard.tsx
 * Description :
 * Main Dashboard
 *****************************************************************/

import "./Dashboard.css";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

function Dashboard(){

    return(

        <div className="dashboard">

            <Sidebar />

            <div className="dashboard__main">

                <Header />

                <div className="dashboard__content">

                    <h1 className="dashboard__title">

                        Engineering Operating System

                    </h1>

                    <p className="dashboard__subtitle">

                        Welcome to Karatech ELV

                    </p>

                    <div className="dashboard__cards">

                        <div className="dashboard__card">

                            <h3>⚡ Engineering Lab</h3>

                            <p>

                                Design electrical systems,
                                create panels,
                                generate BOM
                                and review projects.

                            </p>

                        </div>

                        <div className="dashboard__card">

                            <h3>🧮 Calculators</h3>

                            <p>

                                Voltage Drop,
                                Cable Sizing,
                                Busbar,
                                Earthing,
                                Generator,
                                UPS,
                                Lighting...

                            </p>

                        </div>

                        <div className="dashboard__card">

                            <h3>📚 Standards</h3>

                            <p>

                                IEC,
                                IEEE,
                                IPS,
                                ISIRI,
                                مبحث ۱۳,
                                نشریه ۱۱۰

                            </p>

                        </div>

                        <div className="dashboard__card">

                            <h3>🤖 AI Engineer</h3>

                            <p>

                                Smart engineering assistant,
                                project analysis,
                                BOM generation
                                and design review.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Dashboard;
