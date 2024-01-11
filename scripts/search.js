
const form = document.querySelector('form')
  const jokesPerPage = 5;
  let currentPage = 1;
  let totalPages = 0;

const displaySearchedJokes = (searchedJokeList, searchTerm) => {
  const jokeListWrapper = document.querySelector('.joke-list-wrapper')
  let h2Elm = jokeListWrapper.firstChild;
  
  if (h2Elm) {
  jokeListWrapper.removeChild(h2Elm);
}

  const jokeListUL = document.querySelector('.joke-list')
  const totalJokes = searchedJokeList.length || "No"
  
  const h2 = document.createElement('h2')
  h2.textContent = `${totalJokes} jokes found with term ${searchTerm}`
  jokeListWrapper.insertBefore(h2, jokeListWrapper.firstChild);

  // extract 5 jokesp per page
  console.log(searchedJokeList)
  displayJokes(searchedJokeList , 1)

  


}

// Function to display 5 jokes per page

function displayJokes(jokesList, page) {
  const jokeListUL = document.querySelector('.joke-list')
  jokeListUL.innerHTML=""
  
  const start = (page - 1) * jokesPerPage
  const end = start + jokesPerPage

  const jokesToDisplay = jokesList.slice(start, end)
  jokesToDisplay.forEach(jokeItem => {
    const li = document.createElement('li')
    li.textContent = jokeItem.joke
    jokeListUL.appendChild(li)
  
  });
 currentPage = page;
}

function createPageNumbers(jokesList) {
    const paginationSection = document.querySelector('.btn-wrapper')
  const pageNumDiv = document.createElement('div')
  paginationSection.appendChild(pageNumDiv)

  totalPages = Math.ceil(jokesList.length / jokesPerPage);
  if (totalPages > 0) {
    const nextButton = document.createElement('button');
    const prevButton = document.createElement('button');
    nextButton.textContent = 'Next';
    prevButton.textContent = 'Prev';

    nextButton.addEventListener('click', () => {
      // nextButton.style.backgroundColor = "red"
      if (totalPages >= currentPage + 1) {

        displayJokes(jokesList, currentPage + 1)
      }
    })

    prevButton.addEventListener('click', () => {
      if (currentPage - 1 > 0) {
         displayJokes(jokesList, currentPage - 1);
      }
    })

    pageNumDiv.insertAdjacentElement('beforebegin', prevButton)
    pageNumDiv.insertAdjacentElement('afterend', nextButton)
  }


 for (let i = 1; i <= totalPages; i++) {
                    const button = document.createElement('button');
                    button.textContent = i;
   button.addEventListener('click', () => {
    //  button.style.backgroundColor = "red"
     displayJokes(jokesList, i)
   }
                    );
                    pageNumDiv.appendChild(button);
                }

  

}
const serachJokesByTerm = async(searchTerm) => {
  try {
    const url = `https://icanhazdadjoke.com/search?term=${searchTerm}`
    const response = await axios.get(url, { headers: { "Accept": "application/json" } })
    const searchedJokeList = response.data.results
    const jokeListUL = document.querySelector('.joke-list')
    const btnWrapper = document.querySelector('.btn-wrapper')
    jokeListUL.innerHTML = ""
    btnWrapper.innerHTML =""
    displaySearchedJokes(searchedJokeList, searchTerm) 
// Display buttons only if there are more than 5 jokes
    if (searchedJokeList.length > 5) {
       createPageNumbers(searchedJokeList)
    }
   
  } catch (error) {
    console.log(error)
    
  }
}


form.addEventListener('submit', (event) => {
  event.preventDefault()
  const searchTerm = event.target.joke.value;
  console.log(searchTerm)
  serachJokesByTerm(searchTerm)
})