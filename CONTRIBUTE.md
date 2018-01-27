# Guidelines to achieve a proper organization
### Here you can find all the information **related to the project in technical terms.** You are invited to open an issue if you need more information or giving us a better feedback about this page based on your experience contributing to other open source projects.

#### We're open to all the corrections you can do in this document, all of us can benefit thanks to your voluntary effort :)

## Content index 
1. [Technologies categorized by field](#technologies)
   - Front-End
   - Back-End
   - DevOps


## Technologies involved <a name="technologies"></a>
The main technologies we're using right now to make this real are [React.JS](https://reactjs.org) combined with [Node.JS](https://nodejs.org) and [Socket.IO](https://socket.io). The reason behind this decision it's because this project need a lot of dinamically render working with DOM and **React** it's the approach for it right now, even the component-based architecture help us to develop this project with a good maintanibility and better scalability.

**Node** is the rockstar library that allows run Javascript on the server side but that's not the only reason why he has been chosen. Node shine when we're talking about the real-time websites and this project match 100% with it. Node can give us all the performance we need with a minimum overhead impact.

Our real-time engine it's **Socket.IO,** the version 2.0 it's better than the old one and this time it's really fast. We leave here the main description from the official website: 

 ***Socket.IO enables real-time bidirectional event-based communication. It works on every platform, browser or device, focusing equally on reliability and speed.***

### Front-End
The client was started with the official boilerplate from the React team so we can focus on develop the components without worrying about configurations. For now, we're not gonna eject the webpack configuration but I don't dismiss out doing in the future.

CSS - *Working on it...*

Third-Party libraries - *Working on it...*

### Back-End
**Node, Express, MongoDB + mongoose(ODM) and Socket.IO** will be the main stack for now but I'm doing a research around the real-time database **"RethinkDB"** and seems very good, maybe MongoDB will be replaced by this database but don't freak out just keep it mind for future releases.

#### NoSQL basic diagram ***(you can contribute on it as well)***

![nosql_diagram](https://image.ibb.co/bGVmTb/NOSQL_compressor.png)
 
