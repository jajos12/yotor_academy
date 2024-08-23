import { MongoClient, ObjectId } from "mongodb";
export default async function connectToDB() {
  const client = new MongoClient(process.env.MONGODB_URI!, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  });

  await client.connect();
  return client;
}
