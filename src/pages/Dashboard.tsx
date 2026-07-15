import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />

      <main className="dashboard-main">
        Dashboard Content
      </main>

    </>
  );
}

export default Dashboard;
