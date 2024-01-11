console.log("hiaaa")

const fetchImgJokes = async (id) => {
  try {
    const url = `https://icanhazdadjoke.com/j/${id}.png`
   const response = await axios.get(url, { responseType: 'arraybuffer' });

    const uint8Array = new Uint8Array(response.data);
    const binaryString = String.fromCharCode.apply(null, uint8Array);
    const base64Image = btoa(binaryString);

const imgContainer = document.querySelector('.img-container');
const img = document.createElement('img');
img.src = 'data:image/png;base64,' + base64Image;
imgContainer.appendChild(img);

    
  } catch (error) {
    console.log(error)
    
  }
  
}

// fetchImgJokes("M7wPC5wPKBd")


// 

const jokeBtn = document.querySelector('.btn');

jokeBtn.addEventListener('click', () => {

  console.log("l")
  const jokeContainer = document.querySelector('.img-container')
  jokeContainer.innerHTML = ""
fetchImgJokes("M7wPC5wPKBd")
})

