import React from 'react';

import Calendar from "./Calendar";
import {styled} from "@mui/material/styles";

const DatePickerContainer = styled('div') `
        background:  linear-gradient(#F3D396, #F4E8CF);
        width: 100%;
        height: 600px;`

const DateContainer = styled('div')`
  height: 5px;
  background: darkgreen;
`
const DatePicker: React.FC<{}> = ({}) => {
    return (
        <DatePickerContainer>
            <DateContainer>
                <Calendar/>
            </DateContainer>
        </DatePickerContainer>
    );
}
 export default DatePicker;