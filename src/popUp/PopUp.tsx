import {Box, Typography} from "@mui/material";
import React from "react";
import {styled} from "@mui/material/styles";

interface PopUpProps {
    children: React.ReactNode;
}
const PopUp = ({children}: PopUpProps) => {
    return <CustomizedPopup>
        {children}
    </CustomizedPopup>

}
const CustomizedPopup = styled(Box)`
  position: absolute;
  width: 500px;
  padding: 2px;
  height: 300px;
  padding: 2px;
  color: white;
  background-color: #38184C;
  border-radius: 20px`;

export default PopUp;