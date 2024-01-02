

function bild_form(){

    let test_container = document.getElementById("test-container-id");
    test_container.remove();


    let div = document.createElement("div");
    div.className = "user-from-div";
    div.id = "user-form-id";
    div.innerHTML += `
        <form id="userForm">
            <h2>Створення форм</h2>
            
            <label for="Group">Введіть назву групи</label>
            <input type = "text" id = "Group" placeholder = "ТР-21" required>
            
            <label for="Name">Введіть прізвище та ім'я</label>
            <input type = "text" id = "Name" placeholder = "Петренко Петро" required>
            <button type="button" id = "end-button"  >Завершити тест</button>
            
            </form>
            `;

    var hearder = document.getElementById("header");
    document.body.insertBefore(div, hearder.nextSibling);
}

export default bild_form;