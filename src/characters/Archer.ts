// src/characters/Archer.ts
import { Character } from './Character';

export class Archer extends Character {
  attack(): string {
    return `${this.name} dispara uma flecha! Dano: ${this.dexterity * 1.6}`;
  }

  defend(): string {
    return `${this.name} desvia rapidamente! Chance de esquiva: ${this.dexterity * 0.5}%`;
  }

  specialAbility(): string {
    return `${this.name} usa Tiro Preciso! Dano crítico: ${this.dexterity * 2}`;
  }

  protected calculateDamage(): number {
    return Math.floor(this.dexterity * 1.6);
  }

  protected calculateDefenseBonus(): number {
    return Math.floor(this.dexterity * 0.5);
  }
}
