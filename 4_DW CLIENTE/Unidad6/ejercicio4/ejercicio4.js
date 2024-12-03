document.addEventListener("DOMContentLoaded", iniciar);

function iniciar() {

    div = document.querySelector("div");

    document.querySelector("#textInput").addEventListener("click", crearText);
    document.querySelector("#passwordInput").addEventListener("click", crearPassword);
    document.querySelector("#textarea").addEventListener("click", crearTextArea);
    document.querySelector("#label").addEventListener("click", crearLabel);
    document.querySelector("#imagen").addEventListener("click", crearImagen);
    document.querySelector("#checkbox").addEventListener("click", crearCheckbox);
    document.querySelector("#radio").addEventListener("click", crearRadio);
    document.querySelector("#submit").addEventListener("click", crearSubmit);
    
}

function crearText() {
    let inputTexto = document.createElement("input");
    inputTexto.setAttribute("type", "text");
    inputTexto.setAttribute("placeholder", "Text Input");
    inputTexto.setAttribute("name", prompt("¿Qué nombre tendrá?"));
    div.appendChild(inputTexto);
    div.appendChild(document.createElement("br"))
}
function crearPassword() {
    let inputPassword = document.createElement("input");
    inputPassword.setAttribute("type", "password");
    inputPassword.setAttribute("placeholder", "Password Input");
    inputPassword.setAttribute("name", prompt("¿Qué nombre tendrá?"));
    div.appendChild(inputPassword);
    div.appendChild(document.createElement("br"))
}
function crearTextArea() {
    let textArea = document.createElement("textarea");
    textArea.setAttribute("cols", "40");
    textArea.setAttribute("rows", "5");
    textArea.setAttribute("placeholder", "Text Area");
    textArea.setAttribute("name", prompt("¿Qué nombre tendrá?"));
    div.appendChild(textArea);
    div.appendChild(document.createElement("br"))
}
function crearLabel() {
    let label = document.createElement("label");
    label.appendChild(document.createTextNode(prompt("¿Qué texto tendrá?")))
    label.setAttribute("for", prompt("¿A qué elemento va referido?"));
    div.appendChild(label);
    div.appendChild(document.createElement("br"))
}
function crearImagen() {
    let img = document.createElement("img");
    img.setAttribute("src", prompt("Introduce un enlace a una imágen."));
    div.appendChild(img);
    div.appendChild(document.createElement("br"))
}
function crearCheckbox() {
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", prompt("¿Qué nombre tendrá?"));
    checkbox.setAttribute("value", prompt("¿Qué valor tendrá?"));
    checkbox.setAttribute("id", prompt("¿Qué id tendrá?"));
    div.appendChild(checkbox);
    div.appendChild(document.createElement("br"))
}
function crearRadio() {
    let radio = document.createElement("input");
    radio.setAttribute("type", "radio");
    radio.setAttribute("name", prompt("¿Qué nombre tendrá?"));
    radio.setAttribute("value", prompt("¿Qué valor tendrá?"));
    radio.setAttribute("id", prompt("¿Qué id tendrá?"));
    div.appendChild(radio);
    div.appendChild(document.createElement("br"));
}
function crearSubmit() {
    let submit = document.createElement("input");
    submit.setAttribute("type", "submit");
    submit.setAttribute("name", prompt("¿Qué nombre tendrá?"));
    submit.setAttribute("value", prompt("¿Qué valor tendrá?"));
    div.appendChild(submit);
    div.appendChild(document.createElement("br"));
}