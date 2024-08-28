import { Level } from './Level';
import { Warrior } from '../characters/Warrior';
import { Character } from '../characters/Character';

export class WarriorFactory implements Level {
  createNovice(name: string): Character {
    return new Warrior(name, 100, 30, 60, 30, 40, 50, 30, 40);
  }

  createIntermediate(name: string): Character {
    return new Warrior(name, 120, 50, 80, 40, 60, 70, 50, 55);
  }

  createExpert(name: string): Character {
    return new Warrior(name, 150, 70, 100, 50, 80, 90, 70, 70);
  }
}
