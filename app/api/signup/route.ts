import crypto from "crypto";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { MongoClient, Db, Collection, InsertOneResult } from "mongodb";
import { sendVerificationEmail } from "@/lib/email";

interface User {
  full_name: string;
  email: string;
  hashed_password: string;
  verificationToken?: string;
}

export async function POST(request: NextRequest, response: NextResponse) {
  const { full_name, email, password } = await request.json();
  const salt = await bcrypt.genSalt(10);
  const hashed_password = await bcrypt.hash(password, salt);
  try {
    // Use process object safely
    const client = new MongoClient(process.env.MONGODB_URI!, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });

    await client.connect();
    const db: Db = client.db();
    const users: Collection<User> = db.collection("users");
    const existingUser: User | null = await users.findOne({ email: email });

    if (existingUser) {
      return NextResponse.json({
        body: {
          message: "user exists",
        },
      });
    } else {
      // Generate a unique verification token
      // const verificationToken = crypto.randomBytes(20).toString("hex");
      const user: InsertOneResult<User> = await users.insertOne({
        full_name,
        email,
        hashed_password,
        // verificationToken
      });
      // await sendVerificationEmail(email, verificationToken);
      return new Response(JSON.stringify({ body: user }));
    }
  } catch (err) {
    return NextResponse.json({
      error: "error",
    });
  }
}
