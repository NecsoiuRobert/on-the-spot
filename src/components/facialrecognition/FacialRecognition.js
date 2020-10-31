import React, { Component } from 'react'
import * as faceapi from 'face-api.js'
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 350,
  height: 350,
  facingMode: 'user',
};

const minConfidence = 0.6

export class FacialRecognition extends Component {
    constructor(props){
        super(props);
        this.fullFaceDescriptions = null;
        this.webcam = React.createRef();
      }
    
      async componentDidMount() {
        await this.loadModels();
      }
      async loadModels () {
        //await faceapi.loadModels(MODEL_URL)
        await faceapi.nets.ssdMobilenetv1.load("/models")
        await faceapi.nets.faceLandmark68Net.load("/models")
        await faceapi.nets.faceRecognitionNet.load("/models")
      }
    
      getFullFaceDescription = async (canvas) => {
        const results = await faceapi
            .detectAllFaces(canvas)
            .withFaceLandmarks()
            .withFaceDescriptors()

          if (!results.length) {
            return
          }
          return results[0].descriptor;
      }


  
    capture = async () => {
      const imageSrc = this.webcam.current.getScreenshot();
      //console.log("Take Picture");
      let img = document.createElement('img');
      img.src = imageSrc;
      let descriptor;
      await this.getFullFaceDescription(img).then(result => {
        descriptor = result;
      }).catch( error => {
        descriptor = null;
      })
      return descriptor;
    };

    matchFace(){

    }
    
      render() {
        return (
          <div className="container" >
         <div className="Webcam" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Webcam
          audio={false}
          height={350}
          ref={this.webcam}
          screenshotFormat="image/jpeg"
          width={350}
          videoConstraints={videoConstraints}
        />
        <img src="/img/cameraIcon.png" alt="Take Pic" height={100}
          onClick={this.capture}
        />
      </div>
          </div>
        );
      }
    }
    

export default FacialRecognition
