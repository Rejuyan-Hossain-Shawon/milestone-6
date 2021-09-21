document.getElementById("search-input")
    .addEventListener("keyup", function (event) {
        // event.preventDefault();
        if (event.keyCode === 13) {
            document.getElementById("button-addon2").click();
        }
    });




const search = () => {
    const search = document.getElementById("search-input");
    const searchText = search.value;
    search.value = "";
    if (searchText == "") {
        alert("write something");
        return
    }
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`

    fetch(url)
        .then(res => res.json())
        .then(data => displaySearch(data.meals))
    // console.log(url);
}

const displaySearch = (results) => {
    if (results == null) {
        alert("No result Found");
        return
    }
    let searchResults = document.getElementById("search-results");
    searchResults.innerHTML = "";


    results.forEach(result => {

        const div = document.createElement("div");
        div.classList.add("col");
        div.innerHTML = ` <div class="card" onclick="loadMealDetails(${result.idMeal})">
        <img src="${result.strMealThumb}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <h5 class="card-title">${result.strMeal}</h5>
          <p class="card-text">${result.strInstructions.slice(0, 150)}</p>
        </div>
        </div>`;
        searchResults.appendChild(div);

    })



};

const loadMealDetails = (mealId) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

    fetch(url)
        .then(res => res.json())
        .then(data => displaySingleMealDetails(data.meals[0]))

}

const displaySingleMealDetails = (meal) => {
    console.log(meal);
    const singleDetails = document.getElementById("single-details");
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 100)}</p>
        <a href="${meal.strYoutube}" target="_blank" class="btn btn-primary">Go Youtube</a>
    </div>`;
    singleDetails.appendChild(div);


}