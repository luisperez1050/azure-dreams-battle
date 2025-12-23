import { Monster } from "@/app/types";
import { cn } from "@/lib/utils";
import MonsterImage from "./MonsterImage";

interface MonsterCardProps {
  monster: Monster | null;
  isWinner?: boolean;
  isDraw?: boolean;
}

const rankColors = {
  E: "bg-gray-500",
  D: "bg-green-500",
  C: "bg-blue-500",
  B: "bg-purple-500",
  A: "bg-orange-500",
  S: "bg-red-500",
};

export default function MonsterCard({ monster, isWinner, isDraw }: MonsterCardProps) {
  if (!monster) {
    return (
      <div className="flex h-64 w-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
        <p className="text-sm text-gray-500 dark:text-gray-400">No monster drawn</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative flex h-64 w-full flex-col items-center justify-center rounded-lg border-2 bg-gradient-to-br p-4 transition-all",
        isWinner && "border-yellow-400 shadow-lg shadow-yellow-400/50 ring-2 ring-yellow-400",
        isDraw && "border-orange-400 shadow-lg shadow-orange-400/50",
        !isWinner && !isDraw && "border-gray-300 dark:border-gray-700",
        rankColors[monster.rank]
      )}
    >
      {isWinner && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
          WINNER
        </div>
      )}
      {isDraw && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-orange-400 px-3 py-1 text-xs font-bold text-black">
          DRAW
        </div>
      )}
      
      <div className="relative mb-2 h-32 w-32 flex-shrink-0">
        <MonsterImage monster={monster} />
      </div>
      
      <div className="text-center">
        <h3 className="text-lg font-bold text-white drop-shadow-lg">{monster.name}</h3>
        <div className="mt-1 flex items-center justify-center gap-2">
          <span className={cn("rounded-full px-2 py-0.5 text-xs font-bold text-white", rankColors[monster.rank])}>
            Rank {monster.rank}
          </span>
          <span className="text-sm font-semibold text-white drop-shadow">
            Power: {monster.powerLevel}
          </span>
        </div>
        <p className="mt-1 text-xs text-white/90 drop-shadow">{monster.description}</p>
      </div>
    </div>
  );
}

