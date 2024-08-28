import { Character } from '../characters/Character';
import { WarriorFactory } from './WarriorFactory';
import { MageFactory } from './MageFactory';
import { ArcherFactory } from './ArcherFactory';
import { CharacterLevel } from '../enums/CharacterLevel';
import { CharacterType } from '../enums/CharacterType';

export class CharacterFactoryManager {
  private static factories = {
    [CharacterType.WARRIOR]: new WarriorFactory(),
    [CharacterType.MAGE]: new MageFactory(),
    [CharacterType.ARCHER]: new ArcherFactory(),
  };

  static createCharacter(type: CharacterType, level: CharacterLevel, name: string): Character {
    const factory = this.factories[type];
    switch (level) {
      case CharacterLevel.NOVICE:
        return factory.createNovice(name);
      case CharacterLevel.INTERMEDIATE:
        return factory.createIntermediate(name);
      case CharacterLevel.EXPERT:
        return factory.createExpert(name);
      default:
        throw new Error('Nível de personagem inválido.');
    }
  }

  static simulateBattle(type1: CharacterType, level1: CharacterLevel, name1: string, type2: CharacterType, level2: CharacterLevel, name2: string): void {
    const character1 = this.createCharacter(type1, level1, name1);
    const character2 = this.createCharacter(type2, level2, name2);

    console.log("Iniciando batalha!");
    console.log(`${character1.name} (${type1} ${level1}) vs ${character2.name} (${type2} ${level2})`);

    // Simula 3 rodadas de batalha
    for (let i = 1; i <= 3; i++) {
      console.log(`\nRodada ${i}:`);
      
      character1.atacar(character2);
      character2.defender();

      character2.atacar(character1);
      character1.defender();
    }

    console.log("\nFim da batalha!");
    console.log(`${character1.name}: Saúde restante = ${character1.health}`);
    console.log(`${character2.name}: Saúde restante = ${character2.health}`);
  }
}
