document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
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

