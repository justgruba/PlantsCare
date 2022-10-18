import React from 'react';
import './DatePicker.css'
import Calendar from "./Calendar";
import {Container} from "@mui/material";
const DatePicker: React.FC<{}> = ({}) => {
    return (
        <div className="date-picker-container">
            <div className="background-container">
                <Calendar/>
            </div>
        </div>
    );
}
 export default DatePicker;