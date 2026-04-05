import { MongoClient, MongoClientOptions } from "mongodb";

const uri = process.env.MONGODB_URI || '';
const options: MongoClientOptions = {};

let clientPromise: Promise<MongoClient> | null = null;

function getClientPromise() {
  if (typeof window !== 'undefined') {
    return null; // Client-side
  }

  if (!clientPromise && uri) {
    const client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }

  return clientPromise;
}

export default getClientPromise();

