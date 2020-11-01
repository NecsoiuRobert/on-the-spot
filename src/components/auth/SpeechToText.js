import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
let sayOnce = true;
let finished = false;
const SpeechToText = ({changeContent, timeSet}) => {
  
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }

  const onClickHandler = () => {
    SpeechRecognition.stopListening();
    changeContent(transcript);
  }

  return (
    <div>
      <button type="button" class="btn btn-primary" onClick={SpeechRecognition.startListening({continous:true})}>Start</button>
      <button type="button" class="btn btn-primary" onClick={onClickHandler}>Stop</button>
    </div>
  )
}
export default SpeechToText