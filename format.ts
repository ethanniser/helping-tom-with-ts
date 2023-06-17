import { AnonBracket, NamedBracket } from "./bracket";
import { ScoreSystem } from "./scoreSystem";

export type Format<TScoring extends ScoreSystem> =
  | SingleElim<TScoring>
  | DoubleElim<TScoring>
  | RoundRobin<TScoring>;

type BaseFormat<TScoring extends ScoreSystem> = {
  type: "single_elimination" | "double_elimination" | "round_robin";
  scoring: TScoring;
};

type BaseElimFormat<TScoring extends ScoreSystem> = BaseFormat<TScoring> & {
  brackets: (AnonBracket<TScoring> | NamedBracket<TScoring>)[];
};

type SingleElim<TScoring extends ScoreSystem> = BaseElimFormat<TScoring> & {
  type: "single_elimination";
  brackets: [AnonBracket<TScoring>];
};

type DoubleElim<TScoring extends ScoreSystem> = BaseElimFormat<TScoring> & {
  type: "double_elimination";
  brackets: [NamedBracket<TScoring>, NamedBracket<TScoring>];
};

type RoundRobin<TScoring extends ScoreSystem> = BaseFormat<TScoring> & {
  type: "round_robin";
  pointsPerWin: number;
  pointsPerLoss: number;
  pointsPerTie: number;
};
