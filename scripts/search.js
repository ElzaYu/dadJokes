
const form = document.querySelector('form')

const displaySearchedJokes = (searchedJokeList , searchTerm) => {
  // console.log(searchedJokeList)
  const jokeListWrapper = document.querySelector('.joke-list-wrapper')
  // console.log(jokeListWrapper)
  const totalJokes = searchedJokeList.length || "No"
  
  const h2 = document.createElement('h2')
  h2.textContent = `${totalJokes} jokes found with term ${searchTerm}`
  jokeListWrapper.appendChild(h2)

  // if jokes are found , length is greater than 0 , display jokes

  // Implement Pagination (display 5 per page)
  // const jokesPerPage = 5;
  // let currentPage = 1;
  // let totalPages = 0;

  // extract 5 jokesp per page
  console.log(searchedJokeList)
  displayJokes(searchedJokeList , 1)

  


}

// Function to display 5 jokes per page

function displayJokes(jokesList, page) {
  console.log(jokesList)
  const section = document.querySelector('.joke-list-wrapper')
  const ul = document.createElement('ul')
  section.appendChild(ul)
  
   const jokesPerPage = 5;
  let currentPage = 1;
  let totalPages = 0;
  const start = (page - 1) * jokesPerPage
  const end = start + jokesPerPage
  console.log(start , end)

  const jokesToDisplay = jokesList.slice(start, end)
  jokesToDisplay.forEach(jokeItem => {
    const li = document.createElement('li')
    li.textContent = jokeItem.joke
    console.log(li)
    ul.appendChild(li)
    console.log("====")
    console.log(ul)
  
  });

}

const serachJokesByTerm = async(searchTerm) => {
  try {
    const url = `https://icanhazdadjoke.com/search?term=${searchTerm}`
    const response = await axios.get(url, { headers: { "Accept": "application/json" } })
    const searchedJokeList = response.data.results
    console.log(searchedJokeList)

    const jokesListWrapper = document.querySelector('.joke-list-wrapper')
    console.log(jokesListWrapper)
    jokesListWrapper.innerHTML =""
    displaySearchedJokes(searchedJokeList , searchTerm)  
  } catch (error) {
    console.log(error)
    
  }
}


form.addEventListener('submit', (event) => {
  event.preventDefault()
  const searchTerm = event.target.joke.value;
  console.log(searchTerm)

  // Call the function which make api call
  serachJokesByTerm(searchTerm)




})