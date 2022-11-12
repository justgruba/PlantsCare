import NavBar from "./NavBar";
import {Box,  Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import {Link} from "react-router-dom";
import {useUserContext} from "../UserProvider";

function MainNavBar() {
    const { currentUser, setCurrent} = useUserContext();
    const LogOutHandler = () => {
        setCurrent({
            id: -1,
            name: "",
            email: "",
            password: "",
            plants_index: [-1],
        })
    }
    return <NavBar>
        <Box  display="grid" gridTemplateColumns='repeat(3, 3fr)'>
            <Typography variant="h4">Hello {currentUser.name}</Typography>
            <Box paddingLeft={30} paddingTop={1}>
                <CustomizedLink to="/signup"><Typography variant={"h5"}>Plants</Typography></CustomizedLink>
            </Box>
            <Box paddingLeft={30} paddingTop={1}>
                <CustomizedLink onClick={LogOutHandler} to="/"><Typography variant={"h5"}>LogOut</Typography></CustomizedLink>
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