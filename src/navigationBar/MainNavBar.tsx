import NavBar from "./NavBar";
import {Box, Button, Typography} from "@mui/material";
import React from "react";
import {styled} from "@mui/material/styles";
import {Link} from "react-router-dom";

function MainNavBar() {
    return <NavBar>
        <Box  display="grid" gridTemplateColumns='repeat(3, 3fr)'>
            <Typography variant="h4">Hello Mart</Typography>
            <Box paddingLeft={30} paddingTop={1}>
                <CustomizedLink className="App-link" to="/signup"><Typography variant={"h5"}>Plants</Typography></CustomizedLink>
            </Box>
            <Box paddingLeft={30} paddingTop={1}>
                <CustomizedLink className="App-link" to="/"><Typography variant={"h5"}>Log Out</Typography></CustomizedLink>
            </Box>
        </Box>
    </NavBar>
}

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

export default MainNavBar;