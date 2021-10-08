function confirming() {
    var name = prompt("Type your name:");

    if (name == null || name == "") {
        alert("Name not entered!");
    } else {
        window.location.href = `https://api.whatsapp.com/send?phone=5500000000000&text=I%20${name}%20confirm%20my%20presence%20at%20the%20halloween%20party`;
    }
}