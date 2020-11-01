import React, { Component } from 'react'
import * as faceapi from 'face-api.js'
import Webcam from 'react-webcam';
import tfjs from '@tensorflow/tfjs';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {signIn} from '../../store/actions/authActions'
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
        let final = null;
        await this.getFullFaceDescription(img).then(result => {
          descriptor = result;
          //console.log(descriptor);
        }).catch( error => {
          descriptor = null;
          final = null;
          console.log(error);
        })
  
        console.log(descriptor);
        return descriptor;
      };
    getLabeledFaceDescriptors(){
      let finalDescriptors = this.props.users.filter(user => user.faceLabel)
      .map(user => {
        return {
          email: user.email,
          'faceData':  new Float32Array(Object.values((JSON.parse(JSON.stringify(user.faceLabel)))))
        }
      });
      //console.log(finalDescriptors);
      let result = finalDescriptors
      .map(user => new faceapi.LabeledFaceDescriptors(user.email, [user.faceData]));
     // console.log(finalDescriptors);
      return result;
    }
    
    matchFace = async () => {
     // console.log(this.props.users);
      let usersToDescriptors = this.getLabeledFaceDescriptors();
      let final = null;
      
      const imageSrc = this.webcam.current.getScreenshot();
      let img = document.createElement('img');
        img.src = imageSrc;
        let descriptor;
        await this.getFullFaceDescription(img).then(result => {
          const faceMatcher = new faceapi.FaceMatcher(usersToDescriptors,minConfidence);
            if(faceMatcher){
              final = faceMatcher.findBestMatch(result);
              let user = this.props.users.filter(user => {
                return user.email === final._label;
              });
              this.props.signIn({email:user[0].email,password:user[0].password})
            }else{
              console.log('bau');
            }
        }).catch( error => {
          descriptor = null;
          final = null;
          console.log(error);
        })
      // const labeled = new faceapi.LabeledFaceDescriptors('eu',[descriptor]);
      // if(labeled){
      //   const faceMatcher = new faceapi.FaceMatcher(labeled,minConfidence);
      //   if(faceMatcher){
      //     final = faceMatcher.findBestMatch(descriptor);
      //   }else{
      //     console.log('bau');
      //   }
      //}
    }
    
      render() {
        return (

          <div className="container" >
          <div className="row">
            <div className="col-lg-12">
            <div className=" max-card">
            <h3 className="text-center border-bottom" style={{marginBottom:'20px'}}>Login with facial recognition</h3>
        <Webcam className="webcam-container"
          audio={false}
          height={200}
          ref={this.webcam}
          screenshotFormat="image/jpeg"
          width={200}
          videoConstraints={videoConstraints}
          style={{margin:'auto', display:'block', marginBottom:'50px'}}
        />
  
        <button className="btn btn-primary" onClick={this.matchFace}>Login</button>
</div>
            </div>
          </div>
          </div>
        );
      }
    }
    
const mapStateToProps = (state) => {
     // console.log(state);
      return {
          users: state.firestore.ordered.users,
      }
}
const mapDispatchToProps = (dispatch) => {
  return {
      signIn : (credentials) => dispatch(signIn(credentials))
  }
}
export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
      { collection: 'users' }
  ])
)(FacialRecognition)
