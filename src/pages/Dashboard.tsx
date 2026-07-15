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
            Dashboard
          </p>

          <div className="dashboard__cards">
            <div className="dashboard__card">
              <h3>⚡ Engineering Lab</h3>
              <p>
                Electrical calculations, cable sizing,
                voltage drop, short circuit and engineering tools.
              </p>
            </div>

            <div className="dashboard__card">
              <h3>🗂 Projects</h3>
              <p>
                Project management, documents,
                drawings, progress and revisions.
              </p>
            </div>

            <div className="dashboard__card">
              <h3>🖥 Panel Builder</h3>
              <p>
                Design electrical panels,
                arrange components and generate layouts.
              </p>
            </div>

            <div className="dashboard__card">
              <h3>🔌 Wiring</h3>
              <p>
                Wiring diagrams, terminal plans,
                cable routing and numbering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
