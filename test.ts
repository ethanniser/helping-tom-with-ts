import { AnonBracket, Bracket } from "./bracket";
import { AnnotatedGame, Game, NumericGame } from "./game";
import {
  AnnotatedScoreSystem,
  NumericScoreSystem,
  ScoreSystem,
} from "./scoreSystem";

function differentLogic(bracket: Bracket, games: Game[]) {
  let game = games[0];

  if (game.scoreSystem === "numeric") {
    // could validate every game, but if you know theyre all the same you can just cast
    doThingNumeric(bracket, games as NumericGame[]);
  } else {
    doThingAnnotated(bracket, games as AnnotatedGame[]);
  }
}

function doThingNumeric(bracket: Bracket, games: NumericGame[]) {
  for (let i = 0; i < games.length; i++) {
    const game = games[i];
    const round = bracket.rounds[game.round];

    if (round.scoreSystem !== "numeric") {
      throw new Error("round and game score systems dont match");
    }

    // yay!
    game.scoreToWin = round.scoreToWin;
  }
}

function doThingAnnotated(bracket: Bracket, games: AnnotatedGame[]) {
  // same pattern as above
}

function sameLogicAlways(bracket: Bracket, games: Game[]) {
  // you have access to all of the shared fields in the union
  bracket.id;
  game.endTime;
}

const game: Game = {
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
  scoreSystem: "numeric",
};

const bracket: AnonBracket = {
  type: "anon_bracket",
  id: "123456",
  rounds: [
    {
      idx: 0,
      bracketID: "123456",
      name: "Round 1",
      scoreToWin: 150,
      scoreSystem: "numeric",
    },
    {
      idx: 1,
      bracketID: "123456",
      name: "Round 2",
      scoreToWin: 200,
      scoreSystem: "numeric",
    },
    {
      idx: 2,
      bracketID: "123456",
      name: "Final Round",
      scoreToWin: 300,
      scoreSystem: "numeric",
    },
  ],
  userOptions: [
    {
      name: "Option 1",
      scoreToWin: 150,
      scoreSystem: "numeric",
    },
    {
      name: "Option 2",
      scoreToWin: 200,
      scoreSystem: "numeric",
    },
    {
      name: "Option 3",
      scoreToWin: 300,
      scoreSystem: "numeric",
    },
  ],
};

sameLogicAlways(bracket, [game]);
differentLogic(bracket, [game]);
