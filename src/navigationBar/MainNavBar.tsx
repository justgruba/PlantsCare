import NavBar from "./NavBar";
import {Box, Button, Typography} from "@mui/material";

function MainNavBar() {
    return <NavBar>
        <Box  display="grid" gridTemplateColumns='repeat(3, 3fr)'>
            <Typography variant="h3">Hello Mart</Typography>

            <Box paddingLeft={25}>
                 <Button>Your Plants</Button>
            </Box>
            <Box paddingLeft={30}>
                <Button>Log Out</Button>
            </Box>
        </Box>
    </NavBar>
}

export default MainNavBar;