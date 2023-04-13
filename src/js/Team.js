export default class Team {
  constructor(team) {
    this.team = [team];
    [Symbol.iterator] = [][Symbol.iterator];
  }
}
