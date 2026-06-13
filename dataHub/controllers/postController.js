import blogPosts from "../data/posts.js";

export function getAllPosts(req, res) {
  res.status(200).json({
    posts: blogPosts
  });
}

export function getPostById(req, res) {
  const postId = Number(req.params.id);

  const post = blogPosts.find(
    (item) => item.id === postId
  );

  if (!post) {
    return res.status(404).json({
      message: "Post not found"
    });
  }

  res.status(200).json(post);
}

export function createPost(req, res) {
  const { title, content } = req.body;

  const newPost = {
    id: Date.now(),
    title,
    content
  };

  blogPosts.push(newPost);

  res.status(201).json({
    message: "Post created successfully",
    post: newPost
  });
}

export function updatePost(req, res) {
  const postId = Number(req.params.id);

  const index = blogPosts.findIndex(
    (item) => item.id === postId
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Post not found"
    });
  }

  const { title, content } = req.body;

  blogPosts[index] = {
    ...blogPosts[index],
    title,
    content
  };

  res.status(200).json({
    message: "Post updated successfully",
    post: blogPosts[index]
  });
}

export function deletePost(req, res) {
  const postId = Number(req.params.id);

  const index = blogPosts.findIndex(
    (item) => item.id === postId
  );

  if (index === -1) {
    return res.status(404).json({
      message: "Post not found"
    });
  }

  const deletedPost =
    blogPosts[index];

  blogPosts.splice(index, 1);

  res.status(200).json({
    message: "Post deleted successfully",
    post: deletedPost
  });
}