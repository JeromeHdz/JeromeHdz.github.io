let lowPitch = false;
let root = document.documentElement;

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
                if(lowPitch == false){
                    root.style.setProperty('--main-color', 'deeppink');
                    lowPitch = true;
                }
                else{
                    lowPitch = false;
                    root.style.setProperty('--main-color', "rgb(0, 217, 255)");
                    key.classList.remove('playing');
                }
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

 

  const keys = Array.from(document.querySelectorAll('.one-shot'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  
window.addEventListener('keydown', playSound);