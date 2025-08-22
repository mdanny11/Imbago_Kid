# Imbago Care Kid Website

A responsive 4-page website for Imbago Care Kid, an organization dedicated to advancing innovative research, improving quality of life in underserved populations, and fostering global collaboration.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Stack**: Next.js 15, TypeScript, MongoDB
- **Contact Form**: Full-stack form with validation and database storage
- **Professional UI**: Custom design with Space Grotesk and DM Sans fonts
- **Database Integration**: MongoDB with proper validation and indexing

## 📋 Pages

1. **Home** (`/`) - Hero section, mission statement, impact counters, CTA
2. **About Us** (`/about`) - Mission & vision, organization story, team section
3. **Get Involved** (`/get-involved`) - Volunteer, partner, and donation options
4. **Contact** (`/contact`) - Contact form with validation and submission

## 🛠 Tech Stack

- **Frontend**: Next.js 15, React, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MongoDB with validation schemas
- **Fonts**: Space Grotesk (headings), DM Sans (body)
- **Icons**: Lucide React
- **UI Components**: Radix UI primitives

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB Atlas account (or local MongoDB)

### Installation

1. Clone the repository
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Set up environment variables:
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Update `.env.local` with your MongoDB connection string:
   \`\`\`
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/imbago_care_kid?retryWrites=true&w=majority
   \`\`\`

4. Initialize the database:
   \`\`\`bash
   node scripts/init-database.js
   \`\`\`

5. (Optional) Seed sample data for development:
   \`\`\`bash
   node scripts/seed-sample-data.js
   \`\`\`

6. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📊 Database Management

### View Contact Submissions
\`\`\`bash
node scripts/view-contacts.js
\`\`\`

### Database Schema

**Contacts Collection:**
\`\`\`javascript
{
  name: String (1-100 chars, required),
  email: String (valid email, required),
  message: String (10-2000 chars, required),
  date: Date (required),
  status: String (enum: 'new', 'read', 'responded')
}
\`\`\`

## 🔧 API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check and database status

## 🎨 Design System

### Colors
- **Primary**: Rose (#be123c) - Compassion and care
- **Accent**: Pink (#ec4899) - Energy and warmth
- **Neutrals**: White, light pink, slate gray

### Typography
- **Headings**: Space Grotesk (Bold)
- **Body**: DM Sans (Regular)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px  
- Desktop: > 1024px

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Connect your repository
2. Set environment variables
3. Deploy

### Database (MongoDB Atlas)
1. Create cluster
2. Set up database user
3. Configure network access
4. Get connection string

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For questions or support, contact: info@imbagocarekid.org
