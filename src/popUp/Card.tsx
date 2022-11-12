import {Box, Typography} from "@mui/material";
import {Months} from "../calendar/Months";
import {useEffect, useState} from "react";
import PopUp from "./PopUp";
interface Props {
    day: number,
    month: number,
    year: number,
}
interface Plant {
    photo: string;
    id: number;
    title: string;
}
const Card = (props: Props) => {
    const [plants, setPlants] = useState<Plant[]>([]);
    useEffect(() => {
        fetch('http://localhost:3004/plants')
            .then( res => {
                return res.json();
            })
            .then((data)=>{
                setPlants(data);
            });
    }, []);
     return <PopUp>
         <Typography display="inline" >{`${props.day} ${Months[props.month]} ${props.year}`}</Typography>
        <Typography>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}</Typography>
     </PopUp>

}

export default Card;