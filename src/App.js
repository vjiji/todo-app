import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./components/layout";
import Todo from "./components/features/todo/Todo";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todo/:id" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
