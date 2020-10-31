import React, { Component } from 'react'

export default class Resume extends Component {
    state= {
        aboutYou: '',
        education: '',
        workExperience: '',
        personalProjects: '',
        certifications:''
    }


    render() {
        return (
            <div>
              <div class="d-flex justify-content-center">
                  <p>{this.state.aboutYou}</p>
                  <br/>
                  <p>{this.state.aboutYou}</p>
                  <br/>
                  <p>{this.state.aboutYou}</p>

                  <br/>
              </div>
            </div>
        )
    }
}
