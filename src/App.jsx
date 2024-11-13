import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-wrapper">
        <MainContent />
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
