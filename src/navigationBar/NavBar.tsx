import { styled } from '@mui/material/styles';
import Image from '../Images/nav.jpg'
interface MessageProps {
    children: JSX.Element | JSX.Element[];
}
const CustomizedNavBar = styled('div') `
  border: 0;
  background-image: url(${Image});
  background-repeat: repeat;
  opacity: 0.90;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
  color: white;
  height: 48px;
  padding: 0 30px`;


function NavBar (props: MessageProps) {
    return <CustomizedNavBar>
        {props.children}
    </CustomizedNavBar>
}

export default NavBar;