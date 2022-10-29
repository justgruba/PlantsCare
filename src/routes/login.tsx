import {Box, Button, TextField, Typography} from "@mui/material";
import {Link, useNavigate} from "react-router-dom";
import NavBar  from "../navigationBar/NavBar";
import {styled} from "@mui/material/styles";
import React from "react";
import LoginNavBar from "../navigationBar/LoginNavBar";
function Login() {
    const  navigate = useNavigate();
    function handleClick() : void {
        navigate("/main")
    }
    return (
        <CustomizedBody>
            <LoginNavBar/>
            <Box>
                <form>
                    <CustomizedLoginCard>
                        <Typography  variant={"h3"} padding={3} textAlign={"center"} color={"primary.main"}>Log In</Typography>
                        <TextField margin={"normal"}  type="email" variant={"outlined"} placeholder={"Email"}/>
                        <TextField margin={"normal"} type="password" variant={"outlined"} placeholder={"Password"}/>
                        <Button variant={"contained"} onClick={handleClick}>Log In</Button>
                    </CustomizedLoginCard>
                </form>
            </Box>
        </CustomizedBody>);
}
const CustomizedLoginCard = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 400px;
  align-items: center;
  justify-content: center;
  background-color: #193C40;
  box-shadow: 5px 5px 10px #38184C;
  margin: 50px auto;
  padding: 5px;
  border-radius: 200px;`

const CustomizedBody = styled(Box)`
  align-items: center;
  height: 600px;
  background:  linear-gradient(#F3D396, #F4E8CF);
`
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


export default Login;