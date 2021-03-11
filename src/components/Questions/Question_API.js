const Question_API = [
    {
        question: "Which Language is used for functionality in Web Development?",
        answers: ["BootStrap","JavaScript","HTML","CSS"],
        correct: "JavaScript",
        questionId: "06315261"
    },
    {
        question: "To make your website mobile friendly, you can make your website?",
        answers: ["Reactive","Responsive","Fast Loading","Light"],
        correct: "Responsive",
        questionId: "06315531"
    },
    {
        question: "What does CSS stand for?",
        answers: ["Current Style Sheets","Current Sheets Style","Cascading Style Sheets","Cascading Sheets Style"],
        correct: "Cascading Style Sheets",
        questionId: "06334261"
    },
    {
        question: "SQL stands for ?",
        answers: ["Structured Query Language","Statistical Query Language","Superior Questions Lot","Standard Query Lot"],
        correct: "Structured Query Language",
        questionId: "06300261"
    },
    {
        question: "Which of the following softwares could be used to build a website?",
        answers: ["Power Point","Excel","Dream Weaver","ERP"],
        correct: "Dream Weaver",
        questionId: "06364261"
    },
    {
        question: "Which of the following is not a CMS?",
        answers: ["WordPress","Drupal","Magneto","SAP"],
        correct: "Somil",
        questionId: "06313361"
    },
    {
        question: "Which of the following is not a web hosting company?",
        answers: ["Hostgator","Blue Host","WPX Hosting","Facebook"],
        correct: "Facebook",
        questionId: "06665261"
    },
    {
        question: "Web page editors works on a ____ principle?",
        answers: ["WWW","HTML","WYSIWYG","WYGWYSI"],
        correct: "WYSIWYG",
        questionId: "06377261"
    }
];

export default (n = 5) => Promise.resolve(Question_API.sort(() => 0.5 - Math.random()).slice(0,n));

//To learn about Promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// To learn about Promise.resolve()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve