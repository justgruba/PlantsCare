import {Box, Button, TextField, Typography} from "@mui/material";
import   { useNavigate }   from "react-router-dom";
function Login() {
    const  navigate = useNavigate();

    function handleClick() : void {
        navigate("/main")
    }
    return (
        <div>
            <form>
                <Box display="flex"
                     flexDirection="column"
                     maxWidth={400}
                     alignItems="center"
                     justifyContent="center"
                     margin="auto"
                     marginTop={10}
                     padding={5}
                     borderRadius={10}
                     boxShadow="5px 5px 10px #ccc">
                    <Typography  variant={"h3"} padding={3} textAlign={"center"}>Log In</Typography>
                    <TextField margin={"normal"} type="email" variant={"outlined"} placeholder={"Email"}/>
                    <TextField margin={"normal"} type="password" variant={"outlined"} placeholder={"Password"}/>
                    <Button variant={"contained"} color={"warning"} onClick={handleClick}>Log In</Button>
                </Box>
            </form>
        </div>
);
}

export default Login;