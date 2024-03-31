import React from 'react';

function BookDetails({ title, author, genre }) {
  return (
    <div className="book-details">
      <h3>{title}</h3>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Genre:</strong> {genre}</p>
    </div>
  );
}

export default BookDetails;