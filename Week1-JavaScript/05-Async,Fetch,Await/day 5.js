async function showUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  for (let post of posts.slice(0, 5)) {
    console.log(`Post: ${post.title}`);
  }
}
showUsers();
