/*****************************************************************
 * Karatech ELV
 * File : src/components/layout/Sidebar.tsx
 * Description :
 * Main Sidebar
 *****************************************************************/

import "./Sidebar.css";

function Sidebar() {

    const menu = [

        "🏠 Dashboard",

        "📁 Projects",

        "⚡ Engineering Lab",

        "🧮 Calculators",

        "📚 Standards",

        "📊 Tables",

        "📄 Reports",

        "📥 Downloads",

        "🤖 AI Engineer",

        "⚙ Settings"

    ];

    return (

        <aside className="sidebar">

            <div className="sidebar__logo">

                KARATECH

            </div>

            <nav className="sidebar__menu">

                {

                    menu.map((item,index)=>(

                        <button

                            key={index}

                            className="sidebar__button"

                        >

                            {item}

                        </button>

                    ))

                }

            </nav>

        </aside>

    );

}

export default Sidebar;
