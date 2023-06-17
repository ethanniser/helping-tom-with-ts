import { Format } from "./format";
import { Game } from "./game";
import { NumericScoreSystem, ScoreSystem } from "./scoreSystem";

type TournamentFields = {};

export type Tournament<TScoring extends ScoreSystem> = TournamentFields & {
  format: Format<TScoring>;
  games: Game<TScoring>[];
  scoreSystem: TScoring extends NumericScoreSystem ? "numeric" : "annotated";
};
