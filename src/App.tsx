import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="appBody">
          <Sidebar />
          <Feed />
      
        </div>
        {/* <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter> */}
      </div>
    </>
  );
};
export default App;
