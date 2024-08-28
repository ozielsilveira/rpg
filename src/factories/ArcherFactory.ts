import { Level } from './Level';
import { Archer } from '../characters/Archer';
import { Character } from '../characters/Character';

export class ArcherFactory implements Level {
  createNovice(name: string): Character {
    return new Archer(name, 80, 50, 40, 50, 70, 45, 55, 60);
  }

  createIntermediate(name: string): Character {
    return new Archer(name, 100, 70, 50, 60, 90, 55, 65, 70);
  }

  createExpert(name: string): Character {
    return new Archer(name, 120, 90, 60, 70, 110, 65, 75, 80);
  }
}
