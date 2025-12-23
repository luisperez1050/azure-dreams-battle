"use client";

import { useState, useCallback } from "react";
import { Monster, RoundResult, GameState } from "@/app/types";
import { getRandomMonster } from "@/app/data/monsters";
import PlayerCard from "./PlayerCard";
import { Button } from "./ui/button";
import { Trophy, RotateCcw, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TOTAL_ROUNDS = 10;

export default function GameBoard() {
  const [gameState, setGameState] = useState<GameState>({
    currentRound: 1,
    rounds: [],
    player1Score: 0,
    player2Score: 0,
    gameComplete: false,
  });

  const [currentRoundState, setCurrentRoundState] = useState<{
    player1Monster: Monster | null;
    player2Monster: Monster | null;
    player1Drawn: boolean;
    player2Drawn: boolean;
  }>({
    player1Monster: null,
    player2Monster: null,
    player1Drawn: false,
    player2Drawn: false,
  });

  const handleDrawMonster = useCallback(
    (player: 1 | 2) => {
      const newMonster = getRandomMonster();
      
      if (player === 1) {
        setCurrentRoundState((prev) => ({
          ...prev,
          player1Monster: newMonster,
          player1Drawn: true,
        }));
      } else {
        setCurrentRoundState((prev) => ({
          ...prev,
          player2Monster: newMonster,
          player2Drawn: true,
        }));
      }
    },
    []
  );

  const determineWinner = useCallback(
    (monster1: Monster, monster2: Monster): "player1" | "player2" | "draw" => {
      if (monster1.powerLevel > monster2.powerLevel) {
        return "player1";
      } else if (monster2.powerLevel > monster1.powerLevel) {
        return "player2";
      } else {
        return "draw";
      }
    },
    []
  );

  const handleNextRound = useCallback(() => {
    if (!currentRoundState.player1Monster || !currentRoundState.player2Monster) {
      return;
    }

    const winner = determineWinner(
      currentRoundState.player1Monster,
      currentRoundState.player2Monster
    );

    let newPlayer1Score = gameState.player1Score;
    let newPlayer2Score = gameState.player2Score;
    let roundResult: RoundResult;

    // Handle draws - re-draw both monsters
    if (winner === "draw") {
      const newMonster1 = getRandomMonster();
      const newMonster2 = getRandomMonster();
      const newWinner = determineWinner(newMonster1, newMonster2);

      if (newWinner === "player1") {
        newPlayer1Score += 1;
      } else if (newWinner === "player2") {
        newPlayer2Score += 1;
      }
      // If still a draw after re-draw, no points awarded

      roundResult = {
        round: gameState.currentRound,
        player1Monster: newMonster1,
        player2Monster: newMonster2,
        winner: newWinner === "draw" ? null : newWinner,
      };
    } else {
      if (winner === "player1") {
        newPlayer1Score += 1;
      } else {
        newPlayer2Score += 1;
      }

      roundResult = {
        round: gameState.currentRound,
        player1Monster: currentRoundState.player1Monster,
        player2Monster: currentRoundState.player2Monster,
        winner,
      };
    }

    const nextRound = gameState.currentRound + 1;
    const isGameComplete = nextRound > TOTAL_ROUNDS;

    setGameState((prev) => ({
      ...prev,
      rounds: [...prev.rounds, roundResult],
      player1Score: newPlayer1Score,
      player2Score: newPlayer2Score,
      currentRound: nextRound,
      gameComplete: isGameComplete,
    }));

    // Reset for next round
    setCurrentRoundState({
      player1Monster: null,
      player2Monster: null,
      player1Drawn: false,
      player2Drawn: false,
    });
  }, [currentRoundState, gameState, determineWinner]);

  const handleReset = useCallback(() => {
    setGameState({
      currentRound: 1,
      rounds: [],
      player1Score: 0,
      player2Score: 0,
      gameComplete: false,
    });
    setCurrentRoundState({
      player1Monster: null,
      player2Monster: null,
      player1Drawn: false,
      player2Drawn: false,
    });
  }, []);

  const canProceedToNextRound =
    currentRoundState.player1Drawn && currentRoundState.player2Drawn;
  const isGameComplete = gameState.gameComplete;
  const finalWinner =
    gameState.player1Score > gameState.player2Score
      ? "Player 1"
      : gameState.player2Score > gameState.player1Score
        ? "Player 2"
        : "Draw";

  // Calculate current round winner for display
  const currentRoundWinner =
    canProceedToNextRound &&
    currentRoundState.player1Monster &&
    currentRoundState.player2Monster
      ? determineWinner(
          currentRoundState.player1Monster,
          currentRoundState.player2Monster
        )
      : null;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 p-4">
      <div className="w-full max-w-6xl space-y-6">
        {/* Header */}
        <div className="text-center">
          <h1 className="mb-2 text-4xl font-bold text-white drop-shadow-lg md:text-5xl">
            Azure Dreams Battle
          </h1>
          <p className="text-lg text-white/80">
            Round {gameState.currentRound} of {TOTAL_ROUNDS}
          </p>
        </div>

        {/* Score Board */}
        <div className="flex items-center justify-center gap-8 rounded-lg bg-black/30 p-4 backdrop-blur-sm">
          <div className="text-center">
            <p className="text-sm text-white/70">Player 1</p>
            <p className="text-3xl font-bold text-blue-400">{gameState.player1Score}</p>
          </div>
          <div className="text-2xl font-bold text-white">VS</div>
          <div className="text-center">
            <p className="text-sm text-white/70">Player 2</p>
            <p className="text-3xl font-bold text-red-400">{gameState.player2Score}</p>
          </div>
        </div>

        {/* Game Complete Screen */}
        {isGameComplete && (
          <div className="rounded-lg bg-black/40 p-6 text-center backdrop-blur-sm">
            <Trophy className="mx-auto mb-4 h-16 w-16 text-yellow-400" />
            <h2 className="mb-2 text-3xl font-bold text-white">Game Complete!</h2>
            <p className="mb-4 text-xl text-white">
              {finalWinner === "Draw"
                ? "It's a tie!"
                : `${finalWinner} wins with ${Math.max(gameState.player1Score, gameState.player2Score)} victories!`}
            </p>
            <Button
              onClick={handleReset}
              className="bg-yellow-500 hover:bg-yellow-600 dark:bg-yellow-600 dark:hover:bg-yellow-700"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Play Again
            </Button>
          </div>
        )}

        {/* Game Board */}
        {!isGameComplete && (
          <>
            <div className="grid gap-6 md:grid-cols-2">
              <PlayerCard
                playerName="Player 1"
                playerNumber={1}
                monster={currentRoundState.player1Monster}
                hasDrawn={currentRoundState.player1Drawn}
                onDraw={() => handleDrawMonster(1)}
                isWinner={currentRoundWinner === "player1"}
                isDraw={currentRoundWinner === "draw"}
                disabled={isGameComplete}
              />
              <PlayerCard
                playerName="Player 2"
                playerNumber={2}
                monster={currentRoundState.player2Monster}
                hasDrawn={currentRoundState.player2Drawn}
                onDraw={() => handleDrawMonster(2)}
                isWinner={currentRoundWinner === "player2"}
                isDraw={currentRoundWinner === "draw"}
                disabled={isGameComplete}
              />
            </div>

            {/* Next Round Button */}
            {canProceedToNextRound && (
              <div className="flex justify-center">
                <Button
                  onClick={handleNextRound}
                  className="bg-green-600 px-8 py-3 text-lg hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
                >
                  <ArrowRight className="mr-2 h-5 w-5" />
                  {gameState.currentRound < TOTAL_ROUNDS ? "Next Round" : "Finish Game"}
                </Button>
              </div>
            )}
          </>
        )}

        {/* Round History */}
        {gameState.rounds.length > 0 && (
          <div className="rounded-lg bg-black/30 p-4 backdrop-blur-sm">
            <h3 className="mb-3 text-lg font-semibold text-white">Round History</h3>
            <div className="space-y-2">
              {gameState.rounds.map((round) => (
                <div
                  key={round.round}
                  className="flex items-center justify-between rounded bg-white/10 p-2 text-sm text-white"
                >
                  <span>Round {round.round}</span>
                  <span className="font-semibold">
                    {round.player1Monster?.name} ({round.player1Monster?.powerLevel}) vs{" "}
                    {round.player2Monster?.name} ({round.player2Monster?.powerLevel})
                  </span>
                  <span className="font-bold">
                    {round.winner === "player1"
                      ? "Player 1 Wins"
                      : round.winner === "player2"
                        ? "Player 2 Wins"
                        : "Draw"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

