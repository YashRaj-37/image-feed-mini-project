# 📸 Image Feed Mini Project

A simple full-stack image sharing application built with the MERN ecosystem. Users can upload an image with a caption, the image is stored on ImageKit, and the post is displayed in a feed.

## 🚀 Features

* Upload images from the frontend
* Add captions to posts
* Store images securely using ImageKit
* Save post data (image URL + caption) in MongoDB
* View all uploaded posts in a feed
* REST API built with Express.js

---

## 🛠️ Tech Stack

### Frontend

* React
* React Router DOM
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* Multer
* ImageKit
* CORS
* Dotenv

---

## 📂 Project Structure

```text
backendproject-1/
│
├── src/
│   ├── db/
│   ├── models/
│   ├── services/
│   └── app.js
│
├── server.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/YashRaj-37/image-feed-mini-project.git
```

Move into the project directory:

```bash
cd image-feed-mini-project
```

Install dependencies:

```bash
npm install
```

Start the server:

```bash
node server.js
```

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGO_URL=your_mongodb_connection_string

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_url_endpoint
```

---

## 📡 API Endpoints

### Create a Post

**POST** `/create-post`

Uploads an image to ImageKit and stores the image URL and caption in MongoDB.

**Form Data**

* `image` → Image file
* `caption` → Caption text

---

### Get All Posts

**GET** `/posts`

Returns all posts stored in the database.

---

## 📷 Workflow

1. User selects an image and enters a caption.
2. React sends the form data to the Express backend.
3. Multer processes the uploaded image.
4. The backend uploads the image to ImageKit.
5. ImageKit returns the image URL.
6. MongoDB stores the image URL and caption.
7. React fetches all posts and displays them in the feed.

---

## 📚 What I Learned

* Building REST APIs with Express.js
* Connecting Node.js with MongoDB using Mongoose
* Handling file uploads with Multer
* Uploading media to ImageKit
* Managing environment variables with Dotenv
* Fetching and displaying data using React and Axios

---

## 👨‍💻 Author

**Yash Raj**

GitHub: https://github.com/YashRaj-37
