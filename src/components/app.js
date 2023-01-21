import { Container, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import Playground from "./Playground";
import GitHubIcon from "@mui/icons-material/GitHub";
import ColorUtils from "../utils/ColorUtils";

export default function App() {
  const [gameId, setGameId] = useState(1);
  const resetGame = () => {
    setGameId(gameId + 1);
  };
  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Container maxWidth="sm" sx={{ marginBottom: 10 }}>
        <Typography fontSize={"2vh"} variant="h6" component="div">
          Choose any four numbers that sum to the target number
        </Typography>
        <Playground key={gameId} onPlayAgain={resetGame} />
      </Container>
      <footer
        style={{
          position: "fixed",
          left: 10,
          bottom: 0,
          fontSize: "2vh",
          right: 10,
          backgroundColor: ColorUtils.white,
        }}
      >
        <p
          style={{
            textAlign: "center",
            fontFamily: `"Roboto","Helvetica","Arial",sans-serif`,
            margin: 0,
          }}
        >
          Code for this project is available at{" "}
          <IconButton aria-label="delete">
            <GitHubIcon
              // fontSize="large"

              sx={{ color: ColorUtils.black, fontSize: "2vh" }}
              onClick={() =>
                openLink("https://github.com/tejender-singh/TargetSum")
              }
            />
          </IconButton>
          . View my{" "}
          <a
            href="#"
            onClick={() => openLink("https://tejender-singh.github.io/")}
          >
            Portfolio
          </a>
        </p>
      </footer>
    </>
  );
}
