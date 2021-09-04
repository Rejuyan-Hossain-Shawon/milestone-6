function loaddata() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displayPost(data))
}
loaddata();

function displayPost(posts) {
    const section = document.getElementById("posts");
    for (const post of posts) {
        console.log(post);
        const article = document.createElement("article");
        article.classList.add("article");
        article.innerHTML = `<h3>${post.title}</h3>
        <p>${post.body}</p>
        `;
        section.appendChild(article);

    }

}