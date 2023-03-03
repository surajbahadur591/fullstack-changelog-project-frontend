import "./App.css";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Routes>
        <Route exact path="/" element={<Signup />}></Route>

        <Route exact path="/signin" element={<Signin />}></Route>
        
        <Route exact path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
