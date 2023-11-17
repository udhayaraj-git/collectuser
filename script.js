function getUserInput() {
    var username = document.getElementById("username").value;
    var outputElement = document.getElementById("output");

    if (username.trim() === "") {
        outputElement.innerText = "Please enter a valid username.";
    } else {
        outputElement.innerText = "Hello, " + username + "! Welcome to the User Input Program!";
    }
}
