import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login.jsx'
import List from './pages/list/List.jsx'
import Single from './pages/single/Single.jsx'
import New from './pages/new/New.jsx'
import { userInputs ,productInputs } from "./formSource.js";
import './style/dark.scss'
import { DarkModeContext } from "./context/DarkModeContext";

function App() {

  const {darkMode} = useContext(DarkModeContext)
  return (
    <div className={darkMode? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="user">
              <Route index element={<List  title = 'Add New User'/>} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs ={userInputs} title = 'Add New User'/>} />
            </Route>

            <Route path="product">
              <Route index element={<List title = 'Add New Product' />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title = 'Add New Product'/>} />
            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
