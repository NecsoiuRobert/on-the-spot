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
        <TextToSpeech content={'Please select your disability'} />
            <div className="row">
            <p>{this.state.content}</p>
                <div className="col-lg-12">
                </div>
            </div>
            <div className="row card" id="bla">
            <div className="row"></div>
            <p id="disability-text">Disability</p>
                <Link to={'/signup/deaf'} key="deaf">
                    <div className="dcol-lg-4 col-sm-12">
                        {/* <p>I cannot speak</p> */}
                        <div className="circle-container" >
                        <img src={DeafIcon} alt="" className="disability-icon circle-icon" id="deaf-circle"/>
                        </div>
                        
                    </div>
                </Link>
                <Link to={'/signup/blind'} key="blind">
                <div className="col-lg-4 col-sm-12">
                        <div className="circle-container" >
                        <img src={BlindIcon} alt="" className="disability-icon circle-icon" id="blind-circle"/>
                        </div>
                        
                    </div>
                </Link>
                <Link to={'/signup/mute'} key="mute">
                <div className="col-lg-4 col-sm-12">
                        <div className="rcircle-container" >
                        <img src={MuteIcon} alt="" className="disability-icon circle-icon" id="mute-circle"/>
                        </div>
                        
                    </div>
                </Link>
                
                <SpeechToText changeContent={this.changeContent} timeSet ={3000}/>
    
                </div>
            </div>

    )
    }
}
export default SelectDisability;