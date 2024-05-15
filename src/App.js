import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Auth/Login";
import Home from "./Components/Home/Home";
import Article from "./Components/article/Article";
import Admin from "./Components/Admin Panel/admin/Admin";
import Create from "./Components/Admin Panel/create/Create";
import Update from "./Components/Admin Panel/update/Update";
import Message from "./Components/Admin Panel/Message/message";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/article/:id" element={<Article />} />
          <Route exact path="/admin" element={<Admin />} />
          <Route exact path="/admin/create" element={<Create />} />
          <Route exact path="/admin/update/:id" element={<Update />} />
          <Route exact path="/admin/message" element={<Message />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
