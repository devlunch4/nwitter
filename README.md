# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


#######################################################
* npx install
$ npx create-react-app nwitter

*Firebase install
Firebase installing instead npm i firebase >>
$npm i firebase@9.6.1

* React Router Dom install
React Router Dom installing instead npm i react-router-dom 
$ npm i react-router-dom@5.3.0

​* app Created
$ npx create-react-app nwitter

+npm install react react-dom


#4.2 Uploading
* $npm install uuid
* Firebase Storage Rule need Modified value:
<<<<<<<<
rules_version = '2';
service firebase.storage {
match /b/{bucket}/o {
match /{allPaths=**} {
allow read, write: if request.auth != null;
}
}
}
>>>>>>>

#6.1 Styles  
$ npm i @fortawesome/fontawesome-free  
$ npm i @fortawesome/free-brands-svg-icons  
$ npm i @fortawesome/free-solid-svg-icons  

$ npm i --save @fortawesome/fontawesome-free  
$ npm i --save @fortawesome/free-brands-svg-icons  
$ npm i --save @fortawesome/free-solid-svg-icons  

#6.2 Deploying  
$ npm i gh-pages  
- set package json  
$ npm run build  
- delete build Folder (x)  
$ npm run depoly  

Link Check;  
https://devlunch4.github.io/nwitter

#6.3 Security on Firebase  
https://console.firebase.google.com/

#6.4 API Key Security  
https://console.developers.google.com/apis/credentials

# fixed Security Dependabot alerts 
npm i node-fetch@2.6.7  
npm i nth-check@2.0.1  
npm i --save node-fetch@2.6.7  
npm i --save nth-check@2.0.1  


#######################################################
