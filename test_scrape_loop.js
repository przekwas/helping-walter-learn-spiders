const puppeteer = require('puppeteer');

//same idea as the last two, but we run a loop to get every book on the front page
let scrape = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://books.toscrape.com/', { waitUntil: 'domcontentloaded' });

    const result = await page.evaluate(() => {
        //prepare the array to hold all of our objects
        let data = [];
        //i gather EVERY element on the page that has class product_pod
        //which is the wrapper around every book listed
        let elements = document.querySelectorAll('.product_pod');
        //this loop will run for as many elements that were found in the above line
        for (let i = 0; i < elements.length; i++) {
            //same idea as the last example
            let title = elements[i].querySelector('h3').innerText;
            let price = elements[i].querySelector('.price_color').innerText;
            //this 'pushes' the title and price object into the array
            //its like adding a new spot everytime this loop runs
            data.push({
                title,
                price
            });
        };
        return data;
    });

    browser.close();
    return result;
};

scrape().then((value) => {
    console.log(value);
});