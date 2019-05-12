const request = require('request-promise');
const cheerio = require('cheerio');

// Majili (2019) URL
const URL = 'https://www.imdb.com/title/tt8737614/';

(async () => {

    const response = await request(URL);
    let $ = cheerio.load(response);

    let title = $('div[class="title_wrapper"] > h1').text();
    let rating = $('span[itemprop="ratingValue"]').text();
    console.log(title, rating);
    
})()