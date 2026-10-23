# 📷 SARI-SCAN <br>

SARI-SCAN is a full stack QR code scanner application built to efficiently scan and manage product data. It utilizes modern web technologies to provide a seamless scanning and database integration experience.

## 🚀 Project Description
SARI-SCAN is a QR code scanner app made with:

Frontend: Vite + React

Backend: Express.js (Node.js)

Database: MySQL (MariaDB)

This app scans QR codes containing product information and saves them directly into the database. It is designed for local use and demonstrates a complete full stack workflow. <br>

💡 Features
✅ QR Code Scanning: Uses html5-qrcode to scan codes via the device camera.
✅ Data Parsing: Splits scanned data into product fields (ID, name, dates, manufacturer).
✅ Database Integration: Sends scanned data to a MySQL database through Express API routes.
✅ CRUD Operations:<br>

Create: Insert scanned products.<br>

Read: Fetch product records.<br>

Delete: Remove products by ID.<br>
✅ Clean UI: Minimal and functional interface for scanning and management.

⚙️ Tech Stack<br>
Layer	Technology<br>
Frontend	Vite + React, html5-qrcode<br>
Backend	Node.js + Express.js<br>
Database	MySQL (MariaDB)<br>

🔧 How It Works<br>
Run the backend server (Express.js) which connects to your MySQL (MariaDB) database.

Start the frontend app built with Vite + React.<br>

Click SCAN to open the device camera and scan a QR code.

The app parses the scanned text into:<br>

Product ID

Product Name<br>

Expiration Date

Manufacture Date<br>

Manufacturer

Sends data to backend API (/api/value) which inserts it into the database.<br>

You can also fetch all records or delete specific products via backend routes.

📝 Example QR Code Format<br>
The QR code text is expected to have five lines separated by newline characters (\n) in this order:

Edit
productId
productName
expirationDate
manufactureDate
manufacturer

## 🔒 Current Limitations
Runs only on localhost for now.

Requires manual database setup with the products table.

Designed as a local project for learning and demonstration purposes.

## 🎯 Purpose <br>
This project was created as a first full stack application to:

Learn and integrate frontend scanning with backend APIs.

Practice RESTful API development using Express.js.

Connect and perform CRUD operations with MySQL databases.

Understand end-to-end data flow in a practical, real-life application.

## ✨ Future Improvements<br>
🔹 Deploy to a public server (Render, Railway, or DigitalOcean).
🔹 Add user authentication for secured access.
🔹 Improve UI/UX with status dashboards.
🔹 Validate scanned data before database insertion.

## Methodology

The React client captures QR text through `html5-qrcode`, parses the five product fields, and sends them to the Express API. The server uses parameterized SQL queries to insert, retrieve, and delete product records in MySQL/MariaDB. This connects camera input, client-side parsing, HTTP requests, and relational storage in one local workflow.

## Results

The uploaded implementation includes API routes to insert a product (`POST /api/value`), list products (`GET /api/codes`), retrieve a product by ID (`GET /api/value/:productId`), and delete a product (`DELETE /api/value/:productId`). These are implementation outcomes; no scan accuracy, throughput benchmark, or automated test results are reported. The server package currently has no implemented test suite.

## Source, Data, and Documentation

- [client/src/](client/src/) — React scanning interface and styles.
- [server/server.js](server/server.js) — Express API routes.
- [server/database.js](server/database.js) — database connection configuration.
- [client/package.json](client/package.json) and [server/package.json](server/package.json) — dependencies and run scripts.
- [client/README.md](client/README.md) — frontend documentation.

No external training dataset or database export is included. Product records come from scanned QR text; use fictional or authorized examples. The `products` table must be created locally with fields matching the insert query before using the app.

## Local Development

After configuring the local database connection and creating the products table, install dependencies in both folders. Start the backend in one terminal:

```bash
cd server
npm install
npm start
```

Start the frontend in another terminal:

```bash
cd client
npm install
npm run dev
```

The backend listens on `http://localhost:3000`. Use the frontend URL printed by Vite and allow camera access when scanning.

## Topics

`react` · `vite` · `nodejs` · `express` · `mysql` · `qr-code` · `full-stack`
