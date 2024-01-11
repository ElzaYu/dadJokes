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
  const imageId = ['0DdFQZgyXnb', '0ga2wsPZgib', '2giGYLeiGe', '5TS7pbxcpb', '69xAsrHYDAd', '82wHlbaapzd', '8hFYojqz5h', '9hiGeNZ0Tnb', 'yP7MRucFQCd', 'a218pbMmOmb', 'FtHJmGJ61wc', 'aMmbaFYTKBd', 'caxscaMRnjb', 'ci311DtH6h', 'HQfNZDIRSnb', 'HeiqcaMRKBd', 'IRKJBQ7p4wc', 'exXSCtkOKe', 'JJ61L61Lusc', 'f211DdFBd']
  const randomImgId = Math.floor(Math.random() * imageId.length);

  const randomJoke = imageId[randomImgId];
  console.log(randomJoke)

  const jokeContainer = document.querySelector('.img-container')
  jokeContainer.innerHTML = ""
fetchImgJokes(randomJoke)
})

