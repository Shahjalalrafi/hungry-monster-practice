const searchItem = () => {
    const searchValue = document.getElementById('input').value
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayItem(data.meals))
}

const displayItem = items => {
    const itemContainer = document.getElementById('items')
    items.forEach(item => {
        const itemDiv = document.createElement('div')
        itemDiv.className = 'card col-md-3 '
        const itemInfo = `
            <img onclick="displayDetails(${item.idMeal})" class="card-img img-fluid rounded mb-4" src="${item.strMealThumb}" alt="">
            <h4 class="card-title">${item.strMeal}</h4>
        `
        itemDiv.innerHTML = itemInfo
        itemContainer.appendChild(itemDiv)
    })
}

const displayDetails = id => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => renderDetails(data.meals[0]))
}

const renderDetails = details => {
    const indetails = document.getElementById('in-details')
    const itemDetails = document.createElement('div')
    itemDetails.className = 'col-md-3'
    const itemInfo =`
    <img class="card-img img-fluid rounded mb-4" src="${details.strMealThumb}" alt="${details.strMealThumb}">
    <h4 class="card-title">${details.strMeal}</h4>
    <ul>
        <li>${details.strIngredient1}</li>
        <li>${details.strIngredient2}</li>
        <li>${details.strIngredient3}</li>
        <li>${details.strIngredient4}</li>
        <li>${details.strIngredient5}</li>
        <li>${details.strIngredient6}</li>
    </ul>
    `
    itemDetails.innerHTML = itemInfo
    indetails.appendChild(itemDetails)
}