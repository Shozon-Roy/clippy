# Clippy - Screen Recording and Sharing Platform

![Clippy](#)

Clippy is a modern web application for recording, sharing, and collaborating on screen recordings. With a clean, intuitive interface and powerful features, Clippy makes it easy to create and share high-quality screen recordings with your team.

## 🚀 Features

- **Screen Recording:** Quickly record your screen with customizable settings
- **Video Management:** Organize and manage your recordings library
- **Team Collaboration:** Share recordings with team members and collect feedback
- **Comments:** Add timestamped comments to specific parts of videos
- **Statistics:** Track views, engagement, and recording metrics
- **Responsive Design:** Works seamlessly across desktop, tablet, and mobile devices

## 💻 Tech Stack

- **Frontend:**
  - React (with TypeScript)
  - TanStack Query for data fetching
  - Tailwind CSS for styling
  - Shadcn UI components
  - Wouter for routing
  - Recharts for data visualization

- **Backend:**
  - Express.js server
  - In-memory storage (with option for PostgreSQL integration)
  - TypeScript for type safety
  - RESTful API architecture

## 📋 Pages and Components

### Main Pages
- **Home:** Dashboard with recent recordings and statistics
- **Record:** Interface for creating new screen recordings
- **Team:** Manage team members and collaborative workspaces
- **Account:** User profile and personal settings
- **Settings:** Application preferences and configuration
- **Help Center:** Documentation, guides, and support resources

### Key Components
- **Sidebar:** Main navigation
- **Header:** Search functionality and user profile
- **RightPanel:** Statistics, recording limits, and recent activity
- **Video Player:** Playback interface with commenting capabilities

## 🏗️ Project Structure

```
clippy/
├── client/                # Frontend code
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── lib/           # Utility functions and API clients
│   │   ├── pages/         # Page components
│   │   └── App.tsx        # Main application component
│   └── index.html         # HTML entry point
├── server/                # Backend code
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API route definitions
│   ├── storage.ts         # Data storage implementation
│   └── vite.ts            # Vite server configuration
└── shared/                # Shared code between client and server
    └── schema.ts          # Data models and type definitions
```

## 🔧 Setup and Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shozon-roy/clippy.git
   cd clippy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```
   http://localhost:5000
   ```

## 🌐 API Endpoints

- **GET /api/user** - Get current user information
- **GET /api/videos** - Get all videos
- **GET /api/team-members** - Get all team members
- **GET /api/comments** - Get all comments
- **GET /api/stats** - Get usage statistics

## 📱 Responsive Design

Clippy is designed to work seamlessly across various device sizes:

- **Desktop:** Full-featured interface with sidebar, content area, and statistics panel
- **Tablet:** Adapted layout with collapsible sidebar and focused content area
- **Mobile:** Mobile-optimized interface with bottom navigation and streamlined views

## 🔒 Security Features

- Password-protected video sharing
- Configurable privacy settings
- Role-based access controls
- Secure user authentication

## 📈 Future Enhancements

- **Cloud Storage Integration:** Store recordings in the cloud for better accessibility
- **Advanced Editing:** Add basic editing capabilities for recordings
- **AI Transcription:** Automatically generate transcripts for recordings
- **Enhanced Analytics:** More detailed usage statistics and insights
- **Custom Branding:** Allow teams to customize the interface with their branding

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👏 Acknowledgements

- Design inspiration from modern productivity tools
- Icons from Lucide React
- UI components from Shadcn UI
- Charts from Recharts
