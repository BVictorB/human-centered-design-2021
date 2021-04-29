# :raising_hand: &nbsp; Human Centered Design
During this course we have to create a digital product for a real person. We each got assigned one out of four people that we had to create the product for. I have to create a solution for Eric Groot Kormelink, we got two options to choose from. The first one being the ability to copy and paste with just speech, because it is difficult to do key combinations for Eric. The second one being the ability to express body language in chat apps. I decided to choose the first one.  
The goal of this course is to learn how to test digital products with a real person, and then iterate on the results of the test. We have to test our product three times with Eric, and then iterate on it depending on the results of the test. 


## Table of contents  
- [:raising_hand: &nbsp; Human Centered Design](#raising_hand--human-centered-design)
  * [:information_desk_person: &nbsp; User scenario](#information_desk_person--user-scenario)
    + [Who?](#who)
    + [What?](#what)
    + [How?](#how)
    + [Why?](#why)
  * [:boom: &nbsp; Challenges](#boom--challenges)
  * [:fireworks: &nbsp; Concept](#fireworks--concept)
  * [:page_with_curl: &nbsp; Features](#page_with_curl--features)
  * [:one: &nbsp; First test with Eric](#one--first-test-with-eric)
    + [Preparations](#preparations)
    + [Testing](#testing)
    + [Insights](#insights)
    + [Iterations](#iterations)
  * [:two: &nbsp; Second test with Eric](#two--second-test-with-eric)
    + [Preparations](#preparations-1)
    + [Testing](#testing-1)
    + [Insights](#insights-1)
    + [Iterations](#iterations-1)
  * [:three: &nbsp; Third test with Eric](#three--third-test-with-eric)
    + [Preparations](#preparations-2)
    + [The flow of all commands:](#the-flow-of-all-commands)
    + [The select command:](#the-select-command)
    + [The navigate command:](#the-navigate-command)
    + [Testing](#testing-2)
    + [Insights](#insights-2)
    + [Iterations](#iterations-2)
  * [:cherry_blossom: &nbsp; Exclusive design principles](#cherry_blossom--exclusive-design-principles)
    + [Study situation](#study-situation)
    + [Prioritise identity](#prioritise-identity)
    + [Ignore conventions](#ignore-conventions)
    + [Add nonsense](#add-nonsense)
  * [:mortar_board: &nbsp; Final product](#mortar_board--final-product)
  * [:high_brightness: &nbsp; Conclusion](#high_brightness--conclusion)
    + [:white_check_mark: &nbsp; Do's](#white_check_mark--dos)
    + [:x: &nbsp; Dont's](#x--donts)
  * [:books: &nbsp; Tech stack](#books--tech-stack)
  * [:open_file_folder: &nbsp; Live version](#open_file_folder--live-version)
  * [:scroll: &nbsp; License](#scroll--license)
  * [:inbox_tray: &nbsp; Install](#inbox_tray--install)  


## :information_desk_person: &nbsp; User scenario
### Who?
This project is personally created for Eric Groot Kormelink, who does not have fine motor skills and is therefore in an electric wheelchair. Eric is a designer that uses his computer a lot. When using his computer he runs into problems from time to time since most digital products are not created with disabled people in mind. This is something that can be overlooked by a lot of developers and designers, and I can imagine that this is something that can be very frustrating for someone like Eric.  

![Eric](https://user-images.githubusercontent.com/10921830/116614256-fc890400-a939-11eb-9e98-ecae691a6731.png)  

### What?
Eric wants to be able to copy and paste text using speech. In the form of an application, extension or website. He would also like to have some other features added that he could perform with speech, this is something that makes a lot of 'easy' tasks much more enjoyable for Eric.  

### How?
At first I wanted to make a Chrome Extension for Eric so he could use the product on any webpage. But since we had to do three iterations and I did not have any experience with making extensions, I decided to make a prototype on a single webpage that works exactly as I have in mind.  

### Why?
This product would be great for Eric, because of his disability he has problems with keyboard combinations. He can type very well and use his mouse without too much issues but using two buttons at the same time can be challenging sometimes. This is why copying and pasting can be difficult for Eric. With this concept he would not have to use two buttons at the same time. In fact, not any buttons since we are using speech (well... maybe one to enable the speech detection).  


## :fireworks: &nbsp; Concept
I want to create a Google Chrome extension that you can activate by simply clicking on the icon of the extension in the top bar or the browser. Once activated you can interact with the page that you are currently on by only using speech. I want the user to be able to navigate the page and select text on the page. When the user has text selected he has the option to copy this and paste it somewhere else.


## :page_with_curl: &nbsp; Features
List of features, I have used the MoSCoW method to categorize the features.

* Must haves:
  - [X] Selecting text using speech
  - [X] Copying text using speech
  - [X] Pasting text using speech

* Should haves:
  - [X] Visible feedback in the DOM when interacting with the extension
  - [X] Instructions how to use the product
  - [X] Real-time feedback to user (positive/negative alerts)

* Could haves:
  - [ ] Ability to interact with all elements (not just text)
  - [ ] Ability to save an image using speech
  - [ ] Navigating a website using speech

* Would haves:
  - [ ] Ability to control everything in the browser by just using speech
  - [ ] Letting the user add new commands
  - [ ] Letting the user configure commands


## :one: &nbsp; First test with Eric

### Preparations
The first test with Eric was on the first day of this course, we had to create a prototype in just a few hours so we could test it with Eric. We created a website with some sections and paragraphs on it where you could copy a whole section or just a specific paragraph within a section by just using your voice. The prototype worked great when testing it ourselves.

The website that we've built:
![first prototype](https://user-images.githubusercontent.com/10921830/116111474-f9caac80-a6b6-11eb-96fb-cc01d5b5cf2c.png)

### Testing
While testing the prototype, the website did not recognize Eric his voice at all. This was kind of a bummer because it worked great when we tested it ourselves. He was still able to give some feedback.

### Insights
We later found out that the SpeechRecognition API does not properly pick up your voice when you are using your microphone in another tab at the same time, this is why our prototype did not work properly. This was actually great to find out this early since we already know that the speech recognition would not work well during calls with Eric. So we already know what to expect from testing the speech recognition with Eric in the upcoming tests.  
Eric said that it would be nice to be able to select exactly the text that you want to copy (so not a whole section or paragraph). Also after thinking about this myself, I find it quite useless to build a website where he can navigate/copy and paste with his voice since this would only be available on this website. That is why I decided to go with a Chrome extension.

### Iterations
We have not iterated on the product, since we all started working on our own ideas after this test. But the iterations I've made to my ideas are very significant, I decided to go with a Google Chrome extension instead of a website (like described above) and got a very clear vision on how I want this to function.

## :two: &nbsp; Second test with Eric

### Preparations
I did not manage to get a working prototype for the second test, I did however write down a few question to ask Eric. And two students from my group have about the same concept and have already created their prototypes in Figma/Adobe XD, so this could also give me some insights.

### Testing
The testing with the prototypes that other students made with a similar concept went well, they made a few different screens showing how the product would work. During these tests a lot of my questions already got answered, so after their tests I only had a few questions left that I wanted to ask Eric.

### Insights
When selecting text with his voice, Eric would like to see live feedback so he can see what he is selecting in real-time. He also want the product to let him say the first few words of the piece of text that he wants to select, and after that the last few words. So everything in between gets selected. This way he can select text with precision and ease. Eric also wants to get feedback depending on the command/action that he is currently interacting with.

### Iterations
Watching Eric try out the prototypes that other students made and listening to Eric answering my questions gave me a lot of good insights. I already had a clear image of how I wanted to make the product work and look, and after this second test I have some great improvements. The live feedback whilst selecting text is something that would be really good to add to the features. Also giving feedback when triggering commands with speech is something that I had not yet added to my concept. I want the user to see exactly what the product is detecting and doing at any given time.

## :three: &nbsp; Third test with Eric

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
After this test I realised that making a working Chrome Extension would not be possible in the time that I have left. So I decided to just make a webpage with the working idea how it could look as a Chrome Extension. This way I still have time to do the iterations that I have in mind. I want to add just a single button to a page, and let the user be able to move this button around so they can position it themselves. I also want the user to be able to get real-time feedback after selecting text, so they can check if the selected text is correct. I want to add positive/negative feedback so the user knows exactly what is happening at any given time, I will probably add this with a small text-bubble next to the button, so everything stays in one place.

## :cherry_blossom: &nbsp; Exclusive design principles
### Study situation
The most important part was studying how Eric uses his computer and what he is capable of doing and not doing. Since he wanted speech recognition I was expecting that he could not use his keyboard at all. This was a false assumption since Eric can use his keyboard and mouse very well, but keyboard combinations are just very difficult for him. We questioned Eric about his disability during the first test and got a lot of answers that made everything much clearer to us. During the third (and final) test it became very clear to us that Eric might not actually need speech recognition, since he can just use his mouse properly. We could've made a collection of buttons or something similar that floats around on the screen that he can use. But the very useful thing about the use of speech recognition here is for selecting text, since that takes more precision when using your mouse.

### Prioritise identity
Eric likes things that just 'work'. He doesn't want things to become overly complicated. Eric just wants the bare minimum so the product is easy to use without too many useless additions to it. I noticed this during my tests and simplified the prototype accordingly, during my last iterations I removed all the useless text and buttons. There is now just a single button that does everything, and if needed you get an alert to let you know what's going on at the moment.

### Ignore conventions
The biggest convention that was ignored during this project is copying and pasting text with your keyboard or mouse. This is something that you would never think about if you do not have a disability. That is the reason that we went for speech recognition. Another convention is the proper sizing of assets on a website. I increased the size of the button that activates the speech recognition so it easier for Eric to click on it. It is not extremely large but just a big larger.

### Add nonsense
I added the command 'dungeons and dragons' that rolls a D4 dice and gives an alert with the number that was rolled (between 1 and 4). This does not really add any functionality but since Eric is so interested in Dungeons and Dragons this is just a small and fun addition that makes it a bit more personal.  


## :mortar_board: &nbsp; Final product
I am very satisfied with the final product. All the features that I wanted to add are added and all the iterations I wanted to make after the last test are implemented/changed. The application works really well, a lot better than I expected!  
Here are a few screenshots with explanations about the app:  

The default screen with everything expanded, the instructions are shown below the buttons, all commands are explained here. It tells the user what the usage is and how to use it. Above the buttons is also an area that can be shown/hidden, this shows the transcript. So everything you say whilest inputting commands will get shown here. This is great to use when learning how to use the application. Below are some articles that I've found on [nu.nl](https://www.nu.nl/) (a Dutch news website). These are used to test the application.  
![default screen with everything expanded](https://user-images.githubusercontent.com/10921830/116620935-c7cd7a80-a942-11eb-823d-aacaf27d9a3f.png)  

In this screenshot you can see how the 'select' command works. When the user says 'select [first words] to [last words]' the said words and everything in between gets selected. If it occurs multiple times every single block of text will get selected. The user gets real-time feedback and sees what text is selected.  
![select command example](https://user-images.githubusercontent.com/10921830/116620940-ca2fd480-a942-11eb-98d3-c41768854a9d.png)  

The copy command works quite simple, if you only have one block of text selected you can just say 'copy' and the text will get copied to your clipboard. However if you have multiple blocks of text selected, you can say 'copy [number of block]' to copy the exact block of text that you want to copy to your clipboard.  
![copy command example](https://user-images.githubusercontent.com/10921830/116620946-cb610180-a942-11eb-81d7-8ccb0425120f.png)  

With the paste command you can simply say 'paste' to paste the content from your clipboard into the textarea that is located on this page.  
![paste command example](https://user-images.githubusercontent.com/10921830/116620949-cbf99800-a942-11eb-8b3e-8663986820cc.png)  

With the deselect command you can simply say 'deselect' to deselect all the currently selected text on the page. However this is not required to execute if you want to do another select command.  
![deselect command example](https://user-images.githubusercontent.com/10921830/116620953-cbf99800-a942-11eb-80ef-178de4eec1fb.png)  


## :high_brightness: &nbsp; Conclusion
During this course I have learnt a lot about testing with real users. You have to think about a lot more things than I would have expected at the start of this course. Simply said, developing a product that works for every single human being is HARD. I did experience a lot of progression during this course. I have a much better view on how I should prepare for tests like we did. This course also got me thinking about making more accessible applications, which I think is great because we could probably all benefit from this if more people started focussing on accessibility.

### :white_check_mark: &nbsp; Do's
During testing I have noticed a lot of things that we did very well, and I got some great insights out of it:  
- Preparing your test with a lot of open questions is great, this gives you a lot of extra insights because the person that is testing your product does not say everything by itself.
- Because of the problems with using the microphone in multiple tabs at once (see Dont's), we started testing with explaining what you would say at a certain point in the application or letting Eric say what he thinks he should say to get the right results. This was a great solution for the problem we ran into.
- Ask the right questions early. During the final test Eric told us that he actually doesn't really need speech recognition because he can use his mouse properly. If we found this out early this might have had a huge impact on the final product. This is why it's important to ask this kind of stuff early into the process, so you don't end up doing a lot of work that won't be useful.

### :x: &nbsp; Dont's
I have also noticed a lot of things that went wrong during testing:
- Testing with speech recognition is great, but not when you are doing it remote. There are so many technical issues that appear once people are in a call. This happens because you are using your microphone in multiple places at once. The main problem here was using the microphone in multiple chrome tabs at one.
- Do not influence someone with your own opinions or thoughts. This is really important because if your application goes into production you also won't be there to steer a user in the right direction.


## :books: &nbsp; Tech stack
For the first version of this project I started working with Chrome Extensions. Making Chrome Extensions is quite 'simple', you just need to have knowledge of HTML, CSS and JavaScript. Google has very good documentation about how to make extensions and do different things (for example interacting with the DOM of the current page that you are on). But since this was quite new for me and we have to make iterations every week, I decided to just make the prototype as a webpage instead of the Chrome Extension.  
I decided to go with the React framework since I already have experience with it and knew that this would improve my productivity. Also a great reason to go with React for this prototype is that React is great with giving real-time feedback using the state. This really helped me to give the user real-time feedback when interacting with the prototype.  
I decided to host the prototype on [Vercel](https://vercel.com/), since this is extremely easy and fast to setup. After setting up the hosting on Vercel I decided to host is on a subdomain of my personal website, which you can check out in the next section.


## :open_file_folder: &nbsp; Live version
The final result of this project is being hosted on my personal website, click [here](https://hcd.victorboucher.dev/) to view it.


## :scroll: &nbsp; License
This repo is licensed as MIT by Victor Boucher, 2021.  
Click [here](https://github.com/BVictorB/human-centered-design-2021/blob/master/LICENSE) if you want to read the license.


## :inbox_tray: &nbsp; Install

- Clone this repo
```
git clone https://github.com/BVictorB/human-centered-design-2021 .
```
- Install all dependencies
```
npm i
```
- Install run the code (a browser window opens automatically)
```
npm start
```
