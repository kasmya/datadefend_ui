import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json(
                { success: false, message: "Email is required" },
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

        const client = await clientPromise;
        const db = client.db("datadefend");
        const collection = db.collection("subscribers");

        // Check if email already exists
        const existingSubscriber = await collection.findOne({ email });
        if (existingSubscriber) {
            return NextResponse.json(
                { success: false, message: "Email already subscribed" },
                { status: 409 }
            );
        }

        // Insert new subscriber
        await collection.insertOne({
            email,
            subscribedAt: new Date(),
            source: "website_footer",
        });

        return NextResponse.json(
            { success: true, message: "Successfully subscribed!" },
            { status: 201 }
        );
    } catch (error) {
        console.error("Subscribe API Error:", error);
        return NextResponse.json(
            { success: false, message: "Internal server error" },
            { status: 500 }
        );
    }
}
