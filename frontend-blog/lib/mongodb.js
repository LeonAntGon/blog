import { MongoClient } from "mongodb";

if(!process.env.MONGODB_URI){
    throw new Error('Invalid/Missing Environment variable: "MONGODB_URI"')
}

const uri = process.env.MONGODB_URI
const option = {}

let client
let clientPromise

if (process.env.NODE_ENV === "development"){
    if(!global.mongoClientPromise){
        client = new MongoClient(uri, option)
        global._mongoClientPromise = client.connect()
    }

    clientPromise = global._mongoClientPromise
} else {
    client = new MongoClient(uri, option)
    clientPromise = client.connect()
}

//export a module-scoped MongoClient promise. by doing this in a separate
//module, the client can be shared across functions.

export default clientPromise