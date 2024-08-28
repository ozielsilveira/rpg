import { Level } from './Level';
import { Mage } from '../characters/Mage';
import { Character } from '../characters/Character';

export class MageFactory implements Level {
  createNovice(name: string): Character {
    return new Mage(name, 60, 100, 20, 70, 40, 30, 60, 50);
  }

  createIntermediate(name: string): Character {
    return new Mage(name, 80, 120, 30, 90, 50, 40, 80, 60);
  }

  createExpert(name: string): Character {
    return new Mage(name, 100, 150, 40, 120, 60, 50, 100, 70);
  }
}
