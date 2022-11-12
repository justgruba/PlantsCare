import React from 'react';
import { Link } from "react-router-dom";
import NavBar from "./navigationBar/NavBar";
import {Box, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Footer from "./footer/Footer"
import MainText from "./main/MainText";
function MainPage() {
    return (
        <Box>
            <CustomizedMainPage>
                <NavBar>
                    <CustomizedLink  to="/login"><Typography variant={"h5"}>LogIn</Typography></CustomizedLink>
                    <CustomizedLink to="/signup"><Typography variant={"h5"}>SignUp</Typography></CustomizedLink>
                </NavBar>
            </CustomizedMainPage>
            <CustomizedMain>
                <MainText/>
            </CustomizedMain>
            <Footer/>
        </Box>
);
}
export default MainPage;

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
  height: 500px;
  align-content: center;
  background:  linear-gradient(#F3D396, #F4E8CF);
`
