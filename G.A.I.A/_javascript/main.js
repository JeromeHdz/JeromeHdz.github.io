document.addEventListener('DOMContentLoaded', () => {
  


  ///////////////////////////////////////////////////
/////////////////Speech Recognition////////////////
///////////////////////////////////////////////////
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

console.log("test");

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let li = document.createElement('li');
const messagesBox = document.querySelector(".messages-box");
const loading = document.querySelector(".loading-msg");
//messagesBox.appendChild(li);

recognition.addEventListener("result", e => {
  //console.log(e);

  

  const transcript = Array.from(e.results)
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');
  
  li.className = "me";
  li.textContent = transcript;
  if(e.results[0].isFinal){
    loading.style.opacity = "0";
    messagesBox.insertBefore(li, loading);
    li = document.createElement('li');
  }else{
    loading.style.opacity = "1";
  }
  console.log(transcript);
});

recognition.addEventListener("end", recognition.start);

recognition.start();

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

});

///////////////////////////////////////////////////
/////////////////Speech Ynthesis////////////////
///////////////////////////////////////////////////
var voices = [];
const msg = new SpeechSynthesisUtterance();

msg.text = document.querySelector(".start").textContent;
msg.pitch = 3;
msg.rate = 3;

window.speechSynthesis.onvoiceschanged = function() {
  voices = window.speechSynthesis.getVoices();
  msg.voice = voices.find(voice => voice.lang === "fr-FR");
  speechSynthesis.speak(msg);
};


///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

