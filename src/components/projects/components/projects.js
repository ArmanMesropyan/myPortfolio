import wheaterAPP from '../../../assets/projects/whether-APP.png'
import loginAPP from '../../../assets/projects/login-app.png'
import assets from '../../../assets/projects/assets.png'
import todo from '../../../assets/projects/todo.png'
import store from '../../../assets/projects/store.png'
export let myProjects = [
    {
        id:Math.random().toString(36).substr(2,9),
        link:'https://armanmesropyan.github.io/weather_app/',
        cover:wheaterAPP,
        title:'The Wheater APP',
        description:'Is a simple weather app. You just need to enter the name of any city and the app will show you what the weather is like there now. The application uses an API for the weather. The application is developed in React js ,and for styles it uses the Scss preprocessor',
        skills: {react:"icon-react-original-wordmark",  scss: "icon-sass-original" } 
    },
    {
        id:Math.random().toString(36).substr(2,9),
        link:'https://armanmesropyan.github.io/login_page/',
        cover:loginAPP,
        title:'The Login Page',
        description:'Here is a sample login page. Which has a validation of inputs. the project is developed in React.js and for the styles we use the Scss preprocessor',
        skills: {react:"icon-react-original-wordmark",  scss: "icon-sass-original" } 
    },
    {
        id:Math.random().toString(36).substr(2,9),
        link:'https://armanmesropyan.github.io/assets/',
        cover:assets,
        title:'The Assets',
        description:"Here let's talk about the Assets project, it's just my personal project to improve my skills. This project has a lot of layout, as well as a lot of functionality. there is a sorting of goods, two kinds of calculator. 1 calculator is the usual calculator that we are used to see. and 2 calculator is to understand a person who works a week as much money will work a month for a year and a day. the project is developed in React.js and for the styles we use the Scss preprocessor",
        skills: {react:"icon-react-original-wordmark",  scss: "icon-sass-original" } 
    },
    {
        id:Math.random().toString(36).substr(2,9),
        link:'https://armanmesropyan.github.io/armanWebsite/',
        cover:todo,
        title:'The Todo APP',
        description:'This project shows the todo app. Functional todo list with the ability to add a new todo, delete todo, cross out todo',
        skills: {react:"icon-react-original-wordmark",  scss: "icon-sass-original" } 
    },
    {
        id:Math.random().toString(36).substr(2,9),
        link:'https://armanmesropyan.github.io/armanWebsite/#/newpage',
        cover:store,
        title:'The Mobile Store',
        description:'This project shows an example of a store. In which there is a lot of functionality example ` you can add a new category, a new product, put the price and so on, the project has a working sorting of goods. Basket in which to add the goods you want and click on the button to add to cart. You can buy something and the program will tell you how much it cost',
        skills: {react:"icon-react-original-wordmark",  scss: "icon-sass-original" } 
    },
    
]