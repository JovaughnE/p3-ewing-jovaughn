class Body { // create a class for the body
    constructor(bodyContent) {
        this.bodyContent = bodyContent;
        this.option = option;
        this.recipeTitle = recipeTitle;
        this.ingredients = ingredients;
		this.meal_button = meal_button;
    }
}

/*const option = ["burger, tacos, sushi, wrap, nacho"];
option.sort(); */

export const body = new Body('Try out a different meal, click below to see what else is out there!'); //export the new class body as a variable


button.addEventListener('click', () => {
	fetch('https://www.themealdb.com/api/json/v1/1/random.php')
		.then(res => res.json())
		.then(res => {
		createMeal(res.meals[0]);
	});
});

const button = document.getElementById('btn');
const meal_container = document.getElementById('menu_item');


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
/*	
	const newInnerHTML = `
		<div class="row">
			<div class="columns five">
				<img src="${meal.strMealThumb}" alt="Meal Image">
				${meal.strCategory ? `<p><strong>Category:</strong> ${meal.strCategory}</p>` : ''}
				${meal.strArea ? `<p><strong>Area:</strong> ${meal.strArea}</p>` : ''}
				${meal.strTags ? `<p><strong>Tags:</strong> ${meal.strTags.split(',').join(', ')}</p>` : ''}
				<h5>Ingredients:</h5>
				<ul>
					${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
				</ul>
			</div>
			<div class="columns seven">
				<h4>${meal.strMeal}</h4>
				<p>${meal.strInstructions}</p>
			</div>
		</div>
		${meal.strYoutube ? `
		<div class="row">
			<h5>Video Recipe</h5>
			<div class="videoWrapper">
				<iframe width="420" height="315"
				src="https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}">
				</iframe>
			</div>
		</div>` : ''}
	`;
	
	meal_container.innerHTML = newInnerHTML; */
}