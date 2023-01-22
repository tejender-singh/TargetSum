import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../components/app";
import "@testing-library/jest-dom";
import { act } from "react-test-renderer";

jest.useFakeTimers();
describe("App", () => {
  it("renders the correct text", () => {
    const { getByText } = render(<App />);
    const text = getByText(
      "Choose any four numbers that sum to the target number"
    );
    expect(text).toBeInTheDocument();
  });

  it("resets the game when the PlayAgain button is clicked", async () => {
    const { getByText } = render(<App />);
    for (let i = 0; i < 15; i++) {
      await act(async () => {
        jest.advanceTimersByTime(1000);
      });
    }
    expect(getByText("Time Remaining: 0")).toBeInTheDocument();
    expect(getByText("You Lost")).toBeInTheDocument();
    const playAgainButton = getByText("Play Again");
    fireEvent.click(playAgainButton);
    expect(getByText("Time Remaining: 15")).toBeInTheDocument();
  });

  it("opens the link in a new tab when the GitHub icon is clicked", () => {
    global.open = jest.fn();
    const { getByTestId } = render(<App />);
    const githubIcon = getByTestId("GitHubIcon");
    fireEvent.click(githubIcon);
    expect(window.open).toHaveBeenCalledWith(
      "https://github.com/tejender-singh/TargetSum",
      "_blank"
    );
    global.open.mockRestore();
  });

  it("opens the link in a new tab when the Portfolio link is clicked", () => {
    const { getByText } = render(<App />);
    const portfolioLink = getByText("Portfolio");
    fireEvent.click(portfolioLink);
    expect(window.open).toHaveBeenCalledWith(
      "https://tejender-singh.github.io/",
      "_blank"
    );
    window.open.mockRestore();
  });
});
