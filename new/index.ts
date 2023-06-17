import { Format } from "./format";
import { Game } from "./game";
import { ScoreSystem } from "./scoreSystem";

type TournamentFields = {};
export type Tournament<TScoring extends ScoreSystem> = TournamentFields & {
  format: Format<TScoring>;
  games: Game<TScoring>[];
};
