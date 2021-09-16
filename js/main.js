//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){
    let drinkChoice = document.querySelector('input').value
    //Check and modify the input to make sure it'll work
    //Find all spaces and replace them with a single space using regex
    let spaceRegExp = /\s+/g;
    let oneSpace = drinkChoice.replace(spaceRegExp, " ")
    //Remove leading space and trailing space using trim() method
    drinkChoice = oneSpace.trim()
    baseUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drinkChoice
    let url = new URL(baseUrl)

    console.log("The base url is " + baseUrl)
    //url.search = drinkChoice
    console.log("The search parameter is " + url.search)
    console.log(url)
    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data.drinks[0])
            document.querySelector('h2').innerText = data.drinks[0].strDrink
            document.querySelector('img').src = data.drinks[0].strDrinkThumb
            document.querySelector('h3').innerText = data.drinks[0].strInstructions
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}

/* TODO: Handle drink names with a space
 *       mispellings
 *       a caroussel of whiskey  drinks. automatically rotating
 *
 *
 */
