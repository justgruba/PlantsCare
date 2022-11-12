import React from 'react';
import Calendar from "./Calendar";
import {styled} from "@mui/material/styles";

const DatePickerContainer = styled('div') `
        background:  linear-gradient(#F3D396, #F4E8CF);
        width: 100%;
        height: 600px;`

const DatePicker: React.FC<{}> = ({}) => {
    return (
        <DatePickerContainer>
                <Calendar/>
        </DatePickerContainer>
    );
}
 export default DatePicker;