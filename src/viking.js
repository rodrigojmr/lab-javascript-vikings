// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    return this.health > 0
      ? `${this.name} has received ${damage} points of damage`
      : `${this.name} has died in act of combat`;
  }

  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    return this.health > 0
      ? `A Saxon has received ${damage} points of damage`
      : `A Saxon has died in combat`;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {
    // const randomSaxon = this.saxonArmy[
    //   Math.floor(this.saxonArmy.length * Math.random())
    // ];
    // const randomViking = this.vikingArmy[
    //   Math.floor(this.saxonArmy.length * Math.random())
    // ];
    // const result = randomSaxon.receiveDamage(randomViking.strength);
    // if (randomSaxon.health <= 0) {
    //   this.saxonArmy.splice(
    //     this.saxonArmy[(this.saxonArmy.indexOf(randomSaxon), 1)]
    //   );
    // }
    return this.armyAttack(this.vikingArmy, this.saxonArmy);
  }
  saxonAttack() {
    // const randomSaxon = this.saxonArmy[
    //   Math.floor(this.saxonArmy.length * Math.random())
    // ];
    // const randomViking = this.vikingArmy[
    //   Math.floor(this.vikingArmy.length * Math.random())
    // ];
    // const result = randomViking.receiveDamage(randomSaxon.strength);
    // if (randomViking.health <= 0) {
    //   this.vikingArmy.splice(
    //     this.vikingArmy[(this.vikingArmy.indexOf(randomSaxon), 1)]
    //   );
    // }
    return this.armyAttack(this.saxonArmy, this.vikingArmy);
  }

  armyAttack(army, opposingArmy) {
    const unitFromOpposingArmy =
      opposingArmy[Math.floor(opposingArmy.length * Math.random())];
    const unitFromArmy = army[Math.floor(army.length * Math.random())];
    const result = unitFromOpposingArmy.receiveDamage(unitFromArmy.strength);
    if (unitFromOpposingArmy.health <= 0) {
      opposingArmy.splice(opposingArmy.indexOf(unitFromOpposingArmy), 1);
    }
    return result;
  }

  showStatus() {
    if (this.saxonArmy.length && this.vikingArmy.length) {
      return 'Vikings and Saxons are still in the thick of battle.';
    } else if (this.vikingArmy.length) {
      return `Vikings have won the war of the century!`;
    } else {
      return `Saxons have fought for their lives and survived another day...`;
    }
  }
}
