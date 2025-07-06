async function loadUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  const list = document.querySelector("#postContainer");

    posts.slice(0, 5).forEach(post => {
    const h3 = document.createElement("h3");
    h3.textContent = `${post.id} - ${post.title}`;
    list?.appendChild(h3);
  });
}

loadUsers();