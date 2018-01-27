# Guidelines to achieve a proper organization
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
   - [DevOps](#devops)
2. []()

## Technologies involved <a name="technologies"></a>
The main technologies we're using right now to make this real are [React.JS](https://reactjs.org) combined with [Node.JS](https://nodejs.org) and [Socket.IO](https://socket.io). The reason behind this decision it's because this project need a lot of dinamically render working with DOM and **React** it's the approach for it right now, even the component-based architecture help us to develop this project with a good maintanibility and better scalability.

**Node** is the rockstar library that allows run Javascript on the server side but that's not the only reason why he has been chosen. Node shine when we're talking about the real-time websites and this project match 100% with it. Node can give us all the performance we need with a minimum overhead impact.

Our real-time engine it's **Socket.IO,** the version 2.0 it's better than the old one and this time it's really fast. We leave here the main description from the official website: 

 ***Socket.IO enables real-time bidirectional event-based communication. It works on every platform, browser or device, focusing equally on reliability and speed.***

### Front-End <a name="frontend"></a>
The client was started with the official boilerplate from the React team so we can focus on develop the components without worrying about configurations. For now, we're not gonna eject the webpack configuration but I don't dismiss out doing in the future.

#### React - *Working on it...* <a name="react"></a>

#### CSS - *Working on it...* <a name="css"></a>

#### Third-Party libraries - *Working on it...* <a name="third_party"></a>

### Back-End <a name="backend"></a>
**Node, Express, MongoDB + mongoose(ODM) and Socket.IO** will be the main stack for now but I'm doing a research around the real-time database **"RethinkDB"** and seems very good, maybe **MongoDB** will be replaced by this database but don't freak out just keep it mind for future releases.

#### RESTful API with ExpressJS <a name="api"></a>
With the help of [Express.JS](https://expressjs.com) we're building an API that contains all the resources and logical operations that the client-side needs to interact with our web application. **The folder structure of our API are organized by three main folders: **

- **Endpoints:** This not means that every endpoint have his own file but on the model on which it applies, for example a **"user"** folder contains the endpoints that affects user directly *(as an exception about Auth process that have his own folder named **"auth"**)*

- **Models:** The database models, contains all the collections that we save into our database. We have an **User collection** where the other collections revolves around him. The [mongoose ODM](https://mongoosejs.com) is the chosen one to make the models so we're gonna use the **Schemas** from it. This NoSQL diagram maybe can clarify your mind around the general concept with which our application works:

![nosql_diagram](https://image.ibb.co/bGVmTb/NOSQL_compressor.png)


- **Tests:** This folder contains all the tests related to the API endpoints and each individual model. [Mocha](https://mochajs.org) and [Chai](https://chaijs.com) are the chosen ones for this job on the server side, with a simple script in the **package.json** we can test all the files that ends with the format ***.test.js***. It's really easy to work with asynchronous code thanks to Mocha framework and chai-http library. 


 
