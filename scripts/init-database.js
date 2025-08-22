// Database initialization script for Imbago Care Kid
// This script sets up the MongoDB collections and indexes

import { MongoClient } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017"
const DATABASE_NAME = "imbago_care_kid"

async function initializeDatabase() {
  console.log("🚀 Initializing Imbago Care Kid database...")

  let client

  try {
    // Connect to MongoDB
    client = new MongoClient(MONGODB_URI)
    await client.connect()
    console.log("✅ Connected to MongoDB")

    const db = client.db(DATABASE_NAME)

    // Create contacts collection with validation schema
    try {
      await db.createCollection("contacts", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["name", "email", "message", "date"],
            properties: {
              name: {
                bsonType: "string",
                minLength: 1,
                maxLength: 100,
                description: "Contact name - required string between 1-100 characters",
              },
              email: {
                bsonType: "string",
                pattern: "^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$",
                maxLength: 255,
                description: "Valid email address - required",
              },
              message: {
                bsonType: "string",
                minLength: 10,
                maxLength: 2000,
                description: "Contact message - required string between 10-2000 characters",
              },
              date: {
                bsonType: "date",
                description: "Submission date - required",
              },
              status: {
                bsonType: "string",
                enum: ["new", "read", "responded"],
                description: "Contact status - optional",
              },
            },
          },
        },
      })
      console.log("✅ Created contacts collection with validation schema")
    } catch (error) {
      if (error.codeName === "NamespaceExists") {
        console.log("ℹ️  Contacts collection already exists")
      } else {
        throw error
      }
    }

    // Create indexes for better performance
    const contactsCollection = db.collection("contacts")

    // Index on email for faster lookups
    await contactsCollection.createIndex({ email: 1 })
    console.log("✅ Created email index")

    // Index on date for sorting by submission time
    await contactsCollection.createIndex({ date: -1 })
    console.log("✅ Created date index")

    // Index on status for filtering
    await contactsCollection.createIndex({ status: 1 })
    console.log("✅ Created status index")

    // Compound index for common queries
    await contactsCollection.createIndex({ status: 1, date: -1 })
    console.log("✅ Created compound status-date index")

    // Get collection stats
    const stats = await contactsCollection.stats()
    console.log(`📊 Contacts collection stats:`)
    console.log(`   - Documents: ${stats.count || 0}`)
    console.log(`   - Indexes: ${stats.nindexes || 0}`)

    console.log("🎉 Database initialization completed successfully!")
  } catch (error) {
    console.error("❌ Database initialization failed:", error)
    process.exit(1)
  } finally {
    if (client) {
      await client.close()
      console.log("🔌 Database connection closed")
    }
  }
}

// Run the initialization
initializeDatabase()
