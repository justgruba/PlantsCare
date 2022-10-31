import {Typography, Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import PlantsSlider from "./PlantsSlider";


const Plants: React.FC<{}> = ({}) => {

  return(
    <Box>
         <Title>Your plants</Title>
        <Box>
           <PlantsSlider/>
        </Box>
    </Box>);
}
const Title = styled(Typography)`
  color: darkgreen;
  font-size: 200%;
  padding-left: 40px;
  padding-top: 20px;
`
export default Plants;