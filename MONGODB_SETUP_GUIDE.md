# MongoDB Database Setup - Step by Step Guide

## Current Status
❌ **Database is NOT created yet.** You need to install MongoDB first.

## Step-by-Step Instructions

### Option 1: MongoDB Atlas (Cloud - Easiest, Recommended)

#### Step 1: Create Account
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Sign up with your email or Google account
3. Click "Build a Database"

#### Step 2: Choose Free Tier
1. Select **M0 FREE** tier
2. Choose a cloud provider (AWS recommended)
3. Choose a region closest to you (e.g., Frankfurt for Europe, Singapore for Asia)
4. Click "Create Cluster" (takes 3-5 minutes)

#### Step 3: Create Database User
1. Click "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Username: `admin` (or any name you want)
5. Password: Create a strong password (SAVE THIS!)
6. User Privileges: Select "Atlas admin"
7. Click "Add User"

#### Step 4: Whitelist Your IP
1. Click "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Click "Confirm"

#### Step 5: Get Connection String
1. Go back to "Database" in the left sidebar
2. Click "Connect" on your cluster
3. Choose "Connect your application"
4. Copy the connection string (looks like: `mongodb+srv://admin:<password>@cluster0.xxxxx.mongodb.net/`)

#### Step 6: Update Backend Configuration
1. Open `c:\Users\Abdulhakim\Downloads\Reee\backend\.env`
2. Replace the MONGO_URI line with your connection string:
   ```
   MONGO_URI=mongodb+srv://admin:YOUR_PASSWORD_HERE@cluster0.xxxxx.mongodb.net/reee_db?retryWrites=true&w=majority
   ```
3. Replace `YOUR_PASSWORD_HERE` with the password you created in Step 3
4. Save the file

#### Step 7: Restart Backend Server
1. Stop the backend server (Ctrl+C in the terminal)
2. Run `npm run dev` again in the backend folder
3. You should see: "MongoDB Connected: cluster0.xxxxx.mongodb.net"

---

### Option 2: Local MongoDB (Windows)

#### Step 1: Download MongoDB
1. Go to https://www.mongodb.com/try/download/community
2. Select:
   - Version: Latest (7.0.x)
   - Platform: Windows
   - Package: MSI
3. Click "Download"

#### Step 2: Install MongoDB
1. Run the downloaded `.msi` file
2. Choose "Complete" installation
3. **Important:** Check "Install MongoDB as a Service"
4. **Important:** Check "Install MongoDB Compass" (GUI tool)
5. Click "Next" and "Install"
6. Wait for installation to complete

#### Step 3: Verify Installation
1. Open Command Prompt or PowerShell
2. Run: `mongosh`
3. If you see `test>`, MongoDB is running!
4. Type `exit` to quit

#### Step 4: Backend is Already Configured
The `.env` file already has:
```
MONGO_URI=mongodb://localhost:27017/reee_db
```
This will work automatically with local MongoDB!

#### Step 5: Restart Backend Server
1. Stop the backend server (Ctrl+C)
2. Run `npm run dev` again
3. You should see: "MongoDB Connected: localhost"

---

## Verify Database is Working

### Test 1: Submit a Contact Message
1. Open React client: http://localhost:5173
2. Go to Contact page
3. Fill out the form and submit
4. Check backend terminal - you should see the POST request

### Test 2: Check Admin Panel
1. Open Admin panel: http://localhost:5174 (or the port shown)
2. Click "Messages" in the sidebar
3. You should see the message you just submitted!

### Test 3: View Database (MongoDB Compass)
1. Open MongoDB Compass (installed with MongoDB)
2. Connect to: `mongodb://localhost:27017` (or your Atlas connection string)
3. You should see database `reee_db`
4. Click on it to see collections: `contacts`, `categories`, etc.

---

## Troubleshooting

### "MongooseServerSelectionError"
**For Atlas:**
- Check your IP is whitelisted in Network Access
- Verify username and password in connection string
- Make sure you replaced `<password>` with actual password

**For Local:**
- Open Services (Windows + R, type `services.msc`)
- Find "MongoDB Server"
- Make sure Status is "Running"
- If not, right-click and select "Start"

### Backend shows "Server running" but no "MongoDB Connected"
- Check your `.env` file exists in the backend folder
- Verify MONGO_URI is correctly formatted
- No spaces before or after the `=` sign

### Can't connect to Admin panel
- Check the terminal for the port number
- Usually http://localhost:5174 or http://localhost:5173
- Make sure `npm run dev` is running in the Admin folder

---

## Current Setup Status

✅ Backend server created
✅ Database models created
✅ API routes created
✅ Contact form integrated
❌ **MongoDB not installed/configured yet** ← YOU ARE HERE

**Next Step:** Choose Option 1 (Atlas - easier) or Option 2 (Local) and follow the steps above!
