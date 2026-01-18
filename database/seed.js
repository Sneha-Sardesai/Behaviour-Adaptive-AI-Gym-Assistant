// Switch to gym database
db = db.getSiblingDB("gymDB")
// Membership Plans
db.plans.insertMany([
  {
    name: "Monthly",
    price: 1500,
    durationDays: 30,
    features: ["Gym Access", "Basic Support"]
  },
  {
    name: "Quarterly",
    price: 4000,
    durationDays: 90,
    features: ["Gym Access", "Trainer Support"]
  },
  {
    name: "Yearly",
    price: 14000,
    durationDays: 365,
    features: ["All Access", "Personal Trainer"]
  }
]);

// Trainers
db.trainers.insertMany([
  {
    name: "Rahul",
    specialization: "Strength Training",
    experience: 5,
    active: true
  },
  {
    name: "Anita",
    specialization: "Cardio & Weight Loss",
    experience: 3,
    active: true
  }
]);

// Members
db.members.insertMany([
  {
    name: "Arjun",
    age: 22,
    plan: "Monthly",
    trainer: "Rahul",
    active: true,
    joinedOn: new Date()
  },
  {
    name: "Sara",
    age: 25,
    plan: "Quarterly",
    trainer: "Anita",
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
