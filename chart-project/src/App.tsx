import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ResultPage from "./pages/ResultPage";
import LearnPage from "./pages/LearnPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/result" component={ResultPage} />
        <Route exact path="/learn" component={LearnPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
