import { Container, Typography } from "@mui/material";
import { useState } from "react";
import Playground from "./Playground";

export default function App() {
  const [gameId, setGameId] = useState(1);
  const resetGame = () => {
    setGameId(gameId + 1);
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h6" component="div">
        Choose any four numbers that sum to the target number
      </Typography>
      <Playground key={gameId} onPlayAgain={resetGame} />
    </Container>
  );
}
