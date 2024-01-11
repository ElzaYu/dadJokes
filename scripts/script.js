
const fetchJokes = async () => {
  try {
    const url = "https://icanhazdadjoke.com/"
    const { data } = await axios.get(url, { headers: { "Accept": "application/json" } });
    const { joke } = data
    const jokeContainer = document.querySelector('.joke-wrapper')
    const p = document.createElement('p')
    p.textContent = joke
    // Append it to section
    jokeContainer.appendChild(p)
  } catch (error) {
    console.log(error)
  }
}

fetchJokes()


// 

const jokeBtn = document.querySelector('.navbar__btn');
jokeBtn.addEventListener('click', () => {
  const jokeContainer = document.querySelector('.joke-wrapper')
  jokeContainer.innerHTML = ""
  fetchJokes()
})


// Search for Jokes

// form.addEventListener('submit', (event) => {
//   event.preventDefault()
//   console.log(event.target.joke)
// })
// function doAnimation() {
//   var targetElement = document.getElementById("target");
//   targetElement.className = "animated";
// }

const btn = document.getElementById("target");

function doAnimation() {
  btn.innerHTML = "Clicked ME";
  // btn.style = "animated";
}

// console.log(doAnimation());
// // Add a click event handler (via an anonymous inline arrow function)
// btn.addEventListener("click", (event) => {
//   console.log(event);
// });

// console.log("hello");
