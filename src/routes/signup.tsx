import {Box, Button, TextField, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import React from "react";
import SignupNavBar from "../navigationBar/SignupNavBar";
import Footer from "../footer/Footer";

export default function Signup() {
    return (
        <CustomizedBody>
            <SignupNavBar/>
            <Box>
                <form>
                    <CustomizedSignUpCard>
                        <Typography variant={"h3"} padding={2} textAlign={"center"} color={"primary.main"}>Sign Up</Typography>
                        <TextField margin={"normal"} type="text" variant={"outlined"} placeholder={"Name"}/>
                        <TextField margin={"normal"} type="email"  variant={"outlined"} placeholder={"Email"}/>
                        <TextField margin={"normal"} type="password"  variant={"outlined"} placeholder={"Password"}/>
                        <Button variant={"contained"} >Sign up</Button>
                    </CustomizedSignUpCard>
                </form>
            </Box>
            <Footer/>
        </CustomizedBody>
    );
}

const CustomizedSignUpCard = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 450px;
  align-items: center;
  justify-content: center;
  background-color: #193C40;
  box-shadow: 5px 5px 10px #38184C;
  margin: 40px auto;
  padding: 5px;
  border-radius: 225px;`

const CustomizedBody = styled(Box)`
  align-items: center;
  height: 600px;
  background:  linear-gradient(#F3D396, #F4E8CF);
`