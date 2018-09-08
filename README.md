# Project 2: Firebase Authentication

Built while following along: [The Complete React Native and Redux Course](https://www.udemy.com/the-complete-react-native-and-redux-course) by Stephen Grider. 

## What does it do?

The "completed" app will be a simple Login screen that utilizes Firebase for user authentication. 

* The user will be presented with a login screen with the following:
  1. An Email input box.
  2. A Password input box.
  3. A button to log them into Firebase

* Once the user inputs their information and presses the button, we will display any errors that may have occurred.
* If no errors occur, a loading spinner will be shown while our app sends information to Firebase.
* If the request is successful, the user will be presented with a logout button in order to log out. 

## What did building this app teach me?

* Reducing import statements via the "Common" folder pattern was awesome.
* TextInputs are similar to images as they need height and widths define to display it on screen.
* Controlled inputs are necessary to keep your code declarative, Grider goes into depth with this concept, which is good for beginners.
* Creating our own reusable textInputs was cool. It’s like this course is arming me with ReactNative components to use in the future.

* He forgot to inform the user to enable eslinting by creating an .eslintrc file and to `npm I —save-dev eslint-config-rallycoding`. I discovered this a bit too late and didn't implement it.

* I’m wondering why Grider doesn’t use the React Native `StyleSheet.create` method. I would see it used all the time within examples online, but he makes no reference to it.
* The following points are reasons to use `StyleSheet.create`, found on stack overflow:
    * It validates the styles.
    * From the docs: “*Making a stylesheet from a style object makes it possible to refer to it by ID instead of creating a new style object every time.*”
    * From the docs: “*It also allows to send the style only once through the bridge. All subsequent uses are going to refer an id (not implemented yet).*”
* If that doesn’t make any sense to you, just know that using `StyleSheet.create` better optimizes app performance.

* Some of the code that he wrote didn't create the same visual output for me on my end.
* After searching through the Q&A, it looks like many others have similar problems and quick fixes are available if needed.

## Final thoughts: 

I'm starting to understand that this course was developed with the *complete* react beginner in mind. Many of the asides and diagrammed examples are on concepts that should be well known if the student has used React for similar projects in the browser.

*This isn't a negative thing at all,* as it gives someone like me (who isn't learning most of these concepts for the first time) a good refresher and it's way better than going through a beginner web-based React tutorial, which gets really dull, really fast. 

Although there's old information, it's bearable for the sole fact that all the tools are different.

The app is simple, but Grider has the videos well-paced and he's doing a great job with explaining things. The next project is a Redux primer. I'm interested to see how it differs with Redux in the browser and what kind of approach Grider takes to explain everything.
