import { render, fireEvent } from "@testing-library/react";
import ButtonGrid from "../components/ButtonGrid";
import GameState from "../utils/GameState";

describe("ButtonGrid", () => {
  it("should render a grid of buttons", () => {
    const candidateNumbers = [1, 2, 3, 4, 5, 6];
    const { getAllByText } = render(
      <ButtonGrid
        candidateNumbers={candidateNumbers}
        gameState={GameState.active}
        buttonClick={() => {}}
      />
    );
    const buttons = getAllByText(/\d/); // regex to match all the buttons
    expect(buttons.length).toBe(candidateNumbers.length);
  });

  it("should call the buttonClick function when a button is clicked", () => {
    const candidateNumbers = [1, 2, 3, 4, 5, 6];
    const buttonClick = jest.fn();
    const { getByText } = render(
      <ButtonGrid
        candidateNumbers={candidateNumbers}
        gameState={GameState.active}
        buttonClick={buttonClick}
      />
    );
    const button = getByText("1");
    fireEvent.click(button);
    expect(buttonClick).toHaveBeenCalledWith(1);
  });

  it("should not render any buttons when the candidate numbers array is empty", () => {
    const { queryByText } = render(
      <ButtonGrid
        candidateNumbers={[]}
        gameState={GameState.active}
        buttonClick={() => {}}
      />
    );
    expect(queryByText(/\d/)).toBeNull();
  });
});
