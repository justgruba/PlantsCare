import DatePicker from "../calendar/DatePicker";
import {Box} from "@mui/material";
import Plants from "../plants/PlantsPicker";
import MainNavBar from "../navigationBar/MainNavBar";

function Main() {
    return (
        <Box>
                <MainNavBar/>
                <DatePicker/>
                <Plants/>
        </Box>
    );
}

export default Main;