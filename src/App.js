import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer/Index";
import Header from './Components/Header/Index';
import Accounts from "./Pages/Accounts/Index";
import Home from "./Pages/Home/Index";
import SignIn from "./Pages/Sign-in/Index";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
        <Route path="accounts" element={<Accounts/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
