import {ThemeProvider} from "@mui/material";
import themes from "./themes/Themes";
import {Route, Routes} from "react-router-dom";
import Login from "./routes/login";
import Main from "./routes/main";
import Signup from "./routes/signup";
import React from "react";
import UserProvider from "./UserProvider";
import MainPage from "./MainPage";
type User =  {
    id: number,
    name: string,
    email: string,
    password: string,
    plants_index: number[]
}

function App() {

    return (
        <ThemeProvider theme={themes}>
            <UserProvider>
                    <Routes>
                            <Route path="login" element={<Login />} />
                            <Route path="main" element={<Main />} />
                            <Route path="/" element={<MainPage />} />
                            <Route path="signup" element={<Signup />} />
                    </Routes>
            </UserProvider>
        </ThemeProvider>
  );
}
export default App;

