import mongoose from 'mongoose';
import 'dotenv/config';

const TASK_DB_NAME = 'task_db';
const TASK_COLLECTION = 'tasks';

let connection = undefined;

async function connect(dropCollection){
    try{
        connection = await createConnection();
        console.log("Successfully connected to MongoDB using Mongoose!");
        if(dropCollection){
            await connection.db.dropCollection(TASK_COLLECTION);
        }
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

async function createConnection(){
    await mongoose.connect(process.env.MONGODB_CONNECT_STRING, 
                {dbName: MOVIE_DB_NAME});
    return mongoose.connection;
}

const taskSchema = mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: false },
    month: { type: Number, required: false },
    day: { type: Number, required: false },
    hour: { type: Number, required: false },
    minute: { type: Number, required: false },
    completed: { type: Boolean, required: false },
    reminder: { type: Boolean, required: false },
    comment: { type: String, required: false }
}, {collection: 'myTaskCollection'});

const Task = mongoose.model("Task", taskSchema); 
const task = new Task({ name: "Festival", year: 2025, month : 7, day : 4, hour : 10, minute : 0,
    completed : false, reminder : false, comment: "Reservation" });
movie.save();

const createTask = async (name, year, month, day, hour, minute, completed, reminder, comment) => { 
    // Call the constructor to create an instance of the model class Movie
    const movie = new Task({ name: name, year: year, month : month, day : day, hour : hour, minute : minute,
         completed : completed, reminder : reminder, comment: comment }); 
    // Call save to persist this object as a document in MongoDB 
    return task.save();
  }

const deleteById = async (_id) => {
    const result = await Task.deleteOne({ _id: _id });
    return result.deletedCount;
}

export { connect };