import DatePicker from "../calendarComponents/DatePicker";
import {Box, Typography} from "@mui/material";
import MyPlants from "../myPlants/MyPlants";
import MainNavBar from "../navigationBar/MainNavBar";

function Main() {
    return (
        <Box>
                <MainNavBar/>
                <DatePicker/>
                <MyPlants/>
        </Box>
    );
}

export default Main;