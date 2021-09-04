function addBorder() {
    const friends = document.getElementsByClassName("friend");
    for (const friend of friends) {
        friend.style.border = "1px solid lightblue";
        friend.style.margin = "5px";
        friend.style.padding = "10px";
        friend.style.borderRadius = "10px";

    }
}

function addContainerBorder() {
    document.getElementById("friends").style.border = "5px solid black";
    document.getElementById("friends").style.borderRadius = "25px";
}

function addBackground() {
    const friends = document.querySelectorAll(".friend");
    for (friend of friends) {
        friend.style.backgroundColor = "purple";
    }

}

function addFriend() {
    const friend = document.createElement("div");
    friend.classList.add('friend');
    friend.innerHTML = `<h3 class="friend-name">New Friend Added</h3>
    <p>A, quis.</p>`;
    document.getElementById("friends").appendChild(friend);

}

function nameColor() {
    const h3Tags = document.querySelectorAll("#friends .friend h3");
    for (const h3 of h3Tags) {
        h3.style.color = "goldenrod";
        h3.style.fontSize = "30px";
        h3.style.fontWeight = "900";

    }
}


const friends = document.getElementsByClassName("friend");
for (const friend of friends) {
    friend.addEventListener("click", function() {
        friend.parentNode.removeChild(friend);
        console.log();
    })
}