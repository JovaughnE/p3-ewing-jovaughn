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
            <section class="lunchplate">
                <h1>${header.title}</h1>
                <h2>${body.option}</h2>
                <p>${body.bodyContent}</p>
                <button class="btn" id="get_meal">Next Meal</button>
            </section>
            `
        const template2 = `
            <div class="menu-item">
                <img class="lunchshot" src="./img/item"></img>
                <h3 class="recipe-title">${body.recipeTitle}</h3>
                <p class="ingredients">${body.ingredients}</p>
            </div>
            `; // creating a template string
  
        document.body.innerHTML = template; // method to render the template to the screen
        document.body.innerHTML = template2; // method to render the template to the screen
        document.getElementsByClassName(".btn");   // Create a <button> element
        btn.innerHTML = "Next Meal";        // Insert text
        document.body.appendChild(btn);     // Append <button> to <body>

    }
}

/*<div class="container">
	<div class="row text-center">
		<h3>
			Feeling hungry?
		</h3>
		<h5>Get a random meal by clicking below</h5>
		<button class="button-primary" id="get_meal">Get Meal</button>

	</div>
	<div id="meal" class="row meal"></div>
</div> */

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

        // Saving this for later if I need it
              const navigationTemplate = `
            <nav id="navbar">
                <ul id="navcontent">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="contact.html">ContactUs</a></li>
                </ul>
            </nav>
        `

export { App };*/