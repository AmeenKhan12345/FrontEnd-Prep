let allPosts = [];

document.getElementById("loadBtn").addEventListener("click", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  allPosts = await response.json();
  showPosts(allPosts);
});

document.getElementById("searchInput").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filtered = allPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm)
  );
  showPosts(filtered);
});

function showPosts(posts) {
  const container = document.getElementById("postsContainer");
  container.innerHTML = ""; // Clear previous

  posts.slice(0, 10).forEach(post => {
    const div = document.createElement("div");
    div.className = "post";
    div.textContent = `📝 ${post.title}`;
    container.appendChild(div);
  });
}
