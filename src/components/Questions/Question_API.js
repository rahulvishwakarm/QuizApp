const Question_API = [
    {
        question: "How build the app?",
        answers: ["Vnayak","Sarth","Somil","devesh"],
        correct: "vinayak",
        questionId: "06315261"
    },
    {
        question: "How build the app?",
        answers: ["Vnayak","Sarth","Somil","devesh"],
        correct: "vinayak",
        questionId: "06315261"
    },
    {
        question: "How build the app?",
        answers: ["Vnayak","Sarth","Somil","devesh"],
        correct: "vinayak",
        questionId: "06315261"
    },
    {
        question: "How build the app?",
        answers: ["Vnayak","Sarth","Somil","devesh"],
        correct: "vinayak",
        questionId: "06315261"
    },
    {
        question: "How build the app?",
        answers: ["Vnayak","Sarth","Somil","devesh"],
        correct: "vinayak",
        questionId: "06315261"
    },
    {
        question: "How build the app?",
        answers: ["Vnayak","Sarth","Somil","devesh"],
        correct: "vinayak",
        questionId: "06315261"
    },
    {
        question: "How build the app?",
        answers: ["Vnayak","Sarth","Somil","devesh"],
        correct: "vinayak",
        questionId: "06315261"
    },
    {
        question: "How build the app?",
        answers: ["Vnayak","Sarth","Somil","devesh"],
        correct: "vinayak",
        questionId: "06315261"
    }
];

export default (n = 5) => Promise.resolve(Question_API.sort(() => 0.5 - Math.random()).slice(0,n));

//To learn about Promise
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

// To learn about Promise.resolve()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
