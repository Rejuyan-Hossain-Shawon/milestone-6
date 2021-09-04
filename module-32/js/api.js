const api = function () {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(res => res.json())
        .then(data => console.log(data))
}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUSer(data))
}
function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}
function displayUSer(data) {
    const users = document.getElementById("users");
    for (const user of data) {
        const li = document.createElement("li");
        li.innerText = `Name:${user.name} 
      Email:${user.email}
       `
        users.appendChild(li);
    }

}