// Sample data seeding script for development/testing
// This script adds sample contact submissions for testing purposes

import { MongoClient } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017"
const DATABASE_NAME = "imbago_care_kid"

const sampleContacts = [
  {
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@medicalhospital.org",
    message:
      "I am interested in partnering with Imbago Care Kid for our pediatric outreach program in rural areas. We have been working with underserved communities for over 10 years and would love to collaborate on research initiatives.",
    date: new Date("2024-01-15T10:30:00Z"),
    status: "responded",
  },
  {
    name: "Michael Chen",
    email: "mchen@globalhealth.ngo",
    message:
      "Hello, I represent a global health NGO and we are looking for research partners for our upcoming project on child nutrition in Southeast Asia. Your work aligns perfectly with our mission.",
    date: new Date("2024-01-20T14:45:00Z"),
    status: "read",
  },
  {
    name: "Maria Rodriguez",
    email: "maria.r.volunteer@gmail.com",
    message:
      "I am a registered nurse with 5 years of experience in pediatric care. I would like to volunteer with your organization during my upcoming sabbatical. Please let me know how I can contribute.",
    date: new Date("2024-01-25T09:15:00Z"),
    status: "new",
  },
  {
    name: "James Thompson",
    email: "j.thompson@universityhospital.edu",
    message:
      "As a medical student interested in global health, I would like to learn more about volunteer opportunities with Imbago Care Kid. I have experience in community health education.",
    date: new Date("2024-02-01T16:20:00Z"),
    status: "new",
  },
  {
    name: "Dr. Amara Okafor",
    email: "aokafor@childrensfoundation.org",
    message:
      "We run a children's foundation in West Africa and are impressed by your research work. We would like to discuss potential collaboration opportunities for our upcoming health initiatives.",
    date: new Date("2024-02-05T11:00:00Z"),
    status: "read",
  },
]

async function seedSampleData() {
  console.log("🌱 Seeding sample contact data...")

  let client

  try {
    // Connect to MongoDB
    client = new MongoClient(MONGODB_URI)
    await client.connect()
    console.log("✅ Connected to MongoDB")

    const db = client.db(DATABASE_NAME)
    const contactsCollection = db.collection("contacts")

    // Check if sample data already exists
    const existingCount = await contactsCollection.countDocuments()

    if (existingCount > 0) {
      console.log(`ℹ️  Database already contains ${existingCount} contacts. Skipping seed data.`)
      console.log("   To reseed, first clear the collection or use a fresh database.")
      return
    }

    // Insert sample data
    const result = await contactsCollection.insertMany(sampleContacts)
    console.log(`✅ Inserted ${result.insertedCount} sample contacts`)

    // Display summary
    const statusCounts = await contactsCollection
      .aggregate([
        {
          $group: {
            _id: "$status",
            count: { $sum: 1 },
          },
        },
      ])
      .toArray()

    console.log("📊 Sample data summary:")
    statusCounts.forEach((status) => {
      console.log(`   - ${status._id}: ${status.count} contacts`)
    })

    console.log("🎉 Sample data seeding completed successfully!")
  } catch (error) {
    console.error("❌ Sample data seeding failed:", error)
    process.exit(1)
  } finally {
    if (client) {
      await client.close()
      console.log("🔌 Database connection closed")
    }
  }
}

// Run the seeding
seedSampleData()
