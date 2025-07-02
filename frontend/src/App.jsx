import React, { useEffect, useState } from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

function App() {
  const [reviews, setReviews] = useState([]);

  // Fetch reviews from backend
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // Add a new review
  const addReview = (review) => {
    fetch("/api/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((newReview) => setReviews([newReview, ...reviews]));
  };

  // Delete a review
  const deleteReview = (id) => {
    fetch(`/api/reviews/${id}`, { method: "DELETE" })
      .then(() => setReviews(reviews.filter((r) => r._id !== id)));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Movie/Book Review App</h1>
      <ReviewForm onAdd={addReview} />
      <ReviewList reviews={reviews} onDelete={deleteReview} />
    </div>
  );
}

export default App;