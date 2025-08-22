import { NextResponse } from "next/server"
import { getDatabase } from "@/lib/mongodb"

export async function GET() {
  try {
    const db = await getDatabase()
    const contacts = await db.collection('contacts').find({}).toArray()
    
    return NextResponse.json({
      success: true,
      count: contacts.length,
      contacts: contacts.map(contact => ({
        ...contact,
        _id: contact._id.toString(), // Convert ObjectId to string
        date: contact.date.toISOString() // Convert date to string
      }))
    })
  } catch (error) {
    console.error("Error fetching contacts:", error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}
