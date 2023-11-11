import character from './domain.js';

export default class Game {
  start() {
    console.log('game started');
    console.log(character);
  }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}