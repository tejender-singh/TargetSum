import { render, fireEvent } from "@testing-library/react";
import Playground from "../components/Playground";
import "@testing-library/jest-dom";
import { act } from "react-test-renderer";

jest.mock("../utils/MathUtil", () => ({
  getArrayOfRandomNumbersBetween: jest.fn(() => [1, 2, 3, 4, 5, 6]),
  getSumOfRandomNumbersInArray: jest.fn(() => 10),
}));
jest.useFakeTimers();

describe("Playground component", () => {
  let onPlayAgain;
  beforeEach(() => {
    onPlayAgain = jest.fn();
  });

  it("should display the target sum", () => {
    const { getByText } = render(<Playground onPlayAgain={onPlayAgain} />);
    expect(getByText("10")).toBeInTheDocument();
  });

  it("should display the time remaining", async () => {
    const { getByText } = render(<Playground onPlayAgain={onPlayAgain} />);
    expect(getByText("Time Remaining: 15")).toBeInTheDocument();
  });

  it("should change the time remaining every second", async () => {
    jest.useFakeTimers();
    const { getByText } = render(<Playground onPlayAgain={onPlayAgain} />);
    expect(getByText("Time Remaining: 15")).toBeInTheDocument();
    await act(async () => {
      jest.advanceTimersByTime(1000);
    });
    expect(getByText("Time Remaining: 14")).toBeInTheDocument();
  });

  it("should display the GameResult component when the game is lost", async () => {
    const { getByText } = render(<Playground onPlayAgain={onPlayAgain} />);
    expect(getByText("Time Remaining: 15")).toBeInTheDocument();
    for (let i = 0; i < 15; i++) {
      await act(async () => {
        jest.advanceTimersByTime(1000);
      });
    }
    expect(getByText("Time Remaining: 0")).toBeInTheDocument();
    expect(getByText("You Lost")).toBeInTheDocument();
    expect(getByText("Play Again")).toBeInTheDocument();
  });

  it("should call onPlayAgain function when play again button is clicked", async () => {
    const { getByText } = render(<Playground onPlayAgain={onPlayAgain} />);
    expect(getByText("Time Remaining: 15")).toBeInTheDocument();
    for (let i = 0; i < 15; i++) {
      await act(async () => {
        jest.advanceTimersByTime(1000);
      });
    }
    fireEvent.click(getByText("Play Again"));
    expect(onPlayAgain).toHaveBeenCalled();
  });

  it("should display the GameResult component when the game is won", () => {
    const { getByText } = render(<Playground onPlayAgain={onPlayAgain} />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("4"));
    expect(getByText("You WON!")).toBeInTheDocument();
  });

  it("should display the GameResult component when the game is lost", () => {
    const { getByText } = render(<Playground onPlayAgain={onPlayAgain} />);
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("2"));
    fireEvent.click(getByText("3"));
    fireEvent.click(getByText("5"));
    expect(getByText("You Lost")).toBeInTheDocument();
  });
});
