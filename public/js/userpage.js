const postEditHandler = async (event) => {
  event.preventDefault();
  console.log("clicked postEdit");
  const post_id = parseInt(event.target.closest(".post-Card").getAttribute("data-post-id"));
  const title = event.target.querySelector(".title-edit").value.trim();
  const content = event.target.querySelector(".userpost-edit").value.trim();

  console.log(post_id);
  console.log(typeof post_id);

  if (title && content) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        post_content: content,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document.addEventListener("submit", function (event) {
  if (event.target.classList.contains("reEditBlog")) {
    postEditHandler(event);
  }
});
