import cv2
import mediapipe as mp
import math

# Angle calculation function
def calculate_angle(a, b, c):
    a = [a.x, a.y]
    b = [b.x, b.y]
    c = [c.x, c.y]

    angle = math.degrees(
        math.atan2(c[1]-b[1], c[0]-b[0]) -
        math.atan2(a[1]-b[1], a[0]-b[0])
    )
    angle = abs(angle)
    if angle > 180:
        angle = 360 - angle
    return angle


mp_pose = mp.solutions.pose
pose = mp_pose.Pose()
mp_draw = mp.solutions.drawing_utils

cap = cv2.VideoCapture(0)

while True:
    ret, frame = cap.read()
    if not ret:
        break

    frame = cv2.flip(frame, 1)
    rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    result = pose.process(rgb)

    if result.pose_landmarks:
        landmarks = result.pose_landmarks.landmark

        hip = landmarks[mp_pose.PoseLandmark.LEFT_HIP.value]
        knee = landmarks[mp_pose.PoseLandmark.LEFT_KNEE.value]
        ankle = landmarks[mp_pose.PoseLandmark.LEFT_ANKLE.value]

        knee_angle = calculate_angle(hip, knee, ankle)

        if knee_angle < 140:
            status = "Good Squat"
            color = (0, 255, 0)
        else:
            status = "Go Lower"
            color = (0, 0, 255)

        cv2.putText(frame, f"Knee Angle: {int(knee_angle)}",
                    (30, 50), cv2.FONT_HERSHEY_SIMPLEX, 1, color, 2)

        cv2.putText(frame, status,
                    (30, 100), cv2.FONT_HERSHEY_SIMPLEX, 1, color, 2)

        mp_draw.draw_landmarks(
            frame,
            result.pose_landmarks,
            mp_pose.POSE_CONNECTIONS
        )

    cv2.imshow("AI Gym Squat Detection", frame)

    if cv2.waitKey(1) & 0xFF == 27:
        break

cap.release()
cv2.destroyAllWindows()
