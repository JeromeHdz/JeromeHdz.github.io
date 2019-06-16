'use strict';

document.addEventListener('DOMContentLoaded', function () {

  ///////////////////////////////////////////////////
  /////////////////Speech Recognition////////////////
  ///////////////////////////////////////////////////
  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  console.log("test");

  var recognition = new SpeechRecognition();
  recognition.interimResults = true;

  var li = document.createElement('li');
  var messagesBox = document.querySelector(".messages-box");
  var loading = document.querySelector(".loading-msg");
  //messagesBox.appendChild(li);

  recognition.addEventListener("result", function (e) {
    //console.log(e);


    var transcript = Array.from(e.results).map(function (result) {
      return result[0];
    }).map(function (result) {
      return result.transcript;
    }).join('');

    li.className = "me";
    li.textContent = transcript;
    if (e.results[0].isFinal) {
      loading.style.opacity = "0";
      messagesBox.insertBefore(li, loading);
      li = document.createElement('li');
    } else {
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
var msg = new SpeechSynthesisUtterance();

msg.text = document.querySelector(".start").textContent;
msg.pitch = 3;
msg.rate = 3;

window.speechSynthesis.onvoiceschanged = function () {
  voices = window.speechSynthesis.getVoices();
  msg.voice = voices.find(function (voice) {
    return voice.lang === "fr-FR";
  });
  speechSynthesis.speak(msg);
};

///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////