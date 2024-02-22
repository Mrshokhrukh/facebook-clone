import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Feed from "./components/feed/Feed";
import Widgets from "./components/widgets/Widgets";
import Login from "./components/login/Login";

type AppProps = {};

const App: React.FC<AppProps> = () => {
  const user = null;
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="container">
            <div className="appBody">
              <Sidebar />
              <Feed />
              <Widgets />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default App;
{
  /* <BrowserRouter>
        <Routes>
          <Route></Route>
        </Routes>
      </BrowserRouter> */
}
