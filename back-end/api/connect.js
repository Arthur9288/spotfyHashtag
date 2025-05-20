import { MongoClient } from "mongodb";

const URI = "mongodb+srv://silvarodriguesarthur:HHPpn3YFiVm3oyYb@clusterspot.oaucgoh.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSpot"

const client = new MongoClient(URI); 

export const db = client.db("spotfyAula");


/* async function newFunction() {
    const songCollection = await db.collection("songs").find({}).toArray();

    console.log(songCollection);
} */

