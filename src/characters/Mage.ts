// src/characters/Mage.ts
import { Character } from './Character';

export class Mage extends Character {
  attack(): string {
    return `${this.name} lança uma bola de fogo! Dano: ${this.intelligence * 1.8}`;
  }

  defend(): string {
    return `${this.name} usa um escudo mágico! Absorção: ${this.wisdom * 1.2}`;
  }

  specialAbility(): string {
    return `${this.name} canaliza energia arcana! Recuperação de mana: ${this.intelligence * 0.5}`;
  }

  protected calculateDamage(): number {
    return Math.floor(this.intelligence * 1.8);
  }

  protected calculateDefenseBonus(): number {
    return Math.floor(this.wisdom * 1.2);
  }
}
