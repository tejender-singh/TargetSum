import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonCard from "../components/ButtonCard";
import GameState from "../utils/GameState";

describe("ButtonCard", () => {
  it("should call onClick prop when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ButtonCard number={5} onClick={onClick} gameState={GameState.active} />
    );
    fireEvent.click(getByText("5"));
    expect(onClick).toHaveBeenCalledWith(5);
  });

  it("should change color when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ButtonCard number={5} onClick={onClick} gameState={GameState.active} />
    );
    fireEvent.click(getByText("5"));
    const card = getByText("5").parentNode.parentNode;
    expect(card).toHaveStyle(`color: rgba(0, 0, 0, 0.87)`);
  });

  it("should change background color when clicked", () => {
    const onClick = jest.fn();
    const { getByText } = render(
      <ButtonCard number={5} onClick={onClick} gameState={GameState.active} />
    );
    fireEvent.click(getByText("5"));
    const card = getByText("5").parentNode.parentNode;
    expect(card).toHaveStyle(`background-color: rgb(204, 204, 204)`);
  });
});
