import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import CreatePoll from "./components/pages/create/Home.jsx";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import { React, useState, useEffect, navigate } from "react";
import "./index.css";
import Poll from "./components/pages/poll/index.jsx";
import PollResultsPage from "./components/pages/result/index.jsx";
import NotFoundPage from "./components/pages/404/NotFound.jsx";

// export const UserContext = React.createContext({});
function App() {
  // const [user, setUser] = useState({});
  // const [loading, setLoading] = useState(true);

  // const logOutCallback = async () => {
  //   await fetch('http://localhost:4000/logout', {
  //     method: 'POST',
  //     credentials: 'include', // Needed to include the cookie
  //   });
  //   // Clear user from context
  //   setUser({});
  //   // Navigate back to startpage
  //   navigate('/');
  // }

  // // First thing, check if a refreshtoken exist
  // useEffect(() => {
  //   async function checkRefreshToken() {
  //     const result = await (await fetch('http://localhost:8080/refresh_token', {
  //       method: 'POST',
  //       credentials: 'include', // Needed to include the cookie
  //       headers: {
  //         'Content-Type': 'application/json',
  //       }
  //     })).json();
  //       setUser({
  //         accesstoken: result.accesstoken,
  //       });
  //       setLoading(false);
  //   }
  //   checkRefreshToken();
  // }, []);

  // if (loading) return <div>Loading ...</div>
  return (
    <Router className="App w-full h-screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        {/* </Routes>
          <Navbar />
        <Routes> */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/poll" element={<Poll />} />
          <Route path="/result/:pollId" element={<PollResultsPage />} />
          <Route path="/create-poll" element={<CreatePoll />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
  );
}

export default App;
