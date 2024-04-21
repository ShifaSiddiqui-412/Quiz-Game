let quiz = [
    {
        question: "1:The concept of gravity was discovered by which famous physicist?",
        opt1: "Bu Ali Seena",
        opt2: "Sir Isaac Newton",
        opt3: "RutherFord",
        copt: "Sir Isaac Newton"
    },
    {
        question: "2:How many bones are in the human body?",
        opt1: "306",
        opt2: "203",
        opt3: "206",
        copt: "206"
    },
    {
        question: "3:What is the biggest planet in our solar system?",
        opt1: "Jupiter",
        opt2: "Saturn",
        opt3: "Mars",
        copt: "Jupiter"
    },
    {
        question: "4:How many teeth does an adult human have?",
        opt1: "31",
        opt2: "30",
        opt3: "32",
        copt: "32"
    },
    {
        question: "5:What is the fastest land animal in the world?",
        opt1: "lion",
        opt2: "deer",
        opt3: "Tiger",
        copt: "Tiger"
    },
    {
        question: "6:Which of the world's oceans in the deepest?",
        opt1: "The Pacific Ocean",
        opt2: "The Atlantic Ocean",
        opt3: "The Indian Ocean",
        copt: "The Pacific Ocean"
    },
    {
        question: "7:What is the longest river in the world?",
        opt1: "The Indus River",
        opt2: "The Nile River",
        opt3: "The Jhehlum River",
        copt: "The Nile River"
    },
    {
        question: "8:In which continent is the Amazon Rainforest located?",
        opt1: "South America",
        opt2: "South India",
        opt3: "North America",
        copt: "South America"
    },
    {
        question: "9:In which year did the Titanic sink?",
        opt1: "1913",
        opt2: "1918",
        opt3: "1912",
        copt: "1912"
    },
    {
        question: "10:What was the name of the first man-made satellite to orbit the Earth?",
        opt1: "Rakesh Sharma",
        opt2: "Sputnik",
        opt3: "Neil Armstrong",
        copt: "Sputnik"
    },
    {
        question: "11:Which sport is known as the 'king of sports'?",
        opt1: "Soccer(Football)",
        opt2: "Cricket",
        opt3: "Hockey",
        copt: "Soccer(Football)"
    },
    {
        question: "12:What is the full form of WHO?",
        opt1: "World Hold Organization",
        opt2: "World Health Organization",
        opt3: "World Handle Organization",
        copt: "World Hold Organization"
    },
    {
        question: "13:Which of the following is used in pencils?",
        opt1: "Graphite",
        opt2: "Silicon",
        opt3: "Charcoal",
        copt: "Graphite"
    },
    {
        question: "14:Chemical formula for water is?",
        opt1: "H2O",
        opt2: "NAO",
        opt3: "SO4",
        copt: "H2O"
    },
    {
        question: "15:The gas usually filled in the electric bulb is?",
        opt1: "Nitrogen",
        opt2: "Hydrogen",
        opt3: "Carbondioxide",
        copt: "Nitrogen"
    }
];


let ques = document.querySelector("#ques")
let opt1 = document.querySelector("#opt1")
let opt2 = document.querySelector("#opt2")
let opt3 = document.querySelector("#opt3")
let btn = document.querySelector("button")
let getoptions = document.querySelectorAll("input")
let idx = 0;
let score = 0;
next();
function next() {
    for (let i = 0; i < getoptions.length; i++) {
        if (getoptions[i].checked) {
            let seloptval = getoptions[i].value
            //console.log(seloptval)
            let selectedques = quiz[idx - 1][`question`]
            //console.log(selectedques)
            let selectedopt = quiz[idx - 1][`opt${seloptval}`]
            // console.log(selectedopt)
            let correctopt = quiz[idx - 1]['copt']
            //console.log(correctopt)
            if (selectedopt == correctopt) {
                score++;
            }
        }


        getoptions[i].checked = false
    }
    if (idx > quiz.length - 1) {
        alert(`Your Score is ${score}/${quiz.length} `)
        score = 0;
        idx = 0;
        next();
    }
    else {
        ques.innerHTML = quiz[idx].question
        opt1.innerHTML = quiz[idx].opt1
        opt2.innerHTML = quiz[idx].opt2
        opt3.innerHTML = quiz[idx].opt3
        idx++;
    }
}
function cl() {
    btn.disabled = false

}