var quote=[
    {
       qoute: '“Be yourself; everyone else is already taken.”',
       Auther: '― Oscar Wilde'
    },
    {
        qoute: "“You only live once, but if you do it right, once is enough.”",
        Auther: '― Mae West'
     },
     {
        qoute: '“So many books, so little time.”',
        Auther: '― Frank Zappa'
     },
     {
        qoute: '“A room without books is like a body without a soul.”',
        Auther: '― Marcus Tullius Cicero'
     },
     {
        qoute: "“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        Auther: '― Dr. Seuss'
     },
     {
        qoute: "“Be the change that you wish to see in the world.",
        
        Auther: '― Mahatma Gandhi'
     }
];
function displayqoute(){
var randomQuote = quote[Math.floor(Math.random()*quote.length)];
document.getElementById("quote").innerHTML= randomQuote.qoute;
document.getElementById("auther").innerHTML= randomQuote.Auther;

}
