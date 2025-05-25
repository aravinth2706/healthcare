import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import useDeviceType from "./hooks/useDeviceType";
import "./App.css";

function App() {
  const { isMobile } = useDeviceType();
  return (
    <section className={isMobile ? "" : "app"}>
      <Sidebar />
      <Dashboard />
    </section>
  );
}
export default App;
