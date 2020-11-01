import React from 'react'
import { Link } from 'react-router-dom'
let sayOnce = true;
export default function JobSummary({job}) {
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
    correct("This job has title: " + job.title + " and is about " + job.description);

    return (
        <div className="col-lg-12">
      
        <div className="card list-card">
        <div className="card-horizontal">
            <div className="img-square-wrapper">
                <img className="" src="http://via.placeholder.com/180x180" alt="Card image cap"/>
            </div>
            <div className="card-body">
                <h4 className="card-title">{job.title}</h4>
                <p className="card-text">{job.description}</p>
                <a href="#" className="btn btn-primary" style={{marginRight:'10px'}}>Apply</a>
                <Link to={'/job/'+job.id} className="btn btn-success">See details</Link>
            </div>
        </div>
    </div>
        </div>

    )
}
