import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
let sayOnce = true;
let finished = false;
const SpeechToText = ({changeContent, timeSet,content}) => {
  
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
  const synthRef = window.speechSynthesis;
 const correct = (text) => {
    const utterThis = new SpeechSynthesisUtterance(text);
    if(utterThis && synthRef){
        utterThis.voice = synthRef.getVoices()[0];
        utterThis.rate = 1.5;
        utterThis.lang = "en-US";
        synthRef.speak(utterThis);
    }
};

  if(sayOnce){
    correct('If you are unable to see say blind');
    sayOnce = false;
   }
if(!finished){
  SpeechRecognition.startListening({continous:true});

setTimeout(() => {
  SpeechRecognition.stopListening()
  
  changeContent(transcript);
},timeSet);

finished = true;
}

  // const onClickHandle = () =>{
  //   SpeechRecognition.stopListening()
  //   changeContent(transcript);
  // }
  return (
    <div>
      {/* <button onClick={onClickHandle}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
    */}
    </div>
  )
}
export default SpeechToText