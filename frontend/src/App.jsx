import React from "react";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">📚 Movie/Book Review App</h1>
      <ReviewForm />
      <ReviewList />
    </div>
  );
}

export default App;
