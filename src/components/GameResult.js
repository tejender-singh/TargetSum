import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import ColorUtils from "../utils/ColorUtils";
import GameState from "../utils/GameState";

const GameResult = (props) => {
  const message =
    props.gameState === GameState.won
      ? "You WON!"
      : props.gameState === GameState.lost
      ? "You Lost"
      : "";
  return (
    <Card variant="outlined" sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography
          variant="h5"
          color={
            props.gameState === GameState.won
              ? ColorUtils.green
              : props.gameState === GameState.lost
              ? ColorUtils.red
              : ""
          }
        >
          {message}
        </Typography>
      </CardContent>
      <CardActions style={{ justifyContent: "center" }}>
        <Button
          size="medium"
          variant="outlined"
          onClick={() => props.onPlayAgain()}
        >
          Play Again
        </Button>
      </CardActions>
    </Card>
  );
};

export default GameResult;
