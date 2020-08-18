import React from "react";
import Router from "./Router";
import GlobalStyle from "./GlobalStyle";

const App: React.FC<{}> = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
