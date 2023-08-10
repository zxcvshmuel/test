import React, { useEffect,useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Helmet from 'react-helmet';
import logo from "./images/logo.png";

import StripsMaker from "./StripsMaker";
import LogIn from "./LogIn";
import UsersTable from "./Pages/UsersTable/UsersTable";
import Collage from "./components/Collage";

const Maker = () => {
  const [view,setView] = useState("");
  if(!view)
  return (
    <div className="col-12 d-flex flex-column justify-content-center align-items-center">

    <div className="col-8  m-auto d-flex flex-row mt-5 justify-content-center align-items-center">
      <div
        className="col-5 bg-primary text-white border-5 m-2 text-center d-flex justify-content-center"
        style={{ height: "150px",cursor:"pointer" }}
        onClick={()=>setView(()=>"strip")}
      >
       <span className="fs-5 align-self-center">ליצירת סטריפים</span>
       
      </div>
      <div
        className="col-5 bg-primary text-white border-5 m-2 text-center d-flex justify-content-center"
        onClick={()=>setView(()=>"collage")}
        style={{ height: "150px",cursor:"pointer" }}
      >
       <span className="fs-5 align-self-center" >'יצירת קולאג</span>
      </div>
    </div>
    <div className="fs-3  m-auto text-center text-white d-flex flex-column justify-content-center align-items-center ">

        <img className="align-self-center m-auto" src={logo} height="250" width="250" alt="" />
      </div>
    </div>

  );
  if(view === "strip"){
    return (
      <div className="d-flex flex-column">
        <span className="pointer backBtn" onClick={() => setView('')}>
          <img src={'./assets/back.svg'} height="50" width="50" alt="" />
        </span>
        <StripsMaker />
      </div>
    );
  }
  if(view === "collage"){
    return (
      <div className="d-flex flex-column">
        <span className="pointer backBtn" onClick={() => setView('')}>
          <img src={'./assets/back.svg'} height="50" width="50" alt="" />
        </span>
        <Collage />
      </div>
    );
  }
};
const App = () => {
  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  return (
    <div id="App" className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route exact path="/strip-maker" element={<Maker />} />
          <Route exact path="/admin-users" element={<UsersTable />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
