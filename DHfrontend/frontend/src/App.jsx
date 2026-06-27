import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function getPosts() {
    try {
      setLoading(true);
      

      const response = await axios.get(
  `${import.meta.env.VITE_API_URL}/posts`
);

      setPosts(response.data.posts);
      setError("");
    } catch (error) {
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  }

  async function handleDelete(id) {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/posts/${id}`
      );

      const updatedPosts = posts.filter(
        (post) => post._id !== id
      );

      setPosts(updatedPosts);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/posts`,
        {
          title,
          content
        }
      );

      setPosts([
        ...posts,
        response.data.post
      ]);

      setTitle("");
      setContent("");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getPosts();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        Loading...
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Fullstack Blog App</h1>

      <form
        className="post-form"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <textarea
          placeholder="Enter content"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <button type="submit">
          Create Post
        </button>
      </form>

      {error && (
        <p className="error">
          {error}
        </p>
      )}

      <div className="posts-section">
        {posts.map((post) => (
          <div
            className="post-card"
            key={post._id}
          >
            <h3>{post.title}</h3>

            <p>{post.content}</p>

            <button
              className="delete-btn"
              onClick={() =>
                handleDelete(post._id)
              }
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;