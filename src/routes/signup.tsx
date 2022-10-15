import {Box, Button, TextField, Typography} from "@mui/material";

export default function Signup() {
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
                    <Typography variant={"h3"} padding={2} textAlign={"center"}>Sign Up</Typography>
                    <TextField margin={"normal"} type="text" variant={"outlined"} placeholder={"Name"}/>
                    <TextField margin={"normal"} type="email"  variant={"outlined"} placeholder={"Email"}/>
                    <TextField margin={"normal"} type="password"  variant={"outlined"} placeholder={"Password"}/>
                    <Button variant={"contained"} color={"warning"}>Sign up</Button>
                </Box>
            </form>
        </div>
    );
}