import { MongoClient } from "mongodb";

const URI = " "

const client = new MongoClient(URI); 

export const db = client.db("spotfyAula");


/* async function newFunction() {
    const songCollection = await db.collection("songs").find({}).toArray();

    console.log(songCollection);
} */

