//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drinkChoice = document.querySelector('input').value
    //Replace all spaces with a single space using regex, trim extra spaces
    drinkChoice = drinkChoice.trim().replace(/\s+/g , " ")
    baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkChoice
    //Create URL object
    let url = new URL(baseUrl)
    console.log("The search parameter is " + url.search)
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            if(!data || data.length <= 0){
                throw new Error("no data received")
            }
            console.log(data.drinks)
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions



        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

/* TODO:
 *       mispellings
 *       a caroussel of whiskey  drinks. automatically rotating
 *
 *
 */
