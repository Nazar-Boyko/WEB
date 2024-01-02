

function bild_sidebar(name, group){

    const sidebar = document.createElement("div");
    sidebar.className = "sidebar";

    sidebar.innerHTML += `
        <div class = sidebar-border>
            <div class = "center-element"><h2>Завдання</h2></div>
            <p class = "first">Розробити тест на тему "Створення форм".На сторінці зверху вуликими літерами,повинно бути - Група та ПІБ студента.Тест повинен містити такі завдання:</p>
            <p>* запитання з однією вірною відповіддю(radio)<p>
            <p>* запитання з декількома вірними відповідями(checkbox)<p>
            <p>* запитання з вибором відповіді з випадаючого списку<p>
            <p>* завдання на встановлення відповідності(dragdrop)<p>
            <div class = "center-element"><button type = "button" id = "send-button">Надіслати</button></div>
        </div>
    `;

    return sidebar;
}

export default bild_sidebar;