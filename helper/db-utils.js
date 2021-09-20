import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.9lsnp.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;

export async function connectDatabase() {
  const client = await MongoClient.connect(
    connectionString,
    // "mongodb+srv://pashootan:<password>@cluster0.9lsnp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useUnifiedTopology: true }
  );
  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

export async function getAllDocument(client, collection, sort) {
  const db = client.db();

  const documents = await db.collection(collection).find().sort(sort).toArray();

  return documents;
}
