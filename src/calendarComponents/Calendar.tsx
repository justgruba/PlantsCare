import React, {useState} from 'react';
import {Box, Button, Zoom, Slide} from "@mui/material";
import { generateDates } from "../configs/MonthDays";
import { Typography } from "@mui/material";
import { Months } from "../configs/Months"
import {Weekdays} from "../configs/Weekdays";
import Card from "./Card";



function Calendar({}):JSX.Element {

    let date = new Date();
    const [currentYear, setCurrentYear] = useState<number>(date.getFullYear());
    const [currentMonth, setCurrentMonth] = useState<number>(date.getMonth());
    const [clickedDate, setClickedDate] = useState<{day: number,  month: number, year: number}>({day: 0,  month: 0, year: 0});
    const [popUp, setPopUp] = useState<boolean>(false);

    const setPopUpHandler = (date: {day: number,  month: number, year: number}): void => {
        setPopUp((prev) => !prev);
        setClickedDate(date);
    }

    const closePopUpHandler = () => {
        if(popUp === true)
            setPopUp(false);
    }
    const getPreviousMonth = (): void => {
         setCurrentMonth((prevMonth) => prevMonth - 1)

        if(currentMonth == 0) {
            setCurrentMonth(11)
            setCurrentYear((prevYear) => prevYear - 1)
        }

    }

    const getNextMonth = (): void => {
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
                 top={80}
                 paddingLeft={10}
                 paddingRight={10}
              bgcolor="text.disabled"
              boxShadow="5px 5px 10px #ccc"
                onClick={closePopUpHandler}>
            <Box height={50} display="grid" gridTemplateColumns='repeat(3, 2fr)' paddingBottom={2} paddingTop={2}>
                <Button onClick={getPreviousMonth}>Arrow</Button>
                <Typography margin="auto">{ `${Months[currentMonth]} ${currentYear}`}</Typography>
                <Button onClick={getNextMonth}>Arrow</Button>
            </Box >
            <Box display="grid"
                 gridTemplateColumns='repeat(7, 1fr)'
                 gridTemplateRows='repeat(7, 1fr)'
                 columnGap={2}
                 rowGap={2}>
                {Weekdays.map(day => ( <Box margin="auto">{day}</Box>))}
                 <Slide in={popUp} >
                     { <Box sx={{position: "absolute", weight: 500, height:300, backgroundColor: "primary.main" }}>
                         <Card day={clickedDate.day} month={clickedDate.month} year={clickedDate.year}/>
                     </Box>}
                </Slide>
                {generateDates(currentMonth, currentYear).map(
                   date => (<Button disabled={date.day === 0 }  sx={{borderRadius: 2, size: "small"}} onClick={() => setPopUpHandler({day: date.day, month: date.month, year: date.year})}>{date.day !== 0 && date.day}</Button>))}
            </Box>
        </Box>);
}

export default Calendar;