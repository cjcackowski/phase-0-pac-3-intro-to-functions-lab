function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  function sayHiToHeadphonedRoommate(string) {
    // Check if the string is lowercase
    if (string.toLowerCase() === string) {
      return "I can't hear you!";
    }
  
    // Check if the string is uppercase
    if (string.toUpperCase() === string) {
      return 'YES INDEED!';
    }
  
    // Check if the string is "Let's have dinner together!"
    if (string === "Let's have dinner together!") {
      return 'I would love to!';
    }
  
    // If none of the conditions match, return a default message
    return 'Hello!';
  }