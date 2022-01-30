import { Provider } from "react-redux";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Footer from "./Components/Footer/Index";
import Header from './Components/Header/Index';
import Accounts from "./Pages/Accounts/Index";
import Home from "./Pages/Home/Index";
import SignIn from "./Pages/Sign-in/Index";
import Transactions from "./Pages/Transactions/Index";
import store from "./Redux/store";

function App() {
  return (

    <Provider store={store}>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="sign-in" element={<SignIn/>}/>
          <Route path="accounts" element={<Accounts/>}/>
          <Route path="accounts/transactions" element={<Transactions/>}/>
        </Routes>
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
