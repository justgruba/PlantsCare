import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./navigationBar/NavBar";
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";

function App() {
    return (
        <Box>
            <CustomizedMainPage>
                <NavBar>
                    <CustomizedLink className="App-link" to="/login">LogIn</CustomizedLink>
                    <CustomizedLink className="App-link" to="/signup">SignUp</CustomizedLink>
                </NavBar>
            </CustomizedMainPage>
            <CustomizedMain>

            </CustomizedMain>
        </Box>
  );
}
export default App;

const CustomizedLink = styled(Link) `
  display: inline-flex;
  color: white;
  height: 50px;
  text-decoration: none;
  font-size: 200%;
  padding-right: 10px;
  &:focus {
    color: #757587;
  }`;

const CustomizedMainPage=styled(Box)`
  text-align: right; `

const CustomizedMain=styled(Box)`
  height: 600px;
  background:  linear-gradient(#F3D396, #F4E8CF);
`
