// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
  let HQ = 42
  return Math.abs(HQ - someValue)
}

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264

}

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264
}

function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) < 400) {
    price = 0;
  }
  else if (distanceTravelledInFeet(start, destination) < 2000) {
    price = (distanceTravelledInFeet(start, destination) - 400) * .02;
  }
  else if (distanceTravelledInFeet(start, destination) > 2500) {
    price = "cannot travel that far";
  }
  else if (distanceTravelledInFeet(start, destination) > 2000) {
    price = 25;
  }
  return price;
}
