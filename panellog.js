function loguear() {
    
    let user = document.getElementById("input1").value;
    let clave = document.getElementById("input2").value;
    
    if (user === "DDFF" && clave === "1234") {
        window.location = "panel2.html";
    } else {
        alert("Datos incorrectos");
    }
}
