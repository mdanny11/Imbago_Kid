// Admin utility functions for contact management
import { getDatabase } from "@/lib/mongodb"
import type { Contact } from "@/lib/models/contact"

export interface ContactStats {
  total: number
  byStatus: Record<string, number>
  recentCount: number
  oldestDate?: Date
  newestDate?: Date
}

export async function getContactStats(): Promise<ContactStats> {
  const db = await getDatabase()
  const contactsCollection = db.collection<Contact>("contacts")

  // Get total count
  const total = await contactsCollection.countDocuments()

  // Get status breakdown
  const statusPipeline = await contactsCollection
    .aggregate([
      {
        $group: {
          _id: "$status",
          count: { $sum: 1 },
        },
      },
    ])
    .toArray()

  const byStatus: Record<string, number> = {}
  statusPipeline.forEach((item) => {
    byStatus[item._id || "undefined"] = item.count
  })

  // Get date range
  const dateRange = await contactsCollection
    .aggregate([
      {
        $group: {
          _id: null,
          oldest: { $min: "$date" },
          newest: { $max: "$date" },
        },
      },
    ])
    .toArray()

  // Count recent contacts (last 7 days)
  const sevenDaysAgo = new Date()
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
  const recentCount = await contactsCollection.countDocuments({
    date: { $gte: sevenDaysAgo },
  })

  return {
    total,
    byStatus,
    recentCount,
    oldestDate: dateRange[0]?.oldest,
    newestDate: dateRange[0]?.newest,
  }
}

export async function getRecentContacts(limit = 10): Promise<Contact[]> {
  const db = await getDatabase()
  const contactsCollection = db.collection<Contact>("contacts")

  return await contactsCollection.find({}).sort({ date: -1 }).limit(limit).toArray()
}

export async function updateContactStatus(contactId: string, status: "new" | "read" | "responded"): Promise<boolean> {
  const db = await getDatabase()
  const contactsCollection = db.collection<Contact>("contacts")

  const result = await contactsCollection.updateOne({ _id: contactId as any }, { $set: { status } })

  return result.modifiedCount > 0
}
