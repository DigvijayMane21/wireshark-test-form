import clientPromise from "@/mongodb/clientPromise";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
    const data = await req.json();
    const MongodbClient = await clientPromise;
    const db = MongodbClient.db("MP");
    const collection = db.collection("login");

    // const result = await collection.insertOne(data);
    try {
        const result = await collection.insertOne(data);
        return NextResponse.json({ success: true, result, status: 200 });
    } catch (error) {
        return NextResponse.json({ success: false, error, status: 500 });
    }
}
