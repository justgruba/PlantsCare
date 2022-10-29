import {Typography, Box} from "@mui/material";
import {styled} from "@mui/material/styles";
const Plants: React.FC<{}> = ({}) => {
  return(
    <Box>
         <Title>Your plants</Title>
        <Box>
            <Typography>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</Typography>
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