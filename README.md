📡 RealtimeChat

A full-stack real-time chat application built with React (Vite), Node.js (Express), MongoDB, and Socket.IO.
It allows users to register, log in, and chat with each other in real time with persistent message history.

🚀 Features

🔑 Authentication & Authorization (JWT-based)

💬 1:1 Real-Time Messaging using Socket.IO

🗄️ Persistent Chat History stored in MongoDB

🎨 Modern UI powered by TailwindCSS & DaisyUI

🌐 CORS-Ready for smooth frontend-backend integration

📱 Responsive Design (works on desktop and mobile)

🌍 Production-Ready with backend serving built frontend

⚙️ Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/AryanGupta001/RealtimeChat.git
cd RealtimeChat

2️⃣ Install Dependencies
npm install --prefix frontend
npm install --prefix backend

3️⃣ Setup Environment Variables

Create a .env file inside backend/:

PORT=5001
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret-key
NODE_ENV=development

4️⃣ Run in Development Mode

Run frontend and backend separately:

# Terminal 1: start backend
npm run start --prefix backend

# Terminal 2: start frontend
npm run dev --prefix frontend


Visit http://localhost:5173 in your browser.
