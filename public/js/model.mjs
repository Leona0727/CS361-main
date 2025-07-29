import Book from './book.mjs';


/**
     * @param {string} title // required 
     * @param {string} author 
     * @param {string} date // published date yyyy-mm-dd 
     * @param {string} note 
     * @param {boolean} mark
     */
function createBook(title, author, date, note, mark){
    const book = new Book(title, author, date, note, mark)
    return book
}

function getBooks(title){
    if(title === undefined){
        return books;
    } else{
        return books.filter((x) => x.book === book)
     }
}

function getBook(id){
    for(const book of books){
        if(book.id === id){
            return book;
        }
    }
    return undefined;
}
 

// need
function updateBook(id, title, author, date, note, mark){
    for(const book of books){
        if(book.id === id){ // having id
            if (book.title !== ""){book.title = title;}
            if (book.author !== ""){book.author = author;}
            if (book.date !== ""){book.date = date;}
            if (book.note !== ""){book.note = note;}
            book.mark = mark;

            return book; // end of if
        }
    }
    return undefined;
}

function deleteBook(id){
    for(let i = 0; i < orders.length; i++){
        if(orders[i].id === id){
            orders.splice(i, 1)
            return 1;
        }
    }
    return 0;
}

export {createBook, getBooks, getBook, updateBook, deleteBook};