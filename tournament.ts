import { Format } from "./format";
import { Game } from "./game";
import { NumericScoreSystem, ScoreSystem } from "./scoreSystem";

type TournamentFields = {};

export type Tournament = NumericTournament | AnnotatedTournament;

type NumericTournament = TournamentFields & {
  scoreSystem: "numeric";
  format: Format;
  games: Game[];
};

type AnnotatedTournament = TournamentFields & {
  scoreSystem: "annotated";
  format: Format;
  games: Game[];
};
