import DatePicker from "../calendar/DatePicker";
import {Box} from "@mui/material";
import Plants from "../plants/PlantsPicker";
import MainNavBar from "../navigationBar/MainNavBar";
import Footer from "../footer/Footer";

function Main() {
    return (
        <Box>
                <MainNavBar/>
                <DatePicker/>
                <Plants/>
                <Footer/>
        </Box>
    );
}

export default Main;