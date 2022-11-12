import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {useEffect, useState} from "react";
import {Box, Slide} from "@mui/material";
import {ImageListItemBar} from "@mui/material";
import Description from "../popUp/Description"
import {useUserContext} from "../UserProvider";
interface Plant {
    photo: string;
    id: number;
    title: string;
    des: string | "";
}
const PlantsSlider: React.FC<{}> = (props) => {
    const [plants, setPlants] = useState<Plant[]>([]);
    const [popUp, setPopUp] = useState<boolean>(false);
    const [id, setId] = useState<number>(0);
    const {currentUser} = useUserContext();
    function openDescription (key: number) {
        setPopUp((prev) => !prev);
        setId(key);
    }

    useEffect(() => {
        fetch('http://localhost:3004/plants')
            .then( res => {
                return res.json()
            })
            .then((data)=>{
                setPlants(data);
            });
    }, []);


  return(
      <Box padding={5} height={120}>
          <ImageList sx={{ gridAutoFlow: "column",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr)) !important",
                gridAutoColumns: "minmax(120px, 1fr)",
              "&::-webkit-scrollbar": {
                    height: 0
                }
          }}>
              {plants.filter(item => currentUser.plants_index.includes(item.id)).map((item) => (
                   <ImageListItem key={item.id} onClick={openDescription.bind(this, item.id)}>
                      <img
                          src={`${item.photo}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          loading="lazy"/>
                      <ImageListItemBar
                        title={item.title}
                        subtitle={<span>hello</span>}
                        position="below"
                      />
                  </ImageListItem>
              ))}
              {popUp && <Slide in={popUp}>
                  {  <Box position="absolute">
                      <Description des ={plants[id].des }/>
                  </Box>}
              </Slide>}
          </ImageList>
      </Box>
  );

}

export default PlantsSlider;

