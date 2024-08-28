import { CharacterLevel } from './enums/CharacterLevel';
import { CharacterFactoryManager } from './factories/CharacterFactoryManager';
import { CharacterType } from './enums/CharacterType';

function main() {
  console.log("Bem-vindo ao Simulador de Batalhas!");

  // Simulação 1: Guerreiro Expert vs Mago Intermediário
  console.log("\n--- Simulação 1 ---");
  CharacterFactoryManager.simulateBattle(
    CharacterType.WARRIOR, CharacterLevel.EXPERT, "Thor",
    CharacterType.MAGE, CharacterLevel.INTERMEDIATE, "Merlin"
  );

  // Simulação 2: Arqueiro Novato vs Mago Expert
  console.log("\n--- Simulação 2 ---");
  CharacterFactoryManager.simulateBattle(
    CharacterType.ARCHER, CharacterLevel.NOVICE, "Legolas",
    CharacterType.MAGE, CharacterLevel.EXPERT, "Gandalf"
  );

  // Simulação 3: Guerreiro Intermediário vs Arqueiro Expert
  console.log("\n--- Simulação 3 ---");
  CharacterFactoryManager.simulateBattle(
    CharacterType.WARRIOR, CharacterLevel.INTERMEDIATE, "Aragorn",
    CharacterType.ARCHER, CharacterLevel.EXPERT, "Hawkeye"
  );

  // Demonstração de criação de personagens individuais
  console.log("\n--- Personagens Individuais ---");
  const novatoGuerreiro = CharacterFactoryManager.createCharacter(CharacterType.WARRIOR, CharacterLevel.NOVICE, "Recruta");
  console.log(novatoGuerreiro.attack());
  console.log(novatoGuerreiro.defend());
  console.log(novatoGuerreiro.specialAbility());

  const experienteMago = CharacterFactoryManager.createCharacter(CharacterType.MAGE, CharacterLevel.EXPERT, "Arquimago");
  console.log(experienteMago.attack());
  console.log(experienteMago.defend());
  console.log(experienteMago.specialAbility());
}

main();
