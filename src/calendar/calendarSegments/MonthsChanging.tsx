import {Box, Button, Typography} from "@mui/material";
import React from "react";
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
interface Props{
    prevMonth: () => void;
    nextMonth: () => void;
    currentDate: string;
}

function MonthsChanging (props: Props):JSX.Element  {
    return (
        <Box height={50} display="grid" gridTemplateColumns='repeat(3, 2fr)' paddingBottom={2} paddingTop={2}>
            <Button onClick={props.prevMonth} startIcon={<ArrowBackSharpIcon/>}/>
            <Typography  variant="h5" margin="auto">{ props.currentDate}</Typography>
            <Button onClick={props.nextMonth} startIcon={<ArrowForwardSharpIcon/>}/>
        </Box >
    );
}

export default MonthsChanging;