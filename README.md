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
