import { type NextRequest, NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"
import { validateContactInput, sanitizeContactInput, type ContactInput } from "@/lib/models/contact"

// Handle CORS headers
function setCorsHeaders(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Origin", "*")
  response.headers.set("Access-Control-Allow-Methods", "POST, OPTIONS")
  response.headers.set("Access-Control-Allow-Headers", "Content-Type")
  return response
}

// Handle preflight OPTIONS request
export async function OPTIONS() {
  const response = new NextResponse(null, { status: 200 })
  return setCorsHeaders(response)
}

// Handle POST request for contact form submissions
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body: ContactInput
    try {
      body = await request.json()
    } catch (error) {
      const response = NextResponse.json({ error: "Invalid JSON in request body" }, { status: 400 })
      return setCorsHeaders(response)
    }

    // Validate input data
    const validation = validateContactInput(body)
    if (!validation.isValid) {
      const response = NextResponse.json(
        {
          error: "Validation failed",
          details: validation.errors,
        },
        { status: 400 },
      )
      return setCorsHeaders(response)
    }

    // Sanitize and prepare data for database
    const contactData = sanitizeContactInput(body)

    // Connect to database and insert contact
    const db = await getDatabase()
    const contactsCollection = db.collection("contacts")

    const result = await contactsCollection.insertOne(contactData)

    if (!result.insertedId) {
      throw new Error("Failed to insert contact into database")
    }

    // Log successful submission (in production, you might want to use a proper logging service)
    console.log(`[${new Date().toISOString()}] New contact submission:`, {
      id: result.insertedId,
      name: contactData.name,
      email: contactData.email,
      messageLength: contactData.message.length,
    })

    // Return success response
    const response = NextResponse.json(
      {
        success: true,
        message: "Contact form submitted successfully",
        id: result.insertedId,
      },
      { status: 201 },
    )

    return setCorsHeaders(response)
  } catch (error) {
    console.error("Contact form submission error:", error)

    // Return error response
    const response = NextResponse.json(
      {
        error: "Internal server error",
        message: "Failed to submit contact form. Please try again later.",
      },
      { status: 500 },
    )

    return setCorsHeaders(response)
  }
}

// Handle unsupported methods
export async function GET() {
  const response = NextResponse.json({ error: "Method not allowed" }, { status: 405 })
  return setCorsHeaders(response)
}

export async function PUT() {
  const response = NextResponse.json({ error: "Method not allowed" }, { status: 405 })
  return setCorsHeaders(response)
}

export async function DELETE() {
  const response = NextResponse.json({ error: "Method not allowed" }, { status: 405 })
  return setCorsHeaders(response)
}
