import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
    try {
        const { name, email, subject, message } = await request.json();

        // Skip DB for static build
        if (!process.env.MONGODB_URI) {
            console.log('Static build - no DB connection');
            return NextResponse.json(
                { success: true, message: "Message received (demo mode)" },
                { status: 201 }
            );
        }

        // Validate required fields
        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { success: false, message: "All fields are required" },
                { status: 400 }
            );
        }


        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { success: false, message: "Invalid email format" },
                { status: 400 }
            );
        }

        const clientPromiseResult = await clientPromise;
        if (!clientPromiseResult) {
          throw new Error('MongoDB client not available');
        }
        const client = clientPromiseResult;
        const db = client.db("datadefend");
        const collection = db.collection("contacts");


        // Insert contact submission
        await collection.insertOne({
            name,
            email,
            subject,
            message,
            submittedAt: new Date(),
            status: "new",
        });

        return NextResponse.json(
            { success: true, message: "Message sent successfully!" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Contact API Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}
