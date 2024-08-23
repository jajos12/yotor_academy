import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Db, MongoClient, ObjectId, Collection } from "mongodb";
import { createSession } from "@/app/lib/session";
// import { getSession, SessionData, setSession } from "@/lib/session";

interface User {
  _id: ObjectId;
  full_name: string;
  email: string;
  hashed_password: string;
}
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    const client = new MongoClient(process.env.MONGODB_URI!);
    await client.connect();
    const db: Db = client.db();
    const users: Collection<User> = db.collection("users");
    const user: User | null = await users.findOne({ email: email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }

    const validPassword = await bcrypt.compare(password, user.hashed_password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    const sessionData = {
      user: {
        id: user._id,
        name: user.full_name,
        email: user.email,
        // expiresAt: Date.now() + 86400 * 1000,
      },
    };

    // Set the session in the response
    // const session = setSession(NextResponse.next(), sessionData);
    // const decrypted = getSession(request);

    // const tokenData = {
    //   id: user._id.toString(),
    //   username: user.full_name,
    //   email: user.email,
    // };

    // const token = jwt.sign(tokenData, process.env.JWT_SECRET!, {
    //   expiresIn: "1d",
    // });

    const session: string = await createSession(user._id);
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
      session,
    });
    // response.cookies.set("token", token, {
    //   httpOnly: true,
    // });
    // response.cookies.set("session", `${session}`, {
    //   httpOnly: true,
    // });
    // response.cookies.set("decrypted", `${decrypted}`, {
    //   httpOnly: true,
    // });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
