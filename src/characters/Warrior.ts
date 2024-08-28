import { Character } from './Character';

export class Warrior extends Character {
  attack(): string {
    return `${this.name} ataca com uma espada! Dano: ${this.strength * 1.5}`;
  }

  defend(): string {
    return `${this.name} defende com um escudo! Redução de dano: ${this.constitution * 0.8}`;
  }

  specialAbility(): string {
    return `${this.name} usa Fúria de Batalha! Aumento de força: ${this.strength * 0.3}`;
  }

  protected calculateDamage(): number {
    return Math.floor(this.strength * 1.5);
  }

  protected calculateDefenseBonus(): number {
    return Math.floor(this.constitution * 0.8);
  }
}
