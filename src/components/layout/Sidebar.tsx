/******************************************************************************
 * Karatech ELV
 * File : Sidebar.tsx
******************************************************************************/

import "./Sidebar.css";

function Sidebar() {

    return (

        <aside className="sidebar">

            <div className="sidebar__top">

                <img
                    src="/v2/logo.png"
                    alt="Karatech ELV"
                    className="sidebar__logo"
                />

                <h2>KARATECH</h2>

                <span>Engineering OS</span>

            </div>

            <nav className="sidebar__menu">

                <button className="sidebar__item active">
                    ⚡ Engineering Lab
                </button>

                <button className="sidebar__item">
                    📂 Projects
                </button>

                <button className="sidebar__item">
                    🖥 Panel Builder
                </button>

                <button className="sidebar__item">
                    🔌 Wiring
                </button>

                <button className="sidebar__item">
                    ✔ Quality Control
                </button>

                <button className="sidebar__item">
                    📘 Standards
                </button>

                <button className="sidebar__item">
                    📊 Management
                </button>

                <button className="sidebar__item">
                    🦺 HSE
                </button>

            </nav>

            <div className="sidebar__footer">

                Version 1.0.0

            </div>

        </aside>

    );

}

export default Sidebar;
