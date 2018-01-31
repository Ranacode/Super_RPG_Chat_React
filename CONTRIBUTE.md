# Guidelines to achieve a proper organization

![team_gif](https://media.giphy.com/media/WCAXAidzhmwlG/giphy.gif)

### Here you can find all the information **related to the project in technical terms.** You are invited to open an issue if you need more information or giving us a better feedback about this page based on your experience contributing to other open source projects.

#### We're open to all the corrections you can do in this document, all of us can benefit thanks to your voluntary effort :)

## Content index 
1. [Technologies categorized by field](#technologies)
   - [Front-End](#frontend)
     - [React](#react)
     - [CSS](#css)
     - [Third-Party libraries](#third_party)
   - [Back-End](#backend)
      - [RESTful API with ExpressJS](#api)
        - [Endpoints](#endpoints)
        - [Models](#models)
        - [Attributes explained](#attributes)
   - [DevOps](#devops)
2. []()
- - -
# Technologies involved <a name="technologies"></a>
### The main technologies we're using right now to make this real are [React.JS](https://reactjs.org) combined with [Node.JS](https://nodejs.org) and [Socket.IO](https://socket.io). 


## React <a name="react"></a>
<p align="center"><img width="200" height="200" src="https://raw.githubusercontent.com/rexxars/react-hexagon/HEAD/logo/react-hexagon.png"/></p>
The reason behind this decision it's because this project need a lot of dinamically render working with DOM and this library it's the approach for it right now, even the component-based architecture help us to develop this project with a good maintanibility and better scalability.

## Node
<p align="center"><img width="200" height="200" src="https://jaystack.com/wp-content/uploads/2015/12/nodejs-logo-e1497443346889.png"/></p>
It's the rockstar library that allows run Javascript on the server side but that's not the only reason why he has been chosen. Node shine when we're talking about the real-time websites and this project match 100% with it. Node can give us all the performance we need with a minimum overhead impact.

## Socket.IO
<p align="center"><img width="200" height="200" src="https://enginearch.com/wp-content/uploads/2015/12/SOCKETIOICON2.png"/></p>

Our real-time engine it's **Socket.IO,** the version 2.0 it's better than the old one and this time it's really fast. We leave here the main description from the official website: 

 ***Socket.IO enables real-time bidirectional event-based communication. It works on every platform, browser or device, focusing equally on reliability and speed.***
- - -
# Front-End <a name="frontend"></a>
The client was started with the official boilerplate from the React team so we can focus on develop the components without worrying about configurations. For now, we're not gonna eject the webpack configuration but I don't dismiss out doing in the future.

## React - *Working on it...* <a name="react"></a>

## CSS - *Working on it...* <a name="css"></a>

## Third-Party libraries - *Working on it...* <a name="third_party"></a>

# Back-End <a name="backend"></a>
**Node, Express, MongoDB + mongoose(ODM) and Socket.IO** will be the main stack for now but I'm doing a research around the real-time database **"RethinkDB"** and seems very good, maybe **MongoDB** will be replaced by this database but don't freak out just keep it mind for future releases.

## RESTful API with ExpressJS <a name="api"></a>
With the help of [Express.JS](https://expressjs.com) we're building an API that contains all the resources and logical operations that the client-side needs to interact with our web application. **The folder structure of our API are organized by three main folders:**

### Endpoints <a name="endpoints"></a>
This not means that every endpoint have his own file but on the model on which it applies, for example a **"user"** folder contains the endpoints that directly affects the user *(as an exception around the **Auth process** that have his own folder named **"auth"**)*

### Models <a name="models"></a>
The database models, contains all the collections that we save into our database. We have an **User collection** where the other collections revolves around him. The [mongoose ODM](https://mongoosejs.com) is the chosen one to make the models so we're gonna use the **Schemas** from it. This NoSQL diagram maybe can clarify your mind around the general concept with which our application works:

![nosql_diagram](https://image.ibb.co/bGVmTb/NOSQL_compressor.png)
- - -
#### Attributes 
All of that attributes have a purpose as well and explanation for their job inside the application. Let's break down these attributes: 
##### User 
###### (Google, Facebook, Twitter)ID
This fields are optional and allow us save the id from their social profiles if they choose sign up into our application using one of those platforms. **OAuth2.0** is the way to achieve this social authentication, and we implement it with the 
[Passport.JS](http://www.passportjs.org/) library.

###### Username, email and password
This fields are for the normal authentication that has accompanied us all our lives using email and password. We secure the passwords in our database using the [BcryptJS](https://www.npmjs.com/package/bcryptjs) library with extra salt to avoid rainbow attacks.
The emails have the unique key on mongoose.Schema and can't be duplicated, so we avoid the possibility to use multiple accounts with the same email.
###### Avatar
In the process of signup the avatar is completely optional and can be upload later in the profile settings zone, if the user don't provide anyone we fill the avatar with this default image: 
<p align="center"><img width="125" height="125" src="https://www.shareicon.net/download/2016/07/10/119669_people_512x512.png"/></p>

###### Achievements
An array containing all the unlocked achievements, the achievement it's a collection itself so you can get more detailed information in his respective zone.
###### Messages
All the messages that the user has writed into the chat, they can be checked in the profile zone.
###### totalScore
All the accumulated score from the day it was registered, this field saves float numbers and can be obtained writing in the chat, attack other users, defend agains them, leveling up, unlock achievements, etc. 
###### monthScore
This field can be used to display the TOP 10 highscore every month and obviously it will be reset each month.
###### Level
*You can obtain more detailed explanation of this field in the appropiate zone* but on resume, with each level the user acquire new skills, unlock new achievements and the attributes grow up. There is no maximum level for now.
###### Attributes
It represents the fight statistics for the user, *you can obtain more detailed explanation of this field in the appropiate zone.*
###### Skills
Special abilities that can perform unique tasks, attacks or just an extra interaction between users, *you can obtain more detailed explanation of this field in the appropiate zone.*
###### Defeated
The users can be defeated and are penalized with a small portion of the score, some minutes without can type anything in the chat *(but can still watching the room)* and almost all the skills cannot be activated during this period.
###### createdAt, lastConnection
Timestamps to make some statistis inside the application, the last connection can be showed in the user profile.
- - -
##### Achievement
###### Owner
The user that unlocked this achievement
###### Title
Descriptive title 
###### Description
Short description and the condition that the user reached to unlock this achievement
###### unlockAt
Date on which the user unlocked this achievement

##### Message
###### Author
The original creator of the message.
###### body
Main content of the message, can contain special codes for the skills and powerUps.
###### createdAt
The date that the message was created.
###### aptitudes
Special skills that the message have depends on the user level
###### powerUp
Special buffs that are applied to the chat

##### Skill
###### Owner
The user that have this skill and can use it.
###### Title
Title that define the skill itself.
###### Description
Short description that explain what this skill can do and When and Where to use
###### requiredLevel
Level required to unlock this skill that allow each user use it.
###### Effect
Applied effects and what attributes can be seen affected.
###### reloadTime
Each skill have a reloadTime to avoid the abuse of these.
###### Modifiers
Different modifiers that can change the behavior of the message, user attributes, skills power ups and so on.

##### Attribute
###### Owner
The user in which these attributes are applied.
###### Life
The amount of damage that this user can resist, when it reaches zero or a negative number, the user is defeated.
###### Energy 
This attribute is needed to use skills, each skill have a specific amount of energy  cost.
###### Strength
The amount of damage the user can do to other people.
###### Defense
An extra parameter that can reduce the amount of damage that the user can receive.
###### Chaining
The probability by which an attack or a skill can be repeated a number of times depending on the number of succesfull "dice rolls"
###### Crit
The probability by which an attack can be modified with an extra damage based on multipliers.


### Tests
This folder contains all the tests related to the API endpoints and each individual model. [Mocha](https://mochajs.org) and [Chai](https://chaijs.com) are the chosen ones for this job on the server side, with a simple script in the **package.json** we can test all the files that ends with the format ***.test.js***. It's really easy to work with asynchronous code thanks to Mocha framework and chai-http library. 


 
