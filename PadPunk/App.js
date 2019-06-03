let lowPitch = false;
let pitch = "normal";
let root = document.documentElement;
let toggleKey = ""; 

function playSound(e){    
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);


    key.classList.add('playing');
    
    switch(e.keyCode) {
        //Space Bar
        case 32:
            if(audio.paused){
                audio.play();
            }
            else{
                audio.pause();
                key.classList.remove('playing');
            }
        break;
        case 188:
            pitch = "normal";
            switchPitch();
         break;
        case 190:
            pitch = "low";
            switchPitch();
        break;
        case 191:
            pitch = "high";
            switchPitch();
        break;
        default:
          // code block
          audio.currentTime = 0;
          audio.play(); 
         
      } 
  }

  function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }

  function switchPitch(){
      
      switch(pitch) {
            case pitch = "low":
               toggleKey = Array.from(document.querySelectorAll('.toggle:not(.low)'));
               toggleKey.forEach(key => key.classList.remove('playing'));
               root.style.setProperty('--main-color', 'rgb(255, 0, 149)');
               let audioSrc = Array.from(document.querySelectorAll('.has-low'));
               audioSrc.forEach(srcA => srcA.src = srcA.src.replace(/-.*\./, '-low.'));
            break;
            
            case pitch = "high":
                    toggleKey = Array.from(document.querySelectorAll('.toggle:not(.high)'));
                    toggleKey.forEach(key => key.classList.remove('playing'));
                root.style.setProperty('--main-color', "rgb(0, 255, 115)"); 
                let audioSrch = Array.from(document.querySelectorAll('audio'));
                audioSrch.forEach(srcA => srcA.src = srcA.src.replace(/-.*\./, '-high.'));  
                console.log(audioSrch);
            break;

            default:
                    toggleKey = Array.from(document.querySelectorAll('.toggle:not(.normal)'));
                    toggleKey.forEach(key => key.classList.remove('playing'));
                    root.style.setProperty('--main-color', "rgb(0, 217, 255)"); 
                    let audioSrcn = Array.from(document.querySelectorAll('audio'));
                    audioSrcn.forEach(srcA => srcA.src = srcA.src.replace(/-.*\./, '-normal.')); 
                    
                    
  
      }
  }

 

  const keys = Array.from(document.querySelectorAll('.one-shot'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
window.addEventListener('keydown', playSound);