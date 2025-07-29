import { uid } from 'uid';

class Book {
    /**
     * User Story: Have a template for book data
     * @param {string} title // required 
     * @param {string} author 
     * @param {string} date // published date yyyy-mm-dd 
     * @param {string} note 
     * @param {boolean} mark
     */
    constructor(title, author, date, note, mark) {
        this.title = title;
        this.author = author;
        this.date = date;
        this.note = note;
        this.mark = mark;
        this.id = uid(24);
    }
}

export default Book;