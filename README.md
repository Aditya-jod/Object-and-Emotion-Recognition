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

1. Clone the repository:
   ```bash
   git clone https://github.com/Aditya-jod/object-emotion-recognition.git
   cd object-emotion-recognition
