import Grid from "@mui/material/Grid";
import ButtonCard from "./ButtonCard";

const ButtonGrid = (props) => {
  return (
    <Grid container spacing={2}>
      {props.candidateNumbers.map((number, index) => {
        return (
          <Grid key={"Key" + index} item xs={6}>
            <ButtonCard
              gameState={props.gameState}
              number={number}
              onClick={props.buttonClick}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default ButtonGrid;
