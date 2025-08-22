import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"

// Health check endpoint to verify database connection
export async function GET() {
  try {
    // Test database connection
    const db = await getDatabase()
    await db.admin().ping()

    return NextResponse.json(
      {
        status: "healthy",
        timestamp: new Date().toISOString(),
        database: "connected",
        service: "imbago-care-kid-api",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Health check failed:", error)

    return NextResponse.json(
      {
        status: "unhealthy",
        timestamp: new Date().toISOString(),
        database: "disconnected",
        service: "imbago-care-kid-api",
        error: "Database connection failed",
      },
      { status: 503 },
    )
  }
}
