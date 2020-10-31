import React, { Component  } from 'react';
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import DeafIcon from '../../img/deaf.png'
import BlindIcon from '../../img/blind.png'
import MuteIcon from '../../img/mute.png'
import SpeechToText from './SpeechToText';


class SelectDisability extends Component {
    constructor(props) {
        super(props);
        this.state = { content : null };
    }

   changeContent = (text) => {
      this.setState({
          content:text
      })
  }

    render(){
    return (
        <div className="container">
        
       <SpeechToText changeContent={this.changeContent} timeSet ={3000} content={'asdasdasd'}/>
            <div className="row">
            <p>{this.state.content}</p>
                <div className="col-lg-12">
                <button onClick={()=> this.correct('If you are unable to see say blind')} id ="starttalk"> In case audio doesnt work</button>
                <h1>We understand you</h1>
                    <p>please select your disability</p>
                </div>
            </div>
                <div className="row">
                <Link to={'/signup/deaf'} key="deaf">
                    <div className="col-lg-4 col-sm-12">
                        <p>I cannot speak</p>
                        <img src={DeafIcon} alt="" className="disability-icon"/>
                    </div>
                </Link>
                <Link to={'/signup/blind'} key="blind">
                <div className="col-lg-4 col-sm-12">
                    <p>I cannot see</p>
                        <img src={BlindIcon} alt="" className="disability-icon"/>
                    </div>
                </Link>
                <Link to={'/signup/mute'} key="mute">
                <div className="col-lg-4 col-sm-12">
                    <p>I cannot speak and talk</p>
                        <img src={MuteIcon} alt="" className="disability-icon"/>
                    </div>
                </Link>
    
                </div>
            </div>
    )
    }
}
export default SelectDisability;