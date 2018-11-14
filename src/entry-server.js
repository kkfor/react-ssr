import React from "react";
import { StaticRouter } from "react-router-dom";
import Root from "./layout/App";

const createApp = (context, url) => {
  const App = () => {
    return (
      <StaticRouter context={context} location={url}>
        <Root setHead={(head) => App.head = head}/>  
      </StaticRouter>
    )
  }
  return <App />;
}

export { createApp }