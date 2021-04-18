//import the modules in from the module directory

import { header } from './modules/header';
import { body } from './modules/body';

//create an master App class
class App {
    constructor() {
        this.renderTemplate();

    }

    renderTemplate() { //method to run the template
        const template = `   
            <h1>${header.title}</h1>
            <p>${body.bodyContent}</p>
        
        `; // creating a template string

        document.body.innerHTML = template; // method to render the template to the screen
    }
}

//initialize the App class

new App;

/*export default class App {
    constructor(food, meat, side, veg, drink, extra, dressing, condiment, spicy) {
        this.food = food;
        this.meat = meat;
        this.side = side;
        this.veg = veg;
        this.drink = drink;
        this.extra = extra;
        this.dressing = dressing;
        this.condiment = condiment;
        this.spicy = spicy;
    }
    renderTemplate() {
        const markup = `
        <div class="food">
            <h2 class="food">
                ${food.name}</h2>
            <p class="shortdescrip">
                ${food.description}</p>
            <p class="type">
                ${food.type}</p>
            <p class="cal">
                ${food.cal}</p>
            <p class="howhot">
                ${food.howhot}</p>
            <p class="style">
                ${food.style}</p>
        </div>
        `
        parentElement = document.createElement("body");
        document.body.innerHTML = markup;
}
}

    class food {
        constructor(meat, starch, vegetable, carbohydrate) {
            super(App);
            this.meat = meat;
            this.starch = starch;
            this.vegetable = vegetable;
            this.carbohydrate = carbohydrate;
        }
        class meat extends food {
            constructor (beef, chicken, pork, lamb, seafood, turkey) {
                super(food);
                super(type);
                this.beef = beef;
                this.chicken = chicken;
                this.pork = pork;
                this.lamb = lamb;
                this.seafood = seafood;
                this.turkey = turkey;
            }
        }

export { App };*/