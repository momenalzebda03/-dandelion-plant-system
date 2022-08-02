var click = function () {

    var number = document.getElementById("number").value;
    var password = document.getElementById("password").value;

    if (number === "20210175" && password === "17435") {

        window.open("http://127.0.0.1:5500/employee1.html");
    } else
    document.write("look to number and password");
}

document.getElementById("submit").onclick = click;