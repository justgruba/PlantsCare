import React, {useState} from 'react';
import {Box, Button } from "@mui/material";
import { generateDates } from "../configs/MonthDays";
import { Typography } from "@mui/material";
import { Months } from "../configs/Months"
import {Weekdays} from "../configs/Weekdays";
const Calendar: React.FC<{}> = ({}) => {

    let date = new Date();
    const [currentYear, setCurrentYear] = useState<number>(date.getFullYear());
    const [currentMonth, setCurrentMonth] = useState<number>(date.getMonth());

    const getPreviousMonth = () => {
         setCurrentMonth((prevMonth) => prevMonth - 1)

        if(currentMonth == 0) {
            setCurrentMonth(11)
            setCurrentYear((prevYear) => prevYear - 1)
        }

    }

    const getNextMonth = () => {
        setCurrentMonth((prevMonth) => prevMonth + 1)

        if(currentMonth == 11) {
            setCurrentMonth(0)
            setCurrentYear((prevYear) => prevYear + 1)
        }
    }
    return(
        <Box     position="absolute"
                 borderRadius={5}
                 left={300}
                 top={100}
                 paddingLeft={10}
                 paddingRight={10}
              bgcolor="text.disabled"
              boxShadow="5px 5px 10px #ccc">
            <Box height={50} display="grid" gridTemplateColumns='repeat(3, 2fr)' columnGap={2}>
                <Typography onClick={getPreviousMonth} margin="auto">Arrow</Typography>
                <Typography margin="auto">{ `${Months[currentMonth]} ${currentYear}`}</Typography>
                <Typography onClick={getNextMonth} margin="auto">Arrow</Typography>
            </Box>
            <Box display="grid"
                 gridTemplateColumns='repeat(7, 1fr)'
                 gridTemplateRows='repeat(7, 1fr)'
                 columnGap={2}
                 rowGap={2}>
                {Weekdays.map(day => ( <Box margin="auto">{day}</Box>))}
                {generateDates(currentMonth, currentYear).map(
                   date => (<Button disabled={!date.day} sx={{borderRadius: 2, size: "small"}} onClick={() => console.log(date)}> {date.day}</Button>))}
            </Box>
        </Box>);
}

export default Calendar;