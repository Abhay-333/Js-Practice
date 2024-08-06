// Implement a function that makes mulitiple API calls and processes the data using callbacks.
// Also do it using promises
// use promises to load multiple imgs and display them on the webpage.

function fetchingAPI(url) {
  return fetch(url).then((response) => response.json());
}

function handleData(data) {
  return console.log(data);
}
function goFetchAPI() {
  const api1 = `https://jsonplaceholder.typicode.com/users`;
  const api2 = `https://bored-api.appbrewery.com/filter?type=education`;
  const api3 = `https://randomuser.me/api/`;
  const api4 = `https://randomuser.me/api/`;
  const api5 = `https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas`;

  fetchingAPI(api1, handleData)
    .then(handleData)
    .catch((err) => console.error(err));
  fetchingAPI(api2, handleData)
    .then(handleData)
    .catch((err) => console.error(err));
  fetchingAPI(api3, handleData)
    .then(handleData)
    .catch((err) => console.error(err));
  fetchingAPI(api4, handleData)
    .then(handleData)
    .catch((err) => console.error(err));
  fetchingAPI(api5, handleData)
    .then(handleData)
    .catch((err) => console.error(err));
}

// goFetchAPI()

const img = document.querySelector("#image-container");
const catAPI = `https://api.thecatapi.com/v1/images/search`;

const forTheCats = [
  `https://api.thecatapi.com/v1/images/search`,
  `https://api.thecatapi.com/v1/images/search`,
  `https://api.thecatapi.com/v1/images/search`,
  `https://api.thecatapi.com/v1/images/search`,
];

function showImages(data) {
  const createImg = document.createElement("img");
  createImg.setAttribute("src", `${data[0].url}`);
  img.appendChild(createImg);
}

function fetchingImages(url) {
  return fetch(`${url}`).then((response) => response.json());
}

const fetchPromise = async (url) => {
  return await fetch(url)
  .then((response=> !response.ok ? new Error('Network response was not ok') : response.json()))
  .catch(err => console.log(err));
};

const multiplePromises =  forTheCats.map(fetchPromise);
const resultInArray = await Promise.all(multiplePromises)

resultInArray.then((results)=>putImages(results))
.catch(error=>console.log(error))

const putImages = (results)=>{
    const newImage1 = document.createElement("img")
    newImage1.setAttribute(`src`, `${results[0][0].url}`)
    newImage1.setAttribute(`style`, `height:300px; width:300px; object-fit:cover;`)
    img.appendChild(newImage1)
    
    const newImage2 = document.createElement("img")
    newImage2.setAttribute(`src`, `${results[1][0].url}`)
    newImage2.setAttribute(`style`, `height:300px; width:300px; object-fit:cover;`)
    img.appendChild(newImage2)
    
    const newImage3 = document.createElement("img")
    newImage3.setAttribute(`src`, `${results[2][0].url}`)
    newImage3.setAttribute(`style`, `height:300px; width:300px; object-fit:cover;`)
    img.appendChild(newImage3)
    
    const newImage4 = document.createElement("img")
    newImage4.setAttribute(`src`, `${results[3][0].url}`)
    newImage4.setAttribute(`style`, `height:300px; width:300px; object-fit:cover;`)
    img.appendChild(newImage4)
}