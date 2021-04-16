# human-centered-design-2021
During this course we have to create a digital product for a real person. We each got assigned one out of four people that we had to create the product for. I have to create a solution for Eric Groot Kormelink, we got two options to choose from. The first one being the ability to copy and paste with just speech, because it is difficult to do key combinations for Eric. The second one being the ability to express body language in chat apps. I decided to choose the first one.

## Concept
I want to create a Google Chrome extension that you can activate by simply clicking on the icon of the extension in the top bar or the browser. Once activated you can interact with the page that you are currently on by only using speech. I want the user to be able to navigate the page and select text on the page. When the user has text selected he has the option to copy this and paste it somewhere else.

## Features
List of features, I have used the MoSCoW method to categorize the features.

* Must haves:
    * Selecting text using speech
    * Copying text using speech
    * Pasting text using speech

* Should haves:
    * Navigating a website using speech
    * Visible feedback in the DOM when interacting with the extension
    * 

* Could haves:
    * Ability to interact with all elements (not just text)
    * Ability to save an image using speech

* Would haves:
    * ...

## First test with Eric
For the first test with Eric we created a prototype together in a team. We created a website where you can select a section and/or a paragraph and copy the text that is located there. When Eric tested the website it did not recognize his voice at all. We later found out that if you are in a call that is using your microphone (in a different tab), the SpeechRecognition API does not pick up your voice properly. This was kind of annoying during the test since it looked like our prototype was not working, but we still got some good feedback. Eric said that it would be nice to be able to select exactly the text that you want to copy (so not a whole section or paragraph). Also after thinking about this myself, I find it quite useless to build a website where he can navigate/copy and paste with his voice since this would only be available on this website. That is why I decided to go with a Chrome extension.

## Second test with Eric
I did not manage to get a working prototype for the second test, but since some other students had made prototypes using Figma/XD, I still got some useful information.
When selecting text with his voice he would like to see live feedback, so you can see what you are currently selecting. Also he just want to say 'select First words.. to Last words..' and after that something like 'copy'. So he can decide exactly what he wants to select and copy. He also want to get feedback depending on the command/action that you are currently interacting with. This gave me enough information to start working on the working prototype of the extension.
