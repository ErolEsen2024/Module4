// Wrap the entire contents of SpeakHello.js inside of an IIFE
(function (window) {


// Create an object, called 'helloSpeaker' in the global context
// and add the "speak" method

var helloSpeaker = {};

var speakWord = "Hello";

// attach speak method to the helloSpeaker object 
// instead of being a standalone function.
function speak(name) {
  console.log(speakWord + " " + name);
}

helloSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
};

// Expose the 'helloSpeaker' object to the global scope. 
// Name it 'helloSpeaker' on the global scope as well.
window.helloSpeaker = helloSpeaker;
}) (window);