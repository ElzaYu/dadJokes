
const form = document.querySelector('form')

const displaySeachedJokes = (searchedJokeList , searchTerm) => {
  console.log(searchedJokeList)
  const jokeListWrapper = document.querySelector('.joke-list-wrapper')
  console.log(jokeListWrapper)
  const totalJokes = searchedJokeList.length || "No"
  
  const h2 = document.createElement('h2')
  h2.textContent = `${totalJokes} jokes found with term ${searchTerm}`
  jokeListWrapper.appendChild(h2)

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
    displaySeachedJokes(searchedJokeList , searchTerm)  
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