### README for Backend

## Live link - https://image-to-text-analysis-frontend.vercel.app/

# Chat Bot for Image and Text Analysis - Backend

## Objective

Set up an Express server to handle image and text data, analyze the image using OCR, and store the results in a MongoDB database.

## Prerequisites

- Node.js and npm installed.
- MongoDB database set up and running.
- OCR API key from OCR.space.

## Installation

1. **Clone the repository:**

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up environment variables:**
    - Create a `.env` file in the `backend` directory and add the following:
    ```env
    PORT=5000
    MONGO_URI=<your_mongodb_uri>
    OCR_API_KEY=<your_ocr_api_key>
    ```

4. **Start the server:**
    ```bash
    node server.js
    ```

## Usage

1. **Ensure MongoDB is running.**
2. **Send a POST request to `/api/analyze`** with form data containing the image file and user input text.
3. **The server will process the image using OCR, analyze the text, and store the results in MongoDB.**

## Key Endpoints

### `POST /api/analyze`
- Receives image and text data.
- Processes the image using OCR.
- Analyzes and compares the extracted text with the user input text.
- Stores the analysis results in MongoDB.

## Key Files

### `server.js`
- Sets up the Express server.
- Handles image and text data.
- Processes image using OCR.
- Stores analysis results in MongoDB.

## Deployed backend part on render by adding environment variables correctly and also adding starting points 
