class Ninja {
    constructor (name , health , speed , strength){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;

    }
    sayName(){
        console.log(this.name);
    }

    showStats(){
        console.log(this.name ,this.strength , this.speed,this.health );
    }
    drinkSake(){
        console.log(this.health+=10);
    }


}
var x = new Ninja("Mahmoud",90);
x.sayName();
x.showStats();
x.drinkSake();