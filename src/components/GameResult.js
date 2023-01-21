import { Button, Card, CardContent, Typography } from "@mui/material";
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
          fontSize={"4vh"}
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
      <Button
        size="medium"
        variant="outlined"
        sx={{
          height: "4vh",
        }}
        onClick={() => props.onPlayAgain()}
      >
        Play Again
      </Button>
    </Card>
  );
};

export default GameResult;
