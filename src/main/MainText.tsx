import {Box, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import Image from '../Images/mainImage.jpg'


const MainText = () => {
  return(
      <Row>
          <ColumnLeft>
              <Typography>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</Typography>
          </ColumnLeft>
          <ColumnRight>
              <Img src={Image}/>
          </ColumnRight>
      </Row>
  );
}

const Row = styled(Box)`
  display: grid;
  grid-template-columns: 40% 40%;
  grid-column-gap: 150px;
  padding-top: 50px;
  padding-left: 20px;
`
const ColumnRight = styled(Box)`
    
`
const ColumnLeft = styled(Box)`

`
const Img = styled('img')`
  width: 350px;
  box-shadow: 5px 5px 10px;
  height: 400px;
  border-radius: 50%;
`
export default MainText;