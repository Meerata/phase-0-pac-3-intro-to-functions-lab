// Define function shout(string) that returns the string in all uppercase
function shout(string) {
  return string.toUpperCase();
}

// Define function whisper(string) that returns the string in all lowercase
function whisper(string) {
  return string.toLowerCase();
}

// Define function logShout(string) that logs the string in all uppercase
function logShout(string) {
  console.log(string.toUpperCase());
}

// Define function logWhisper(string) that logs the string in all lowercase
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// Define function sayHiToHeadphonedRoommate(string) that returns different strings based on input
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}

// Export functions for testing
module.exports = {
  shout,
  whisper,
  logShout,
  logWhisper,
  sayHiToHeadphonedRoommate,
};
