import { AnonBracket, NamedBracket } from "./bracket";
import { ScoreSystem } from "./scoreSystem";

export type Format = SingleElim | DoubleElim | RoundRobin;

interface BaseFormat {
  type: "single_elimination" | "double_elimination" | "round_robin";
  scoring: ScoreSystem;
}

interface BaseElimFormat extends BaseFormat {
  brackets: (AnonBracket | NamedBracket)[];
}

interface SingleElim extends BaseElimFormat {
  type: "single_elimination";
  brackets: [AnonBracket];
}

interface DoubleElim extends BaseElimFormat {
  type: "double_elimination";
  brackets: [NamedBracket, NamedBracket];
}

interface RoundRobin extends BaseFormat {
  type: "round_robin";
  pointsPerWin: number;
  pointsPerLoss: number;
  pointsPerTie: number;
}
