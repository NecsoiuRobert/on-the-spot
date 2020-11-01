import React from 'react'
let sayOnce = true;
export default function TextToSpeech({content}) {
    const synthRef = window.speechSynthesis;
    const correct = (text) => {
    const utterThis = new SpeechSynthesisUtterance(text);
    if(utterThis && synthRef){
        utterThis.voice = synthRef.getVoices()[2];
        utterThis.rate = 1;
        utterThis.lang = "en-US";
        synthRef.speak(utterThis);
    }
};

  if(sayOnce){
    correct(content);
    sayOnce = false;
   }
    
    return (
        <div>
            
        </div>
    )
}
