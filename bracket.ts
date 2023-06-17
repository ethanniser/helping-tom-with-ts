import { ScoreSystem, NumericScoreSystem } from "./scoreSystem";

type BaseBracket<TScoring extends ScoreSystem> = {
  type: "anon_bracket" | "named_bracket";
  id: string;
  rounds: Round<TScoring>[];
  userOptions: RoundOptions<TScoring>[];
};

export type AnonBracket<TScoring extends ScoreSystem> =
  BaseBracket<TScoring> & {
    type: "anon_bracket";
  };

export type NamedBracket<TScoring extends ScoreSystem> =
  BaseBracket<TScoring> & {
    type: "named_bracket";
    name: string;
  };

type Round<TScoring extends ScoreSystem> = {
  idx: number;
  bracketID: string;
  name: string;
} & (TScoring extends NumericScoreSystem
  ? { scoreToWin: number }
  : Record<never, never>);

type RoundOptions<TScoring extends ScoreSystem> = {
  name: string;
} & (TScoring extends NumericScoreSystem
  ? { scoreToWin: number }
  : Record<never, never>);
