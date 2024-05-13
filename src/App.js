import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
// import Alert from "./components/Alert";
import { useState } from "react";
// import { Route,Routes } from "react-router-dom";


function App() {


  const [Mode, setMode] = useState("light");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#030043";
      // showAlert("Dark mode ha ben enable" , "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light mode ha ben enable" , "success");
    }
  };

  // const [alert, setAlert]=useState("showAlert");
  // const showAlert =(message,type)=>{
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  // }

  return (
    <>
      <Navbar Title="TextUtils" mode={Mode} toggleMode={toggleMode} />


      <div className="container my-3">
      <TextForm heading="Text Analyzer." mode={Mode} />
        {/* <Routes>
          <Route path="/" element={<TextForm heading="Text Analyzer." mode={Mode} />}/>
          <Route path="/Home" element={<TextForm heading="Text Analyzer." mode={Mode} />}/>
          <Route path="/about" element={<About/>}/>
        </Routes> */}
        
      </div>
    </>
  );
}

export default App;
