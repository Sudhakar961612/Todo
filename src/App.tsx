import "./App.css";
import Mainbar from "./components/Mainbar";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex gap-10">
        <Sidebar />
        <Mainbar />
      </div>
    </>
  );
}

export default App;
