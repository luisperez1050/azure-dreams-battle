"use client";

import { Monster } from "@/app/types";
import MonsterCard from "./MonsterCard";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Dice6 } from "lucide-react";

interface PlayerCardProps {
  playerName: string;
  playerNumber: 1 | 2;
  monster: Monster | null;
  hasDrawn: boolean;
  onDraw: () => void;
  isWinner?: boolean;
  isDraw?: boolean;
  disabled?: boolean;
}

export default function PlayerCard({
  playerName,
  playerNumber,
  monster,
  hasDrawn,
  onDraw,
  isWinner,
  isDraw,
  disabled,
}: PlayerCardProps) {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2
          className={cn(
            "text-2xl font-bold",
            playerNumber === 1 ? "text-blue-600 dark:text-blue-400" : "text-red-600 dark:text-red-400"
          )}
        >
          {playerName}
        </h2>
        {hasDrawn && (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
            Ready
          </span>
        )}
      </div>
      
      <MonsterCard monster={monster} isWinner={isWinner} isDraw={isDraw} />
      
      <Button
        onClick={onDraw}
        disabled={hasDrawn || disabled}
        className={cn(
          "w-full",
          playerNumber === 1
            ? "bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            : "bg-red-600 hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600"
        )}
      >
        <Dice6 className="mr-2 h-4 w-4" />
        {hasDrawn ? "Monster Drawn" : "Draw Monster"}
      </Button>
    </div>
  );
}

