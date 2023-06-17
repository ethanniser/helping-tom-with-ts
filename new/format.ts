import { AnonBracket } from "./bracket";
import { ScoreSystem } from "./scoreSystem";

export type Format<TScoring extends ScoreSystem> =
  | SingleElim<TScoring>
  | DoubleElim<TScoring>
  | RoundRobin<TScoring>;
interface BaseFormat<TScoring extends ScoreSystem> {
  type: "single_elimination" | "double_elimination" | "round_robin";
  scoring: TScoring;
}
interface SingleElim<TScoring extends ScoreSystem>
  extends BaseFormat<TScoring> {
  type: "single_elimination";
  bracket: AnonBracket<TScoring>;
}
