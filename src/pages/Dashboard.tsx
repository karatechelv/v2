import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

function Dashboard() {
  return (
    <>
      <Header />
      <Sidebar />
      <div style={{ color: "white", padding: "40px" }}>
        Header + Sidebar OK
      </div>
    </>
  );
}

export default Dashboard;
