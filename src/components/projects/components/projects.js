import wheaterAPP from '../../../assets/projects/whether-APP.png'
import loginAPP from '../../../assets/projects/login-app.png'
import assets from '../../../assets/projects/assets.png'
import todo from '../../../assets/projects/todo.png'
import store from '../../../assets/projects/store.png'
import todoApp from '../../../assets/projects/todo-screen.PNG'
import cards from '../../../assets/projects/cards.PNG'
import spse from '../../../assets/projects/spse.PNG'
import multiShop from '../../../assets/projects/multi-shop.PNG'
import dyson from '../../../assets/projects/dyson.PNG'
import magicForest from '../../../assets/projects/magic-forest.png'
import moonlight from '../../../assets/projects/moonlight.png'
import colorWorld from '../../../assets/projects/colorWorld.png'
export let myProjects = [
    {
        id: Math.random().toString(36).substr(2, 9),
        link: 'https://armanmesropyan.github.io/color-world/',
        cover: colorWorld,
        title: 'Color World',
        description: `This is a project written in javascript,a clone of color money and such applications.
                        You can generate a random color here and automatically generate a 6 digit text
                        , fix it and send the link to friends. Press space to change colors`,
        skills: [{x: "icon-html5-plain-wordmark"}, {x: "icon-css3-plain-wordmark"}, {x: "icon-javascript-plain"}],
        github: 'https://github.com/ArmanMesropyan/color-world'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        link: 'https://moonlight-phi.vercel.app/',
        cover: moonlight,
        title: 'Moonlight (Parallax)',
        description: 'Moonlight is a mini project (layout) written in react and scss. parallax is shown here',
        skills: [{x: "icon-react-original-wordmark"}, {x: "icon-sass-original"}],
        github: 'https://github.com/ArmanMesropyan/moonlight'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        link: 'https://magic-forest.vercel.app/',
        cover: magicForest,
        title: 'Magic Forest (Parallax)',
        description: 'Magic forest is a mini project (layout) written in react and scss. parallax is shown here',
        skills: [{x: "icon-react-original-wordmark"}, {x: "icon-sass-original"}],
        github: 'https://github.com/ArmanMesropyan/magic-forest'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        link: 'https://armanmesropyan.github.io/samApp/#/',
        cover: dyson,
        title: 'My Test Big Project Dyson',
        description: `This is my own test project. here is a multi-page personal site. 
        if you click on the button login there is written login and password through it you can log in.
         the application has many interactions with the api, for example to add something to the server get,
          change the status of the person on the server, to subscribe or unsubscribe from the person on the server 
          well or for example to get all users on this server and so on`,
        skills: [{x: "icon-react-original-wordmark"}, {x: "icon-sass-original"}],
        github: 'https://github.com/ArmanMesropyan/samApp'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        link: 'https://armanmesropyan.github.io/bigShop/#/home',
        cover: multiShop,
        title: 'Multi SHop',
        description: `
            Here developed a multi-page store with animations and slides ,
            you can see here its result when there is nothing in the stores for this have buttons to add something to the store ,
            but there is 1 but if you want to see the whole project how it works please download this code from the githab 
            and I ask you to change the key in the folder
            "src/connection/api/ProductApi" to the new key.
            and you can get the key if you go to the site "https://crudcrud.com" .
            this service gives us access to requests 100 times a day,
            but this is not a problem for us, we can just change the key and everything will work again.
            if you change the key, the fake server will be clean,
            so if you don't mind, please add product and category as you wish`,
        skills: [{x: "icon-react-original-wordmark"}, {x: "icon-sass-original"}],
        github: 'https://github.com/ArmanMesropyan/bigShop'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        link: 'https://g404-9kll.vercel.app/home',
        cover: spse,
        title: 'SPSE',
        description: 'layout of the site in which there is little functionality',
        skills: [{x: "icon-react-original-wordmark"}, {x: "icon-sass-original"}],
        github: 'https://github.com/ArmanMesropyan/g404'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        link: 'https://cards-three-hazel.vercel.app/',
        cover: cards,
        title: 'Cards App',
        description: 'This is a small application that adds random numbers to the cards they can be reversed and deleted',
        skills: [{x: "icon-react-original-wordmark"}, {x: "icon-typescript"}, {x: "icon-sass-original"}],
        github: 'https://github.com/ArmanMesropyan/cards'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        link: 'https://todo-app-nine-nu.vercel.app/',
        cover: todoApp,
        title: 'Todo App',
        description: 'This is a small todo application where you can add a task to the list, edit it, check it, delete it, etc.',
        skills: [{x: "icon-react-original-wordmark"}, {x: "icon-typescript"}, {x: "icon-sass-original"}],
        github: 'https://github.com/ArmanMesropyan/todo-app'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        link: 'https://armanmesropyan.github.io/weather_app/',
        cover: wheaterAPP,
        title: 'The Wheater APP',
        description: 'Is a simple weather app. You just need to enter the name of any city and the app will show you what the weather is like there now. The application uses an API for the weather. The application is developed in React js ,and for styles it uses the Scss preprocessor',
        skills: [{x: "icon-react-original-wordmark"}, {x: "icon-sass-original"}],
        github: 'https://github.com/ArmanMesropyan/weather_app'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        link: 'https://armanmesropyan.github.io/login_page/',
        cover: loginAPP,
        title: 'The Login Page',
        description: 'Here is a sample login page. Which has a validation of inputs. the project is developed in React.js and for the styles we use the Scss preprocessor',
        skills: [{x: "icon-react-original-wordmark"}, {x: "icon-sass-original"}],
        github: 'https://github.com/ArmanMesropyan/login_page'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        link: 'https://armanmesropyan.github.io/assets/',
        cover: assets,
        title: 'The Assets',
        description: "Here let's talk about the Assets project, it's just my personal project to improve my skills. This project has a lot of layout, as well as a lot of functionality. there is a sorting of goods, two kinds of calculator. 1 calculator is the usual calculator that we are used to see. and 2 calculator is to understand a person who works a week as much money will work a month for a year and a day. the project is developed in React.js and for the styles we use the Scss preprocessor",
        skills: [{x: "icon-react-original-wordmark"}, {x: "icon-sass-original"}],
        github: 'https://github.com/ArmanMesropyan/assets'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        link: 'https://armanmesropyan.github.io/armanWebsite/',
        cover: todo,
        title: 'The Todo APP',
        description: 'This project shows the todo app. Functional todo list with the ability to add a new todo, delete todo, cross out todo',
        skills: [{x: "icon-react-original-wordmark"}, {x: "icon-sass-original"}],
        github: 'https://github.com/ArmanMesropyan/armanWebsite'
    },
    {
        id: Math.random().toString(36).substr(2, 9),
        link: 'https://armanmesropyan.github.io/armanWebsite/#/newpage',
        cover: store,
        title: 'The Mobile Store',
        description: 'This project shows an example of a store. In which there is a lot of functionality example ` you can add a new category, a new product, put the price and so on, the project has a working sorting of goods. Basket in which to add the goods you want and click on the button to add to cart. You can buy something and the program will tell you how much it cost',
        skills: [{x: "icon-react-original-wordmark"}, {x: "icon-sass-original"}],
        github: 'https://github.com/ArmanMesropyan/armanWebsite/tree/master/src/newPage'
    },
]