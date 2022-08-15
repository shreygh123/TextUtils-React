import './App.css';
import Header from './Components/Header.js'
import Body from './Components/Body'
import React, { useState } from 'react'
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  
  const toggleMode = () => {

    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode Enabled !!", "success")
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Enabled !!", "success")
    }
  }
  return (
    <>
      <Router>
        <Header mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/About" element={<About mode={mode}/>}></Route>
            <Route exact path="/" element={<Body mode={mode} showAlert={showAlert} />}></Route>
          </Routes>
        </div>
      </Router>

    </>

  );
}

export default App;
