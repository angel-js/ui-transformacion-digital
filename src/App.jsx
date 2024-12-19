import TurnosCalendar from "./TurnosCalendar";
import Navbar from "./Navbar";
import "./styles.css";


function App() {
  return (
    <div style={{ margin: "0", height: "100vh" }}>
      {/* Navbar */}
      <Navbar />
      {/* Calendario */}
      <TurnosCalendar />
    </div>
  );
}

export default App;