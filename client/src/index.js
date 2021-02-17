import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
//import "../src/js/iframeResizer.contentWindow.min"

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#5449de",
    },
    secondary: {
      main: "#51e5a5",
    },
  },
});

ReactDOM.render(
  <BrowserRouter forceRefresh={true}>
    <RecoilRoot>
      <SnackbarProvider maxSnack={3}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </SnackbarProvider>
    </RecoilRoot>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
