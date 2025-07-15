### 📷 SARI-SCAN <br>
SARI-SCAN is a full stack QR code scanner application built to efficiently scan and manage product data. It utilizes modern web technologies to provide a seamless scanning and database integration experience.

🚀 Project Description
SARI-SCAN is a QR code scanner app made with:

Frontend: Vite + React

Backend: Express.js (Node.js)

Database: MySQL (MariaDB)

This app scans QR codes containing product information and saves them directly into the database. It is designed for local use and demonstrates a complete full stack workflow.

💡 Features
✅ QR Code Scanning: Uses html5-qrcode to scan codes via the device camera.
✅ Data Parsing: Splits scanned data into product fields (ID, name, dates, manufacturer).
✅ Database Integration: Sends scanned data to a MySQL database through Express API routes.
✅ CRUD Operations:

Create: Insert scanned products.

Read: Fetch product records.

Delete: Remove products by ID.
✅ Clean UI: Minimal and functional interface for scanning and management.

⚙️ Tech Stack
Layer	Technology
Frontend	Vite + React, html5-qrcode
Backend	Node.js + Express.js
Database	MySQL (MariaDB)

🔧 How It Works
Run the backend server (Express.js) which connects to your MySQL (MariaDB) database.

Start the frontend app built with Vite + React.

Click SCAN to open the device camera and scan a QR code.

The app parses the scanned text into:

Product ID

Product Name

Expiration Date

Manufacture Date

Manufacturer

Sends data to backend API (/api/value) which inserts it into the database.

You can also fetch all records or delete specific products via backend routes.

📝 Example QR Code Format
The QR code text is expected to have five lines separated by newline characters (\n) in this order:

nginx
Copy
Edit
productId
productName
expirationDate
manufactureDate
manufacturer
🔒 Current Limitations
Runs only on localhost for now.

Requires manual database setup with the products table.

Designed as a local project for learning and demonstration purposes.

🎯 Purpose
This project was created as a first full stack application to:

Learn and integrate frontend scanning with backend APIs.

Practice RESTful API development using Express.js.

Connect and perform CRUD operations with MySQL databases.

Understand end-to-end data flow in a practical, real-life application.

✨ Future Improvements
🔹 Deploy to a public server (Render, Railway, or DigitalOcean).
🔹 Add user authentication for secured access.
🔹 Improve UI/UX with status dashboards.
🔹 Validate scanned data before database insertion.
