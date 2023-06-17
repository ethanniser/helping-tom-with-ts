import { ScoreSystem, NumericScoreSystem } from "./scoreSystem";

type Round<TScoring extends ScoreSystem> = {
  idx: number;
  bracketID: string;
  name: string;
} & (TScoring extends NumericScoreSystem
  ? { scoreToWin: number }
  : Record<never, never>);
interface BaseBracket<TScoring extends ScoreSystem> {
  type: "anon_bracket" | "named_bracket";
  id: string;
  rounds: Round<TScoring>[];
  userOptions: RoundOptions<TScoring>[];
}
type RoundOptions<TScoring extends ScoreSystem> = {
  name: string;
} & (TScoring extends NumericScoreSystem
  ? { scoreToWin: number }
  : Record<never, never>);
export interface AnonBracket<TScoring extends ScoreSystem>
  extends BaseBracket<TScoring> {
  type: "anon_bracket";
}
interface NamedBracket<TScoring extends ScoreSystem>
  extends BaseBracket<TScoring> {
  type: "named_bracket";
  name: string;
}
