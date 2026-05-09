# Full-Stack Task Tracker App

A professional Task Management mobile application built as part of the technical evaluation for the Full Stack Developer Internship at **RoundTechSquare**.

## 🚀 Tech Stack

- **Mobile:** React Native (Expo) with TypeScript
- **State Management:** TanStack Query (React Query)
- **Backend:** Node.js & Express.js
- **Database:** PostgreSQL (Render)
- **ORM:** Prisma
- **Authentication:** JWT (JSON Web Tokens) & Bcrypt password hashing

## 🎥 Demo Video
[Click here to watch the demo video](drive.google.com/file/d/1izO5hmjIYUe_I7Pk1dl5hEXL1d9zfiAM/view?usp=drivesdk)
*(Or check the `demo.mp4` file in this repository)*

## ✨ Key Features
- **Secure Auth:** Signup and Login flow with encrypted passwords.
- **Full CRUD:** Create, Read, Toggle Completion, and Delete tasks.
- **Optimized UI:** 
  - Pull-to-refresh for instant syncing.
  - Empty states when no tasks are present.
  - Loading indicators for better UX.
- **Relational Integrity:** Implemented PostgreSQL to ensure strict data types and user-task relationships.

## 🛠️ Setup & Installation

### 1. Backend Setup
1. Navigate to the backend folder: `cd backend`
2. Install dependencies: `npm install`
3. Create a `.env` file and add:
   ```env
   DATABASE_URL=your_postgresql_url
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
4. Push the schema to your DB: `npx prisma db push`
5. Start the server: `npm run dev`

### 2. Frontend Setup
1. Navigate to the frontend folder: `cd frontend`
2. Install dependencies: `npm install`
3. Update the `baseURL` in `src/api/client.ts` with your laptop's IP address.
4. Start the app: `npx expo start`
5. Scan the QR code using the **Expo Go** app on your phone.

## 📝 Project Decisions
- **PostgreSQL vs MongoDB:** While the prompt mentioned MongoDB, I chose **PostgreSQL with Prisma** to leverage strict schemas and relational consistency, which is often preferred for task management systems.
- **TanStack Query:** Used to handle server-state, ensuring the UI stays in sync with the database with minimal manual state management.
