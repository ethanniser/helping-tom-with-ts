type LossReason = "DQ" | "FF";
type WinReason = "W" | "KO" | "TO" | "JD";
type TieReason = "T";
type AnnotatedScore = WinReason | LossReason | TieReason;
type NumericScore = number | LossReason;
type Score = AnnotatedScore | NumericScore;
type NumericScoreSystem = {
  type: "numeric";
  defaultScoreToWin: number;
};
type AnnotatedScoreSystem = {
  type: "annotated";
  allowedWinReasons: WinReason[];
};
type ScoreSystem = NumericScoreSystem | AnnotatedScoreSystem;

export {
  ScoreSystem,
  NumericScoreSystem,
  AnnotatedScoreSystem,
  NumericScore,
  AnnotatedScore,
};
