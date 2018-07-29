const puppeteer = require('puppeteer');
//imports file system and assings all its methods to the variable fs
const fs = require('fs');

//all this code is the same! awesome!!
let scrape = async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('http://books.toscrape.com/', { waitUntil: 'domcontentloaded' });

    const result = await page.evaluate(() => {
        let data = [];
        let elements = document.querySelectorAll('.product_pod');
        for (let i = 0; i < elements.length; i++) {
            let title = elements[i].querySelector('h3').innerText;
            let price = elements[i].querySelector('.price_color').innerText;
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

    //this is important! it converts the javascript value to a json string which is actually readable!
    //if you just passed value instead it'd read as [{Object, object}] instead of ANY text! no good.
    //the (value, null, 4) is some trick styling to make it look organized, if you just did:
    //JSON.stringify() it works .. but everything is on ONE line and hard to read, try it out and see!
    let readableValue = JSON.stringify(value, null, 4);

    //file system is a way for node to write, read, update, rename, and delete files
    //this method replaces the txt file if it exists, otherwise it'll create a new one
    //its first argument is what i call the file, 'results_file.txt', it can be whathever you want
    //the second argument is the data i want written
    //the third argument is the error callback function
    fs.writeFile('results_file.txt', readableValue, function (err) {
        //the err is a callback in case an error is thrown, in which case it'll appear in cmder/terminal as a log
        if (err) throw err;
        //it logs a message saying 'All done!' when it completes
        console.log('All done!');
    });
});