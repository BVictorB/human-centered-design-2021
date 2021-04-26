# human-centered-design-2021
During this course we have to create a digital product for a real person. We each got assigned one out of four people that we had to create the product for. I have to create a solution for Eric Groot Kormelink, we got two options to choose from. The first one being the ability to copy and paste with just speech, because it is difficult to do key combinations for Eric. The second one being the ability to express body language in chat apps. I decided to choose the first one.

## The assignment

## User scenario
(Who?, What?, How? and Why?)

## Challenges

## Requirements

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
    * Instructions how to use the product

* Could haves:
    * Ability to interact with all elements (not just text)
    * Ability to save an image using speech

* Would haves:
    * Ability to control everything in the browser by just using speech
    * Letting the user add new commands
    * Letting the user configure commands


## First test with Eric

### Preparations
The first test with Eric was on the first day of this course, we had to create a prototype in just a few hours so we could test it with Eric. We created a website with some sections and paragraphs on it where you could copy a whole section or just a specific paragraph within a section by just using your voice. The prototype worked great when testing it ourselves.

The website that we've built:
![localhost_3000_](https://user-images.githubusercontent.com/10921830/116111474-f9caac80-a6b6-11eb-96fb-cc01d5b5cf2c.png)

### Testing
While testing the prototype, the website did not recognize Eric his voice at all. This was kind of a bummer because it worked great when we tested it ourselves. He was still able to give some feedback.

### Insights
We later found out that the SpeechRecognition API does not properly pick up your voice when you are using your microphone in another tab at the same time, this is why our prototype did not work properly. This was actually great to find out this early since we already know that the speech recognition would not work well during calls with Eric. So we already know what to expect from testing the speech recognition with Eric in the upcoming tests.  
Eric said that it would be nice to be able to select exactly the text that you want to copy (so not a whole section or paragraph). Also after thinking about this myself, I find it quite useless to build a website where he can navigate/copy and paste with his voice since this would only be available on this website. That is why I decided to go with a Chrome extension.

### Iterations
We have not iterated on the product, since we all started working on our own ideas after this test. But the iterations I've made to my ideas are very significant, I decided to go with a Google Chrome extension instead of a website (like described above) and got a very clear vision on how I want this to function.

## Second test with Eric

### Preparations
I did not manage to get a working prototype for the second test, I did however write down a few question to ask Eric. And two students from my group have about the same concept and have already created their prototypes in Figma/Adobe XD, so this could also give me some insights.

### Testing
The testing with the prototypes that other students made with a similar concept went well, they made a few different screens showing how the product would work. During these tests a lot of my questions already got answered, so after their tests I only had a few questions left that I wanted to ask Eric.

### Insights
When selecting text with his voice, Eric would like to see live feedback so he can see what he is selecting in real-time. He also want the product to let him say the first few words of the piece of text that he wants to select, and after that the last few words. So everything in between gets selected. This way he can select text with precision and ease. Eric also wants to get feedback depending on the command/action that he is currently interacting with.

### Iterations
Watching Eric try out the prototypes that other students made and listening to Eric answering my questions gave me a lot of good insights. I already had a clear image of how I wanted to make the product work and look, and after this second test I have some great improvements. The live feedback whilst selecting text is something that would be really good to add to the features. Also giving feedback when triggering commands with speech is something that I had not yet added to my concept. I want the user to see exactly what the product is detecting and doing at any given time.

## Third test with Eric

### Preparations
For the third (and final) test with Eric I created a prototype of the product. In this prototype I showed all the different functionalities and how they would work when using them. I have also written down a number of questions for Eric to get a bit more information.
Here are some of the questions that I wanted to ask Eric:
- What are the changes that you would like to see?
- Would it beneficial for you to be able to just read all the text out loud that you want to select? (for small texts)
- What other tasks would you like to be able to perform using speech?
- Would you prefer to click on a button to let the extension know that you are done talking, and clicking on the button again to execute other commands again? Or do you just want the extension to keep listening so you can keep on talking?
- Do you need any or more explanations in the small window of the extension? If so, for which functionalities?
- Would you prefer to just have a button in your window or top browser bar without the popup window that there is currently? 

### The flow of all commands:
![hcd presentatie_Page_01](https://user-images.githubusercontent.com/10921830/116118756-ef5fe100-a6bd-11eb-8051-ffeab6aab5ba.jpg)

### The select command:
![hcd presentatie_Page_02](https://user-images.githubusercontent.com/10921830/116118762-f1c23b00-a6bd-11eb-9030-43a4998c8bf7.jpg)
![hcd presentatie_Page_03](https://user-images.githubusercontent.com/10921830/116118768-f38bfe80-a6bd-11eb-9bb6-a6d30631d733.jpg)
![hcd presentatie_Page_04](https://user-images.githubusercontent.com/10921830/116118774-f4bd2b80-a6bd-11eb-81e2-62512fc47ef2.jpg)
![hcd presentatie_Page_05](https://user-images.githubusercontent.com/10921830/116118777-f555c200-a6bd-11eb-94e3-be339ea3d03c.jpg)
![hcd presentatie_Page_06](https://user-images.githubusercontent.com/10921830/116118779-f5ee5880-a6bd-11eb-913a-aff23304e5ae.jpg)
![hcd presentatie_Page_07](https://user-images.githubusercontent.com/10921830/116118784-f686ef00-a6bd-11eb-9096-89cdedac03ed.jpg)

### The navigate command:
![hcd presentatie_Page_08](https://user-images.githubusercontent.com/10921830/116118790-f71f8580-a6bd-11eb-9929-5ecf128e7903.jpg)
![hcd presentatie_Page_09](https://user-images.githubusercontent.com/10921830/116118792-f71f8580-a6bd-11eb-90c0-5230fed149f0.jpg)
![hcd presentatie_Page_10](https://user-images.githubusercontent.com/10921830/116118793-f7b81c00-a6bd-11eb-9319-896fae21c2b4.jpg)
![hcd presentatie_Page_11](https://user-images.githubusercontent.com/10921830/116118797-f850b280-a6bd-11eb-873c-3c8b2e4c3d74.jpg)

### Testing
During testing I got very positive feedback and great tips from Eric on how I could improve the prototype. The whole prototype was very clear to Eric and it made a lot of sense to him. I asked quite a lot of questions to Eric, he responded very comprehensive and clear. This was great since this gave me a lot of useful insights to iterate on.

### Insights
Eric said that he would like to just have a single big button in his screen at all times, so he would not have to move his mouse over to the top bar of his browser every time he wanted to use the extension. He said that it would be nice to be able to move the button yourself to any place that you prefer in the window. As soon as someone presses on the button the speech recognition would start and you could start executing commands. He really liked that I give feedback with every step of the process of executing a command, so he would like to see that in the finished product aswell, this makes it really clear to what you are doing. He said that this could be in the form of an icon or an icon in combination with text.
Eric would also like to be able to scroll using speech, or toggle the scrolling with mouse movements (scroll wheel click) with speech. 
Finally Eric said that it would be useful to get more information about commands or steps when you want it, so it would be good to have a small information button at all times so you can check on what you are supposed to do at the step of the process. He would like to have the instructions hidden since the product will be quite easy to learn.

### Iterations


## Exclusive design principles

### Study situation

### Prioritise identity

### Ignore conventions

### Add nonsense

## How I applied the exclusive design principles
