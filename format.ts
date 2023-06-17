import { AnonBracket, NamedBracket } from "./bracket";
import { ScoreSystem } from "./scoreSystem";

export type Format<TScoring extends ScoreSystem> =
  | SingleElim<TScoring>
  | DoubleElim<TScoring>
  | RoundRobin<TScoring>;

interface BaseFormat<TScoring extends ScoreSystem> {
  type: "single_elimination" | "double_elimination" | "round_robin";
  scoring: TScoring;
}

interface BaseElimFormat<TScoring extends ScoreSystem>
  extends BaseFormat<TScoring> {
  brackets: (AnonBracket<TScoring> | NamedBracket<TScoring>)[];
}

interface SingleElim<TScoring extends ScoreSystem>
  extends BaseElimFormat<TScoring> {
  type: "single_elimination";
  brackets: [AnonBracket<TScoring>];
}

interface DoubleElim<TScoring extends ScoreSystem>
  extends BaseElimFormat<TScoring> {
  type: "double_elimination";
  brackets: [NamedBracket<TScoring>, NamedBracket<TScoring>];
}

interface RoundRobin<TScoring extends ScoreSystem>
  extends BaseFormat<TScoring> {
  type: "round_robin";
  pointsPerWin: number;
  pointsPerLoss: number;
  pointsPerTie: number;
}
