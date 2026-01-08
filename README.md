# Rock Paper Scissors

A JavaScript implementation of the classic Rock Paper Scissors game from [The Odin Project Foundations Course](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors).

## Project Overview

This project implements a fully functional Rock Paper Scissors game where a player competes against the computer over 5 rounds. The game tracks scores and declares a winner at the end.

## How to Play

1. Open `index.html` in your web browser
2. When prompted, enter your choice: **rock**, **paper**, or **scissors**
3. Play 5 rounds against the computer
4. The winner is determined by the highest score after 5 rounds

**Note:** If the prompt doesn't appear on first load, try reloading the page.

## Features Implemented

### Core Requirements ✓
- `getComputerChoice()` - Randomly returns rock, paper, or scissors
- `getHumanChoice()` - Gets user input
- `playRound()` - Handles single round logic and score tracking
- `playGame()` - Runs 5 complete rounds and declares a winner
- Score tracking with `humanScore` and `computerScore` variables
- Case-insensitive input handling

### Beyond Requirements ⭐
The following features go beyond the project specifications:

1. **Interactive UI with Prompts and Alerts** - The base project specified playing entirely in the console. This implementation uses browser `prompt()` and `alert()` for a more user-friendly experience.

2. **Input Validation with Retry Logic** - The project stated "You do not need to handle reprompting if the user enters an invalid input." This implementation automatically prompts the user again if they enter an invalid choice.

3. **Graceful Cancellation Handling** - Detects when users cancel the prompt and exits the game cleanly instead of crashing.

4. **Better Error Prevention** - Includes null checks and defensive programming practices to prevent runtime errors.
