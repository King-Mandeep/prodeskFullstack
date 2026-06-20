import Post from "../models/post.js";

export async function getAllPosts(req, res) {
  try {
    const posts = await Post.find();

    res.status(200).json({
      posts
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch posts"
    });
  }
}

export async function getPostById(req, res) {
  try {
    const post = await Post.findById(
      req.params.id
    );

    if (!post) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch post"
    });
  }
}

export async function createPost(
  req,
  res
) {
  try {
    const { title, content } =
      req.body;

    const newPost =
      await Post.create({
        title,
        content
      });

    res.status(201).json({
      message:
        "Post created successfully",
      post: newPost
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to create post"
    });
  }
}

export async function updatePost(
  req,
  res
) {
  try {
    const { title, content } =
      req.body;

    const updatedPost =
      await Post.findByIdAndUpdate(
        req.params.id,
        {
          title,
          content
        },
        {
          new: true
        }
      );

    if (!updatedPost) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    res.status(200).json({
      message:
        "Post updated successfully",
      post: updatedPost
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update post"
    });
  }
}

export async function deletePost(
  req,
  res
) {
  try {
    const deletedPost =
      await Post.findByIdAndDelete(
        req.params.id
      );

    if (!deletedPost) {
      return res.status(404).json({
        message: "Post not found"
      });
    }

    res.status(200).json({
      message:
        "Post deleted successfully",
      post: deletedPost
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete post"
    });
  }
}