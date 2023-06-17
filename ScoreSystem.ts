const lossReasons = ["DQ", "FF"] as const;
export type LossReason = typeof lossReasons[number];

const winReasons = ["W", "KO", "TO", "JD"] as const;
export type WinReason = typeof winReasons[number];

const tieReasons = ["T"] as const;
export type TieReason = typeof tieReasons[number];

export type AnnotatedScore = WinReason | LossReason | TieReason;
export type NumericScore = number | LossReason;
export type Score = AnnotatedScore | NumericScore;

export type NumericScoreSystem = {
  type: "numeric";
  defaultScoreToWin: number;
};

export type AnnotatedScoreSystem = {
  type: "annotated";
  allowedWinReasons: WinReason[];
};

export type ScoreSystem = NumericScoreSystem | AnnotatedScoreSystem;
export type ScoreSystemType = ScoreSystem["type"];

export function scoreIsAnnotatedWin(score: Score): boolean {
  return typeof score == "string" && (winReasons as readonly string[]).includes(score);
}

export function scoreIsLoss(score: Score): boolean {
  return typeof score == "string" && (lossReasons as readonly string[]).includes(score);
}

export function scoreIsTie(score: Score): score is TieReason {
  return typeof score == "string" && (tieReasons as readonly string[]).includes(score);
}
