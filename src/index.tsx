import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Signup from "./routes/signup";
import Login from "./routes/login";
import Main from "./routes/main"
import {ThemeProvider} from "@mui/material";
import themes from "./themes/Themes";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ThemeProvider theme={themes}>
        <BrowserRouter>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="main" element={<Main />} />
                <Route path="/" element={<App />} />
                <Route path="signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
);

