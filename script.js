// Array of items containing programming languages, frameworks & technologies
// Each item has a name and description that can be searched

const items = [
    {
        name: "JavaScript",
        description: "Popular scripting language for web development"
    },
    {
        name: "Python",
        description: "Versatile language for data science and web apps"
    },
    {
        name: "React",
        description: "JavaScript library for buliding user interfaces"
    },
    {
        name: "Vue.js",
        description: "JavaScript runtime built on chrome V8 engine"
    },
    {
        name: "TypeScript",
        description: "Typed superset of JavaScript"
    },
    {
        name: "CSS",
        description: "Style sheet langauage for web design"
    },
    {
        name: "HTML",
        description: "Standard markup language for web pages"
    },
    {
        name: "SQL",
        description: "Language for managing relational database"
    },
    {
        name: "MongoDB",
        description: "NoSQL database program"
    },
    {
        name: "Express.js",
        description: "Web application framework for Node.Js"
    }
];

//DOM element references -- these connect to HTML elements in the page
const searchInput = document.getElementById("searchInput"); // Input field where user types search query 
const itemList = document.getElementById("itemList"); // Container to display filtered result
const resultsCount = document.getElementById("resultsCount"); // Element to show count of matching items
const clearBtn = document.getElementById("clearBtn"); // Button to clear the search input

/**
 * Highlights matching text in the search results
 * @param {string} text - the original text to search within
 * @param {string} query - the search term to highlight 
 * @resturns {string} - HTML string with highlighted matches wrapped in <mark> tags
 */
