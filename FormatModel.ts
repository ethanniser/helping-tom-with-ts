import { NumericScoreSystem, ScoreSystem } from "./ScoreSystem";

export type RoundOptionsModel<TScoring extends ScoreSystem> = {
  name: string;
} & (TScoring extends NumericScoreSystem ? { scoreToWin: number } : Record<never, never>);

export type AnonBracketOptionsModel<TScoring extends ScoreSystem> = {
  type: "anon_bracket";
  rounds: RoundOptionsModel<TScoring>[];
};

export type NamedBracketOptionsModel<TScoring extends ScoreSystem> = {
  type: "named_bracket";
  rounds: RoundOptionsModel<TScoring>[];
};

export type BracketOptionsModel<TScoring extends ScoreSystem> =
  | AnonBracketOptionsModel<TScoring>
  | NamedBracketOptionsModel<TScoring>;

export type SingleElimOptionsModel<TScoring extends ScoreSystem> = {
  type: "single_elimination";
  scoring: TScoring;
  brackets: [AnonBracketOptionsModel<TScoring>];
};

export type DoubleElimOptionsModel<TScoring extends ScoreSystem> = {
  type: "double_elimination";
  scoring: TScoring;
  brackets: [NamedBracketOptionsModel<TScoring>, NamedBracketOptionsModel<TScoring>];
};

export type RoundRobinOptionsModel<TScoring extends ScoreSystem> = {
  type: "round_robin";
  scoring: TScoring;
  pointsPerWin: number;
  pointsPerLoss: number;
  pointsPerTie: number;
};

export type BracketedFormatOptionsModel<TScoring extends ScoreSystem> =
  | SingleElimOptionsModel<TScoring>
  | DoubleElimOptionsModel<TScoring>;

export type FormatOptionsModel<TScoring extends ScoreSystem> =
  | SingleElimOptionsModel<TScoring>
  | DoubleElimOptionsModel<TScoring>
  | RoundRobinOptionsModel<TScoring>;

export type NumericFormatOptionsModel = FormatOptionsModel<NumericScoreSystem>;
export type AnnotatedFormatOptionsModel = FormatOptionsModel<ScoreSystem>;

export type RoundModel<TScoring extends ScoreSystem> = {
  idx: number;
  bracketID: string;
  name: string;
} & (TScoring extends NumericScoreSystem ? { scoreToWin: number } : Record<never, never>);

export type AnonBracketModel<TScoring extends ScoreSystem> = {
  type: "anon_bracket";
  id: string;
  rounds: RoundModel<TScoring>[];
};

export type NamedBracketModel<TScoring extends ScoreSystem> = {
  type: "named_bracket";
  name: string;
  id: string;
  rounds: RoundModel<TScoring>[];
};

export type BracketModel<TScoring extends ScoreSystem = ScoreSystem> =
  | AnonBracketModel<TScoring>
  | NamedBracketModel<TScoring>;

export type SingleElimModel<TScoring extends ScoreSystem> = {
  type: "single_elimination";
  scoring: TScoring;
  brackets: [AnonBracketModel<TScoring>];
};

export type DoubleElimModel<TScoring extends ScoreSystem> = {
  type: "double_elimination";
  scoring: TScoring;
  brackets: [NamedBracketModel<TScoring>, NamedBracketModel<TScoring>];
};

export type RoundRobinModel<TScoring extends ScoreSystem> = {
  type: "round_robin";
  scoring: TScoring;
  pointsPerWin: number;
  pointsPerLoss: number;
  pointsPerTie: number;
};

export type BracketedFormatModel<TScoring extends ScoreSystem> =
  | SingleElimModel<TScoring>
  | DoubleElimModel<TScoring>;

export type FormatModel<TScoring extends ScoreSystem> =
  | SingleElimModel<TScoring>
  | DoubleElimModel<TScoring>
  | RoundRobinModel<TScoring>;

export type NumericFormatModel = FormatModel<NumericScoreSystem>;
export type AnnotatedFormatModel = FormatModel<ScoreSystem>;

export type FormatType = FormatModel<ScoreSystem>["type"];

export function isNumeric(format: FormatModel<ScoreSystem>): format is NumericFormatModel {
  return format.scoring.type === "numeric";
}

export function isAnnotated(format: FormatModel<ScoreSystem>): format is AnnotatedFormatModel {
  return format.scoring.type === "annotated";
}

export function isSingleElim<T extends ScoreSystem>(
  format: FormatModel<T>
): format is SingleElimModel<T> {
  return format.type === "single_elimination";
}

export function isDoubleElim<T extends ScoreSystem>(
  format: FormatModel<T>
): format is DoubleElimModel<T> {
  return format.type === "double_elimination";
}

export function isBracketed<T extends ScoreSystem>(
  format: FormatModel<T>
): format is BracketedFormatModel<T> {
  return isSingleElim(format) || isDoubleElim(format);
}

export function isRoundRobin<T extends ScoreSystem>(
  format: FormatModel<T>
): format is RoundRobinModel<T> {
  return format.type === "round_robin";
}
