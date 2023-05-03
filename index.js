require('dotenv').config();
const fetch = require('isomorphic-fetch');
// Print out value of API key stored in .env file
console.log(process.env.API_KEY)


async function getImages(query){
    const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_KEY}&q=${query}&limit=25&offset=0&rating=g&lang=en`;
    const response = await fetch(endpoint);
    console.log(endpoint);
    const {data} = await response.json();
    const imageUrl = data[0].url;
    console.log(imageUrl);
    return imageUrl;
}

 async function main(){
    getImages(`dog`);
 }

 main();