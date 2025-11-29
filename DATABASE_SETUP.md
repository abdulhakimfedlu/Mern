# Database Setup Guide

This guide will help you set up MongoDB for the restaurant application.

## Option 1: Local MongoDB Installation

### Windows
1. Download MongoDB Community Server from [mongodb.com](https://www.mongodb.com/try/download/community)
2. Run the installer and follow the setup wizard
3. MongoDB will start automatically as a Windows service
4. The default connection string is: `mongodb://localhost:27017/reee_db`

### Verify Installation
```bash
# Open Command Prompt or PowerShell
mongosh
```

If MongoDB is running, you'll see the MongoDB shell.

## Option 2: MongoDB Atlas (Cloud - Recommended)

### Setup Steps
1. Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Sign up for a free account
3. Create a new cluster (Free tier available)
4. Click "Connect" on your cluster
5. Choose "Connect your application"
6. Copy the connection string
7. Replace `<password>` with your database user password
8. Update `.env` file in the `backend` folder:
   ```
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/reee_db?retryWrites=true&w=majority
   ```

## Starting the Backend Server

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. You should see:
   ```
   Server running on port 5000
   MongoDB Connected: <your-connection-host>
   ```

## Testing the Integration

### Test Contact Form
1. Open the React client: `http://localhost:5173` (or your React dev server port)
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check the Admin panel at `http://localhost:5174/messages` (or your Admin dev server port)
5. The message should appear in the Messages dashboard

### Troubleshooting

**Error: "MongooseServerSelectionError"**
- Check if MongoDB is running (local installation)
- Verify your connection string in `.env`
- Check network/firewall settings
- For Atlas: Ensure your IP is whitelisted

**Error: "CORS"**
- The backend already has CORS enabled
- Ensure both frontend servers are running on the correct ports

**Backend not starting**
- Ensure all dependencies are installed: `npm install`
- Check if port 5000 is available
- Verify `.env` file exists in the backend directory

## Database Structure

The application uses the following collections:
- `categories` - Food categories
- `fooditems` - Menu items
- `orders` - Customer orders
- `reservations` - Table reservations
- `employees` - Staff information
- `contacts` - Contact form submissions

All collections are created automatically when you first add data through the application.
