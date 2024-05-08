import {MongoClient} from "mongodb";


let db; 

async function connectToDB(cb){
    const url = 'mongodb+srv://bora1132004:Ganesh1907@cluster0.a93zhxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("NFT_MARKET");
    cb();
}

export {db,connectToDB};