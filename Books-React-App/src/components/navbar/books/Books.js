

import React from 'react';
import BookDetails from './BookDetails';

function Books() {
  return (
    <div className='books'>
      <div className='container'>
        <h2>My Favorite Books</h2>
        <p>These are my top five books:</p>
        <ul className='dot-list'>
          <li>
            <BookDetails
              title="Moby Dick"
              author="Herman Melville"
              genre="Adventure"
            />
            <BookDetails
              title='Romeo And Juliet'
              author='William Shakespeare'
              genre='Tradegy'
            />
            <BookDetails
              title='Hunger Games'
              author='Suzanne Collins'
              genre='Fiction'
            />
            <BookDetails
              title='1984'
              author='George Orwell'
              genre='Fiction'
            />
            <BookDetails
              title='Romeo And Juliet'
              author='William Shakespeare'
              genre='Tradegy'
            />
            <BookDetails
              title='All American Murderer'
              author='James Patterson'
              genre='True Crime'
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Books;
