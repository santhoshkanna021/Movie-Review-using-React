import { useState } from "react";

function ReviewForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { title, content, rating: Number(rating) };

    const res = await fetch("http://localhost:5000/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newReview),
    });

    if (res.ok) {
      setTitle("");
      setContent("");
      setRating("");
      window.location.reload(); // refresh the list
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md mb-6 max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">Add a Review</h2>
      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 border mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Your review"
        className="w-full p-2 border mb-2"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        className="w-full p-2 border mb-2"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
}

export default ReviewForm;
