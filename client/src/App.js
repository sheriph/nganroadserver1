import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage";
import "./App.css";
import ResultPage from "./pages/resultpage";
import { Container, Divider, makeStyles } from "@material-ui/core";
import CustomStepper from "./components/customstepper";
import Details from "./pages/details";

const styles = makeStyles((theme) => ({
  root: {
    //    backgroundColor: theme.palette.primary.main,
  },
}));

const App = () => {
  const classes = styles();
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";

    script.src =
      "https://naijagoingabroad.com/js/iframeResizer.contentWindow.min.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Container disableGutters className={classes.root}>
      <Container disableGutters className={classes.root}>
        <CustomStepper />
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
    </Container>
  );
};

export default App;
