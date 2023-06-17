import { ScoreSystem, NumericScoreSystem } from "./scoreSystem";

export type Bracket = AnonBracket | NamedBracket;

interface BaseBracket {
  type: "anon_bracket" | "named_bracket";
  id: string;
  rounds: AnnotatedRound[] | NumericRound[];
  userOptions: AnnotatedRoundOptions[] | NumericRoundOptions[];
}

export interface AnonBracket extends BaseBracket {
  type: "anon_bracket";
}

export interface NamedBracket extends BaseBracket {
  type: "named_bracket";
  name: string;
}

export type Round = AnnotatedRound | NumericRound;

export type AnnotatedRound = {
  scoreSystem: "annotated";
  idx: number;
  bracketID: string;
  name: string;
};

export type NumericRound = {
  scoreSystem: "numeric";
  idx: number;
  bracketID: string;
  name: string;
  scoreToWin: number;
};

export type RoundOptions = AnnotatedRoundOptions | NumericRoundOptions;

export type AnnotatedRoundOptions = {
  scoreSystem: "annotated";
  name: string;
};

export type NumericRoundOptions = {
  scoreSystem: "numeric";
  name: string;
  scoreToWin: number;
};
