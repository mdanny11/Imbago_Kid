import type { ObjectId } from "mongodb"

export interface Contact {
  _id?: ObjectId
  name: string
  email: string
  message: string
  date: Date
  status?: "new" | "read" | "responded"
}

export interface ContactInput {
  name: string
  email: string
  message: string
}

// Validation function for contact form data
export function validateContactInput(data: any): { isValid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name || typeof data.name !== "string" || data.name.trim().length === 0) {
    errors.push("Name is required")
  } else if (data.name.trim().length > 100) {
    errors.push("Name must be less than 100 characters")
  }

  if (!data.email || typeof data.email !== "string" || data.email.trim().length === 0) {
    errors.push("Email is required")
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.push("Please enter a valid email address")
  } else if (data.email.trim().length > 255) {
    errors.push("Email must be less than 255 characters")
  }

  if (!data.message || typeof data.message !== "string" || data.message.trim().length === 0) {
    errors.push("Message is required")
  } else if (data.message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long")
  } else if (data.message.trim().length > 2000) {
    errors.push("Message must be less than 2000 characters")
  }

  return {
    isValid: errors.length === 0,
    errors,
  }
}

// Sanitize input data
export function sanitizeContactInput(data: ContactInput): Contact {
  return {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    message: data.message.trim(),
    date: new Date(),
    status: "new",
  }
}
