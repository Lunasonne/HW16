


function strings() {
    const div1 = document.getElementById("div1");
    let input = prompt("Введите строку, а для окончания - Отмена");
    while (input !== null) {
        if (input.trim() !== "") {
            const text = document.createTextNode(input);
            const p = document.createElement("p");
            p.appendChild(text);
            div1.appendChild(p);
        }
        input = prompt("Введите строку, а для окончания - Отмена");
    }

}

strings();



