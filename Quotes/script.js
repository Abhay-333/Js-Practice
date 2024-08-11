const quote = document.querySelector(".quote");
const author = document.querySelector(".author");

const getQuote = async () => {
    const API = `https://api.kanye.rest/`;
  try {
    const response = await fetch(API);
    const data = await response.json();
    quote.textContent = data.quote
    quote.style.textTransform = "capitalize"
    quote.style.textAlign = "center"
  } catch (error) {
    console.log(error);
  }

};

getQuote();


// Regular Expression
const  regex = /this/g
const text = `This is an h1 and this is p tag, this is a text. This is an example of regular expression`
console.log(text.replace(regex, "not"))

const emailRegex = /^([a-zA-Z.0-9]+@[a-zA-Z.-]+\.[a-zA-Z]{2,})\w+$/

function validateEmail(email){
  return emailRegex.test(email)
}

const email = "abhayd0331@gmail.com"
console.log(validateEmail(email))