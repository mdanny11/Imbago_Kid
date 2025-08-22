// Simple script to view contact form submissions
// Useful for development and basic admin tasks

import { MongoClient } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017"
const DATABASE_NAME = "imbago_care_kid"

async function viewContacts() {
  console.log("📋 Viewing contact form submissions...")

  let client

  try {
    // Connect to MongoDB
    client = new MongoClient(MONGODB_URI)
    await client.connect()

    const db = client.db(DATABASE_NAME)
    const contactsCollection = db.collection("contacts")

    // Get total count
    const totalCount = await contactsCollection.countDocuments()
    console.log(`\n📊 Total contacts: ${totalCount}`)

    if (totalCount === 0) {
      console.log("No contacts found in the database.")
      return
    }

    // Get status breakdown
    const statusCounts = await contactsCollection
      .aggregate([
        {
          $group: {
            _id: "$status",
            count: { $sum: 1 },
          },
        },
        { $sort: { _id: 1 } },
      ])
      .toArray()

    console.log("\n📈 Status breakdown:")
    statusCounts.forEach((status) => {
      console.log(`   ${status._id || "undefined"}: ${status.count}`)
    })

    // Get recent contacts (last 10)
    const recentContacts = await contactsCollection.find({}).sort({ date: -1 }).limit(10).toArray()

    console.log("\n📝 Recent contacts (last 10):")
    console.log("=".repeat(80))

    recentContacts.forEach((contact, index) => {
      console.log(`\n${index + 1}. ${contact.name} (${contact.status || "no status"})`)
      console.log(`   Email: ${contact.email}`)
      console.log(`   Date: ${contact.date.toISOString()}`)
      console.log(`   Message: ${contact.message.substring(0, 100)}${contact.message.length > 100 ? "..." : ""}`)
    })

    console.log("\n" + "=".repeat(80))
  } catch (error) {
    console.error("❌ Failed to view contacts:", error)
    process.exit(1)
  } finally {
    if (client) {
      await client.close()
    }
  }
}

// Run the viewer
viewContacts()
