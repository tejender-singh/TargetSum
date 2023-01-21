import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ColorUtils from "../utils/ColorUtils";
import GameState from "../utils/GameState";

const TargetCard = (props) => {
  const bgcolor =
    props.gameState === GameState.active
      ? ColorUtils.lightBlue
      : props.gameState === GameState.lost
      ? ColorUtils.red
      : ColorUtils.green;
  const color =
    props.gameState === GameState.active
      ? ColorUtils.darkBlue
      : props.gameState === GameState.lost
      ? ColorUtils.white
      : ColorUtils.black;

  return (
    <Box sx={{ textAlign: "-webkit-center" }}>
      <Card variant="outlined" sx={{ color, bgcolor }}>
        <>
          <CardContent>
            <Typography variant="h2" component="div">
              {props.text}
            </Typography>
          </CardContent>
        </>
      </Card>
    </Box>
  );
};

export default TargetCard;
