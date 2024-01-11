
const form = document.querySelector('form')


const serachJokesByTerm = async(serachTerm) => {
  try {
    const url = `https://icanhazdadjoke.com/search?term=${serachTerm}`
    const response = await axios.get(url, { headers: { "Accept": "application/json" } })
    const searchedJokeList = response.data.results
    console.log(searchedJokeList)
    
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