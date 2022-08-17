import * as React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import Components
import { Login } from "./pages/Auth";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Deposit } from "./pages/Dashboard/Operations";

// import TransactionHistory from "./pages/Dashboard/TransactionHistory";
import Transfer from "./pages/Dashboard/Transfer";
import TopUp from "./pages/Dashboard/TopUp";
import Utility from "./pages/Dashboard/Utility";
import Loans from "./pages/Dashboard/Loans";
import Settings from "./pages/Dashboard/Settings";


//Import styles
import "./assets/styles/App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/operations/deposit' element={<Deposit />} />
        {/* <Route path='/dashboard/transactions' element={<TransactionHistory />} /> */}
        {/* <Route path='/dashboard/transfer' element={<Transfer />} /> */}
        {/* <Route path='/dashboard/top-up' element={<TopUp />} /> */}
        {/* <Route path='/dashboard/utility' element={<Utility />} /> */}
        {/* <Route path='/dashboard/loan' element={<Loans />} /> */}
        {/* <Route path='/dashboard/settings' element={<Settings />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
