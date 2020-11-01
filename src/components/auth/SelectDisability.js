import React, { Component  } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import DeafIcon from '../../img/deaf.svg'
import BlindIcon from '../../img/blind.svg'
import MuteIcon from '../../img/mute.svg'
import SpeechToText from './SpeechToText';
import TextToSpeech from './TextToSpeech';

class SelectDisability extends Component {
    constructor(props) {
        super(props);
        this.state = { content : null };
    }

   changeContent = (text) => {
       console.log(text);
      this.setState({
          content:text
      })
  }

    render(){
    return (
        <div className="container">
        <TextToSpeech content={'Please select an option, if you are blind please say blind'} />
            <div className="row card" style={{marginTop:'50px', marginBottom:'50px'}}>
            <div className="col-lg-12">
            <p>{this.state.content}</p>
            </div>
            <div className="col-lg-12 text-center">
            <p id="disability-text text-center">Disability</p>
            </div>
            </div>
            
           
            <div className="parent row card" style={{marginBottom:'100px', padding:'50px'}}>

                    <div className="circle-col">
                        {/* <p>I cannot speak</p> */}
                        <Link to={'/signup/deaf'} key="deaf">
                        <div className="circle-container" >
                        <img src={DeafIcon} alt="" className="disability-icon circle-icon" id="deaf-circle"/>
                        </div>
                        </Link>
                    </div>
                
                <div className="circle-col">
                <Link to={'/signup/blind'} key="blind">
                        <div className="circle-container" >
                        <img src={BlindIcon} alt="" className="disability-icon circle-icon" id="blind-circle"/>
                        </div>
                </Link>
                    </div>

                <div className="circle-col">
                <Link to={'/signup/mute'} key="mute">
                        <div className="circle-container" >
                        <img src={MuteIcon} alt="" className="disability-icon circle-icon" id="mute-circle"/>
                        </div>
                        </Link>
                    </div>
                    <Link to={'/signup/recruiter'} key={"recruiter"} style={{marginBottom:'50px'}}>
                </Link>
                </div>
          
                <SpeechToText changeContent={this.changeContent} timeSet ={3000} style={{marginTop:'100px'}}/>
                </div>

    )
    }
}
export default SelectDisability;