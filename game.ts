import {
  ScoreSystem,
  NumericScoreSystem,
  AnnotatedScore,
  NumericScore,
} from "./scoreSystem";

type GameState = {};
export type Game<TScoring extends ScoreSystem> = {
  id: string;
  name: string;
  round: number;
  slots: GameSlot<TScoring>[];
  state: GameState;
  activeSince: number | null;
  availableSince: number | null;
  calledSince: number | null;
  endTime: number | null;
  nextGameSlotIDs: string[] | null;
  locationID: string | null;
  loserPlacement: number | null;
  scoreSystem: TScoring extends NumericScoreSystem ? "numeric" : "annotated";
} & (TScoring extends NumericScoreSystem
  ? { scoreToWin: number }
  : Record<never, never>);

type GameSlot<TScoring extends ScoreSystem> = {
  gameID: string;
  slotIdx: number;
  playerID: string | null;
  checkInTime: number | null;
  waitingTime: number | null;
  prevGameID: string | null;
  isWinner: boolean;
  score: TScoring extends NumericScoreSystem ? NumericScore : AnnotatedScore;
};
