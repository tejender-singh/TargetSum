import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import ColorUtils from "../utils/ColorUtils";
import GameState from "../utils/GameState";

const ButtonCard = (props) => {
  const [disabled, setDisabled] = useState(false);
  const [color, setColor] = useState(ColorUtils.darkBlue);
  const [bgcolor, setBgColor] = useState(ColorUtils.white);
  const handleClick = () => {
    if (!disabled && props.gameState === GameState.active) {
      props.onClick(props.number);
      setDisabled(true);
      setColor(ColorUtils.gray);
      setBgColor(ColorUtils.lightGray);
    }
  };

  return (
    <Box style={{}} sx={{ textAlign: "-webkit-center" }} onClick={handleClick}>
      <Card variant="outlined" sx={{ bgcolor, minHeight: "7vh" }}>
        <>
          <CardContent>
            <Typography
              variant="h4"
              component="div"
              fontSize={"3vh"}
              sx={{ padding: "2vh" }}
              color={color}
            >
              {props.number}
            </Typography>
          </CardContent>
        </>
      </Card>
    </Box>
  );
};

export default ButtonCard;
