import {styled} from "@mui/material/styles";
import Plants from "./Plants";
const PlantsPicker: React.FC<{}> = ({}) => {
    return (
        <PickerPlantsContainer>
            <PlantsContainer>
                <Plants/>
            </PlantsContainer>
        </PickerPlantsContainer>
    );
}


const PickerPlantsContainer= styled('div') `
  background:  linear-gradient(#F4E8CF, #F3D396);
  width: 100%;
  height: 500px;`

const PlantsContainer = styled('div')`
  height: 2px;
  background: darkgreen;`


export default PlantsPicker;
