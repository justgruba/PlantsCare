import {Box, Grid} from "@mui/material"
import { styled } from '@mui/material/styles';
interface MessageProps {
    children: JSX.Element | JSX.Element[];
}
const CustomedNavBar = styled('div') `
        background:  #FF8E53 ;
        border: 0;
        border-radius: 3px;
        box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
        color: white;
        height: 48px;
        padding: 0 30px`;


function NavBar (props: MessageProps) {
    return <CustomedNavBar>
        {props.children}
    </CustomedNavBar>
}

export default NavBar;