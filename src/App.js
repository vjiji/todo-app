import Header from "./components/layout/Header";
import { Main } from "./pages/Main";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <Main />
    </div>
  );
};

export default App;
