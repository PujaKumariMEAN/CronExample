var express = require('express');
var app = express();
var cron = require('node-cron');

//  #1
// var task = cron.schedule('* * * * *', ()=> {
//   console.log('Printing the line every minute in the terminal');
// });

// the stars -
// ┌──────────────── second (optional) (Valid range 0-59)
// | ┌────────────── minute (Valid range: 0-59)
// | | ┌──────────── hour (valid range: 0-23)
// | | | ┌────────── day of the month (Valid range: 1-31)
// | | | | ┌──────── month (Valid range: 1-12 or names of the months)
// | | | | | ┌────── day of the week (valid range: 0-7 or names of the days: both 0 and 7 denotes Sunday)
// | | | | | |
// | | | | | |
// * * * * * *

//  #2
// var task = cron.schedule('50 * * * *', () => {
//   console.log("this is run after every 17hours 50 minutes");
// }, {
//   scheduled: false,
//   timezone: "Europe/London"
// });

// #3 after ever 2 sec
var task = cron.schedule('*/2 * * * * *', () => {
  console.log("this is run after every 2 second");
}, {
  scheduled: true
  // timezone: "Europe/London"
});

// if scheduled is true then we don't need to use start function
// task.destroy(); // this will stop and destroy the cron job
// start method is used when third param of cron job scheduled is used with false boolean value
// task.stop();  // to stop
task.start(); // to start if scheduled is stated as false

app.listen(3000, function(){
  console.log('Server is running on port 3000....');
});
