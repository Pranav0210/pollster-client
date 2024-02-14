import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import CreatePoll from "./components/pages/create/CreatePoll.jsx";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Navbar from "./components/Navbar";
import "./index.css";
import Poll from "./components/pages/poll/index.jsx";
import PollResultsPage from "./components/pages/result/index.jsx";
import NotFoundPage from "./components/pages/404/NotFound.jsx";

function App() {
  return (
    <div className="App w-full h-screen">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/poll" element={<Poll />} />
          <Route path="/result/:pollId" element={<PollResultsPage />} />
          <Route path="/create-poll" element={<CreatePoll />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
