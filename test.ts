import { AnonBracket, Bracket } from "./bracket";
import { Game } from "./game";
import {
  AnnotatedScoreSystem,
  NumericScoreSystem,
  ScoreSystem,
} from "./scoreSystem";

function differentLogic<TScoring extends ScoreSystem>(
  bracket: Bracket<TScoring>,
  games: Game<TScoring>[]
) {
  // how you determine what generic your in depends on the arguments you have, in this case we can use game.scoreToWin

  const game = games[0][""];
}

function doThingNumeric(
  bracket: Bracket<NumericScoreSystem>,
  games: Game<NumericScoreSystem>[]
) {
  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    const round = bracket.rounds[game.round];

    // yay!
    game.scoreToWin = round.scoreToWin;
  }
}

function doThingAnnotated(
  bracket: Bracket<AnnotatedScoreSystem>,
  games: Game<AnnotatedScoreSystem>[]
) {}

function sameLogicAlways<TScoring extends ScoreSystem>(
  bracket: Bracket<TScoring>,
  games: Game<TScoring>[]
) {
  // generic is always inferred

  // you have access to all of the shared fields between the generics
  bracket.id;
  game.endTime;
}

const game: Game<NumericScoreSystem> = {
  id: "123456",
  name: "My Game",
  round: 1,
  slots: [
    {
      gameID: "123456",
      slotIdx: 0,
      playerID: "player1",
      checkInTime: 1623936000,
      waitingTime: 3600,
      prevGameID: null,
      isWinner: true,
      score: 100,
    },
    {
      gameID: "123456",
      slotIdx: 1,
      playerID: "player2",
      checkInTime: 1623936000,
      waitingTime: 3600,
      prevGameID: null,
      isWinner: false,
      score: 80,
    },
  ],
  state: {},
  activeSince: 1623936000,
  availableSince: 1623936000,
  calledSince: null,
  endTime: null,
  nextGameSlotIDs: ["789012"],
  locationID: "345678",
  loserPlacement: null,
  scoreToWin: 150,
};

const bracket: AnonBracket<NumericScoreSystem> = {
  type: "anon_bracket",
  id: "123456",
  rounds: [
    {
      idx: 0,
      bracketID: "123456",
      name: "Round 1",
      scoreToWin: 150,
    },
    {
      idx: 1,
      bracketID: "123456",
      name: "Round 2",
      scoreToWin: 200,
    },
    {
      idx: 2,
      bracketID: "123456",
      name: "Final Round",
      scoreToWin: 300,
    },
  ],
  userOptions: [
    {
      name: "Option 1",
      scoreToWin: 150,
    },
    {
      name: "Option 2",
      scoreToWin: 200,
    },
    {
      name: "Option 3",
      scoreToWin: 300,
    },
  ],
};

sameLogicAlways(bracket, [game]);
