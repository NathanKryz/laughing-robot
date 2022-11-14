# laughing-robot

## Description

This project is a text editor and saving program featuring a Progressive Web Application (PWA) format, using a webpack to bundle and a local NoSQL database in order to
store and process inputted information. Thanks to its format, it runs with or without internet connection, allowing users to save their text even if the internet goes
down, as well as featuring the ability to install the application itself and run it from a user's local desktop. As a developer, it was my first foray into the world of
Progressive Web Application and is the first project of mine that features such versatility.

## Installation

As a user: Simply open the application in your web browser, and from there click the 'install' button in the top left, accept the prompt, and the application will
download right to your desktop.

As a developer: Make sure to clone, fork, or download the application manually and create your own local development enviroment. Once you have the code ready, make sure
to open a terminal and type in 'npm install' in order to install all the required packages in order to make the application work. From there, if you want to immediately
start testing a live build, type in 'npm run build' to generate the build in a dist folder, or 'npm run start' to immediately build, then initiate the application to a
local host server (At port 3000 by default).

## Usage

Once the application has been launched, simply type in whatever you wish into the given chat field, but it code, notes, lines, or just plain text, the application will
automatically save and refresh whenever the window loses focus, and will save the text even if you close the program, it is that easy.

![Screenshot of JATE](https://i.gyazo.com/870375c873b35151411f49ae183a58de.png)

[Link to the deployed application](https://laughing-robot.herokuapp.com/)

## Credits

[Heroku](https://heroku.com/)

[IDB](https://www.npmjs.com/package/idb)

[Webpack Manifest](https://www.npmjs.com/package/webpack-pwa-manifest)

[Babel](https://babeljs.io/)

[HTML webpack Plugin](https://www.npmjs.com/package/html-webpack-plugin)

[Workbox-webpack-plugin](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin/)

## License

Protected by the MIT License: Do as you will, I hold no fault if it breaks.
