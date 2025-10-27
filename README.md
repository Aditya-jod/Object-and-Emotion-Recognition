# Object and Emotion Recognition

A real-time **Object Detection and Emotion Recognition** web application using **YOLOv3** and **Flask**.  
The app captures live video from your webcam, detects objects, and recognizes emotions on faces.

---

## Features
- Real-time object detection with **YOLOv3**
- Emotion recognition on detected faces
- Web-based interface with **Flask**
- Start/stop camera controls from the browser

---

## Project Structure
```
Object-and-Emotion-Recognition-Project/
│── app.py              # Main Flask app
│── requirements.txt    # Project dependencies
│── README.md           # Project documentation
│── templates/
│ └── index.html        # Frontend UI
│── static/
│ └── css/
│ └── styles.css        # Custom styling
│── data/
│ ├── yolov3.weights    # YOLO pre-trained weights
│ ├── yolov3.cfg        # YOLO configuration
│ └── coco.names        # Class labels
```


---

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Aditya-jod/object-emotion-recognition.git
   cd object-emotion-recognition
   ```

2. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

3. **Download YOLOv3 Weights:**
   The `yolov3.weights` file is required but not included in the repository due to its size. Download it and place it in the `data/` folder.

   *   **On Windows (using PowerShell):**
       ```powershell
       Invoke-WebRequest -Uri https://pjreddie.com/media/files/yolov3.weights -OutFile "data\yolov3.weights"
       ```
   *   **On Linux/macOS:**
       ```bash
       wget -P data/ https://pjreddie.com/media/files/yolov3.weights
       ```

4. **Run the application:**
   ```bash
   python app.py
   ```
   Open your browser and navigate to `http://127.0.0.1:5000`.
