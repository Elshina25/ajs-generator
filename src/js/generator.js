import Character from './Character';
import Team from './Team';

const zombie = new Character('Зомби', 'Zombie', 60, 4, 20, 30);
const magician = new Character('Маг', 'Magician', 50, 5, 50, 10);
const daemon = new Character('Демон', 'Daemon', 40, 2, 20, 70);
const bowman = new Character('Лучник', 'Bowman', 50, 1, 40, 10);
const undead = new Character('Нежить', 'Undead', 50, 5, 50, 50);

const team = new Team().addAll(zombie, magician, daemon, bowman, undead);
const iterator = team[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
