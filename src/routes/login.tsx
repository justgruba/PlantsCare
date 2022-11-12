import {Box, Button, TextField, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {styled} from "@mui/material/styles";
import LoginNavBar from "../navigationBar/LoginNavBar";
import Footer from "../footer/Footer";
import React, {useEffect, useState} from "react";
import {useUserContext} from "../UserProvider";
type User =  {
    id: number,
    name: string,
    email: string,
    password: string,
    plants_index: number[]
};

const Login = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [users, setUsers] = useState<User[]>([]);
    const {setCurrent} = useUserContext();
    const  navigate = useNavigate();

    function handleClick(e: React.SyntheticEvent) : void {
        e.preventDefault();
        let user = users.find(user => user.password === password && user.email === email);

        if(user !== undefined){
            setCurrent(user);
            navigate('/main');
        }
    }
    useEffect(() => {
        fetch('http://localhost:3004/users')
            .then( res => {
                return res.json()
            })
            .then((data)=>{
              setUsers(data);
            });
    }, []);

    return (
        <CustomizedBody>
            <LoginNavBar/>
            <Box>
                <form onSubmit={handleClick}>
                    <CustomizedLoginCard>
                        <Typography  variant={"h3"} padding={3} textAlign={"center"} color={"primary.main"}>Log In</Typography>
                        <TextField onChange={(e) => setEmail(e.target.value)} value={email} margin={"normal"}  type="email" variant={"outlined"} placeholder={"Email"}/>
                        <TextField onChange={(e) => setPassword(e.target.value)}  value={password} margin={"normal"} type="password" variant={"outlined"} placeholder={"Password"}/>
                        <Button variant={"contained"} type="submit">Log In</Button>
                    </CustomizedLoginCard>
                </form>
            </Box>
            <Footer/>
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
export default Login;