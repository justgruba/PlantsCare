import {Box, Button, Typography} from "@mui/material";
import React, {useState} from "react";

interface Props{
    prevMonth: () => void;
    nextMonth: () => void;
    currentDate: string;
}

function MonthsChanging (props: Props):JSX.Element  {
    return (
        <Box height={50} display="grid" gridTemplateColumns='repeat(3, 2fr)' paddingBottom={2} paddingTop={2}>
            <Button onClick={props.prevMonth}>Arrow</Button>
            <Typography  variant="h5" margin="auto">{ props.currentDate}</Typography>
            <Button onClick={props.nextMonth}>Arrow</Button>
        </Box >
    );
}

export default MonthsChanging;