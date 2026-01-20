// Switch to gym database

db = db.getSiblingDB("gymDB")

// Members

db.members.insertMany([
  {
    name: "Arjun",
    age: 22,
    active: true,
    joinedOn: new Date()
  },
  {
    name: "Sara",
    age: 25,
    active: true,
    joinedOn: new Date()
  }
]);

// Workout Logs

db.workoutLogs.insertMany([
  {
    memberName: "Arjun",
    date: new Date(),
    exercises: ["Squats", "Bench Press"],
    duration: 60
  },
  {
    memberName: "Sara",
    date: new Date(),
    exercises: ["Treadmill", "Cycling"],
    duration: 45
  }
]);
