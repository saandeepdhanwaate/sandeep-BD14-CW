const express = require("express");
const app = express();
const port = 3000;

function getWelcomMessage() {
  return "Welcome to our service!";
}

// welcome message
app.get("/welcome", (req, res) => {
  res.send(getWelcomMessage());
});

// greeting message
function getGreetingMessage(username) {
  return "Hello" + " " + username + "!";
}

app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

// checke-password
function checkPassword(password) {
  if (password.length > 15) {
    return "Password is strong!";
  } else {
    return "Password is weak!";
  }
}

app.get("/check-password", (req, res) => {
  let password = req.query.password;
  console.log(password.length);
  res.send(checkPassword(password));
});

// sum
function calculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}
app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2));
});

// subscription-status
function checkSubscriptionStatus(username, subscribed) {
  if (subscribed === "true") {
    return username + " is subscribed!";
  } else {
    return username + " is not subscribed!";
  }
}

app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let subscribed = req.query.isSubscribed;
  res.send(checkSubscriptionStatus(username, subscribed));
});

// discounted-price
function calculatedDiscountedPrice(price, discount) {
  let finalprice = price - (price * discount) / 100;
  return finalprice.toString();
}

app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculatedDiscountedPrice(price, discount));
});

// personolized-greeting
function getGreeting(name, age, gender) {
  return `Hello ${name}! You are ${age} years old and you ${gender}.`;
}
app.get("/personalized-greeeting", (req, res) => {
  let age = req.query.age;
  let name = req.query.name;
  let gender = req.query.gender;

  res.send(getGreeting(name, age, gender));
});

// final-price
function calculateFinalPrice(price, discount, tax) {
  let discountPrice = price - (price * discount) / 100;
  let finalPrice = discountPrice + (discountPrice * tax) / 100;
  return finalPrice.toString();
}

app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);

  res.send(calculateFinalPrice(price, discount, tax));
});


// total-exercise-time

function calculateTotalExercisetime(running,cycling,swimming){
  let totalTime = running + cycling + swimming;
  return totalTime.toString();
}

app.get('/total-exercise-time',(req,res)=>{
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);

  res.send(calculateTotalExercisetime(running,cycling,swimming))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
