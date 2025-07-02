import { useEffect, useState } from "react";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">All Reviews</h2>
      {reviews.map((review) => (
        <div key={review._id} className="bg-white p-4 rounded shadow mb-4">
          <h3 className="text-lg font-bold">{review.title}</h3>
          <p className="text-gray-700">{review.content}</p>
          <p className="text-yellow-600 font-semibold">Rating: {review.rating}/5</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
