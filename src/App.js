import "./App.css";
import Header from "./components/layout/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Home />
    </div>
  );
};

export default App;
