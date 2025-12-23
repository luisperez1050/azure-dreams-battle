export interface Monster {
  id: string;
  name: string;
  powerLevel: number;
  imageUrl: string;
  description: string;
  rank: "E" | "D" | "C" | "B" | "A" | "S";
}

export interface RoundResult {
  round: number;
  player1Monster: Monster | null;
  player2Monster: Monster | null;
  winner: "player1" | "player2" | "draw" | null;
}

export interface GameState {
  currentRound: number;
  rounds: RoundResult[];
  player1Score: number;
  player2Score: number;
  gameComplete: boolean;
}

