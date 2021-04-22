class Body { // create a class for the body
    constructor(bodyContent) {
        this.bodyContent = bodyContent;
        this.option = option;
        this.recipeTitle = recipeTitle;
        this.ingredients = ingredients;
    }
}

const option = ["burger, tacos, sushi, wrap, nacho"];
option.sort();

const createMeal = (meal) => {
	const ingredients = [];
	// Get all ingredients from the object. Up to 20
	for(let i=1; i<=20; i++) {
		if(meal[`strIngredient${i}`]) {
			ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`)
		} else {
			// Stop if no more ingredients
			break;
		}
	}
}

export const body = new Body('Try out a different meal, click below to see what else is out there!'); //export the new class body as a variable
