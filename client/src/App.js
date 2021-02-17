import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage";
import "./App.css";
import ResultPage from "./pages/resultpage";
import { Container, Divider } from "@material-ui/core";
import CustomStepper from "./components/customstepper";
import Details from "./pages/details";

const App = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "http://naijagoingabroad.com/js/iframeResizer.contentWindow.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div style={{ backgroundColor: "#efefef" }}>
      <Container>
        <CustomStepper />
        <Divider style={{ margin: "10px 0 10px 0" }} />
      </Container>
      <Switch>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/results">
          <ResultPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
