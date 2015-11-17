// You are working on a video game. Create contructor functions for:
//
// Hero: has name, life points, preferred weapon.
// Heroes can eat (increases life points), punch, attack with weapon (both of which decrease opponents' life points). These methods will be inherited from the Hero's prototype.
//
// Troll: has battle-name, life points, preferred weapon.
// Trolls can eat heroes (increases life points), grunt, bite, attack with weapon (both of which decrease opponents' life points). These methods will be inherited from the Troll's prototype.
//
// When you finish add more complexity!

var Hero = function(name, hp, weapon) {
  this.name = name;
  this.hp = hp;
  this.weapon = weapon;
  this.eat = function(food) {
    this.hp += food.hp;
    console.log("\n", this.name + " eats " + food.name + ", gaining " + food.hp + "HP. Yum!");
  };
  this.punch = meleeAttack;
  this.attack = weaponAttack;
};

var Troll = function(battleName, hp, weapon) {
  this.name = battleName;
  this.hp = hp;
  this.weapon = weapon;
  this.eatHero = function(target, dmg) {
    target.hp -= dmg;
    this.hp += dmg;
    console.log("\n", this.name + " bites " + target.name + ", stealing " + dmg + " of their HP!");
  };
  this.grunt = function() {
    console.log("\n", this.name + " grunts ineffectively. It smells like old cheese.");
  };
  this.bite = meleeAttack;
  this.attack = weaponAttack;
};

var meleeAttack = function(target, dmg) {
  console.log("\n", target.name + " has been hit for " + dmg + " damage!");
  target.hp -= dmg;
};

var weaponAttack = function(target, dmg, weapon) {
  console.log("\n", this.name + " attacks " + target + " with " + this.weapon.name);
  dmg *= this.weapon.multiplier;
  target.hp -= dmg;
  console.log("\n", target.name + " has been hit for " + dmg + " damage!");
  if (target.hp <= 0) {
    console.log("\n", target.name + " has been killed!");
  }
};

var spiderman = new Hero("Peter Parker", 100, { name: "Webs", multiplier: 1.1 });
var batman = new Hero("Bruce Wayne", 10, { name: "Batarang", multiplier: 1.5 });

var urg = new Troll("Urg the Destroyer", 70, { name: "Club", multiplier: 1.2 });
var thurg = new Troll("Thurg, Troll King", 120, { name: "Battle Axe", multiplier: 1.7 });

var damage = Math.floor(Math.random() * 5);

var breakdown = function() {
  console.log("\nTHE BREAKDOWN:\n");
  console.log("SPIDERMAN Name: ", spiderman.name, " HP: ", spiderman.hp, " Weapon: ", spiderman.weapon.name);
  console.log("BATMAN Name: ", batman.name, " HP: ", batman.hp, " Weapon: ", batman.weapon.name);
  console.log("URG Battle Name: ", urg.name, " HP: ", urg.hp, " Weapon: ", urg.weapon.name);
  console.log("THURG Battle Name: ", thurg.name, " HP: ", thurg.hp, " Weapon: ", thurg.weapon.name);
}

breakdown();
urg.bite(spiderman, damage);
breakdown();
thurg.grunt();
breakdown();
spiderman.punch(thurg, damage);
breakdown();
batman.attack(urg, damage);
breakdown();
urg.bite(batman, damage);
breakdown();
batman.eat({ name: "apple", hp: 3 });
breakdown();
urg.bite(spiderman, damage);
breakdown();
thurg.grunt();
breakdown();
spiderman.punch(thurg, damage);
breakdown();
batman.attack(urg, damage);
breakdown();
urg.bite(batman, damage);
breakdown();
batman.eat({ name: "cherry pie", hp: 7 });breakdown();
urg.bite(spiderman, damage);
breakdown();
thurg.grunt();
breakdown();
spiderman.punch(thurg, damage);
breakdown();
batman.attack(urg, damage);
breakdown();
urg.bite(batman, damage);
breakdown();
batman.eat({ name: "whiskey", hp: -3 });breakdown();
urg.bite(spiderman, damage);
breakdown();
thurg.grunt();
breakdown();
spiderman.punch(thurg, damage);
breakdown();
batman.attack(urg, damage);
breakdown();
urg.bite(batman, damage);
breakdown();
batman.eat({ name: "cheese moon", hp: 100 });
breakdown();