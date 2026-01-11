# Rock Paper Scissors

This project started as a simple [Rock Paper Scissors game](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors) that used `prompt()` for input and `alert()` for displaying results. It has been enhanced and refactored into a fully interactive DOM-based application with a clean button interface, following [The Odin Project lesson: Revisiting Rock Paper Scissors](https://www.theodinproject.com/lessons/foundations-revisiting-rock-paper-scissors).

## Overview

Click **Rock**, **Paper**, or **Scissors** to play against the computer. Results display on the page, the score updates live, and the game ends when someone reaches **5 points**. Click **Play Again** to reset and replay.

## How to Play

1. Open `index.html` in your browser.
2. Click one of the three buttons: **Rock**, **Paper**, or **Scissors**.
   - **Keyboard shortcut** (bonus): Press **R** for Rock, **P** for Paper, or **S** for Scissors
3. The round result appears on the page with the updated score.
4. First player to **5 points** wins!
5. Click **Play Again** to reset and play again.

## Game Rules

- 🪨 Rock beats ✂️ Scissors
- 📄 Paper beats 🪨 Rock
- ✂️ Scissors beat 📄 Paper
- Same choice = Tie (no points awarded)

## Features

### Assignment Requirements ✓

- **Three button UI** - Players click buttons instead of using prompts
- **Event listeners** - Each button triggers `playRound()` with the correct choice
- **DOM-based results** - Game displays results in an HTML div, not console-only
- **Running score display** - Score updates after each round
- **Winner announcement** - Game declares a winner when a player reaches 5 points

### Extra Features (Beyond Requirements) ⭐

- **Round history** - Each round appended as `Round X: ...` (nothing gets overwritten)
- **Button state management** - Choice buttons disabled when game ends
- **Reset functionality** - "Play Again" button resets scores and clears round history
- **Keyboard support** - Press **R**, **P**, or **S** keys to play without clicking buttons
- **Safe DOM clearing** - Uses `replaceChildren()` instead of `innerHTML`
- **Code organization** - Constants (`WINNING_SCORE`, `CHOICES`), helper functions (`toggleButtons()`, `scoreText()`)
- **Clean architecture** - Separate functions for different responsibilities
- **DRY principles** - Eliminates code duplication with reusable functions
