import { useEffect, useState } from "react";
import GameState from "../utils/GameState";
import ButtonGrid from "./ButtonGrid";
import TargetCard from "./TargetCard";
import {
  randomNumberBetween,
  getSumOfRandomNumbersInArray,
} from "../utils/MathUtil";
import GameResult from "./GameResult";
import { Typography } from "@mui/material";
import ColorUtils from "../utils/ColorUtils";

const Playground = (props) => {
  const [arr, setArr] = useState([]);
  const [targetSum, setTargetSum] = useState(0);
  const [gameState, setGameState] = useState(GameState.active);
  const [clickedNumbers, setClickedNumbers] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(15);

  useEffect(() => {
    const newArr = Array.from({ length: 6 }).map(() =>
      randomNumberBetween(1, 25)
    );
    setArr(newArr);
    setTargetSum(getSumOfRandomNumbersInArray(newArr, 4));
  }, []);

  useEffect(() => {
    if (timeRemaining > 0) {
      setTimeout(() => {
        if (gameState === GameState.active) setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else {
      setGameState(GameState.lost);
    }
  }, [timeRemaining]);

  const sum = clickedNumbers.reduce((prev, current) => prev + current, 0);
  if (clickedNumbers.length === 4 && gameState === GameState.active) {
    if (sum === targetSum) {
      setGameState(GameState.won);
    } else {
      setGameState(GameState.lost);
    }
  }

  const clickNumber = (number) => {
    if (gameState !== GameState.active) {
      return;
    }

    const newClickedNumbers = [...clickedNumbers, number];
    setClickedNumbers(newClickedNumbers);
    console.log(number, targetSum, sum);
  };

  return (
    <>
      <TargetCard text={targetSum} gameState={gameState} />
      <div style={{ paddingTop: 40 }}>
        <ButtonGrid
          gameState={gameState}
          buttonClick={clickNumber}
          candidateNumbers={arr}
        />
      </div>
      <Typography
        variant="h5"
        sx={{ color: timeRemaining > 5 ? ColorUtils.black : ColorUtils.red }}
      >
        Time Remaining: {timeRemaining}
      </Typography>
      <div
        style={{
          paddingTop: 10,
          textAlign: "center",
        }}
      >
        {gameState !== GameState.active ? (
          <GameResult gameState={gameState} onPlayAgain={props.onPlayAgain} />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Playground;
