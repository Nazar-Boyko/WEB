const questions = [
    {
        question: "Як створити текстове поле в HTML?",
        options: ["input type='text'", "'text-field'", "textarea", "input text='field'"],
        correctAnswer: "input type='text'",
        type: "radio"
    },
    {
        question: "Як зробити вибір зі списку (dropdown) в HTML?",
        options: ["select", "dropdown", "input type='dropdown'", "list"],
        correctAnswer: ["select"],
        type: "checkbox"
    },
    {
        question: "Як правильно визначити чекбокс в HTML?",
        options: ["input type='check'", "checkbox", "input type='checkbox'", "check"],
        correctAnswer: "input type='checkbox'",
        type: "radio"
    },
    {
        question: "Як створити кнопку в HTML?",
        options: ["button", "input type='button'", "btn", "submit"],
        correctAnswer: ["button"],
        type: "checkbox"
    },
    {
        question: "Як визначити радіокнопку в HTML?",
        options: ["radio", "input type='radio'", "option", "choose"],
        correctAnswer: "input type='radio'",
        type: "radio"
    },
    {
        question : "Як вивести кнопку для відправлення форми?",
        options : ["sumbit", "input type = 'sumbit'", "button type = 'sumbit'", "send"],
        correctAnswer : ["input type = 'sumbit'", "button type = 'sumbit'"],
        type : "checkbox"
    },
    {
        question : "Як зробити поле вводу доступним тільки для читання (read-only)?",
        options : ["input readonly","input type = 'text' redonly = 'true'","readonly-input","text readonly"],
        correctAnswer : ["input readonly","input type = 'text' redonly = 'true'"],
        type : "checkbox"
    },
    {
        question: "Як створити текстове поле для введення паролю в HTML?",
        options: ["input type='password'", "password-field", "secure-input", "input type='text' password"],
        correctAnswer: "input type='password'",
        type: "list"
    },
    {
        question: "Як зробити поле для завантаження файлу в HTML?",
        options: ["input type='upload'", "file-input", "upload-file", "input type='file'"],
        correctAnswer: "input type='file'",
        type: "list"
    },
    {
        question : "Розташуйте елементи HTML форми в правильному порядку створення:",
        options : ["form", "input type = 'text' name = 'username'", "label for = 'username'", "button type = 'sumbit'"],
        correctAnswer : ["form", "label for = 'username'", "input type = 'text' name = 'username'","button type = 'sumbit'"],
        type : "drag-drop"
    },
];


function mix(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

const quizContainer = document.createElement('div');
quizContainer.className = "quiz-container";
quizContainer.id = "quiz-container-id";


function addQuiz(index, q, questionElement) {
    const type = q.type;
    questionElement.className = "test"
    questionElement.id = `test-${q.type}`;
    mix(q.options);
    q.options.forEach((option, optionIndex) => {
        const inputId = `q${index}-option${optionIndex}`;
        questionElement.innerHTML += `
            <input type="${type}" name="q${index}" id="${inputId}" value="${option}">
            <label for="${inputId}">${option}</label><br>
        `;
    });

    quizContainer.appendChild(questionElement);
}

function addQuizSelectList(q, index,questionElement){
    questionElement.className = "test"
    questionElement.id = `test-${q.type}`;

    const select = document.createElement("select");
    select.className = `select-list`;
    select.innerHTML += `
           <option value = "" disabled selected>Оберіть відповідь</options>
        `;
    mix(q.options);
    q.options.forEach((option, optionIndex) => {
        select.innerHTML += `
           <option value = "${option}">${option}</options>
        `;
    });
    questionElement.appendChild(select);
    quizContainer.appendChild(questionElement);
}

function addQuizDrop(q, questionElement) {
    questionElement.className = "test";
    questionElement.id = `test-${q.type}`;
    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-container';
    optionsContainer.id = 'options-container'
    mix(q.options);
    q.options.forEach((option, optionIndex) => {
        optionsContainer.innerHTML += `
            <div class="option" data-item="${optionIndex + 1}"draggable="true">${option}</div>
        `;
    });
    questionElement.appendChild(optionsContainer);
    quizContainer.appendChild(questionElement);
    questionElement.innerHTML += '<div class="options-container" id = "container"></div>';
}


function bild_quiz (){

    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${index + 1}. ${q.question}</p>`;

        if (q.type === 'list'){
            addQuizSelectList(q,index,questionElement);
        }
        else if (q.type === 'drag-drop') {
            addQuizDrop(q, questionElement);
            
        }
        else {
            addQuiz(index, q, questionElement);
        }
    });

    
    return quizContainer;
}

export {bild_quiz, questions};
