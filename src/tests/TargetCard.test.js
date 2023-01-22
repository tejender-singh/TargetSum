import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import GameState from "../utils/GameState";
import ColorUtils from "../utils/ColorUtils";
import TargetCard from "../components/TargetCard";

describe("TargetCard", () => {
  test("should render active card with light blue background and dark blue text", () => {
    const { getByText } = render(
      <TargetCard gameState={GameState.active} text="50" />
    );
    const card = getByText("50").parentNode.parentNode;
    expect(card).toHaveStyle(`background-color: ${ColorUtils.lightBlue}`);
    expect(card).toHaveStyle(`color: ${ColorUtils.darkBlue}`);
  });

  test("should render lost card with red background and white text", () => {
    const { getByText } = render(
      <TargetCard gameState={GameState.lost} text="50" />
    );
    const card = getByText("50").parentNode.parentNode;
    expect(card).toHaveStyle(`background-color: ${ColorUtils.red}`);
    expect(card).toHaveStyle(`color: ${ColorUtils.white}`);
  });

  test("should render won card with green background and black text", () => {
    const { getByText } = render(
      <TargetCard gameState={GameState.won} text="50" />
    );
    const card = getByText("50").parentNode.parentNode;
    expect(card).toHaveStyle(`background-color: ${ColorUtils.green}`);
    expect(card).toHaveStyle(`color: ${ColorUtils.black}`);
  });
});
