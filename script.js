const Quiz_data =[
    {
        question: 'Who is the father of computer?',
        a: 'Neiper Bones',
        b: 'Charles Babbage',
        c: 'Saad Waqar',
        d: 'None Of These',
        correct: 'c'
    },
    {
        question: 'Who is the father Oracle Financials?',
        a: 'Robet Loffard',
        b: 'harry Styles',
        c: 'Jim Kin',
        d: 'Saad Waqar',
        correct: 'd'
    },
    {
        question: 'Who is the most romantic guy in MMC?',
        a: 'Shan Finance',
        b: 'Saad Waqar',
        c: 'Abid Quershi',
        d: 'Syed Ahsan',
        correct: 'c'
    },
    {
        question: 'Who is the CIO Of MMC?',
        a: 'Kamran Sb',
        b: 'Arsalan Bhai',
        c: 'Kashif Sb',
        d: 'Saad Waqar',
        correct: 'd'
    },
    {
        question: 'Most famous Mobile Phone Developer is?',
        a: 'Saad Waqars',
        b: 'Usama Hingora',
        c: 'The Boss',
        d: 'Usama Rehman',
        correct: 'a'
    }
];

const answers_els = document.querySelectorAll('.answer');
const question_el = document.getElementById("question");
const quiz = document.getElementById("quiz");
 const a_text = document.getElementById("a_text");
 const b_text = document.getElementById("b_text");
 const c_text = document.getElementById("c_text");
 const d_text = document.getElementById("d_text");
 const btn_submit = document.getElementById("Submit");

 let current_quiz = 0;
 let score = 0;
 load_quiz();

 function load_quiz() {
    de_select();
    let current_quiz_data = Quiz_data[current_quiz];
    question.innerText = current_quiz_data.question;
    a_text.innerText = current_quiz_data.a;
    b_text.innerText = current_quiz_data.b;
    c_text.innerText = current_quiz_data.c;
    d_text.innerText = current_quiz_data.d;
    }

 function get_selected(){
    let answer = undefined;

    answers_els.forEach(answer_el => {
       
        if(answer_el.checked) 
        {
            answer =  answer_el.id;
            return answer;
        }
    });
    return answer;
}

function de_select(){
    answers_els.forEach(answer_el => {
    answer_el.checked = false;
})
}

 btn_submit.addEventListener ("click",() => {

    const answer = get_selected();
    console.log(answer);

    if(answer){
        if(answer === Quiz_data[current_quiz].correct)
        {
            score++;
        }
        current_quiz++;
         if(current_quiz < Quiz_data.length)
    {
      load_quiz();
    
    } else
    {
        quiz.innerHTML = `<h2>You Got ${score} / ${Quiz_data.length} marks.</h2> `
    }
    }

}

    
 );