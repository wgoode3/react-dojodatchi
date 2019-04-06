function randInt(max, min){
    return ((max-min+1) * Math.random() >> 0) + min;
}

class Dojodatchi {

    constructor() {
        this.happiness = 20;
        this.fullness = 20;
        this.energy = 50;
        this.meals = 3;
        this.image = "start.png";
        this.message = "You encounter a dojodatchi!";
    }

    feed() {
        if(this.meals === 0){
            this.message = "You are out of meals!";
            this.image = "start.png";
        } else if(Math.random() < 0.25){
            this.meals--;
            this.message = "Your dojodatchi didn't enjoy the meal!";
            this.image = "badfood.png";
        } else {
            this.meals--;
            this.fullness += randInt(10, 5);
            this.message = "Your dojodatchi enjoyed the meal!";
            this.image = "goodfood.png";
        }
        return this._check();
    }

    play() {
        this.energy -= 5;
        if(Math.random() < 0.25) {
            this.message = "Your dojodatchi didn't enjoy playing!";
            this.image = "badplay.png";
        } else {
            this.happiness += randInt(10, 5);
            this.message = "Your dojodatchi enjoyed playing!";
            this.image = "goodplay.png";
        }
        return this._check();
    }

    work() {
        this.energy -= 5;
        this.meals += randInt(3, 1);
        this.message = "Your dojodatchi went to work!";
        this.image = "work.png";
        return this._check();
    }

    sleep() {
        this.energy += 15;
        this.fullness -= 5;
        this.happiness -= 5;
        this.message = "Your dojodatchi went to sleep!";
        this.image = "sleep.png";
        return this._check();
    }

    _check(){
        if(this.happiness > 99 && this.energy > 99 && this.fullness > 99) {
            this.message = "Your win! Your dojodatchi loves you forever!";
            this.image = "win.png";
        } else if(this.fullness < 0) {
            this.message = "Your dojodatchi died from starvation!";
            this.image = "gameover.png";
        } else if(this.happiness < 0) {
            this.message = "Your dojodatchi died from boredom!";
            this.image = "gameover.png";
        } else if(this.energy < 0) {
            this.message = "Your dojodatchi died from exhaustion!";
            this.image = "gameover.png";
        }
        return this;
    }

}

export default Dojodatchi;