import { Provider } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer/Index";
import Header from './Components/Header/Index';
import PrivateRoute from "./Pages/PrivateRoute/Index";
import Accounts from "./Pages/PrivateRoute/Accounts/Index";
import Home from "./Pages/Home/Index";
import SignIn from "./Pages/Sign-in/Index";
import store from "./Redux/store";

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sign-in" element={<SignIn/>}/>
          <Route path="/private" element={<PrivateRoute/>}>
            <Route exact path="/private/accounts" element={<Accounts/>}/>
          </Route>
          <Route path="*" element={<Navigate to={"/"}/>}/>
        </Routes>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
