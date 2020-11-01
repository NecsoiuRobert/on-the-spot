import React, { Component } from 'react'
import * as faceapi from 'face-api.js'
import Webcam from 'react-webcam';
import tfjs from '@tensorflow/tfjs';
import { connect } from 'react-redux';
import {facialRegister}from '../../store/actions/authActions';
const videoConstraints = {
  width: 350,
  height: 350,
  facingMode: 'user',
};

const minConfidence = 0.6

export class FacialRecognitionRegister extends Component {
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
      let final = null;
      await this.getFullFaceDescription(img).then(result => {
        descriptor = result;
        console.log(descriptor);

        const labeled = new faceapi.LabeledFaceDescriptors('eu',[descriptor]);
        if(labeled){
          final = labeled;
        }else{
          console.log('bau2')
        }

      }).catch( error => {
        descriptor = null;
        final = null;
        console.log(error);
      })

      
      return descriptor;
    };

    matchFace = async () => {
        await this.capture().then( result =>{
            this.props.facialRegister(result,this.props.auth.uid);
        })
    }
    
    render() {
      return (

        <div className="container" >
        <div className="row">
          <div className="col-lg-12">
          <div className=" max-card">
          <h3 className="text-center border-bottom" style={{marginBottom:'20px'}}>Register with facial recognition</h3>
      <Webcam className="webcam-container"
        audio={false}
        height={200}
        ref={this.webcam}
        screenshotFormat="image/jpeg"
        width={200}
        videoConstraints={videoConstraints}
        style={{margin:'auto', display:'block', marginBottom:'50px'}}
      />

      <button class="btn btn-primary" onClick={this.matchFace}>Register</button>
</div>
          </div>
        </div>
        </div>
      );
    }
    }
    
const mapStateToProps = (state) => {
    console.log(state.firebase.auth);
    return {
        auth: state.firebase.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        facialRegister : (label,userId) => dispatch(facialRegister(label,userId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(FacialRecognitionRegister)
