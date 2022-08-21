
class Human {
 constructor(weapon) {
  this.weapon = weapon;
  this.health = 100;
 }
 receiveDamage() {
  this.health = this.health - 10;
 }
}
class Wizard extends Human {
 receiveDamage() {
  this.health = this.health - 5;
 }
}
var human = new Human("ax");
human.receiveDamage();
console.log(human.health);
var wizard = new Wizard("staff");
wizard.receiveDamage();
console.log(wizard.health);