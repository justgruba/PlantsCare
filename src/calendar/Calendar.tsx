import React, {useState} from 'react';
import {Box, Button, Zoom, Slide, Typography} from "@mui/material";
import { generateDates } from "./MonthDays";
import { Months } from "./Months"
import {Weekdays} from "./Weekdays";
import Card from "../popUp/Card";
import MonthsChanging from "./calendarSegments/MonthsChanging";
import {styled} from "@mui/material/styles";
interface Date {
    day: number,
    month: number,
    year: number
}

function Calendar({}):JSX.Element {

    let date = new Date();
    const [currentYear, setCurrentYear] = useState<number>(date.getFullYear());
    const [currentMonth, setCurrentMonth] = useState<number>(date.getMonth());
    const [clickedDate, setClickedDate] = useState<Date>({day: 0,  month: 0, year: 0});
    const [popUp, setPopUp] = useState<boolean>(false);

    const setPopUpHandler = (date: Date): void => {
        setPopUp((prev) => !prev);
        setClickedDate(date);
    }

    const closePopUpHandler = () => {
        if(popUp)
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
    const CustomizedMainCalendarCointainer = styled(Box) `
      position: absolute;
      border-radius: 20px;
      left: 300px;
      top: 80px;
      width: 600px;
      height: 500px;
      padding-left: 10px;
      padding-right: 10px;
      color: white;
      background-color: #193C40;
      box-shadow: 5px 5px 10px #38184C;
    `;
    const CustomizedCalendar = styled(Box) `
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(7, 1fr);
      column-gap: 2px;
      row-gap: 20px;
    `;
    const CustomizedCardContainer = styled(Box)`
      position: absolute;
      width: 500px;
      height: 300px;
      background-color: #38184C;
      border-radius: 20px;
    `
    return(
        <CustomizedMainCalendarCointainer
                onClick={closePopUpHandler}>
            <MonthsChanging nextMonth={getNextMonth} prevMonth={getPreviousMonth} currentDate={`${Months[currentMonth]} ${currentYear}`}/>
            <CustomizedCalendar>
                {Weekdays.map(day => ( <Box margin="auto"><Typography>{day}</Typography></Box>))}
                {generateDates(currentMonth, currentYear).map(
                    date => (<Button disabled={date.day === 0 }  sx={{borderRadius: 2, size: "small"}} onClick={() => setPopUpHandler({day: date.day, month: date.month, year: date.year})}>{date.day !== 0 && date.day}</Button>))}
                <Slide in={popUp} >
                    { <CustomizedCardContainer>
                        <Card day={clickedDate.day} month={clickedDate.month} year={clickedDate.year}/>
                    </CustomizedCardContainer>}
                </Slide>
            </CustomizedCalendar>
        </CustomizedMainCalendarCointainer>);
}

export default Calendar;