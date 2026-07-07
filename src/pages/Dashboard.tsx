/*****************************************************************
 * Karatech ELV
 * File : src/pages/Dashboard.tsx
 * Description :
 * Engineering Operating System Dashboard
 *****************************************************************/

function Dashboard() {

    return (

        <main
            style={{
                width: "100%",
                minHeight: "100vh",
                background: "#0f172a",
                color: "#ffffff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "Tahoma"
            }}
        >

            <div
                style={{
                    width: "90%",
                    maxWidth: "1400px",
                    background: "#1e293b",
                    borderRadius: "16px",
                    padding: "40px",
                    boxShadow: "0 0 30px rgba(0,0,0,.35)"
                }}
            >

                <h1
                    style={{
                        marginBottom: "15px"
                    }}
                >
                    KARATECH ELV
                </h1>

                <h2
                    style={{
                        marginTop: 0,
                        color: "#94a3b8"
                    }}
                >
                    Engineering Operating System
                </h2>

                <hr />

                <h3>Dashboard</h3>

                <ul>

                    <li>📁 Projects</li>

                    <li>⚡ Engineering Lab</li>

                    <li>🧮 Calculators</li>

                    <li>📚 Standards</li>

                    <li>📊 Tables</li>

                    <li>📄 Reports</li>

                    <li>🤖 AI Engineer</li>

                </ul>

            </div>

        </main>

    );

}

export default Dashboard;
