export default class Team {
  constructor() {
    this.team = new Set();
  }

  *[Symbol.iterator]() {
    let index = 0;
    const entries = Object.entries(this.team);
    while (index <= entries.length) {
      yield entries[index];
      index += 1;
    }
  }

  add(member) {
    if (this.team.has(member)) {
      throw new Error('Такой персонаж уже есть в команде!');
    }
    return this.team.add(member);
  }

  addAll(...members) {
    members.forEach((member) => this.team.add(member));
    return this.team;
  }
}
