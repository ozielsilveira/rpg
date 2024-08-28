export abstract class Character {
  constructor(
    public name: string,
    public health: number,
    public mana: number,
    public strength: number,
    public intelligence: number,
    public dexterity: number,
    public constitution: number,
    public wisdom: number,
    public charisma: number
  ) {}

  abstract attack(): string;
  abstract defend(): string;
  abstract specialAbility(): string;

  atacar(target: Character): void {
    const damage = this.calculateDamage();
    target.receberDano(damage);
    console.log(`${this.name} atacou ${target.name} causando ${damage} de dano.`);
  }

  defender(): void {
    const defenseBonus = this.calculateDefenseBonus();
    this.health += defenseBonus;
    console.log(`${this.name} se defendeu e recuperou ${defenseBonus} de saúde.`);
  }

  receberDano(damage: number): void {
    this.health -= damage;
    if (this.health < 0) this.health = 0;
    console.log(`${this.name} recebeu ${damage} de dano. Saúde atual: ${this.health}`);
  }

  protected abstract calculateDamage(): number;
  protected abstract calculateDefenseBonus(): number;
}
