const dotenv = require('dotenv');
const mongoose = require('mongoose');
const fs = require('fs');
const Tour = require('./models/tourModel');
const Review = require('./models/reviewModel');
const User = require('./models/userModel');

// process.on('uncaughtException', (err) => {
//   console.log('Handling Uncaught Exxception! Shutting the server');
//   console.log(err.message);
//   process.exit();
// });

dotenv.config({ path: './config.env' });
const app = require('./app');

const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection done'));

console.log(db);

// DELETING AND IMPORTING TOURS

// const tours = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/tours.json`, `utf-8`)
// );
// const reviews = JSON.parse(
//   fs.readFileSync(`${__dirname}/dev-data/data/reviews.json`, `utf-8`)
// );
// const users = JSON.parse(p
//   fs.readFileSync(`${__dirname}/dev-data/data/users.json`, `utf-8`)
// );

// const deleteMany = async () => {
//   await Tour.deleteMany();
//   await User.deleteMany();
//   await Review.deleteMany();
// };
// // deleteMany();

// const createTours = async () => {
//   await Tour.create(tours);
//   await User.create(users, { validateBeforeSave: false });
//   await Review.create(reviews);
// };
// createTours();

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message);
  console.log('Handling Unhandled rejections! Shutting the server');
  server.close(() => {
    process.exit();
  });
});
