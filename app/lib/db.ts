import { Db, MongoClient, ObjectId, Collection } from "mongodb";

interface User {
  _id: ObjectId;
  full_name: string;
  email: string;
  hashed_password: string;
}

export async function getUser(userId: string): Promise<User | null> {
  const client = new MongoClient(process.env.MONGODB_URI!);
  await client.connect();
  const db: Db = client.db();
  const users: Collection<User> = db.collection("users");
  const user: User | null = await users.findOne({ _id: new ObjectId(userId) });
  await client.close();
  return user;
}
