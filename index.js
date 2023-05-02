require('dotenv').config();
let endpoint = 'https://api.giphy.com/v1/gifs/search?api_key=2C3MZ44TkRpaiEIbmgNWiFvbllCEWYTh&q=dog&limit=25&offset=0&rating=g&lang=en';
// Print out value of API key stored in .env file
console.log(process.env.API_KEY)