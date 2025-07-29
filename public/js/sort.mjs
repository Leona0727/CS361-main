import Book from './book.mjs';

function sortByTitle( books){

        books.sort((a, b) => a.localeCompare(b));
        return books;
}

export {sortByTitle}