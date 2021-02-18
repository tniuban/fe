import React, { Component } from 'react';
import Login from './pages/login';
import { BrowserRouter, Switch} from "react-router-dom";

import {mainRouter, adminRouter} from "./config/routes"
import RouteMain from "./templates/main";
import RouteAdmin from "./templates/admin";

function App() {
  function renderMainRouter(listRouter) {
    return listRouter?.map((router, index) => {
      return <RouteMain {...router} key={index}/>;
    });
  }
  function renderAdminRouter(listRouter) {
    return listRouter.map((router, index) => {
      return (
        // <Guard>
          <RouteAdmin {...router} key={index} />
        // </Guard>
      );
    });
  }
  return (    
    <>
      <Login/>
      {/* <BrowserRouter>
        <Switch>
          {renderMainRouter(mainRouter)}
          {renderAdminRouter(adminRouter)}
        </Switch>
      </BrowserRouter> */}
    </>
  )
}

export default App;