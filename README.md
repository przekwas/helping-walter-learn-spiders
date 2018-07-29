# Webcrawler/Spider
Hey Walt!  This is super simple but it's a great starting point to get results and to play with.
It uses the [puppeteer](https://github.com/GoogleChrome/puppeteer) library to give us the ability to get a project running and scraping data super quick!  Check the link for the API docs for other features that I can help you figure out.

I commented all three javascript files to help you understand, there are a few medium-level javascript concepts in use so hit me up if you have any questions and I can help or give you the resources to understand 'em!

Happy Hacking!

## Requirements
- Code Editor of some kind, again, I reccomend [VS Code](https://code.visualstudio.com/)
- [NodeJS](https://nodejs.org/en/download/) that comes with bundled with NPM
- [Cmder](http://cmder.net/) for Windows or your Terminal for OSX
- Understanding of [http://books.toscrape.com/](http://books.toscrape.com/) to see what data I'm scraping for testing this project
- [Git](https://git-scm.com/downloads) command line tools

### Running

 1. Clone this repo onto your computer
 2. Navigate to the directory in Cmder/Terminal
 3. Once inside the directory, run `npm install` and it should download and install puppeteer for you
 4. Run `node test_scrape_simple.js` in Cmder/Terminal and it should save a screenshot for google.com as your first successful scrape!  
 5. Then run `node test_scrape_button.js` to see how to navigate to a different screen and get information there
 6. Run `node test_scrape_loop.js` to see how I made a loop to get every title/price on the first page on our testing website

#### Continuing Project with File System Module and Git CLI
1. `cd` into your project directory 
2. Use `git checkout fs` to move into the new repo branch where I pushed the file system code
3. Run `git pull`
	- If you get a merge conflict trying to do this step, either delete the directory and clone into a fresh one, create a new directory and clone the repo into it, or follow the steps to resolve the merge conflict if you changed my code and you tried to overwrite it with my old code when doing the `pull`.
4. Run `npm install`
5. Run `node test_scrape_to_text.js`
6. You now have a .txt file with the title and price of every book written
7. Examine the code and file system module [(basic usage docs)](https://www.w3schools.com/nodejs/nodejs_filesystem.asp) I used and enjoy!
