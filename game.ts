import {
  ScoreSystem,
  NumericScoreSystem,
  AnnotatedScore,
  NumericScore,
} from "./scoreSystem";

type GameState = {};
type BaseGame = {
  id: string;
  name: string;
  round: number;
  state: GameState;
  activeSince: number | null;
  availableSince: number | null;
  calledSince: number | null;
  endTime: number | null;
  nextGameSlotIDs: string[] | null;
  locationID: string | null;
  loserPlacement: number | null;
};

export type AnnotatedGame = {
  scoreSystem: "annotated";
  slots: AnnotatedGameSlot[];
} & BaseGame;

export type NumericGame = {
  scoreSystem: "numeric";
  slots: NumericGameSlot[];
  scoreToWin: number;
} & BaseGame;

export type Game = AnnotatedGame | NumericGame;

type BaseGameSlot = {
  gameID: string;
  slotIdx: number;
  playerID: string | null;
  checkInTime: number | null;
  waitingTime: number | null;
  prevGameID: string | null;
  isWinner: boolean;
};

export type NumericGameSlot = BaseGameSlot & { score: NumericScore };
export type AnnotatedGameSlot = BaseGameSlot & { score: AnnotatedScore };
