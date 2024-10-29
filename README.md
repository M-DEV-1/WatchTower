# WatchTower

WatchTower is an AI-based proctoring solution for real-time monitoring during skill assessments, focused on ensuring test integrity, security, and privacy. This system leverages face detection, tab-switch monitoring, and audio analysis to detect suspicious activities, providing live alerts to proctors.

## Features

- **Real-time Face Detection**: Ensures only the test-taker is present.
- **Tab-Switch Detection**: Tracks any suspicious tab switches during the test.
- **Audio Monitoring**: Detects unauthorized audio activity (e.g., speaking).
- **Alerts and Dashboard for Proctors**: Proctors receive real-time notifications of suspicious activities.
- **Scalable Architecture**: React frontend and Django backend for modularity and ease of deployment.

## Tech Stack

- **Frontend**: React (Vite, Axios)
- **Backend**: Django with Django REST Framework
- **AI Models**: OpenCV, TensorFlow (face detection, activity detection)
- **Deployment**: Vercel (React), PythonAnywhere/Heroku (Django)
- **Additional Libraries**: pyaudio (for audio detection)

## Setup

### Prerequisites

- Node.js and npm
- Python
- Django and Django REST Framework
- Vite for React frontend

### Backend (Django)

1. Clone the repository:

2. Create a virtual environment:
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the Django server:
   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

### Frontend (React with Vite)

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Vite development server:
   ```bash
   npm run dev
   ```

The frontend should now be running on `http://localhost:5173` and Django backend on `http://localhost:8000`.

## Usage

- **Testing**: Visit the frontend at `http://localhost:5173`. Log in as a proctor or student to simulate a skill assessment session.
- **Real-time Monitoring**: Proctors can view student activity in real-time, with alerts triggered by the AI-based monitoring.


## Contributing

Contributions are welcome! Please open an issue or submit a pull request with detailed information on any changes.