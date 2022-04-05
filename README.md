# social-feed
USER STORIES
• As a developer, I want to make at least 7 good, consistent commits.

• As a developer, I want to use the Create-React-App to create my React project.

• As a developer, I want to display all posts (name, body, & liked status) within a feed on the main page.

• As a developer, I want to create “like” and “dislike” buttons so that I can visually show & toggle between “liking” and “disliking” a post.

• As a developer, I want to create a form on a separate component so that I can add a new post to the main feed.

• As a developer, I want to create a minimum of three React components and use them within my application (EX: CreatePost, DisplayPosts, Post, NavBar)

• As a developer, I want to have an aesthetically pleasing user interface to ensure a great user experience

BONUS:

• As a developer, I want to add a date to all posts and post creations. (there’s a diff b/t dateTime, and date)

-----------------------------------------
The goal of the Social Feed project is to become more familiar with React.js, and to develop a greater understanding of how components interact, how props allow components to pass values and functions between each other, and how multiple components can come together to create an interactive frontend application with read & write functionality.

• Within the “Post” component create a template of how you would like each individual post to be displayed. This will include the user’s name, the body of the post, and the “like” and “dislike” buttons. 
    •For now, do not worry about the functionality for the “like” and “dislike” buttons – just decide where and how you would like them to display on each individual post!

• Within the “DisplayPosts” component, create the feed where all your posts will be displayed in your app. All posts should be passed into this component using props. Then, utilize the “map” higher order array method to map each post to its own Post component.

• Within the “CreatePost” component create a form with 2 input fields. There should be an input field for the user’s name, as well as the body of their post, and each should be bound to its own state variable. 

• Implement a “handleSubmit” method for your form, which should pass the entered values to a function on the App.jsx component. That function should create a new “post” object, add it to the existing array of posts, and update the App.js state variable with the new array. (arrow function)

• Lastly, you will need to build out the “like” and “dislike” functionality. Within the “Post” component, create 2 separate functions – one for when the “like” button is clicked, and one for when the “dislike” button is clicked. Bind these functions to their respective button’s onClick event. Within these functions, start to lay out the steps that need to occur when each button is clicked. (a data type that has two states (T/F))
---------------------------------------------------------------
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
