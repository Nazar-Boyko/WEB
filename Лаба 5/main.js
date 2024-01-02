import {bild_quiz, questions} from './js/bild_quiz.js';
import bild_sidebar from './js/bild_sidebar.js';
import bild_from from './js/bild_form.js';

var quiz_container = bild_quiz();
var sidebar = bild_sidebar();

let test_container = document.getElementById("test-container-id");
test_container.appendChild(quiz_container);
test_container.appendChild(sidebar);

document.getElementById('send-button').addEventListener('click', function () {
    var score = calc_score();
    bild_from();

    document.getElementById('end-button').addEventListener('click', function () {
        var name = document.getElementById("Name").value;
        var group = document.getElementById("Group").value;

        show_result(name, group, score);
    });
});
  

const dragItems = document.querySelectorAll('.option');
if (dragItems.length > 0) {
    dragItems.forEach(dragItem => {
        dragItem.addEventListener('dragstart', handlerDragstart);
        dragItem.addEventListener('dragend', handlerDragend);
    });
}

const dropZones = document.querySelectorAll('.options-container');
if (dropZones.length > 0) {
    dropZones.forEach(dropZone => {
        dropZone.addEventListener("dragenter", handlerDragenter);
        dropZone.addEventListener("dragover", handlerDragover);
        dropZone.addEventListener("drop", handlerDrop);
    });
}

function handlerDragstart(event) {
    event.dataTransfer.setData("option", this.dataset.item);
    this.classList.add("option--active");
}

function handlerDragend(event) {
    this.classList.remove("option--active");
}

function handlerDragenter(event) {
    event.preventDefault();
}

function handlerDragover(event) {
    event.preventDefault();
}

function handlerDrop(event) {
    const dragFlag = event.dataTransfer.getData("option");
    const dragItem = document.querySelector(`[data-item="${dragFlag}"]`);

    this.append(dragItem);

    var optionsContainer = document.getElementById('options-container');

    var elements = optionsContainer.querySelectorAll('.option');

    if (elements.length > 0) {
        optionsContainer.style.padding = '10px';
    } else {
        optionsContainer.style.padding = '28px';
    }
}


function show_result(name, group, result) {
    let form_div = document.getElementById("user-form-id");
    form_div.remove();
    
    let result_div = document.createElement("div")
    result_div.id = "result-parent-id";
    if (result < 0){
        result = 0;
    }
    result_div.innerHTML += `
        <div class = "result-div">
        <p>Вітаємо вас ${name} група ${group} з завершенням тесту</p><br>
        <p>Результати:</p><br>
        <p>Ви набрали ${result} балів з 15</p><br>
        </div>
    `;

    var hearder = document.getElementById("header");
    document.body.insertBefore(result_div, hearder.nextSibling);
}

function calc_score() {
    var parentElement = document.getElementById('quiz-container-id');

    var score = 0;

    parentElement.childNodes.forEach((child,index) => {
        if (child.id === "test-drag-drop"){

            var list = [];
            child.lastChild.childNodes.forEach(child_child => {
                list.push(child_child.innerText);
            });
            if(check(list, questions[index].correctAnswer)){
                score += questions[index].correctAnswer.length;
            }
        }
        else if (child.id === "test-radio"){
            child.childNodes.forEach(child_child => {
                if (child_child.tagName === "INPUT"){
                    if (child_child.checked && child_child.value === questions[index].correctAnswer){
                        score++;
                    }
                }
            });
        } 
        else if (child.id === "test-checkbox"){
            var list = [];
            child.childNodes.forEach(child_child => {
                if (child_child.tagName === "INPUT"){
                    if (child_child.checked){
                        list.push(child_child.value);
                    }
                }
            });

            list.forEach(item => {
                if(questions[index].correctAnswer.includes(item)) {
                    score += 1;
                }
                else{
                    score -= 1;
                }                
            });

        }
        else if(child.id === "test-list"){
            if (child.childNodes[1].value === questions[index].correctAnswer){
                score++
            }
        }

    
    });

    return score;

}


function check(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

