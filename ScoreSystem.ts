type LossReason = "DQ" | "FF";

type WinReason = "W" | "KO" | "TO" | "JD";

type TieReason = "T";

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

export function scoreIsAnnotatedWin(score: Score): score is WinReason {
  if (typeof score !== "string") return false;

  switch (score) {
    case "W":
      return true;
    case "KO":
      return true;
    case "TO":
      return true;
    case "JD":
      return true;
    default:
      return false;
  }
}

export function scoreIsLossReason(score: Score): score is LossReason {
  if (typeof score !== "string") return false;

  switch (score) {
    case "DQ":
      return true;
    case "FF":
      return true;
    default:
      return false;
  }
}

export function scoreIsTie(score: Score): score is TieReason {
  return score === "T";
}
