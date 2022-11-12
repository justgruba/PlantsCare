import {Typography} from "@mui/material";
import PopUp from "./PopUp";
interface Props {
    des: string | ""
}
const Description = ({des}: Props) => {
    return <PopUp>
        <Typography>{des}</Typography>
    </PopUp>

}

export default Description;