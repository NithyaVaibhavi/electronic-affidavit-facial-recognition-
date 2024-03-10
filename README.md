# Electronic Affidavit - Deep Learning Face Authentication Platform

The Electronic Affidavit project is a web-based platform that provides authentication for affiants by identifying faces using deep learning technology. The system utilizes various technologies such as React.js for the frontend, MongoDB for the database, Express.js for the backend, YOLOv5 deep learning model for face detection, and OpenCV for collecting facial datasets.

## Features

- Accepts face images of the affiants for authentication.
- Utilizes YOLOv5 deep learning model for face detection.
- Provides a user-friendly interface developed using React.js.
- Stores data securely in MongoDB.
- Serves backend operations using Express.js.

## Technology Stack

- **Frontend**: React.js
- **Backend Framework**: Express.js
- **Database**: MongoDB
- **Deep Learning Model**: YOLOv5
- **Facial Dataset Collection**: OpenCV

## Installation and Setup

1. **Clone the Repository:**
   ```
   git clone https://github.com/your-username/electronic-affidavit.git
   ```

2. **Install Dependencies:**
   - Navigate to the frontend directory and install dependencies:
     ```
     cd frontend
     npm install
     ```
   - Navigate to the backend directory and install dependencies:
     ```
     cd ../backend
     npm install
     ```

3. **Set Up MongoDB:**
   - Install MongoDB on your system if not already installed.
   - Start MongoDB service.
   - Create a MongoDB database for the project.

4. **Configure Environment Variables:**
   - Create a `.env` file in the backend directory and define the MongoDB connection URI.

5. **Run the Application:**
   - Start the backend server:
     ```
     cd backend
     npm start
     ```
   - Start the frontend server:
     ```
     cd frontend
     npm start
     ```

6. **Access the Application:**
   - Open a web browser and navigate to the specified URL (default: `http://localhost:3000`).

## Usage

1. **User Registration:**
   - Affiants can register on the platform by providing their details and uploading a face image.

2. **Authentication:**
   - Affiants can authenticate themselves by uploading a face image.
   - The system uses the YOLOv5 deep learning model to detect faces and authenticate the affiants.

3. **Data Management:**
   - The platform securely stores user data and facial datasets in MongoDB.

## Contributors

- Nithya Vaibhavi(https://github.com/NithyaVaibhavi)
