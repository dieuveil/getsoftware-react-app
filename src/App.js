import './App.css';
// import Header from './components/Header';
import React, { useEffect, useState } from "react";
// import Footer from './components/Footer';
import Acceuil from './components/Acceuil';
import Admin from './components/Admin';
import Developpement from './components/Developpement';
import Formation from './components/Formation';
import Incubateur from './components/Incubateur';
import NotFound from "./components/NotFound";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Spinner } from "react-bootstrap";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);


  return (
    // <div className="App">
    //    <Header />
    //    <Footer />  
    // </div>

    <div>
      {loading ? (
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <Spinner animation="border" role="status">
            <span className="visually-hidden"></span>
          </Spinner>
        </div>
      ) : (
        <Router>
          <Routes>

            <Route path="/" element={<Acceuil />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/developpement" element={<Developpement />} />
            <Route path="/formation" element={<Formation />} />
            <Route path="/incubateur" element={<Incubateur />} />
            {/* <Route path="/invited" element={<Invited />} />
            <Route path="/invited-new" element={<InvitedNew />} /> */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
