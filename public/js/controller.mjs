import express from 'express';
import * as Book from './class.mjs';

const PORT = 3000;

const app = express();

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});



function isValid(req){
    const title = req.body.title;
    if(title === undefined || typeof(title) !== 'string' || title.length < 2){
        return false;
    }
    else{
        return true;
    }
}

/**
     * User Story: Have a template for book data
     * @param {string} title // required 
     * @param {string} author 
     * @param {string} date // published date yyyy-mm-dd 
     * @param {string} note 
     * @param {boolean} mark
     */
app.post('/class', (req, res) => {
    if(!isValid(req)){
        res.status(400).json({Error: 'Invalid request'})
    } else{
        let author = "";
        let date = "";
        let note = "";
        let mark = false;
        if (req.body.author !== undefined){ author = req.body.author;}
        if (req.body.date !== undefined){ author = req.body.date;}
        if (req.body.note !== undefined){ author = req.body.note;}
        if (req.body.mark !== undefined){ author = req.body.mark;}
        const book = model.createBook(req.body.title, author, date, note, mark)
        res.status(201).json(book)
    }
});

app.get('/class', (req, res) =>{
        const books = model.getBooks(req.query.title);
            res.json(books)
    });

app.get('/class/:id', (req, res) =>{
  const book = model.getBook(req.params.id)
    if (book === "undefined"){
        res.status(404).json({Error: 'Not found'})
    }
    else {
      res.json(book)
    }
});

// User Story: Edit the list of books
app.put('/class/:id', (req, res) => {
    if (!isValid(req)){
    const quantity = req.body.quantity;
    if(!Number.isInteger(quantity) || quantity < 1){
        res.status(400).json({Error: 'Invalid request'})
    } else{
        const order = model.updateOrder(req.params.id, req.body.quantity);
        if(order === undefined){
            res.status(404).json({Error: 'Not found'})
        } else{
            res.json(order);
        }
    }
}
else {res.status(400).json({Error: 'Invalid request'})}
});

app.delete('/class/:id', (req, res) => {
    const numDeleted = model.deleteBook(req.params.id);
    if(numDeleted === 1){
        res.status(204).send();
    } else{
        res.status(404).json({Error: "Not found"})
    }
});