import { BrowserRouter as Router, Routes, Route, redirect as Redirect } from "react-router-dom";
import Login from "./components/pages/login/Login";
import Signup from "./components/pages/signup/Signup";
import Home from "./components/pages/create/Home.jsx";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import { React, useState, useEffect, navigate } from "react";
import "./index.css";
import Poll from "./components/pages/poll/index.jsx";
import PollResultsPage from "./components/pages/result/index.jsx";
import NotFoundPage from "./components/pages/404/NotFound.jsx";
import PollVoting from "./components/pages/Dashboard/PollVoting.jsx";

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
  const isAuthenticated = () => {
    // Check if the user has a valid access token stored in session storage
    const accessToken = sessionStorage.getItem('accesstoken');
    console.log(accessToken ? true : false)
    return accessToken ? true : false;
  };
  return (
    <Router className="App w-full h-screen">
        <Routes>
          
          <Route path="/login" 
            element={isAuthenticated() ? <Dashboard /> : <Login />} 
          />
          <Route path="/signup" 
            element={isAuthenticated() ? <Dashboard /> : <Signup />} 
          />
          <Route exact path="/" 
            element={isAuthenticated() ? <Dashboard /> : <Login />} 
          />
          <Route path="/polls/:pollId" 
            element={isAuthenticated() ? <Poll /> : <Login />} 
          />
          <Route path="/results/:pollId" 
            element={isAuthenticated() ? <PollResultsPage /> : <Login />}
          />
          <Route path="/create-poll"  
            element={isAuthenticated() ? <Home />: <Login />}
          />
          <Route path="/poll-voting"
            element={<PollVoting/>}
            />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
  );
}

export default App;
