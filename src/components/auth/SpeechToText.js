import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
let sayOnce = true;
let finished = false;
const SpeechToText = ({changeContent, timeSet}) => {
  
  const { transcript, resetTranscript } = useSpeechRecognition()

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null
  }
  SpeechRecognition.startListening({continous:true});
  const onClickHandler = () => {
    SpeechRecognition.stopListening();
    changeContent(transcript);
  }

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={onClickHandler}>Stop</button>
    </div>
  )
}
export default SpeechToText