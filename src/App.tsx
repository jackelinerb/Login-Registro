import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import { createMuiTheme, CssBaseline, ThemeProvider } from "@material-ui/core";

const mainPrimaryColor: string = "#6e68af";
const mainSecondaryColor: string = "#0c87c8";

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: mainPrimaryColor,
        },
        secondary: {
            main: mainSecondaryColor,
        },
    },
});

const App: React.FC = () => (
    <React.Fragment>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ThemeProvider>
    </React.Fragment>
);

export default App;
