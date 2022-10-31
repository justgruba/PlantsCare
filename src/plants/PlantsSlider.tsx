import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {useEffect, useState} from "react";
import {Box} from "@mui/material";
import {ImageListItemBar} from "@mui/material";

interface Plant {
    photo: string;
    id: number;
    title: string
}
const PlantsSlider: React.FC<{}> = (props) => {
    const [plants, setPlants] = useState<Plant[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
        fetch('http://localhost:8000/plants')
            .then( res => {
                return res.json();
            })
            .then((data)=>{
                console.log(data);
                setPlants(data);
            });
    }, []);


  return(
      <Box padding={5}>
          <ImageList sx={{ gridAutoFlow: "column",
              gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr)) !important",
                gridAutoColumns: "minmax(160px, 1fr)",
              "&::-webkit-scrollbar": {
                    height: 0
                }
          }}>
              {plants.map((item) => (
                  <ImageListItem key={item.id}>
                      <img
                          src={`${item.photo}?w=248&fit=crop&auto=format`}
                          srcSet={`${item.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                          loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.title}
                        subtitle={<span>hello</span>}
                        position="below"
                      />
                  </ImageListItem>
              ))}
          </ImageList>
      </Box>
  );



}

export default PlantsSlider;

